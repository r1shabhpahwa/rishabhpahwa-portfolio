"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";
import { Magnetic } from "@/components/ui/magnetic";
import { SocialLinks } from "@/components/ui/social-links";
import { site } from "@/data/site";

const line1 = ["Building", "scalable"];
const line2 = ["systems", "that", "feel", "simple."];

export function Hero() {
  const reduce = useReducedMotion();

  const word = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: "0.5em", rotateX: -40 },
    show: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28 pb-16">
      {/* Animated gradient blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-grid absolute inset-0 opacity-[0.5]" />
        <div className="animate-float absolute -left-24 top-10 h-[28rem] w-[28rem] rounded-full bg-accent-1/30 blur-[120px]" />
        <div
          className="animate-float absolute -right-24 top-1/3 h-[26rem] w-[26rem] rounded-full bg-accent-2/25 blur-[120px]"
          style={{ animationDelay: "-5s" }}
        />
        <div
          className="animate-float absolute bottom-0 left-1/3 h-[24rem] w-[24rem] rounded-full bg-accent-3/20 blur-[120px]"
          style={{ animationDelay: "-9s" }}
        />
      </div>

      <div className="mx-auto w-full max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs text-muted backdrop-blur"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
          </span>
          Available for new opportunities
        </motion.div>

        <h1 className="mt-6 font-display text-5xl font-bold leading-[0.95] tracking-tight sm:text-7xl md:text-8xl">
          <motion.span
            className="block [perspective:800px]"
            initial="hidden"
            animate="show"
            transition={{ staggerChildren: 0.08 }}
          >
            {line1.map((w, i) => (
              <motion.span key={i} variants={word} className="mr-[0.25em] inline-block">
                {w}
              </motion.span>
            ))}
          </motion.span>
          <motion.span
            className="block text-gradient animate-shimmer [perspective:800px]"
            initial="hidden"
            animate="show"
            transition={{ staggerChildren: 0.08, delayChildren: 0.16 }}
          >
            {line2.map((w, i) => (
              <motion.span key={i} variants={word} className="mr-[0.25em] inline-block">
                {w}
              </motion.span>
            ))}
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-7 max-w-xl text-lg text-muted"
        >
          I&rsquo;m {site.name} — a {site.role.toLowerCase()} who builds full-stack products
          end-to-end, from polished React front ends to secure, scalable back ends.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.62 }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <Magnetic>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-accent px-7 py-3.5 text-sm font-medium text-white shadow-lg shadow-accent-1/25 transition-shadow hover:shadow-xl hover:shadow-accent-2/30"
            >
              View my work <ArrowDown className="h-4 w-4" />
            </a>
          </Magnetic>
          <Magnetic strength={0.25}>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-sm font-medium transition-colors hover:bg-card-hover"
            >
              Get in touch <ArrowUpRight className="h-4 w-4" />
            </a>
          </Magnetic>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.78 }}
          className="mt-10 flex flex-wrap items-center gap-5"
        >
          <SocialLinks />
          <span className="inline-flex items-center gap-1.5 text-sm text-muted">
            <MapPin className="h-4 w-4" /> {site.location}
          </span>
        </motion.div>
      </div>
    </section>
  );
}
