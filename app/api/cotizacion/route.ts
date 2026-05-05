import { NextResponse } from "next/server";
import { Resend } from "resend";

type CotizacionPayload = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  company?: string;
  source?: string;
  projectDetails?: string;
  needsNda?: string;
  services?: string[];
};

const resend = new Resend(process.env.RESEND_API_KEY);

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Sanitiza los valores antes de insertarlos en el HTML del correo.
function escapeHtml(value?: string) {
  return (value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

// Endpoint server-side para recibir el formulario de cotización y enviarlo por Resend.
export async function POST(request: Request) {
  try {
    const data = (await request.json()) as CotizacionPayload;

    if (
      !data.firstName?.trim() ||
      !data.lastName?.trim() ||
      !data.email?.trim() ||
      !data.source?.trim() ||
      !data.projectDetails?.trim()
    ) {
      return NextResponse.json(
        { message: "Faltan campos obligatorios." },
        { status: 400 }
      );
    }

    if (!isValidEmail(data.email)) {
      return NextResponse.json(
        { message: "El correo no tiene un formato válido." },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY || !process.env.CONTACT_EMAIL) {
      return NextResponse.json(
        { message: "Configuración de correo incompleta." },
        { status: 500 }
      );
    }

    const fullName = `${data.firstName.trim()} ${data.lastName.trim()}`;

    const services =
      data.services && data.services.length > 0
        ? data.services.map((service) => escapeHtml(service)).join(", ")
        : "No especificado";
const html = `
  <div style="margin:0; padding:0; background:#f5f5f5; font-family:Arial, Helvetica, sans-serif; color:#111111;">
    <div style="max-width:680px; margin:0 auto; padding:32px 20px;">
      
      <div style="background:#0b0b0f; border-radius:18px 18px 0 0; padding:28px 32px;">
        <p style="margin:0 0 8px; color:#b8b8b8; font-size:12px; letter-spacing:2px; text-transform:uppercase;">
          Nodatix Web
        </p>
        <h1 style="margin:0; color:#ffffff; font-size:28px; line-height:1.2; font-weight:700;">
          Nueva solicitud de proyecto
        </h1>
      </div>

      <div style="background:#ffffff; border:1px solid #e5e5e5; border-top:0; border-radius:0 0 18px 18px; padding:32px;">
        
        <p style="margin:0 0 24px; color:#555555; font-size:15px; line-height:1.7;">
          Se recibió una nueva solicitud desde el formulario de cotización de Nodatix.
        </p>

        <div style="margin-bottom:28px;">
          <h2 style="margin:0 0 16px; color:#111111; font-size:18px; line-height:1.3;">
            Datos del contacto
          </h2>

          <table style="width:100%; border-collapse:collapse;">
            <tr>
              <td style="padding:12px 0; border-bottom:1px solid #eeeeee; color:#777777; font-size:13px; width:38%;">
                Nombre
              </td>
              <td style="padding:12px 0; border-bottom:1px solid #eeeeee; color:#111111; font-size:14px; font-weight:600;">
                ${escapeHtml(fullName)}
              </td>
            </tr>

            <tr>
              <td style="padding:12px 0; border-bottom:1px solid #eeeeee; color:#777777; font-size:13px;">
                Correo
              </td>
              <td style="padding:12px 0; border-bottom:1px solid #eeeeee; color:#111111; font-size:14px; font-weight:600;">
                <a href="mailto:${escapeHtml(data.email)}" style="color:#111111; text-decoration:underline;">
                  ${escapeHtml(data.email)}
                </a>
              </td>
            </tr>

            <tr>
              <td style="padding:12px 0; border-bottom:1px solid #eeeeee; color:#777777; font-size:13px;">
                Número de contacto
              </td>
              <td style="padding:12px 0; border-bottom:1px solid #eeeeee; color:#111111; font-size:14px; font-weight:600;">
                ${escapeHtml(data.phone || "No especificado")}
              </td>
            </tr>

            <tr>
              <td style="padding:12px 0; border-bottom:1px solid #eeeeee; color:#777777; font-size:13px;">
                Empresa
              </td>
              <td style="padding:12px 0; border-bottom:1px solid #eeeeee; color:#111111; font-size:14px; font-weight:600;">
                ${escapeHtml(data.company || "No especificado")}
              </td>
            </tr>

            <tr>
              <td style="padding:12px 0; border-bottom:1px solid #eeeeee; color:#777777; font-size:13px;">
                ¿Cómo nos conoció?
              </td>
              <td style="padding:12px 0; border-bottom:1px solid #eeeeee; color:#111111; font-size:14px; font-weight:600;">
                ${escapeHtml(data.source)}
              </td>
            </tr>

            <tr>
              <td style="padding:12px 0; border-bottom:1px solid #eeeeee; color:#777777; font-size:13px;">
                Acuerdo de confidencialidad
              </td>
              <td style="padding:12px 0; border-bottom:1px solid #eeeeee; color:#111111; font-size:14px; font-weight:600;">
                ${escapeHtml(data.needsNda || "No especificado")}
              </td>
            </tr>
          </table>
        </div>

        <div style="margin-bottom:28px;">
          <h2 style="margin:0 0 12px; color:#111111; font-size:18px; line-height:1.3;">
            Servicios de interés
          </h2>

          <div style="background:#f7f7f7; border:1px solid #eeeeee; border-radius:14px; padding:16px; color:#222222; font-size:14px; line-height:1.6;">
            ${services}
          </div>
        </div>

        <div>
          <h2 style="margin:0 0 12px; color:#111111; font-size:18px; line-height:1.3;">
            Detalles del proyecto
          </h2>

          <div style="background:#f7f7f7; border:1px solid #eeeeee; border-radius:14px; padding:18px; color:#222222; font-size:14px; line-height:1.7; white-space:pre-line;">
            ${escapeHtml(data.projectDetails)}
          </div>
        </div>

        <div style="margin-top:32px; padding-top:20px; border-top:1px solid #eeeeee;">
          <p style="margin:0; color:#888888; font-size:12px; line-height:1.6;">
            Este correo fue generado automáticamente desde el formulario de cotización de Nodatix.
          </p>
        </div>
      </div>
    </div>
  </div>
`;

    const text = `
Nueva solicitud de proyecto - Nodatix

Nombre: ${fullName}
Correo: ${data.email}
Número de contacto: ${data.phone || "No especificado"}
Empresa: ${data.company || "No especificado"}
¿Cómo nos conoció?: ${data.source}
¿Necesita acuerdo de confidencialidad?: ${data.needsNda || "No especificado"}
Servicios de interés: ${
      data.services && data.services.length > 0
        ? data.services.join(", ")
        : "No especificado"
    }

Detalles del proyecto:
${data.projectDetails}
`;

     // Envío del correo al buzón configurado en CONTACT_EMAIL.
    const { error } = await resend.emails.send({
      from: "Nodatix Web <onboarding@resend.dev>",
      to: [process.env.CONTACT_EMAIL],
      replyTo: data.email,
      subject: "Nueva solicitud de proyecto - Nodatix",
      html,
      text,
    });

    if (error) {
      console.error("Error de Resend:", error);

      return NextResponse.json(
        { message: "No se pudo enviar la solicitud." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Solicitud enviada correctamente." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error al enviar solicitud de cotización:", error);

    return NextResponse.json(
      { message: "No se pudo enviar la solicitud." },
      { status: 500 }
    );
  }
}