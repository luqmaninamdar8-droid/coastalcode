import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import PageShell from "@/components/layout/PageShell";
import { buttonVariants } from "@/components/ui/button";
import { getCaseStudy, getProjectMeta } from "@/lib/project-case-studies";
import { getProjectBySlug, getProjectSlugs } from "@/lib/portfolio-projects";
import {
  breadcrumbJsonLd,
  createPageMetadata,
  creativeWorkJsonLd,
} from "@/lib/seo";
import { cn } from "@/lib/utils";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  const meta = getProjectMeta(project);
  return createPageMetadata({
    title: meta.title,
    description: meta.description,
    path: `/projects/${slug}`,
    image: project.image,
    imageAlt: project.imageAlt,
    keywords: meta.keywords,
    absoluteTitle: true,
  });
}

export default async function ProjectCaseStudyPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  const study = getCaseStudy(slug);

  if (!project || !study) notFound();

  return (
    <PageShell>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Projects", path: "/projects" },
            { name: project.title, path: `/projects/${slug}` },
          ]),
          creativeWorkJsonLd({
            title: project.title,
            description: study.metaDescription,
            url: `/projects/${slug}`,
            image: project.image,
          }),
        ]}
      />

      <article className="relative border-b border-white/10 py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-tech-cyan glow-label">
              {project.category}
            </p>
            <h1 className="text-gradient-glow-hero glow-title-animate mt-3 text-3xl font-bold tracking-tight md:text-5xl">
              {project.title}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-sand/70">{project.description}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ size: "lg" }))}
              >
                Visit live site
              </a>
              <Link
                href="/contact"
                className={cn(buttonVariants({ variant: "secondary", size: "lg" }))}
              >
                Start a similar project
              </Link>
            </div>
          </div>

          <div className="relative mx-auto mt-12 max-w-4xl overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
            <div className="relative aspect-[16/10]">
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 896px"
              />
            </div>
          </div>

          {study.demoVideo && (
            <div className="mx-auto mt-12 max-w-4xl">
              <h2 className="text-gradient-glow text-center text-2xl font-bold md:text-3xl">
                {study.demoVideoLabel ?? "Website demo"}
              </h2>
              <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">
                <video
                  className="aspect-video w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  preload="metadata"
                  poster={project.image}
                >
                  <source src={study.demoVideo} type="video/mp4" />
                </video>
              </div>
            </div>
          )}

          <div className="mx-auto mt-16 grid max-w-4xl gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-gradient-glow text-xl font-bold">The challenge</h2>
              <p className="mt-3 text-sm leading-relaxed text-sand/70">{study.challenge}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-gradient-glow text-xl font-bold">The solution</h2>
              <p className="mt-3 text-sm leading-relaxed text-sand/70">{study.solution}</p>
            </div>
          </div>

          <div className="mx-auto mt-12 max-w-4xl">
            <h2 className="text-gradient-glow text-center text-2xl font-bold">What&apos;s included</h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {study.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-sand/80"
                >
                  <span className="text-sunset" aria-hidden="true">
                    ✦
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-sand/60"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </PageShell>
  );
}
