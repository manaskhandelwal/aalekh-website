"use client";

import { Parallax } from "@/components/parallax";
import { Authors } from "@/modules/authors";
import { Cerebrum } from "@/modules/cerebrum";
import { ChancellorMessage } from "@/modules/chancellor-message";
import { Collaborators } from "@/modules/collaborators";
import { Footer } from "@/modules/footer";
import { HeroSection } from "@/modules/hero-section";
import { Itinerary } from "@/modules/itinerary";
import { LrcSection } from "@/modules/lrc-section";
import { MemorialSection } from "@/modules/memorial-section";
import { WhatIsAalekh } from "@/modules/what-is-aalekh";

interface HomePageProps {}

export const HomePage: React.FC<HomePageProps> = ({}) => {
  return (
    <>
      <HeroSection />
      <ChancellorMessage />
      <WhatIsAalekh />
      <Parallax image="/parallax-1.webp" />
      <LrcSection />
      <Authors />
      <Parallax image="/parallax-2.webp" />
      <Itinerary />
      <Parallax image="/parallax-4.webp" />
      <MemorialSection />
      <Parallax image="/parallax-3.webp" />
      <Cerebrum />
      <Collaborators />
      <Footer />
    </>
  );
};
