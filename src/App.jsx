import {
  ArrowRight,
  BadgeCheck,
  Cpu,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Network,
  Phone,
  Wrench,
} from "lucide-react";
import profilePhoto from "./assets/profile.png";
import ciscoJuniorCybersecurityLogo from "./assets/cisco-junior-cybersecurity-analyst.png";
import freeCodeCampLogo from "./assets/freecodecamp-logo.png";
import fourtechLogo from "./assets/fourtech.png";
import eventStaffLogo from "./assets/eventstaff-brand-mark.svg";
import kardexaLogo from "./assets/kardexa-logo.png";
import talvoDryLogo from "./assets/talvo-dry-brand-mark.svg";
import udemyLogo from "./assets/udemy.png";

const itsurLogo =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAOVBMVEX8awD8bQD8bAD/cAD/bQD/YgD/kEP/toL/////+/b/zq7/dhr/3cj/wZn/oW3/gC//pHT/nF//9e2TrBk+AAAAA3RSTlPg8PD6lQffAAAAoklEQVR4Aa2TBRKAMAwEaylJ6vz/sbgTxrjaTbcuSmkjSCtlrCijtHWC/oMAbxAWeb+aM4QOiThExBiYCDs4Q8axPhEipThafkIWYCKimMf6MRttusBSc06pzTHnWq5bAYCQInNMYbTPfULuEfsGzroXWCeYYbSvPYlEWBJzKq/QgucY2Qs9K33OuUKpJwnQWd+at9Jlw6hf35AAPx/113cYAGjVDxUpfkcFAAAAAElFTkSuQmCC";

const blcLogo =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAaVBMVEX////+9PP82dj1iYXxLCHvAADwHxH1f3v70tD8397yTkfwAADwFADxOjL3o6D2jor1hH/0bmn95OPyVU/xNCvzX1n3oZ76wsD+7u37zMr2kIz0cm3yQzz5urf/+fjzWlX3mpb4sa74qqdZAcIOAAAAxElEQVR4AYyShRGAQAwEscPd3frvEWfyOIuzr0m4//D8gxBECROyol6UpsMwFwxYJ23vagZwWOfCPACP7WeegLg7nxzZfd6A5jOwE24LBZkoTrQ0VW0LyBaZLx0BQ8loGapcLE8Lc6ey4o5Eyx2TigTulhpotHXVVSs6HX+Q8rLqTDEAGAbQnnqnuQGDDQ/he2QW25Hrd0WQ1K6R9ckGxkNg2cCz8jllqJ+TbXjcgZhZMcA/FhhorYTgSpiQ2nGEEzVhAACwwRFlR/NkmgAAAABJRU5ErkJggg==";

const ignitionBadge =
  "https://inductiveuniversity.com/static/images/badges/credentials/Credential_Badge_8.3_complete.43973076c5cc.svg";

const contact = {
  email: "enzo.torricella25@gmail.com",
  linkedin: "https://www.linkedin.com/in/enzo-torricella/",
  github: "https://github.com/enzotorricella",
  whatsapp:
    "https://wa.me/5493534013372?text=Hola%20Enzo%2C%20quiero%20conversar%20sobre%20una%20oportunidad%20.NET%20o%20IT%2FOT",
};

const opportunityMailto = `mailto:${contact.email}?subject=Oportunidad%20.NET%20%2F%20IT-OT&body=Hola%20Enzo%2C%20vi%20tu%20perfil%20ETorri%20y%20me%20gustaria%20conversar%20sobre%20una%20oportunidad.`;

const profileCards = [
  {
    title: "Desarrollo .NET",
    subtitle: "C#, SQL Server, MAUI, WPF",
    text: "Construyo y mantengo aplicaciones con foco en datos, soporte y operación real",
    icon: Cpu,
  },
  {
    title: "Industrial / IT-OT",
    subtitle: "SCADA/SOTR, HMI, redes",
    text: "Entiendo el cruce entre software, equipos, datos y procesos industriales",
    icon: Wrench,
  },
  {
    title: "Redes y soporte",
    subtitle: "Troubleshooting, clientes, producción",
    text: "Puedo diagnosticar fallas, documentar, acompañar usuarios y resolver incidentes",
    icon: Network,
  },
];

