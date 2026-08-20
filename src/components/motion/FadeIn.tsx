'use client';

import React from 'react';
import { motion, useReducedMotion, type Variants, type HTMLMotionProps } from 'motion/react';
import { MOTION_VIEWPORT, MOTION_DURATIONS, MOTION_EASINGS } from '@/config/motion.config';
import { cn } from '@/lib/utils';

export interface FadeInProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'none';
  delay?: number;
  duration?: number;
  className?: string;
  viewportMargin?: string;
  once?: boolean;
}

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  direction = 'up',
  delay = 0,
  duration = MOTION_DURATIONS.medium,
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

  const transition = {
    duration,
    ease: MOTION_EASINGS.cinematic,
    ...(delay > 0 ? { delay } : {}),
  };

  const getVariants = (): Variants => {
    switch (direction) {
      case 'down':
        return {
          hidden: { opacity: 0, y: -24 },
          visible: { opacity: 1, y: 0, transition },
        };
      case 'left':
        return {
          hidden: { opacity: 0, x: -36 },
          visible: { opacity: 1, x: 0, transition },
        };
      case 'right':
        return {
          hidden: { opacity: 0, x: 36 },
          visible: { opacity: 1, x: 0, transition },
        };
      case 'scale':
        return {
          hidden: { opacity: 0, scale: 0.95, y: 16 },
          visible: { opacity: 1, scale: 1, y: 0, transition },
        };
      case 'none':
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition },
        };
      case 'up':
      default:
        return {
          hidden: { opacity: 0, y: 28 },
          visible: { opacity: 1, y: 0, transition },
        };
    }
  };

  return (
    <motion.div
      variants={getVariants()}
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
