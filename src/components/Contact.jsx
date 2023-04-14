import React from "react";
import { motion } from "framer-motion";
import { EarthCanvas, StarsCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import Title from "../Title";

const Contact = () => {
 


  return (
    <section id="contact" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="" des="Contact Me" />
      </div>
      <motion.div
        className="w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="w-full h-auto flex flex-col lg:flex-row justify-between">
          <div className="w-full lg:w-1/2 xl:w-1/2 flex flex-col gap-8 p-4 lg:p-8 rounded-lg shadow-shadowOne">
            <form
              className="w-full flex flex-col gap-4 lg:gap-6 py-2 lg:py-5"
              action="https://getform.io/f/4534228e-af38-4ee5-95a4-9fbb9a8d7937"
              method="POST"
            >
              <div className="flex flex-col gap-2">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Your name
                </p>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none w-full lg:w-auto"
                />
              </div>

              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide mt-0.5">
                  Email
                </p>
                <input
                  type="text"
                  name="email"
                  placeholder="Enter your email"
                  className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none w-full"
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide mt-0.5">
                  Message
                </p>
                <textarea
                  name="message"
                  placeholder="Enter your message"
                  cols="30"
                  rows="8"
                  className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none w-full"
                ></textarea>
              </div>

              <div className="w-full">
                <button className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-[#58C0A9] border-transparent">
                  Send Me A Message
                </button>
              </div>
            </form>
          </div>
          <motion.div
            variants={slideIn("right", "tween", 0.2, 1)}
            className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
          >
            <EarthCanvas />
          </motion.div>
        </div>
        <StarsCanvas />
      </motion.div>
      </section>
  );
};

export default SectionWrapper(Contact, "contact");
