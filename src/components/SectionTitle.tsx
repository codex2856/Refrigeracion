import { motion } from 'motion/react';
import type { ReactNode } from 'react';

interface Props {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  align?: 'left' | 'center';
  tone?: 'light' | 'dark';
}

export function SectionTitle({ eyebrow, title, description, align = 'left', tone = 'light' }: Props) {
  const isCenter = align === 'center';
  const isDark = tone === 'dark';
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`flex flex-col gap-3 ${isCenter ? 'items-center text-center' : 'items-start text-left'}`}
    >
      {eyebrow && (
        <span
          className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] ${
            isDark ? 'text-frost' : 'text-ice-dark'
          }`}
        >
          <span className={`h-1.5 w-1.5 rounded-full ${isDark ? 'bg-frost' : 'bg-ice'}`} />
          {eyebrow}
        </span>
      )}
      <h2
        className={`max-w-2xl text-3xl leading-[1.08] sm:text-4xl lg:text-5xl ${
          isDark ? 'text-white' : 'text-ink'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`max-w-xl text-base leading-relaxed ${isDark ? 'text-white/70' : 'text-ink-soft'}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
