import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos de Uso | Nodatix",
  description: "Términos y condiciones de uso del sitio web de Nodatix.",
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

export default function TerminosPage() {
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
                Términos y Condiciones de Uso
              </h1>
              <p className="text-sm" style={{ color: "var(--muted)" }}>
                Fecha de última actualización: 03 de mayo de 2026
              </p>
            </header>

            {/* Sections */}
            <div className="flex flex-col gap-10">

              <section className="flex flex-col gap-4">
                <SectionTitle>1. Introducción</SectionTitle>
                <Body>
                  Bienvenido al sitio web de Nodatix. Los
                  presentes Términos de Uso rigen el acceso y uso de este Sitio. Al acceder, navegar o utilizar
                  este Sitio, usted reconoce que ha leído, comprendido y acepta estar sujeto a
                  estos términos. Si no está de acuerdo con alguna parte de estos términos, le
                  rogamos que no utilice nuestro Sitio.
                </Body>
              </section>

              <section className="flex flex-col gap-4">
                <SectionTitle>2. Aceptación de los Términos</SectionTitle>
                <Body>
                  El uso de este Sitio atribuye la condición de Usuario e implica la aceptación
                  plena y sin reservas de todas y cada una de las disposiciones incluidas en estos
                  Términos de Uso. Nodatix se reserva el derecho de restringir o cancelar el
                  acceso a cualquier Usuario que incumpla estas disposiciones.
                </Body>
              </section>

              <section className="flex flex-col gap-4">
                <SectionTitle>3. Servicios Ofrecidos por Nodatix</SectionTitle>
                <Body>
                  Nodatix es una empresa enfocada en el desarrollo de software y soluciones
                  tecnológicas B2B. A través de nuestro Sitio, presentamos información general
                  sobre nuestros servicios, que incluyen, de manera enunciativa más no limitativa:
                </Body>
                <BulletList
                  items={[
                    "Desarrollo de sistemas web a medida y aplicaciones móviles.",
                    "Implementación de sistemas SaaS, CRM personalizados y sistemas administrativos.",
                    "Puntos de venta y gestión de inventario.",
                    "Automatización de procesos e integraciones con APIs.",
                    "Dashboards empresariales y consultoría tecnológica.",
                    "Soporte, mantenimiento de software y desarrollo de landing pages.",
                  ]}
                />
              </section>

              <section className="flex flex-col gap-4">
                <SectionTitle>4. Solicitudes de Contacto o Cotización</SectionTitle>
                <Body>
                  El Sitio permite a los Usuarios enviar información para solicitar cotizaciones,
                  contactarnos o pedir detalles sobre nuestros servicios. Al enviar un
                  formulario, el Usuario garantiza que la información proporcionada es veraz y
                  legítima.
                </Body>
                <Body>
                  Es importante destacar que el envío de un formulario de cotización o contacto no
                  constituye una relación comercial vinculante ni un contrato de prestación de
                  servicios. Cualquier proyecto o servicio formal requerirá la firma de un contrato
                  de desarrollo de software o un Acuerdo de Nivel de Servicio (SLA) independiente
                  entre Nodatix y el cliente.
                </Body>
              </section>

              <section className="flex flex-col gap-4">
                <SectionTitle>5. Propiedad Intelectual</SectionTitle>
                <Body>
                  Todo el contenido alojado en el Sitio, incluyendo textos, gráficos, logotipos,
                  íconos, imágenes, clips de audio, descargas digitales, compilaciones de datos y
                  código fuente, es propiedad exclusiva de Nodatix o de sus proveedores de
                  contenido, y está protegido por las leyes de propiedad intelectual de los
                  Estados Unidos Mexicanos y tratados internacionales. Queda estrictamente
                  prohibida la reproducción, distribución o modificación no autorizada de dicho
                  contenido.
                </Body>
              </section>

              <section className="flex flex-col gap-4">
                <SectionTitle>6. Limitación de Responsabilidad</SectionTitle>
                <Body>
                  El Sitio y su contenido se proporcionan &ldquo;tal cual&rdquo; y &ldquo;según
                  disponibilidad&rdquo;. Nodatix no garantiza que el Sitio estará libre de
                  interrupciones o errores. En la medida máxima permitida por la ley, Nodatix no
                  será responsable por ningún daño directo, indirecto, incidental o consecuente
                  que resulte del uso o la incapacidad de usar el Sitio, incluyendo pérdida de
                  datos o interrupciones del negocio.
                </Body>
              </section>

              <section className="flex flex-col gap-4">
                <SectionTitle>7. Enlaces a Terceros</SectionTitle>
                <Body>
                  Este Sitio puede contener enlaces a sitios web de terceros (por ejemplo, redes
                  sociales, plataformas de pago o repositorios). Nodatix no tiene control sobre
                  dichos sitios y no asume responsabilidad alguna por su contenido, políticas de
                  privacidad o prácticas. La inclusión de cualquier enlace no implica el respaldo
                  de Nodatix a dicho sitio.
                </Body>
              </section>

              <section className="flex flex-col gap-4">
                <SectionTitle>8. Prohibiciones de Uso</SectionTitle>
                <Body>El Usuario se compromete a no utilizar el Sitio para:</Body>
                <BulletList
                  items={[
                    "Fines ilícitos, fraudulentos o no autorizados.",
                    "Introducir virus, troyanos, gusanos u otro material tecnológicamente dañino.",
                    "Intentar obtener acceso no autorizado al servidor donde se aloja el Sitio o a cualquier base de datos conectada al mismo.",
                    "Extraer datos, realizar web scraping o recopilar información de otros usuarios sin su consentimiento.",
                  ]}
                />
              </section>

              <section className="flex flex-col gap-4">
                <SectionTitle>9. Modificaciones al Sitio o a los Términos</SectionTitle>
                <Body>
                  Nodatix se reserva el derecho de modificar, suspender o discontinuar cualquier
                  aspecto del Sitio en cualquier momento. Asimismo, estos Términos de Uso podrán
                  ser actualizados periódicamente. La fecha de la última actualización se indicará
                  al final de este documento. El uso continuado del Sitio tras la publicación de
                  cambios constituirá la aceptación de los mismos.
                </Body>
              </section>

              <section className="flex flex-col gap-4">
                <SectionTitle>10. Legislación Aplicable y Jurisdicción</SectionTitle>
                <Body>
                  Estos Términos de Uso se regirán e interpretarán de acuerdo con las leyes
                  aplicables de los Estados Unidos Mexicanos. Para cualquier controversia que
                  surja en relación con este Sitio, las partes se someten a la jurisdicción de
                  los tribunales competentes en Tehuacán, Puebla, renunciando a cualquier otro
                  fuero que pudiera corresponderles por razón de sus domicilios presentes o
                  futuros.
                </Body>
              </section>

              <section className="flex flex-col gap-4">
                <SectionTitle>11. Medios de Contacto</SectionTitle>
                <Body>
                  Para cualquier pregunta, aclaración o comentario relacionado con estos Términos
                  de Uso, por favor contáctenos a través de:
                </Body>
                <BulletList
                  items={[
                    "Correo electrónico: contact.nodatix@gmail.com",
                    "Domicilio: Tehuacán, Puebla, México",
                  ]}
                />
              </section>

            </div>
          </div>

          {/* Bottom back link */}
          <div className="mt-10 flex justify-center">
            <Link
              href="/"
              className="btn-secondary text-sm px-6 py-2.5"
            >
              Volver al inicio
            </Link>
          </div>

        </div>
      </div>
    </main>
  );
}
