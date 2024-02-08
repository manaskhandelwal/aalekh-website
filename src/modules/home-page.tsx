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
    </>
  );
};
