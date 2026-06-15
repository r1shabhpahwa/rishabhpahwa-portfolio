export type Experience = {
  role: string;
  company: string;
  location?: string;
  period: string;
  summary?: string;
  bullets: string[];
  current?: boolean;
};

// TODO(rishabh): verify dates/companies and tune the bullets to match your resume.
export const experience: Experience[] = [
  {
    role: "Software Development Engineer",
    company: "Uniserve",
    location: "Vancouver, BC",
    period: "2023 — Present",
    summary: "Full-stack development across the managed-services platform.",
    bullets: [
      "Designed and shipped a multi-tenant managed-services platform with session auth, MFA, OAuth2, and RBAC.",
      "Built a Telnyx-powered fax management system with secure webhook handling and delivery tracking.",
      "Worked end-to-end across Next.js front ends, Node.js / Spring Boot services, and cloud deployment.",
    ],
    current: true,
  },
  {
    role: "Software Engineer",
    company: "Earlier Role",
    location: "Canada",
    period: "2021 — 2023",
    summary: "Building and scaling web applications.",
    bullets: [
      "Developed and maintained production web applications with React and Node.js.",
      "Collaborated across the stack to deliver features from design through deployment.",
    ],
  },
  {
    role: "M.Sc., Computer Science",
    company: "University of Windsor",
    location: "Windsor, ON",
    period: "2019 — 2021",
    bullets: [
      "Master's degree with a focus on data science and applied machine learning.",
      "Capstone: large-scale sentiment analysis of ~250k ChatGPT-related tweets.",
    ],
  },
];
