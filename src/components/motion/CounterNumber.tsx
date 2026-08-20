'use client';

import React, { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useReducedMotion, animate } from 'motion/react';
import { MOTION_EASINGS } from '@/config/motion.config';
import { cn } from '@/lib/utils';

export interface CounterNumberProps {
  /** The value string (e.g. "150+", "4", "90+", "10+", "100%") */
  value: string;
  duration?: number;
  className?: string;
  once?: boolean;
}

export const CounterNumber: React.FC<CounterNumberProps> = ({
  value,
  duration = 1.6,
  className,
  once = true,
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once, amount: 0.3 });
  const shouldReduceMotion = useReducedMotion();

  // Extract pure numeric portion, prefix, and suffix
  const match = value.match(/\d+/);
  const numericStr = match ? match[0] : null;
  const numericValue = numericStr ? parseInt(numericStr, 10) : 0;
  const matchIndex = numericStr ? value.indexOf(numericStr) : 0;
  const prefix = numericStr && matchIndex > 0 ? value.substring(0, matchIndex) : '';
  const suffix = numericStr ? value.substring(matchIndex + numericStr.length) : '';

  const count = useMotionValue(0);

  useEffect(() => {
    if (shouldReduceMotion || !isInView || !numericStr) return;

    const controls = animate(count, numericValue, {
      duration,
      ease: MOTION_EASINGS.cinematic,
      onUpdate: (latest) => {
        if (ref.current) {
          ref.current.textContent = `${prefix}${Math.floor(latest)}${suffix}`;
        }
      },
    });

    return () => controls.stop();
  }, [isInView, numericValue, numericStr, prefix, suffix, duration, shouldReduceMotion, count]);

  if (shouldReduceMotion || !numericStr) {
    return <span className={cn('tabular-nums', className)}>{value}</span>;
  }

  return (
    <span ref={ref} className={cn('tabular-nums', className)}>
      {prefix}0{suffix}
    </span>
  );
};
