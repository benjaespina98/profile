// @ts-check

/**
 * Spanish (Argentina, voseo) texts, keyed by the exact English source string (whitespace-normalised).
 * They are written for a Spanish reader, not translated word by word. English lives in the HTML so the
 * page works without JS. `npm run validate` fails when a key here no longer matches a string in the
 * pages, so a rewritten sentence cannot go stale silently.
 * Proper names, technologies and handles are intentionally absent: they read the same in both languages.
 *
 * @type {Readonly<Record<string, string>>}
 */
export const ES = {
  // Document
  'Full Stack Software Developer building web apps, internal tools and integrations for businesses. React, Node.js and TypeScript. Based in Córdoba, Argentina, working remotely.':
    'Desarrollador full stack: aplicaciones web, herramientas internas e integraciones para empresas. React, Node.js y TypeScript. Vivo en Córdoba, Argentina, y trabajo de forma remota.',
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
  'Dollar Tracker: dashboard with live exchange rates for Argentina': 'Dollar Tracker: panel con cotizaciones en vivo de Argentina',
  'Open dividimos?': 'Abrir dividimos?',
  'dividimos?: app to split group expenses': 'dividimos?: app para dividir gastos grupales',
  'Open the Playa y Sol website': 'Abrir el sitio de Playa y Sol',
  'Playa y Sol Piscinas: website of a pool-building company': 'Playa y Sol Piscinas: sitio web de una empresa de piscinas',
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
  'Links': 'Enlaces',
  'Contact': 'Contacto',
  'I build web apps, internal tools and integrations for businesses, from requirements to production.':
    'Desarrollo aplicaciones web, herramientas internas e integraciones para empresas, desde los requerimientos hasta producción.',
  'View my work': 'Ver mi trabajo',
  'Get in touch': 'Contactame',

  // Work
  '01 · Work': '01 · Trabajo',
  'Selected work': 'Trabajo destacado',
  'Products I built and still maintain. Each one started from a specific problem.':
    'Productos que hice y sigo manteniendo. Cada uno arrancó con un problema concreto.',
  'Progressive web app': 'App web instalable (PWA)',
  'Client work': 'Trabajo para un cliente',
  'The problem': 'El problema',
  'What I built': 'Qué hice',
  'How it works': 'Cómo funciona',
  'Today': 'Hoy',
  'Source code': 'Código fuente',

  // Rincones
  "A wine cellar app: you photograph the label and it fills in the bottle's details.":
    'Una app de bodega: le sacás una foto a la etiqueta y completa los datos de la botella.',
  'Keeping a wine collection up to date means typing in every label by hand.':
    'Tener al día una colección de vinos implica cargar a mano cada etiqueta.',
  'A full-stack app with user accounts and an admin area, installable like a native app.':
    'Una app full-stack con cuentas de usuario y panel de administración, que se instala como una app nativa.',
  'Google Gemini reads the label and pre-fills the entry. If that call fails, a local OCR takes over, so the feature keeps working.':
    'Google Gemini lee la etiqueta y completa la ficha. Si esa llamada falla, entra un OCR local de respaldo y la función sigue andando.',

  // Dollar Tracker
  'One screen with the rates that matter in Argentina: dollar, euro, real, country risk, oil and gold.':
    'Una sola pantalla con las cotizaciones que importan en Argentina: dólar, euro, real, riesgo país, petróleo y oro.',
  'Those figures live on different sites, each with its own format.':
    'Esos datos están repartidos en distintos sitios, cada uno con su propio formato.',
  'A mobile-first dashboard that updates in real time and installs on the phone.':
    'Un panel pensado para el celular, que se actualiza en tiempo real y se instala en el teléfono.',
  'Vercel Edge Functions sit between the app and the external APIs, so the client stays simple.':
    'Vercel Edge Functions hacen de intermediario con las APIs externas, así el cliente se mantiene simple.',

  // dividimos?
  'Split group expenses and send the breakdown over WhatsApp with one tap.':
    'Para dividir gastos grupales y mandar el detalle por WhatsApp con un toque.',
  'Splitting a trip or a dinner usually ends in spreadsheets or long chat threads.':
    'Dividir un viaje o una cena suele terminar en planillas o en chats larguísimos.',
  'A web app that works without sign-up or a backend.':
    'Una app web que funciona sin registro y sin backend.',
  'The whole state is compressed with lz-string and carried in the URL, so a link is a complete, shareable bill.':
    'Todo el estado se comprime con lz-string y viaja en la URL: un link es la cuenta completa, lista para compartir.',

  // Playa y Sol
  'An internal portal for quotes, prices and materials, built for a family pool-building company.':
    'Un portal interno de presupuestos, precios y materiales, hecho para una empresa familiar de piscinas.',
  'Quoting ran on five separate calculators and a manual process.':
    'Los presupuestos se armaban con cinco calculadoras separadas y un proceso manual.',
  'A staff-only portal that unifies pools, linings, covers, fencing and tiling, centralizes prices and materials, and keeps a history per client with Word/PDF export.':
    'Un portal solo para el equipo que unifica piscinas, revestimientos, cobertores, cercos y losetas, centraliza precios y materiales, y guarda un historial por cliente con exportación a Word/PDF.',
  "It's in use at the company: it's the tool the team quotes with.":
    'Está en uso en la empresa: es la herramienta con la que el equipo arma los presupuestos.',
  "I also built the company's public website, with an online shop and WhatsApp checkout. It's finished and deployed, but it isn't the company's live site today because the domain is with another web provider.":
    'También hice el sitio web público de la empresa, con tienda online y checkout por WhatsApp. Está terminado y publicado, pero hoy no es su sitio en vivo porque el dominio lo tiene otro proveedor web.',
  'View the website': 'Ver el sitio',
  'Website source code': 'Código fuente del sitio',

  'Also built': 'También hice',
  'NutriPlan, an offline-first nutrition and health PWA with Open Food Facts and a barcode scanner (Angular, Ionic, Capacitor).':
    'NutriPlan, una PWA offline-first de nutrición y salud, con Open Food Facts y lector de códigos de barras (Angular, Ionic, Capacitor).',

  // Services
  '02 · Services': '02 · Servicios',
  'What I can help with': 'En qué puedo ayudarte',
  'I can take care of the whole process: requirements, design, development and deployment.':
    'Me puedo encargar de todo el proceso: requerimientos, diseño, desarrollo y puesta en producción.',
  'Websites and online shops': 'Sitios web y tiendas online',
  'Business sites and stores, with an admin area to manage content, products and orders.':
    'Sitios y tiendas para negocios, con un panel de administración para manejar contenido, productos y pedidos.',
  'See Playa y Sol': 'Ver Playa y Sol',
  'Web apps and internal tools': 'Aplicaciones web y herramientas internas',
  'Custom software for work that still lives in spreadsheets or manual steps: quotes, tracking, permissions, document export.':
    'Software a medida para tareas que todavía viven en planillas o pasos manuales: presupuestos, seguimiento, permisos, exportación de documentos.',
  'See the Playa y Sol portal': 'Ver el portal de Playa y Sol',
  'Installable apps (PWA)': 'Apps instalables (PWA)',
  'Mobile-first apps that install from the browser and feel like native ones, with no app store in between.':
    'Apps pensadas para el celular que se instalan desde el navegador y se sienten como nativas, sin pasar por una tienda de apps.',
  'See dividimos?': 'Ver dividimos?',
  'Integrations and AI features': 'Integraciones y funciones con IA',
  'Connecting external APIs and adding practical AI, like reading data from a photo, with a fallback for when something fails.':
    'Conexión con APIs externas y funciones de IA con un uso concreto, como leer datos de una foto, con respaldo para cuando algo falla.',
  'See Rincones': 'Ver Rincones',

  // Experience
  '03 · Experience': '03 · Experiencia',
  'Experience and education': 'Experiencia y educación',
  'Oct 2023 – Present': 'Oct 2023 – Actualidad',
  'Independent and client work, including Playa y Sol S.A.S.':
    'Trabajo independiente y para clientes, incluida Playa y Sol S.A.S.',
  'Designed, built and deployed web apps and PWAs end to end, from requirements to production: Rincones, Dollar Tracker, dividimos? and NutriPlan.':
    'Diseñé, construí y publiqué apps web y PWAs de punta a punta, desde los requerimientos hasta producción: Rincones, Dollar Tracker, dividimos? y NutriPlan.',
  'Built the digital tools of Playa y Sol: an internal portal for quotes, prices and materials that the team uses, and a public website with an online shop.':
    'Hice las herramientas digitales de Playa y Sol: un portal interno de presupuestos, precios y materiales que usa el equipo, y un sitio web público con tienda online.',
  'Dec 2023 – Mar 2025': 'Dic 2023 – Mar 2025',
  'Functional Analyst': 'Analista Funcional',
  'Gathered requirements and documented processes for several internal clients.':
    'Relevé requerimientos y documenté procesos para varios clientes internos.',
  'Worked with the RPA team on an automation deployed across 5 medical centers.':
    'Trabajé con el equipo de RPA en una automatización que se implementó en 5 centros médicos.',
  'Ran functional validation and UAT before each release, and diagnosed production issues in SQL Server.':
    'Hice validaciones funcionales y UAT antes de cada release, y diagnostiqué incidencias en producción con SQL Server.',
  'Education': 'Educación',
  'Information Systems Engineering': 'Ingeniería en Sistemas de Información',
  'UTN, Córdoba · Coursework completed · Thesis approved · Final exams in progress':
    'UTN, Córdoba · Cursado terminado · Tesis aprobada · Finales en curso',
  'B.Sc. in Information Security': 'Licenciatura en Seguridad Informática',
  'UTN · In progress': 'UTN · En curso',

  // About
  '04 · About': '04 · Sobre mí',
  'How I work': 'Cómo trabajo',
  "I'm a full stack developer based in Córdoba, Argentina. I started in functional analysis, working with requirements, testing and process documentation, so I begin every project by understanding the business problem before picking the technology.":
    'Soy desarrollador full stack y vivo en Córdoba, Argentina. Empecé en análisis funcional, trabajando con requerimientos, pruebas y documentación de procesos, así que cada proyecto lo arranco entendiendo el problema del negocio antes de elegir la tecnología.',
  'Today I build and maintain my own products and software for businesses, end to end: requirements, interface, backend, testing and deployment.':
    'Hoy desarrollo y mantengo productos propios y software para empresas, de punta a punta: requerimientos, interfaz, backend, testing y despliegue.',
  'Understand first': 'Primero entender',
  'Requirements, edge cases and acceptance criteria before writing code.':
    'Requerimientos, casos límite y criterios de aceptación antes de escribir código.',
  'Own the whole product': 'Hacerme cargo del producto completo',
  'Design, build, test, deploy and keep it running.':
    'Diseñarlo, construirlo, probarlo, publicarlo y mantenerlo andando.',
  'AI in my workflow': 'IA en mi forma de trabajar',
  'I use Claude Code and the Gemini API in my day-to-day development. Everything I ship still gets reviewed, typed and tested by me.':
    'Uso Claude Code y la API de Gemini en mi desarrollo del día a día. Todo lo que publico lo reviso, lo tipo y lo pruebo yo.',

  // Contact
  '05 · Contact': '05 · Contacto',
  'Work together': 'Trabajemos juntos',
  'Available for remote roles and freelance projects.': 'Disponible para roles remotos y proyectos freelance.',
  "Let's talk about your project": 'Hablemos de tu proyecto',
  "Tell me what you want to build and we'll see how I can help.":
    'Contame qué querés hacer y vemos cómo puedo ayudarte.',
  'Send me an email': 'Escribime un mail',
  'Looking for a developer?': '¿Buscás un desarrollador?',
  "Here's my CV, and you can also find me on LinkedIn and GitHub.":
    'Acá tenés mi CV, y también podés encontrarme en LinkedIn y GitHub.',
  'Download CV': 'Descargar CV',
  'One page with everything': 'Todo en una sola página',
  'Portfolio, CV, projects and social links, all in one place.':
    'Portfolio, CV, proyectos y redes, todo en un solo lugar.',
  'See all links': 'Ver todos los enlaces',
  'All links': 'Todos los enlaces',
  'Email copied': 'Email copiado',

  // /links
  'Full portfolio': 'Portfolio completo',
  'Work, services, experience and contact': 'Trabajo, servicios, experiencia y contacto',
  'Córdoba, Argentina · Remote': 'Córdoba, Argentina · Remoto',
  'Projects': 'Proyectos',
  'Wine cellar PWA with AI label reading': 'App de bodega que lee etiquetas con IA',
  'Live exchange rates for Argentina': 'Cotizaciones en vivo de Argentina',
  'Split group expenses, share over WhatsApp': 'Dividir gastos grupales y compartirlos por WhatsApp',
};
