import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-secondary/60 via-background to-background"
      />
      <div
        aria-hidden
        className="absolute -top-24 -right-16 -z-10 h-72 w-72 rounded-full bg-sky/40 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-24 -left-16 -z-10 h-72 w-72 rounded-full bg-sun/30 blur-3xl"
      />
      <div className="mx-auto max-w-5xl px-6 pt-16 md:pt-24 pb-12 md:pb-16 text-center">
        {eyebrow ? <span className="chip-soft mb-5 inline-flex">{eyebrow}</span> : null}
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            {subtitle}
          </p>
        ) : null}
        {children ? <div className="mt-7 flex flex-wrap justify-center gap-3">{children}</div> : null}
      </div>
    </section>
  );
}