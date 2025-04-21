import lamanoLandingPage from '@/assets/images/lamano.jpeg';
import cprj from '@/assets/images/cprj.jpeg';
import conferenceTicketGenerator from '@/assets/images/conference-ticket-gen.jpg';
import tantorLearning from '@/assets/images/tantor-learning.png';
import genzAd from '@/assets/images/genzAd.png';
import Image from 'next/image';
import CheckCircleIcon from '@/assets/icons/check-circle.svg';
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import { SectionHeader } from '@/components/SectionHeader';
import { Card } from '@/components/Card';

const portfolioProjects = [
  {
    company: 'HNG12 Internship',
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
    title: 'Tantor Learning Frontend',
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
    link: 'https://github.com/Tantor-Hub/Tantor-Learning-frontend',
    image: tantorLearning,
  },
  {
    company: 'Lamano DRC',
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
    company: 'HNG12 Internship (Stage 2)',
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
    company: 'HNG12 Internship (Stage 3)',
    year: '2025',
    title: 'AI Text Interface',
    results: [
      {
        title:
          'AI-powered assistant interface built with Next.js, OpenAI, and Chrome APIs.',
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
    // image: aiTextInterface,
  },
  {
    company: 'CPRJ',
    year: '2024',
    title: 'Cprj Landing Page',
    results: [
      {
        title: 'Community NGO website to boost online visibility and outreach.',
      },
      { title: 'Built with semantic HTML, Sass, and Flexbox layout.' },
      {
        title:
          'Accessible, responsive and simple navigation for local audiences.',
      },
    ],
    link: 'https://jomagene.github.io/cprj/',
    image: cprj,
  },
  {
    company: 'HNG12 Internship (Stage 1)',
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
    // image: guessColorGame,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24" id="projects">
      <div className="container">
        <SectionHeader
          eyebrow="Real-world Projects"
          title="Featured Projects"
          description="See how I transformed concepts into engaging digital experiences."
        />

        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, index) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(64px + ${index * 40}px)`,
              }}>
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-3xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result, i) => (
                      <li
                        key={i}
                        className="flex gap-2 text-sm md:text-base text-white/50">
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button className="bg-white text-gray-950 h-12 w-full md:w-fit px-4 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span>Visit live site</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  {/* <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  /> */}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
