import { Phone, MessageCircle, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import { school } from "@/content/school";

export function StickyMobileCTA() {
  return (
    <div className="lg:hidden fixed inset-x-0 bottom-0 z-40 px-3 pb-3 pt-2">
      <div className="rounded-2xl border border-border bg-background/95 backdrop-blur-md shadow-lg grid grid-cols-3 overflow-hidden">
        <a
          href={`tel:${school.admissionPhone}`}
          className="flex flex-col items-center justify-center py-2.5 text-xs font-semibold text-foreground hover:bg-secondary"
        >
          <Phone className="h-4 w-4 mb-1 text-primary" />
          Call
        </a>
        <a
          href={`https://wa.me/${school.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2.5 text-xs font-semibold text-foreground border-x border-border hover:bg-secondary"
        >
          <MessageCircle className="h-4 w-4 mb-1 text-primary" />
          WhatsApp
        </a>
        <Link
          to="/admissions"
          className="flex flex-col items-center justify-center py-2.5 text-xs font-semibold text-tangerine-foreground bg-tangerine"
        >
          <GraduationCap className="h-4 w-4 mb-1" />
          Apply
        </Link>
      </div>
    </div>
  );
}