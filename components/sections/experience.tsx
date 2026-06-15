import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl">
        <SectionHeading eyebrow="Background" title="Experience & education" />

        <div className="relative mt-14">
          {/* timeline spine */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border sm:left-[9px]" />

          <div className="space-y-10">
            {experience.map((job, i) => (
              <Reveal key={`${job.company}-${i}`} delay={i * 0.05} className="relative pl-10 sm:pl-14">
                <span className="absolute left-0 top-1.5 grid h-4 w-4 place-items-center sm:h-5 sm:w-5">
                  <span className="h-4 w-4 rounded-full border-2 border-background bg-gradient-accent sm:h-5 sm:w-5" />
                  {job.current && (
                    <span className="absolute h-4 w-4 animate-ping rounded-full bg-accent-2/50 sm:h-5 sm:w-5" />
                  )}
                </span>

                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-display text-lg font-semibold">
                    {job.role}{" "}
                    <span className="text-muted">· {job.company}</span>
                  </h3>
                  <span className="font-mono text-xs text-muted">{job.period}</span>
                </div>
                {job.summary && <p className="mt-1 text-sm text-accent-2">{job.summary}</p>}
                {job.bullets.length > 0 && (
                  <ul className="mt-3 space-y-1.5">
                    {job.bullets.map((b) => (
                      <li key={b} className="text-sm leading-relaxed text-muted">
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
