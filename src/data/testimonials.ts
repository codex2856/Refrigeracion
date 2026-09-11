export interface Testimonial {
  /** Texto real del testimonio del cliente. */
  quote: string;
  /** Nombre del cliente (o iniciales, según lo que autoricen). */
  name: string;
  /** Ej: "Reparación de aire acondicionado" */
  service: string;
}

/**
 * Reemplaza cada entrada por un testimonio real cuando esté disponible.
 * No se han inventado testimonios: todo aquí es un placeholder.
 */
export const TESTIMONIALS: Testimonial[] = [
  { quote: '[TESTIMONIO DE CLIENTE]', name: '[NOMBRE DEL CLIENTE]', service: '[SERVICIO REALIZADO]' },
  { quote: '[TESTIMONIO DE CLIENTE]', name: '[NOMBRE DEL CLIENTE]', service: '[SERVICIO REALIZADO]' },
  { quote: '[TESTIMONIO DE CLIENTE]', name: '[NOMBRE DEL CLIENTE]', service: '[SERVICIO REALIZADO]' },
];
