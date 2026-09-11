import type { ReactNode } from 'react';

/**
 * Marca visual clara para cualquier dato que todavía no ha sido confirmado
 * (teléfono, horario, zonas, testimonios, fotos...). Fácil de detectar en la
 * página para saber qué falta por completar.
 */
export function Placeholder({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-dashed border-amber-dark/50 bg-amber-light px-2.5 py-0.5 text-xs font-semibold text-amber-dark ${className}`}
    >
      {children}
    </span>
  );
}
