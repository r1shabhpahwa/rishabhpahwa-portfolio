import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { ProjectCard } from "@/components/ui/project-card";
import { projects } from "@/data/projects";

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  return (
    <section id="projects" className="scroll-mt-24 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Selected work"
          title="Things I've built"
          description="A few projects that show how I think about architecture, security, and scale."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {featured.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.08} className="h-full">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
