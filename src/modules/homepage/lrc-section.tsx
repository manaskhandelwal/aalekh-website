"use client";

import Image from "next/image";

import { BERKSHIRE_SWASH } from "@/app/fonts";
import { Wrapper } from "@/components/wrapper";
import { cn } from "@/utils/cn";

interface LrcSectionProps {}

export const LrcSection: React.FC<LrcSectionProps> = ({}) => {
  return (
    <Wrapper className={`pt-10 md:pt-16`} id="about-lrc">
      <div className={`pb-16 min-[920px]:pb-24`}>
        <span className={`text-4xl sm:text-5xl block font-medium`}>
          Know About
        </span>
        <span
          className={cn(
            BERKSHIRE_SWASH.className,
            `heading ml-10 sm:ml-16 leading-[100px]`
          )}
        >
          L<span className={`text-primary`}>R</span>C
        </span>
        <span
          className={`text-2xl sm:text-4xl block font-medium ml-10 sm:ml-16`}
        >
          Learning Resource Center
        </span>
      </div>
      <div
        className={`flex gap-10 md:gap-20 justify-between flex-col md:flex-row`}
      >
        <div className={`leading-6 font-semibold w-[100%] para`}>
          <p className={`mb-4`}>
            Libraries at Bennet University are popularly known as the{" "}
            <strong>Learning Resource Centre (LRC)</strong>. These LRCs have
            reimagined traditional study with state-of-the-art infrastructure,
            fostering an ideal environment for reading and conducting research
            activities.
          </p>
          <p>
            In addition to housing academic print and non-print collections from
            globally renowned publishers, the LRC features dedicated shelves for
            leisure reading too. Author Workshops, Webinars, Training Programs,
            Quizzes, International Conferences and Book Exhibitions to bolster
            learning endeavors are also frequently organized by the team.
          </p>
        </div>
        <div
          className={`w-full grid place-items-center translate-y-0 pb-16 lg:pb-0 lg:translate-y-[-160px]`}
        >
          <Image
            alt="Sample Photo"
            src={`/lrc-masonry.webp`}
            width={400}
            height={402}
          />
        </div>
      </div>
    </Wrapper>
  );
};
