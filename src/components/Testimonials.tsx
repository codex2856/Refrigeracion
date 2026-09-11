import { motion } from 'motion/react';
import { SectionTitle } from './SectionTitle';
import { TESTIMONIALS } from '../data/testimonials';
import { IconQuote, IconUser } from './icons';

export function Testimonials() {
  return (
    <section className="bg-cloud-dim">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Testimonios"
          title="Lo que dicen los clientes"
          description="Espacio preparado para reseñas reales. Se mostrarán aquí en cuanto estén disponibles."
        />

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-4 rounded-2xl border border-dashed border-cloud-line bg-white p-6 shadow-soft"
            >
              <IconQuote className="h-7 w-7 text-ice/50" />
              <blockquote className="flex-1 text-sm italic leading-relaxed text-ink-soft">{t.quote}</blockquote>
              <figcaption className="flex items-center gap-3 border-t border-cloud-line pt-4">
                <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-cloud-dim text-ink-faint">
                  <IconUser className="h-4.5 w-4.5" />
                </span>
                <div className="text-xs">
                  <p className="font-bold text-ink">{t.name}</p>
                  <p className="text-ink-faint">{t.service}</p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
