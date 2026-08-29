import { bilingual, list, paragraph } from "../../shared/legal/documentBuilders.js";

export const termsDocument = Object.freeze({
  kind: "terms",
  title: bilingual("Condiciones del Servicio", "Terms of Service"),
  eyebrow: bilingual("Uso responsable", "Responsible use"),
  summary: bilingual(
    "Al instalar Unidad o utilizar sus comandos, aceptas estas reglas de uso y las políticas aplicables de Discord.",
    "By installing Unidad or using its commands, you agree to these usage rules and Discord’s applicable policies.",
  ),
  updated: bilingual("29 de agosto de 2026", "August 29, 2026"),
  sections: [
    {
      id: "aceptacion",
      title: bilingual("1. Aceptación", "1. Acceptance"),
      blocks: [
        paragraph(
          "Estas Condiciones regulan el acceso y uso del bot de Discord Unidad. Si instalas el bot en nombre de una comunidad, declaras que tienes autorización para aceptar estas Condiciones y configurar el servicio.",
          "These Terms govern access to and use of the Unidad Discord bot. If you install the bot for a community, you represent that you are authorized to accept these Terms and configure the service.",
        ),
        paragraph(
          "Si no estás de acuerdo, no instales el bot, deja de utilizar sus funciones y, si eres administrador, retíralo del servidor.",
          "If you do not agree, do not install the bot, stop using its features, and, if you are an administrator, remove it from the server.",
        ),
      ],
    },
    {
      id: "servicio",
      title: bilingual("2. Descripción del servicio", "2. Service description"),
      blocks: [
        paragraph(
          "Unidad es un bot multipropósito para comunidades de Discord. Sus funciones pueden incluir moderación, roles, verificación, XP, economía, tickets, coaching, eventos, perfiles de juego, canales de voz temporales, avisos de Twitch y reproducción musical.",
          "Unidad is a multipurpose bot for Discord communities. Its features may include moderation, roles, verification, XP, economy, tickets, coaching, events, game profiles, temporary voice channels, Twitch notifications, and music playback.",
        ),
        paragraph(
          "Los módulos disponibles pueden cambiar, estar limitados por permisos o depender de Discord y otros proveedores externos.",
          "Available modules may change, be limited by permissions, or depend on Discord and other external providers.",
        ),
      ],
    },
    {
      id: "elegibilidad",
      title: bilingual("3. Elegibilidad y cuentas", "3. Eligibility and accounts"),
      blocks: [
        list(
          [
            "Debes cumplir la edad mínima y las condiciones requeridas por Discord en tu jurisdicción.",
            "Debes conservar el control de tu cuenta y no compartir credenciales ni tokens.",
            "Los administradores deben conceder únicamente los permisos que el bot necesita y respetar los derechos de los miembros.",
          ],
          [
            "You must meet Discord’s minimum age and terms in your jurisdiction.",
            "You must keep control of your account and never share credentials or tokens.",
            "Administrators must grant only the permissions the bot needs and respect members’ rights.",
          ],
        ),
      ],
    },
    {
      id: "uso-aceptable",
      title: bilingual("4. Uso aceptable", "4. Acceptable use"),
      blocks: [
        list(
          [
            "Utiliza Unidad conforme a la ley, estas Condiciones y las políticas de Discord.",
            "Configura roles, moderación, registros y canales con una finalidad legítima para tu comunidad.",
            "Informa a los miembros sobre reglas adicionales y tratamiento de datos cuando sea necesario.",
            "Respeta los límites técnicos y las indicaciones de los administradores autorizados.",
          ],
          [
            "Use Unidad in accordance with law, these Terms, and Discord’s policies.",
            "Configure roles, moderation, logs, and channels for a legitimate community purpose.",
            "Notify members about additional rules and data processing where necessary.",
            "Respect technical limits and instructions from authorized administrators.",
          ],
        ),
      ],
    },
    {
      id: "prohibido",
      title: bilingual("5. Conducta prohibida", "5. Prohibited conduct"),
      blocks: [
        list(
          [
            "Abusar de comandos, eludir límites, automatizar solicitudes masivas o degradar el servicio.",
            "Intentar acceder a sistemas, datos, credenciales o funciones sin autorización.",
            "Usar el bot para acoso, fraude, spam, distribución maliciosa o actividades ilegales.",
            "Manipular permisos o suplantar a usuarios, administradores u operadores.",
            "Realizar ingeniería inversa o pruebas de seguridad sin autorización previa cuando puedan afectar el servicio.",
          ],
          [
            "Abuse commands, bypass limits, automate bulk requests, or degrade the service.",
            "Attempt to access systems, data, credentials, or features without authorization.",
            "Use the bot for harassment, fraud, spam, malicious distribution, or illegal activities.",
            "Manipulate permissions or impersonate users, administrators, or operators.",
            "Reverse engineer or perform security testing without prior authorization when it may affect the service.",
          ],
        ),
      ],
    },
    {
      id: "contenido",
      title: bilingual("6. Contenido y propiedad intelectual", "6. Content and intellectual property"),
      blocks: [
        paragraph(
          "Conservas los derechos sobre el contenido que proporcionas. Nos concedes una licencia limitada para procesarlo únicamente en la medida necesaria para ejecutar la función solicitada, mostrar respuestas y mantener el servicio.",
          "You retain rights to content you provide. You grant us a limited license to process it only as needed to perform the requested feature, display responses, and maintain the service.",
        ),
        paragraph(
          "Eres responsable de contar con los derechos y autorizaciones necesarios para el contenido, nombres, imágenes, comandos personalizados y configuraciones que publiques mediante Unidad.",
          "You are responsible for having the rights and permissions required for content, names, images, custom commands, and settings you publish through Unidad.",
        ),
      ],
    },
    {
      id: "musica",
      title: bilingual("7. Música y servicios externos", "7. Music and third-party services"),
      blocks: [
        paragraph(
          "La búsqueda y reproducción dependen de servicios como Discord, YouTube, Spotify, SoundCloud, Apple Music, Twitch y otros proveedores. El uso de esos servicios está sujeto a sus propias condiciones y disponibilidad.",
          "Search and playback depend on services such as Discord, YouTube, Spotify, SoundCloud, Apple Music, Twitch, and other providers. Use of those services is subject to their own terms and availability.",
        ),
        paragraph(
          "Unidad no concede licencias sobre música ni contenido de terceros. Los usuarios y administradores son responsables de cumplir la legislación de propiedad intelectual aplicable.",
          "Unidad does not grant licenses to music or third-party content. Users and administrators are responsible for complying with applicable intellectual-property law.",
        ),
      ],
    },
    {
      id: "disponibilidad",
      title: bilingual("8. Disponibilidad y cambios", "8. Availability and changes"),
      blocks: [
        paragraph(
          "El servicio se proporciona de forma continua cuando es razonablemente posible, pero no garantizamos disponibilidad ininterrumpida. Puede haber mantenimiento, límites de proveedores, fallos de red, cambios de API o interrupciones fuera de nuestro control.",
          "The service is provided continuously where reasonably possible, but uninterrupted availability is not guaranteed. Maintenance, provider limits, network failures, API changes, or outages beyond our control may occur.",
        ),
        paragraph(
          "Podemos añadir, modificar, limitar o retirar funciones para mejorar seguridad, rendimiento, cumplimiento o sostenibilidad.",
          "We may add, modify, limit, or remove features to improve security, performance, compliance, or sustainability.",
        ),
      ],
    },
    {
      id: "garantias",
      title: bilingual("9. Garantías", "9. Warranties"),
      blocks: [
        paragraph(
          "Unidad se proporciona “tal cual” y “según disponibilidad”. En la máxima medida permitida por la ley, no ofrecemos garantías implícitas de comerciabilidad, adecuación para un propósito específico, exactitud o ausencia de errores.",
          "Unidad is provided “as is” and “as available.” To the fullest extent permitted by law, we disclaim implied warranties of merchantability, fitness for a particular purpose, accuracy, and error-free operation.",
        ),
      ],
    },
    {
      id: "responsabilidad",
      title: bilingual("10. Limitación de responsabilidad", "10. Limitation of liability"),
      blocks: [
        paragraph(
          "En la máxima medida permitida por la ley, el operador no será responsable por daños indirectos, incidentales, especiales, consecuentes o pérdida de datos, reputación, ingresos o acceso derivados del uso o imposibilidad de usar Unidad.",
          "To the fullest extent permitted by law, the operator will not be liable for indirect, incidental, special, consequential damages, or loss of data, reputation, revenue, or access arising from use of or inability to use Unidad.",
        ),
        paragraph(
          "Nada en estas Condiciones excluye responsabilidades que no puedan limitarse legalmente.",
          "Nothing in these Terms excludes liability that cannot legally be limited.",
        ),
      ],
    },
    {
      id: "suspension",
      title: bilingual("11. Suspensión y terminación", "11. Suspension and termination"),
      blocks: [
        paragraph(
          "Puedes dejar de usar Unidad en cualquier momento. Un administrador autorizado puede retirarlo del servidor. Podemos limitar o suspender el acceso cuando sea necesario para proteger el servicio, responder a abuso, cumplir la ley o hacer cumplir estas Condiciones.",
          "You may stop using Unidad at any time. An authorized administrator may remove it from the server. We may limit or suspend access when needed to protect the service, respond to abuse, comply with law, or enforce these Terms.",
        ),
      ],
    },
    {
      id: "contacto",
      title: bilingual("12. Actualizaciones y contacto", "12. Updates and contact"),
      blocks: [
        paragraph(
          "Podemos actualizar estas Condiciones. La fecha de vigencia se modificará cuando publiquemos una versión nueva. El uso continuado después de la entrada en vigor implica aceptación; si no estás de acuerdo, debes dejar de utilizar el servicio.",
          "We may update these Terms. The effective date will change when a new version is published. Continued use after the effective date constitutes acceptance; if you disagree, you must stop using the service.",
        ),
        paragraph(
          "Para consultas sobre estas Condiciones, contacta al propietario de la aplicación en Discord: @bryanjosue_17. Nunca envíes contraseñas, tokens ni otras credenciales.",
          "For questions about these Terms, contact the application owner on Discord: @bryanjosue_17. Never send passwords, tokens, or other credentials.",
        ),
      ],
    },
  ],
});

