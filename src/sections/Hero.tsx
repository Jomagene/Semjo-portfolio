'use client';
import Image from 'next/image';
import memojiImage from '@/assets/images/memoji-smile.jpg';
import ArrowDown from '@/assets/icons/arrow-down.svg';
import grainImage from '@/assets/images/grain.jpg';
import StarIcon from '@/assets/icons/star.svg';
import SparkleIcon from '@/assets/icons/sparkle.svg';
import { HeroOrbit } from '@/components/HeroOrbit';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export const HeroSection = () => {
  return (
    <div
      className="py-14 md:py-24 lg:py-28 relative z-0 overflow-x-clip"
      id="home">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_top,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{ backgroundImage: `url(${grainImage.src})` }}></div>
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>

        <HeroOrbit
          size={430}
          rotation={-14}
          shouldOrbit
          shouldSpin
          orbitDuration="30s"
          spinDuration="3s">
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={440}
          rotation={79}
          shouldOrbit
          orbitDuration="32s"
          shouldSpin
          spinDuration="3s">
          <SparkleIcon className="size-5 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration="34s">
          <div className="size-2 rounded-full bg-emerald-300/20"></div>
        </HeroOrbit>
        <HeroOrbit
          size={530}
          rotation={178}
          shouldOrbit
          orbitDuration="36s"
          shouldSpin
          spinDuration="3s">
          <SparkleIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={550}
          rotation={20}
          shouldOrbit
          shouldSpin
          orbitDuration="38s"
          spinDuration="6s">
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit
          size={590}
          rotation={98}
          shouldOrbit
          shouldSpin
          orbitDuration="40s"
          spinDuration="6s">
          <StarIcon className="size-8 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="42s">
          <div className="size-2 rounded-full bg-emerald-300/20"></div>
        </HeroOrbit>
        <HeroOrbit
          size={710}
          rotation={144}
          shouldOrbit
          orbitDuration="44s"
          shouldSpin
          spinDuration="6s">
          <SparkleIcon className="size-14 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration="46s">
          <div className="size-3 rounded-full bg-emerald-300/20"></div>
        </HeroOrbit>
        <HeroOrbit
          size={800}
          rotation={-72}
          shouldOrbit
          shouldSpin
          orbitDuration="48s"
          spinDuration="6s">
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
      </div>

      <div className="container relative pb-5">
        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute size-1 md:size-2 rounded-full bg-sky-500/40"
              initial={{
                x: Math.random() * 100 - 50,
                y: Math.random() * 100 - 50,
                opacity: 0,
              }}
              animate={{
                x: Math.random() * 200 - 100,
                y: Math.random() * 200 - 100,
                opacity: [0, 0.3, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 3 + Math.random() * 2,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="flex flex-col items-center relative z-10">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative">
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, -3, 3, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
              className="relative -mb-10 p-5">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500 to-emerald-600  hover:from-sky-600 hover:to-emerald-700  rounded-2xl blur-xl duration-500 opacity-10 -z-10 animate-pulse" />
              <div className="size-[120px] bg-gray-900/80 backdrop-blur-sm rounded-2xl p-2 border border-sky-500/30 shadow-lg shadow-sky-500/20 mx-auto">
                <Image
                  src={memojiImage}
                  alt="Person peeking from behind laptop"
                  className="size-full rounded-xl object-cover transform transition-all hover:scale-105"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-6">
              <div className="bg-gray-900/90 backdrop-blur-md border border-sky-500/30 px-4 py-2 inline-flex items-center gap-4 rounded-xl shadow-lg  hover:border-sky-400/40 transition-all duration-300">
                <div className="relative size-3 bg-emerald-500 rounded-full">
                  <span className="absolute inset-0 bg-emerald-500/70 animate-ping rounded-full"></span>
                </div>
                <div className="text-sm font-medium text-white">
                  Available for new projects
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="max-w-xl mx-auto mt-8">
            <h1 className="font-serif text-2xl md:text-4xl text-center my-6 tracking-wide bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Crafting Responsive & Interactive Web Experiences
            </h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-6 text-center text-white/70 md:text-lg">
              I transform designs into high-performance React applications with
              clean code and pixel-perfect implementation. Specializing in
              modern frontend development that combines aesthetics with
              functionality.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col md:flex-row justify-center items-center mt-10 gap-6">
            <motion.a
              href="#projects"
              className="z-10 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}>
              <button className="inline-flex items-center gap-3 border border-white/20 bg-gray-900/50 backdrop-blur-sm px-7 h-12 rounded-xl hover:bg-indigo-900/30 hover:border-indigo-400/30 transition-all duration-300">
                <span className="font-semibold text-white group-hover:text-indigo-200 transition-colors">
                  See my work
                </span>
                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}>
                  <ArrowDown className="size-4 text-indigo-300" />
                </motion.div>
              </button>
            </motion.a>

            <motion.a
              href="#contacts"
              className="z-10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}>
              <button className="inline-flex items-center gap-3 border-none bg-gradient-to-r from-emerald-500 to-sky-500 hover:from-emerald-400 hover:to-sky-400 text-white h-12 px-7 rounded-xl shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all duration-300">
                <motion.span
                  animate={{ rotate: [0, 30, -30, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                    repeatDelay: 1,
                  }}>
                  👋
                </motion.span>
                <span className="font-semibold">Collaborate</span>
              </button>
            </motion.a>
          </motion.div>
        </div>

        {/* Decorative circle elements */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2">
          <motion.div
            className="size-64 rounded-full bg-indigo-500/10 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ repeat: Infinity, duration: 8 }}
          />
        </div>

        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2">
          <motion.div
            className="size-64 rounded-full bg-purple-500/10 blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ repeat: Infinity, duration: 8 }}
          />
        </div>
      </div>
    </div>
  );
};
