"use client";

import { ArrowUpIcon } from "@radix-ui/react-icons";
import { useWindowScroll } from "@uidotdev/usehooks";
import clsx from "clsx";

import { Button } from "@/components/button";

interface ScrollToTopProps {}

export const ScrollToTop: React.FC<ScrollToTopProps> = ({}) => {
  const [{ y }, scrollTo] = useWindowScroll();

  return (
    <Button
      variant={"floating"}
      size={"rounded"}
      className={clsx(
        `z-[999999] bottom-10 right-10`,
        y && y >= 600 ? "fixed" : "hidden"
      )}
      onClick={() => scrollTo({ left: 0, top: 0, behavior: "smooth" })}
    >
      <span>
        <ArrowUpIcon width={26} height={26} />
      </span>
    </Button>
  );
};
