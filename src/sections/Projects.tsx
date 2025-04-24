'use client';
import { portfolioProjects } from '@/data/projects';
import { motion } from 'framer-motion';

import ProjectCard from '@/components/ProjectCard';

export const ProjectsSection = () => {
  return (
    <section className="py-20 md:py-32 overflow-hidden" id="projects">
      <div className="container relative">
        {/* Background gradient element */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-48 bg-gradient-to-r from-emerald-500/20 via-sky-500/20 to-purple-500/20 blur-3xl rounded-full -z-10 opacity-50" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-0.5 w-6 bg-gradient-to-r from-emerald-400 to-sky-400" />
            <span className="text-sm font-medium text-emerald-400 uppercase tracking-wider">
              My Work
            </span>
            <div className="h-0.5 w-6 bg-gradient-to-r from-sky-400 to-emerald-400" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-white/70">
            From concept to completion, see how I transform ideas into engaging
            digital experiences that solve real problems.
          </p>
        </motion.div>

        <div className="relative">
          {/* Decorative elements */}
          <div className="absolute -left-40 top-1/3 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl -z-10" />
          <div className="absolute -right-40 top-2/3 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl -z-10" />

          {/* Projects grid */}
          <div className="space-y-32">
            {portfolioProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Final call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-24 text-center">
          <p className="text-lg text-white/70 mb-6">
            🤝 Let’s Talk Always open to new collaborations, freelance gigs, and
            part/full-time opportunities.
          </p>
          <a href="#contacts">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white text-gray-900 h-12 px-8 rounded-xl font-medium inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all">
              <span>Let&#39;s Talk</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </motion.button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
