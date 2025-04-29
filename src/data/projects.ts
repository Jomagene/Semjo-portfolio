import lamanoLandingPage from '@/assets/images/lamano.jpeg';
import cprj from '@/assets/images/cprj.jpeg';
import conferenceTicketGenerator from '@/assets/images/conference-ticket-gen.jpg';
import tantorLearning from '@/assets/images/tantor-learning.png';
import genzAd from '@/assets/images/genzAd.png';
import aiTextInterface from '@/assets/images/gtext-ai.png';
import guessColorGame from '@/assets/images/guess-color.png';

export const portfolioProjects = [
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
    link: 'https://tantor-learning-frontend-eight.vercel.app/dashboard/student',
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
