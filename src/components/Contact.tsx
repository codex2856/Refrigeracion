import { motion } from 'motion/react';
import { business, hasPhone, hasWhatsapp, instagramLink, phoneLink, whatsappLink } from '../data/business';
import { ScheduleTable } from './ScheduleTable';
import { IconClock, IconInstagram, IconPhone, IconPin, IconWhatsApp } from './icons';

export function Contact() {
  return (
    <section id="contacto" className="relative scroll-mt-24 overflow-hidden bg-night">
      <div className="absolute inset-0 grain" />
      <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-ice/15 blur-[120px]" />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-8 px-4 py-24 text-center sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="font-display text-3xl font-extrabold leading-tight text-white sm:text-5xl"
        >
          ¿Necesitas reparar tu equipo?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-lg text-base leading-relaxed text-white/70 sm:text-lg"
        >
          Cuéntanos qué le pasa a tu aire acondicionado, nevera, lavadora o electrodoméstico y coordinamos la
          visita.
        </motion.p>

        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="frost inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold text-frost"
        >
          Visita de diagnóstico: {business.visitFee}
        </motion.span>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row"
        >
          <a
            href={whatsappLink('Hola, tengo un problema con un equipo y quisiera cotizar una visita.')}
            className="flex flex-1 items-center justify-center gap-3 rounded-2xl bg-whatsapp px-7 py-5 shadow-lift transition-transform hover:scale-[1.03] active:scale-95 sm:flex-none"
          >
            <IconWhatsApp className="h-6 w-6 text-white" />
            <span className="flex flex-col items-start">
              <span className="text-sm font-bold uppercase tracking-[0.08em] text-white">WhatsApp</span>
              {!hasWhatsapp && <span className="text-xs text-white/80">[WHATSAPP]</span>}
            </span>
          </a>
          <a
            href={phoneLink()}
            className="flex flex-1 items-center justify-center gap-3 rounded-2xl border border-white/25 bg-white/5 px-7 py-5 transition-colors hover:bg-white/10 sm:flex-none"
          >
            <IconPhone className="h-6 w-6 text-white" />
            <span className="flex flex-col items-start">
              <span className="text-sm font-bold uppercase tracking-[0.08em] text-white">Llamar</span>
              {!hasPhone && <span className="text-xs text-white/70">[TELÉFONO]</span>}
            </span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-4 flex flex-col items-center gap-2"
        >
          <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-white/50">
            <IconClock className="h-4 w-4 text-ice" />
            Horario
          </span>
          <ScheduleTable />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-white/70"
        >
          <span className="flex items-center gap-2">
            <IconPin className="h-4 w-4 text-ice" />
            {business.location}
          </span>
          <a
            href={instagramLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition-colors hover:text-ice"
          >
            <IconInstagram className="h-4 w-4 text-ice" />@{business.instagram}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
