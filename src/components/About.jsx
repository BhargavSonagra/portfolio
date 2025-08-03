import { motion, useInView } from "framer-motion";
import { useRef, useMemo } from "react";
import { FaReact, FaCss3Alt, FaBootstrap, FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const About = () => {
  const skillRef = useRef(null);
  const isInView = useInView(skillRef, { once: false, amount: 0.3 });

  const skills = useMemo(() => [
    { name: "React", icon: <FaReact className="text-blue-500 w-6 h-6" /> },
    { name: "JavaScript (ES6+)", icon: <IoLogoJavascript className="text-yellow-500 w-6 h-6" /> },
    { name: "HTML/CSS", icon: <FaCss3Alt className="text-blue-500 w-6 h-6" /> },
    { name: "Tailwind CSS", icon: <RiTailwindCssFill className="text-blue-500 w-6 h-6" /> },
    { name: "Bootstrap", icon: <FaBootstrap className="text-blue-400 w-6 h-6" /> },
    { name: "Git/GitHub", icon: <FaGithub className="w-6 h-6" /> },
  ], []);

  return (
    <div className="mt-15 overflow-y-auto rounded-4xl">
      <h1 className="text-4xl sm:text-6xl font-semibold text-center text-blue-600 m-9 text-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]">
        About Me
      </h1>

      <div className="text-white px-6 sm:px-16 py-10 flex flex-col sm:flex-row gap-8 items-center justify-center w-full">
        {/* Left Section */}
        <motion.div
          className="w-full sm:w-1/2 text-center md:pl-15 sm:text-left sm:text-xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <p>
            I am a Computer Science and Engineering<br />
            graduate with a focus on Front-End Development.<br />
            I enjoy building responsive and interactive web applications<br />
            using React, JavaScript, HTML, and CSS.
          </p>
        </motion.div>

        {/* Right Section */}
        <div className="w-full sm:w-1/2">
          <h3 className="text-2xl sm:text-3xl font-semibold text-center text-blue-600 mb-5">
            Skills
          </h3>

          <motion.ul
            ref={skillRef}
            className="w-full sm:w-1/2 text-left text-lg sm:text-xl space-y-2 mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {skills.map((skill, index) => (
              <motion.li
                key={index}
                className="flex items-center gap-3 glow-text-hover"
                variants={itemVariants}
              >
                {skill.icon}
                <span>{skill.name}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </div>
  );
};

export default About;
