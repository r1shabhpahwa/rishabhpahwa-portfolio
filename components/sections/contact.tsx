import { ArrowUpRight, Mail } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Magnetic } from "@/components/ui/magnetic";
import { SocialLinks } from "@/components/ui/social-links";
import { site } from "@/data/site";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 px-6 py-24 sm:py-32">
      <Reveal className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-border bg-card px-6 py-16 text-center sm:py-24">
        {/* decorative glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 -z-0 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-gradient-accent opacity-20 blur-[100px]"
        />
        <div className="relative">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent-2">
            Get in touch
          </span>
          <h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Let&rsquo;s build something <span className="text-gradient">great</span> together.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-muted sm:text-lg">
            I&rsquo;m open to new opportunities and interesting collaborations. The fastest
            way to reach me is email — I&rsquo;ll get back to you quickly.
          </p>

          <div className="mt-9 flex flex-col items-center gap-5">
            <Magnetic>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-accent px-8 py-4 text-sm font-medium text-white shadow-lg shadow-accent-1/25 transition-shadow hover:shadow-xl hover:shadow-accent-2/30"
              >
                <Mail className="h-4 w-4" /> {site.email}
              </a>
            </Magnetic>

            <SocialLinks />

            <a
              href={site.resume}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
            >
              Or download my resume <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
