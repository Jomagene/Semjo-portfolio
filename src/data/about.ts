import JavascriptIcon from '@/assets/icons/square-js.svg';
import HTMLIcon from '@/assets/icons/html5.svg';
import CssIcon from '@/assets/icons/css3.svg';
import ReactIcon from '@/assets/icons/react.svg';
import ChromeIcon from '@/assets/icons/chrome.svg';
import GithubIcon from '@/assets/icons/github.svg';

const toolboxItems = [
  {
    title: 'Javascript',
    iconType: JavascriptIcon,
    proficiency: 90,
    description: 'ES6+, TypeScript, and async patterns for robust applications',
    color: 'text-yellow-400',
  },
  {
    title: 'HTML5',
    iconType: HTMLIcon,
    proficiency: 95,
    description: 'Semantic markup with accessibility standards in mind',
    color: 'text-orange-500',
  },
  {
    title: 'CSS3',
    iconType: CssIcon,
    proficiency: 85,
    description: 'Modern layouts with Flexbox, Grid and animations',
    color: 'text-blue-500',
  },
  {
    title: 'React',
    iconType: ReactIcon,
    proficiency: 88,
    description: 'Component architecture with hooks and context',
    color: 'text-cyan-400',
  },
  {
    title: 'Chrome',
    iconType: ChromeIcon,
    proficiency: 75,
    description: 'DevTools mastery and extension development',
    color: 'text-green-400',
  },
  {
    title: 'Github',
    iconType: GithubIcon,
    proficiency: 80,
    description: 'Version control, CI/CD and collaboration workflows',
    color: 'text-purple-400',
  },
];

const hobbies = [
  {
    title: 'Reading',
    emoji: '📚',
    description: 'Tech books & social ralated',
    position: { top: '5%', left: '15%' },
  },
  {
    title: 'Fitness',
    emoji: '💪',
    description: 'Strength training & running',
    position: { top: '15%', left: '70%' },
  },
  {
    title: 'Cooking',
    emoji: '🧑‍🍳',
    description: 'Local cuisines',
    position: { top: '35%', left: '20%' },
  },
  {
    title: 'Music',
    emoji: '🎧',
    description: 'Piano & gospel',
    position: { top: '40%', left: '60%' },
  },
  {
    title: 'Gaming',
    emoji: '🎮',
    description: 'Strategy & Football',
    position: { top: '65%', left: '75%' },
  },
  {
    title: 'Cinema',
    emoji: '🎬',
    description: 'Actions & Annimes',
    position: { top: '70%', left: '35%' },
  },
  {
    title: 'Teaching',
    emoji: '👨‍🏫',
    description: 'Web dev mentoring',
    position: { top: '65%', left: '5%' },
  },
];

const books = [
  {
    title: 'Atomic Habits',
    author: 'James Clear',
    badge: 'Mindset',
  },
  {
    title: 'Clean Code',
    author: 'Robert C. Martin',
    badge: 'Favorite',
  },
  {
    title: 'Refactoring UI',
    author: 'Adam Wathan & Steve Schoger',
    badge: 'Essential',
  },
  {
    title: 'Fullstack Open',
    author: 'University of Helsinki',
    badge: 'In progress',
  },
];

const techSpecials = [
  {
    title: 'Frontend Wizardry',
    description:
      'Specializing in React ecosystem with deep knowledge of performance optimization and state management patterns.',
  },
  {
    title: 'Design Sensibility',
    description:
      'Strong eye for design systems, animation principles, and translating mockups into pixel-perfect interfaces.',
  },
  {
    title: 'Modern Architecture',
    description:
      'Building with scalability in mind using microservices, SSR/SSG approaches, and API integration best practices.',
  },
];

export { techSpecials, books, hobbies, toolboxItems };
