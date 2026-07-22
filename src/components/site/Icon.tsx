import {
  BookOpen, GraduationCap, Trophy, Sparkles, Monitor, Library, Cpu, FlaskConical,
  Trees, Bus, ShieldCheck, Music, Palette, HeartHandshake, Calendar, Smartphone,
  Laptop, FileText, Users, type LucideIcon,
} from "lucide-react";

const MAP: Record<string, LucideIcon> = {
  BookOpen, GraduationCap, Trophy, Sparkles, Monitor, Library, Cpu, FlaskConical,
  Trees, Bus, ShieldCheck, Music, Palette, HeartHandshake, Calendar, Smartphone,
  Laptop, FileText, Users,
};

export function Icon({ name, className }: { name: string; className?: string }) {
  const Cmp = MAP[name] ?? Sparkles;
  return <Cmp className={className} aria-hidden />;
}