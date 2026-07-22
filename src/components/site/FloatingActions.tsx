import { Phone, MessageCircle } from "lucide-react";
import { school } from "@/content/school";

export function FloatingActions() {
  return (
    <div className="hidden lg:flex fixed bottom-6 right-6 z-40 flex-col gap-3">
      <a
        href={`https://wa.me/${school.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="grid h-12 w-12 place-items-center rounded-full bg-[oklch(0.72_0.16_150)] text-white shadow-lg shadow-black/10 hover:scale-105 transition-transform"
      >
        <MessageCircle className="h-5 w-5" />
      </a>
      <a
        href={`tel:${school.admissionPhone}`}
        aria-label="Call school"
        className="grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30 hover:scale-105 transition-transform"
      >
        <Phone className="h-5 w-5" />
      </a>
    </div>
  );
}