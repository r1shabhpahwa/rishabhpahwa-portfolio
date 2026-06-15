// Central site config. Edit these values to update the site everywhere.

export const site = {
  name: "Rishabh Pahwa",
  role: "Software Developer",
  // Short, punchy hero tagline.
  tagline: "I build scalable full-stack systems and make complex things feel simple.",
  // Slightly longer about-me blurb.
  bio: "Software developer based in Vancouver with 5+ years building full-stack and backend systems. I'm currently at Uniserve, where I architected a multi-tenant managed-services platform end-to-end — from secure authentication (MFA, OAuth2, RBAC) to React/Next.js dashboards and Node.js/Express APIs. Earlier I built microservices and payment integrations at Sopra Steria and Ericsson. Master's in Applied Computing from the University of Windsor.",
  location: "Vancouver, Canada",
  email: "rishabhpahwa@gmail.com",
  resume: "/resume.pdf",
  url: "https://rishabhpahwa.com",
  socials: {
    github: "https://github.com/r1shabhpahwa",
    linkedin: "https://www.linkedin.com/in/rishabh-pahwa",
  },
} as const;

export type Site = typeof site;
