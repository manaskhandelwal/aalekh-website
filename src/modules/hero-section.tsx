"use client";

import clsx from "clsx";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

import { Navigation } from "@/components/navigation";
import { Wrapper } from "@/components/wrapper";
import { minWidth } from "@/utils/media-query";

interface HeroSectionProps {}

export const HeroSection: React.FC<HeroSectionProps> = ({}) => {
  const isLaptop = useMediaQuery({ query: minWidth(1180) });

  return (
    <section
      style={{ backgroundImage: "url(./hero-section-bg.png)" }}
      className={`h-screen w-screen bg-cover overflow-hidden`}
    >
      <Navigation />
      <Wrapper className={`relative h-[calc(100vh-100px)]`}>
        <Image
          alt="lrc and cerebrum logo"
          src={"/aalekh-hero-banner.png"}
          width={580}
          height={422.17}
          priority
          quality={100}
          className={clsx(
            `absolute`,
            !isLaptop
              ? `left-[50%] translate-x-[-50%] max-w-[80vw] top-12`
              : "top-12"
          )}
          draggable={false}
        />

        <Image
          alt="books"
          src={"/hero-section-books.png"}
          width={(435.33 / 100) * (isLaptop ? 80 : 50)}
          height={(450 / 100) * (isLaptop ? 80 : 50)}
          priority
          quality={100}
          className={clsx(isLaptop ? `bottom-0 right-12 absolute` : `hidden`)}
          draggable={false}
        />
      </Wrapper>
    </section>
  );
};
