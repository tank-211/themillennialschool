import { useState } from "react";
import { school } from "@/content/school";
import { PageHero } from "@/components/site/PageHero";
import { BtnLink } from "@/components/site/Button";
import { ChevronDown } from "lucide-react";

export default function FaqsPage() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <>
      <PageHero eyebrow="Frequently Asked Questions" title="Quick answers for parents." subtitle="Can't find what you're looking for? Call us — we're happy to help." />
      <section className="section-pad">
        <div className="mx-auto max-w-3xl px-6">
          <ul className="grid gap-3">
            {school.faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <li key={f.q} className="soft-card overflow-hidden">
                  <button type="button" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? null : i)} className="w-full flex items-center justify-between gap-4 text-left p-5 hover:bg-secondary/40">
                    <span className="font-semibold text-foreground">{f.q}</span>
                    <ChevronDown className={`h-5 w-5 text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isOpen ? <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{f.a}</div> : null}
                </li>
              );
            })}
          </ul>
          <div className="mt-10 text-center">
            <BtnLink to="/contact" variant="primary">Still have questions? Talk to us</BtnLink>
          </div>
        </div>
      </section>
    </>
  );
}