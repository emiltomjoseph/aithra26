import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { missionEvents } from "@/data/events";
import MissionDetailClient from "./MissionDetailClient";

interface MissionPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return missionEvents.map((m) => ({
    slug: m.slug,
  }));
}

export async function generateMetadata({ params }: MissionPageProps): Promise<Metadata> {
  const mission = missionEvents.find((m) => m.slug === params.slug);
  if (!mission) {
    return {
      title: "Mission Not Found | AITHRA 2026",
    };
  }

  return {
    title: `${mission.missionNumber}: ${mission.title} | AITHRA 2026`,
    description: `Official mission briefing for ${mission.title} at AITHRA 2026, Amal Jyothi College of Engineering. Bounty: ${mission.prizePool}.`,
  };
}

export default function MissionDetailPage({ params }: MissionPageProps) {
  const mission = missionEvents.find((m) => m.slug === params.slug);

  if (!mission) {
    notFound();
  }

  return <MissionDetailClient mission={mission} />;
}
