import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { getAllSlugs } from "@/lib/blog";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");
  const routes = ["", "/blog"].map((path) => ({
    url: `${base}${path}/`,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));
  const posts = getAllSlugs().map((slug) => ({
    url: `${base}/blog/${slug}/`,
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));
  return [...routes, ...posts];
}
