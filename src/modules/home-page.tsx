"use client";

import { Parallax } from "react-parallax";

import { ChancellorMessage } from "@/modules/chancellor-message";
import { HeroSection } from "@/modules/hero-section";
import { LrcSection } from "@/modules/lrc-section";
import { WhatIsAalekh } from "@/modules/what-is-aalekh";

interface HomePageProps {}

export const HomePage: React.FC<HomePageProps> = ({}) => {
  return (
    <>
      <HeroSection />
      <ChancellorMessage />
      <WhatIsAalekh />
      <Parallax
        bgImage="/parallax-1.jpg"
        bgImageAlt="sample photo"
        strength={300}
        className="h-[40vh]"
      />
      <LrcSection />
      <Parallax
        bgImage="/parallax-2.jpg"
        bgImageAlt="sample photo"
        strength={300}
        className="h-[40vh]"
      />
    </>
  );
};
