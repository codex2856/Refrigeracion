/**
 * Datos reales del negocio. Todo lo que ves como cadena vacía "" o entre
 * corchetes [ASÍ] es un placeholder: sustitúyelo aquí y se actualiza en
 * toda la página automáticamente (header, hero, contacto, footer, JSON-LD).
 *
 * No se ha inventado ningún dato. Rellena solo lo que esté confirmado.
 */
export const business = {
  /** Nombre del técnico o nombre comercial. */
  name: 'Refrigeración WAS',

  /** Nombre del técnico que atiende. */
  ownerName: 'Wilfredo Salazar',

  /** Usuario de Instagram, sin @. */
  instagram: 'refrigeracion_was',

  /** Foto real del técnico. Ej: "/team/wilfredo.jpg" (colócala en /public). */
  photo: '',

  /** Bio corta para la sección "Conoce Refrigeración WAS". 2-3 frases, en su propia voz. */
  bio: '',

  /** Número de WhatsApp SOLO dígitos con código de país, sin +, sin espacios. Ej: "584121234567" */
  whatsapp: '584143243716',

  /** Teléfono para el botón "Llamar". Ej: "+58 412-123-4567" */
  phone: '+58 414-324-3716',

  /** Horario de atención, día por día. Deja el array vacío mientras no esté confirmado. */
  schedule: [
    { day: 'Lunes', hours: '8:00 a.m. – 5:00 p.m.' },
    { day: 'Martes', hours: '8:00 a.m. – 5:00 p.m.' },
    { day: 'Miércoles', hours: '8:00 a.m. – 5:00 p.m.' },
    { day: 'Jueves', hours: '8:00 a.m. – 5:00 p.m.' },
    { day: 'Viernes', hours: '8:00 a.m. – 5:00 p.m.' },
    { day: 'Sábado', hours: 'Bajo consulta' },
    { day: 'Domingo', hours: 'Bajo consulta' },
  ],

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

/** true una vez haya un horario real cargado. */
export const hasSchedule = business.schedule.length > 0;

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

/** Número de WhatsApp formateado con "+" para mostrar en pantalla. */
export function whatsappDisplay(): string {
  return hasWhatsapp ? `+${business.whatsapp}` : '';
}

/**
 * Enlace tel: listo para usar. Mientras no haya teléfono real,
 * apunta a la sección de contacto en vez de romper el botón.
 */
export function phoneLink(): string {
  if (!hasPhone) return '#contacto';
  return `tel:${business.phone.replace(/[^\d+]/g, '')}`;
}

/** Enlace al perfil de Instagram. */
export function instagramLink(): string {
  return `https://instagram.com/${business.instagram}`;
}
