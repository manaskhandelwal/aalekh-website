"use client";

import { Parallax } from "react-parallax";

import { ChancellorMessage } from "@/modules/chancellor-message";
import { HeroSection } from "@/modules/hero-section";
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
        strength={200}
        className="h-[40vh]"
      />
    </>
  );
};
