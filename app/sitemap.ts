import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { path: "", priority: 1, changeFrequency: "weekly" as const },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/work", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
  ];

  const projectRoutes = projects.map((project) => ({
    path: `/projects/${project.slug}`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
  }));

  return [...staticRoutes, ...projectRoutes].map(
    ({ path, priority, changeFrequency }) => ({
      url: absoluteUrl(path),
      lastModified: new Date(),
      changeFrequency,
      priority,
    }),
  );
}
