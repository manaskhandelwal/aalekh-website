import { ChancellorMessage } from "@/modules/chancellor-message";
import { HeroSection } from "@/modules/hero-section";

interface HomePageProps {}

export const HomePage: React.FC<HomePageProps> = ({}) => {
  return (
    <>
      <HeroSection />
      <ChancellorMessage />
    </>
  );
};
