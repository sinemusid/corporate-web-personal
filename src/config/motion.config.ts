/**
 * 🎬 MOTION CONFIGURATION (SSOT) — Sinemus Corporate Web
 * Centralized motion tokens, easing curves, and spring physics.
 */

export const MOTION_EASINGS = {
  // Cinema/Apple style smooth ease out
  cinematic: [0.16, 1, 0.3, 1] as const,
  // Standard smooth easing
  smooth: [0.25, 0.1, 0.25, 1] as const,
  // Snappy enter easing
  snappy: [0.4, 0, 0.2, 1] as const,
  // Gentle ease in out
  easeInOut: [0.42, 0, 0.58, 1] as const,
} as const;

export const MOTION_DURATIONS = {
  instant: 0.15,
  fast: 0.3,
  normal: 0.5,
  medium: 0.7,
  slow: 0.9,
  cinema: 1.2,
} as const;

export const MOTION_SPRINGS = {
  snappy: { type: 'spring', stiffness: 400, damping: 30 } as const,
  gentle: { type: 'spring', stiffness: 200, damping: 25 } as const,
  bouncy: { type: 'spring', stiffness: 300, damping: 15 } as const,
} as const;

export const MOTION_DELAYS = {
  none: 0,
  short: 0.08,
  base: 0.15,
  medium: 0.25,
  long: 0.4,
} as const;

export const MOTION_VIEWPORT = {
  once: true,
  amount: 0.2, 
} as const;
