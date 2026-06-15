export type Project = {
  title: string;
  blurb: string;
  description: string;
  stack: string[];
  highlights: string[];
  links?: { live?: string; repo?: string; caseStudy?: string };
  featured?: boolean;
  year?: string;
};

// Seeded from existing portfolio content — refine copy/links as you like.
export const projects: Project[] = [
  {
    title: "Multi-Tenant Managed-Services Platform",
    blurb: "A secure, multi-tenant platform powering managed IT services at scale.",
    description:
      "Architected and built a multi-tenant managed-services platform with isolated tenants, role-based access, and hardened authentication. Designed the auth layer end-to-end with session management, MFA, OAuth2, and granular RBAC.",
    stack: ["Next.js", "Node.js", "Spring Boot", "PostgreSQL", "OAuth2", "RBAC"],
    highlights: [
      "Session-based auth with MFA and OAuth2 single sign-on",
      "Granular role-based access control across tenants",
      "Tenant isolation and secure data partitioning",
    ],
    year: "2024",
    featured: true,
  },
  {
    title: "Fax Management System",
    blurb: "Cloud fax for healthcare-grade workflows, built on the Telnyx API.",
    description:
      "Built a fax management system integrating the Telnyx programmable fax API, with secure webhook handling, delivery tracking, and a clean operator dashboard for sending and monitoring faxes.",
    stack: ["Next.js", "Node.js", "Telnyx API", "Webhooks", "TypeScript"],
    highlights: [
      "Telnyx programmable-fax integration with delivery status tracking",
      "Signed, verified webhook handling for inbound events",
      "Operator dashboard for send/receive and audit history",
    ],
    year: "2024",
    featured: true,
  },
  {
    title: "ChatGPT Sentiment Analysis",
    blurb: "Mapping global sentiment toward ChatGPT across 250k tweets.",
    description:
      "Data science project analyzing global sentiment from ~250,000 ChatGPT-related tweets — exploring public perception, network dynamics, and how opinion clusters formed across social media.",
    stack: ["Python", "Pandas", "NLP", "scikit-learn", "Data Viz"],
    highlights: [
      "Processed and cleaned ~250k tweets for analysis",
      "Sentiment classification and topic clustering",
      "Network analysis of how opinions propagated",
    ],
    year: "2023",
    featured: true,
  },
];
