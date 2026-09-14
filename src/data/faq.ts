import { business } from './business';

export interface FaqItem {
  question: string;
  answer: string;
}

const PENDING = '[Información pendiente de confirmar]';

/**
 * Preguntas frecuentes. Las respuestas que dependen de un dato del negocio
 * que todavía no tenemos (precio, garantía, tiempos, zonas) usan el
 * placeholder PENDING — no se ha inventado ninguna cifra ni condición.
 */
export const FAQ: FaqItem[] = [
  {
    question: '¿Atienden a domicilio?',
    answer: 'Sí, el servicio se coordina para atender el equipo en tu casa.',
  },
  {
    question: '¿Qué equipos reparan?',
    answer: 'Aires acondicionados, neveras, lavadoras/secadoras y electrodomésticos en general.',
  },
  {
    question: '¿Qué zonas cubren?',
    answer:
      business.serviceAreas.startsWith('[')
        ? `Trabajamos en ${business.location}. Zonas específicas: ${PENDING}`
        : `Trabajamos en ${business.serviceAreas}, ${business.location}.`,
  },
  {
    question: '¿Cuánto cuesta la visita?',
    answer: `La visita para diagnosticar el equipo cuesta ${business.visitFee}.`,
  },
  {
    question: '¿Cuánto cuesta una reparación?',
    answer: `La visita de diagnóstico cuesta ${business.visitFee}. El costo de la reparación en sí depende del equipo y la falla. ${PENDING}`,
  },
  {
    question: '¿Cuánto tarda una reparación?',
    answer: `Depende del diagnóstico y la disponibilidad de repuestos. ${PENDING}`,
  },
  {
    question: '¿Ofrecen garantía?',
    answer: business.warranty || PENDING,
  },
  {
    question: '¿Qué hago si mi nevera no enfría?',
    answer:
      'Revisa que esté bien conectada y que el termostato no esté al mínimo. Si sigue sin enfriar, evita forzarla y contáctanos para diagnosticarla.',
  },
];