const metrics = [
  { value: "+3 años", label: "dando soporte técnico y de aplicaciones" },
  { value: "3 líneas", label: "productos propios en desarrollo/comercialización" },
  { value: "IT + operación", label: "criterio para sistemas de uso real" },
  { value: "Base Industrial", label: "Electricidad, Redes y Documentación técnica" },
];

const projects = [
  {
    name: "EventStaff",
    logo: eventStaffLogo,
    badge: "Eventos / QR",
    text: "Registro, acreditación y control de asistentes con QR",
    tech: ["ASP.NET Core", "React", "SQL Server", "QR"],
    link: "https://www.eventchecking.com.ar/",
    cta: "Ver sitio",
  },
  {
    name: "Kardexa",
    logo: kardexaLogo,
    badge: ".NET MAUI / POS",
    text: "POS liviano para ventas, stock y operación diaria",
    tech: [".NET MAUI", "Android", "Windows", "SQLite"],
    link: "#contact",
    cta: "Pedir demo",
  },
  {
    name: "Talvo Dry",
    logo: talvoDryLogo,
    badge: "Mobile / Control",
    text: "Control mobile de conductores, registros y novedades",
    tech: [".NET MAUI", "Mobile", "Formularios", "Reglas"],
    link: "#contact",
    cta: "Conversar",
  },
];

const stackGroups = [
  {
    title: "Desarrollo",
    items: ["C#", ".NET", ".NET MAUI", "WPF", "ASP.NET Core"],
  },
  {
    title: "Datos",
    items: ["SQL Server", "MySQL", "consultas SQL", "depuración de datos"],
  },
  {
    title: "Industrial / IT-OT",
    items: ["SCADA/SOTR", "HMI", "PLC/Ladder", "OPC UA", "alarmas", "documentación técnica"],
  },
  {
    title: "Soporte / Redes",
    items: ["Redmine", "Docker", "MikroTik", "switches", "DHCP", "Linux", "Bash", "VirtualBox"],
  },
];

const credentials = [
  {
    title: "Ignition 8.3",
    issuer: "Inductive Automation",
    logo: ignitionBadge,
    date: "Jun. 2026",
    link: contact.linkedin,
    cta: "Ver en LinkedIn",
  },
  {
    title: "Programación en C#, WPF, .NET",
    issuer: "Udemy",
    logo: udemyLogo,
    date: "Sept. 2025",
    link: contact.linkedin,
    cta: "Ver perfil",
  },
  {
    title: "Foundational C# with Microsoft",
    issuer: "freeCodeCamp / Microsoft",
    logo: freeCodeCampLogo,
    date: "Feb. 2025",
    link: "https://www.freecodecamp.org/learn/foundational-c-sharp-with-microsoft",
    cta: "Ver programa",
  },
  {
    title: "Junior Cybersecurity Analyst",
    issuer: "Cisco / Credly",
    logo: ciscoJuniorCybersecurityLogo,
    date: "Ago. 2023",
    link: "https://www.credly.com/badges/26831d7b-31bd-4630-8e5d-4be8e0094e44/public_url",
    cta: "Ver credencial",
  },
];

const experience = [
  "Trabajé como soporte de aplicaciones, debugging de software, análisis de bases de datos y atención a clientes",
  "He desarrollado, comercializado y personalizado productos base según los requerimientos de mis clientes",
  "Mi formación industrial suma relevamiento eléctrico, redes, planimetría y construcción de sistemas SCADA/HMI",
];

