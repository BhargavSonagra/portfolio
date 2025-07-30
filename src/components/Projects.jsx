import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ProjectData from "../components/project_data.json";
import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

// Animation variants
const cardVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  whileHover: { scale: 1.03 },
};

// Reusable Card Component
const ProjectCard = ({ project, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("animate");
    } else {
      controls.start("initial");
    }
  }, [controls, inView]);
  // console.log(project.id)

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="initial"
      animate={controls}
      whileHover="whileHover"
      transition={{ duration: 0.2, delay: index * 0.2 }}
      className="bg-white dark:bg-gray-700 rounded-4xl glow-hover p-5 flex flex-col items-center text-center shadow-[10px_10px_25px_rgba(0,0,0,0.6)]"
    >
      <h3 className="text-xl font-semibold mb-4 px-2 py-1">{project.name}</h3>
      <img
        src={project.image}
        alt={project.title}
        className="h-40 w-[90%] object-cover rounded-md mb-4 shadow-md"
      />
      <p className="text-sm text-gray-700 dark:text-white mb-4 px-2">
        {project.description}
      </p>
      <NavLink
        to={`/projectDetails/${project.id}`}
        className="glow-hover flex items-center mt-3 gap-2 bg-gray-600 text-white py-1 px-4 rounded-full transition-transform hover:scale-105 shadow-md group"
      >
        {/* {console.log(project.id)} */}
        See Details
        <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
      </NavLink>

    </motion.div>
  );
};

const Project = () => {
  return (
    <section className="w-full mt-20 px-6 md:px-16">
      <h2
        className="text-4xl sm:text-6xl font-semibold text-center text-blue-600 mb-12 p-2 rounded-md"
        style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
      >
        My Projects
      </h2>

      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={30}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="w-full"
      >
        {ProjectData.map((project, index) => (
          <SwiperSlide key={index} className="p-6">
            <ProjectCard project={project} index={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Project;
