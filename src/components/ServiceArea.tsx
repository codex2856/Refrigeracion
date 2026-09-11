import { motion } from 'motion/react';
import { SectionTitle } from './SectionTitle';
import { business, whatsappLink } from '../data/business';
import { Placeholder } from './Placeholder';
import { IconArrowRight, IconPin } from './icons';

export function ServiceArea() {
  return (
    <section id="zona" className="bg-cloud-dim">
      <div className="mx-auto grid max-w-6xl scroll-mt-24 grid-cols-1 items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="flex flex-col gap-5">
          <SectionTitle
            eyebrow="Cobertura"
            title="Servicio técnico en Caracas"
            description="Atención a domicilio dentro de Caracas, Venezuela. Escríbenos con tu ubicación para confirmar la cobertura."
          />
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm font-semibold text-ink-soft">Zonas de servicio:</span>
            <Placeholder>{business.serviceAreas}</Placeholder>
          </div>
          <a
            href={whatsappLink('Hola, quisiera saber si prestan servicio en mi zona de Caracas.')}
            className="group inline-flex w-fit items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-bold uppercase tracking-[0.08em] text-white transition-transform hover:scale-105"
          >
            Consultar mi zona
            <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="relative mx-auto flex h-64 w-64 items-center justify-center sm:h-80 sm:w-80">
          {[0, 1, 2].map((ring) => (
            <motion.span
              key={ring}
              className="absolute rounded-full border-2 border-ice/30"
              style={{ inset: `${ring * 15}%` }}
              animate={{ scale: [1, 1.08, 1], opacity: [0.6, 0.2, 0.6] }}
              transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut', delay: ring * 0.4 }}
            />
          ))}
          <span className="absolute inset-[38%] rounded-full bg-ice-light" />
          <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-ink text-white shadow-lift">
            <IconPin className="h-7 w-7" />
          </span>
        </div>
      </div>
    </section>
  );
}
