'use client';
import { motion, useAnimation, Variants, useInView } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import grainImage from '@/assets/images/grain.jpg';
import { socialLinks } from '@/data/contacts';

export const ContactSection: React.FC = () => {
  const containerRef = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.1,
      },
    },
  };

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const buttonVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delay: 0.3, duration: 0.5, ease: 'easeOut' },
    },
    hover: {
      scale: 1.05,
      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
      transition: { type: 'spring', stiffness: 400, damping: 10 },
    },
    tap: { scale: 0.97 },
  };

  const socialVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.4 + i * 0.07,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  };

  useEffect(() => {
    if (isInView) controls.start('visible');
  }, [isInView, controls]);

  return (
    <section className="py-16 pt-12 lg:py-24 lg:pt-20" id="contacts">
      <div className="container">
        <motion.div
          ref={containerRef}
          className="relative bg-gradient-to-br from-cyan-400 via-sky-400 to-teal-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left overflow-hidden z-0 md:flex md:justify-between items-center md:gap-8 shadow-lg shadow-sky-400/20"
          initial="hidden"
          animate={controls}
          variants={containerVariants}>
          {/* Enhanced gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 -z-10" />

          {/* Grain effect overlay */}
          <div
            className="absolute inset-0 -z-10 opacity-5 mix-blend-overlay"
            style={{ backgroundImage: `url(${grainImage.src})` }}
          />

          {/* Animated border glow */}
          <motion.div
            className="absolute inset-0 -z-10 rounded-3xl opacity-0 bg-gradient-to-r from-sky-300 to-emerald-300"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.5, 0],
              scale: [1, 1.01, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{ filter: 'blur(15px)' }}
          />

          {/* Text content with enhanced styling */}
          <div className="md:max-w-[1000px] relative">
            <motion.h2
              className="font-serif text-2xl md:text-3xl tracking-tight text-gray-800 drop-shadow-sm"
              variants={textVariants}>
              Let&apos;s create something amazing together
            </motion.h2>

            <motion.p
              className="text-sm md:text-base my-2 text-gray-700"
              variants={textVariants}>
              Ready to bring your next project to life? Let&apos;s connect and
              discuss how I can help you achieve goals
            </motion.p>

            <motion.div
              className="mt-4 hidden md:flex gap-4 flex-wrap"
              variants={textVariants}>
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.title}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-white bg-gray-800 transition-all duration-300 flex items-center gap-2 px-4 py-2 rounded-lg shadow-lg group"
                  custom={index}
                  variants={socialVariants}
                  whileHover="hover">
                  <span className="group-hover:scale-105 duration-500">
                    {link.title}
                  </span>
                  <ArrowUpRightIcon className="size-4 transition-all duration-500 group-hover:rotate-45 group-hover:translate-x-2" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Contact button with enhanced animation */}
          <motion.button
            className="text-white bg-gradient-to-br from-sky-600 to-blue-700 hover:from-sky-500 hover:to-blue-600 flex items-center pl-4 pr-6 lg:pl-6 lg:pr-8 h-12 rounded-xl gap-2 mt-6 md:mt-0 shadow-md relative overflow-hidden group"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap">
            {/* Button shine effect */}
            <motion.span
              className="absolute w-10 h-full bg-white/20 -skew-x-12 pointer-events-none"
              initial={{ left: '-20%' }}
              animate={{ left: '120%' }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
            />
            <a
              href="tel:+243821358144"
              className="flex items-center group gap-2 flex-nowrap">
              <span className="font-semibold text-nowrap relative z-10">
                Call via Phone
              </span>
              <motion.span>
                <ArrowUpRightIcon className="size-4 transition-all duration-500 group-hover:rotate-45 group-hover:translate-x-2" />
              </motion.span>
            </a>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
