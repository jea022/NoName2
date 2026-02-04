import { motion } from "framer-motion";
import React from "react";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

interface StaggerListProps {
  children: React.ReactNode;
  className?: string;
}

interface StaggerItemProps {
  children: React.ReactNode;
  className?: string;
}

export function StaggerList({ children, className }: StaggerListProps) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: StaggerItemProps) {
  return (
    <motion.div variants={item} className={className}>
      {children}
    </motion.div>
  );
}
