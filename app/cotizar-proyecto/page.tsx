"use client";

import Link from "next/link";
import { ChangeEvent, FormEvent, useState } from "react";

// Opciones de servicio mostradas en el formulario de cotización.
const serviceOptions = [
  "Automatización de procesos",
  "CRM / ERP personalizado",
  "Desarrollo web",
  "Aplicación móvil",
  "UI / UX Design",
  "Integraciones",
  "MVP",
  "Otro",
];

function BackArrow() {
  return (
    <svg
      viewBox="0 0 16 16"
      className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-0.5"
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

export default function CotizarProyectoPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    source: "",
    projectDetails: "",
    needsNda: "",
    services: [] as string[],
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNdaChange = (value: "Sí" | "No") => {
    setFormData((prev) => ({
      ...prev,
      needsNda: value,
    }));
  };

  const handleServiceChange = (service: string) => {
    setFormData((prev) => {
      const isSelected = prev.services.includes(service);

      return {
        ...prev,
        services: isSelected
          ? prev.services.filter((item) => item !== service)
          : [...prev.services, service],
      };
    });
  };

  // Envía los datos del formulario al endpoint interno de cotización.
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/cotizacion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("No se pudo enviar la solicitud.");
      }

      setSubmitStatus("success");

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        source: "",
        projectDetails: "",
        needsNda: "",
        services: [],
      });
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputCls = [
    "w-full rounded-lg border border-[var(--color-glass-border)] bg-[var(--surface-raised)] px-4 py-3 text-sm",
    "text-(--color-text-primary) placeholder-(--color-text-disabled) outline-none",
    "transition-all duration-200",
    "focus:border-[var(--color-glass-border-highlight)] focus:bg-[var(--surface-raised)] focus:shadow-[0_0_0_2px_var(--glass-surface)]",
  ].join(" ");

  const labelCls =
    "text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-(--color-text-secondary)";

  return (
    <main
      className="min-h-dvh py-20 md:py-28"
      style={{
        background: "var(--background)",
        color: "var(--foreground)",
      }}
    >
      <div className="section-container">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/"
            className="group mt-8 mb-10 inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200 text-(--color-text-secondary) hover:text-(--color-text-primary) md:mt-0"
          >
            <BackArrow />
            Volver al inicio
          </Link>

          <section className="mb-12">
            <span className="inline-flex items-center rounded-full border border-[var(--color-glass-border)] bg-[var(--color-glass-surface)] px-3 py-1 text-xs font-medium text-(--color-text-secondary)">
              Consulta sin costo
            </span>

            <h1 className="font-clash mt-6 max-w-5xl text-[clamp(2.6rem,5vw,4.5rem)] font-semibold leading-[1.06] tracking-tight text-[var(--foreground)]">
              Necesitas un socio tecnológico. Estamos para ayudarte.
            </h1>

            <div className="mt-8 max-w-[56ch]">
              <p className="text-[clamp(1rem,1.8vw,1.15rem)] leading-relaxed text-(--color-text-secondary)">
                Queremos entender tus necesidades antes de proponerte una
                solución. Llena el formulario y nuestro equipo se pondrá en
                contacto contigo.
              </p>

              <p className="mt-4 text-sm leading-7 text-(--color-text-secondary)">
                Si ya tienes una solicitud o brief preparado, también puedes
                escribirnos directamente a{" "}
                <a
                  href="mailto:contact.nodatix@gmail.com"
                  className="font-medium underline underline-offset-4 text-(--color-text-primary)"
                >
                  contact.nodatix@gmail.com
                </a>
                .
              </p>
            </div>
          </section>

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-[var(--color-glass-border)] bg-[var(--surface-card)] p-6 md:p-8"
          >
            <div className="mb-8">
              <h2 className="font-clash text-[clamp(1.5rem,2vw,2rem)] font-semibold leading-[1.12] tracking-tight text-[var(--foreground)]">
                Cuéntanos sobre tu proyecto
              </h2>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-(--color-text-secondary)">
                Completa los datos principales para que podamos entender tu
                contexto y preparar una respuesta inicial.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              <div>
                <label className={labelCls}>Nombre*</label>
                <input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  placeholder="Tu nombre"
                  className={inputCls}
                />
              </div>

              <div>
                <label className={labelCls}>Apellido*</label>
                <input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  placeholder="Tu apellido"
                  className={inputCls}
                />
              </div>

              <div>
                <label className={labelCls}>Correo*</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="tu@empresa.com"
                  className={inputCls}
                />
              </div>

              <div>
                <label className={labelCls}>Número de contacto</label>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+52 222 123 4567"
                  className={inputCls}
                />
              </div>

              <div>
                <label className={labelCls}>Empresa</label>
                <input
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Nombre de tu empresa"
                  className={inputCls}
                />
              </div>

              <div>
                <label className={labelCls}>¿Cómo nos conociste?*</label>
                <input
                  name="source"
                  value={formData.source}
                  onChange={handleChange}
                  required
                  placeholder="Google, recomendación, redes sociales..."
                  className={inputCls}
                />
              </div>

              <div className="lg:col-span-2">
                <label className={labelCls}>
                  Cuéntanos más sobre tu proyecto*
                </label>
                <textarea
                  name="projectDetails"
                  value={formData.projectDetails}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Describe tu necesidad, proceso actual, problema principal o el sistema que deseas construir."
                  className={`${inputCls} resize-none`}
                />
              </div>

              <div>
                <label className={labelCls}>
                  ¿Necesitas firmar un acuerdo de confidencialidad antes?
                </label>

                <div className="mt-2 flex flex-wrap gap-3">
                  {(["Sí", "No"] as const).map((option) => {
                    const isSelected = formData.needsNda === option;

                    return (
                      <button
                        key={option}
                        type="button"
                        aria-pressed={isSelected}
                        onClick={() => handleNdaChange(option)}
                        className="rounded-lg border px-5 py-3 text-sm font-medium transition-all duration-200"
                        style={{
                          background: isSelected
                            ? "var(--foreground)"
                            : "var(--surface-raised)",
                          borderColor: "var(--color-glass-border)",
                          color: isSelected
                            ? "var(--background)"
                            : "var(--foreground)",
                        }}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="mt-8">
              <label className={labelCls}>¿En qué podemos ayudarte?</label>

    // Selector responsive de servicios: móvil en columna, desktop como chips.
    <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:flex lg:flex-row lg:flex-wrap">
    {serviceOptions.map((service) => {
    const isSelected = formData.services.includes(service);

    return (
      <button
        key={service}
        type="button"
        aria-pressed={isSelected}
        onClick={() => handleServiceChange(service)}
        className="inline-flex min-h-12 w-full items-center gap-3 rounded-lg border px-4 py-3 text-left text-sm font-medium transition-all duration-200 sm:w-auto"
        style={{
          background: isSelected
            ? "var(--foreground)"
            : "var(--surface-raised)",
          borderColor: "var(--color-glass-border)",
          color: isSelected
            ? "var(--background)"
            : "var(--foreground)",
        }}
      >
        <span
          className="flex h-4 w-4 shrink-0 items-center justify-center rounded-sm border text-[10px]"
          style={{
            borderColor: isSelected
              ? "var(--background)"
              : "var(--color-glass-border)",
          }}
        >
          {isSelected ? "✓" : ""}
        </span>

        <span className="leading-5 sm:whitespace-nowrap">{service}</span>
      </button>
    );
  })}
</div>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary flex items-center justify-center gap-2 px-8 py-4 text-sm disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "Enviando solicitud..." : "Enviar solicitud"}
                {!isSubmitting && <span aria-hidden="true">→</span>}
              </button>

              <p className="text-xs leading-6 text-(--color-text-secondary)">
                Sin spam. Respuesta inicial en menos de 24 h.
              </p>
            </div>

            {submitStatus === "success" && (
              <p className="mt-5 rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-600">
                Solicitud enviada correctamente. Te contactaremos pronto.
              </p>
            )}

            {submitStatus === "error" && (
              <p className="mt-5 rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-600">
                No se pudo enviar la solicitud. Inténtalo nuevamente.
              </p>
            )}
          </form>
        </div>
      </div>
    </main>
  );
}