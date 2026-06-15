import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-xl flex-col items-center justify-center px-6 text-center">
      <span className="font-display text-7xl font-bold text-gradient">404</span>
      <h1 className="mt-4 font-display text-2xl font-bold tracking-tight">Page not found</h1>
      <p className="mt-3 text-muted">
        The page you&rsquo;re looking for doesn&rsquo;t exist or has moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-full bg-gradient-accent px-6 py-3 text-sm font-medium text-white"
      >
        Back home
      </Link>
    </section>
  );
}
