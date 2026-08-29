const t = (es, en) => ({ es, en });
const exampleTokens = {
  "[canal]": "#general",
  "[cantidad]": "250",
  "[categoria]": "Soporte",
  "[categorias]": "color,region",
  "[clave]": "soporte",
  "[color]": "#5865F2",
  "[descripcion]": "Acceso VIP",
  "[dueno]": "@Bryan",
  "[emoji]": "🎮",
  "[estado]": "on",
  "[etiqueta]": "Miembro",
  "[game]": "overwatch",
  "[id]": "1",
  "[limite]": "10",
  "[nombre]": "Unidad",
  "[nota]": "Selecciona una opción",
  "[orden]": "1",
  "[posicion]": "tank",
  "[rank]": "gold",
  "[requiere_perfil]": "true",
  "[requires_profile]": "true",
  "[rol]": "@Miembro",
  "[rolgate]": "@Verificado",
  "[role_emoji]": "🏆",
  "[channel_emoji]": "🎮",
  "[tier]": "5",
  "[titulo]": "Elige tus roles",
  "[url]": "https://example.com/banner.png",
  "[user_limit]": "5",
  "[usuario]": "@Bryan",
  "[valor]": "true",
};

const requiredExampleTokens = {
  canal: "#general",
  cancion: "Never Gonna Give You Up",
  cantidad: "250",
  category: "#Competitivo",
  categoria: "#Soporte",
  categorias: "color,region",
  clave: "xp.enabled",
  color: "#5865F2",
  descripcion: "Acceso VIP",
  emoji: "🎮",
  estado: "on",
  game: "overwatch",
  id: "1",
  label: "Oro",
  limite: "10",
  modulo: "music",
  nivel: "75",
  nombre: "Unidad",
  palabra: "spam",
  posicion: "tank",
  precio: "500",
  rank: "gold",
  respuesta: "Consulta #reglas",
  rol: "@Miembro",
  tier: "5",
  tipo: "general",
  titulo: "Elige tus roles",
  trigger: "reglas",
  usuario: "@Bryan",
  valor: "true",
};

function buildExample(syntax) {
  let example = syntax;
  for (const [token, value] of Object.entries(exampleTokens)) {
    example = example.replaceAll(token, value);
  }
  return example
    .split(" ")
    .map((token, index) => (index < 2 ? token : (requiredExampleTokens[token] ?? token)))
    .join(" ");
}

const u = (syntax, es, en, example = buildExample(syntax)) => ({
  syntax,
  example,
  description: t(es, en),
});

