// import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  const [text] = useTypewriter({
    words: ["Professional Coder.", "Full Stack Developer.", "Electrical Engineer."],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#58C0A9]' />
          <div className='w-1 sm:h-80 h-40 teal-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            <span className='text-white]'>Christopher Zavala</span>
          </h1>
          <h2 className="text-3xl sm:text-2xl font-bold text-[#58C0A9]">
            {text}
            <Cursor
              cursorBlinking="false"
              cursorStyle="|"
              cursorColor="white"
            />
          </h2>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          As a full-stack developer, my focus is on building responsive web <br className='sm:block hidden' />
          applications that are both elegant and efficient. With a background<br className='sm:block hidden' />
          in Electrical Engineering, I bring a unique perspective to my work. <br className='sm:block hidden' />
          I am passionate about using modern technologies like Mongoose,<br className='sm:block hidden' />
          Express, React, and Node to create user-friendly applications<br className='sm:block hidden' />
          that solve real-world problems.
          </p>

        </div>
      </div>
      <br>
      </br>
      
      <ComputersCanvas />
    </section>
  );
};

export default Hero;



