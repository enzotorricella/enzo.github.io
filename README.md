# ETorri — portfolio profesional

Portfolio de Enzo Torricella, desarrollado con **React 18, Vite 5, Tailwind CSS 3 y lucide-react**.

**Perfil:** desarrollo C#/.NET, soporte de aplicaciones, SQL e integración IT/OT.  
**Sitio principal:** https://etorri.com.ar/  
**GitHub:** https://github.com/enzotorricella

## Qué muestra el sitio

- Trayectoria en soporte postventa de aplicaciones financieras y diagnóstico técnico.
- Productos propios: EventStaff/EventChecking, Kardexa y Talvo Dry.
- Tecnologías y competencias en desarrollo, bases de datos, soporte e infraestructura.
- Formas de contacto para oportunidades laborales.

> Los proyectos de producto son referencias de experiencia profesional. Este repositorio contiene el **portfolio web**, no necesariamente el código fuente de dichos productos.

## Requisitos

- Node.js y npm compatibles con las dependencias fijadas en `package-lock.json`.

## Desarrollo local

```bash
npm ci
npm run dev
```

Vite mostrará la dirección local de desarrollo. No se necesitan variables de entorno para ejecutar el contenido estático actualmente versionado.

## Compilación y vista previa

```bash
npm run build
npm run preview
```

El resultado se genera en `dist/`. El directorio no debe versionarse.

### Publicación bajo el dominio principal

```bash
VITE_BASE=/ npm run build
```

La variable `VITE_BASE` configura la ruta base de los recursos para despliegues bajo `https://etorri.com.ar/`.

### Publicación en un subdirectorio de GitHub Pages

La configuración predeterminada de Vite utiliza `/enzo.github.io/`. Revisar los ajustes de Pages antes de publicar para asegurar que la ruta base coincida con la URL efectiva.

## Estructura

| Ruta | Responsabilidad |
| --- | --- |
| `src/App.jsx` | Página principal, contenido y componentes React |
| `src/styles.css` | Estilos y utilidades de Tailwind |
| `src/assets/` | Imágenes y recursos del portfolio |
| `public/` | Favicon, manifiesto, robots y sitemap |
| `index.html` | Documento HTML y metadatos para buscadores |
| `vite.config.js` | Configuración Vite y ruta base |

## Criterios de mantenimiento

- Mantener experiencia y tecnologías consistentes con el CV y el perfil de GitHub.
- Comprobar los enlaces de contacto y productos antes de publicar.
- No incorporar claves, datos personales de terceros o código propietario de clientes.
- Ejecutar `npm run build` antes de aprobar cambios.
- Trabajar en ramas y revisar los cambios mediante pull requests.

## Contacto

- [Portfolio](https://etorri.com.ar/)
- [LinkedIn](https://www.linkedin.com/in/enzo-torricella/)
- [Email](mailto:enzo.torricella25@gmail.com)
