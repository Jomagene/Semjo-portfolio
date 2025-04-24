'use client';
import { motion, useAnimation, Variants } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import grainImage from '@/assets/images/grain.jpg';

// Define types for social links
interface SocialLink {
  title: string;
  href: string;
}

// Social links array
const socialLinks: SocialLink[] = [
  { title: 'Github', href: 'https://github.com/Jomagene' },
  { title: 'Twitter', href: 'https://x.com/jomagene98' },
  {
    title: 'Frontendmentor',
    href: 'https://www.frontendmentor.io/profile/Jomagene',
  },
  { title: 'Mail', href: 'mailto:semjomagene@gmail.com' },
  { title: 'Telegram', href: 'https://t.me/joelmagene' },
];

export const ContactSection: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  // Handle intersection observer to trigger animations when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start('visible');
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [controls]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1], // Custom cubic bezier for smooth easing
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

  const shineVariants: Variants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 0.3,
      scale: 1,
      transition: { delay: 0.5, duration: 0.8, ease: 'easeOut' },
    },
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

  // Floating particles
  const floatingParticles = Array.from({ length: 10 }).map((_, i) => ({
    id: i,
    size: Math.random() * 15 + 5,
    duration: Math.random() * 8 + 12,
    delay: Math.random() * 5,
    x: Math.random() * 100,
    y: Math.random() * 100,
  }));

  // Enhanced color palette for particles and effects
  const particleColors = [
    'bg-sky-300/60',
    'bg-sky-100/70',
    'bg-emerald-200/60',
    'bg-teal-200/50',
    'bg-white/40',
    'bg-blue-300/50',
    'bg-cyan-200/60',
  ];

  return (
    <section className="py-16 pt-12 lg:py-24 lg:pt-20" id="contacts">
      <div className="container">
        <motion.div
          ref={containerRef}
          className="relative bg-gradient-to-br from-cyan-400 via-sky-400 to-teal-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left overflow-hidden z-0 md:flex md:justify-between items-center md:gap-8 shadow-lg shadow-sky-400/20"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          onMouseMove={handleMouseMove}>
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

          {/* Animated spotlight/shine effect that follows cursor */}
          <motion.div
            className="absolute h-64 w-64 rounded-full bg-gradient-radial from-white to-transparent blur-2xl pointer-events-none -z-5"
            initial="hidden"
            animate="visible"
            variants={shineVariants}
            style={{
              x: mousePosition.x - 128,
              y: mousePosition.y - 128,
            }}
          />

          {/* Floating particles with enhanced colors */}
          {floatingParticles.map((particle) => (
            <motion.div
              key={particle.id}
              className={`absolute rounded-full ${
                particleColors[particle.id % particleColors.length]
              } pointer-events-none`}
              initial={{
                x: `${particle.x}%`,
                y: `${particle.y}%`,
                opacity: 0,
              }}
              animate={{
                opacity: [0, 0.7, 0.7, 0],
                y: [
                  `${particle.y}%`,
                  `${particle.y - 20}%`,
                  `${particle.y - 40}%`,
                  `${particle.y - 60}%`,
                ],
                x: [
                  `${particle.x}%`,
                  `${particle.x + 5}%`,
                  `${particle.x - 5}%`,
                  `${particle.x + 10}%`,
                ],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
                ease: 'easeInOut',
              }}
              style={{
                width: particle.size,
                height: particle.size,
                filter: 'blur(1px)',
              }}
            />
          ))}

          {/* Text content with enhanced styling */}
          <div className="md:max-w-[1000px] relative">
            <motion.h2
              className="font-serif text-2xl md:text-3xl tracking-tight text-gray-800 drop-shadow-sm"
              variants={textVariants}>
              Let&#44;s create something amazing together
            </motion.h2>

            <motion.p
              className="text-sm md:text-base my-2 text-gray-700"
              variants={textVariants}>
              Ready to bring your next project to life? Let&#44;s connect and
              discuss how I can help you achieve goals
            </motion.p>

            {/* Social links with enhanced hover effects */}
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
                  <ArrowUpRightIcon className="size-4 transition-all duration-500 delay-200 group-hover:rotate-45 group-hover:translate-x-2" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Contact button with enhanced animation */}
          <motion.button
            className="text-white bg-gradient-to-br from-sky-600 to-blue-700 hover:from-sky-500 hover:to-blue-600 inline-flex items-center px-6 h-12 rounded-xl gap-2 mt-6 md:mt-0 shadow-md relative overflow-hidden group"
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
              className="flex gap-2 min-w-52 flex-nowrap">
              <span className="font-semibold text-nowrap relative z-10">
                Call via Phone
              </span>
              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: 3 }}
                transition={{ duration: 0.3 }}>
                <ArrowUpRightIcon className="size-4" />
              </motion.span>
            </a>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
