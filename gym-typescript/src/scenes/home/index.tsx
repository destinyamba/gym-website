import { SELECTED_PAGE } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SELECTED_PAGE) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      {/* IMAGE & MAIN HEADER */}
      <motion.div
        onViewportEnter={() => setSelectedPage(SELECTED_PAGE.HOME)}
        className="md:flex mx-auto w-5/6 items-center justify-center h-5/6"
      >
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* HEADINGS */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="md:-mt-20"
          >
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                <img alt="home-page-text" src={HomePageText} />
              </div>
            </div>
            <p className="mt-8 text-sm">
              {" "}
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of.. Get Your Dream
              Body Now.
            </p>
          </motion.div>
          {/* ACTIONS */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.5, duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="mt-8 flex items-center gap-8"
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SELECTED_PAGE.CONTACTUS)}
              href={`#${SELECTED_PAGE.CONTACTUS}`}
            >
              Learn More
            </AnchorLink>
          </motion.div>
        </div>

        {/* IMAGE */}
        <div className="z-10 flex basis-3/5 justify-center md:ml-40 md:mt-16 md:justify-items-end">
          <img alt="home-page-graphic" src={HomePageGraphic} />
        </div>
      </motion.div>
      {/* SPONSORS */}
      {/* Only show this when it is above medium screens. */}
      {isAboveMediumScreens && (
        <div className="h-[150px] w-full bg-primary-100">
          <div className="mx-auto w-5/6 py-12">
            <div className="flex mx-auto w-5/6 items-center justify-between md:h-5/6">
              <img alt="sponsor-forbes" src={SponsorForbes} />
              <img alt="sponsor-fortune" src={SponsorFortune} />
              <img alt="sponsor-redbull" src={SponsorRedBull} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
