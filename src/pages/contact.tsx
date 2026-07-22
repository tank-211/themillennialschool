import { school } from "@/content/school";
import { PageHero } from "@/components/site/PageHero";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { MapPin, Phone, Clock, Mail, ExternalLink } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="We'd love to hear from you." subtitle="Reach out for admissions, campus visits or any school-related queries — our team responds the same working day." />
      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-4">
            <InfoCard icon={<MapPin />} title="Visit Us" body={school.address} action={{ label: "Get directions", href: school.mapsDirectionsUrl }} />
            <InfoCard icon={<Phone />} title="Call Us" body={school.admissionPhone} action={{ label: "Tap to call", href: `tel:${school.admissionPhone}` }} />
            <InfoCard icon={<Clock />} title="Office Hours" body={school.hours} />
            {school.email ? <InfoCard icon={<Mail />} title="Email" body={school.email} action={{ label: "Send email", href: `mailto:${school.email}` }} /> : null}
          </div>
          <div className="lg:col-span-2">
            <EnquiryForm />
          </div>
        </div>
      </section>
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-3xl overflow-hidden border border-border shadow-sm">
            <iframe src={school.mapsEmbedUrl} title="School location on Google Maps" className="w-full h-[420px]" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </section>
    </>
  );
}

function InfoCard({ icon, title, body, action }: { icon: React.ReactNode; title: string; body: string; action?: { label: string; href: string } }) {
  return (
    <div className="soft-card-hover p-6">
      <span className="grid h-11 w-11 place-items-center rounded-2xl bg-primary/10 text-primary mb-3">{icon}</span>
      <h3 className="font-display text-lg font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{body}</p>
      {action ? (
        <a href={action.href} target={action.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">
          {action.label} <ExternalLink className="h-3.5 w-3.5" />
        </a>
      ) : null}
    </div>
  );
}