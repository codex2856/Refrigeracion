import { motion } from 'motion/react';
import { SectionTitle } from './SectionTitle';
import { IconCalendarCheck, IconMessageCircle, IconSearch, IconWrench } from './icons';
import type { ComponentType, SVGProps } from 'react';

interface Step {
  number: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

const STEPS: Step[] = [
  { number: '01', Icon: IconMessageCircle, title: 'Contacta', description: 'El cliente explica el problema que presenta el equipo.' },
  { number: '02', Icon: IconCalendarCheck, title: 'Coordinamos', description: 'Se acuerda la visita y los detalles del servicio.' },
  { number: '03', Icon: IconSearch, title: 'Diagnosticamos', description: 'Se revisa el equipo para identificar la avería.' },
  { number: '04', Icon: IconWrench, title: 'Reparamos', description: 'Se realiza el trabajo correspondiente.' },
];

export function HowItWorks() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionTitle eyebrow="Proceso" title="Cómo funciona" align="center" />

      <div className="relative mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="pointer-events-none absolute left-0 right-0 top-6 hidden border-t-2 border-dashed border-cloud-line lg:block" />
        {STEPS.map((s, i) => (
          <motion.div
            key={s.number}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex flex-col items-center gap-3 text-center"
          >
            <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-ice bg-white font-display text-sm font-extrabold text-ice-dark shadow-soft">
              {s.number}
            </span>
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-ice-light text-ice-dark">
              <s.Icon className="h-5 w-5" />
            </span>
            <h3 className="font-display text-lg font-bold text-ink">{s.title}</h3>
            <p className="max-w-[220px] text-sm leading-relaxed text-ink-soft">{s.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
