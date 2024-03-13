import Image from "next/image";
import Marquee from "react-fast-marquee";

import { BERKSHIRE_SWASH } from "@/app/fonts";
import { Wrapper } from "@/components/wrapper";
import { cn } from "@/utils/cn";

interface WhatIsAalekhProps {}

export const WhatIsAalekh: React.FC<WhatIsAalekhProps> = ({}) => {
  const srollerImages = Array(11)
    .fill(0)
    .map((_, i) => {
      return (
        <Image
          alt="Sample Photo"
          src={`/what-is-aalekh/sample-image-${i + 1}.jpg`}
          width={302 / 1.5}
          height={200 / 1.5}
          key={i}
          className={`ml-3`}
        />
      );
    });
  return (
    <Wrapper className={`py-10 md:py-16`} id="about-aalekh">
      <div className={`pb-16 min-[920px]:pb-24`}>
        <span className={`text-4xl sm:text-5xl block font-medium`}>
          What is
        </span>
        <span
          className={cn(
            BERKSHIRE_SWASH.className,
            `text-6xl sm:text-8xl block ml-14 sm:ml-16 leading-8 sm:leading-10`
          )}
        >
          aale<span className={`text-primary`}>k</span>h?
        </span>
      </div>
      <div className={`leading-6 font-semibold para`}>
        <p className={`mb-4`}>
          Sanskrit for ‘writing’, <strong>AALKEH</strong> is Bennett
          University’s annual literary fest that aims to showcase
          <strong>‘the Power of Ink’</strong>. The two-day bilingual fest’s
          essence and spirit is to promote reading, writing, and learning with
          publishing support. It was envisioned to usher in, at the start of
          every new year, the goodness of books, the values they carry within
          and the worldliness they leave the readers with.
        </p>
        <p className={`mb-4`}>
          A joint endeavour proposed by Bennett University’s Learning Resource
          Centre and <strong>CEREBRUM</strong> – the official Literary and
          Debating Society at Bennett University, <strong>AALKEH</strong>{" "}
          recognizes and celebrates the might of the pen through a ‘Carnival of
          Books.’
        </p>
      </div>
      <div className={`mt-10 relative`}>
        <Marquee pauseOnHover speed={45}>
          {srollerImages}
        </Marquee>
        <Marquee pauseOnHover className={`mt-3`} speed={55} direction="right">
          {srollerImages}
        </Marquee>
        <div className="hidden sm:block absolute bottom-[-30px] right-[50px] z-50">
          <Image
            alt="Book Photo"
            src={`/what-is-aalekh-book.png`}
            width={320}
            height={189}
          />
        </div>
      </div>
    </Wrapper>
  );
};
