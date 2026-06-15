import type { MDXComponents } from "mdx/types";

// Styling for MDX-rendered blog content (no Tailwind Typography dependency).
export const mdxComponents: MDXComponents = {
  h2: (props) => (
    <h2 className="mt-12 mb-4 font-display text-2xl font-bold tracking-tight" {...props} />
  ),
  h3: (props) => (
    <h3 className="mt-8 mb-3 font-display text-xl font-semibold tracking-tight" {...props} />
  ),
  p: (props) => <p className="my-5 leading-relaxed text-muted" {...props} />,
  a: (props) => (
    <a
      className="font-medium text-foreground underline decoration-accent-2/50 underline-offset-4 transition-colors hover:decoration-accent-2"
      {...props}
    />
  ),
  ul: (props) => <ul className="my-5 list-disc space-y-2 pl-5 text-muted" {...props} />,
  ol: (props) => <ol className="my-5 list-decimal space-y-2 pl-5 text-muted" {...props} />,
  li: (props) => <li className="leading-relaxed" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="my-6 border-l-2 border-accent-2 pl-5 italic text-foreground/90"
      {...props}
    />
  ),
  code: (props) => (
    <code
      className="rounded-md border border-border bg-card px-1.5 py-0.5 font-mono text-[0.85em] text-foreground"
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className="my-6 overflow-x-auto rounded-2xl border border-border bg-card p-5 font-mono text-sm [&_code]:border-0 [&_code]:bg-transparent [&_code]:p-0"
      {...props}
    />
  ),
  hr: (props) => <hr className="my-10 border-border" {...props} />,
  strong: (props) => <strong className="font-semibold text-foreground" {...props} />,
};
