// =============================================================
// The Millennial School — single source of truth.
// Update this file to change site content. Sections with empty
// arrays or empty strings will gracefully hide on the site.
// =============================================================

export const school = {
  // ---- Identity ----
  name: "The Millennial School",
  shortName: "The Millennial School",
  tagline: "Where every child grows with confidence, care and curiosity.",
  established: "", // placeholder — e.g. "2010"
  board: "State Board",
  boardLong: "Affiliated to State Board · NEP Aligned Curriculum",
  grades: "Playgroup to Grade 10",
  city: "Nashik, Maharashtra",

  // ---- Contact ----
  address: "Monde Mala, Damodar Chowk, Pathardi Shivar, Nashik – 10",
  addressShort: "Pathardi Shivar, Nashik – 10",
  phones: ["7414999566", "7414999466"],
  admissionPhone: "7414999566",
  admissionPhoneAlt: "7414999466",
  email: "", // placeholder
  hours: "Monday – Saturday · 8:00 AM – 3:00 PM",
  whatsapp: "917414999566", // for wa.me link
  // Replace with the exact embed URL from Google Maps → Share → Embed
  mapsEmbedUrl:
    "https://www.google.com/maps?q=Monde+Mala+Damodar+Chowk+Pathardi+Shivar+Nashik&output=embed",
  mapsDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Monde+Mala+Damodar+Chowk+Pathardi+Shivar+Nashik",

  // ---- Social ----
  social: {
    instagram: "https://www.instagram.com/millennial_school?igsh=bWVzZWJpc2xvd3Ay",
    facebook: "https://www.instagram.com/millennial_school?igsh=bWVzZWJpc2xvd3Ay",
    youtube: "",
    linkedin: "",
  },

  // ---- Leadership ----
  principal: {
    name: "Shraddha Arbooj",
    title: "Principal",
    // EDITABLE PLACEHOLDER — replace with the Principal's own words when ready.
    message:
      "At The Millennial School, we are committed to nurturing young minds through quality education, strong values, and a supportive learning environment. Together, we inspire every child to learn, grow, and succeed.",
    excerpt:
      "Nurturing young minds through quality education, strong values, and a supportive learning environment.",
    photo: "", // placeholder, swap with real photo path
  },
  vicePrincipal: {
    name: "Alka Amrutkar",
    title: "Vice Principal",
    message:
      "We believe every child deserves a safe, encouraging, and joyful learning experience. Our focus is on helping students build confidence, curiosity, and the skills they need for a bright future.",
    photo: "",
  },

  // ---- Editable placeholders ----
  vision:
    "To provide innovative education that shapes compassionate, resilient, responsible and future-ready learners who positively contribute to society.",
  mission:
    "Empower young learners with education that fosters curiosity, critical thinking, confidence, creativity and lifelong learning in a safe and nurturing environment.",
  history: "", // long history text — leave empty to hide

  // Hide section if empty
  chairmanMessage: {
    name: "",
    title: "",
    message: "",
    photo: "",
  },

  // ---- Facilities (only confirmed ones) ----
  facilities: [
    {
      name: "Smart Classrooms",
      description:
        "Bright, well-equipped classrooms with digital boards to make everyday learning engaging.",
      icon: "Monitor",
    },
    {
      name: "Library",
      description:
        "A quiet reading space with age-appropriate books that build a lifelong love for reading.",
      icon: "Library",
    },
    {
      name: "Computer Lab",
      description:
        "Hands-on computer sessions that introduce children to technology with care and supervision.",
      icon: "Cpu",
    },
    {
      name: "Science Lab",
      description:
        "A safe, well-organised lab where students experiment, observe and learn through doing.",
      icon: "FlaskConical",
    },
    {
      name: "Playground",
      description:
        "Open play areas that encourage movement, teamwork and confidence during the school day.",
      icon: "Trees",
    },
    {
      name: "School Transport",
      description:
        "Supervised school transport on planned routes to bring children safely to and from school.",
      icon: "Bus",
    },
    {
      name: "CCTV Security",
      description:
        "A monitored campus with CCTV coverage for a calm, safe and attentive school environment.",
      icon: "ShieldCheck",
    },
    {
      name: "Activity Room",
      description:
        "A dedicated space for music, movement, storytelling and group activities through the week.",
      icon: "Music",
    },
    {
      name: "Art & Craft Room",
      description:
        "Where children paint, build and create — exploring their imagination with hands-on projects.",
      icon: "Palette",
    },
  ] as const,

  // ---- Academic stages ----
  stages: [
    {
      title: "Foundation Stage",
      grades: "Playgroup · Nursery · Jr. KG · Sr. KG · Class 1 · Class 2 · Ages 3–8",
      description:
        "A joyful foundation through play-based learning, language development, numeracy, creativity and social-emotional growth.",
      icon: "Sparkles",
    },
    {
      title: "Preparatory Stage",
      grades: "Classes 3 – 5 · Ages 8–11",
      description:
        "Building strong academic concepts, curiosity, communication, creativity and problem-solving through engaging classroom experiences.",
      icon: "BookOpen",
    },
    {
      title: "Middle Stage",
      grades: "Classes 6 – 8 · Ages 11–14",
      description:
        "Encouraging analytical thinking, subject exploration, collaboration, digital literacy and independent learning.",
      icon: "GraduationCap",
    },
    {
      title: "Secondary Stage",
      grades: "Classes 9 – 10 · Up to age 15",
      description:
        "Focused academic preparation, life skills, career awareness and holistic development while preparing students for future success.",
      icon: "Trophy",
    },
  ] as const,

  // ---- Admission process ----
  admissionSteps: [
    {
      title: "Enquire",
      description:
        "Share a few details through the enquiry form or call our admissions team. We'll get back the same working day.",
    },
    {
      title: "Visit the Campus",
      description:
        "Schedule a visit to walk through the school, meet the team and ask anything you'd like.",
    },
    {
      title: "Submit the Application",
      description:
        "Fill in the application form along with the required documents and a recent photograph of your child.",
    },
    {
      title: "Interaction",
      description:
        "A short, friendly interaction with the child and a brief conversation with the parents.",
    },
    {
      title: "Learning Readiness",
      description:
        "A friendly activity or interaction to understand the child's learning level, communication, confidence and readiness in a comfortable environment. This is not an examination.",
    },
    {
      title: "Confirmation",
      description:
        "Once admission is confirmed, complete the admission formalities and welcome to The Millennial School family.",
    },
  ] as const,

  // ---- Why choose us (factual, easy to revise) ----
  whyChooseUs: [
    {
      title: "NEP-Aligned Learning",
      description:
        "A State Board curriculum aligned with the National Education Policy — focused on understanding, creativity and real skills.",
      icon: "BookOpen",
    },
    {
      title: "Nurturing Environment",
      description:
        "Caring teachers who know each child by name, watch how they learn and support them through every stage.",
      icon: "HeartHandshake",
    },
    {
      title: "Excellence in Learning",
      description:
        "A safe, well-supervised campus with strong academics, art, sport and values built into everyday school life.",
      icon: "ShieldCheck",
    },
    {
      title: "Global Citizenship",
      description:
        "Innovation, adaptability, honesty and kindness — shaping confident young people ready for a wider world.",
      icon: "Sparkles",
    },
  ] as const,

  // ---- Empty by default; populate when you have content ----
  achievements: [] as Array<{ title: string; date: string; description: string }>,
  stats: [] as Array<{ value: string; label: string }>,
  news: [] as Array<{ title: string; date: string; category: string; excerpt: string }>,
  events: [
    { title: "Annual Sports Day", date: "To be announced", location: "School Playground", description: "A morning of athletics, races and team games celebrating fitness and fair play." },
    { title: "Cultural Day", date: "To be announced", location: "School Auditorium", description: "Students showcase music, dance and theatre from across cultures and traditions." },
    { title: "Parent-Teacher Meet", date: "To be announced", location: "Respective Classrooms", description: "A dedicated window for parents to meet class teachers and review progress." },
    { title: "Science & Craft Exhibition", date: "To be announced", location: "Activity Hall", description: "Hands-on models and craft projects created by students across all stages." },
  ] as Array<{ title: string; date: string; location: string; description: string }>,
  testimonials: [] as Array<{ quote: string; name: string; relation: string }>,
  teachers: [] as Array<{ name: string; subject: string; photo?: string }>,

  // ---- FAQs ----
  faqs: [
    {
      q: "Which board does the school follow?",
      a: "We follow a State Board curriculum aligned with the National Education Policy (NEP), from Playgroup to Grade 10.",
    },
    {
      q: "What is the age criteria for Playgroup / Nursery admission?",
      a: "Age criteria depend on the academic year. Please contact the admissions office on 7414999566 or 7414999466 for the current cut-off.",
    },
    {
      q: "When does the admission process open?",
      a: "Admissions are open through the year, subject to seat availability. We recommend enquiring early.",
    },
    {
      q: "Do you provide school transport?",
      a: "Yes. Supervised school transport is available on planned routes. Please confirm coverage for your area with the office.",
    },
    {
      q: "What are the school timings?",
      a: "Our office hours are Monday to Saturday, 8:00 AM to 3:00 PM. Class timings may vary by grade.",
    },
    {
      q: "How can I schedule a campus visit?",
      a: "Call us on 7414999566 or 7414999466, or fill in the enquiry form on the Admissions page. Our team will confirm a time that works for you.",
    },
  ] as const,

  // ---- Student life (text-only until photos arrive) ----
  studentLife: [
    {
      title: "Art & Craft",
      description:
        "Painting, paper craft and hands-on projects that give children the joy of making something themselves.",
      icon: "Palette",
    },
    {
      title: "Music & Movement",
      description:
        "Songs, rhythm and group activities that build expression, listening and confidence on stage.",
      icon: "Music",
    },
    {
      title: "Sports & Play",
      description:
        "Daily play time and structured sports that build fitness, fair play and friendships.",
      icon: "Trophy",
    },
    {
      title: "Reading Circle",
      description:
        "Library sessions and storytelling to build vocabulary, imagination and a lifelong love for books.",
      icon: "BookOpen",
    },
    {
      title: "Celebrations",
      description:
        "Festivals, special days and assemblies that bring our school community closer together.",
      icon: "Sparkles",
    },
    {
      title: "Values Education",
      description:
        "Honesty, kindness, respect and responsibility — woven into everyday school life.",
      icon: "HeartHandshake",
    },
  ] as const,

  // ---- Gallery placeholders ----
  gallery: {
    categories: ["Campus", "Classrooms", "Activities", "Events"] as const,
  },

  // ---- Brochure ----
  brochureUrl: "", // e.g. "/brochure.pdf" once uploaded
};

export type School = typeof school;