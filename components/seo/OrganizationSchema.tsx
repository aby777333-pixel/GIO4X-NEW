import Script from "next/script";

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "GIO4X",
  alternateName: "GIO4X Ltd",
  url: "https://gio4x.com",
  logo: "https://gio4x.com/og-image.png",
  description:
    "GIO4X is a premier online forex broker offering institutional-grade execution, spreads from 0.0 pips, copy trading, PAMM accounts, and the GIO4X Raptor trading platform.",
  email: "support@gio4x.com",
  sameAs: [
    "https://www.facebook.com/gio4x",
    "https://twitter.com/gio4x",
    "https://www.linkedin.com/company/gio4x",
    "https://www.youtube.com/@gio4x",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mutsamudu",
    addressRegion: "Autonomous Island of Anjouan",
    addressCountry: "KM",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "support@gio4x.com",
    availableLanguage: ["English", "Hindi", "Arabic"],
    areaServed: "Worldwide",
  },
  foundingDate: "2023",
  numberOfEmployees: { "@type": "QuantitativeValue", minValue: 50 },
  slogan: "The Gentleman's Forex Broker",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "GIO4X",
  url: "https://gio4x.com",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://gio4x.com/education/glossary?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export function OrganizationSchema() {
  return (
    <>
      <Script
        id="org-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
