import Image from "next/image";

import { BERKSHIRE_SWASH } from "@/app/fonts";
import { Wrapper } from "@/components/wrapper";
import { cn } from "@/utils/cn";

interface ItineraryProps {}

export const Itinerary: React.FC<ItineraryProps> = ({}) => {
  return (
    <Wrapper className={`py-10 md:py-16`} id="itinerary">
      <div className={`pb-16 min-[920px]:pb-24`}>
        <span
          className={cn(
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
