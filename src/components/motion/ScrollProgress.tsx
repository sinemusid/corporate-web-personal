'use client';

import React from 'react';
import { motion, useScroll, useSpring, useReducedMotion } from 'motion/react';
import { cn } from '@/lib/utils';

export interface ScrollProgressProps {
  className?: string;
  position?: 'top' | 'bottom';
}

export const ScrollProgress: React.FC<ScrollProgressProps> = ({
  className,
  position = 'top',
}) => {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  if (shouldReduceMotion) {
    return null;
  }

  return (
    <motion.div
      style={{ scaleX }}
      className={cn(
        'fixed left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-500 origin-left z-50 pointer-events-none',
        position === 'top' ? 'top-0' : 'bottom-0',
        className
      )}
      aria-hidden="true"
    />
  );
};
