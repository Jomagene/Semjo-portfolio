'use client';
import { SectionHeader } from '@/components/SectionHeader';
import { Card } from '@/components/Card';
import bookImage from '@/assets/images/book-cover.png';
import Image from 'next/image';
import JavascriptIcon from '@/assets/icons/square-js.svg';
import HTMLIcon from '@/assets/icons/html5.svg';
import CssIcon from '@/assets/icons/css3.svg';
import ReactIcon from '@/assets/icons/react.svg';
import ChromeIcon from '@/assets/icons/chrome.svg';
import GithubIcon from '@/assets/icons/github.svg';
import mapImage from '@/assets/images/map.png';
import smileMemoji from '@/assets/images/memoji-smile.jpg';
import { CardHeader } from '@/components/CardHeader';
import { ToolboxItems } from '@/components/ToolboxItems';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

// Enhanced toolbox items with more information
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

// Enhanced hobby items with additional info
const hobbies = [
  {
    title: 'Reading',
    emoji: '📚',
    description: 'Tech books & sci-fi novels',
    color: 'from-blue-400 to-indigo-600',
    position: { top: '5%', left: '15%' },
  },
  {
    title: 'Fitness',
    emoji: '💪',
    description: 'Strength training & running',
    color: 'from-red-400 to-orange-600',
    position: { top: '15%', left: '70%' },
  },
  {
    title: 'Cooking',
    emoji: '🧑‍🍳',
    description: 'International cuisines',
    color: 'from-amber-400 to-yellow-600',
    position: { top: '35%', left: '20%' },
  },
  {
    title: 'Music',
    emoji: '🎧',
    description: 'Piano & classic rock',
    color: 'from-purple-400 to-fuchsia-600',
    position: { top: '40%', left: '60%' },
  },
  {
    title: 'Gaming',
    emoji: '🎮',
    description: 'Strategy & RPGs',
    color: 'from-green-400 to-emerald-600',
    position: { top: '65%', left: '75%' },
  },
  {
    title: 'Cinema',
    emoji: '🎬',
    description: 'Documentaries & thrillers',
    color: 'from-blue-400 to-sky-600',
    position: { top: '70%', left: '35%' },
  },
  {
    title: 'Teaching',
    emoji: '👨‍🏫',
    description: 'Web dev mentoring',
    color: 'from-emerald-400 to-teal-600',
    position: { top: '65%', left: '5%' },
  },
];

// Reading list with actual books
const books = [
  {
    title: 'Atomic Habits',
    author: 'James Clear',
    image: bookImage, // Replace with actual images
    description: 'Tiny changes, remarkable results',
  },
  {
    title: 'Clean Code',
    author: 'Robert C. Martin',
    image: bookImage, // Replace with actual images
    description: 'A handbook of agile software craftsmanship',
  },
  {
    title: 'Refactoring UI',
    author: 'Adam Wathan & Steve Schoger',
    image: bookImage, // Replace with actual images
    description: 'Make your UI designs shine',
  },
];

