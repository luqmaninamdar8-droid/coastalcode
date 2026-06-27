import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import PageShell from "@/components/layout/PageShell";
import { buttonVariants } from "@/components/ui/button";
import { getBlogPost, getBlogSlugs } from "@/lib/blog";
import { breadcrumbJsonLd, blogPostJsonLd, createPageMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return createPageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${slug}`,
    keywords: post.keywords,
    absoluteTitle: true,
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <PageShell>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${slug}` },
          ]),
          blogPostJsonLd({
            title: post.title,
            description: post.excerpt,
            slug: post.slug,
            date: post.date,
          }),
        ]}
      />

      <article className="relative py-16 md:py-24">
        <div className="container mx-auto max-w-3xl px-4">
          <Link href="/blog" className="text-sm font-semibold text-tech-cyan hover:underline">
            ← Back to blog
          </Link>
          <time className="mt-6 block text-xs font-bold uppercase tracking-wider text-sunset">
            {new Date(post.date).toLocaleDateString("en-IN", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}{" "}
            · {post.readTime}
          </time>
          <h1 className="text-gradient-glow-hero glow-title-animate mt-3 text-3xl font-bold tracking-tight md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-lg text-sand/70">{post.excerpt}</p>

          <div className="prose-custom mt-12 space-y-10">
            {post.sections.map((section) => (
              <section key={section.heading ?? section.paragraphs[0]}>
                {section.heading && (
                  <h2 className="text-gradient-glow text-2xl font-bold">{section.heading}</h2>
                )}
                <div className={section.heading ? "mt-4 space-y-4" : "space-y-4"}>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="leading-relaxed text-sand/75">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-14 rounded-2xl border border-sunset/20 bg-sunset/10 p-6 text-center">
            <p className="text-sand/80">Need a website for your business?</p>
            <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "mt-4")}>
              Get in touch
            </Link>
          </div>
        </div>
      </article>
    </PageShell>
  );
}
