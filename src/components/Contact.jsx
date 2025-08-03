import { motion, useInView } from "framer-motion";
import { useRef, useMemo } from "react";
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
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const contactItems = useMemo(() => [
    {
      icon: <FaEnvelope className="text-blue-500 w-6 h-6" />,
      content: (
        <a href="mailto:sonagrabhargav@gmail.com" className="hover:underline text-white">
          Mail Me : sonagrabhargav@gmail.com
        </a>
      ),
    },
    {
      icon: <FaPhoneAlt className="text-green-500 w-6 h-6" />,
      content: (
        <a href="tel:+91 9979254736" className="hover:underline text-white">
          Call Me : +91 9979254736
        </a>
      ),
    },
    {
      icon: <FaMapMarkerAlt className="text-red-500 w-6 h-6" />,
      content: <span className="text-white">Rajkot, Gujarat, India</span>,
    },
    {
      icon: <FaLinkedin className="text-blue-700 w-6 h-6" />,
      content: (
        <a
          href="https://www.linkedin.com/in/bhargav-sonagra"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline text-white"
        >
          bhargav-sonagra
        </a>
      ),
    },
    {
      icon: <FaGithub className="text-black w-6 h-6" />,
      content: (
        <a
          href="https://github.com/BhargavSonagra"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline text-white"
        >
          BhargavSonagra
        </a>
      ),
    },
  ], []);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center mt-7 px-6 sm:px-12">
      <h2
        className="text-4xl sm:text-5xl font-bold text-blue-600 mb-10 text-center"
        style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
      >
        Contact Me
      </h2>

      <motion.div
        ref={ref}
        className="glass-card glow-hover shadow-lg rounded-2xl p-8 sm:p-12 w-full max-w-2xl space-y-6"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {contactItems.map((item, index) => (
          <motion.div
            key={index}
            className="flex items-center gap-4 text-gray-800"
            variants={itemVariants}
          >
            {item.icon}
            {item.content}
          </motion.div>
        ))}

        <div className="text-center">
          <motion.a
            href="/Bhargav_Resume.pdf"
            download="Bhargav_Resume.pdf"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button className="bg-blue-600 glass-card border-2 text-white px-4 py-2 rounded cursor-pointer">
              📄 Download My Resume
            </button>
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
