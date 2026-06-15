import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { getAllPosts } from "@/lib/blog";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes on engineering, architecture, and building for the web.",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <section className="mx-auto max-w-3xl px-6 pt-36 pb-24 sm:pt-44">
      <Reveal>
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent-2">Writing</span>
        <h1 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">Blog</h1>
        <p className="mt-4 text-base text-muted sm:text-lg">
          Notes on engineering, architecture, and the occasional deep dive.
        </p>
      </Reveal>

      <div className="mt-14 space-y-4">
        {posts.length === 0 && (
          <p className="text-muted">No posts yet — check back soon.</p>
        )}
        {posts.map((post, i) => (
          <Reveal key={post.slug} delay={i * 0.05}>
            <Link
              href={`/blog/${post.slug}/`}
              className="group block rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent-2/40"
            >
              <div className="flex items-center gap-3 font-mono text-xs text-muted">
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                <span aria-hidden>·</span>
                <span>{post.readingTime}</span>
              </div>
              <h2 className="mt-3 flex items-start justify-between gap-3 font-display text-xl font-semibold tracking-tight">
                {post.title}
                <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-2" />
              </h2>
              <p className="mt-2 text-sm text-muted">{post.excerpt}</p>
              {post.tags.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {post.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border bg-background px-2.5 py-1 font-mono text-xs text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
