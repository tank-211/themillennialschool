import { school } from "../content/school";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { BtnLink } from "@/components/site/Button";
import { Icon } from "@/components/site/Icon";

import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ExternalLink,
  Laptop,
  Smartphone,
  Sparkles,
  Users,
} from "lucide-react";

const APPROACH = [
  "Conceptual understanding over rote learning",
  "Experiential and activity-based classrooms",
  "Critical thinking, communication and creativity",
  "Practical application of ideas in daily life",
  "Regular formative feedback for every child",
  "Art, music, sport and values woven into the week",
];

export default function AcademicsPage() {
  return (
    <>
      <PageHero eyebrow="Academics" title="A strong NEP-aligned foundation, taught with care." subtitle="From Playgroup to Grade 10, our State Board curriculum is structured, age-appropriate and focused on real understanding." />
      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader eyebrow="Academic stages" title="A strong NEP-aligned learning journey, one stage at a time." subtitle="Each stage is thoughtfully designed according to the National Education Policy (NEP), ensuring age-appropriate learning, creativity, foundational skills and overall development." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {school.stages.map((s) => (
              <div key={s.title} className="soft-card-hover p-6">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary mb-4"><Icon name={s.icon} className="h-5 w-5" /></span>
                <h3 className="font-display text-lg font-semibold">{s.title}</h3>
                <div className="text-xs font-semibold text-primary mt-0.5">{s.grades}</div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-pad bg-secondary/40">
        <div className="mx-auto max-w-5xl px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="chip-soft mb-4">Our approach</span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">Teaching that respects how children actually learn.</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">We follow a State Board curriculum aligned with the National Education Policy (NEP), focusing on conceptual understanding, experiential learning, critical thinking, communication, creativity and practical application.</p>
          </div>
          <ul className="grid gap-3">
            {APPROACH.map((t) => (
              <li key={t} className="flex items-start gap-3 soft-card p-4 bg-card">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" /> <span className="text-sm">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      {/* ONE LEARN — part of the academic ecosystem */}
      <section className="section-pad bg-gradient-to-br from-primary/5 via-background to-sun/10">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader
            eyebrow="Digital Learning · Part of our Academics"
            title="One Learn — Our Digital Learning Platform."
            subtitle="An integral part of the classroom experience — One Learn extends teaching, homework and communication from the school to every home."
          />
          <div className="grid lg:grid-cols-5 gap-10 items-center">
            <div className="lg:col-span-3">
              <p className="text-muted-foreground leading-relaxed">
                One Learn supports our students and parents through both a mobile application and a website, so learning continues seamlessly wherever your child is.
              </p>
              <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm">
                {[
                  "Digital textbooks",
                  "Lessons & poems",
                  "Exercises",
                  "Homework",
                  "Attendance",
                  "Teacher updates",
                  "Parent communication",
                  "Mobile app & website",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2 soft-card p-3 bg-card">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="https://www.onelern.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
                >
                  Learn More <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="relative">
                <div aria-hidden className="absolute -inset-6 -z-10 rounded-[2rem] bg-primary/10 blur-2xl" />
                <div className="rounded-3xl border border-border bg-card p-8 shadow-lg">
                  <div className="flex items-center gap-4">
                    <span className="grid h-14 w-14 place-items-center rounded-2xl bg-primary text-primary-foreground">
                      <Smartphone className="h-6 w-6" />
                    </span>
                    <span className="grid h-14 w-14 place-items-center rounded-2xl bg-sun/40 text-sun-foreground">
                      <Laptop className="h-6 w-6" />
                    </span>
                  </div>
                  <div className="mt-5 font-display text-xl font-semibold">One Learn</div>
                  <div className="text-sm text-muted-foreground mt-1">Mobile app & website for students, parents and teachers.</div>
                  <div className="mt-6 grid grid-cols-3 gap-3 text-center text-xs text-muted-foreground">
                    <div className="soft-card p-3">
                      <BookOpen className="h-4 w-4 mx-auto text-primary mb-1" /> Study
                    </div>
                    <div className="soft-card p-3">
                      <Users className="h-4 w-4 mx-auto text-primary mb-1" /> Connect
                    </div>
                    <div className="soft-card p-3">
                      <Sparkles className="h-4 w-4 mx-auto text-primary mb-1" /> Learn
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-pad">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">Curious about the curriculum?</h2>
          <p className="mt-4 text-muted-foreground">Talk to our team for a detailed walkthrough of subjects, schedules and assessment.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <BtnLink to="/admissions" variant="apply" size="lg">Apply Now <ArrowRight className="h-4 w-4" /></BtnLink>
            <BtnLink to="/contact" variant="outline" size="lg">Ask a Question</BtnLink>
          </div>
        </div>
      </section>
    </>
  );
}