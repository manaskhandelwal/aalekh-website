import clsx from "clsx";
import Image from "next/image";

import { BERKSHIRE_SWASH } from "@/app/fonts";
import { Wrapper } from "@/components/wrapper";

interface ItineraryProps {}

export const Itinerary: React.FC<ItineraryProps> = ({}) => {
  return (
    <Wrapper className={`py-28 md:py-36`}>
      <div className={`pb-20 min-[920px]:pb-32`}>
        <span
          className={clsx(
            BERKSHIRE_SWASH.className,
            `text-6xl sm:text-8xl block leading-6 sm:leading-10`
          )}
        >
          Itiner<span className={`text-primary`}>a</span>ry
        </span>
      </div>
      <div className={`w-full`}>
        <Image
          alt="Itinerary of Aalekh 2024"
          src={"/itinerary.jpg"}
          width={1000}
          height={703}
          quality={100}
          className={`m-auto`}
        />
      </div>
    </Wrapper>
  );
};
