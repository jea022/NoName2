import { motion } from "framer-motion";
import React from "react";

interface AnimatedButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function AnimatedButton({ children, className, onClick }: AnimatedButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2 }}
      className={className}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
