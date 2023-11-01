import { ClassType, SELECTED_PAGE } from "@/shared/types";
import HText from "@/shared/HText";
import { motion } from "framer-motion";
import { classes } from "@/shared/content";
import Class from "./Class";

type Props = {
  setSelectedPage: (value: SELECTED_PAGE) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-10">
      {/* HEADER, DESCRIPTION & CAROUSEL */}
      <motion.div
        onViewportEnter={() => setSelectedPage(SELECTED_PAGE.OURCLASSES)}
        className="mt-16 py-6"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="mx-auto w-5/6"
        >
          <div className="md:w-3/5">
            <HText>our classes</HText>
            <p className="py-5 text-sm">
              We provide world class fitness equipment, trainers and classes to
              get you to your ultimate fitness goals with ease. We provide true
              care into each and every member.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