export const AboutSection = () => {
  const constraintRef = useRef(null);
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start end', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <div
      className="py-24 lg:py-36 relative overflow-hidden"
      id="about"
      ref={scrollRef}>
      {/* Background Elements */}
      <motion.div
        className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -z-10"
        style={{ y: backgroundY }}
      />
      <motion.div
        className="absolute -bottom-40 -left-40 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl -z-10"
        style={{ y: useTransform(scrollYProgress, [0, 1], ['30%', '0%']) }}
      />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}>
          <SectionHeader
            eyebrow="Beyond the Code"
            title="The Human Behind the Developer"
            description="Discover my journey, technical expertise, and what makes me tick beyond the world of programming."
          />
        </motion.div>

        <div className="mt-24 space-y-16">
          {/* Bio Section - New! */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative">
            <Card className="p-8 md:p-12 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-emerald-500/10 to-sky-500/10 blur-3xl -z-10" />

              <div className="grid md:grid-cols-3 gap-10">
                <div className="md:col-span-2">
                  <h3 className="font-serif text-3xl font-bold mb-6">
                    My Journey
                  </h3>
                  <div className="space-y-4 text-white/80">
                    <p>
                      I&apos;m a passionate frontend developer with a love for
                      creating beautiful, accessible, and performant web
                      experiences. My journey began 3 years ago when I built my
                      first HTML page, and I&apos;ve been hooked ever since.
                    </p>
                    <p>
                      With experience across startups and larger teams,
                      I&apos;ve developed a keen eye for detail and a commitment
                      to writing clean, maintainable code. I believe that great
                      interfaces should be both visually stunning and
                      functionally intuitive.
                    </p>
                    <p>
                      When I&apos;m not coding, you&apos;ll find me exploring
                      new technologies through reading books, contributing to
                      open source, writing technical articles, or mentoring
                      junior developers. I&apos;m currently focused on mastering
                      Next.js and exploring the exciting possibilities of AI
                      integration in web applications.
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <div className="relative aspect-square overflow-hidden rounded-2xl">
                    <Image
                      src={smileMemoji}
                      alt="Profile image"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/30 via-transparent to-sky-500/30 mix-blend-overlay" />
                  </div>

                  <div className="absolute -bottom-6 -right-6 size-32 bg-gradient-to-br from-emerald-400/20 to-sky-400/20 rounded-full blur-2xl -z-10" />
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Skills & Tools Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}>
            <Card className="p-0 overflow-hidden">
              <div className="p-8 md:p-10">
                <CardHeader
                  title="Technical Expertise"
                  description="The tools and technologies I use to bring ideas to life."
                  className="mb-6"
                />
              </div>

              <ToolboxItems
                items={toolboxItems}
                itemsWrapperClassName="animate-move-left [animation-duration:60s]"
              />

              <div className="p-8 md:p-10 mt-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="font-medium text-lg mb-2">
                      Frontend Wizardry
                    </h4>
                    <p className="text-sm text-white/70">
                      Specializing in React ecosystem with deep knowledge of
                      performance optimization and state management patterns.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="font-medium text-lg mb-2">
                      Design Sensibility
                    </h4>
                    <p className="text-sm text-white/70">
                      Strong eye for design systems, animation principles, and
                      translating mockups into pixel-perfect interfaces.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="font-medium text-lg mb-2">
                      Modern Architecture
                    </h4>
                    <p className="text-sm text-white/70">
                      Building with scalability in mind using microservices,
                      SSR/SSG approaches, and API integration best practices.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Books & Hobbies Section */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Reading Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}>
              <Card className="h-full">
                <CardHeader
                  title="What I'm Reading"
                  description="Books that have shaped my thinking and skills."
                  className="mb-6"
                />

                <div className="space-y-6">
                  {books.map((book, index) => (
                    <motion.div
                      key={book.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index + 0.3, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="flex gap-4 items-center">
                      <div className="w-16 h-24 flex-shrink-0 rounded-md overflow-hidden bg-gray-800">
                        <Image
                          src={book.image}
                          alt={book.title}
                          width={64}
                          height={96}
                          className="object-cover h-full w-full"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium">{book.title}</h4>
                        <p className="text-sm text-white/60">{book.author}</p>
                        <p className="text-xs text-white/50 mt-1">
                          {book.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Hobbies Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}>
              <Card className="h-full relative overflow-hidden">
                <CardHeader
                  title="Beyond the Code"
                  description="What keeps me inspired and balanced outside of work."
                  className="mb-6"
                />

                <div className="relative h-[300px]" ref={constraintRef}>
                  {hobbies.map((hobby, index) => (
                    <motion.div
                      key={hobby.title}
                      className={`inline-flex flex-col gap-1 p-3 bg-gradient-to-r ${hobby.color} rounded-xl absolute cursor-grab active:cursor-grabbing shadow-lg`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{
                        opacity: 1,
                        scale: 1,
                        transition: { delay: index * 0.1, duration: 0.5 },
                      }}
                      viewport={{ once: true }}
                      style={{
                        left: hobby.position.left,
                        top: hobby.position.top,
                      }}
                      whileHover={{ scale: 1.05, rotate: 3 }}
                      whileTap={{ scale: 0.95 }}
                      drag
                      dragConstraints={constraintRef}>
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{hobby.emoji}</span>
                        <span className="font-medium text-white">
                          {hobby.title}
                        </span>
                      </div>
                      <span className="text-xs text-white/80">
                        {hobby.description}
                      </span>
                    </motion.div>
                  ))}

                  {/* Helper text */}
                  <div className="absolute bottom-2 right-2 text-xs text-white/40 italic">
                    Drag these bubbles around!
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}>
            <Card className="p-0 overflow-hidden relative h-[300px]">
              <Image
                src={mapImage}
                alt="map location"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none" />

              <div className="absolute bottom-8 left-8 max-w-md">
                <h3 className="text-2xl font-bold mb-2">Location</h3>
                <p className="text-white/80">
                  Based in Kinshasa, Democratic Republic of Congo. Available for
                  remote work worldwide and selective on-site projects in
                  Africa.
                </p>
              </div>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-emerald-400 to-sky-400 animate-ping opacity-70 [animation-duration:2s]"></div>
                  <div className="size-16 rounded-full bg-gray-950 flex items-center justify-center ring-2 ring-emerald-400 ring-offset-2 ring-offset-gray-950">
                    <Image
                      src={smileMemoji}
                      alt="profile avatar"
                      className="size-14 rounded-full"
                      width={56}
                      height={56}
                    />
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
