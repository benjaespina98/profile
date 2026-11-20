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
  'Benjamin Espina, Full Stack Software Developer: portfolio, CV, projects and where to find me.':
    'Benjamin Espina, Full Stack Software Developer: portfolio, CV, proyectos y dónde encontrarme.',
  'Benjamin Espina | Links': 'Benjamin Espina | Enlaces',

  // Accessibility labels and alt text
  'Skip to content': 'Saltar al contenido',
  'Benjamin Espina, back to top': 'Benjamin Espina, volver arriba',
  'Main': 'Principal',
  'Language': 'Idioma',
  'Toggle navigation': 'Abrir o cerrar el menú',
  'Photo of Benjamin Espina': 'Foto de Benjamin Espina',
  'Open Rincones': 'Abrir Rincones',
  'Rincones: sign-in screen of a wine cellar app': 'Rincones: pantalla de acceso de una app de bodega',
  'Open Dollar Tracker': 'Abrir Dollar Tracker',
  'Dollar Tracker: dashboard with live exchange rates for Argentina': 'Dollar Tracker: panel con cotizaciones en vivo de Argentina',
  'Open dividimos?': 'Abrir dividimos?',
  'dividimos?: result of a shared bill, with the balance per person and who pays whom': 'dividimos?: resultado de una cuenta compartida, con el saldo de cada persona y quién le paga a quién',
  'Copy email address': 'Copiar dirección de email',
  'Main links': 'Enlaces principales',
  '@benjaespina_ on Instagram, personal account': '@benjaespina_ en Instagram, cuenta personal',

  // Navigation and hero
  'Work': 'Trabajo',
  'Experience': 'Experiencia',
  'About': 'Sobre mí',
  'Links': 'Enlaces',
  'Contact': 'Contacto',
  'View my work': 'Ver mi trabajo',
  'Get in touch': 'Contactame',

  // Work
  '01 · Work': '01 · Trabajo',
  'Selected work': 'Trabajo destacado',
  'Progressive web app': 'App web instalable (PWA)',
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
  "It's in use at the company: it's the tool the team quotes with.":
    'Está en uso en la empresa: es la herramienta con la que el equipo arma los presupuestos.',


  // Services

  // Experience
  '03 · Experience': '03 · Experiencia',
  'Experience and education': 'Experiencia y educación',
  'Dec 2023 – Mar 2025': 'Dic 2023 – Mar 2025',
  'Education': 'Educación',
  'Information Systems Engineering': 'Ingeniería en Sistemas de Información',
  'B.Sc. in Information Security': 'Licenciatura en Seguridad Informática',

  // About
  '04 · About': '04 · Sobre mí',
  'How I work': 'Cómo trabajo',
  'Understand first': 'Primero entender',
  'Requirements, edge cases and acceptance criteria before writing code.':
    'Requerimientos, casos límite y criterios de aceptación antes de escribir código.',
  'Own the whole product': 'Hacerme cargo del producto completo',
  'Design, build, test, deploy and keep it running.':
    'Diseñarlo, construirlo, probarlo, publicarlo y mantenerlo andando.',

  // Contact
  '05 · Contact': '05 · Contacto',
  'Send me an email': 'Escribime un mail',
  "Here's my CV, and you can also find me on LinkedIn and GitHub.":
    'Acá tenés mi CV, y también podés encontrarme en LinkedIn y GitHub.',
  'Download CV': 'Descargar CV',
  'One page with everything': 'Todo en una sola página',
  'Portfolio, CV, projects and social links, all in one place.':
    'Portfolio, CV, proyectos y redes, todo en un solo lugar.',
  'See all links': 'Ver todos los enlaces',
  'All links': 'Todos los enlaces',
  'Email copied': 'Email copiado',
  'Web applications and PWAs end to end.':
    'Aplicaciones web y PWAs de punta a punta.',
  'Requirements gathering, user stories, flows, functional testing and UAT.':
    'Relevamiento, historias de usuario, flujos, pruebas funcionales y UAT.',
  'External APIs, OCR and AI integrated into products, notifications.':
    'APIs externas, OCR e IA integrada en productos, notificaciones.',
  'Functional and technical user support, documentation and training.':
    'Soporte funcional y técnico a usuarios, documentación y capacitación.',
  'I\'m a full stack developer with a functional analysis background: I spent over a year at Grupo OSDE as the link between users and development teams, gathering needs, testing and documenting. That\'s why I start every project by understanding the business problem before choosing the technology.':
    'Soy desarrollador full stack y vengo del análisis funcional: pasé más de un año en Grupo OSDE como nexo entre usuarios y equipos de desarrollo, relevando necesidades, probando y documentando. Por eso cada proyecto lo arranco entendiendo el problema del negocio antes de elegir la tecnología.',
  'Today I design and build web applications end to end: requirements, interface, backend, testing and deployment. My products and solutions for clients are published under the 200ok.dev brand.':
    'Hoy diseño y construyo aplicaciones web de punta a punta: requerimientos, interfaz, backend, testing y despliegue. Mis productos y soluciones para clientes se publican bajo la marca 200ok.dev.',
  'My Information Security studies guide how I design: secure authentication and sessions, role-based permissions and tests on the critical rules.':
    'Mi formación en Seguridad Informática orienta cómo diseño: autenticación y sesiones seguras, permisos por rol y tests sobre las reglas críticas.',
  'If you need a custom system, want to organize a process or keep an application running, write to me.':
    'Si necesitás un sistema a medida, ordenar un proceso o dar continuidad a una aplicación, escribime.',
  'A mobile-first dashboard with quotes from the Twelve Data API, served with caching, that installs on the phone.':
    'Un panel pensado para el celular, con cotizaciones de la API de Twelve Data y caché, que se instala en el teléfono.',
  '© 2026 Benjamin Espina · Products and solutions under 200ok.dev':
    '© 2026 Benjamin Espina · Productos y soluciones bajo 200ok.dev',
  'Products and solutions under 200ok.dev':
    'Productos y soluciones bajo 200ok.dev',
  'Full Stack Software Developer. Software that solves business problems, from requirements to production. Over a year as a technical functional analyst at Grupo OSDE.':
    'Full Stack Software Developer. Software que resuelve problemas de negocio, del relevamiento de requerimientos a la puesta en producción. Más de un año como analista funcional técnico en Grupo OSDE.',
  'Software solutions for business problems.':
    'Soluciones de software para problemas de negocio.',
  'Custom systems':
    'Sistemas a medida',
  'Requirements analysis':
    'Análisis de requerimientos',
  'Integrations and automation':
    'Integraciones y automatización',
  'Support and continuity':
    'Soporte y continuidad',
  'Security and quality by design':
    'Seguridad y calidad desde el diseño',
  'Want to know more about my background?':
    '¿Querés conocer mi trayectoria?',
  '200ok.dev on Instagram':
    '200ok.dev en Instagram',
  'Let\'s talk':
    'Hablemos',
  'Argentina · Remote':
    'Argentina · Remoto',
  'Projects I designed and published. Each one started from a specific problem.':
    'Proyectos que diseñé y publiqué. Cada uno arrancó con un problema concreto.',
  'Project for a family business':
    'Proyecto para una empresa familiar',
  'A staff-only portal that unifies pools, linings, covers, fencing and tiling, centralizes prices and materials, generates pool renders, and keeps a history per client with Word/PDF export.':
    'Un portal solo para el equipo que unifica piscinas, revestimientos, cobertores, cercos y losetas, centraliza precios y materiales, genera renders de piscinas y guarda un historial por cliente con exportación a Word/PDF.',
  'What I do':
    'Qué hago',
  'Jan 2026 – Present':
    'Ene 2026 – Actualidad',
  'Full Stack Developer':
    'Desarrollador Full Stack',
  'Playa y Sol S.A.S., family business':
    'Playa y Sol S.A.S., empresa familiar',
  'I designed and built the Presupuestador, an internal company system: quotes in Word and PDF, pool renders, order assembly and price and stock lookup.':
    'Diseñé y desarrollé el Presupuestador, un sistema interno de la empresa: presupuestos en Word y PDF, renders de piscinas, armado de pedidos y consulta de precios y stock.',
  'I also published my own apps and PWAs: Rincones, Dollar Tracker and dividimos?.':
    'También publiqué mis propias apps y PWAs: Rincones, Dollar Tracker y dividimos?.',
  'Technical Functional Analyst':
    'Analista Funcional Técnico',
  'I gathered requirements and documented them as user stories and flows, acting as the link between users and the development team.':
    'Relevé requerimientos y los documenté como historias de usuario y flujos, como nexo entre usuarios y el equipo de desarrollo.',
  'Functional and technical support for internal and external users (doctors, ambulance staff and clients), user and permission management, training and user manuals.':
    'Soporte funcional y técnico a usuarios internos y externos (médicos, personal de ambulancias y clientes), gestión de usuarios y permisos, capacitación y manuales de uso.',
  'Functional testing and UAT before each release, and work with SQL Server (queries, stored procedures and Jobs).':
    'Pruebas funcionales y UAT antes de cada release, y trabajo con SQL Server (consultas, procedimientos almacenados y Jobs).',
  'I collaborated with the RPA team on a WhatsApp and Email notification automation used in 5 medical centers.':
    'Colaboré con el equipo de RPA en una automatización de notificaciones por WhatsApp y Email usada en 5 centros médicos.',
  'I took part in the training and documentation for migrating the company\'s monolithic system to microservices.':
    'Participé en la capacitación y documentación para migrar el sistema monolítico de la empresa a microservicios.',
  'UTN FRC. Coursework and thesis approved, final exams pending.':
    'UTN FRC. Cursado y tesis aprobados, finales pendientes.',
  'UTN. In progress.':
    'UTN. En curso.',
  'Available for remote work.':
    'Disponible para trabajo remoto.',

  // /links
  'Full portfolio': 'Portfolio completo',
  'Work, services, experience and contact': 'Trabajo, servicios, experiencia y contacto',
  'Projects': 'Proyectos',
  'Wine cellar PWA with AI label reading': 'App de bodega que lee etiquetas con IA',
  'Live exchange rates for Argentina': 'Cotizaciones en vivo de Argentina',
  'Split group expenses, share over WhatsApp': 'Dividir gastos grupales y compartirlos por WhatsApp',
};
