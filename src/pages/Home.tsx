import {
  ArrowRight, ShieldCheck, GraduationCap, Sparkles, Users, MapPin, Phone,
  CheckCircle2, HeartHandshake, Calendar,
  Quote,
} from "lucide-react";
import { school } from "@/content/school";
import { BtnLink } from "@/components/site/Button";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Icon } from "@/components/site/Icon";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { photos } from "@/content/photos";
import vpPhoto from "@/assets/leadership/alka-amrutkar.jpeg";
import principalPhoto from "@/assets/leadership/shraddha-arbooj.png";

export default function Home() {
  const leaders = [
    {
      name: school.principal.name,
      role: school.principal.title,
      message: school.principal.message,
      photo: principalPhoto,
      accent: "from-primary/20 to-sky/40",
    },
    {
      name: school.vicePrincipal.name,
      role: school.vicePrincipal.title,
      message: school.vicePrincipal.message,
      photo: vpPhoto,
      accent: "from-sun/40 to-tangerine/20",
    },
  ];
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-b from-secondary/70 via-background to-background" />
        <div aria-hidden className="absolute -top-32 -left-24 -z-10 h-96 w-96 rounded-full bg-sky/40 blur-3xl" />
        <div aria-hidden className="absolute -bottom-32 -right-24 -z-10 h-96 w-96 rounded-full bg-sun/30 blur-3xl" />
        <div className="mx-auto max-w-7xl px-6 pt-12 md:pt-20 pb-16 md:pb-24 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <span className="chip">
              <Sparkles className="h-3.5 w-3.5" /> Affiliated to State Board · NEP Aligned Curriculum
            </span>
            <h1 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-[1.05]">
              A warm, NEP-aligned school in the heart of <span className="text-primary">Nashik</span>.
            </h1>
            <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
              From Playgroup to Grade 10, we nurture every child with an NEP-aligned State Board curriculum, caring teachers and a safe, joyful campus — so they grow with confidence, curiosity and kindness.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <BtnLink to="/admissions" variant="apply" size="lg">
                Apply for Admission <ArrowRight className="h-4 w-4" />
              </BtnLink>
              <BtnLink to="/campus" variant="outline" size="lg">
                Take a Campus Tour
              </BtnLink>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" /> State Board</span>
              <span className="inline-flex items-center gap-2"><Sparkles className="h-4 w-4 text-primary" /> NEP Aligned Curriculum</span>
              <span className="inline-flex items-center gap-2"><GraduationCap className="h-4 w-4 text-primary" /> Playgroup to Grade 10</span>
              <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> Nashik, Maharashtra</span>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-[2rem] border border-border shadow-xl shadow-primary/5">
              <img
                src={photos.hero}
                alt="The Millennial School campus with playground and basketball court"
                className="h-[420px] md:h-[520px] w-full object-cover"
                loading="eager"
              />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent" />
            </div>
            <div className="hidden md:flex absolute -left-6 bottom-10 soft-card p-4 gap-3 items-center bg-card">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-primary/10 text-primary">
                <Users className="h-5 w-5" />
              </span>
              <div className="leading-tight">
                <div className="text-xs text-muted-foreground">Caring teachers</div>
                <div className="text-sm font-semibold">Small, focused classes</div>
              </div>
            </div>
            <div className="hidden md:flex absolute -right-4 top-10 soft-card p-4 gap-3 items-center bg-card">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-sun/40 text-sun-foreground">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <div className="leading-tight">
                <div className="text-xs text-muted-foreground">Campus</div>
                <div className="text-sm font-semibold">Safe & CCTV monitored</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            eyebrow="Why parents choose us"
            title="A school built around your child."
            subtitle="Everything we do is designed to help children feel safe, seen and ready to learn."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {school.whyChooseUs.map((item) => (
              <div key={item.title} className="soft-card-hover p-6">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary mb-4">
                  <Icon name={item.icon} className="h-5 w-5" />
                </span>
                <h3 className="font-display text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACADEMIC STAGES */}
      <section className="section-pad bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            eyebrow="Academics"
            title="A strong NEP-aligned learning journey, one stage at a time."
            subtitle="Each stage is thoughtfully designed according to the National Education Policy (NEP), ensuring age-appropriate learning, creativity, foundational skills and overall development."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {school.stages.map((stage) => (
              <div key={stage.title} className="soft-card-hover p-6 bg-card">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-sun/40 text-sun-foreground mb-4">
                  <Icon name={stage.icon} className="h-5 w-5" />
                </span>
                <h3 className="font-display text-lg font-semibold">{stage.title}</h3>
                <div className="text-xs font-semibold text-primary mt-0.5">{stage.grades}</div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{stage.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <BtnLink to="/academics" variant="outline">
              Explore the curriculum <ArrowRight className="h-4 w-4" />
            </BtnLink>
          </div>
        </div>
      </section>

      {/* LEADERSHIP TEAM */}
      <section className="section-pad">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader
            eyebrow="Leadership Team"
            title="Guiding our school with care and clarity."
            subtitle="Meet the leaders who set the tone for every classroom, every day."
          />
          <div className="grid md:grid-cols-2 gap-6">
            {leaders.map((l) => (
              <article
                key={l.name}
                className="soft-card-hover p-6 md:p-8 relative overflow-hidden transition-transform hover:-translate-y-1"
              >
                <div aria-hidden className={`absolute -top-16 -right-16 h-48 w-48 rounded-full bg-gradient-to-br ${l.accent} blur-2xl opacity-70`} />
                <div className="relative flex items-center gap-5">
                  <img
                    src={l.photo}
                    alt={`${l.name}, ${l.role}`}
                    loading="lazy"
                    className="h-24 w-24 md:h-28 md:w-28 shrink-0 rounded-full object-cover object-top border-2 border-primary/20 shadow-md"
                  />
                  <div className="min-w-0">
                    <h3 className="font-display text-xl md:text-2xl font-semibold truncate">{l.name}</h3>
                    <div className="text-sm font-semibold text-primary">{l.role}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{school.shortName}</div>
                  </div>
                </div>
                <div className="relative mt-6 pl-4 border-l-2 border-primary/30">
                  <Quote className="h-4 w-4 text-primary/60 mb-2" />
                  <div className="text-xs uppercase tracking-widest font-semibold text-primary/80 mb-2">{l.role}'s Message</div>
                  <p className="text-sm md:text-[15px] text-muted-foreground leading-relaxed">{l.message}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <BtnLink to="/faculty" variant="ghost">
              Meet the full team <ArrowRight className="h-4 w-4" />
            </BtnLink>
          </div>
        </div>
      </section>

      {/* UPCOMING EVENTS */}
      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            eyebrow="School Calendar"
            title="Upcoming Events."
            subtitle="A glimpse of what's coming up on the school calendar. Dates are confirmed closer to each event."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {school.events.map((e) => (
              <article key={e.title} className="soft-card-hover p-6 relative overflow-hidden">
                <div aria-hidden className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-primary/10 blur-2xl" />
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-primary/10 text-primary mb-4">
                  <Calendar className="h-5 w-5" />
                </span>
                <div className="text-xs font-semibold uppercase tracking-widest text-primary">{e.date}</div>
                <h3 className="mt-1.5 font-display text-lg font-semibold">{e.title}</h3>
                <div className="text-xs text-muted-foreground mt-1 flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5" /> {e.location}
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{e.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FACILITIES TEASER */}
      <section className="section-pad bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            eyebrow="Campus & Facilities"
            title="A calm, well-equipped campus."
            subtitle="Everything a growing child needs — to learn, play, create and feel safe."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {school.facilities.slice(0, 6).map((f) => (
              <div key={f.name} className="soft-card-hover p-6 bg-card">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary mb-4">
                  <Icon name={f.icon} className="h-5 w-5" />
                </span>
                <h3 className="font-display text-lg font-semibold">{f.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <BtnLink to="/campus" variant="outline">
              See all facilities <ArrowRight className="h-4 w-4" />
            </BtnLink>
          </div>
        </div>
      </section>

      {/* ADMISSION STEPS */}
      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            eyebrow="Admissions"
            title="A simple, parent-friendly process."
            subtitle="Six clear steps — from your first enquiry to welcoming your child to school."
          />
          <ol className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 counter-reset">
            {school.admissionSteps.map((step, i) => (
              <li key={step.title} className="soft-card p-6">
                <div className="text-xs font-bold tracking-widest text-primary">STEP {String(i + 1).padStart(2, "0")}</div>
                <h3 className="mt-2 font-display text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <BtnLink to="/admissions" variant="apply" size="lg">
              Start Admission Enquiry <ArrowRight className="h-4 w-4" />
            </BtnLink>
            <a
              href={`tel:${school.admissionPhone}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border font-semibold hover:bg-secondary"
            >
              <Phone className="h-4 w-4" /> {school.admissionPhone}
            </a>
          </div>
        </div>
      </section>

      {/* CTA + ENQUIRY */}
      <section className="section-pad bg-gradient-to-br from-primary to-[oklch(0.48_0.16_260)] text-primary-foreground">
        <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-widest">
              <HeartHandshake className="h-3.5 w-3.5" /> We'd love to meet you
            </span>
            <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
              Take the next step — visit our campus.
            </h2>
            <p className="mt-4 text-primary-foreground/80 leading-relaxed max-w-md">
              Walk through the classrooms, meet our teachers and see for yourself the warm, focused environment your child will be part of.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {["Same-day response to enquiries", "Personalised campus walk-through", "Honest, parent-friendly conversation"].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-sun" /> {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="text-foreground">
            <EnquiryForm compact />
          </div>
        </div>
      </section>
    </>
  );
}