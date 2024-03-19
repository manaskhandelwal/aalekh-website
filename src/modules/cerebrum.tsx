import Image from "next/image";
import Marquee from "react-fast-marquee";

import { BERKSHIRE_SWASH } from "@/app/fonts";
import { Wrapper } from "@/components/wrapper";
import { cn } from "@/utils/cn";

interface CerebrumProps {}

export const Cerebrum: React.FC<CerebrumProps> = ({}) => {
  const srollerImages = Array(11)
    .fill(0)
    .map((_, i) => {
      return (
        <Image
          alt="Photo related to aalaekh"
          src={`/what-is-aalekh/what-is-aalekh-${i + 1}.webp`}
          width={201}
          height={133}
          key={i}
          className={`ml-3`}
        />
      );
    });

  return (
    <Wrapper className={`py-10 md:py-16`} id="cerebrum">
      <div
        className={`pb-16 min-[920px]:pb-24 flex items-center gap-5 min-[500px]:gap-10 flex-col min-[500px]:flex-row text-center min-[500px]:text-left`}
      >
        <Image
          alt="Cerebrum Logo"
          src={`/cerebrum-logo.webp`}
          width={(203 / 100) * 70}
          height={(160 / 100) * 70}
        />
        <div>
          <h5
            className={cn(
              BERKSHIRE_SWASH.className,
              `text-4xl sm:text-6xl mb-2`
            )}
          >
            Cerebrum
          </h5>
          <span
            className={cn(`text-primary text-2xl sm:text-3xl block font-black`)}
          >
            Official Debating and Literary Society
          </span>
        </div>
      </div>

      <div className={`mb-16 relative`}>
        <Marquee pauseOnHover speed={45}>
          {srollerImages}
        </Marquee>
        <Marquee pauseOnHover className={`mt-3`} speed={55} direction="right">
          {srollerImages}
        </Marquee>
        <div className="hidden sm:block absolute bottom-[-30px] right-[50px] z-50">
          <Image
            alt="Book Photo"
            src={`/cerebrum.png`}
            width={314}
            height={260}
          />
        </div>
      </div>

      <div className={`leading-6 font-semibold para`}>
        <p className={`mb-4`}>
          Akin to the largest part of the brain that conditions emotions, speech
          and the five senses of the human body,{" "}
          <strong>
            CEREBRUM – the official Literary & Debating Society at Bennett
            University
          </strong>{" "}
          – represents the scholastic and performative interests of the student
          cohort by acting as a platform for self-expression through various
          channels of literature and public speaking.
        </p>
        <p className={`mb-4`}>
          From an active quizzing circle and a lively debating society, to
          thoughtful book reviews and soulful spoken word – the club CEREBRUM
          aims to channel the bardic energy into a full-fledged nucleus of
          artistic excellence and caliber. It is an abode to all artists who
          examine their worlds and celebrate life through ink and paper.
        </p>
      </div>
    </Wrapper>
  );
};
