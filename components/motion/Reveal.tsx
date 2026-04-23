"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

type Props = {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: Direction;
  distance?: number;
  amount?: number;
  className?: string;
  as?: "div" | "section" | "article" | "li";
  once?: boolean;
};

const OFFSETS: Record<Direction, { x?: number; y?: number }> = {
  up: { y: 24 },
  down: { y: -24 },
  left: { x: 24 },
  right: { x: -24 },
  none: {},
};

export default function Reveal({
  children,
  delay = 0,
  duration = 0.6,
  direction = "up",
  distance,
  amount = 0.2,
  className,
  as = "div",
  once = true,
}: Props) {
  const prefersReducedMotion = useReducedMotion();
  const Tag = motion[as] as typeof motion.div;

  const offsets = { ...OFFSETS[direction] };
  if (distance !== undefined) {
    if ("y" in offsets) offsets.y = direction === "up" ? distance : -distance;
    if ("x" in offsets) offsets.x = direction === "left" ? distance : -distance;
  }

  if (prefersReducedMotion) {
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <Tag
      className={className}
      initial={{ opacity: 0, ...offsets }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </Tag>
  );
}
