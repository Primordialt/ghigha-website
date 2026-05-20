import type { MetadataRoute } from "next";
import { pageSeo, siteConfig } from "./lib/site-metadata";

const routes: {
  page: keyof typeof pageSeo;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
}[] = [
  { page: "home", priority: 1, changeFrequency: "weekly" },
  { page: "services", priority: 0.9, changeFrequency: "monthly" },
  { page: "pricing", priority: 0.9, changeFrequency: "monthly" },
  { page: "about", priority: 0.8, changeFrequency: "monthly" },
  { page: "contact", priority: 0.8, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ page, priority, changeFrequency }) => ({
    url: `${siteConfig.url}${pageSeo[page].path === "/" ? "" : pageSeo[page].path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
