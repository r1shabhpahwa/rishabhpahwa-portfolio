import { ArrowUp } from "lucide-react";
import { SocialLinks } from "@/components/ui/social-links";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 py-12 sm:flex-row sm:justify-between">
        <div className="text-center sm:text-left">
          <a href="/" className="font-display text-lg font-bold">
            {site.name}
          </a>
          <p className="mt-1 text-sm text-muted">{site.role} · {site.location}</p>
        </div>

        <SocialLinks />
      </div>

      <div className="mx-auto flex max-w-5xl items-center justify-between border-t border-border px-6 py-5 text-xs text-muted">
        <span>
          © {new Date().getFullYear()} {site.name}. Built with Next.js.
        </span>
        <a href="#top" className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground">
          Back to top <ArrowUp className="h-3.5 w-3.5" />
        </a>
      </div>
    </footer>
  );
}
