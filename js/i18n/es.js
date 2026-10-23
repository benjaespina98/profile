// @ts-check

/**
 * Spanish translations, keyed by the exact English source string (whitespace-normalised).
 * English lives in the HTML so the page works without JS. `npm run validate` fails when a key
 * here no longer matches a string in the pages, so a rewritten sentence cannot go stale silently.
 * Proper names, technologies and handles are intentionally absent: they read the same in both languages.
 *
 * @type {Readonly<Record<string, string>>}
 */
export const ES = {
  // Document
  'Full Stack Software Developer building web apps, internal tools and integrations for businesses. React, Node.js and TypeScript. Based in Córdoba, Argentina, working remotely.':
    'Full Stack Software Developer que construye aplicaciones web, herramientas internas e integraciones para empresas. React, Node.js y TypeScript. Con base en Córdoba, Argentina, trabajando de forma remota.',
  'Benjamín Espina, Full Stack Software Developer: portfolio, CV, projects and where to find me.':
    'Benjamín Espina, Full Stack Software Developer: portfolio, CV, proyectos y dónde encontrarme.',
  'Benjamín Espina | Links': 'Benjamín Espina | Enlaces',

  // Accessibility labels and alt text
  'Skip to content': 'Saltar al contenido',
  'Benjamín Espina, back to top': 'Benjamín Espina, volver arriba',
  'Main': 'Principal',
  'Language': 'Idioma',
  'Toggle navigation': 'Abrir o cerrar el menú',
  'Photo of Benjamín Espina': 'Foto de Benjamín Espina',
  'Open Rincones': 'Abrir Rincones',
  'Rincones: sign-in screen of a wine cellar app': 'Rincones: pantalla de acceso de una app de bodega',
  'Open Dollar Tracker': 'Abrir Dollar Tracker',
  'Dollar Tracker: dashboard with live exchange rates for Argentina': 'Dollar Tracker: panel con cotizaciones en vivo para Argentina',
  'Open dividimos?': 'Abrir dividimos?',
  'dividimos?: app to split group expenses': 'dividimos?: app para dividir gastos grupales',
  'Open the Playa y Sol website': 'Abrir el sitio de Playa y Sol',
  'Playa y Sol Piscinas: website of a pool-building company': 'Playa y Sol Piscinas: sitio de una empresa constructora de piscinas',
  'Copy email address': 'Copiar dirección de email',
  'Main links': 'Enlaces principales',
  '@benjaespina_ on Instagram, personal account': '@benjaespina_ en Instagram, cuenta personal',
  '@200ok.dev on Instagram': '@200ok.dev en Instagram',
  '200ok.dev on Instagram': '200ok.dev en Instagram',

  // Navigation and hero
  'Work': 'Trabajo',
  'Services': 'Servicios',
  'Experience': 'Experiencia',
  'About': 'Sobre mí',
  'Contact': 'Contacto',
  'I design and build web applications, internal tools and integrations for businesses, from understanding the problem to a live product.':
    'Diseño y construyo aplicaciones web, herramientas internas e integraciones para empresas, desde entender el problema hasta tener un producto en producción.',
  'View my work': 'Ver mi trabajo',
  'Get in touch': 'Contactar',

  // Work
  '01 · Work': '01 · Trabajo',
  'Selected work': 'Trabajo destacado',
  'Products I designed, built and keep running. Each one started from a concrete problem.':
    'Productos que diseñé, construí y sigo manteniendo. Cada uno nació de un problema concreto.',
  'Progressive web app': 'Aplicación web progresiva (PWA)',
  'Client work': 'Trabajo para cliente',
  'The problem': 'El problema',
  'What I built': 'Qué construí',
  'What makes it interesting': 'Qué lo hace interesante',
  'Visit Rincones': 'Visitar Rincones',
  'Visit Dollar Tracker': 'Visitar Dollar Tracker',
  'Visit dividimos?': 'Visitar dividimos?',
  'Source code': 'Código fuente',

  'A wine cellar app that catalogues a personal collection by reading the label from a photo.':
    'Una app de bodega que cataloga una colección personal leyendo la etiqueta a partir de una foto.',
  'Cataloguing a collection means typing every label by hand.':
    'Catalogar una colección implica escribir a mano cada etiqueta.',
  'A full-stack app with user accounts and an admin area, installable like a native app.':
    'Una app full-stack con cuentas de usuario y un área de administración, instalable como una app nativa.',
  'Google Gemini reads the label and pre-fills the entry, with a local OCR fallback so the feature keeps working if the AI call fails.':
    'Google Gemini lee la etiqueta y completa la ficha, con OCR local de respaldo para que la función siga andando si falla la llamada a la IA.',

  'One screen with the rates that matter in Argentina: dollar, euro, real, country risk, oil and gold.':
    'Una sola pantalla con las cotizaciones que importan en Argentina: dólar, euro, real, riesgo país, petróleo y oro.',
  'Those figures live on different sites, each with its own format.':
    'Esos datos están en sitios distintos, cada uno con su propio formato.',
  'A mobile-first dashboard that updates in real time and installs on the phone.':
    'Un panel pensado primero para móvil, que se actualiza en tiempo real y se instala en el teléfono.',
  'Vercel Edge Functions proxy the external APIs, which keeps the client simple.':
    'Vercel Edge Functions actúan de proxy de las APIs externas, lo que mantiene simple al cliente.',

  'Split group expenses and send the breakdown over WhatsApp in a single tap.':
    'Permite dividir gastos grupales y enviar el detalle por WhatsApp con un solo toque.',
  'Splitting a trip or a dinner usually ends in spreadsheets or long chat threads.':
    'Dividir un viaje o una cena suele terminar en planillas o en largas cadenas de mensajes.',
  'A web app that works without sign-up or a backend.':
    'Una app web que funciona sin registro ni backend.',
  'The whole state is compressed with lz-string and carried in the URL, so a link is a complete, shareable bill.':
    'Todo el estado se comprime con lz-string y viaja en la URL, así que un link es una cuenta completa y compartible.',

  'Quoting ran on five separate calculators and a manual process.':
    'La cotización se hacía con cinco calculadoras separadas y un proceso manual.',

  'Also built': 'También construí',
  'NutriPlan, an offline-first nutrition and health PWA with Open Food Facts and a barcode scanner (Angular, Ionic, Capacitor).':
    'NutriPlan, una PWA offline-first de nutrición y salud con Open Food Facts y lector de códigos de barras (Angular, Ionic, Capacitor).',

  // Services
  '02 · Services': '02 · Servicios',
  'What I can build for you': 'Qué puedo construir para tu proyecto',
  'From a first idea to something people use, I take care of requirements, design, development and deployment.':
    'Desde una primera idea hasta algo que la gente usa, me encargo de los requerimientos, el diseño, el desarrollo y el despliegue.',
  'Websites and online shops': 'Sitios web y tiendas online',
  'Business sites and stores with an admin area to manage content, products and orders.':
    'Sitios y tiendas para empresas, con un área de administración para gestionar contenido, productos y pedidos.',
  'See Playa y Sol': 'Ver Playa y Sol',
  'Web apps and internal tools': 'Aplicaciones web y herramientas internas',
  'Custom software for work that lives in spreadsheets or manual steps: quoting, tracking, permissions and document export.':
    'Software a medida para tareas que hoy viven en planillas o pasos manuales: cotización, seguimiento, permisos y exportación de documentos.',
  'Installable apps (PWA)': 'Aplicaciones instalables (PWA)',
  'Mobile-first apps that install from the browser and work like native ones, without going through an app store.':
    'Apps pensadas primero para móvil que se instalan desde el navegador y funcionan como las nativas, sin pasar por una tienda de aplicaciones.',
  'See dividimos?': 'Ver dividimos?',
  'Integrations and AI features': 'Integraciones y funciones con IA',
  'Connecting external APIs and adding practical AI, such as reading data from a photo, with sensible fallbacks.':
    'Conexión con APIs externas e IA práctica, como leer datos desde una foto, con respaldos razonables.',
  'See Rincones': 'Ver Rincones',

  // Experience
  '03 · Experience': '03 · Experiencia',
  'Experience and education': 'Experiencia y educación',
  'Oct 2023 – Present': 'Oct 2023 – Actualidad',
  'Independent and client work, including Playa y Sol S.A.S.':
    'Trabajo independiente y para clientes, incluida Playa y Sol S.A.S.',
  'Designed, built and deployed web apps and PWAs end to end, from requirements to production: Rincones, Dollar Tracker, dividimos? and NutriPlan.':
    'Diseñé, construí y desplegué apps web y PWAs de punta a punta, desde los requerimientos hasta producción: Rincones, Dollar Tracker, dividimos? y NutriPlan.',
  'Dec 2023 – Mar 2025': 'Dic 2023 – Mar 2025',
  'Functional Analyst': 'Analista Funcional',
  'Gathered requirements and documented processes for several internal clients.':
    'Relevé requerimientos y documenté procesos para varios clientes internos.',
  'Worked with the RPA team on an automation deployed across 5 medical centers.':
    'Trabajé con el equipo de RPA en una automatización desplegada en 5 centros médicos.',
  'Ran functional validation and UAT before each release, and diagnosed production issues in SQL Server.':
    'Realicé validaciones funcionales y UAT antes de cada release, y diagnostiqué incidencias en producción con SQL Server.',
  'Education': 'Educación',
  'Information Systems Engineering': 'Ingeniería en Sistemas de Información',
  'UTN, Córdoba · Coursework completed · Thesis approved · Final exams in progress':
    'UTN, Córdoba · Cursado finalizado · Tesis aprobada · Exámenes finales en curso',
  'B.Sc. in Information Security': 'Licenciatura en Seguridad Informática',
  'UTN · In progress': 'UTN · En curso',

  // About
  '04 · About': '04 · Sobre mí',
  'How I work': 'Cómo trabajo',
  "I'm a full stack software developer based in Córdoba, Argentina. I started in functional analysis, working with requirements, testing and process documentation, which is why I begin every project by understanding the business problem before choosing the technology.":
    'Soy desarrollador de software full stack y vivo en Córdoba, Argentina. Empecé en el análisis funcional, trabajando con requerimientos, pruebas y documentación de procesos, y por eso empiezo cada proyecto entendiendo el problema del negocio antes de elegir la tecnología.',
  'Today I build and maintain my own products and software for businesses, end to end: requirements, interface, backend, testing and deployment.':
    'Hoy construyo y mantengo mis propios productos y software para empresas, de punta a punta: requerimientos, interfaz, backend, testing y despliegue.',
  'Understand first': 'Entender primero',
  'Requirements, edge cases and acceptance criteria before writing code.':
    'Requerimientos, casos límite y criterios de aceptación antes de escribir código.',
  'Own the whole product': 'Hacerme cargo de todo el producto',
  'Design, build, test, deploy and keep it running.':
    'Diseñar, construir, probar, desplegar y mantenerlo funcionando.',
  'AI as a tool, not a shortcut': 'La IA como herramienta, no como atajo',
  'I use Claude Code and the Gemini API in my daily work to move faster. Every change is reviewed, typed and tested before it ships.':
    'Uso Claude Code y la API de Gemini en mi trabajo diario para avanzar más rápido. Cada cambio se revisa, se tipa y se prueba antes de salir a producción.',

  // Contact
  '05 · Contact': '05 · Contacto',
  'Work together': 'Trabajemos juntos',
  'Available for remote roles and freelance projects.': 'Disponible para roles remotos y proyectos freelance.',
  'Have a project in mind?': '¿Tiene un proyecto en mente?',
  "Tell me what you need and I'll reply with an honest view on scope, timing and whether I'm the right fit.":
    'Cuénteme qué necesita y le responderé con una opinión honesta sobre el alcance, los tiempos y si soy la persona indicada.',
  'Start a conversation': 'Iniciar una conversación',
  'Hiring?': '¿Está contratando?',
  'Download my CV, or find me on LinkedIn and GitHub.': 'Descargue mi CV o encuéntreme en LinkedIn y GitHub.',
  'Download CV': 'Descargar CV',
  'All links': 'Todos los enlaces',
  'Email copied': 'Email copiado',
  'Links': 'Enlaces',
  'One page with everything': 'Todo en una sola página',
  'Portfolio, CV, projects and social profiles in a single page, easy to share.': 'Portfolio, CV, proyectos y perfiles sociales en una sola página, fáciles de compartir.',
  'Open links page': 'Abrir página de enlaces',
  'Work, services, experience and contact': 'Trabajo, servicios, experiencia y contacto',
  'Córdoba, Argentina · Remote': 'Córdoba, Argentina · Remoto',
  'An internal portal for quotes, prices and materials, built for a family pool-building company.':
    'Un portal interno de presupuestos, precios y materiales, construido para una empresa familiar constructora de piscinas.',
  'A staff-only portal that unifies pools, linings, covers, fencing and tiling, centralizes prices and materials, and keeps a history per client with Word/PDF export.':
    'Un portal solo para el personal que unifica piscinas, revestimientos, cobertores, cercos y losetas, centraliza precios y materiales, y guarda un historial por cliente con exportación a Word/PDF.',
  'It is in use at the company, as the tool its team quotes with.':
    'Está en uso en la empresa: es la herramienta con la que su equipo cotiza.',
  'I also built the company\'s public website, with an online shop and WhatsApp checkout. It is complete and deployed, but not its live site today, since the domain is with another web provider.':
    'También construí el sitio web público de la empresa, con tienda online y checkout por WhatsApp. Está completo y desplegado, pero hoy no es su sitio en vivo, porque el dominio está con otro proveedor web.',
  'View the website':
    'Ver el sitio',
  'Website source code':
    'Código fuente del sitio',
  'See the Playa y Sol portal':
    'Ver el portal de Playa y Sol',
  'Built the digital tools of Playa y Sol: an internal portal for quotes, prices and materials that the team uses, and a public website with an online shop.':
    'Construí las herramientas digitales de Playa y Sol: un portal interno de presupuestos, precios y materiales que usa el equipo, y un sitio web público con tienda online.',

  // /links
  'Full portfolio': 'Portfolio completo',
  'Projects': 'Proyectos',
  'Wine cellar PWA with AI label reading': 'PWA de bodega con lectura de etiquetas por IA',
  'Live exchange rates for Argentina': 'Cotizaciones en vivo para Argentina',
  'Split group expenses, share over WhatsApp': 'Dividir gastos grupales y compartirlos por WhatsApp',
};
