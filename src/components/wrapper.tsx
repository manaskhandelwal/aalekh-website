import clsx from "clsx";
import { DetailedHTMLProps } from "react";

interface WrapperProps
  extends DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
  children: React.ReactNode;
}

export const Wrapper: React.FC<WrapperProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <section
      className={clsx(
        `max-w-[1536px] mx-auto px-10 md:px-14 lg:px-16`,
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
};
