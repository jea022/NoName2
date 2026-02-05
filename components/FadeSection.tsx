import React, { memo } from 'react';
import { motion } from "framer-motion";

function FadeSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1], // cubic-bezier más eficiente
        delay
      }}
      viewport={{ once: true, margin: "-50px" }}
      style={{ willChange: 'opacity, transform' }}
    >
      {children}
    </motion.div>
  );
}

export default memo(FadeSection);
