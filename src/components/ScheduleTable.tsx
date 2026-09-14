import { business, hasSchedule } from '../data/business';
import { Placeholder } from './Placeholder';

/** Tabla día/hora del horario de atención. Se usa en Contacto y en el Footer. */
export function ScheduleTable({ className = '' }: { className?: string }) {
  if (!hasSchedule) return <Placeholder>[HORARIO]</Placeholder>;

  return (
    <dl className={`grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-sm ${className}`}>
      {business.schedule.map((row) => (
        <div key={row.day} className="contents">
          <dt className="font-semibold text-white">{row.day}</dt>
          <dd className="text-white/70">{row.hours}</dd>
        </div>
      ))}
    </dl>
  );
}
