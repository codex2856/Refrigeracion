import { motion } from 'motion/react';
import { SectionTitle } from './SectionTitle';
import { Placeholder } from './Placeholder';
import { isPlaceholderValue } from '../lib/placeholder';
import { business } from '../data/business';
import { asset } from '../lib/asset';
import { IconClipboardCheck, IconPin, IconSearch, IconUser, IconWrench } from './icons';
import type { ComponentType, SVGProps } from 'react';

interface Reason {
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

const REASONS: Reason[] = [
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
    description: 'Servicio técnico a domicilio en Caracas, Venezuela.',
  },
  {
    Icon: IconClipboardCheck,
    title: 'Reparación y mantenimiento',
    description: 'Solución de la falla y recomendaciones para prevenir futuros daños.',
  },
];

export function About() {
  const hasPhoto = !isPlaceholderValue(business.photo);
  const hasBio = !isPlaceholderValue(business.bio);
  const hasYears = !isPlaceholderValue(business.yearsExperience);
  const hasBrands = !isPlaceholderValue(business.brandsServiced);

  return (
    <section id="nosotros" className="relative overflow-hidden bg-night">
      <div className="absolute inset-0 grain" />
      <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-ice/10 blur-[110px]" />
      <div className="relative mx-auto max-w-6xl scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Nosotros"
          title="Conoce Refrigeración WAS"
          description="Detrás del servicio hay una persona, no un call center."
          tone="dark"
        />

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[280px_1fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45 }}
            className="frost flex flex-col items-center gap-4 rounded-2xl p-6 text-center"
          >
            {hasPhoto ? (
              <img
                src={asset(business.photo.replace(/^\//, ''))}
                alt={business.ownerName}
                className="h-32 w-32 rounded-full object-cover"
              />
            ) : (
              <div className="flex h-32 w-32 flex-col items-center justify-center gap-1.5 rounded-full border-2 border-dashed border-white/25 bg-white/5 text-white/40">
                <IconUser className="h-10 w-10" />
                <span className="text-[10px] font-semibold uppercase tracking-wide">Foto pendiente</span>
              </div>
            )}
            <div>
              <h3 className="font-display text-lg font-bold text-white">{business.ownerName}</h3>
              <p className="text-xs font-semibold uppercase tracking-wide text-frost">Técnico de refrigeración</p>
            </div>
            <div className="flex w-full flex-col gap-2 border-t border-white/10 pt-4 text-left text-sm">
              <div className="flex items-center justify-between gap-2">
                <span className="text-white/50">Experiencia</span>
                {hasYears ? (
                  <span className="font-semibold text-white">{business.yearsExperience}</span>
                ) : (
                  <Placeholder>[AÑOS DE EXPERIENCIA]</Placeholder>
                )}
              </div>
              <div className="flex items-center justify-between gap-2">
                <span className="text-white/50">Marcas</span>
                {hasBrands ? (
                  <span className="font-semibold text-white">{business.brandsServiced}</span>
                ) : (
                  <Placeholder>[MARCAS QUE REPARA]</Placeholder>
                )}
              </div>
            </div>
          </motion.div>

          <div className="flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: 0.05 }}
            >
              {hasBio ? (
                <p className="text-base leading-relaxed text-white/75">{business.bio}</p>
              ) : (
                <div className="flex flex-col gap-2 rounded-2xl border border-dashed border-white/20 bg-white/5 p-5">
                  <Placeholder className="w-fit">[BIOGRAFÍA PENDIENTE]</Placeholder>
                  <p className="text-sm text-white/50">
                    Aquí irá una breve historia de {business.ownerName}: cómo empezó, qué lo diferencia, y su
                    forma de trabajar.
                  </p>
                </div>
              )}
            </motion.div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {REASONS.map((r, i) => (
                <motion.div
                  key={r.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.45, delay: 0.1 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  className="frost flex items-start gap-3 rounded-2xl p-4"
                >
                  <span className="inline-flex h-9 w-9 flex-none items-center justify-center rounded-full bg-ice/15 text-ice">
                    <r.Icon className="h-4.5 w-4.5" />
                  </span>
                  <div>
                    <h4 className="font-display text-sm font-bold text-white">{r.title}</h4>
                    <p className="mt-0.5 text-xs leading-relaxed text-white/60">{r.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
