import { school } from "@/content/school";
import { PageHero } from "@/components/site/PageHero";
import { BtnLink } from "@/components/site/Button";
import { Users, Quote, ArrowRight } from "lucide-react";
import vpPhoto from "@/assets/leadership/alka-amrutkar.jpeg";
import principalPhoto from "@/assets/leadership/shraddha-arbooj.png";
import bananiSahoo from "@/assets/faculty/banani-sahoo.png";
import deepaliBhatiwali from "@/assets/faculty/deepali-bhatiwali.png";
import gayatriKoli from "@/assets/faculty/gayatri-koli.png";
import lalitaPatil from "@/assets/faculty/lalita-patil.jpeg";
import momitaBiswas from "@/assets/faculty/momita-biswas.png";
import rupaliNarkhede from "@/assets/faculty/rupali-narkhede.png";
import sarikaRashinkar from "@/assets/faculty/sarika-rashinkar.jpeg";
import sarikaSangale from "@/assets/faculty/sarika-sangale.png";
import seemaDeotale from "@/assets/faculty/seema-deotale.png";
import sijiMurli from "@/assets/faculty/siji-murli.png";
import sonikaSharma from "@/assets/faculty/sonika-sharma.png";

const TEACHERS: { name: string; photo: string }[] = [
  { name: "Banani Sahoo", photo: bananiSahoo  },
  { name: "Deepali Bhatiwali", photo: deepaliBhatiwali },
  { name: "Gayatri Koli", photo: gayatriKoli },
  { name: "Lalita Patil", photo: lalitaPatil },
  { name: "Momita Biswas", photo: momitaBiswas },
  { name: "Rupali Narkhede", photo: rupaliNarkhede },
  { name: "Sarika Rashinkar", photo: sarikaRashinkar },
  { name: "Sarika Sangale", photo: sarikaSangale },
  { name: "Seema Deotale", photo: seemaDeotale },
  { name: "Siji Murli", photo: sijiMurli },
  { name: "Sonika Sharma", photo: sonikaSharma },
];

export default function FacultyPage() {
  const leaders = [
    {
      name: school.principal.name,
      role: school.principal.title,
      message: school.principal.message,
      accent: "from-primary/20 to-sky/40",
      photo: principalPhoto,
    },
    {
      name: school.vicePrincipal.name,
      role: school.vicePrincipal.title,
      message: school.vicePrincipal.message,
      accent: "from-sun/40 to-tangerine/20",
      photo: vpPhoto,
    },
  ];
  return (
    <>
      <PageHero eyebrow="Faculty" title="Teachers who know your child." subtitle="A caring, experienced team that watches how each child learns and supports them through every stage." />
      <section className="section-pad">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-10">
            <span className="chip-soft">Leadership Team</span>
            <h2 className="mt-4 font-display text-3xl md:text-4xl font-semibold tracking-tight">
              Guiding our school with care and clarity.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {leaders.map((l) => (
              <article key={l.name} className="soft-card-hover p-8 relative overflow-hidden">
                <div aria-hidden className={`absolute -top-16 -right-16 h-48 w-48 rounded-full bg-gradient-to-br ${l.accent} blur-2xl opacity-70`} />
                <div className="relative flex items-start gap-5">
                  {l.photo ? (
                    <img
                      src={l.photo}
                      alt={`${l.name}, ${l.role}`}
                      loading="lazy"
                      className="h-24 w-24 shrink-0 rounded-2xl object-cover border border-border shadow-sm"
                    />
                  ) : (
                    <div className={`h-24 w-24 shrink-0 rounded-2xl bg-gradient-to-br ${l.accent} grid place-items-center font-display text-2xl font-bold text-primary border border-border shadow-sm`}>
                      {l.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                    </div>
                  )}
                  <div className="min-w-0">
                    <h3 className="font-display text-xl font-semibold">{l.name}</h3>
                    <div className="text-sm font-medium text-primary">{l.role}</div>
                    {!l.photo && (
                      <div className="mt-1 text-xs text-muted-foreground italic">Photograph coming soon</div>
                    )}
                  </div>
                </div>
                <div className="relative mt-6 pl-4 border-l-2 border-primary/30">
                  <Quote className="h-4 w-4 text-primary/60 mb-2" />
                  <div className="text-xs uppercase tracking-widest font-semibold text-primary/80 mb-2">{l.role}'s Message</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{l.message}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-20">
            <div className="text-center mb-10">
              <span className="chip-soft">Our Teachers</span>
              <h2 className="mt-4 font-display text-3xl md:text-4xl font-semibold tracking-tight">
                Meet our teaching team.
              </h2>
              <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
                Dedicated educators who bring warmth, care and expertise to every classroom.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
              {TEACHERS.map((t) => (
                <article
                  key={t.name}
                  className="soft-card-hover p-5 text-center transition-transform hover:-translate-y-1"
                >
                  <div className="relative mx-auto mb-4 w-32 h-32 md:w-36 md:h-36">
                    <div aria-hidden className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary/20 to-sun/30 blur-md opacity-70" />
                    <img
                      src={t.photo}
                      alt={`${t.name}, Asst. Teacher`}
                      loading="lazy"
                      className="relative h-full w-full rounded-full object-cover object-top border-2 border-primary/20 shadow-md"
                    />
                  </div>
                  <h3 className="font-display text-base md:text-lg font-semibold text-foreground">
                    {t.name}
                  </h3>
                  <div className="mt-1 text-xs text-muted-foreground">Asst. Teacher</div>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-16 soft-card p-10 text-center bg-secondary/40">
            <Users className="h-10 w-10 text-primary mx-auto" />
            <h3 className="mt-4 font-display text-2xl font-semibold">Our teaching team</h3>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">More teacher profiles will be added as photographs and details arrive. You're welcome to meet our full team during a campus visit.</p>
            <div className="mt-6">
              <BtnLink to="/contact" variant="primary">Schedule a Visit <ArrowRight className="h-4 w-4" /></BtnLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}