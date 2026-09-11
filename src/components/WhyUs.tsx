import { motion } from 'motion/react';
import { SectionTitle } from './SectionTitle';
import { IconClipboardCheck, IconMessageCircle, IconPin, IconSearch, IconUser, IconWrench } from './icons';
import type { ComponentType, SVGProps } from 'react';

interface Reason {
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

const REASONS: Reason[] = [
  {
    Icon: IconUser,
    title: 'Atención personalizada',
    description: 'Cada caso se atiende según el problema específico de tu equipo.',
  },
  {
    Icon: IconWrench,
    title: 'Servicio técnico',
    description: 'Reparación con herramientas y procedimiento adecuados para cada equipo.',
  },
  {
    Icon: IconSearch,
    title: 'Diagnóstico del problema',
    description: 'Se revisa el equipo para identificar la causa antes de reparar.',
  },
  {
    Icon: IconPin,
    title: 'Atención en Caracas',
    description: 'Servicio técnico disponible en Caracas, Venezuela.',
  },
  {
    Icon: IconClipboardCheck,
    title: 'Reparación y mantenimiento',
    description: 'Solución de la falla y recomendaciones para prevenir futuros daños.',
  },
  {
    Icon: IconMessageCircle,
    title: 'Contacto directo con el técnico',
    description: 'Coordinas la visita y el servicio directamente, sin intermediarios.',
  },
];

export function WhyUs() {
  return (
    <section id="nosotros" className="relative overflow-hidden bg-night">
      <div className="absolute inset-0 grain" />
      <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-ice/10 blur-[110px]" />
      <div className="relative mx-auto max-w-6xl scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Confianza"
          title="Por qué elegir a este técnico"
          description="Un servicio pensado para resolver el problema de tu equipo con claridad y comunicación directa."
          tone="dark"
        />

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="frost flex flex-col gap-3 rounded-2xl p-5"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-ice/15 text-ice">
                <r.Icon className="h-5 w-5" />
              </span>
              <h3 className="font-display text-base font-bold text-white">{r.title}</h3>
              <p className="text-sm leading-relaxed text-white/65">{r.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
