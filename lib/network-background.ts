export const NETWORK_COLORS = {
  bgStart: "#0A0F1A",
  bgEnd: "#141B2D",
  cyan: "#00D4FF",
  purple: "#8B5CF6",
} as const;

export const NETWORK_DEFAULTS = {
  nodeCount: 110,
  connectionDistance: 170,
  mouseRadius: 220,
  lineOpacity: 0.5,
} as const;

export function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
