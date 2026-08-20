'use client';

import React from 'react';
import { motion, useReducedMotion, type HTMLMotionProps } from 'motion/react';
import { staggerContainer } from '@/lib/animations/variants';
import { MOTION_VIEWPORT, MOTION_DELAYS } from '@/config/motion.config';
import { cn } from '@/lib/utils';

export interface FadeInStaggerProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  staggerDelay?: number;
  delayChildren?: number;
  className?: string;
  viewportMargin?: string;
  once?: boolean;
}

export const FadeInStagger: React.FC<FadeInStaggerProps> = ({
  children,
  staggerDelay = MOTION_DELAYS.short,
  delayChildren = MOTION_DELAYS.none,
  className,
  viewportMargin,
  once = MOTION_VIEWPORT.once,
  ...props
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <motion.div initial={false} className={cn(className)} {...props}>
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={staggerContainer(staggerDelay, delayChildren)}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once,
        amount: MOTION_VIEWPORT.amount,
        ...(viewportMargin ? { margin: viewportMargin } : {}),
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
};
