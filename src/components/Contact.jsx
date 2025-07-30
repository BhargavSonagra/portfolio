import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 }); // animate every scroll

  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gray-50 dark:bg-gray-900 px-6 sm:px-12 py-16">
      <h2 className="text-4xl sm:text-5xl font-bold text-blue-600 mb-10 text-center text-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]">
        Contact Me
      </h2>

      <motion.div
        ref={ref}
        className="bg-white dark:bg-gray-800 glow-hover shadow-lg rounded-2xl p-8 sm:p-12 w-full max-w-2xl space-y-6"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {[
          {
            icon: <FaEnvelope className="text-blue-500 w-6 h-6" />,
            content: (
              <a
                href="mailto:sonagrabhargav@gmail.com"
                className="hover:underline"
              >
                Mail Me : sonagrabhargav@gmail.com
              </a>
            ),
          },
          {
            icon: <FaPhoneAlt className="text-green-500 w-6 h-6" />,
            content: (
              <a href="tel:+91 9979254736" className="hover:underline">
                Call Me : +91 9979254736
              </a>
            ),
          },
          {
            icon: <FaMapMarkerAlt className="text-red-500 w-6 h-6" />,
            content: <span>Rajkot, Gujarat, India</span>,
          },
          {
            icon: <FaLinkedin className="text-blue-700 w-6 h-6" />,
            content: (
              <a
                href="https://www.linkedin.com/in/bhargav-sonagra"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                bhargav-sonagra
              </a>
            ),
          },
          {
            icon: (
              <FaGithub className="text-black w-6 h-6 dark:text-white" />
            ),
            content: (
              <a
                href="https://github.com/BhargavSonagra"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                BhargavSonagra
              </a>
            ),
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="flex items-center gap-4 text-gray-800 dark:text-white"
            variants={itemVariants}
          >
            {item.icon}
            {item.content}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Contact;
