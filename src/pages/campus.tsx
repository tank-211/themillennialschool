import { school } from "@/content/school";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { BtnLink } from "@/components/site/Button";
import { Icon } from "@/components/site/Icon";
import { ArrowRight } from "lucide-react";
import { photos } from "@/content/photos";

export default function CampusPage() {
  return (
    <>
      <PageHero eyebrow="Campus & Facilities" title="A calm, well-equipped place to learn." subtitle="Our campus is designed to feel safe and welcoming — with the right spaces for every part of a child's day." />
      <section className="pt-2 pb-6">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-3 gap-4">
          {[
            { src: photos.hero, alt: "School building with playground and basketball court" },
            //{ src: photos.smartClassroom, alt: "Smart classroom with mounted display" },
            { src: photos.library, alt: "School library with well-stocked shelves" },
            { src: photos.computerLab, alt: "Computer lab with student workstations" },
            { src: photos.corridorStairs, alt: "Rainbow staircase with inspirational quotes" },
            { src: photos.cctvMonitoring, alt: "CCTV monitoring for campus-wide safety" },
            { src: photos.scienceLab, alt: "Science lab with glassware and periodic table" },
            { src: photos.chemistryLab, alt: "Chemistry lab shelves stocked with reagents and glassware" },
            { src: photos.biologyLab, alt: "Biology lab with anatomical models and specimens" },
          ].map((img) => (
            <figure key={img.src} className="overflow-hidden rounded-2xl border border-border">
              <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-56 md:h-64 object-cover transition-transform duration-500 hover:scale-105" />
            </figure>
          ))}
        </div>
      </section>
      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader eyebrow="What's on campus" title="Spaces that support every kind of learning." subtitle="From quiet reading corners to active play areas — each space is thoughtfully maintained." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {school.facilities.map((f) => (
              <div key={f.name} className="soft-card-hover p-6">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary mb-4"><Icon name={f.icon} className="h-5 w-5" /></span>
                <h3 className="font-display text-lg font-semibold">{f.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-pad bg-secondary/40">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">See it in person.</h2>
          <p className="mt-4 text-muted-foreground">Schedule a guided campus walk-through at a time that suits you.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <BtnLink to="/contact" variant="apply" size="lg">Schedule a Visit <ArrowRight className="h-4 w-4" /></BtnLink>
            <BtnLink to="/gallery" variant="outline" size="lg">View Gallery</BtnLink>
          </div>
        </div>
      </section>
    </>
  );
}