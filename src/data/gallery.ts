export type GalleryCategory = 'Aires acondicionados' | 'Neveras' | 'Lavadoras/Secadoras' | 'Otros electrodomésticos';

export interface GalleryItem {
  category: GalleryCategory;
  /** Ruta a la fotografía real, ej: "/trabajos/ac-01.jpg". Déjalo en null mientras no haya fotos reales. */
  image: string | null;
}

export const GALLERY_CATEGORIES: GalleryCategory[] = [
  'Aires acondicionados',
  'Neveras',
  'Lavadoras/Secadoras',
  'Otros electrodomésticos',
];

/**
 * Añade un objeto por cada fotografía real cuando esté disponible, con su
 * categoría correspondiente e `image` apuntando al archivo en /public.
 * Mientras `image` sea null se muestra un marcador visual, no una foto falsa.
 */
export const GALLERY_ITEMS: GalleryItem[] = [
  { category: 'Aires acondicionados', image: null },
  { category: 'Aires acondicionados', image: null },
  { category: 'Neveras', image: null },
  { category: 'Neveras', image: null },
  { category: 'Lavadoras/Secadoras', image: null },
  { category: 'Lavadoras/Secadoras', image: null },
  { category: 'Otros electrodomésticos', image: null },
  { category: 'Otros electrodomésticos', image: null },
];
