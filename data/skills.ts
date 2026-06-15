export type SkillGroup = {
  title: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    title: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Spring Boot", "Java", "REST APIs", "PostgreSQL"],
  },
  {
    title: "Cloud & Infra",
    items: ["AWS", "Docker", "CI/CD", "Cloudflare", "OAuth2 / RBAC"],
  },
  {
    title: "Tooling & Data",
    items: ["Git", "Python", "Pandas", "NLP", "Jest / Vitest"],
  },
];
