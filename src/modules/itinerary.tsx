import { BERKSHIRE_SWASH } from "@/app/fonts";
import { Wrapper } from "@/components/wrapper";
import { cn } from "@/utils/cn";

interface ItineraryProps {}

export const Itinerary: React.FC<ItineraryProps> = ({}) => {
  return (
    <Wrapper className={`py-10 md:py-16`} id="itinerary">
      <div className={`pb-16 min-[920px]:pb-24`}>
        <span className={cn(BERKSHIRE_SWASH.className, `heading`)}>
          Itiner<span className={`text-primary`}>a</span>ry
        </span>
      </div>
      <div className={`w-full`}>
        {/* <Image
          alt="Itinerary of Aalekh 2024"
          src={"/itinerary.jpg"}
          width={1000}
          height={703}
          quality={100}
          className={`m-auto`}
        /> */}

        <p className={`text-center para`}>comming soon</p>
      </div>
    </Wrapper>
  );
};
