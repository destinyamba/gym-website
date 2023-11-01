import HText from "@/shared/HText";
import { BenefitType, SELECTED_PAGE } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/20/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import ActionButton from "@/shared/ActionButton";

type Props = {
  setSelectedPage: (value: SELECTED_PAGE) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  const benefits: Array<BenefitType> = [
    {
      icon: <HomeModernIcon className="h-6 w-6" />,
      title: "State of the Art Facilities",
      description:
        "To stay on top of your fitness goals, you need to be self-motivated, and for those times self-motivation doesn't work",
    },
    {
      icon: <UserGroupIcon className="h-6 w-6" />,
      title: "100's of Diverse Classes",
      description:
        "To stay on top of your fitness goals, you need to be self-motivated, and for those times self-motivation doesn't work",
    },
    {
      icon: <AcademicCapIcon className="h-6 w-6" />,
      title: "Dedicated Pro Trainers",
      description:
        "To stay on top of your fitness goals, you need to be self-motivated, and for those times self-motivation doesn't work",
    },
  ];

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.3 },
    },
  };
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SELECTED_PAGE.BENEFITS)}
      >
        {/* HEADER */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="md:my-5 md:w-3/5"
        >
          <HText>more than just a gym.</HText>
          <p className="my5 text-sm">
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </p>
        </motion.div>
        {/* BENEFITS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
          className="md:flex items-center justify-between gap-8 mt-5"
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
        {/* GRAPHICS & DESCRIPTION */}
        <div className="mt-15 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img alt="benefits-graphic" src={BenefitsPageGraphic} />
          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
              className="relative"
            >
              <div className="before:absolute before:-top-20 before:-left-20 before:z-1 before:content-abstractwaves">
                <div>
                  <HText>
                    millions of happy members getting{" "}
                    <span className="text-primary-500">fit</span>.
                  </HText>
                </div>
              </div>
            </motion.div>

            {/* DESCRIPTION */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.5, duration: 1 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Research shows that approximately 50% of people who start an
                exercise program drop out within the first 6 months. This begs
                the question of why. The reason is because of a lack of
                motivation – if they don’t want it badly enough, they will
                abandon it.
              </p>
              <p className="mb-5">
                You need motivation, either external or internal motivation to
                meet all your different goals, both in the fitness industry and
                in other areas of your life. Sometimes, motivational quotes are
                just what you need to get yourself up and running.
              </p>
            </motion.div>

            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                {" "}
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
