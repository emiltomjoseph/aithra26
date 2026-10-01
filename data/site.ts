export interface SiteConfig {
  name: string;
  edition: string;
  fullName: string;
  tagline: string;
  secondaryTagline: string;
  dates: string;
  datesShort: string;
  targetDateISO: string;
  venue: {
    college: string;
    location: string;
    district: string;
    state: string;
    country: string;
    pincode: string;
  };
  organizer: string;
  description: string;
  aboutText: string;
  stats: {
    missions: { count: number; suffix: string; label: string; sublabel: string };
    players: { count: number; suffix: string; label: string; sublabel: string };
    gameZones: { count: number; suffix: string; label: string; sublabel: string };
    prizePool: { count: number; prefix: string; suffix: string; label: string; sublabel: string };
  };
  contacts: Array<{
    name: string;
    role: string;
    phone: string;
    tel: string;
  }>;
  socials: {
    aithraInsta: string;
    councilInsta: string;
    collegeInsta: string;
    officialWeb: string;
  };
  navLinks: Array<{
    name: string;
    href: string;
  }>;
}

export const siteConfig: SiteConfig = {
  name: "AITHRA",
  edition: "2026",
  fullName: "AITHRA 2026 — Flagship TechFest",
  tagline: "ENTER THE CITY. CHOOSE YOUR MISSION. BUILD YOUR LEGACY.",
  secondaryTagline: "Kerala's Premier College TechFest Reimagined as an Immersive Digital Frontier.",
  dates: "30 OCTOBER 2026 — 31 OCTOBER 2026",
  datesShort: "30 — 31 OCT 2026",
  targetDateISO: "2026-10-30T09:00:00+05:30",
  venue: {
    college: "Amal Jyothi College of Engineering",
    location: "Koovappally P.O., Kanjirappally",
    district: "Kottayam",
    state: "Kerala",
    country: "India",
    pincode: "686518",
  },
  organizer: "AJCE Students' Council",
  description:
    "AiTHRA is the flagship TechFest of Amal Jyothi College of Engineering, Kanjirappally, where technology meets imagination, powered by the AJCE Students' Council and centered around innovation, creativity and collaboration.",
  aboutText:
    "Step into AITHRA 2026: a neon-drenched metropolis of innovation, engineering brilliance, and high-octane competition. Over two electrifying days, the sprawling campus of Amal Jyothi transforms into an open-world playground featuring 70+ tactical missions, premier hackathons, elite tech masterclasses, and an unmatched ₹6,00,000+ bounty pool.",
  stats: {
    missions: { count: 70, suffix: "+", label: "MISSIONS", sublabel: "Technical & General Events" },
    players: { count: 500, suffix: "+", label: "PLAYERS", sublabel: "Engineers & Creators" },
    gameZones: { count: 35, suffix: "+", label: "GAME ZONES", sublabel: "Labs, Hubs & Arenas" },
    prizePool: { count: 6, prefix: "₹", suffix: "L+", label: "PRIZE POOL", sublabel: "Total Cash Bounty" },
  },
  contacts: [
    {
      name: "Anoop Joseph",
      role: "Student Coordinator",
      phone: "+91 83019 90394",
      tel: "+918301990394",
    },
    {
      name: "Andriya Manoj",
      role: "Student Coordinator",
      phone: "+91 80753 13747",
      tel: "+918075313747",
    },
    {
      name: "Hiba Nizar",
      role: "Registration Lead",
      phone: "+91 70254 63430",
      tel: "+917025463430",
    },
    {
      name: "Jaice George",
      role: "Events Lead",
      phone: "+91 96331 86201",
      tel: "+919633186201",
    },
  ],
  socials: {
    aithraInsta: "https://www.instagram.com/aithra_ajce",
    councilInsta: "https://instagram.com/ajce_studentscouncil",
    collegeInsta: "https://www.instagram.com/ajce.in",
    officialWeb: "https://aithra.ajce.in/",
  },
  navLinks: [
    { name: "CITY", href: "#about" },
    { name: "MISSIONS", href: "#missions" },
    { name: "RADAR MAP", href: "#map" },
    { name: "DISTRICTS", href: "#districts" },
    { name: "GALLERY", href: "#gallery" },
    { name: "INTEL & CONTACT", href: "#contact" },
  ],
};
