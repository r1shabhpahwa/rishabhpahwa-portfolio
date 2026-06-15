export type SkillGroup = {
  title: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    title: "Languages",
    items: ["Java", "JavaScript", "TypeScript", "Python", "Bash"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "Redux", "Tailwind CSS", "Webpack"],
  },
  {
    title: "Backend & APIs",
    items: ["Node.js", "Express", "Spring Boot", "FastAPI", "GraphQL", "REST", "OAuth2"],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Firestore"],
  },
  {
    title: "AI & LLM",
    items: ["OpenAI", "Claude", "LangChain", "RAG", "AI Agents", "Prompt Engineering"],
  },
  {
    title: "Cloud & DevOps",
    items: ["AWS", "GCP", "Azure", "Docker", "Kubernetes", "GitHub Actions", "Terraform"],
  },
  {
    title: "Tools",
    items: ["Git", "Jira", "Kafka", "Nginx", "Maven", "Test Automation"],
  },
];
