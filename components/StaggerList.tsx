import { motion } from "framer-motion";
import React, { memo } from "react";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08 // Más rápido
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 15 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

interface StaggerListProps {
  children: React.ReactNode;
  className?: string;
}

interface StaggerItemProps {
  children: React.ReactNode;
  className?: string;
}

export const StaggerList = memo(function StaggerList({ children, className }: StaggerListProps) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
});

export const StaggerItem = memo(function StaggerItem({ children, className }: StaggerItemProps) {
  return (
    <motion.div 
      variants={item} 
      className={className}
      style={{ willChange: 'opacity, transform' }}
    >
      {children}
    </motion.div>
  );
});
