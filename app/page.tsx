import type { Metadata } from "next";
import HeroSection from "./components/sections/HeroSection";
import ProblemSection from "./components/sections/ProblemSection";
import ServicesSection from "./components/sections/ServicesSection";
import ProcessSection from "./components/sections/ProcessSection";
import TechStackSection from "./components/sections/TechStackSection";
import TrustSection from "./components/sections/TrustSection";
import ContactCTASection from "./components/sections/ContactCTASection";

const pageTitle = "Nodatix | Desarrollo de Software a Medida y Sistemas B2B";
const pageDescription =
  "Construimos software a medida, CRM y automatizaciones que simplifican y escalan la operación de tu negocio.";

export const metadata: Metadata = {
  title: {
    absolute: pageTitle,
  },
  description: pageDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "/",
    siteName: "Nodatix",
    title: pageTitle,
    description: pageDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
  },
};

export default function Home() {
  return (
    <div className="font-clash">
      <HeroSection />
      <ProblemSection />
      <ServicesSection />
      <ProcessSection />
      <TechStackSection />
      <TrustSection />
      <ContactCTASection />
    </div>
  );
}
