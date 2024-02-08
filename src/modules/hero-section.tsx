import { Navigation } from "@/components/navigation";

interface HeroSectionProps {}

export const HeroSection: React.FC<HeroSectionProps> = ({}) => {
  return (
    <section
      style={{ backgroundImage: "url(./hero-section-bg.png)" }}
      className={`h-screen w-screen bg-cover`}
    >
      <Navigation />
    </section>
  );
};
