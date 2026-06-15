import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/brand-icons";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

const items = [
  { label: "GitHub", href: site.socials.github, Icon: GithubIcon, external: true },
  { label: "LinkedIn", href: site.socials.linkedin, Icon: LinkedinIcon, external: true },
  { label: "Email", href: `mailto:${site.email}`, Icon: Mail, external: false },
];

export function SocialLinks({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      {items.map(({ label, href, Icon, external }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
          className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-muted transition-all hover:-translate-y-0.5 hover:text-foreground hover:border-accent-2/50"
        >
          <Icon className="h-4 w-4" />
        </a>
      ))}
    </div>
  );
}
