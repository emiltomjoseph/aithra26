# AITHRA 2026 — Flagship TechFest Website

> **Amal Jyothi College of Engineering (AJCE), Kanjirappally**  
> **Dates: 30 — 31 October 2026**  
> *"ENTER THE CITY. CHOOSE YOUR MISSION. BUILD YOUR LEGACY."*

A production-quality, cinematic digital experience engineered for **AITHRA 2026**, combining the visual art direction, nocturnal neon palette, and mission interaction language of Grand Theft Auto with **AITHRA** as the dominant identity.

---

## 🌆 Features

- **Full-Viewport Cinematic Hero**: Full-screen 3D WebGL highway scene built with React Three Fiber, low-poly skyline silhouettes, sports car model with glowing underglow, floating sunset embers, and responsive mouse parallax.
- **Smooth Fallback System**: High-performance 2.5D layered canvas parallax fallback ensuring silky 60fps performance on mobile and lower-spec hardware.
- **Verified Event Catalog**: 74 verified technical, departmental, professional, club, and esports events loaded from live AJCE systems into a central typed data layer (`data/events.ts`).
- **GTA-Style Mission Browser**: Instant search, department selector, category filtering (`Internal`, `External`, `Fun Zone`), and sorting by prize bounty.
- **Dynamic Mission Briefing Dossiers (`/missions/[slug]`)**: Classified dossier layouts with tactical objectives, eligibility, venue, schedules, rules of engagement, and coordinator contacts.
- **AITHRA City Interactive Radar Map**: Stylized vector radar map of the AJCE campus with rotating radar sweep, animated checkpoints, and live sector operations telemetry.
- **Experience Districts**: Dedicated showcases for TECH, COMPETE, CREATE, PLAY, and CONNECT, spotlighting the 36-hour Hackathon (*"BUILD. BREAK. REBUILD."*) and Masterclass Workshops (*"LEARN FROM THE BEST."*).
- **Procedural Audio Engine**: Web Audio API ambient city synth drone and tactical UI clicks / radar pings with zero external asset latency and an equalizer audio toggle.
- **Mission Launch Countdown HUD**: Real-time mission timer counting down to 30 October 2026.
- **Interactive Registration Flow**: Universal tactical accreditation modal with celebratory confetti and operator credential pass generation.
- **Lenis Smooth Scrolling & Custom Tactical Cursor**.
- **Zero AutoExpo Mentions**: Strictly purged from all navigation, cards, metadata, and data structures.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router, TypeScript)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom GTA neon color tokens
- **3D / WebGL**: [Three.js](https://threejs.org/), [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber), [@react-three/drei](https://github.com/pmndrs/drei)
- **Smooth Scroll**: [Lenis](https://lenis.darkroom.engineering/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **FX**: Canvas Confetti, Web Audio API procedural synthesis

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18.18+ or 20+
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/emiltomjoseph/aithra26.git
cd aithra26

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

---

## 🌐 Where and How to Host This

### Option 1: Vercel (Recommended - Fastest & Best Next.js Support)

Vercel is the creator of Next.js and provides zero-config deployments with automatic global edge caching:

1. Push this repository to your GitHub account (`https://github.com/emiltomjoseph/aithra26.git`).
2. Go to [https://vercel.com](https://vercel.com) and sign in with GitHub.
3. Click **"Add New Project"** and select **`aithra26`**.
4. Framework Preset will automatically detect **Next.js**.
5. Click **"Deploy"**.
6. Within ~60 seconds, your site will be live at `https://aithra26.vercel.app` (or your custom domain like `aithra.ajce.in`).

### Option 2: Netlify

1. Sign in to [https://netlify.com](https://netlify.com).
2. Click **"Add new site"** > **"Import an existing project"** > **GitHub**.
3. Select `emiltomjoseph/aithra26`.
4. Build command: `npm run build`
5. Publish directory: `.next`
6. Click **"Deploy"**.

### Option 3: VPS / Ubuntu Server (DigitalOcean, AWS EC2, Hostinger) with PM2 & NGINX

```bash
# On your server:
git clone https://github.com/emiltomjoseph/aithra26.git
cd aithra26
npm install
npm run build

# Run with PM2 process manager
npm install -g pm2
pm2 start npm --name "aithra26" -- start -- -p 3000
pm2 save
pm2 startup
```
Then configure Nginx as a reverse proxy forwarding port 80/443 to `http://localhost:3000`.

---

## 🏛️ Official Attribution

- **Institution**: Amal Jyothi College of Engineering (AJCE), Kanjirappally
- **Organizers**: AJCE Students' Council
- **Copyright**: © 2026 AITHRA. All rights reserved.
