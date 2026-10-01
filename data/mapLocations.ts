export interface CityLocation {
  id: string;
  name: string;
  codename: string;
  district: string;
  coordinates: { x: number; y: number }; // percentage on map canvas
  description: string;
  activeMissions: string[];
  securityLevel: 'LOW' | 'MEDIUM' | 'HIGH' | 'MAXIMUM';
  icon: string;
  color: string;
}

export const cityLocations: CityLocation[] = [
  {
    id: "central-arena",
    name: "Central Arena & Grand Stage",
    codename: "GROUND ZERO",
    district: "Downtown AITHRA",
    coordinates: { x: 50, y: 52 },
    description: "The epicenter of AITHRA 2026. Main opening ceremony, evening spectacles, pro-grade sound stages, and mega prize ceremonies.",
    activeMissions: ["Opening Keynote", "Grand Finale Bounty", "EDM Night Fest", "Awards Ceremony"],
    securityLevel: "MAXIMUM",
    icon: "zap",
    color: "#E8FF4F"
  },
  {
    id: "cyber-sector",
    name: "Cybernetics & Software Hub",
    codename: "GRID SECTOR 01",
    district: "Silicon Corridor (CS / IT)",
    coordinates: { x: 30, y: 35 },
    description: "High-density computational nerve center. Home to round-the-clock code battles, algorithmic heists, CTF skirmishes, and UI/UX design sprints.",
    activeMissions: ["36-Hour Hackathon", "Bug Bounty Blitz", "Blankspace UI Sprint", "CodeSprint"],
    securityLevel: "HIGH",
    icon: "cpu",
    color: "#D92BFF"
  },
  {
    id: "the-foundry",
    name: "Mechanical & Robotics Foundry",
    codename: "THE FORGE",
    district: "Heavy Industry Yard",
    coordinates: { x: 72, y: 32 },
    description: "Sparks, steel, and high-torque machinery. Hosts live engine dismantling, CAD blueprints, pitstop showdowns, and autonomous robot arenas.",
    activeMissions: ["Pitstop 2K26", "Engine Dismantling", "Robo Soccer", "CAD Design Championship"],
    securityLevel: "HIGH",
    icon: "hammer",
    color: "#FF7448"
  },
  {
    id: "electro-grid",
    name: "High-Voltage Power Labs",
    codename: "VOLT STATION",
    district: "Power & Automation Wing",
    coordinates: { x: 25, y: 68 },
    description: "Electrified proving ground for EV powertrains, circuit debugging, drone flight dynamics, and next-gen renewable microgrids.",
    activeMissions: ["EV-olution", "Circuit Debugging", "Drone Obstacle Race", "Smart Microgrid Challenge"],
    securityLevel: "MEDIUM",
    icon: "battery-charging",
    color: "#FF4FA3"
  },
  {
    id: "structural-plaza",
    name: "Civil & Infrastructure Plaza",
    codename: "MONOLITH",
    district: "Metro Planning Sector",
    coordinates: { x: 75, y: 70 },
    description: "Testing structural limits under extreme seismic stress, high-precision surveying, and sustainable futuristic architectural modeling.",
    activeMissions: ["Bridge Craft Trials", "Cad-O-Mania", "Total Station Hunt", "Concrete Cube Smash"],
    securityLevel: "MEDIUM",
    icon: "building-2",
    color: "#7A20C8"
  },
  {
    id: "neon-strip",
    name: "Neon Strip & Esports Arena",
    codename: "THE CASINO",
    district: "Night District (Fun Zone)",
    coordinates: { x: 42, y: 78 },
    description: "Pulsing neon lights, casual entertainment, food trucks, VR headsets, FIFA/PES tournaments, and collegiate gaming squads.",
    activeMissions: ["PES Solo Championship", "BGMI Squad Warfare", "Laser Tag Sector", "Retro Arcade Hall"],
    securityLevel: "LOW",
    icon: "gamepad-2",
    color: "#E8FF4F"
  },
  {
    id: "command-hq",
    name: "Central Command & Registration",
    codename: "SAFEHOUSE",
    district: "Campus Front Gate",
    coordinates: { x: 50, y: 18 },
    description: "Official festival check-in point. Obtain tactical mission passes, NFC wristbands, event telemetry, and official guidance.",
    activeMissions: ["Player Accreditation", "Mission Intel Distribution", "Merchandise Depot", "Information Bureau"],
    securityLevel: "MAXIMUM",
    icon: "shield-alert",
    color: "#F7F3F7"
  }
];
