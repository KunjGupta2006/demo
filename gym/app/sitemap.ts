import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://sparkfitnessbandra.demo";

  const routes = [
    "",
    "/training",
    "/memberships",
    "/coaches",
    "/results",
    "/about",
    "/contact",
    "/book-trial",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));
}