const workHistory = [
  {
    initials: "IT",
    company: "ITsur",
    logo: itsurLogo,
    url: "https://itsur.com.ar/",
    role: "Analista de soporte de aplicaciones",
    period: "2025 - 2026",
    focus: "Fintech · .NET · SQL · clientes",
    bullets: ["Incidentes en producción", "Debugging .NET/VB.NET/WPF/MAUI"],
  },
  {
    initials: "FT",
    company: "Fourtech",
    logo: fourtechLogo,
    url: "https://www.fourtech.com.ar/",
    role: "Proyectista Jr",
    period: "2023 - 2024",
    focus: "Automatización · documentación técnica",
    bullets: ["Relevamientos eléctricos", "Diagramas e ingeniería preliminar"],
  },
  {
    initials: "BLC",
    company: "BLC Global",
    logo: blcLogo,
    url: "https://blcglobal.net/",
    role: "Soporte correctivo IT",
    period: "2022 - 2023",
    focus: "SCADA/SOTR · redes · campo",
    bullets: ["Diagnóstico hardware/software", "Soporte industrial y telecomunicaciones"],
  },
];

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0b1326] text-[#dae2fd] antialiased">
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(249,115,22,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(249,115,22,0.045)_1px,transparent_1px)] bg-[size:32px_32px]" />
      <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-800/80 bg-[#0b1326]/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
          <a href="#profile" className="font-mono text-sm font-bold uppercase tracking-[0.18em] text-orange-400">
            ETorri
          </a>
          <nav className="hidden items-center gap-7 md:flex">
            {[
              ["Perfil", "#about"],
              ["Experiencia", "#experience"],
              ["Proyectos", "#projects"],
              ["Stack", "#stack"],
            ].map(([label, href]) => (
              <a key={href} href={href} className="font-mono text-xs uppercase tracking-[0.14em] text-slate-400 transition hover:text-orange-300">
                {label}
              </a>
            ))}
          </nav>
          <a href="#contact" className="rounded bg-orange-500 px-4 py-2 font-mono text-xs font-bold uppercase tracking-[0.12em] text-white transition hover:bg-orange-400">
            Contacto
          </a>
        </div>
      </header>

      <section id="profile" className="relative overflow-hidden border-b border-slate-800 bg-[#0b1326] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(249,115,22,0.17),transparent_36%),radial-gradient(circle_at_100%_100%,rgba(0,163,255,0.12),transparent_42%)]" />
        <div className="relative mx-auto grid min-h-[92vh] max-w-7xl content-center gap-12 px-5 pb-16 pt-28 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div>
            <div className="flex items-center gap-4">
              <img
                src={profilePhoto}
                alt="Foto de Enzo Torricella"
                className="h-16 w-16 rounded-full border-2 border-orange-300/80 object-cover shadow-lg shadow-orange-950/40"
              />
              <div>
                <p className="text-sm font-semibold text-white">Enzo Torricella</p>
                <p className="mt-1 text-sm text-slate-400">
                  Rosario, Argentina · Disponible para oportunidades
                </p>
              </div>
            </div>
            <div className="mt-7 inline-flex rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
              .NET + soporte + contexto técnico
            </div>
            <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
              Desarrollo .NET, soporte y datos para <span className="text-orange-400">operación real</span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
              Me interesa trabajar en sistemas que necesitan funcionar bien, explicar datos y resolver problemas concretos
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <PrimaryLink href={contact.linkedin}>Contactar por LinkedIn</PrimaryLink>
              <SecondaryLink href={opportunityMailto}>
                Contactar por email
              </SecondaryLink>
              <SecondaryLink href="#projects">Ver proyectos</SecondaryLink>
            </div>
          </div>

          <div className="relative lg:self-center">
            <div className="relative overflow-hidden rounded-lg border border-slate-700/80 bg-[#131b2e] p-5 shadow-2xl shadow-black/30 sm:p-6">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(56,189,248,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.055)_1px,transparent_1px)] bg-[size:28px_28px]" />
              <div className="relative grid gap-3">
                {profileCards.map((card) => (
                  <HeroSignal key={card.title} {...card} />
                ))}
              </div>
              <div className="relative mt-6 grid grid-cols-3 gap-2">
                <span className="h-1 rounded bg-orange-400" />
                <span className="h-1 rounded bg-sky-400" />
                <span className="h-1 rounded bg-emerald-400" />
              </div>
            </div>
            <div className="absolute -right-3 -top-3 h-24 w-24 rounded-tr-lg border-r border-t border-orange-400/50" />
            <div className="absolute -bottom-3 -left-3 h-24 w-24 rounded-bl-lg border-b border-l border-orange-400/50" />
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-4">
          {metrics.map((metric) => (
            <article
              key={metric.value}
              className="rounded-lg border border-slate-800 bg-[#131b2e] p-5 transition duration-300 hover:-translate-y-1 hover:border-orange-400/70 hover:bg-[#171f33]"
            >
              <p className="text-2xl font-bold text-sky-300">{metric.value}</p>
              <p className="mt-2 font-mono text-xs uppercase leading-5 tracking-[0.12em] text-slate-400">{metric.label}</p>
            </article>
          ))}
        </div>
      </section>

      <Section id="about" eyebrow="Perfil de trabajo" title="Software, soporte y criterio técnico en un mismo perfil">
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-lg border border-slate-800 bg-[#131b2e] p-6">
            <h3 className="text-2xl font-semibold">Ámbitos donde encajo</h3>
            <p className="mt-4 leading-8 text-slate-400">
              Equipos que necesitan mantener sistemas, resolver incidentes,
              revisar datos y comunicarse con usuarios técnicos o de operación
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Desarrollo .NET", "Soporte de aplicaciones", "SQL y datos", "IT/OT inicial", "Electricidad industrial"].map(
                (item) => (
                  <span key={item} className="rounded border border-sky-400/20 bg-sky-400/10 px-3 py-2 font-mono text-xs font-semibold uppercase tracking-[0.08em] text-sky-300">
                    {item}
                  </span>
                ),
              )}
            </div>
          </div>

          <div className="grid gap-3">
            {experience.map((item) => (
              <div key={item} className="flex gap-3 rounded-lg border border-slate-800 bg-[#131b2e] p-4">
                <BadgeCheck className="mt-1 h-5 w-5 shrink-0 text-emerald-600" />
                <p className="leading-7 text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section id="experience" eyebrow="Experiencia" title="Experiencia laboral relacionada">
        <div className="grid gap-5 lg:grid-cols-3">
          {workHistory.map((job) => (
            <WorkCard key={job.company} {...job} />
          ))}
        </div>
      </Section>

      <Section id="projects" eyebrow="Productos propios" title="Productos en desarrollo">
        <div className="grid gap-5 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.name} {...project} />
          ))}
        </div>
      </Section>

      <Section id="stack" eyebrow="Stack" title="Tecnologías con las que he trabajado">
        <div id="skills" className="scroll-mt-24" />
        <div className="grid gap-5 md:grid-cols-2">
          {stackGroups.map((group) => (
            <article key={group.title} className="rounded-lg border border-slate-800 bg-[#131b2e] p-6 transition hover:border-orange-400/70">
              <h3 className="text-lg font-semibold text-white">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="rounded border border-slate-700 bg-[#0b1326] px-3 py-2 font-mono text-xs uppercase tracking-[0.08em] text-slate-300">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section id="credentials" eyebrow="Formación" title="Credenciales relevantes">
        <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
          {credentials.map((credential) => (
            <CredentialCard key={credential.title} {...credential} />
          ))}
        </div>
      </Section>

      <section id="contact" className="relative border-t border-slate-800 bg-[#060e20] px-5 py-20 text-white sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(249,115,22,0.12),transparent_38%),radial-gradient(circle_at_100%_100%,rgba(0,163,255,0.10),transparent_40%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_420px] lg:items-center">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">Contacto</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">Podés ponerte en contacto por estos <span className="text-orange-300">medios</span></h2>
          </div>
          <div className="grid gap-3">
            <ContactLink href={contact.linkedin} icon={Linkedin} label="Contactar por LinkedIn" />
            <ContactLink href={opportunityMailto} icon={Mail} label={contact.email} />
            <ContactLink href={contact.whatsapp} icon={Phone} label="WhatsApp" />
            <ContactLink href={contact.github} icon={Github} label="GitHub" />
          </div>
        </div>
      </section>
    </main>
  );
}

function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="relative mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
      <div className="mb-8 max-w-3xl">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">{eyebrow}</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-orange-300 md:text-4xl">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function HeroSignal({ title, subtitle, icon: Icon }) {
  return (
    <div className="flex items-center gap-4 rounded-lg border border-slate-700/80 bg-[#171f33]/90 px-4 py-3 backdrop-blur-md">
      <span className="rounded bg-sky-400/10 p-2 text-sky-300">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <p className="font-semibold text-white">{title}</p>
        <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-sky-300">{subtitle}</p>
      </div>
    </div>
  );
}

function ProjectCard({ name, logo, badge, text, tech, link, cta }) {
  return (
    <article className="group flex min-h-[300px] flex-col rounded-lg border border-slate-800 bg-[#131b2e] p-5 transition duration-300 hover:-translate-y-1 hover:border-orange-400/70 hover:bg-[#171f33]">
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-lg border border-slate-700 bg-[#071126] p-2">
          <img src={logo} alt={`Logo de ${name}`} className="h-full w-full object-contain" />
        </div>
        <span className="rounded border border-sky-400/20 bg-sky-400/10 px-3 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-sky-300">
          {badge}
        </span>
      </div>
      <h3 className="mt-5 text-2xl font-bold text-white">{name}</h3>
      <p className="mt-3 min-h-[56px] leading-7 text-slate-400">{text}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tech.map((item) => (
          <span key={item} className="rounded border border-slate-700 bg-[#0b1326] px-2.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.08em] text-slate-300">
            {item}
          </span>
        ))}
      </div>
      <a href={link} className="mt-auto inline-flex items-center gap-2 pt-5 font-semibold text-orange-300">
        {cta}
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </a>
    </article>
  );
}

function WorkCard({ initials, logo, company, url, role, period, focus, bullets }) {
  return (
    <article className="group rounded-lg border border-slate-800 bg-[#131b2e] p-6 transition duration-300 hover:-translate-y-1 hover:border-orange-400/70 hover:bg-[#171f33]">
      <div className="flex items-start gap-4">
        <a
          href={url}
          aria-label={`Abrir web de ${company}`}
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded border border-orange-400/35 bg-white p-2 transition group-hover:border-orange-300"
        >
          <img src={logo} alt={`Logo de ${company}`} className="max-h-10 max-w-10 object-contain" />
          <span className="sr-only">{initials}</span>
        </a>
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-slate-500">{period}</p>
          <a href={url} className="mt-1 inline-flex items-center gap-2 text-xl font-bold text-white transition hover:text-orange-300">
            {company}
            <ExternalLink className="h-4 w-4 text-slate-500 transition group-hover:text-orange-300" />
          </a>
          <p className="mt-1 text-sm font-semibold text-sky-300">{role}</p>
        </div>
      </div>

      <p className="mt-5 rounded border border-slate-800 bg-[#0b1326] px-3 py-2 font-mono text-xs uppercase tracking-[0.08em] text-slate-300">
        {focus}
      </p>

      <ul className="mt-5 grid gap-3">
        {bullets.map((bullet) => (
          <li key={bullet} className="flex gap-3 text-sm leading-6 text-slate-300">
            <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function CredentialCard({ title, issuer, logo, mark, date, link, cta }) {
  return (
    <article className="flex flex-col rounded-lg border border-slate-800 bg-[#131b2e] p-5 transition duration-300 hover:-translate-y-1 hover:border-orange-400/70 hover:bg-[#171f33]">
      <div className="flex items-center gap-3">
        <a
          href={link}
          aria-label={`Abrir credencial ${title}`}
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded border border-slate-700 bg-white p-2 transition hover:border-orange-300"
        >
          {logo ? (
            <img src={logo} alt={`Logo de ${issuer}`} className="max-h-10 max-w-10 object-contain" />
          ) : (
            <span className="font-mono text-xl font-black text-slate-950">{mark}</span>
          )}
        </a>
        <div>
          <h3 className="font-semibold text-white">{title}</h3>
          <p className="text-sm text-slate-400">{issuer}</p>
          <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.12em] text-orange-300">{date}</p>
        </div>
      </div>
      <a href={link} className="mt-5 inline-flex items-center gap-2 font-semibold text-orange-300">
        {cta}
        <ExternalLink className="h-4 w-4" />
      </a>
    </article>
  );
}

function PrimaryLink({ href, children }) {
  return (
    <a href={href} className="inline-flex items-center gap-2 rounded bg-orange-500 px-5 py-3 font-mono text-xs font-bold uppercase tracking-[0.12em] text-white transition hover:bg-orange-400">
      {children}
      <ArrowRight className="h-4 w-4" />
    </a>
  );
}

function SecondaryLink({ href, children }) {
  return (
    <a href={href} className="inline-flex items-center gap-2 rounded border border-slate-700 px-5 py-3 font-mono text-xs font-bold uppercase tracking-[0.12em] text-slate-100 transition hover:border-orange-400/70 hover:bg-orange-400/10">
      {children}
    </a>
  );
}

function ContactLink({ href, icon: Icon, label }) {
  return (
    <a href={href} className="group flex items-center gap-3 rounded-lg border border-slate-700 bg-[#131b2e]/80 px-4 py-4 text-slate-100 backdrop-blur transition hover:border-orange-400/70 hover:bg-orange-400/10">
      <Icon className="h-5 w-5 text-sky-300" />
      <span className="font-medium">{label}</span>
      <ExternalLink className="ml-auto h-4 w-4 text-slate-500 transition group-hover:text-orange-300" />
    </a>
  );
}

export default App;


