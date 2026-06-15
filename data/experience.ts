export type Experience = {
  role: string;
  company: string;
  location?: string;
  period: string;
  summary?: string;
  bullets: string[];
  current?: boolean;
};

export const experience: Experience[] = [
  {
    role: "Software Developer",
    company: "Uniserve Communications",
    location: "Vancouver, BC",
    period: "Apr 2025 — Present",
    summary: "Full-stack development on the managed-services platform.",
    bullets: [
      "Architected and deployed a multi-tenant managed-services platform for MSP operations, with session-based auth, MFA (TOTP), OAuth2, and granular RBAC across service modules.",
      "Shipped the fax management module — Telnyx API integration, multi-layered webhook security (Ed25519 signatures, IP allowlisting), automated notifications, and tenant-isolated media storage.",
      "Built the full stack: responsive Next.js dashboards and admin panels backed by Node.js/Express APIs with a centralized, typed API client (CSRF protection, retry logic).",
      "Integrated ConnectWise CRM for ticket, billing, and workflow sync; containerized with Docker and GitLab CI/CD, with structured logging via Fluent Bit, Elasticsearch, and Kibana.",
    ],
    current: true,
  },
  {
    role: "Software Developer (Co-op)",
    company: "Ericsson",
    location: "Ottawa, ON",
    period: "Sept 2023 — May 2024",
    summary: "Network trace tooling and developer platforms.",
    bullets: [
      "Built a network trace-sharing platform with React and Node.js/Express, centralizing trace data and enabling posting, commenting, voting, and saving.",
      "Contributed to a Java visualization tool on Eclipse Trace Compass, optimizing algorithms for a 20% performance gain on large datasets.",
      "Added unit-testing frameworks (−15% post-deploy bugs) and automated helpdesk ticket analysis with web scraping and NLP for weekly insight reports.",
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "Sopra Steria",
    location: "New Delhi, India",
    period: "Jan 2019 — Aug 2022",
    summary: "Backend microservices for a SaaS platform.",
    bullets: [
      "Built SaaS payment-processor integrations and microservices deployed on Google Kubernetes Engine, with event-driven processing via Pub/Sub.",
      "Designed RESTful APIs using the Backend-for-Frontend pattern and hardened security with OAuth2, ReCAPTCHA, and HMAC.",
      "Optimized SQL queries and indexing for a 20% reduction in execution time; led incident resolution and mentored junior engineers.",
    ],
  },
  {
    role: "Master's, Applied Computing",
    company: "University of Windsor",
    location: "Windsor, ON",
    period: "Sept 2022 — Jun 2024",
    bullets: [],
  },
  {
    role: "Bachelor's, Computer Science & Engineering",
    company: "GGSIPU",
    location: "New Delhi, India",
    period: "Aug 2015 — May 2019",
    bullets: [],
  },
];