export const commandGroups = [
  {
    id: "inicio",
    title: t("Primeros pasos", "Getting started"),
    description: t("Comandos básicos y configuración inicial del servidor.", "Basic commands and initial server setup."),
    commands: [
      {
        name: "help",
        summary: t("Muestra el catálogo de comandos disponible dentro de Discord.", "Shows the command catalog available inside Discord."),
        access: t("Todos los miembros.", "All members."),
        usage: [u("/help", "Abre la ayuda privada del bot.", "Opens the bot’s private help response.")],
      },
      {
        name: "ping",
        summary: t("Comprueba que el bot está conectado y responde.", "Checks that the bot is connected and responsive."),
        access: t("Todos los miembros.", "All members."),
        usage: [u("/ping", "Devuelve la latencia y el estado básico.", "Returns latency and basic status.")],
      },
      {
        name: "setup",
        summary: t("Asistente guiado para preparar Unidad en un servidor nuevo.", "Guided assistant for preparing Unidad in a new server."),
        access: t("Permiso Administrador de Discord.", "Discord Administrator permission."),
        usage: [
          u("/setup wizard", "Inicia la configuración paso a paso.", "Starts step-by-step setup."),
          u("/setup status", "Resume qué componentes están configurados o pendientes.", "Summarizes configured and pending components."),
        ],
        notes: t("Ejecuta status antes y después del wizard para verificar el resultado.", "Run status before and after the wizard to verify the result."),
      },
    ],
  },
  {
    id: "perfil-economia",
    title: t("Perfil y economía", "Profile and economy"),
    description: t("Progresión, monedas, transferencias y tienda del servidor.", "Progression, currency, transfers, and the server shop."),
    commands: [
      {
        name: "nivel",
        summary: t("Consulta XP y nivel propio o de otro miembro.", "Shows your XP and level or another member’s."),
        access: t("Todos los miembros; requiere el módulo XP activo.", "All members; requires the XP module."),
        usage: [u("/nivel [usuario]", "Sin usuario muestra tu propio perfil.", "Without a user, shows your own profile.")],
      },
      {
        name: "eco",
        summary: t("Opera la economía comunitaria con saldo, pagos y recompensas.", "Operates the community economy with balances, payments, and rewards."),
        access: t("Todos los miembros; requiere el módulo economía activo.", "All members; requires the economy module."),
        usage: [
          u("/eco balance [usuario]", "Consulta un saldo.", "Checks a balance."),
          u("/eco pay usuario cantidad", "Transfiere monedas de forma atómica.", "Transfers currency atomically."),
          u("/eco daily", "Reclama la recompensa diaria cuando termina el cooldown.", "Claims the daily reward after cooldown."),
          u("/eco work", "Obtiene una recompensa de trabajo sujeta a cooldown.", "Earns a work reward subject to cooldown."),
        ],
      },
      {
        name: "shop",
        summary: t("Consulta y compra artículos configurados por el servidor.", "Browses and purchases server-configured items."),
        access: t("Todos los miembros; requiere economía activa.", "All members; requires economy."),
        usage: [
          u("/shop list", "Lista artículos, precios e identificadores.", "Lists items, prices, and identifiers."),
          u("/shop buy id", "Compra el artículo; saldo e inventario cambian en una transacción.", "Purchases the item; balance and inventory change in one transaction."),
        ],
      },
    ],
  },
  {
    id: "musica",
    title: t("Música", "Music"),
    description: t("Reproducción Lavalink, cola persistente e historial durable.", "Lavalink playback, persistent queue, and durable history."),
    commands: [
      {
        name: "play",
        summary: t("Busca o agrega música a la cola del servidor.", "Searches for or adds music to the server queue."),
        access: t("Miembro conectado a voz; música activa.", "Member connected to voice; music enabled."),
        usage: [u("/play cancion", "Acepta texto o URL HTTPS de YouTube, Spotify, SoundCloud o Apple Music.", "Accepts text or an HTTPS URL from YouTube, Spotify, SoundCloud, or Apple Music.")],
        notes: t("La cola admite hasta 100 pistas. Si había una cola persistida sin reproductor, se restaura antes de añadir la nueva canción.", "The queue supports up to 100 tracks. If a persisted queue exists without a player, it is restored before adding the new track."),
      },
      {
        name: "queue",
        summary: t("Muestra la pista actual y las próximas canciones.", "Shows the current track and upcoming songs."),
        access: t("Todos los miembros.", "All members."),
        usage: [u("/queue", "También muestra una cola guardada cuando el bot está desconectado de voz.", "Also shows a saved queue while the bot is disconnected from voice.")],
      },
      {
        name: "history",
        summary: t("Consulta pistas reproducidas, saltadas o fallidas.", "Shows played, skipped, or failed tracks."),
        access: t("Todos los miembros.", "All members."),
        usage: [u("/history [limite]", "Devuelve entre 1 y 25 registros recientes.", "Returns between 1 and 25 recent entries.")],
      },
      {
        name: "skip",
        summary: t("Salta la canción que está sonando.", "Skips the currently playing track."),
        access: t("Mismo canal de voz y rol DJ, Staff o Admin.", "Same voice channel and DJ, Staff, or Admin role."),
        usage: [u("/skip", "Avanza a la siguiente pista disponible.", "Advances to the next available track.")],
      },
      {
        name: "stop",
        summary: t("Detiene la reproducción y elimina la cola intencionalmente.", "Stops playback and intentionally clears the queue."),
        access: t("Mismo canal de voz y rol DJ, Staff o Admin.", "Same voice channel and DJ, Staff, or Admin role."),
        usage: [u("/stop", "Desconecta el reproductor; esta acción no se restaura.", "Disconnects the player; this action is not restored.")],
      },
      {
        name: "volume",
        summary: t("Ajusta el volumen del reproductor del servidor.", "Adjusts the server player volume."),
        access: t("Mismo canal de voz; control protegido por roles musicales.", "Same voice channel; protected by music-control roles."),
        usage: [u("/volume nivel", "Define un valor entre 1 y 100.", "Sets a value between 1 and 100.")],
      },
    ],
  },
  {
    id: "comunidad",
    title: t("Comunidad", "Community"),
    description: t("Eventos, creadores, coaching y soporte mediante tickets.", "Events, creators, coaching, and ticket-based support."),
    commands: [
      {
        name: "event",
        summary: t("Crea, consulta y administra eventos de la comunidad.", "Creates, browses, and manages community events."),
        access: t("Crear/listar: miembro; cancelar: Staff; canal: Admin.", "Create/list: member; cancel: Staff; channel: Admin."),
        usage: [
          u("/event crear", "Abre el formulario interactivo de creación.", "Opens the interactive creation form."),
          u("/event lista", "Muestra próximos eventos.", "Shows upcoming events."),
          u("/event cancelar id", "Cancela un evento por identificador.", "Cancels an event by identifier."),
          u("/event setcanal canal", "Configura el canal de publicaciones.", "Configures the publication channel."),
        ],
      },
      {
        name: "creator",
        summary: t("Vincula creadores de Twitch y configura avisos en vivo.", "Links Twitch creators and configures live alerts."),
        access: t("Lista/quitar: miembro; registrar: Staff; configuración: Admin.", "List/remove: member; register: Staff; configuration: Admin."),
        usage: [
          u("/creator registrar usuario [dueno]", "Vincula Twitch y asigna el rol configurado.", "Links Twitch and assigns the configured role."),
          u("/creator quitar", "Desvincula tu cuenta.", "Unlinks your account."),
          u("/creator lista", "Lista creadores registrados y estado.", "Lists registered creators and status."),
          u("/creator canal canal", "Configura el canal de directos.", "Configures the live-alert channel."),
          u("/creator rolnotif [rol]", "Configura la mención de notificación.", "Configures the notification mention."),
          u("/creator setrole rol", "Configura el rol de creador.", "Configures the creator role."),
        ],
      },
      {
        name: "coaching",
        summary: t("Gestiona solicitudes, mentores, posiciones y sesiones privadas.", "Manages requests, mentors, positions, and private sessions."),
        access: t("Solicitar/listar: miembro; mentores: Staff; configuración: Admin.", "Request/list: member; mentors: Staff; configuration: Admin."),
        usage: [
          u("/coaching solicitar", "Solicita un mentor disponible.", "Requests an available mentor."),
          u("/coaching disponible estado", "Marca disponibilidad del coach.", "Sets coach availability."),
          u("/coaching registrar usuario posicion", "Registra un coach por posición.", "Registers a coach by position."),
          u("/coaching quitar usuario", "Retira un coach.", "Removes a coach."),
          u("/coaching lista [posicion]", "Lista coaches, opcionalmente filtrados.", "Lists coaches, optionally filtered."),
          u("/coaching cerrar", "Cierra la sesión activa.", "Closes the active session."),
          u("/coaching setcanal canal", "Define el canal donde se crean hilos.", "Sets the channel where threads are created."),
          u("/coaching posicion-add clave nombre [emoji] [rol] [orden]", "Crea o actualiza una posición; clave admite hasta 50 caracteres y nombre hasta 100.", "Creates or updates a position; key supports up to 50 characters and name up to 100.", "/coaching posicion-add tank Tanque 🛡️ @Coach 1"),
          u("/coaching posicion-delete clave", "Elimina una posición por su clave interna.", "Deletes a position by its internal key.", "/coaching posicion-delete tank"),
          u("/coaching posicion-list", "Lista todas las posiciones configuradas y su orden.", "Lists all configured positions and their order."),
        ],
      },
      {
        name: "ticket",
        summary: t("Configura categorías y publica el panel de tickets.", "Configures categories and publishes the ticket panel."),
        access: t("Listar: miembro; cambios y panel: Admin.", "List: member; changes and panel: Admin."),
        usage: [
          u("/ticket category-add clave nombre [emoji] [descripcion] [orden]", "Crea o actualiza una categoría.", "Creates or updates a category."),
          u("/ticket category-delete clave", "Elimina una categoría.", "Deletes a category."),
          u("/ticket category-list", "Lista categorías configuradas.", "Lists configured categories."),
          u("/ticket panel canal", "Publica el selector para abrir tickets.", "Publishes the ticket-opening selector."),
        ],
        notes: t("Solo puede existir un ticket abierto por miembro y servidor.", "Only one open ticket may exist per member and server."),
      },
    ],
  },
  {
    id: "personalizacion",
    title: t("Roles y personalización", "Roles and customization"),
    description: t("Autoasignación, cascadas y respuestas personalizadas.", "Self-assignment, cascades, and custom responses."),
    commands: [
      {
        name: "selfrole",
        summary: t("Administra roles autoasignables, secciones y dependencias.", "Manages self-assignable roles, sections, and dependencies."),
        access: t("Gestionar roles de Discord y acceso Admin del bot.", "Discord Manage Roles and bot Admin access."),
        usage: [
          u("/selfrole add rol [etiqueta] [categoria] [orden]", "Añade o actualiza un rol.", "Adds or updates a role."),
          u("/selfrole delete rol", "Elimina un rol del catálogo autoasignable.", "Deletes a role from the self-assignable catalog."),
          u("/selfrole list", "Lista los roles autoasignables configurados.", "Lists configured self-assignable roles."),
          u("/selfrole panel canal", "Publica el panel.", "Publishes the panel."),
          u("/selfrole section-add titulo categorias [emoji] [orden] [rolgate] [nota]", "Crea o edita una sección.", "Creates or edits a section."),
          u("/selfrole section-delete titulo", "Elimina una sección usando su título exacto.", "Deletes a section using its exact title."),
          u("/selfrole section-list", "Lista las secciones y categorías vinculadas.", "Lists sections and their linked categories."),
          u("/selfrole cascade-add rol categorias [titulo]", "Crea opciones dependientes de un rol.", "Creates options dependent on a role."),
          u("/selfrole cascade-delete rol", "Elimina la cascada vinculada a un rol.", "Deletes the cascade linked to a role."),
          u("/selfrole cascade-list", "Lista todas las cascadas configuradas.", "Lists every configured cascade."),
        ],
      },
      {
        name: "cmd",
        summary: t("Crea respuestas de texto personalizadas por servidor.", "Creates per-server custom text responses."),
        access: t("Administrar servidor y rol Staff.", "Manage Server and Staff role."),
        usage: [
          u("/cmd add trigger respuesta", "Crea o reemplaza una respuesta.", "Creates or replaces a response."),
          u("/cmd delete trigger", "Elimina una respuesta.", "Deletes a response."),
          u("/cmd list", "Lista triggers disponibles.", "Lists available triggers."),
        ],
        notes: t("Las respuestas bloquean menciones automáticas peligrosas.", "Responses block dangerous automatic mentions."),
      },
      {
        name: "trigger",
        summary: t("Ejecuta un comando personalizado registrado con /cmd.", "Runs a custom command registered with /cmd."),
        access: t("Todos los miembros.", "All members."),
        usage: [u("/trigger nombre", "El nombre ofrece autocompletado.", "The name supports autocomplete.")],
      },
    ],
  },
  {
    id: "moderacion",
    title: t("Moderación", "Moderation"),
    description: t("Filtros comunitarios y protección de canales.", "Community filters and channel protection."),
    commands: [
      {
        name: "banword",
        summary: t("Gestiona la lista de palabras prohibidas del servidor.", "Manages the server’s banned-word list."),
        access: t("Administrar servidor y rol Staff.", "Manage Server and Staff role."),
        usage: [
          u("/banword add palabra", "Añade una palabra normalizada.", "Adds a normalized word."),
          u("/banword remove palabra", "Retira una palabra.", "Removes a word."),
          u("/banword list", "Muestra la lista actual.", "Shows the current list."),
        ],
      },
    ],
  },
  {
    id: "administracion",
    title: t("Administración", "Administration"),
    description: t("Configuración avanzada, módulos, paneles, canales y roles.", "Advanced configuration, modules, panels, channels, and roles."),
    commands: [
      {
        name: "module",
        summary: t("Activa o desactiva módulos completos del bot.", "Enables or disables entire bot modules."),
        access: t("Administrar servidor y acceso Admin.", "Manage Server and Admin access."),
        usage: [
          u("/module toggle modulo estado", "Controla tickets, música, economía, XP o moderación.", "Controls tickets, music, economy, XP, or moderation."),
          u("/module status", "Muestra el estado de todos los módulos.", "Shows every module’s status."),
        ],
      },
      {
        name: "config",
        summary: t("Consulta o modifica claves avanzadas de configuración.", "Views or changes advanced configuration keys."),
        access: t("Administrar servidor y acceso Admin.", "Manage Server and Admin access."),
        usage: [
          u("/config show", "Muestra la configuración efectiva.", "Shows the effective configuration."),
          u("/config set clave valor", "Modifica una clave validada.", "Changes a validated key."),
        ],
        notes: t("Prefiere /setup y comandos especializados cuando exista una opción dedicada.", "Prefer /setup and specialized commands when a dedicated option exists."),
      },
      {
        name: "admin",
        summary: t("Concentra la configuración operativa del servidor.", "Centralizes operational server configuration."),
        access: t("Administrar servidor y acceso Admin del bot.", "Manage Server and bot Admin access."),
        usage: [
          u("/admin setwelcomechannel canal", "Define el canal de texto donde se publican las bienvenidas.", "Sets the text channel where welcome messages are published.", "/admin setwelcomechannel #bienvenidas"),
          u("/admin setlevelchannel canal", "Define el canal que anuncia las subidas de nivel.", "Sets the channel that announces level-ups.", "/admin setlevelchannel #niveles"),
          u("/admin setroleschannel canal", "Define el canal del panel de selección de roles.", "Sets the role-selection panel channel.", "/admin setroleschannel #roles"),
          u("/admin setlobbychannel canal", "Registra el canal de voz que actuará como lobby temporal.", "Registers the voice channel used as a temporary-room lobby.", "/admin setlobbychannel 🔊 Crear sala"),
          u("/admin setverifychannel canal", "Define el canal donde se publica el panel de verificación.", "Sets the verification-panel channel.", "/admin setverifychannel #verificación"),
          u("/admin setverifyrole rol", "Configura el rol que recibe un miembro al verificarse.", "Configures the role granted after verification.", "/admin setverifyrole @Verificado"),
          u("/admin sendverifypanel", "Publica el panel de verificación en el canal configurado.", "Publishes the verification panel in the configured channel."),
          u("/admin setticketscategory categoria", "Define la categoría de Discord donde se crearán los tickets.", "Sets the Discord category where tickets are created.", "/admin setticketscategory Soporte"),
          u("/admin setstaffrole rol", "Configura el rol de Staff que puede atender tickets y acciones protegidas.", "Configures the Staff role allowed to handle tickets and protected actions.", "/admin setstaffrole @Staff"),
          u("/admin sendticketspanel canal", "Publica el panel para abrir tickets en un canal de texto.", "Publishes the ticket-opening panel in a text channel.", "/admin sendticketspanel #soporte"),
          u("/admin sendembedpanel canal", "Publica el panel interactivo del creador de embeds.", "Publishes the interactive embed-builder panel.", "/admin sendembedpanel #anuncios"),
          u("/admin eco-config nombre emoji", "Personaliza el nombre y emoji de la moneda del servidor.", "Customizes the server currency name and emoji.", "/admin eco-config créditos 💎"),
          u("/admin shop-add nombre precio [rol] [descripcion]", "Añade un artículo; puede conceder un rol y tener descripción.", "Adds an item; it may grant a role and include a description.", "/admin shop-add VIP 500 @VIP Acceso premium"),
          u("/admin eco-give usuario cantidad", "Añade una cantidad positiva al saldo de un miembro.", "Adds a positive amount to a member's balance.", "/admin eco-give @Bryan 250"),
          u("/admin setlogchannel tipo canal", "Asigna un canal al tipo de log mod, voice, tickets o general.", "Assigns a channel to the mod, voice, tickets, or general log type.", "/admin setlogchannel mod #mod-logs"),
          u("/admin setwelcomecolor color", "Cambia el color hexadecimal del embed de bienvenida.", "Changes the welcome embed hexadecimal color.", "/admin setwelcomecolor #5865F2"),
          u("/admin setwelcomeimage [url]", "Define una imagen o GIF HTTPS; sin URL elimina la imagen actual.", "Sets an HTTPS image or GIF; omitting the URL removes the current image.", "/admin setwelcomeimage https://example.com/banner.png"),
          u("/admin setxpcolor color", "Cambia el color hexadecimal del embed de subida de nivel.", "Changes the level-up embed hexadecimal color.", "/admin setxpcolor #57F287"),
          u("/admin setdjrole rol", "Configura el rol autorizado para controlar la música.", "Configures the role authorized to control music.", "/admin setdjrole @DJ"),
          u("/admin seteconomyrole rol", "Configura el rol que puede gestionar saldos y tienda.", "Configures the role allowed to manage balances and the shop.", "/admin seteconomyrole @Economía"),
          u("/admin setrolespanelgame rol", "Define el rol de juego que habilita el perfil avanzado del panel.", "Sets the game role that enables the panel's advanced profile.", "/admin setrolespanelgame @Overwatch"),
          u("/admin setcoachingcorerole rol", "Define el rol Coach general que activa el selector de posiciones.", "Sets the general Coach role that activates position selection.", "/admin setcoachingcorerole @Coach"),
          u("/admin setadminrole rol", "Define el rol con acceso administrativo interno del bot.", "Sets the role with the bot's internal administrative access.", "/admin setadminrole @Administrador"),
          u("/admin setvcpanelchannel canal", "Define dónde se publican los paneles de control de salas temporales.", "Sets where temporary-room control panels are published.", "/admin setvcpanelchannel #control-de-voz"),
        ],
      },
    ],
  },
  {
    id: "voz-rangos",
    title: t("Voz y rangos", "Voice and ranks"),
    description: t("Lobbies, salas temporales y progresión competitiva por juego.", "Lobbies, temporary rooms, and per-game competitive progression."),
    commands: [
      {
        name: "lobby",
        summary: t("Registra y administra lobbies que crean salas temporales.", "Registers and manages lobbies that create temporary rooms."),
        access: t("Administrar servidor y acceso Admin.", "Manage Server and Admin access."),
        usage: [
          u("/lobby create canal nombre [limite] [rol] [emoji] [requiere_perfil]", "Registra un lobby.", "Registers a lobby."),
          u("/lobby edit canal [nombre] [limite] [rol] [emoji] [requiere_perfil]", "Modifica sus opciones.", "Changes its options."),
          u("/lobby delete canal", "Desregistra sin borrar el canal de Discord.", "Unregisters without deleting the Discord channel."),
          u("/lobby list", "Lista lobbies configurados.", "Lists configured lobbies."),
        ],
        notes: t("Las salas vacías se eliminan automáticamente; el propietario controla participantes desde el panel.", "Empty rooms are deleted automatically; the owner controls participants through the panel."),
      },
      {
        name: "rank",
        summary: t("Gestiona rangos por juego y genera lobbies competitivos.", "Manages per-game ranks and generates competitive lobbies."),
        access: t("Administrar servidor y acceso Admin.", "Manage Server and Admin access."),
        usage: [
          u("/rank add game rank label tier [role_emoji] [channel_emoji]", "Crea o actualiza un rango.", "Creates or updates a rank."),
          u("/rank remove game rank", "Elimina un rango.", "Deletes a rank."),
          u("/rank list [game]", "Lista rangos, con filtro opcional.", "Lists ranks with an optional filter."),
          u("/rank lobbies-setup game category [user_limit] [requires_profile]", "Crea lobbies para los rangos del juego.", "Creates lobbies for the game’s ranks."),
          u("/rank lobbies-teardown game", "Elimina únicamente los lobbies de ese juego.", "Deletes only that game’s lobbies."),
        ],
      },
    ],
  },
];

export const commandCount = commandGroups.reduce((total, group) => total + group.commands.length, 0);

export function commandNavigationGroups() {
  return commandGroups.map((group) => ({
    id: group.id,
    label: group.title,
    items: group.commands.map((command) => ({
      id: `command-${command.name}`,
      label: { es: `/${command.name}`, en: `/${command.name}` },
    })),
  }));
}
