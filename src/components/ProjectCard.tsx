'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { CheckCircleIcon, ExternalLinkIcon } from 'lucide-react';

export default function ProjectCard({
  project,
  index,
}: {
  project: any;
  index: number;
}) {
  const cardRef = useRef(null);
  const isEven = index % 2 === 0;

  // Animation variants for content
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.1 + 0.3,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  // Animation variants for image
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: 0.4,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    hover: {
      scale: 1.03,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      ref={cardRef}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      className={`w-full flex flex-col ${
        isEven ? 'md:flex-row' : 'md:flex-row-reverse'
      } gap-8 md:gap-12 my-20`}>
      {/* Image Section */}
      <motion.div
        className="w-full md:w-1/2 overflow-hidden rounded-3xl relative"
        variants={imageVariants}
        whileHover="hover">
        <div className="relative w-full aspect-[4/3] overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-blue-500/20 mix-blend-overlay z-10" />
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700"
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-tr from-emerald-500/30 via-transparent to-blue-500/30 opacity-0 z-20"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </motion.div>

      {/* Content Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <motion.div
          custom={1}
          variants={fadeInVariants}
          className="inline-flex items-center gap-2">
          <div className="h-0.5 w-6 bg-gradient-to-r from-emerald-400 to-sky-400" />
          <span className="text-sm font-medium text-emerald-400 uppercase tracking-wider">
            {project.company} • {project.year}
          </span>
        </motion.div>

        <motion.h3
          custom={2}
          variants={fadeInVariants}
          className="font-serif text-3xl md:text-4xl mt-4 font-bold">
          {project.title}
        </motion.h3>

        <motion.div custom={3} variants={fadeInVariants} className="mt-6">
          <ul className="space-y-3">
            {project.results.map((result: any, i: number) => (
              <motion.li
                key={i}
                custom={i + 4}
                variants={fadeInVariants}
                className="flex items-start gap-3 text-white/70">
                <CheckCircleIcon className="size-5 text-emerald-400 mt-1 flex-shrink-0" />
                <span>{result.title}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div custom={7} variants={fadeInVariants} className="mt-8">
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="group bg-gradient-to-r from-emerald-500 to-sky-500 h-12 px-6 rounded-xl font-medium inline-flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 hover:shadow-xl hover:shadow-emerald-500/30 transition-all">
              <span>View Project</span>
              <ExternalLinkIcon className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.button>
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
}
