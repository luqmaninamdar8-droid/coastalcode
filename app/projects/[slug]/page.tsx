import type { Metadata } from "next";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import ProjectDetail from "@/components/ProjectDetail";
import { getProject, projects } from "@/lib/projects";
import {
  breadcrumbJsonLd,
  createPageMetadata,
  projectJsonLd,
} from "@/lib/seo";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project Not Found" };

  return createPageMetadata({
    title: `${project.title} — ${project.category} Website Project`,
    description: project.description,
    path: `/projects/${project.slug}`,
    image: project.image,
    imageAlt: project.imageAlt,
    keywords: [
      project.title,
      `${project.category} website Goa`,
      ...project.tags,
      "Coastal Code portfolio",
    ],
  });
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Work", path: "/work" },
            { name: project.title, path: `/projects/${project.slug}` },
          ]),
          projectJsonLd(project),
        ]}
      />
      <ProjectDetail project={project} />
    </>
  );
}
