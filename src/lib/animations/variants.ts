import type { Variants } from 'motion/react';
import { MOTION_DURATIONS, MOTION_EASINGS } from '@/config/motion.config';

/**
 * 🎬 SSOT ANIMATION VARIANTS — Sinemus Corporate Web
 * Reusable animation definitions for all components.
 */

// Fade in upwards (default entrance)
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: MOTION_DURATIONS.medium,
      ease: MOTION_EASINGS.cinematic,
    },
  },
};

// Fade in downwards
export const fadeInDown: Variants = {
  hidden: {
    opacity: 0,
    y: -24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: MOTION_DURATIONS.medium,
      ease: MOTION_EASINGS.cinematic,
    },
  },
};

// Fade in scale up (for cards & badges)
export const fadeInScale: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    y: 16,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: MOTION_DURATIONS.medium,
      ease: MOTION_EASINGS.cinematic,
    },
  },
};

// Slide in from left
export const slideInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -36,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: MOTION_DURATIONS.medium,
      ease: MOTION_EASINGS.cinematic,
    },
  },
};

// Slide in from right
export const slideInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 36,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: MOTION_DURATIONS.medium,
      ease: MOTION_EASINGS.cinematic,
    },
  },
};

// Stagger Container (Parent for child lists)
export const staggerContainer = (
  staggerChildren = 0.08,
  delayChildren = 0.05
): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

// Modal / Dialog Entrance
export const modalVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.94,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: MOTION_DURATIONS.normal,
      ease: MOTION_EASINGS.cinematic,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.96,
    y: 12,
    transition: {
      duration: MOTION_DURATIONS.fast,
      ease: MOTION_EASINGS.smooth,
    },
  },
};

// Backdrop blur transition
export const backdropVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: MOTION_DURATIONS.fast,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: MOTION_DURATIONS.fast,
      ease: 'easeIn',
    },
  },
};

// Subtle Card Hover
export const cardHoverMotion = {
  whileHover: {
    y: -4,
    transition: {
      duration: 0.25,
      ease: MOTION_EASINGS.cinematic,
    },
  },
  whileTap: {
    scale: 0.98,
    transition: {
      duration: 0.1,
    },
  },
};
