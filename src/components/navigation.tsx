"use client";

import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

import { BERKSHIRE_SWASH } from "@/app/fonts";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/sheet";
import { Wrapper } from "@/components/wrapper";
import { minWidth } from "@/utils/media-query";

interface NavigationProps {}

const navigationLinksData = [
  { label: "About Aalekh", herf: "#" },
  { label: "About LRC", herf: "#" },
  {
    label: (
      <span>
        Aalekh Memorial 2<span className={clsx("text-primary")}>k</span>
        23
      </span>
    ),
    herf: "#",
  },
  { label: "Cerebrum", herf: "#" },
  { label: "Contact Us", herf: "#" },
];

const navLinks = (className?: string) =>
  navigationLinksData.map(({ label, herf }, i) => {
    return (
      <Link
        href={herf}
        className={clsx(`hover:text-primary duration-200`, className)}
        key={i}
      >
        {label}
      </Link>
    );
  });

export const Navigation: React.FC<NavigationProps> = ({}) => {
  const isLaptop = useMediaQuery({ query: minWidth(1180) });
  const isSmallScreen = useMediaQuery({ query: minWidth(480) });

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
        <div className={clsx(BERKSHIRE_SWASH.className, "flex gap-10")}>
          {navLinks()}
        </div>
      ) : (
        <Sheet>
          <SheetTrigger className={`grid`} aria-label={"Open Menu"}>
            <HamburgerMenuIcon
              className={`w-5 h-5 min-[340px]:w-7 min-[340px]:h-7 text-canary`}
            />
          </SheetTrigger>
          <SheetContent
            className={clsx(
              "max-w-[100vw] min-w-[100vw] sm:min-w-[50vw] md:min-w-[40vw]"
            )}
          >
            <SheetHeader>
              <SheetTitle>{cerebrumLogo}</SheetTitle>
            </SheetHeader>

            <div
              className={clsx(
                BERKSHIRE_SWASH.className,
                `my-16 flex flex-col gap-10 text-center`
              )}
            >
              {navLinks()}
            </div>
          </SheetContent>
        </Sheet>
      )}
    </Wrapper>
  ) : null;
};
