import { motion } from 'motion/react';
import { SectionTitle } from './SectionTitle';
import { whatsappLink } from '../data/business';
import { IconAlert, IconDroplet, IconFridge, IconPower, IconWasher, IconWind, IconWrench } from './icons';
import type { ComponentType, SVGProps } from 'react';

interface Problem {
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  text: string;
}

const PROBLEMS: Problem[] = [
  { Icon: IconWind, text: 'El aire acondicionado no enfría.' },
  { Icon: IconFridge, text: 'La nevera no enfría.' },
  { Icon: IconWasher, text: 'La lavadora o secadora no funciona.' },
  { Icon: IconAlert, text: 'El equipo hace ruidos extraños.' },
  { Icon: IconDroplet, text: 'El aire acondicionado pierde agua.' },
  { Icon: IconPower, text: 'El equipo se apaga.' },
  { Icon: IconWrench, text: 'El electrodoméstico presenta una falla.' },
];

export function Problems() {
  return (
    <section id="problemas" className="bg-cloud-dim">
      <div className="mx-auto max-w-6xl scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="¿Te suena familiar?"
          title="Problemas que podemos solucionar"
          description="Si tu equipo presenta alguna de estas situaciones, podemos ayudarte a diagnosticarlo y repararlo."
        />

        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {PROBLEMS.map((p, i) => (
            <motion.a
              key={p.text}
              href={whatsappLink(p.text)}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ x: 4 }}
              className="group flex items-center gap-3.5 rounded-xl border border-cloud-line bg-white px-4 py-3.5 shadow-soft transition-shadow hover:shadow-lift"
            >
              <span className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-full bg-amber-light text-amber-dark">
                <p.Icon className="h-5 w-5" />
              </span>
              <span className="text-sm font-semibold text-ink">{p.text}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
