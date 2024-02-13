import { useMediaQuery } from "react-responsive";

import { Wrapper } from "@/components/wrapper";
import { minWidth } from "@/utils/media-query";

interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({}) => {
  const isMobile = useMediaQuery({ query: minWidth(500) });

  return (
    <>
      <Wrapper className={`py-10 md:py-20 bg-primary text-white`}>
        <div
          className={`flex gap-4 items-center md:items-start justify-between text-xl flex-col md:flex-row text-center md:text-left`}
        >
          <div className={`mb-16 md:mb-0`}>
            <h6 className={`text-3xl font-black mb-4`}>Contact Person</h6>
            <p>
              Dr. Sanjay Kataria <br />
              Librarian, Head of LRC <br />
              sanjay.kataria@bennett.edu.in <br />
              +91 98105 03341 <br />
            </p>
          </div>
          <div>
            <h6 className={`text-3xl font-black mb-4`}>Address</h6>
            <div
              className={`flex gap-8 items-center md:items-start flex-col lg:flex-row`}
            >
              <p>
                Plot Nos 8-11, TechZone II, <br />
                Greater Noida 201310, <br />
                UP. India. 201310 <br />
              </p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.9590369267953!2d77.58162287495004!3d28.450651192317874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cbf94deb6bc39%3A0x7ba6bedc9a2b537f!2sBennett%20University%20(Times%20of%20India%20Group)!5e0!3m2!1sen!2sin!4v1707510126183!5m2!1sen!2sin"
                width={isMobile ? "400" : "230"}
                height="150"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </Wrapper>{" "}
      <Wrapper
        className={`py-2 bg-[#8b182a] text-white text-center font-black`}
      >
        <span>
          &copy; {new Date().getFullYear()} Aalekh 2k24. All rights reserved.
        </span>
      </Wrapper>
    </>
  );
};
