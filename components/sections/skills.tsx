import { SectionHeading } from "@/components/ui/section-heading";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger";
import { skills } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Toolkit"
          title="Technologies I work with"
          description="The stack I reach for to take ideas from prototype to production."
        />

        <StaggerContainer className="mt-14 grid gap-5 sm:grid-cols-2">
          {skills.map((group) => (
            <StaggerItem
              key={group.title}
              className="group rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent-2/40"
            >
              <h3 className="font-display text-lg font-semibold">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-border bg-background px-3 py-1.5 font-mono text-sm text-muted transition-colors group-hover:text-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
