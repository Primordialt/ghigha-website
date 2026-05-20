import type { Metadata } from "next";

export const seoKeywords = [
  "Virtual Assistant Services",
  "Hire Virtual Assistants",
  "Remote Assistant Services",
  "Business Support Services",
  "Operations Support",
  "Startup Support",
  "Executive Assistance",
  "Administrative Support",
] as const;

export const siteConfig = {
  name: "Ghigha",
  url: "https://ghigha.com",
  defaultTitle:
    "Ghigha | Hire Virtual Assistants & Remote Assistant Services",
  description:
    "Ghigha provides premium virtual assistant services, remote assistant services, and business support services for startups and growing companies. Hire virtual assistants for operations support, executive assistance, and administrative support.",
  keywords: [...seoKeywords],
  ogImage: "/og-image.png",
  ogImageAlt:
    "Ghigha — Virtual Assistant Services, Business Support & Operations Support",
  themeColor: "#05071C",
  locale: "en_US",
  email: "hello@ghigha.com",
  phone: "+16466318665",
  logoPath: "/images/logo-desktop.svg",
} as const;

export type PageSeoKey = "home" | "services" | "pricing" | "about" | "contact";

export const pageSeo: Record<
  PageSeoKey,
  { title: Metadata["title"]; description: string; path: string }
> = {
  home: {
    title: {
      absolute:
        "Ghigha | Hire Virtual Assistants & Remote Assistant Services",
    },
    description:
      "Hire reliable virtual assistants and remote assistant services from Ghigha. Business support services, operations support, executive assistance, and startup support for growing teams.",
    path: "/",
  },
  services: {
    title: "Virtual Assistant Services",
    description:
      "Explore Ghigha's virtual assistant services — remote assistant services, executive assistance, administrative support, and operations support tailored for startups and business owners.",
    path: "/services",
  },
  pricing: {
    title: "Pricing",
    description:
      "Flexible pricing for virtual assistant services and business support services. Hire virtual assistants with plans for operations support, executive assistance, and startup support.",
    path: "/pricing",
  },
  about: {
    title: "About",
    description:
      "Learn how Ghigha helps founders scale with virtual assistant services, remote assistant services, startup support, and reliable operations support teams.",
    path: "/about",
  },
  contact: {
    title: "Contact",
    description:
      "Contact Ghigha to hire virtual assistants or discuss remote assistant services, business support services, and operations support for your business.",
    path: "/contact",
  },
};

type PageMetadataOptions = {
  page: PageSeoKey;
  noIndex?: boolean;
};

function buildCanonicalUrl(path: string): string {
  return `${siteConfig.url}${path === "/" ? "" : path}`;
}

function buildSharedMetadata({
  title,
  description,
  path,
  noIndex = false,
}: {
  title: Metadata["title"];
  description: string;
  path: string;
  noIndex?: boolean;
}): Metadata {
  const canonicalUrl = buildCanonicalUrl(path);
  const resolvedTitle =
    typeof title === "object" && title !== null && "absolute" in title
      ? title.absolute
      : typeof title === "string"
        ? `${title} | ${siteConfig.name}`
        : siteConfig.defaultTitle;

  return {
    title,
    description,
    keywords: [...siteConfig.keywords],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url: canonicalUrl,
      siteName: siteConfig.name,
      title: resolvedTitle,
      description,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.ogImageAlt,
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description,
      images: {
        url: siteConfig.ogImage,
        alt: siteConfig.ogImageAlt,
      },
    },
    robots: noIndex
      ? { index: false, follow: false, nocache: true }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
  };
}

export function createPageMetadata({
  page,
  noIndex = false,
}: PageMetadataOptions): Metadata {
  const config = pageSeo[page];
  return buildSharedMetadata({
    title: config.title,
    description: config.description,
    path: config.path,
    noIndex,
  });
}

export const rootMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  title: {
    default: siteConfig.defaultTitle,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  category: "Business Services",
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.defaultTitle,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.ogImageAlt,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.defaultTitle,
    description: siteConfig.description,
    images: {
      url: siteConfig.ogImage,
      alt: siteConfig.ogImageAlt,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon-32x32.png"],
  },
  manifest: "/site.webmanifest",
  other: {
    "msapplication-TileColor": siteConfig.themeColor,
  },
};

/** @deprecated Use createPageMetadata({ page }) instead */
export function createMetadata(options: {
  title?: string;
  description?: string;
  path?: string;
  noIndex?: boolean;
} = {}): Metadata {
  const path = options.path ?? "/";
  const pageKey = (
    path === "/"
      ? "home"
      : path.replace(/^\//, "")
  ) as PageSeoKey;

  const config = pageSeo[pageKey] ?? pageSeo.home;

  return buildSharedMetadata({
    title: options.title ?? config.title,
    description: options.description ?? config.description,
    path,
    noIndex: options.noIndex,
  });
}
