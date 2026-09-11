/**
 * Resuelve una ruta de /public respetando el base path del build (Vite),
 * necesario porque el sitio se publica en una subruta (GitHub Pages).
 */
export function asset(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;
}
