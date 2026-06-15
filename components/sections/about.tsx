import { Reveal } from "@/components/motion/reveal";
import { site } from "@/data/site";

const stats = [
  { value: "4+", label: "Years building" },
  { value: "Full-stack", label: "Front to back" },
  { value: "M.Sc.", label: "Computer Science" },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-24 px-6 py-24 sm:py-32">
      <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-[1.4fr_1fr] md:items-center">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent-2">
            About
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Engineer who cares about the whole product.
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted sm:text-lg">
            <p>{site.bio}</p>
            <p>
              I gravitate toward problems where architecture, security, and developer
              experience meet — multi-tenant platforms, auth systems, and the kind of
              infrastructure that quietly makes everything else faster.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="grid gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent-2/40"
            >
              <div className="font-display text-3xl font-bold text-gradient">{s.value}</div>
              <div className="mt-1 text-sm text-muted">{s.label}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
