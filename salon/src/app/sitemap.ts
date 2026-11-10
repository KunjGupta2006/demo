import { MetadataRoute } from "next";
import { SERVICES_DATA } from "@/data/services";
import { STYLISTS_DATA } from "@/data/stylists";
import { PRODUCTS_DATA } from "@/data/products";
import { JOURNAL_DATA } from "@/data/journal";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://care4ustudio.fr";

  const staticRoutes = [
    "",
    "/services",
    "/pricing",
    "/team",
    "/gallery",
    "/shop",
    "/journal",
    "/membership",
    "/about",
    "/careers",
    "/contact",
    "/booking",
    "/legal/privacy",
    "/legal/terms",
    "/legal/cancellation",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const serviceRoutes = SERVICES_DATA.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const stylistRoutes = STYLISTS_DATA.map((stylist) => ({
    url: `${baseUrl}/team/${stylist.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const productRoutes = PRODUCTS_DATA.map((product) => ({
    url: `${baseUrl}/shop/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const journalRoutes = JOURNAL_DATA.map((post) => ({
    url: `${baseUrl}/journal/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...stylistRoutes,
    ...productRoutes,
    ...journalRoutes,
  ];
}
