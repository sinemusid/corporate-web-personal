'use client';

import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { MOTION_DURATIONS, MOTION_EASINGS, MOTION_VIEWPORT } from '@/config/motion.config';
import { cn } from '@/lib/utils';

export interface TextRevealProps {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  once?: boolean;
}

export const TextReveal: React.FC<TextRevealProps> = ({
  text,
  className,
  wordClassName,
  delay = 0,
  once = MOTION_VIEWPORT.once,
}) => {
  const shouldReduceMotion = useReducedMotion();
  const words = text.split(' ');

  if (shouldReduceMotion) {
    return <span className={className}>{text}</span>;
  }

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: delay,
      },
    },
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 12,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: MOTION_DURATIONS.normal,
        ease: MOTION_EASINGS.cinematic,
      },
    },
  };

  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: MOTION_VIEWPORT.amount }}
      className={cn('inline-flex flex-wrap gap-x-[0.3em]', className)}
    >
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          variants={wordVariants}
          className={cn('inline-block', wordClassName)}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
};
