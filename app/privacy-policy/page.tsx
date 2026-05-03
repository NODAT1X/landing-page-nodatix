import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad | Nodatix",
  description: "Aviso de privacidad y tratamiento de datos personales de Nodatix.",
};

function BackArrow() {
  return (
    <svg
      viewBox="0 0 16 16"
      className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-0.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M13 8H3M7 4l-4 4 4 4" />
    </svg>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="text-lg md:text-xl font-semibold leading-snug"
      style={{ color: "var(--foreground)" }}
    >
      {children}
    </h2>
  );
}

function SubTitle({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm md:text-base font-semibold" style={{ color: "var(--foreground)" }}>
      {children}
    </p>
  );
}

function Body({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm md:text-base leading-relaxed" style={{ color: "var(--muted)" }}>
      {children}
    </p>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span
            className="shrink-0 mt-[7px] w-1.5 h-1.5 rounded-full"
            style={{ background: "var(--muted)" }}
            aria-hidden="true"
          />
          <span className="text-sm md:text-base leading-relaxed" style={{ color: "var(--muted)" }}>
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

function InfoBox({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="rounded-xl p-4 text-sm md:text-base leading-relaxed"
      style={{
        background: "var(--glass-surface)",
        border: "1px solid var(--glass-border)",
        color: "var(--muted)",
      }}
    >
      {children}
    </div>
  );
}

export default function PrivacidadPage() {
  return (
    <main
      className="min-h-dvh py-24 md:py-32"
      style={{ background: "var(--background)" }}
    >
      <div className="section-container">
        <div className="max-w-4xl mx-auto">

          {/* Back link */}
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-sm font-medium mb-10 transition-colors duration-200 text-(--muted) hover:text-(--foreground)"
          >
            <BackArrow />
            Volver al inicio
          </Link>

          {/* Card */}
          <div
            className="rounded-2xl border p-8 md:p-12 lg:p-14"
            style={{
              background: "var(--surface)",
              borderColor: "var(--glass-border)",
            }}
          >
            {/* Header */}
            <header
              className="mb-10 pb-8 border-b"
              style={{ borderColor: "var(--glass-border)" }}
            >
              <h1
                className="font-clash text-3xl md:text-4xl font-bold tracking-tight mb-3"
                style={{ color: "var(--foreground)" }}
              >
                Aviso de Privacidad
              </h1>
              <p className="text-sm" style={{ color: "var(--muted)" }}>
                Fecha de última actualización: 03 de mayo de 2026
              </p>
            </header>

            {/* Sections */}
            <div className="flex flex-col gap-10">

              <section className="flex flex-col gap-4">
                <SectionTitle>1. Identidad y Domicilio del Responsable</SectionTitle>
                <Body>
                  De conformidad con lo establecido en la Ley Federal de Protección de Datos
                  Personales en Posesión de los Particulares (LFPDPPP), su Reglamento y
                  lineamientos aplicables, Nodatix (en adelante, &ldquo;Nodatix&rdquo;), con
                  domicilio en Domicilio pendiente de definir, declara ser el responsable del uso,
                  tratamiento y protección de sus datos personales.
                </Body>
              </section>

              <section className="flex flex-col gap-4">
                <SectionTitle>2. Datos Personales que se Recaban</SectionTitle>
                <Body>
                  Para llevar a cabo las finalidades descritas en el presente Aviso de Privacidad,
                  Nodatix podrá recabar los siguientes datos personales del Usuario cuando éste
                  utilice nuestros formularios de contacto, cotización o comunicación directa:
                </Body>
                <BulletList
                  items={[
                    "Nombre completo.",
                    "Correo electrónico profesional/corporativo.",
                    "Número de teléfono (móvil o fijo).",
                    "Nombre de la empresa o proyecto que representa.",
                    "Mensaje, requerimientos técnicos, o descripción del proyecto (la cual será tratada con estricta confidencialidad).",
                    "Cualquier otra información que el Usuario proporcione voluntariamente para el análisis de viabilidad técnica de su proyecto.",
                  ]}
                />
              </section>

              <section className="flex flex-col gap-4">
                <SectionTitle>3. Finalidades del Tratamiento de Datos</SectionTitle>
                <Body>
                  Los datos personales recabados serán utilizados para las siguientes finalidades:
                </Body>

                <div className="flex flex-col gap-3">
                  <SubTitle>A. Finalidades Primarias (necesarias para el servicio que solicita):</SubTitle>
                  <BulletList
                    items={[
                      "Proveer cotizaciones, propuestas técnicas y estimaciones de tiempo para proyectos de desarrollo de software.",
                      "Contactar al Usuario para dar seguimiento a sus solicitudes de información o agendar reuniones de descubrimiento (Discovery Calls).",
                      "Evaluar la viabilidad técnica y operativa de los proyectos descritos por el Usuario.",
                      "Prestar los servicios tecnológicos y de soporte en caso de formalizar una relación comercial.",
                    ]}
                  />
                </div>

                <div className="flex flex-col gap-3">
                  <SubTitle>B. Finalidades Secundarias (no necesarias para el servicio, pero útiles para mejorar nuestra atención):</SubTitle>
                  <BulletList
                    items={[
                      "Envío de boletines informativos, actualizaciones del sector tecnológico y ofertas de nuevos servicios de Nodatix.",
                      "Fines estadísticos, análisis de calidad en el servicio y evaluación de la experiencia del usuario (UX) en nuestro Sitio.",
                    ]}
                  />
                </div>

                <InfoBox>
                  Si el Usuario no desea que sus datos sean tratados para las finalidades
                  secundarias, puede comunicarlo inmediatamente enviando un correo a{" "}
                  <a
                    href="mailto:contact.nodatix@gmail.com"
                    className="underline underline-offset-2 transition-colors duration-200 hover:text-(--foreground)"
                  >
                    contact.nodatix@gmail.com
                  </a>
                  .
                </InfoBox>
              </section>

              <section className="flex flex-col gap-4">
                <SectionTitle>4. Uso de Cookies y Tecnologías Similares</SectionTitle>
                <Body>
                  Le informamos que en el Sitio web utilizamos cookies, web beacons y tecnologías
                  similares para analizar el tráfico, mejorar la experiencia de navegación y
                  optimizar el rendimiento de la plataforma. Estas tecnologías pueden recopilar
                  información como el tipo de navegador, sistema operativo y páginas visitadas
                  dentro del Sitio. El Usuario puede deshabilitar estas tecnologías directamente
                  en la configuración de su navegador web.
                </Body>
              </section>

              <section className="flex flex-col gap-4">
                <SectionTitle>5. Transferencia de Datos Personales</SectionTitle>
                <Body>
                  Nodatix garantiza que sus datos personales no serán vendidos, alquilados ni
                  compartidos con terceros para fines ajenos a los descritos. Únicamente podrán
                  ser transferidos sin necesidad de consentimiento previo en los casos previstos
                  por el Artículo 37 de la LFPDPPP (por ejemplo, cumplimiento de obligaciones
                  legales, requerimientos de autoridades competentes, o cuando sea estrictamente
                  necesario para la prestación de servicios a través de proveedores de
                  infraestructura en la nube, quienes guardan acuerdos de confidencialidad y
                  seguridad con nosotros).
                </Body>
              </section>

              <section className="flex flex-col gap-4">
                <SectionTitle>6. Medidas de Seguridad</SectionTitle>
                <Body>
                  Para proteger sus datos personales contra daño, pérdida, alteración,
                  destrucción o el uso, acceso o tratamiento no autorizado, Nodatix ha
                  implementado y mantiene estrictas medidas de seguridad administrativas,
                  técnicas y físicas, acordes a los estándares de la industria tecnológica.
                </Body>
              </section>

              <section className="flex flex-col gap-4">
                <SectionTitle>7. Derechos ARCO</SectionTitle>
                <Body>
                  Usted tiene derecho a conocer qué datos personales tenemos de usted, para qué
                  los utilizamos y las condiciones del uso que les damos (Acceso). Asimismo, es
                  su derecho solicitar la corrección de su información personal en caso de que
                  esté desactualizada, sea inexacta o incompleta (Rectificación); que la
                  eliminemos de nuestros registros o bases de datos cuando considere que la misma
                  no está siendo utilizada adecuadamente (Cancelación); así como oponerse al uso
                  de sus datos personales para fines específicos (Oposición). Estos derechos se
                  conocen como Derechos ARCO.
                </Body>
                <Body>
                  Para el ejercicio de cualquiera de los Derechos ARCO, usted deberá presentar
                  la solicitud respectiva a través del siguiente correo electrónico:{" "}
                  <a
                    href="mailto:contact.nodatix@gmail.com"
                    className="underline underline-offset-2 transition-colors duration-200 hover:text-(--foreground)"
                    style={{ color: "var(--muted)" }}
                  >
                    contact.nodatix@gmail.com
                  </a>
                  . La solicitud deberá contener: nombre del titular, documento que acredite su
                  identidad, descripción clara de los datos sobre los que busca ejercer el
                  derecho, y cualquier otro elemento que facilite la localización de sus datos.
                </Body>
              </section>

              <section className="flex flex-col gap-4">
                <SectionTitle>8. Revocación del Consentimiento</SectionTitle>
                <Body>
                  Usted puede revocar el consentimiento que, en su caso, nos haya otorgado para
                  el tratamiento de sus datos personales. Sin embargo, es importante que tenga en
                  cuenta que no en todos los casos podremos atender su solicitud o concluir el
                  uso de forma inmediata, ya que es posible que por alguna obligación legal
                  requiramos seguir tratando sus datos personales. Para revocar su consentimiento
                  deberá enviar su petición a{" "}
                  <a
                    href="mailto:contact.nodatix@gmail.com"
                    className="underline underline-offset-2 transition-colors duration-200 hover:text-(--foreground)"
                    style={{ color: "var(--muted)" }}
                  >
                    contact.nodatix@gmail.com
                  </a>
                  .
                </Body>
              </section>

              <section className="flex flex-col gap-4">
                <SectionTitle>9. Cambios al Aviso de Privacidad</SectionTitle>
                <Body>
                  El presente Aviso de Privacidad puede sufrir modificaciones, cambios o
                  actualizaciones derivadas de nuevos requerimientos legales, de nuestras propias
                  necesidades por los servicios que ofrecemos, o por nuestras prácticas de
                  privacidad. Nodatix se compromete a mantenerlo informado sobre los cambios que
                  pueda sufrir el presente aviso, publicando la versión actualizada en este mismo
                  Sitio web, indicando la fecha de última modificación.
                </Body>
              </section>

              <section className="flex flex-col gap-4">
                <SectionTitle>10. Medios de Contacto</SectionTitle>
                <BulletList
                  items={[
                    "Responsable de Privacidad de Datos: Equipo Legal / Administrativo de Nodatix.",
                    "Domicilio: Domicilio pendiente de definir, Tehuacán, Puebla.",
                    "Correo Electrónico: contact.nodatix@gmail.com",
                    "Fecha de última actualización: 03 de mayo de 2026",
                  ]}
                />
              </section>

            </div>
          </div>

          {/* Bottom back link */}
          <div className="mt-10 flex justify-center">
            <Link href="/" className="btn-secondary text-sm px-6 py-2.5">
              Volver al inicio
            </Link>
          </div>

        </div>
      </div>
    </main>
  );
}
