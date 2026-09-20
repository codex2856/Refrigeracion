import { SectionTitle } from './SectionTitle';
import { business, hasPhone, hasWhatsapp, phoneLink, whatsappDisplay, whatsappLink } from '../data/business';

const LAST_UPDATED = '20 de septiembre de 2026';

export function Privacy() {
  return (
    <section className="bg-cloud">
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Legal" title="Política de privacidad" />
        <p className="mt-4 text-sm text-ink-soft">Última actualización: {LAST_UPDATED}.</p>

        <div className="mt-10 flex flex-col gap-10 text-base leading-relaxed text-ink-soft">
          <div>
            <h2 className="font-display text-xl font-bold text-ink">1. Responsable</h2>
            <p className="mt-2">
              Este sitio (refrigeracionwas.com) es operado por {business.ownerName}, bajo el nombre comercial{' '}
              {business.name}, técnico de refrigeración independiente en {business.location}.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-ink">2. Este sitio no tiene formulario de contacto</h2>
            <p className="mt-2">
              La página no recoge ni guarda tu nombre, correo, dirección ni ningún otro dato personal a través de
              un formulario, porque no existe ninguno. Los botones de "WhatsApp" y "Llamar" solo abren tu propia
              aplicación de WhatsApp o de teléfono con nuestro número — la conversación ocurre directamente entre tú
              y el técnico, fuera de este sitio web. Nosotros no vemos ni almacenamos esos mensajes en la página.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-ink">3. Qué datos se recogen al visitar la página</h2>
            <p className="mt-2">
              Usamos <strong>GoatCounter</strong>, un servicio de analíticas que cuenta visitas de forma anónima:
              cuántas personas entran, qué páginas ven y de qué sitio vienen (por ejemplo, Instagram o Google). No
              usa cookies, no identifica a cada visitante individualmente y no cruza esos datos con tu nombre ni tu
              número de teléfono.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-ink">4. Terceros que participan al cargar la página</h2>
            <p className="mt-2">Al abrir esta página, tu navegador también hace peticiones a estos servicios externos:</p>
            <ul className="mt-3 flex flex-col gap-2">
              <li>
                <strong className="text-ink">GoatCounter</strong> — cuenta las visitas de forma anónima (ver punto 3).
              </li>
              <li>
                <strong className="text-ink">Google Fonts</strong> — sirve las tipografías del sitio; como cualquier
                carga de un recurso externo, tu dirección IP llega a los servidores de Google al descargarlas.
              </li>
              <li>
                <strong className="text-ink">Google Maps</strong> — el mapa de Caracas que ves en la sección de
                cobertura es un mapa incrustado directamente de Google; tu IP también llega a Google al mostrarlo.
              </li>
              <li>
                <strong className="text-ink">WhatsApp (Meta)</strong> — solo si decides escribirnos por WhatsApp. Esa
                conversación se rige por la política de privacidad de WhatsApp, no por la de este sitio.
              </li>
            </ul>
            <p className="mt-3">Ninguno de estos servicios recibe tu nombre, correo ni ningún dato que tú no les compartas directamente.</p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-ink">5. Base legal</h2>
            <p className="mt-2">
              Las analíticas anónimas de visitas se basan en nuestro interés legítimo de entender cuánta gente ve la
              página, sin identificar a nadie. Escribirnos por WhatsApp o llamar es una decisión voluntaria tuya: al
              hacerlo, compartes tu número directamente con el técnico, no con este sitio web. Hoy no enviamos
              promociones ni mensajes de marketing por WhatsApp o correo; si eso cambiara en el futuro, pediríamos tu
              consentimiento explícito y por separado antes de hacerlo.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-ink">6. Cuánto tiempo se conservan los datos</h2>
            <p className="mt-2">
              Este sitio no tiene base de datos propia, así que no conservamos ningún dato personal en la página. Las
              estadísticas anónimas de visitas se conservan según la configuración del panel de GoatCounter. Si nos
              escribes por WhatsApp, esa conversación queda guardada en tu teléfono y en el del técnico, como
              cualquier chat de WhatsApp.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-ink">7. Tus derechos</h2>
            <p className="mt-2">
              Puedes pedirnos en cualquier momento acceder, corregir o eliminar cualquier dato que nos hayas dado por
              WhatsApp o llamada (por ejemplo, borrar una conversación anterior). Para ejercer estos derechos,
              escríbenos por los mismos medios de contacto de esta página:
            </p>
            <ul className="mt-3 flex flex-col gap-1">
              <li>
                {hasWhatsapp ? (
                  <a href={whatsappLink('Hola, quisiera ejercer mis derechos sobre mis datos personales.')} className="font-semibold text-ice-dark hover:underline">
                    WhatsApp: {whatsappDisplay()}
                  </a>
                ) : (
                  <span>WhatsApp: [WHATSAPP]</span>
                )}
              </li>
              <li>
                {hasPhone ? (
                  <a href={phoneLink()} className="font-semibold text-ice-dark hover:underline">
                    Teléfono: {business.phone}
                  </a>
                ) : (
                  <span>Teléfono: [TELÉFONO]</span>
                )}
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-ink">8. Cambios a esta política</h2>
            <p className="mt-2">
              Si esta política cambia, actualizamos esta página y la fecha de "Última actualización" al inicio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
