// Update WHATSAPP_NUMBER to your actual number (country code + digits, no + or spaces)
const WHATSAPP_NUMBER = "525529357876";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hola, me interesa agendar un diagnóstico para mi proyecto.",
);

export default function WhatsAppButton() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="whatsapp-btn group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full"
      style={{
        background: "linear-gradient(145deg, #0D0D14 0%, #181824 100%)",
        border: "1px solid rgba(255,255,255,0.07)",
        boxShadow:
          "0 0 0 1.5px rgba(0,195,100,0.18), 0 6px 24px -6px rgba(0,0,0,0.8)",
      }}
    >
      {/* Animated pulse ring */}
      <span
        aria-hidden="true"
        className="whatsapp-ring pointer-events-none absolute inset-0 rounded-full"
        style={{
          border: "1.5px solid rgba(0, 195, 100, 0.35)",
        }}
      />

      {/* WhatsApp SVG icon */}
      <svg
        viewBox="0 0 24 24"
        className="relative h-6 w-6 transition-transform duration-300 group-hover:scale-110"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.47-.148-.669.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.148-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.463 1.065 2.876 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
          fill="#00C364"
        />
      </svg>
    </a>
  );
}
