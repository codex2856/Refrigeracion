import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { business, whatsappLink } from '../data/business';
import { asset } from '../lib/asset';
import { IconMenu, IconWhatsApp, IconX } from './icons';

const LINKS = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#trabajos', label: 'Trabajos' },
  { href: '#faq', label: 'Preguntas' },
  { href: '#contacto', label: 'Contacto' },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled ? 'border-white/10 bg-night/95 backdrop-blur-sm' : 'border-transparent bg-night'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#top" className="flex min-w-0 items-center gap-2.5 text-white">
          <img src={asset('logo-mark.png')} alt="" width={240} height={159} className="h-9 w-auto flex-none sm:h-10" />
          <span className="truncate font-display text-base font-extrabold leading-none tracking-tight sm:text-lg lg:text-xl">
            {business.name}
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative text-xs font-semibold uppercase tracking-[0.12em] text-white/75 transition-colors hover:text-white"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-ice transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={whatsappLink('Hola, necesito ayuda con un equipo.')}
            className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-4 py-2 text-xs font-bold uppercase tracking-[0.1em] text-white shadow-soft transition-transform hover:scale-105"
          >
            <IconWhatsApp className="h-4 w-4" />
            WhatsApp
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          className="flex h-9 w-9 flex-none items-center justify-center text-white lg:hidden"
        >
          {open ? <IconX className="h-6 w-6" /> : <IconMenu className="h-6 w-6" />}
        </button>
      </div>

      <motion.nav
        initial={false}
        animate={{ height: open ? 'auto' : 0 }}
        className="overflow-hidden lg:hidden"
      >
        <div className="flex flex-col gap-1 px-4 pb-4">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-2 py-2.5 text-sm font-semibold uppercase tracking-wide text-white/90 hover:bg-white/5"
            >
              {l.label}
            </a>
          ))}
          <a
            href={whatsappLink('Hola, necesito ayuda con un equipo.')}
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-4 py-3 text-sm font-bold uppercase tracking-[0.1em] text-white shadow-soft"
          >
            <IconWhatsApp className="h-4 w-4" />
            Escribir por WhatsApp
          </a>
        </div>
      </motion.nav>
    </header>
  );
}
