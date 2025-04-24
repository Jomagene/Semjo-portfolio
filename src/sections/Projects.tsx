'use client';
import lamanoLandingPage from '@/assets/images/lamano.jpeg';
import cprj from '@/assets/images/cprj.jpeg';
import conferenceTicketGenerator from '@/assets/images/conference-ticket-gen.jpg';
import tantorLearning from '@/assets/images/tantor-learning.png';
import genzAd from '@/assets/images/genzAd.png';
import aiTextInterface from '@/assets/images/gtext-ai.png';
import guessColorGame from '@/assets/images/guess-color.png';
import { motion } from 'framer-motion';

import ProjectCard from '@/components/ProjectCard';

const portfolioProjects = [
  {
    company: 'HNG',
    year: '2025',
    title: 'Genz Ad Generator',
    results: [
      {
        title:
          'Live deployed ad generator with polished UX and multi-step dynamic form.',
      },
      {
        title:
          'Advanced Next.js app showcasing API integration, form validation, and route protection.',
      },
      {
        title:
          'Demonstrated production-readiness, collaboration, and team communication.',
      },
    ],
    link: 'https://genz.ad',
    image: genzAd,
  },
  {
    company: 'Tantor Hub',
    year: '2025',
    title: 'Tantor Learning (WIP!!!)',
    results: [
      {
        title:
          'Scalable e-learning platform using Next.js, Redux Toolkit, and Tailwind CSS.',
      },
      {
        title:
          'Designed role-based dashboards, AI tools integration, and clean API handling.',
      },
      { title: 'Solid architecture, authentication, and real SaaS structure.' },
    ],
    link: 'https://tantor-learning-frontend.vercel.app/',
    image: tantorLearning,
  },
  {
    company: 'Lamano Company',
    year: '2024',
    title: 'Lamano Landing Page',
    results: [
      {
        title: 'Professional showcase for interior wooden decoration business.',
      },
      { title: 'Improved credibility and web presence of a local brand.' },
      { title: 'Clean design, responsive layout, and performance-focused.' },
    ],
    link: 'https://lamano-company.com/',
    image: lamanoLandingPage,
  },
  {
    company: 'HNG',
    year: '2025',
    title: 'Conference Ticket Generator',
    results: [
      {
        title: 'Custom ticket generation with dynamic form and QR integration.',
      },
      { title: 'TypeScript-based form validation and ShadCN UI usage.' },
      { title: 'Focused on usability and clean, component-based structure.' },
    ],
    link: 'https://hng12-stage2-conference-ticket-generator-ten.vercel.app/',
    image: conferenceTicketGenerator,
  },
  {
    company: 'HNG',
    year: '2025',
    title: 'GText AI',
    results: [
      {
        title:
          'AI-powered assistant interface built with Next.js and Chrome APIs.',
      },
      {
        title:
          'Zod validation, prompt engineering, and modular TypeScript code.',
      },
      {
        title:
          'Showcases AI integration, clean UX, and scalable layout design.',
      },
    ],
    link: 'https://gtext-ai.vercel.app/',
    image: aiTextInterface,
  },
  {
    company: 'CPRJ',
    year: '2024',
    title: 'Cprj Landing Page',
    results: [
      {
        title: 'Community NGO website to boost online visibility and outreach.',
      },
      { title: 'Built with semantic HTML and Bootstrap' },
      {
        title:
          'Accessible, responsive and simple navigation for local audiences.',
      },
    ],
    link: 'https://jomagene.github.io/cprj/',
    image: cprj,
  },
  {
    company: 'HNG',
    year: '2025',
    title: 'Guess Color Game',
    results: [
      { title: 'Fun mini-game built in React using state-based game logic.' },
      {
        title:
          'Practiced interaction, visual contrast, and guessing mechanics.',
      },
      { title: 'Focused on playability and front-end logic design.' },
    ],
    link: 'https://jomagene-color-guess.netlify.app/',
    image: guessColorGame,
  },
];

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
            Interested in working together? I&#39;m always open to new
            opportunities.
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
