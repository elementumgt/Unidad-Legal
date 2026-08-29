<p align="center">
  <img src="assets/media/unidad.png" alt="Logo de Unidad" width="160" height="160">
</p>

<h1 align="center">Unidad Docs</h1>

<p align="center">
  Centro bilingüe de documentación, privacidad y condiciones del servicio para el bot de Discord <strong>Unidad</strong>.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react&amp;logoColor=111827" alt="React 19">
  <img src="https://img.shields.io/badge/Vite-8-646CFF?logo=vite&amp;logoColor=white" alt="Vite 8">
  <img src="https://img.shields.io/badge/Material_UI-9-007FFF?logo=mui&amp;logoColor=white" alt="Material UI 9">
  <img src="https://img.shields.io/badge/GitHub_Pages-publicado-222222?logo=githubpages&amp;logoColor=white" alt="Publicado con GitHub Pages">
</p>

## Páginas

- `/`: centro legal.
- `/docs/`: documentación completa de los 25 comandos y sus 95 acciones, con sintaxis, ejemplos, permisos, límites y comportamiento.
- `/privacidad/`: Política de Privacidad.
- `/terminos/`: Condiciones del Servicio.

La aplicación conserva un único `index.html`; toda la interfaz y el contenido viven en React. React Router realiza las transiciones internas sin recargar la página. El build genera entradas para las rutas limpias dentro de `dist/`, por lo que GitHub Pages también puede abrir directamente cada URL sin duplicar HTML fuente ni utilizar rutas con `#`. Español es el idioma inicial y el tema del sistema es el modo visual predeterminado; ambas preferencias se guardan localmente en el navegador.

## Desarrollo

Requiere Node.js 22.

```bash
npm install
npm run dev
```

Validación completa:

```bash
npm run check
```

`npm run check` ejecuta ESLint, pruebas unitarias y el build de producción. La publicación de `main` utiliza GitHub Actions y entrega exclusivamente `dist/` a GitHub Pages.

## Arquitectura

- `src/inicio/`: portada y componentes exclusivos del centro.
- `src/docs/`: página, componentes, catálogo bilingüe y pruebas de los 25 comandos y 95 acciones.
- `src/privacidad/`: página, componente, contenido y pruebas de la Política de Privacidad.
- `src/terminos/`: página, componente, contenido y pruebas de las Condiciones del Servicio.
- `src/shared/legal/`: renderer, estructura y validadores reutilizados exclusivamente por los dos módulos legales.
- `src/context/`: preferencias persistentes de idioma y tema.
- `src/components/`: shell compartido: navbar, footer, controles y drawer lateral fijo con scroll independiente.
- `src/styles/`: Tailwind y receta glassmorphism adaptada de PeoplePortal a la identidad visual de Unidad.
- `src/theme-init.js`: resolución temprana del tema para evitar destellos durante la carga.

El contenido de cada idioma se renderiza de forma exclusiva en React; no se mantienen dos copias visibles u ocultas en el DOM.
