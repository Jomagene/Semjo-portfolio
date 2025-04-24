'use client';
import { SectionHeader } from '@/components/SectionHeader';
import { Card } from '@/components/Card';
import Image from 'next/image';
import { techSpecials, books, hobbies, toolboxItems } from '@/data/about';
import mapImage from '@/assets/images/map.png';
import smileMemoji from '@/assets/images/memoji-smile.jpg';
import { CardHeader } from '@/components/CardHeader';
import { ToolboxItems } from '@/components/ToolboxItems';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { BioSection } from '@/components/BioSection';

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
            description="Discover my journey, technical expertise, and what makes me tick beyond the world of programming; from civil engineering to frontend development"
          />
        </motion.div>

        <div className="mt-24 space-y-16">
          {/* Bio Section - New! */}
          <BioSection />

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

                <div className="p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-xl font-bold text-white">
                      Learning Resources
                    </h3>
                    <div className="text-sm text-white/60 flex items-center gap-2">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M6 2h12v20l-6-4-6 4V2z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span>Books that shaped my journey</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {books.map((book, index) => (
                      <motion.div
                        key={book.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * index + 0.2, duration: 0.5 }}
                        viewport={{ once: true }}
                        whileHover={{
                          scale: 1.03,
                          transition: { duration: 0.2 },
                        }}
                        className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/10 group hover:bg-gradient-to-br hover:from-white/10 hover:to-transparent transition-all duration-300">
                        <div className="flex flex-col justify-center">
                          <div className="flex items-center">
                            <h4 className="font-medium text-white group-hover:text-emerald-400 transition-colors duration-300">
                              {book.title}
                            </h4>
                            <motion.div
                              initial={{ opacity: 0, width: 0 }}
                              whileInView={{ opacity: 1, width: 'auto' }}
                              transition={{
                                delay: 0.4 + index * 0.1,
                                duration: 0.5,
                              }}
                              className="ml-2">
                              <span
                                className={`text-xs py-0.5 px-2 rounded-full bg-gradient-to-r ${
                                  book.title === 'Atomic Habits'
                                    ? 'from-amber-500 to-orange-500'
                                    : book.title === 'Clean Code'
                                    ? 'from-emerald-500 to-teal-500'
                                    : book.title === 'Refactoring UI'
                                    ? 'from-indigo-500 to-purple-500'
                                    : 'from-sky-500 to-cyan-500'
                                } text-white text-nowrap`}>
                                {book.badge}
                              </span>
                            </motion.div>
                          </div>
                          <p className="text-sm text-white/60">{book.author}</p>
                          <div className="h-px w-full bg-gradient-to-r from-white/10 to-transparent my-2" />
                        </div>
                      </motion.div>
                    ))}
                  </div>
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
                      className={`inline-flex flex-col gap-1 p-3 bg-gradient-to-r ${
                        hobby.title === 'Reading'
                          ? 'from-blue-400 to-indigo-600'
                          : hobby.title === 'Fitness'
                          ? 'from-red-400 to-orange-600'
                          : hobby.title === 'Cooking'
                          ? 'from-amber-400 to-yellow-600'
                          : hobby.title === 'Music'
                          ? 'from-purple-400 to-fuchsia-600'
                          : hobby.title === 'Gaming'
                          ? 'from-green-400 to-emerald-600'
                          : hobby.title === 'Cinema'
                          ? 'from-blue-400 to-sky-600'
                          : hobby.title === 'Teaching'
                          ? 'from-emerald-400 to-teal-600'
                          : ''
                      } rounded-xl absolute cursor-grab active:cursor-grabbing shadow-lg`}
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
                  <div className="absolute bottom-2 right-5 text-xs text-white/40 italic">
                    Drag these bubbles around!
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>

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
                />
              </div>

              <ToolboxItems
                items={toolboxItems}
                itemsWrapperClassName="animate-move-left [animation-duration:60s]"
              />

              <div className="p-8 md:p-10 mt-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {techSpecials.map((special) => (
                    <div
                      key={special.title}
                      className="p-6 rounded-xl bg-white/5 border border-white/10">
                      <h4 className="font-medium text-lg mb-2">
                        {special.title}
                      </h4>
                      <p className="text-sm text-white/70">
                        {special.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>

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
                  Based in Goma, DRC. Available for remote work worldwide and
                  selective on-site projects in Africa.
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
