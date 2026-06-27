import type { MetadataRoute } from "next";
import { getBlogSlugs } from "@/lib/blog";
import { getProjectSlugs } from "@/lib/portfolio-projects";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { path: "", priority: 1, changeFrequency: "weekly" as const },
    { path: "/about", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/skills", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/projects", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/blog", priority: 0.85, changeFrequency: "weekly" as const },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
  ];

  const projectRoutes = getProjectSlugs().map((slug) => ({
    path: `/projects/${slug}`,
    priority: 0.8,
    changeFrequency: "monthly" as const,
  }));

  const blogRoutes = getBlogSlugs().map((slug) => ({
    path: `/blog/${slug}`,
    priority: 0.75,
    changeFrequency: "monthly" as const,
  }));

  return [...staticRoutes, ...projectRoutes, ...blogRoutes].map(
    ({ path, priority, changeFrequency }) => ({
      url: absoluteUrl(path),
      lastModified: new Date(),
      changeFrequency,
      priority,
    }),
  );
}
