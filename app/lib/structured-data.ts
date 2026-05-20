import { pricing, services } from "./site-content";
import { pageSeo, siteConfig } from "./site-metadata";

type JsonLd = Record<string, unknown>;

function absoluteUrl(path: string): string {
  return `${siteConfig.url}${path === "/" ? "" : path}`;
}

export function getOrganizationSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl(siteConfig.logoPath),
      width: 160,
      height: 40,
    },
    image: absoluteUrl(siteConfig.ogImage),
    description: siteConfig.description,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.phone,
      email: siteConfig.email,
      contactType: "customer service",
      availableLanguage: "English",
      areaServed: "Worldwide",
    },
  };
}

export function getWebsiteSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
    inLanguage: "en-US",
  };
}

export function getWebPageSchema(page: keyof typeof pageSeo): JsonLd {
  const config = pageSeo[page];

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${absoluteUrl(config.path)}#webpage`,
    url: absoluteUrl(config.path),
    name: config.description.slice(0, 120),
    description: config.description,
    isPartOf: {
      "@id": `${siteConfig.url}/#website`,
    },
    about: {
      "@id": `${siteConfig.url}/#organization`,
    },
    inLanguage: "en-US",
  };
}

export function getBreadcrumbSchema(
  items: { name: string; path: string }[],
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function getServiceSchemas(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@graph": services.map((service) => ({
      "@type": "Service",
      "@id": `${siteConfig.url}/services#${service.title.toLowerCase().replace(/\s+/g, "-")}`,
      name: service.title,
      description: service.description,
      serviceType: service.title,
      provider: {
        "@id": `${siteConfig.url}/#organization`,
      },
      areaServed: {
        "@type": "Place",
        name: "Worldwide",
      },
      url: absoluteUrl("/services"),
    })),
  };
}

export function getPrimaryServiceSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteConfig.url}/services#virtual-assistant-services`,
    name: "Virtual Assistant Services",
    description:
      "Dedicated virtual assistant services including executive assistance, administrative support, operations support, and remote assistant services for startups and growing businesses.",
    serviceType: "Virtual Assistant Services",
    provider: {
      "@id": `${siteConfig.url}/#organization`,
    },
    areaServed: "Worldwide",
    url: absoluteUrl("/services"),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Ghigha Service Plans",
      itemListElement: pricing.map((tier) => ({
        "@type": "Offer",
        name: tier.name,
        description: tier.description,
        price: tier.price.replace(/[^\d.]/g, "") || undefined,
        priceCurrency: "USD",
        url: absoluteUrl("/pricing"),
      })),
    },
  };
}

export function getContactPageSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${absoluteUrl("/contact")}#contactpage`,
    url: absoluteUrl("/contact"),
    name: "Contact Ghigha",
    description: pageSeo.contact.description,
    mainEntity: {
      "@id": `${siteConfig.url}/#organization`,
    },
  };
}

export function getGlobalSchemas(): JsonLd[] {
  return [getOrganizationSchema(), getWebsiteSchema()];
}
