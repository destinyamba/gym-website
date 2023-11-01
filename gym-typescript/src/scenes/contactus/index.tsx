import { SELECTED_PAGE } from "@/shared/types";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import HText from "@/shared/HText";

type Props = {
  setSelectedPage: (value: SELECTED_PAGE) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
  const inputStyles = `mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white`;
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();
  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };
  return (
    <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
      <motion.div onViewportEnter={() => setSelectedPage(SELECTED_PAGE.HOME)}>
        {/* HEADER */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="md:w-3/5"
        >
          <HText>
            <span className="text-primary-500">join now</span> to get in shape
          </HText>
          <p className="my-5">
            Research shows that approximately 50% of people who start an
            exercise program drop out within the first 6 months.
          </p>
        </motion.div>
        {/* FORM & IMAGE */}
        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            className="mt-10 basis-3/5 md:mt-0"
          >
            <form
              target="_blank"
              onSubmit={onSubmit}
              method="POST"
              action="https://formsubmit.co/94715debfddab8def4c5bad6e85325d2"
            >
              <input
                className={inputStyles}
                type="text"
                placeholder="NAME"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type === "required" && "This field is required."}{" "}
                  {errors.name.type === "maxLength" &&
                    "Max length is 100 characters."}
                </p>
              )}
              <input
                className={inputStyles}
                type="email"
                placeholder="EMAIL"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="mt-1 text-primary-500">
                  {errors.email.type === "required" &&
                    "This field is required."}{" "}
                  {errors.email.type === "maxLength" &&
                    "Invalid email address."}
                </p>
              )}
              <textarea
                className={inputStyles}
                rows={4}
                cols={50}
                placeholder="MESSAGE"
                {...register("message", {
                  required: true,
                  maxLength: 250,
                })}
              />
              {errors.message && (
                <p className="mt-1 text-primary-500">
                  {errors.message.type === "required" &&
                    "This field is required."}{" "}
                  {errors.message.type === "maxLength" &&
                    "Max length is 100 characters."}
                </p>
              )}

              <button
                className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white"
                type="submit"
              >
                SUBMIT
              </button>
            </form>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.3, duration: 1 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            className="relative mt-16 basis-2/5 md:mt-0"
          >
            <div className="md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]">
              <img
                className="w-full"
                alt={`${ContactUsPageGraphic}`}
                src={ContactUsPageGraphic}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
