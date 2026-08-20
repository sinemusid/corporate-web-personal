'use client';

import React from 'react';
import { motion, useReducedMotion, type HTMLMotionProps } from 'motion/react';
import { fadeInUp, cardHoverMotion } from '@/lib/animations/variants';
import { cn } from '@/lib/utils';

export interface MotionCardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  className?: string;
  enableHover?: boolean;
}

export const MotionCard: React.FC<MotionCardProps> = ({
  children,
  className,
  enableHover = true,
  variants = fadeInUp,
  ...props
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <motion.div initial={false} className={cn('transition-shadow duration-300', className)} {...props}>
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={variants}
      whileHover={enableHover ? cardHoverMotion.whileHover : undefined}
      whileTap={enableHover ? cardHoverMotion.whileTap : undefined}
      className={cn('transition-shadow duration-300', className)}
      {...props}
    >
      {children}
    </motion.div>
  );
};
