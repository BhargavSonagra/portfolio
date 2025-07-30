
import About from "./About";
import Contact from "./Contact";
import Project from "./Projects";
import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";


const Home = () => {
  return (
    <>
      <div
        className="w-full text-black dark:text-white p-6 md:px-16 pt-30 flex flex-col md:flex-row items-center justify-center relative shadow-[6px_6px_12px_rgba(0,0,0,1 shadow-lg)"

      >
        {/* Text Section */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 pl-0 md:pl-13 text-center md:text-left space-y-6 z-10"
        >
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="group text-4xl md:text-5xl font-bold "
          >
            <h1 className="group text-4xl md:text-5xl font-bold text-white">
              <span className="transition-all duration-300 group-hover:text-blue-500 group-hover:drop-shadow-[0_0_15px_#3b82f6]">
                Welcome
              </span>
            </h1>

          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-lg md:text-xl leading-relaxed"
          >
            Hi, I'm <span className="text-blue-500 font-semibold">Bhargav</span>,<br /> a passionate Front-End Developer!
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="text-base md:text-lg"
          >
            Explore my work and projects below.
          </motion.p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ scale: 0.4, opacity: 0, x: -50 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className=" group mt-10 md:mt-0 pl-20 md:pl-10 w-full md:w-1/2 flex justify-center items-center z-10"
        >
          <img
            src="/images/person.png"
            alt="Person Typing"
            className="transition-all duration-300 group-hover:text-blue-500 group-hover:drop-shadow-[0_0_15px_#3b82f6] w-60 bg-transparent sm:w-72 md:w-80 lg:w-96 h-auto scale-x-[-1]"
          />
        </motion.div>
      </div>

      <About />
      <Project />
      <Contact />
    </>
  );
};

export default Home;
