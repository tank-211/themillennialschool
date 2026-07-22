import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, Phone, MapPin, ShieldCheck } from "lucide-react";
import { school } from "@/content/school";
import { BtnLink } from "./Button";
import { Logo } from "./Logo";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/academics", label: "Academics" },
  { to: "/admissions", label: "Admissions" },
  { to: "/campus", label: "Campus" },
  { to: "/gallery", label: "Gallery" },
  { to: "/faculty", label: "Faculty" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50">
      {/* Top bar */}
      <div className="hidden md:block bg-primary text-primary-foreground text-xs">
        <div className="mx-auto max-w-7xl px-6 py-2 flex items-center justify-between gap-6">
          <div className="flex items-center gap-5 opacity-95">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5" /> {school.boardLong}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" /> {school.addressShort}
            </span>
          </div>
          <div className="flex items-center gap-5">
            <span className="opacity-90">{school.hours}</span>
            <a
              href={`tel:${school.admissionPhone}`}
              className="inline-flex items-center gap-1.5 font-semibold hover:underline"
            >
              <Phone className="h-3.5 w-3.5" /> {school.admissionPhone}
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div
        className={`transition-all duration-200 ${
          scrolled
            ? "bg-background/90 backdrop-blur-md border-b border-border shadow-sm"
            : "bg-background/70 backdrop-blur-md border-b border-transparent"
        }`}
      >
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-3 group" aria-label="The Millennial School — Home">
            <Logo className="h-12 w-12 md:h-14 md:w-14" />
            <span className="leading-tight hidden sm:block">
              <span className="block font-display text-[15px] md:text-base font-bold text-foreground">
                The Millennial
              </span>
              <span className="block text-[10px] md:text-[11px] uppercase tracking-[0.18em] text-muted-foreground font-semibold">
                School · Nashik
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1 text-sm">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={`px-3 py-2 rounded-full transition-colors ${
                    pathname === item.to
                      ? "text-primary bg-primary/8 font-semibold"
                      : "text-foreground/80 hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <BtnLink to="/admissions" variant="apply" size="md" className="hidden sm:inline-flex">
              Apply Now
            </BtnLink>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden grid h-11 w-11 place-items-center rounded-full border border-border bg-background hover:bg-secondary"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile sheet */}
      {open ? (
        <div className="lg:hidden border-b border-border bg-background shadow-md">
          <ul className="mx-auto max-w-7xl px-4 sm:px-6 py-4 grid gap-1">
            {NAV.map((item) => (
              <li key={item.to}>
              <Link
                to={item.to}
                className={`px-3 py-2 rounded-full transition-colors ${
                  pathname === item.to
                    ? "text-primary bg-primary/8 font-semibold"
                    : "text-foreground/80 hover:text-foreground hover:bg-secondary"
                }`}
              >
                {item.label}
              </Link>
              </li>
            ))}
            <li className="pt-2">
              <BtnLink to="/admissions" variant="apply" size="lg" className="w-full">
                Apply Now
              </BtnLink>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}