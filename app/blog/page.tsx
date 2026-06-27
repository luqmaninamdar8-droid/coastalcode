import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageHeader from "@/components/layout/PageHeader";
import PageShell from "@/components/layout/PageShell";
import { blogPosts } from "@/lib/blog";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Blog | Web Design Tips from a Young Developer in Goa",
  description:
    "Articles by Luqman Inamdar — taxi websites in Goa, bakery sites, spa SEO, Next.js tips, and advice for small businesses in Sanguem and South Goa.",
  path: "/blog",
  keywords: [
    "web design blog Goa",
    "taxi website Goa developer",
    "bakery website South Goa",
    "spa website Goa",
    "young developer blog India",
  ],
});

export default function BlogPage() {
  return (
    <PageShell>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
      />
      <PageHeader
        label="Blog"
        title="Stories & web tips"
        description="How I build sites, what I've learned, and advice for businesses in Goa and across India."
      />

      <section className="relative py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid gap-6 md:grid-cols-2">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:border-sunset/30 hover:shadow-glow-sunset md:p-8"
              >
                <time className="text-xs font-bold uppercase tracking-wider text-tech-cyan">
                  {new Date(post.date).toLocaleDateString("en-IN", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}{" "}
                  · {post.readTime}
                </time>
                <h2 className="text-gradient-glow mt-3 text-xl font-bold md:text-2xl">
                  <Link href={`/blog/${post.slug}`} className="hover:underline">
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-sand/70">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-4 text-sm font-semibold text-sunset group-hover:underline"
                >
                  Read article →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
