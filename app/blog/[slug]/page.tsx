import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllSlugs, getPostBySlug } from "@/lib/blog";
import { mdxComponents } from "@/components/mdx-components";
import { formatDate } from "@/lib/utils";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.meta.title,
    description: post.meta.excerpt,
    openGraph: { title: post.meta.title, description: post.meta.excerpt, type: "article" },
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-2xl px-6 pt-36 pb-24 sm:pt-44">
      <Link
        href="/blog/"
        className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" /> All posts
      </Link>

      <header className="mt-8">
        <div className="flex items-center gap-3 font-mono text-xs text-muted">
          <time dateTime={post.meta.date}>{formatDate(post.meta.date)}</time>
          <span aria-hidden>·</span>
          <span>{post.meta.readingTime}</span>
        </div>
        <h1 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
          {post.meta.title}
        </h1>
        {post.meta.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {post.meta.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-border bg-card px-2.5 py-1 font-mono text-xs text-muted"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </header>

      <div className="mt-10">
        <MDXRemote source={post.content} components={mdxComponents} />
      </div>
    </article>
  );
}
