"use client";

import { Parallax } from "@/components/parallax";
import { Cerebrum } from "@/modules/cerebrum";
import { ChancellorMessage } from "@/modules/chancellor-message";
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
      <Parallax image="/parallax-1.jpg" />
      <LrcSection />
      <Parallax image="/parallax-2.jpg" />
      <MemorialSection />
      <Parallax image="/parallax-1.jpg" />
      <Itinerary />
      <Parallax image="/parallax-2.jpg" />
      <Cerebrum />
      <Footer />
    </>
  );
};
