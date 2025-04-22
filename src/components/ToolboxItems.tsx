'use client';

import { twMerge } from 'tailwind-merge';
import { TechIcon } from './TechIcon';
import { Fragment } from 'react';
import { motion } from 'framer-motion';

export const ToolboxItems = ({
  items,
  className,
  itemsWrapperClassName,
}: {
  items: {
    title: string;
    iconType: React.ElementType;
    proficiency?: number; // Add proficiency level (0-100)
    description?: string; // Add short description
    color?: string; // Add custom color for flair
  }[];
  className?: string;
  itemsWrapperClassName?: string;
}) => {
  // Custom animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    hover: {
      scale: 1.05,
      boxShadow:
        '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <div
      className={twMerge(
        'flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] relative overflow-hidden',
        className
      )}>
      {/* Background gradient effect */}
      <div className="absolute -inset-1/2 bg-gradient-to-r from-emerald-500/10 via-transparent to-sky-500/10 blur-3xl opacity-30 animate-pulse [animation-duration:8s]"></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className={twMerge(
          'flex flex-none py-4 gap-6 pr-6 overflow-visible',
          itemsWrapperClassName
        )}>
        {[...new Array(2).fill(0)].map((_, ind) => (
          <Fragment key={ind}>
            {items.map((tool, index) => (
              <motion.div
                key={`${tool.title}-${ind}-${index}`}
                variants={itemVariants}
                whileHover="hover"
                className={`flex flex-col gap-3 px-5 py-4 bg-gray-800/60 backdrop-blur-sm rounded-lg border border-white/10 relative overflow-hidden group`}
                style={{
                  boxShadow:
                    '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                }}>
                {/* Conditional display of proficiency indicator */}
                {tool.proficiency && (
                  <div
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-emerald-400 to-sky-400"
                    style={{ width: `${tool.proficiency}%` }}></div>
                )}

                {/* Icon and label */}
                <div className="flex items-center gap-3">
                  <div
                    className={`p-2 rounded-lg bg-gray-700/50 ${
                      tool.color || 'text-white'
                    } transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                    <TechIcon component={tool.iconType} />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-medium text-white">{tool.title}</span>
                    {tool.proficiency && (
                      <span className="text-xs text-white/70">
                        {tool.proficiency}% proficiency
                      </span>
                    )}
                  </div>
                </div>

                {/* Description */}
                {tool.description && (
                  <p className="text-xs text-white/70 max-w-[180px]">
                    {tool.description}
                  </p>
                )}

                {/* Decorative element */}
                <div className="absolute -right-3 -top-3 size-12 bg-gradient-to-br from-transparent to-white/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>
            ))}
          </Fragment>
        ))}
      </motion.div>
    </div>
  );
};
