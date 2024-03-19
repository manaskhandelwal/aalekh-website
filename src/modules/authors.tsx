import Image from "next/image";
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import { BERKSHIRE_SWASH } from "@/app/fonts";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/carousel";
import { Wrapper } from "@/components/wrapper";
import { cn } from "@/utils/cn";
import { minWidth } from "@/utils/media-query";

interface AuthorsProps {}

const PREVIOUS_AUTHOR_DATA = [
  {
    image: "/authors/avijit-ghosh.jpg",
    name: "Mr. Avijit Ghosh",
  },
  {
    image: "/authors/harshali-singh.jpg",
    name: "Dr. Harshali Singh",
  },
  {
    image: "/authors/kanchana-banerjee.jpg",
    name: "Kanchana Banerjee",
  },
  {
    image: "/authors/suvir-saran.jpg",
    name: "Suvir Saran",
  },
  {
    image: "/authors/jitender-girdhar.jpg",
    name: "Jitender Girdhar",
  },
  {
    image: "/authors/ujwal-kalra.jpg",
    name: "Ujwal Kalra",
  },
  {
    image: "/authors/sidharth-bala-krishna.jpg",
    name: "Mr. Sidharth BalaKrishna",
  },
  {
    image: "/authors/gaurav-wasan.jpg",
    name: "Mr. Gaurav Wasan",
  },
  {
    image: "/authors/prachi-gupta.jpg",
    name: "Ms. Prachi Gupta",
  },
  {
    image: "/authors/dipankar-mukherjee.jpg",
    name: "Mr. Dipankar Mukherjee",
  },
  {
    image: "/authors/parvati-sharma.jpg",
    name: "Ms. Parvati Sharma",
  },
  {
    image: "/authors/rajnish-tomar.jpg",
    name: "Mr. Rajnish Tomar",
  },
  {
    image: "/authors/radhika-singh.jpg",
    name: "Ms. Radhika Singh",
  },
  {
    image: "/authors/mimansa-singh.jpg",
    name: "Ms. Mimansa Singh",
  },
  {
    image: "/authors/sutapa-basu.jpg",
    name: "Ms. Sutapa Basu",
  },
];

export const Authors: React.FC<AuthorsProps> = ({}) => {
  const [changeButton, setChangeButton] = useState<boolean>(false);
  const isLaptop = useMediaQuery({ query: minWidth("lg") });
  const carouselButtonClasses = `h-[40px] w-[40px] lg:h-[60px] lg:w-[50px] rounded-[14px]`;

  useEffect(() => {
    setChangeButton(isLaptop);
  }, [isLaptop]);

  return (
    <Wrapper
      style={{ backgroundImage: "url(./testimonial-bg.webp)" }}
      className={`bg-cover overflow-hidden py-20 h-fit`}
    >
      <div className={`pb-6 min-[920px]:pb-10`}>
        <Image
          alt="Aalekh Logo"
          src={`/aalekh-logo.png`}
          width={289}
          height={100}
        />
        <span
          className={cn(
            BERKSHIRE_SWASH.className,
            `text-4xl ml-20 sm:ml-32 sm:text-5xl block font-bold text-primary`
          )}
        >
          Authors
        </span>
      </div>

      <div
        className={`my-8 flex justify-center flex-col gap-16 md:flex-row md:gap-36`}
      >
        <div className={`flex gap-4 flex-col lg:flex-row`}>
          <div className={`flex-1 flex flex-col items-center`}>
            <h4
              className={cn(
                BERKSHIRE_SWASH.className,
                `text-3xl font-black text-primary text-center mb-8`
              )}
            >
              Chief Guest
            </h4>
            <Image
              alt={`Photo of Mr. Shiv Khera`}
              src={"/authors/shiv-khera.png"}
              width={215}
              height={277}
            />
            <div className={`text-center mt-4`}>
              <h4 className={`text-2xl font-black`}>Mr. Shiv Khera</h4>
            </div>
          </div>
        </div>

        <div className={`flex gap-4 flex-col lg:flex-row`}>
          <div className={`flex-1 flex flex-col items-center`}>
            <h4
              className={cn(
                BERKSHIRE_SWASH.className,
                `text-3xl font-black text-primary text-center mb-8`
              )}
            >
              Guest of Honour
            </h4>
            <Image
              alt={`Photo of Smt. Mridula Garg`}
              src={"/authors/mridula-garg.png"}
              width={240}
              height={280}
            />
            <div className={`text-center mt-2`}>
              <h4 className={`text-2xl font-black`}>Smt. Mridula Garg</h4>
            </div>
          </div>
        </div>
      </div>

      <h4
        className={cn(
          BERKSHIRE_SWASH.className,
          `text-3xl font-black text-primary text-center pt-12 mb-6`
        )}
      >
        Guest Authors
      </h4>

      <Carousel
        className={`w-full lg:w-2/3 m-auto`}
        opts={{
          loop: true,
        }}
      >
        <CarouselContent className={`pb-10 sm:pb-12 lg:pb-0`}>
          {PREVIOUS_AUTHOR_DATA.map((g, i) => {
            return (
              <CarouselItem key={i} className={`basis-3/3 md:basis-1/3`}>
                <div className={`flex gap-4 flex-col lg:flex-row`}>
                  <div className={`flex-1 flex flex-col items-center`}>
                    <Image
                      alt={`Photo of ${g.name}`}
                      src={g.image}
                      width={220}
                      height={220}
                      className={`rounded-2xl`}
                    />
                    <div className={`text-center mt-4`}>
                      <h4 className={`text-xl font-black`}>{g.name}</h4>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious
          variant={"default"}
          className={cn(
            carouselButtonClasses,
            !changeButton
              ? `top-[100%] left-[48%] translate-x-[-100%]`
              : "ml-[-40px]"
          )}
        />
        <CarouselNext
          variant={"default"}
          className={cn(
            carouselButtonClasses,
            !changeButton
              ? `top-[100%] right-[48%] translate-x-[100%]`
              : "mr-[-40px]"
          )}
        />
      </Carousel>
    </Wrapper>
  );
};
