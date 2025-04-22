'use client';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Header = () => {
  const [active, setActive] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const overlayRef = useRef(null);

  const sections = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'contacts', label: 'Contact', href: '#contacts' },
  ];

  const handleNavigation = (
    index: number,
    href: string,
    e: React.MouseEvent
  ) => {
    e.preventDefault();
    if (active === index) return;

    setTransitioning(true);

    // Simulate page transition with overlay animation
    setTimeout(() => {
      setActive(index);

      // Scroll to the section after the animation
      const element = document.querySelector(href);
      if (element) {
        window.scrollTo({
          top: element.getBoundingClientRect().top + window.scrollY - 100,
          behavior: 'smooth',
        });
      }

      // Update URL without page reload
      window.history.pushState({}, '', href);

      setTimeout(() => {
        setTransitioning(false);
      }, 600);
    }, 400);
  };

  return (
    <>
      {/* Space-themed transition overlay */}
      <AnimatePresence>
        {transitioning && (
          <motion.div
            ref={overlayRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 overflow-hidden bg-[#0B111E]">
            {/* Star field effect */}
            <div className="absolute inset-0 opacity-80">
              {[...Array(50)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{
                    x: `${Math.random() * 100}%`,
                    y: `${Math.random() * 100}%`,
                    scale: 0,
                    opacity: 0,
                  }}
                  animate={{
                    scale: Math.random() * 1.5 + 0.5,
                    opacity: Math.random() * 0.8 + 0.2,
                  }}
                  transition={{
                    duration: Math.random() * 0.5 + 0.3,
                    delay: Math.random() * 0.2,
                  }}
                  className="absolute w-1 h-1 rounded-full bg-teal-300"
                />
              ))}
            </div>

            {/* Cosmic ripple effect */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}>
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{
                    scale: 0.2,
                    opacity: 0.8,
                  }}
                  animate={{
                    scale: [0.2, 2.5 + i * 0.5],
                    opacity: [0.8, 0],
                  }}
                  transition={{
                    duration: 1,
                    delay: i * 0.1,
                    ease: 'easeOut',
                    times: [0, 1],
                    repeat: 0,
                  }}
                  className="absolute w-64 h-64 rounded-full border-2 border-teal-400/20"
                />
              ))}

              {/* Central glow */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 3, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="w-16 h-16 rounded-full bg-teal-400/30 flex items-center justify-center">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: 'reverse',
                  }}
                  className="w-6 h-6 text-teal-400">
                  {/* Stylized star icon */}
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Destination text */}
            <motion.div
              className="absolute inset-x-0 bottom-1/4 flex justify-center"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}>
              <div className="text-4xl font-bold text-white tracking-wider">
                {sections[active]?.label}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header Navigation */}
      <div className="flex justify-center items-center fixed top-3 w-full z-10">
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex gap-1 p-0.5 border-white/15 border bg-white/10 backdrop-blur rounded-full">
          {sections.map((section, index) => (
            <motion.a
              key={section.id}
              href={section.href}
              className={`nav-item relative overflow-hidden ${
                active === index ? 'active' : ''
              }`}
              onClick={(e) => handleNavigation(index, section.href, e)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}>
              {active === index && (
                <motion.div
                  layoutId="activeBackground"
                  className="absolute inset-0 bg-white rounded-full"
                  initial={false}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{section.label}</span>
            </motion.a>
          ))}
        </motion.nav>
      </div>
    </>
  );
};
