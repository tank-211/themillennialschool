import { school } from "@/content/school";
import { PageHero } from "@/components/site/PageHero";
import { Trophy } from "lucide-react";

export default function AchievementsPage() {
  const hasItems = school.achievements.length > 0;
  return (
    <>
      <PageHero eyebrow="Achievements" title="Celebrating our students." subtitle="A growing record of the things our children are proud of — academic, creative and on the field." />
      <section className="section-pad">
        <div className="mx-auto max-w-5xl px-6">
          {hasItems ? (
            <ul className="grid gap-5">
              {school.achievements.map((a) => (
                <li key={a.title} className="soft-card-hover p-6 flex gap-5">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-sun/40 text-sun-foreground"><Trophy className="h-5 w-5" /></span>
                  <div>
                    <div className="text-xs text-muted-foreground">{a.date}</div>
                    <h3 className="font-display text-lg font-semibold">{a.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{a.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="soft-card p-10 text-center bg-secondary/40 max-w-2xl mx-auto">
              <Trophy className="h-10 w-10 text-primary mx-auto" />
              <h3 className="mt-4 font-display text-2xl font-semibold">Achievements being compiled</h3>
              <p className="mt-3 text-muted-foreground">We are putting together a verified list of student and school achievements. Check back soon.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}