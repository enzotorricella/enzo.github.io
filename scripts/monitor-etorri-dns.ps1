param(
  [string]$Domain = "etorri.com.ar",
  [string]$ExpectedA = "2.25.159.154",
  [string[]]$ExpectedNs = @("olga.ns.cloudflare.com", "salvador.ns.cloudflare.com"),
  [int]$IntervalSeconds = 300,
  [int]$TimeoutHours = 24,
  [switch]$Once
)

$ErrorActionPreference = "Continue"

$root = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
$logDir = Join-Path $root "logs"
New-Item -ItemType Directory -Force -Path $logDir | Out-Null

$csvPath = Join-Path $logDir "etorri-dns-monitor.csv"
$statusPath = Join-Path $logDir "etorri-dns-status.txt"

function Normalize-Name {
  param([string]$Value)
  if ([string]::IsNullOrWhiteSpace($Value)) { return "" }
  return $Value.Trim().TrimEnd(".").ToLowerInvariant()
}

function Query-Records {
  param(
    [string]$Name,
    [string]$Type,
    [string]$Server = $null
  )

  try {
    $params = @{
      Name = $Name
      Type = $Type
      ErrorAction = "Stop"
    }
    if ($Server) {
      $params.Server = $Server
    }

    return @(Resolve-DnsName @params)
  }
  catch {
    return @()
  }
}

function Test-Https {
  param([string]$Url)

  try {
    $response = Invoke-WebRequest -Uri $Url -UseBasicParsing -TimeoutSec 20 -ErrorAction Stop
    $title = ""
    if ($response.Content -match "<title>([^<]+)") {
      $title = $Matches[1].Trim()
    }

    return @{
      Ok = $true
      Status = [string]$response.StatusCode
      Title = $title
      Error = ""
    }
  }
  catch {
    return @{
      Ok = $false
      Status = ""
      Title = ""
      Error = $_.Exception.Message
    }
  }
}

if (-not (Test-Path -LiteralPath $csvPath)) {
  "timestamp,system_ns_ok,cf_ns_ok,google_ns_ok,system_a_ok,cf_auth_a_ok,www_ok,https_ok,summary" | Out-File -FilePath $csvPath -Encoding utf8
}

$started = Get-Date
$deadline = $started.AddHours($TimeoutHours)

while ($true) {
  $now = Get-Date
  $timestamp = $now.ToString("yyyy-MM-dd HH:mm:ss")

  $systemNs = Query-Records -Name $Domain -Type NS
  $cfNs = Query-Records -Name $Domain -Type NS -Server "1.1.1.1"
  $googleNs = Query-Records -Name $Domain -Type NS -Server "8.8.8.8"
  $systemA = Query-Records -Name $Domain -Type A
  $cfAuthA = Query-Records -Name $Domain -Type A -Server "salvador.ns.cloudflare.com"
  $www = Query-Records -Name "www.$Domain" -Type CNAME
  $https = Test-Https -Url "https://$Domain"

  $expectedNsNormalized = @($ExpectedNs | ForEach-Object { Normalize-Name $_ })
  $systemNsNames = @($systemNs | Where-Object NameHost | ForEach-Object { Normalize-Name $_.NameHost })
  $cfNsNames = @($cfNs | Where-Object NameHost | ForEach-Object { Normalize-Name $_.NameHost })
  $googleNsNames = @($googleNs | Where-Object NameHost | ForEach-Object { Normalize-Name $_.NameHost })

  $systemNsOk = @($expectedNsNormalized | Where-Object { $systemNsNames -contains $_ }).Count -eq $expectedNsNormalized.Count
  $cfNsOk = @($expectedNsNormalized | Where-Object { $cfNsNames -contains $_ }).Count -eq $expectedNsNormalized.Count
  $googleNsOk = @($expectedNsNormalized | Where-Object { $googleNsNames -contains $_ }).Count -eq $expectedNsNormalized.Count
  $systemAOk = @($systemA | Where-Object { $_.IPAddress -eq $ExpectedA }).Count -gt 0
  $cfAuthAOk = @($cfAuthA | Where-Object { $_.IPAddress -eq $ExpectedA }).Count -gt 0
  $wwwOk = @($www | Where-Object { (Normalize-Name $_.NameHost) -eq (Normalize-Name $Domain) }).Count -gt 0
  $httpsOk = [bool]$https.Ok -and $https.Title -like "ETorri*"

  if ($httpsOk) {
    $summary = "PUBLIC_OK"
  }
  elseif ($systemNsOk -and $systemAOk) {
    $summary = "DNS_OK_HTTPS_PENDING"
  }
  elseif ($cfAuthAOk) {
    $summary = "CLOUDFLARE_OK_DELEGATION_PENDING"
  }
  else {
    $summary = "PENDING"
  }

  $line = '"{0}",{1},{2},{3},{4},{5},{6},{7},"{8}"' -f $timestamp,$systemNsOk,$cfNsOk,$googleNsOk,$systemAOk,$cfAuthAOk,$wwwOk,$httpsOk,$summary
  Add-Content -Path $csvPath -Value $line -Encoding utf8

  $status = @(
    "Timestamp: $timestamp",
    "Domain: $Domain",
    "Summary: $summary",
    "System NS OK: $systemNsOk",
    "Cloudflare resolver NS OK: $cfNsOk",
    "Google resolver NS OK: $googleNsOk",
    "System A OK: $systemAOk",
    "Cloudflare authoritative A OK: $cfAuthAOk",
    "WWW CNAME OK: $wwwOk",
    "HTTPS OK: $httpsOk",
    "HTTPS status: $($https.Status)",
    "HTTPS title: $($https.Title)",
    "HTTPS error: $($https.Error)",
    "CSV: $csvPath"
  )
  $status | Out-File -FilePath $statusPath -Encoding utf8

  Write-Host "[$timestamp] $summary - NS:$systemNsOk A:$systemAOk HTTPS:$httpsOk"

  if ($httpsOk) {
    [console]::beep(880, 600)
    break
  }

  if ($Once -or $now -ge $deadline) {
    break
  }

  Start-Sleep -Seconds $IntervalSeconds
}
