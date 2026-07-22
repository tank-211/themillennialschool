import { school } from "@/content/school";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { FileText, Phone, MessageCircle } from "lucide-react";


const DOCS = [
  "Birth Certificate of the Child",
  "Student passport-size photographs (4 copies)",
  "Parent passport-size photographs (1 copy each)",
  "Previous school marksheet",
  "Child's Aadhaar card",
  "Mother's & Father's Aadhaar card",
  "Father's PAN card (required for Saral Portal)",
  "Residential proof",
  "Leaving Certificate (required from Class 2 onwards)",
  "Migration Certificate (if the student has studied in another state)",
];

export default function AdmissionsPage() {
  return (
    <>
      <PageHero eyebrow="Admissions 2026–27" title="Begin your child's journey with us." subtitle="A simple, transparent process — designed to be reassuring for parents and gentle for children." />
      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader eyebrow="How it works" title="Six clear steps." subtitle="From the first enquiry to the welcome — here's exactly what to expect." />
          <ol className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {school.admissionSteps.map((step, i) => (
              <li key={step.title} className="soft-card-hover p-6">
                <div className="text-xs font-bold tracking-widest text-primary">STEP {String(i + 1).padStart(2, "0")}</div>
                <h3 className="mt-2 font-display text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="section-pad bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <span className="chip-soft mb-4">Documents Required for Admission</span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">Keep these ready for the form.</h2>
            <p className="mt-4 text-muted-foreground">Originals will be verified at the school office during your visit.</p>
            <ul className="mt-6 space-y-3">
              {DOCS.map((d) => (
                <li key={d} className="flex items-start gap-3 soft-card p-4 bg-card">
                  <FileText className="h-5 w-5 text-primary shrink-0 mt-0.5" /> <span className="text-sm">{d}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 soft-card p-5 bg-card">
              <div className="text-xs uppercase tracking-widest font-semibold text-primary mb-2">For more information, kindly contact</div>
              <div className="flex flex-wrap gap-4 text-sm font-semibold">
                <a href={`tel:${school.admissionPhone}`} className="inline-flex items-center gap-2 hover:text-primary">
                  <Phone className="h-4 w-4 text-primary" /> {school.admissionPhone}
                </a>
                <a href={`tel:${school.admissionPhoneAlt}`} className="inline-flex items-center gap-2 hover:text-primary">
                  <Phone className="h-4 w-4 text-primary" /> {school.admissionPhoneAlt}
                </a>
              </div>
            </div>
          </div>
          <div id="enquire">
            <EnquiryForm />
            <div className="mt-5 grid sm:grid-cols-2 gap-3">
              <a href={`tel:${school.admissionPhone}`} className="soft-card p-4 flex items-center gap-3 bg-card hover:border-primary/30 transition-colors">
                <Phone className="h-5 w-5 text-primary" />
                <div><div className="text-xs text-muted-foreground">Call us</div><div className="font-semibold text-sm">{school.admissionPhone}</div></div>
              </a>
              <a href={`https://wa.me/${school.whatsapp}`} target="_blank" rel="noopener noreferrer" className="soft-card p-4 flex items-center gap-3 bg-card hover:border-primary/30 transition-colors">
                <MessageCircle className="h-5 w-5 text-primary" />
                <div><div className="text-xs text-muted-foreground">WhatsApp</div><div className="font-semibold text-sm">Quick reply</div></div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}