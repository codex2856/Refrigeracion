import { motion } from 'motion/react';
import { SectionTitle } from './SectionTitle';
import { whatsappLink } from '../data/business';
import { IconArrowRight, IconFridge, IconWasher, IconWind, IconWrench } from './icons';
import type { ComponentType, SVGProps } from 'react';

interface Service {
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

const SERVICES: Service[] = [
  {
    Icon: IconWind,
    title: 'Aire acondicionado',
    description: 'Reparación, mantenimiento y diagnóstico de equipos de aire acondicionado.',
  },
  {
    Icon: IconFridge,
    title: 'Neveras',
    description: 'Diagnóstico y reparación de neveras y refrigeradores.',
  },
  {
    Icon: IconWasher,
    title: 'Lavadoras',
    description: 'Reparación y mantenimiento de lavadoras.',
  },
  {
    Icon: IconWrench,
    title: 'Electrodomésticos',
    description: 'Diagnóstico y reparación de diferentes equipos del hogar.',
  },
];

export function Services() {
  return (
    <section id="servicios" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8">
      <SectionTitle
        eyebrow="Servicios"
        title="Qué reparamos"
        description="Servicio técnico enfocado en los equipos que más se dañan en el hogar."
      />

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((s, i) => (
          <motion.a
            key={s.title}
            href={whatsappLink(`Hola, necesito ayuda con: ${s.title}.`)}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -6 }}
            className="group flex flex-col gap-4 rounded-2xl border border-cloud-line bg-white p-6 shadow-soft transition-shadow duration-200 hover:shadow-lift"
          >
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-ice-light text-ice-dark transition-colors group-hover:bg-ice group-hover:text-white">
              <s.Icon className="h-6 w-6" />
            </span>
            <div>
              <h3 className="font-display text-lg font-bold text-ink">{s.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{s.description}</p>
            </div>
            <span className="mt-auto inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.08em] text-ice-dark">
              Contactar
              <IconArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
