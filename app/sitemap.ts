import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://gio4x.com";
  const now = new Date().toISOString();

  const routes = [
    "/",
    "/markets",
    "/platforms",
    "/accounts",
    "/funding",
    "/copy-trading",
    "/pamm",
    "/tools",
    "/tools/algorator",
    "/tools/gio-bots",
    "/education",
    "/education/glossary",
    "/education/books",
    "/blog",
    "/about",
    "/about/what-we-are",
    "/about/security",
    "/about/online-security",
    "/faq",
    "/careers",
    "/partners",
    "/partners/money-managers",
    "/contact",
    "/support",
    "/legal",
    "/legal/terms",
    "/legal/privacy",
    "/legal/aml",
    "/legal/risk",
  ];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: now,
    changeFrequency: route === "/" ? "daily" : route === "/blog" ? "daily" : "weekly",
    priority: route === "/" ? 1.0 : route.split("/").length <= 2 ? 0.8 : 0.6,
  }));
}
