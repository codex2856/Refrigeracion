import { SectionTitle } from './SectionTitle';
import { whatsappLink } from '../data/business';
import { IconArrowRight } from './icons';

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
          <a
            href={whatsappLink('Hola, quisiera saber si prestan servicio en mi zona de Caracas.')}
            className="group inline-flex w-fit items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-bold uppercase tracking-[0.08em] text-white transition-transform hover:scale-105"
          >
            Consultar mi zona
            <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="h-72 w-full overflow-hidden rounded-2xl border border-cloud-line shadow-soft sm:h-96">
          <iframe
            title="Mapa de Caracas, Venezuela"
            src="https://maps.google.com/maps?q=Caracas,Venezuela&z=11&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full w-full border-0"
          />
        </div>
      </div>
    </section>
  );
}
