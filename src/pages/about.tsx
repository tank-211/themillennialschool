import React from "react";
import { school } from "@/content/school";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { BtnLink } from "@/components/site/Button";
import { Compass, Target, Heart, ArrowRight } from "lucide-react";
import principalPhoto from "@/assets/leadership/shraddha-arbooj.png";


export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About the School"
        title="A school where children grow with confidence."
        subtitle="We are a State Board, NEP-aligned day school in Nashik, dedicated to giving every child a strong, joyful and value-driven start to their learning journey."
      />
      <section className="section-pad">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-3 gap-5">
          <Pillar icon={<Compass />} title="Our Vision" body={school.vision} />
          <Pillar icon={<Target />} title="Our Mission" body={school.mission} />
          <Pillar icon={<Heart />} title="Our Promise" body="To know every child by name, by need and by strength — and to grow with them through every stage of school." />
        </div>
      </section>
      <section className="section-pad bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-5 gap-10 items-center">
          <div className="md:col-span-2">
            <div className="overflow-hidden rounded-[2rem] border border-border w-full aspect-[4/5] shadow-lg">
              <img
                src={principalPhoto}
                alt={`${school.principal.name}, ${school.principal.title}`}
                loading="lazy"
                className="h-full w-full object-cover object-top"
              />
            </div>
          </div>
          <div className="md:col-span-3">
            <span className="chip-soft mb-4">Principal's Message</span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">Warm welcome from {school.principal.name}.</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed whitespace-pre-line">{school.principal.message}</p>
            <div className="mt-6">
              <div className="font-semibold">{school.principal.name}</div>
              <div className="text-sm text-muted-foreground">{school.principal.title}</div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-pad">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader eyebrow="Leadership" title="The people guiding our school." subtitle="A small, focused leadership team that knows our students and works closely with parents." />
          <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
            <LeaderCard name={school.principal.name} title={school.principal.title} />
            <LeaderCard name={school.vicePrincipal.name} title={school.vicePrincipal.title} />
          </div>
        </div>
      </section>
      <section className="section-pad bg-secondary/40">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">Come and see for yourself.</h2>
          <p className="mt-4 text-muted-foreground">Schedule a visit to walk through our campus and meet our team.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <BtnLink to="/admissions" variant="apply" size="lg">Apply Now <ArrowRight className="h-4 w-4" /></BtnLink>
            <BtnLink to="/contact" variant="outline" size="lg">Contact Us</BtnLink>
          </div>
        </div>
      </section>
    </>
  );
}

function Pillar({ icon, title, body }: { icon: React.ReactNode; title: string; body: string }) {
  return (
    <div className="soft-card-hover p-6 md:p-8">
      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary mb-4">{icon}</span>
      <h3 className="font-display text-xl font-semibold">{title}</h3>
      <p className="mt-3 text-muted-foreground leading-relaxed">{body}</p>
    </div>
  );
}

function LeaderCard({ name, title }: { name: string; title: string }) {
  return (
    <div className="soft-card-hover p-6 text-center">
      <div className="mx-auto h-20 w-20 rounded-full bg-gradient-to-br from-primary/20 to-sky/40 grid place-items-center font-display text-2xl font-bold text-primary">
        {name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
      </div>
      <h3 className="mt-4 font-display text-lg font-semibold">{name}</h3>
      <div className="text-sm text-muted-foreground">{title}</div>
    </div>
  );
}