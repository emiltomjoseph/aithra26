export interface GalleryItem {
  id: string;
  title: string;
  tag: string;
  category: 'crowd' | 'stage' | 'tech' | 'night' | 'arena';
  image: string;
  aspect: 'landscape' | 'portrait' | 'wide';
}

export const galleryItems: GalleryItem[] = [
  {
    id: "g-1",
    title: "Main Stage Midnight Resonance",
    tag: "CENTRAL ARENA",
    category: "stage",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80",
    aspect: "wide"
  },
  {
    id: "g-2",
    title: "36-Hour Hackathon Command",
    tag: "CYBER DISTRICT",
    category: "tech",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    aspect: "portrait"
  },
  {
    id: "g-3",
    title: "Robotics Combat Proving Ground",
    tag: "THE FORGE",
    category: "arena",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80",
    aspect: "landscape"
  },
  {
    id: "g-4",
    title: "The Neon Boulevard After Hours",
    tag: "FOOD & CASINO STRIP",
    category: "night",
    image: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1200&q=80",
    aspect: "landscape"
  },
  {
    id: "g-5",
    title: "Esports Arena Championship Climax",
    tag: "GAME ZONE",
    category: "crowd",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80",
    aspect: "wide"
  },
  {
    id: "g-6",
    title: "High-Voltage Telemetry Trials",
    tag: "VOLT STATION",
    category: "tech",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    aspect: "portrait"
  },
  {
    id: "g-7",
    title: "10,000+ Footfall Festival Rush",
    tag: "CAMPUS GROUNDS",
    category: "crowd",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80",
    aspect: "landscape"
  }
];
