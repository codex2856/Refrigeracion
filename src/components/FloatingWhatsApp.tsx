import { motion } from 'motion/react';
import { whatsappLink } from '../data/business';
import { IconWhatsApp } from './icons';

export function FloatingWhatsApp() {
  return (
    <motion.a
      href={whatsappLink('Hola, necesito ayuda con un equipo.')}
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.8, type: 'spring', stiffness: 220, damping: 18 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-lift ring-4 ring-whatsapp/20 sm:bottom-7 sm:right-7"
    >
      <motion.span
        className="absolute inset-0 rounded-full bg-whatsapp/60"
        animate={{ scale: [1, 1.5, 1], opacity: [0.6, 0, 0.6] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
      />
      <IconWhatsApp className="relative h-7 w-7" />
    </motion.a>
  );
}
