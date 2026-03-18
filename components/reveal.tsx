"use client";

import { HTMLMotionProps, motion } from "framer-motion";

type RevealProps = HTMLMotionProps<"div"> & {
  as?: "div" | "h1" | "h2" | "p" | "section";
};

export function Reveal({ as = "div", children, ...props }: RevealProps) {
  const MotionTag = motion[as];

  return (
    <MotionTag
      initial={{ opacity: 0, y: 24, scale: 0.98, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </MotionTag>
  );
}
