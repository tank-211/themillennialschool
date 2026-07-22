import { Link } from "react-router-dom";
import {
  Phone, Mail, MapPin, Clock, ShieldCheck,
} from "lucide-react";
import { school } from "@/content/school";
import { Logo } from "./Logo";

const QUICK = [
  { to: "/about", label: "About Us" },
  { to: "/academics", label: "Academics" },
  { to: "/admissions", label: "Admissions" },
  { to: "/campus", label: "Campus & Facilities" },
] as const;

const EXPLORE = [
  { to: "/gallery", label: "Gallery" },
  { to: "/faculty", label: "Faculty" },
  { to: "/faqs", label: "FAQs" },
  { to: "/contact", label: "Contact" },
] as const;

export function Footer() {
  return (
    <footer className="mt-16 md:mt-24 bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <Link to="/" className="flex items-center gap-3" aria-label="The Millennial School — Home">
              <span className="grid h-14 w-14 place-items-center rounded-xl bg-background/10 p-1.5">
                <Logo className="h-full w-full" />
              </span>
              <span className="leading-tight">
                <span className="block font-display text-base font-bold">The Millennial</span>
                <span className="block text-[11px] uppercase tracking-[0.18em] text-background/60 font-semibold">
                  School · Nashik
                </span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-background/70 leading-relaxed max-w-sm">
              A State Board day school in Nashik, Maharashtra — nurturing children from Playgroup to Grade 10 with an NEP-aligned curriculum, strong values and care.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 text-xs font-semibold bg-background/10 text-background px-3 py-1.5 rounded-full">
              <ShieldCheck className="h-3.5 w-3.5" /> Affiliated to State Board · NEP Aligned
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-display text-sm font-semibold mb-4">School</h4>
            <ul className="space-y-2.5 text-sm text-background/75">
              {QUICK.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="hover:text-background hover:underline underline-offset-4">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-display text-sm font-semibold mb-4">Explore</h4>
            <ul className="space-y-2.5 text-sm text-background/75">
              {EXPLORE.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="hover:text-background hover:underline underline-offset-4">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="font-display text-sm font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-3 text-sm text-background/80">
              <li className="flex gap-3">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-background/60" />
                <span>{school.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-4 w-4 mt-0.5 shrink-0 text-background/60" />
                <span className="flex flex-col gap-0.5">
                  {school.phones.map((p) => (
                    <a key={p} href={`tel:${p}`} className="hover:underline">{p}</a>
                  ))}
                </span>
              </li>
              {school.email ? (
                <li className="flex gap-3">
                  <Mail className="h-4 w-4 mt-0.5 shrink-0 text-background/60" />
                  <a href={`mailto:${school.email}`} className="hover:underline">
                    {school.email}
                  </a>
                </li>
              ) : null}
              <li className="flex gap-3">
                <Clock className="h-4 w-4 mt-0.5 shrink-0 text-background/60" />
                <span>{school.hours}</span>
              </li>
            </ul>
            <div className="mt-5 flex items-center gap-2"></div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-background/60">
          <span>© {new Date().getFullYear()} The Millennial School. All rights reserved.</span>
          <span>Designed with care for parents, students and teachers in Nashik.</span>
        </div>
      </div>
    </footer>
  );
}