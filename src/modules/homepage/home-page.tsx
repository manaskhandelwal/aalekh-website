"use client";

import { Parallax } from "@/components/parallax";
import { Cerebrum } from "@/modules/homepage/cerebrum";
import { LrcSection } from "@/modules/homepage/lrc-section";
import { MemorialSection } from "@/modules/homepage/memorial-section";
import { WhatIsAalekh } from "@/modules/homepage/what-is-aalekh";

interface HomePageProps {}

export const HomePage: React.FC<HomePageProps> = ({}) => {
  return (
    <>
      <WhatIsAalekh />
      <Parallax image="/parallax-1.webp" />
      <LrcSection />
      <Parallax image="/parallax-2.webp" />
      <MemorialSection />
      <Parallax image="/parallax-3.webp" />
      <Cerebrum />
    </>
  );
};
