import { IconFridge, IconWasher, IconWind, IconWrench } from '../components/icons';
import type { ComponentType, SVGProps } from 'react';

export interface Service {
  /** Identificador estable para futuras páginas individuales (/servicios/[slug]). */
  slug: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

/**
 * Servicios reales que ofrece Refrigeración WAS. Cada uno tiene un `slug`
 * propio para que, cuando se agreguen páginas individuales por servicio,
 * solo haya que enrutar hacia este mismo dato — no reestructurarlo.
 */
export const SERVICES: Service[] = [
  {
    slug: 'aire-acondicionado',
    Icon: IconWind,
    title: 'Aire acondicionado',
    description: 'Reparación, mantenimiento y diagnóstico de equipos de aire acondicionado.',
  },
  {
    slug: 'neveras',
    Icon: IconFridge,
    title: 'Neveras',
    description: 'Diagnóstico y reparación de neveras y refrigeradores.',
  },
  {
    slug: 'lavadoras',
    Icon: IconWasher,
    title: 'Lavadoras',
    description: 'Reparación y mantenimiento de lavadoras.',
  },
  {
    slug: 'electrodomesticos',
    Icon: IconWrench,
    title: 'Electrodomésticos',
    description: 'Diagnóstico y reparación de diferentes equipos del hogar.',
  },
];
