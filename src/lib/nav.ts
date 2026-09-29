/**
 * Enlace a una sección de la página de inicio. Si ya estamos en el inicio,
 * es un ancla normal (scroll suave). Si estamos en otra página (ej.
 * privacidad.html), primero navega a index.html y luego salta al ancla.
 */
export function homeLink(hash: string = 'top'): string {
  if (typeof window === 'undefined') return `/#${hash}`;
  const last = window.location.pathname.split('/').pop() || '';
  const isHome = last === '' || last === 'index.html';
  return isHome ? `#${hash}` : `index.html#${hash}`;
}
