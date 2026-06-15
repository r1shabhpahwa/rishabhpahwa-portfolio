import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-accent text-white shadow-lg shadow-accent-1/20 hover:shadow-xl hover:shadow-accent-2/30 hover:-translate-y-0.5",
  secondary:
    "border border-border bg-card text-foreground hover:bg-card-hover hover:-translate-y-0.5",
  ghost: "text-muted hover:text-foreground",
};

export function Button({
  href,
  variant = "primary",
  className,
  children,
  external,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      className={cn(base, variants[variant], className)}
      {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
      {...props}
    >
      {children}
    </a>
  );
}
