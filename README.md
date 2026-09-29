# Refrigeración WAS

Página web de **Refrigeración WAS**, técnico de refrigeración independiente en Caracas, Venezuela (Wilfredo Salazar). Reparación y mantenimiento de aires acondicionados, neveras, lavadoras/secadoras y electrodomésticos, con contacto directo por WhatsApp.

**Sitio en vivo:** https://refrigeracionwas.com

## Stack

- [React](https://react.dev) + [Vite](https://vite.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Motion](https://motion.dev) para animaciones

## Desarrollo local

```bash
npm install
npm run dev       # servidor local con recarga en caliente
npm run build     # build de producción (a /dist)
npm run preview   # sirve el build de producción localmente
npm run lint      # revisa el código con oxlint
```

## Estructura

- `src/data/business.ts` — datos reales del negocio (nombre, WhatsApp, horario, etc.), centralizados aquí para que se actualicen en toda la página al cambiarlos en un solo lugar.
- `src/components/` — secciones de la página (Hero, Servicios, FAQ, Contacto...).
- `privacidad.html` / `src/PrivacyApp.tsx` — página de política de privacidad, como entrada separada del build.

## Despliegue

El sitio se publica automáticamente en [GitHub Pages](https://pages.github.com) mediante GitHub Actions (`.github/workflows/deploy-pages.yml`) en cada push a la rama principal.
