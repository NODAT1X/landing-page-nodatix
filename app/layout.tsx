import type { Metadata } from "next";
import { Geist, Geist_Mono, Syne } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import { ThemeProvider } from "./components/ThemeProvider";

/* ── Fonts ──────────────────────────────────────────────────────── */
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

/* Display font — headings only (H1, H2) */
const syne = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
});

/* Clash Display — geometric premium display font (B2B headings) */
const clashDisplay = localFont({
  src: [
    {
      path: "../public/fonts/ClashDisplay-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/ClashDisplay-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/ClashDisplay-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/ClashDisplay-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-clash",
  display: "swap",
});

/* ── Metadata ───────────────────────────────────────────────────── */
const siteTitle = "Nodatix | Desarrollo de Software a Medida y Sistemas B2B";
const siteDescription =
  "Construimos software a medida, CRM y automatizaciones que simplifican y escalan la operación de tu negocio.";

export const metadata: Metadata = {
  metadataBase: new URL("https://nodatix.com"),
  title: {
    default: siteTitle,
    template: "%s | Nodatix",
  },
  description: siteDescription,
  applicationName: "Nodatix",
  keywords: [
    "software a medida",
    "desarrollo de software",
    "sistemas B2B",
    "CRM a medida",
    "automatizaciones B2B",
    "software empresarial",
  ],
  authors: [{ name: "Nodatix" }],
  creator: "Nodatix",
  publisher: "Nodatix",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "/",
    siteName: "Nodatix",
    title: siteTitle,
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
};

/* ── Root Layout ────────────────────────────────────────────────── */
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" data-theme="dark" suppressHydrationWarning>
      <head>
        {/* Anti-flash: read localStorage before first paint and apply saved theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');document.documentElement.setAttribute('data-theme',t==='light'?'light':'dark');}catch(e){}})();`,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${syne.variable} ${clashDisplay.variable} antialiased`}
      >
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
