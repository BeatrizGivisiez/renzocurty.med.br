import { siteDescription, siteName, siteUrl } from "@/lib/site";

const pirai = {
  "@type": "PostalAddress",
  addressLocality: "Piraí",
  addressRegion: "RJ",
  addressCountry: "BR",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: siteName,
      inLanguage: "pt-BR",
      publisher: { "@id": `${siteUrl}/#medico` },
    },
    {
      "@type": "Physician",
      "@id": `${siteUrl}/#medico`,
      name: siteName,
      url: siteUrl,
      image: `${siteUrl}/images/wa1.jpeg`,
      logo: `${siteUrl}/icon.png`,
      description: siteDescription,
      telephone: "+55-24-99828-0630",
      identifier: {
        "@type": "PropertyValue",
        propertyID: "CRM/RJ",
        value: "52.140936-9",
      },
      address: pirai,
      areaServed: "Brasil",
      knowsLanguage: "pt-BR",
      availableService: {
        "@type": "MedicalTherapy",
        name: "Consulta médica por telemedicina",
      },
      hospitalAffiliation: {
        "@type": "Hospital",
        name: "Hospital Flávio Leal",
        telephone: "+55-24-3511-5600",
        address: pirai,
      },
      sameAs: ["http://lattes.cnpq.br/9074086930172329"],
    },
  ],
};

export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
    />
  );
}
