"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "motion/react";
import { ArrowUpRight, Check } from "lucide-react";
import { GithubIcon } from "@/components/ui/brand-icons";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const rotateX = useSpring(rx, { stiffness: 150, damping: 18 });
  const rotateY = useSpring(ry, { stiffness: 150, damping: 18 });

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    ry.set(px * 8);
    rx.set(-py * 8);
  }
  function reset() {
    rx.set(0);
    ry.set(0);
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className="group relative h-full [perspective:1000px]"
    >
      {/* gradient glow on hover */}
      <div className="absolute -inset-px rounded-3xl bg-gradient-accent opacity-0 blur transition-opacity duration-500 group-hover:opacity-40" />
      <motion.article
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative flex h-full flex-col rounded-3xl border border-border bg-card p-7 transition-colors group-hover:border-transparent"
      >
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs text-muted">{project.year}</span>
          <div className="flex gap-2">
            {project.links?.repo && (
              <a
                href={project.links.repo}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Source code"
                className="text-muted transition-colors hover:text-foreground"
              >
                <GithubIcon className="h-4 w-4" />
              </a>
            )}
            {project.links?.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Live site"
                className="text-muted transition-colors hover:text-foreground"
              >
                <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>

        <h3 className="mt-4 font-display text-xl font-bold tracking-tight">{project.title}</h3>
        <p className="mt-2 text-sm text-muted">{project.blurb}</p>

        <ul className="mt-5 space-y-2">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-2 text-sm text-muted">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-3" />
              <span>{h}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap gap-2 pt-6">
          {project.stack.map((s) => (
            <span
              key={s}
              className="rounded-full border border-border bg-background px-2.5 py-1 font-mono text-xs text-muted"
            >
              {s}
            </span>
          ))}
        </div>
      </motion.article>
    </div>
  );
}
