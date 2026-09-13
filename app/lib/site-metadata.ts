import type { Metadata } from "next";

export const seoKeywords = [
  "business operations support",
  "operations support services",
  "operational support for small businesses",
  "operations support for growing businesses",
  "executive operations support",
  "administrative operations support",
  "managed operations support",
  "virtual operations support",
  "business operations partner",
  "workflow coordination",
] as const;

export const siteConfig = {
  name: "Ghigha",
  url: "https://ghigha.com",
  defaultTitle:
    "Ghigha | Business Operations Support for Growing Businesses",
  description:
    "Ghigha provides business operations support for expanding teams, including executive coordination, customer communication, workflow management, and day-to-day administrative work.",
  keywords: [...seoKeywords],
  ogImage: "/og-image.png",
  ogImageAlt:
    "Ghigha Business Operations Support for Growing Businesses",
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
        "Ghigha | Business Operations Support for Growing Businesses",
    },
    description:
      "Ghigha provides business operations support for expanding teams, including executive coordination, customer communication, workflow management, and day-to-day administrative work.",
    path: "/",
  },
  services: {
    title: "Operations Support Solutions",
    description:
      "See how Ghigha supports executive and administrative operations, customer communication, workflow coordination, and growth-related day-to-day work.",
    path: "/services",
  },
  pricing: {
    title: "Pricing",
    description:
      "Starter, Growth, and Titan plans for companies that need structured operations support matched to their current stage.",
    path: "/pricing",
  },
  about: {
    title: "About",
    description:
      "Learn how Ghigha helps leadership teams run recurring operations with more structure, consistency, and capacity.",
    path: "/about",
  },
  contact: {
    title: "Contact",
    description:
      "Book an Operational Growth Consultation with Ghigha to review bottlenecks and find the right level of operations support.",
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
