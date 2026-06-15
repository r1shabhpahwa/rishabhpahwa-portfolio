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

// Placeholder cards: the managed-services platform and fax module are flagship Uniserve
// work; ChatGPT Sentiment is a personal/academic project. Swap in more personal projects
// here as you build them out.
export const projects: Project[] = [
  {
    title: "Multi-Tenant Managed-Services Platform",
    blurb: "A secure, multi-tenant platform powering MSP operations at scale.",
    description:
      "Architected and deployed a multi-tenant managed-services platform for MSP operations, with hardened authentication, granular access control, and modular services across diverse customer environments.",
    stack: ["Next.js", "React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Prisma"],
    highlights: [
      "Session-based auth with MFA (TOTP), OAuth2, and granular RBAC",
      "ConnectWise CRM sync for tickets, billing, and workflows",
      "Containerized with Docker and automated GitLab CI/CD",
    ],
    year: "2025",
    featured: true,
  },
  {
    title: "Fax Management System",
    blurb: "Cloud fax with hardened webhook security, built on the Telnyx API.",
    description:
      "Designed and shipped the fax management module — end-to-end processing pipelines with Telnyx API integration, layered webhook security, automated email notifications, and tenant-isolated media storage.",
    stack: ["Next.js", "Node.js", "Express", "Telnyx API", "PostgreSQL"],
    highlights: [
      "Telnyx programmable-fax integration with delivery tracking",
      "Ed25519-signed webhooks with IP allowlisting",
      "Tenant-isolated media storage and automated notifications",
    ],
    year: "2025",
    featured: true,
  },
  {
    title: "ChatGPT Sentiment Analysis",
    blurb: "Mapping global sentiment toward ChatGPT across 250k tweets.",
    description:
      "Personal data-science project analyzing global sentiment from ~250,000 ChatGPT-related tweets — exploring public perception, network dynamics, and how opinion clusters formed across social media.",
    stack: ["Python", "Pandas", "NLP", "scikit-learn", "Data Viz"],
    highlights: [
      "Processed and cleaned ~250k tweets for analysis",
      "Sentiment classification and topic clustering",
      "Network analysis of how opinions propagated",
    ],
    year: "2024",
    featured: true,
  },
];
