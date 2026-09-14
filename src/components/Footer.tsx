import { business, hasPhone, hasWhatsapp, instagramLink, phoneLink, whatsappLink } from '../data/business';
import { Placeholder } from './Placeholder';
import { isPlaceholderValue } from '../lib/placeholder';
import { asset } from '../lib/asset';
import { IconInstagram, IconPhone, IconWhatsApp } from './icons';

const NAV_LINKS = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#trabajos', label: 'Trabajos' },
  { href: '#faq', label: 'Preguntas frecuentes' },
  { href: '#contacto', label: 'Contacto' },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-night-line bg-night px-4 py-14 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2.5">
            <img src={asset('logo-mark.png')} alt="" loading="lazy" width={240} height={159} className="h-10 w-auto" />
            {isPlaceholderValue(business.name) ? (
              <Placeholder>{business.name}</Placeholder>
            ) : (
              <span className="font-display text-xl font-extrabold tracking-tight">{business.name}</span>
            )}
          </div>
          <p className="text-sm leading-relaxed text-white/60">
            Técnico de refrigeración en Caracas, Venezuela. Reparación y mantenimiento de aires
            acondicionados, neveras, lavadoras y electrodomésticos.
          </p>
          <p className="text-xs text-white/50">Atendido por {business.ownerName}</p>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-white/50">Enlaces</h3>
          <ul className="flex flex-col gap-2">
            {NAV_LINKS.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="text-sm text-white/75 transition-colors hover:text-ice">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-white/50">Contacto</h3>
          <ul className="flex flex-col gap-2 text-sm text-white/75">
            <li>{business.location}</li>
            <li className="flex items-center gap-2">
              <IconWhatsApp className="h-4 w-4 text-whatsapp" />
              {hasWhatsapp ? (
                <a href={whatsappLink()} className="transition-colors hover:text-ice">
                  {business.whatsapp}
                </a>
              ) : (
                <Placeholder>[WHATSAPP]</Placeholder>
              )}
            </li>
            <li className="flex items-center gap-2">
              <IconPhone className="h-4 w-4 text-ice" />
              {hasPhone ? (
                <a href={phoneLink()} className="transition-colors hover:text-ice">
                  {business.phone}
                </a>
              ) : (
                <Placeholder>[TELÉFONO]</Placeholder>
              )}
            </li>
            <li className="flex items-center gap-2">
              <IconInstagram className="h-4 w-4 text-ice" />
              <a
                href={instagramLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-ice"
              >
                @{business.instagram}
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-white/50">Horario</h3>
          {isPlaceholderValue(business.schedule) ? (
            <Placeholder>{business.schedule}</Placeholder>
          ) : (
            <p className="text-sm text-white/75">{business.schedule}</p>
          )}
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-night-line pt-6 text-xs text-white/40">
        © {year} {isPlaceholderValue(business.name) ? 'Técnico de Refrigeración en Caracas' : business.name}. Todos los derechos reservados.
      </div>
    </footer>
  );
}
