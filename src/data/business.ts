/**
 * Datos reales del negocio. Todo lo que ves como cadena vacía "" o entre
 * corchetes [ASÍ] es un placeholder: sustitúyelo aquí y se actualiza en
 * toda la página automáticamente (header, hero, contacto, footer, JSON-LD).
 *
 * No se ha inventado ningún dato. Rellena solo lo que esté confirmado.
 */
export const business = {
  /** Nombre del técnico o nombre comercial. */
  name: 'Refrigeracionwas',

  /** Número de WhatsApp SOLO dígitos con código de país, sin +, sin espacios. Ej: "584121234567" */
  whatsapp: '',

  /** Teléfono para el botón "Llamar". Ej: "+58 412-123-4567" */
  phone: '',

  /** Horario de atención. Ej: "Lunes a sábado, 8:00 am - 5:00 pm" */
  schedule: '[HORARIO]',

  /** Zonas específicas de Caracas donde trabaja. Ej: "Chacao, Baruta, Las Mercedes..." */
  serviceAreas: '[ZONAS DE SERVICIO]',

  /** Ubicación general, ya confirmada. */
  location: 'Caracas, Venezuela',

  /** Dirección física, si aplica (muchos técnicos independientes no la tienen). */
  address: '',

  /** Años de experiencia. Ej: "10 años" */
  yearsExperience: '',

  /** Marcas que repara. Ej: "LG, Samsung, Whirlpool, Frigidaire" */
  brandsServiced: '',

  /** Garantía ofrecida. Ej: "30 días en repuestos y mano de obra" */
  warranty: '',
} as const;

/** true una vez haya un número de WhatsApp real cargado. */
export const hasWhatsapp = business.whatsapp.trim().length > 0;

/** true una vez haya un teléfono real cargado. */
export const hasPhone = business.phone.trim().length > 0;

/**
 * Enlace de WhatsApp listo para usar. Mientras no haya número real,
 * apunta a la sección de contacto en vez de romper el botón.
 */
export function whatsappLink(message?: string): string {
  if (!hasWhatsapp) return '#contacto';
  const digits = business.whatsapp.replace(/\D/g, '');
  const text = message ? `?text=${encodeURIComponent(message)}` : '';
  return `https://wa.me/${digits}${text}`;
}

/**
 * Enlace tel: listo para usar. Mientras no haya teléfono real,
 * apunta a la sección de contacto en vez de romper el botón.
 */
export function phoneLink(): string {
  if (!hasPhone) return '#contacto';
  return `tel:${business.phone.replace(/[^\d+]/g, '')}`;
}
