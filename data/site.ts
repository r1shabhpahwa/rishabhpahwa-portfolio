// Central site config. Edit these values to update the site everywhere.
// TODO(rishabh): confirm email + social handles below.

export const site = {
  name: "Rishabh Pahwa",
  role: "Software Development Engineer",
  // Short, punchy hero tagline.
  tagline: "I build scalable full-stack systems and make complex things feel simple.",
  // Slightly longer about-me blurb.
  bio: "Software engineer based in Vancouver with 4+ years building scalable web applications. I work end-to-end — from React/Next.js front ends to Node.js and Spring Boot services and cloud infrastructure — with a focus on clean architecture, security, and developer experience. Master's from the University of Windsor.",
  location: "Vancouver, Canada",
  email: "hello@rishabhpahwa.com",
  resume: "/resume.pdf",
  url: "https://rishabhpahwa.com",
  socials: {
    github: "https://github.com/rishabhpahwa",
    linkedin: "https://www.linkedin.com/in/rishabhpahwa19/",
    x: "https://x.com/",
  },
} as const;

export type Site = typeof site;
