# AITHRA 2026 — Flagship TechFest

> **Amal Jyothi College of Engineering (AJCE), Kanjirappally**  
> **Dates: 30 — 31 October 2026**  
> *"ENTER THE FUTURE."*

A luxury, cinematic, minimal, dark, premium automotive editorial experience engineered for **AITHRA 2026**. Designed in the spirit of a high-end Porsche campaign and modern automotive commercial set against an atmospheric dusk circuit.

---

## 🏎️ Core Hero Experience

- **3D Porsche 911 GT3 RS on Racing Circuit**: Built with React Three Fiber, featuring photorealistic PBR clearcoat shaders, tinted automotive glass, brushed brake assemblies, and ground contact shadows.
- **Physics-Based Mouse Steering**:
  - Front wheel steering angle (up to $\pm 15^\circ$)
  - Chassis yaw with realistic physical inertia (up to $\pm 8^\circ$)
  - Centrifugal body roll & subtle pitch
  - Dynamic forward headlight spotlights illuminating the wet asphalt
  - Damped camera parallax tracking cursor movement ($\pm 3^\circ$)
- **Grounded Racing Circuit**: Asphalt road texture, red/white track kerbs, white lane markings, distant city skyline silhouette, and atmospheric dusk horizon haze.
- **Scroll-Driven Approach**: Porsche accelerates down the circuit toward the viewer (Distance $\rightarrow$ Midground $\rightarrow$ Foreground) and cleanly exits past the camera into Section 02.
- **Mobile Fallback**: Layered 2.5D automotive composite ensuring 60fps rendering across all devices.

---

## 📑 Editorial Page Architecture

- **01. Introduction**: Editorial narrative of Amal Jyothi's flagship festival centered around innovation, creativity, and collaboration powered by the AJCE Students' Council.
- **02. The Metrics**: Architectural statistics grid (70+ Events, 500+ Participants, 35+ Games & Labs, ₹6,00,000+ Prize Bounty).
- **03. Event Directory**: Automotive magazine editorial catalog across 74 verified events (Internal, External, Fun Zone) with real-time keyword search and department filters.
- **04. Event Dossiers (`/missions/[slug]`)**: Pre-rendered specifications detailing venue, schedules, squad size, fee, bounty, and rules.
- **05. Featured Arenas**: Editorial spotlight spreads for the 36-hour Hackathon (*"BUILD. BREAK. REBUILD."*) and Engineering Masterclasses (*"LEARN FROM THE BEST."*).
- **06. The Archives**: Visual filmstrip gallery with high-contrast imagery and full-screen lightbox viewer.
- **07. Precision Chronometer**: Luxury timing countdown to **30 October 2026, 09:00 AM IST**.
- **08. Final Call & Accreditation**: Minimalist invitation with instant accreditation modal.
- **Strict Brand Integrity**: Zero AutoExpo mentions anywhere.

---

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router, TypeScript)
- **Styling**: Tailwind CSS (Custom Obsidian & Dusk palette)
- **3D / WebGL**: Three.js, @react-three/fiber, @react-three/drei
- **Smooth Scroll**: Lenis
- **Typography**: Bebas Neue & Inter

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/emiltomjoseph/aithra26.git
cd aithra26

# Install dependencies (automatically provisions 3D model via postinstall)
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## 🌐 Deployment on Vercel

1. Push your changes to GitHub (`https://github.com/emiltomjoseph/aithra26.git`).
2. Log into [Vercel](https://vercel.com) and click **"Add New..."** $\rightarrow$ **"Project"**.
3. Select **`aithra26`** and click **Deploy**.
4. The postinstall hook will automatically configure the 3D model, and your production site will be live in ~60 seconds.
