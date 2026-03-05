import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
  once?: boolean;
}

const directionOffsets = {
  up: { y: 40, x: 0 },
  down: { y: -40, x: 0 },
  left: { x: 40, y: 0 },
  right: { x: -40, y: 0 },
};

const ScrollReveal = ({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 0.6,
  once = true,
}: ScrollRevealProps) => {
  const offset = directionOffsets[direction];

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: offset.x, y: offset.y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export const StaggerContainer = ({
  children,
  className,
  staggerDelay = 0.1,
}: {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}) => (
  <motion.div
    className={className}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-80px" }}
    variants={{
      hidden: {},
      visible: { transition: { staggerChildren: staggerDelay } },
    }}
  >
    {children}
  </motion.div>
);

export const StaggerItem = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <motion.div
    className={className}
    variants={{
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    }}
  >
    {children}
  </motion.div>
);

export default ScrollReveal;