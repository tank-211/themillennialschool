import { useMemo, useState, useEffect } from "react";
import { PageHero } from "@/components/site/PageHero";
import { BtnLink } from "@/components/site/Button";
import { Camera, X, ChevronLeft, ChevronRight, Calendar, MapPin } from "lucide-react";
import { gallery, type GalleryCategory } from "@/content/photos";
import { school } from "@/content/school";


const CATEGORIES: (GalleryCategory | "All")[] = ["All", "Campus", "Classrooms", "Library", "Computer Lab", "Activities", "Facilities"];

export default function GalleryPage() {
  const [active, setActive] = useState<(GalleryCategory | "All")>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = useMemo(
    () => (active === "All" ? gallery : gallery.filter((p) => p.category === active)),
    [active]
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((i) => (i === null ? i : (i + 1) % filtered.length));
      if (e.key === "ArrowLeft") setLightbox((i) => (i === null ? i : (i - 1 + filtered.length) % filtered.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, filtered.length]);

  return (
    <>
      <PageHero eyebrow="Gallery" title="Glimpses from our school." subtitle="A small selection of everyday moments — more photos will be added through the year." />
      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {CATEGORIES.map((c) => {
              const count = c === "All" ? gallery.length : gallery.filter((p) => p.category === c).length;
              const isActive = active === c;
              return (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className={
                    "px-4 py-2 rounded-full text-sm font-semibold border transition-all " +
                    (isActive
                      ? "bg-primary text-primary-foreground border-primary shadow-sm"
                      : "bg-card text-foreground border-border hover:bg-secondary")
                  }
                >
                  {c} <span className="opacity-60">· {count}</span>
                </button>
              );
            })}
          </div>

          {filtered.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {filtered.map((img, i) => (
                <button
                  key={img.src + i}
                  onClick={() => setLightbox(i)}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-secondary text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  aria-label={`Open photo: ${img.alt}`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full object-cover h-56 md:h-72 transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-3 left-3 right-3 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="text-xs uppercase tracking-widest font-semibold">{img.category}</div>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="soft-card p-10 text-center bg-secondary/40">
              <Camera className="h-8 w-8 text-primary mx-auto" />
              <p className="mt-3 text-muted-foreground">Photos for this category will be added soon.</p>
            </div>
          )}

          <div className="mt-12 soft-card p-8 text-center bg-secondary/40">
            <Camera className="h-8 w-8 text-primary mx-auto" />
            <h3 className="mt-3 font-display text-xl font-semibold">More photos coming soon</h3>
            <p className="mt-2 text-muted-foreground max-w-md mx-auto">We are curating recent campus and event photographs. Visit us to see the school in real life.</p>
            <div className="mt-5">
              <BtnLink to="/contact" variant="primary">Plan a Visit</BtnLink>
            </div>
          </div>
        </div>
      </section>

      {/* UPCOMING EVENTS — editable via src/content/school.ts → school.events */}
      <section className="section-pad bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
            <span className="chip-soft">School Calendar</span>
            <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
              Upcoming Events
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              A glimpse of what's coming up on the school calendar. Dates are confirmed closer to each event.
            </p>
          </div>
          {school.events.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {school.events.map((e) => (
                <article key={e.title} className="soft-card-hover p-6 bg-card relative overflow-hidden transition-transform hover:-translate-y-1">
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
          ) : (
            <div className="soft-card p-10 text-center bg-card">
              <Calendar className="h-8 w-8 text-primary mx-auto" />
              <p className="mt-3 text-muted-foreground">Upcoming events will be announced soon.</p>
            </div>
          )}
        </div>
      </section>

      {lightbox !== null && filtered[lightbox] && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 animate-in fade-in"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
        >
          <button
            className="absolute top-4 right-4 h-11 w-11 grid place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
            onClick={(e) => { e.stopPropagation(); setLightbox(null); }}
            aria-label="Close photo viewer"
          >
            <X className="h-5 w-5" />
          </button>
          <button
            className="absolute left-4 md:left-8 h-11 w-11 grid place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
            onClick={(e) => { e.stopPropagation(); setLightbox((i) => (i === null ? i : (i - 1 + filtered.length) % filtered.length)); }}
            aria-label="Previous photo"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            className="absolute right-4 md:right-8 h-11 w-11 grid place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
            onClick={(e) => { e.stopPropagation(); setLightbox((i) => (i === null ? i : (i + 1) % filtered.length)); }}
            aria-label="Next photo"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          <figure className="max-w-6xl max-h-[85vh] w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={filtered[lightbox].src}
              alt={filtered[lightbox].alt}
              className="max-h-[80vh] w-full object-contain rounded-xl"
            />
            <figcaption className="mt-3 text-center text-sm text-white/80">
              {filtered[lightbox].alt} <span className="text-white/50">· {filtered[lightbox].category}</span>
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}