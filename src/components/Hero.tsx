import { motion } from 'motion/react';
import { business, hasWhatsapp, whatsappLink } from '../data/business';
import { Placeholder } from './Placeholder';
import { asset } from '../lib/asset';
import { IconArrowRight, IconDroplet, IconPin, IconSnowflake, IconWhatsApp, IconWind } from './icons';

const floatIcons = [
  { Icon: IconSnowflake, top: '12%', left: '82%', size: 34, duration: 10, delay: 0, rotate: 0 },
  { Icon: IconWind, top: '66%', left: '8%', size: 30, duration: 8, delay: 0.5, rotate: -6 },
  { Icon: IconDroplet, top: '20%', left: '6%', size: 22, duration: 9, delay: 1, rotate: 0 },
];

const chips = ['Aires acondicionados', 'Neveras', 'Lavadoras', 'Electrodomésticos'];

export function Hero() {
  return (
    <header id="top" className="relative isolate overflow-hidden bg-night">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-night via-night-soft to-night" />
      <div className="absolute inset-0 -z-10 grain" />
      <div className="absolute -left-24 top-1/3 -z-[5] h-72 w-72 rounded-full bg-ice/20 blur-[100px]" />
      <div className="absolute -right-16 top-10 -z-[5] h-64 w-64 rounded-full bg-frost/15 blur-[100px]" />

      {floatIcons.map(({ Icon, top, left, size, duration, delay, rotate }, i) => (
        <motion.div
          key={i}
          className="pointer-events-none absolute -z-[2] hidden text-ice/25 sm:block"
          style={{ top, left, width: size, height: size }}
          animate={{ y: [0, -14, 0], rotate: [rotate, rotate + 6, rotate] }}
          transition={{ duration, repeat: Infinity, ease: 'easeInOut', delay }}
        >
          <Icon className="h-full w-full" />
        </motion.div>
      ))}

      <div className="relative mx-auto flex min-h-[86vh] max-w-6xl flex-col justify-center gap-7 px-4 py-24 sm:min-h-[80vh] sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex w-full flex-col items-center gap-2 text-center"
        >
          <img src={asset('logo-mark.png')} alt="" width={240} height={159} className="h-24 w-auto sm:h-32 lg:h-36" />
          <span className="font-display text-2xl font-extrabold uppercase leading-tight tracking-wide text-white sm:text-4xl">
            {business.name}
          </span>
        </motion.div>

        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="frost inline-flex w-fit items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-frost"
        >
          <IconPin className="h-4 w-4" />
          Servicio técnico en {business.location}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="max-w-3xl font-display text-4xl font-extrabold leading-[1.05] text-white sm:text-6xl lg:text-7xl"
        >
          Técnico de <span className="text-ice">Refrigeración</span> en Caracas
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="max-w-xl text-base leading-relaxed text-white/75 sm:text-lg"
        >
          Reparación y mantenimiento de aires acondicionados, neveras, lavadoras y electrodomésticos.
          Diagnóstico claro y atención directa con el técnico, en Caracas.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap gap-2"
        >
          {chips.map((c) => (
            <span
              key={c}
              className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-white/80"
            >
              {c}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          <a
            href={whatsappLink('Hola, quisiera solicitar un servicio.')}
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-4 text-sm font-bold uppercase tracking-[0.08em] text-white shadow-lift transition-transform hover:scale-[1.03] active:scale-95"
          >
            <IconWhatsApp className="h-5 w-5" />
            Solicitar servicio por WhatsApp
          </a>
          <a
            href="#servicios"
            className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-4 text-sm font-bold uppercase tracking-[0.08em] text-white transition-colors hover:bg-white/10"
          >
            Ver nuestros servicios
            <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>

        {!hasWhatsapp && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center gap-1.5 text-xs text-white/50"
          >
            WhatsApp: <Placeholder>[WHATSAPP]</Placeholder>
          </motion.div>
        )}
      </div>
    </header>
  );
}
