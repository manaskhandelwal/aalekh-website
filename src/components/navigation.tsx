"use client";

import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

import { BERKSHIRE_SWASH } from "@/app/fonts";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/sheet";
import { Wrapper } from "@/components/wrapper";
import { cn } from "@/utils/cn";
import { minWidth } from "@/utils/media-query";

interface NavigationProps {}

const navigationLinksData = [
  { label: "About Aalekh", herf: "#about-aalekh" },
  { label: "About LRC", herf: "#about-lrc" },
  {
    label: (
      <span>
        Aalekh Memorial 2<span className={cn("text-primary")}>k</span>
        23
      </span>
    ),
    herf: "#memorial",
  },
  { label: "Cerebrum", herf: "#cerebrum" },
  { label: "Itinerary", herf: "#itinerary" },
];

export const Navigation: React.FC<NavigationProps> = ({}) => {
  const isLaptop = useMediaQuery({ query: minWidth(1180) });
  const isSmallScreen = useMediaQuery({ query: minWidth(480) });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [logoWidth, setLogoWidth] = useState(149);
  const [logoHeight, setLogoHeight] = useState(50);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setLogoWidth(isLaptop ? 149 : 137);
    setLogoHeight(isLaptop ? 50 : 46);
    setMounted(true);
  }, [isLaptop]);

  const cerebrumLogo = (
    <Link href={"https://library.bennett.edu.in/"} target="_blank">
      <Image
        alt="lrc and cerebrum logo"
        src={"/lrc-cerebrum-logo.png"}
        width={logoWidth}
        height={50}
        priority
        quality={100}
      />
    </Link>
  );

  const navLinks = (className?: string) => {
    return navigationLinksData.map(({ label, herf }, i) => {
      return (
        <Link
          key={i}
          href={herf}
          className={cn(`hover:text-primary duration-200`, className)}
          onClick={(e) => {
            setIsSidebarOpen(false);
          }}
        >
          {label}
        </Link>
      );
    });
  };

  return mounted ? (
    <Wrapper className={`flex justify-between items-center py-6`}>
      <div className={`flex gap-2`}>
        {cerebrumLogo}

        {isSmallScreen ? (
          <>
            <div className={`border border-slate-400 mx-2`}></div>
            <Link href={"https://www.bennett.edu.in/"} target="_blank">
              <Image
                alt="bennett university logo"
                src={"/bennett-colored-logo.png"}
                width={logoWidth}
                height={logoHeight}
                priority
                quality={100}
              />
            </Link>
          </>
        ) : null}
      </div>

      {isLaptop ? (
        <div className={cn(BERKSHIRE_SWASH.className, "flex gap-10")}>
          {navLinks()}
        </div>
      ) : (
        <Sheet open={isSidebarOpen}>
          {!isSidebarOpen ? (
            <div
              className={`grid cursor-pointer`}
              aria-label={"Open Menu"}
              onClick={() => setIsSidebarOpen(true)}
            >
              <HamburgerMenuIcon
                className={`w-5 h-5 min-[340px]:w-7 min-[340px]:h-7`}
              />
            </div>
          ) : null}
          <SheetContent
            className={cn(
              "max-w-[100vw] min-w-[100vw] sm:min-w-[50vw] md:min-w-[40vw] px-5 md:px-8 lg:px-16"
            )}
          >
            <SheetHeader>
              <div
                className={`flex justify-between items-center flex-row mx-2 md:mx-8`}
              >
                <SheetTitle>{cerebrumLogo}</SheetTitle>{" "}
                {isSidebarOpen ? (
                  <div
                    className={`grid cursor-pointer`}
                    aria-label={"Close Menu"}
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    <Cross1Icon
                      className="w-5 h-5 min-[340px]:w-7 min-[340px]:h-7"
                      strokeWidth={2.7}
                    />
                  </div>
                ) : null}
              </div>
            </SheetHeader>

            <div
              className={cn(
                BERKSHIRE_SWASH.className,
                `my-16 flex flex-col gap-10 text-center`
              )}
            >
              {navLinks("text-lg sm:text-2xl")}
            </div>
          </SheetContent>
        </Sheet>
      )}
    </Wrapper>
  ) : null;
};
