import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard"; // Still using ProjectCard — rename if needed


const Services = () => {
  const leftColumnServices = [
    {
      title: "Database Consultation",
      url: "https://cdn.cuberto.com/cb/projects/qvino/cover.mp4",
    },
    {
      title: "Web Development",
      url: "https://cdn.cuberto.com/cb/projects/flipaclip/cover.mp4",
    },
  ];

  const rightColumnServices = [
    {
      title: "Cloud Consultation",
      url: "https://cdn.cuberto.com/cb/projects/kzero/cover.mp4",
    },
    {
      title: "VMware Consultation",
      url: "https://cdn.cuberto.com/cb/projects/zelt/cover.mp4",
    },
  ];

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="bg-gradient-to-br from-stone-950 via-black to-stone-900 text-white h-fit pt-2 md:pt-0 pb-0 md:pb-32 px-6 md:px-32 md:rounded-t-[4rem] overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-5xl md:text-9xl py-14 md:py-28 font-light"
      >
        <div>Our</div>
        <div className="flex items-center md:items-end my-1">
          <div className="h-14 md:h-28 w-20 md:w-40 rounded-full overflow-hidden shadow-xl ring-2 ring-white/20">
            <video
              src="https://cdn.cuberto.com/cb/home/featured/header.mp4?2"
              className="object-cover"
              loop
              autoPlay
              muted
            ></video>
          </div>
          <motion.span
            className="font-[Bebas Neue], sans-serif tracking-widest text-[3.5rem] md:text-[9.5rem] ml-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            SERVICES
          </motion.span>
        </div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col md:flex-row md:gap-x-14"
      >
        <div className="w-[94%] mx-auto md:mx-0 md:w-[36%] space-y-10">
          {leftColumnServices.map((service, index) => (
            <motion.div variants={cardVariants} key={service.title}>
              <ProjectCard title={service.title} url={service.url} />
            </motion.div>
          ))}
        </div>

        <div className="w-[94%] mx-auto md:mx-0 md:w-[36%] md:mt-52 space-y-10">
          {rightColumnServices.map((service, index) => (
            <motion.div variants={cardVariants} key={service.title}>
              <ProjectCard title={service.title} url={service.url} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Services;
