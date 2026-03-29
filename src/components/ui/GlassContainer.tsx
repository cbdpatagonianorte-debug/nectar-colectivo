'use client';

import React from 'react';
import { motion } from 'framer-motion';

/**
 * @file: GlassContainer.tsx
 * @description: Componente premium con glassmorfismo, bordes de oro suave y desenfoque adaptativo.
 * Sincronizado con el ADN visual de Google Stitch.
 */

interface GlassContainerProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const GlassContainer: React.FC<GlassContainerProps> = ({ 
  children, 
  className = '', 
  delay = 0 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.8, 
        delay, 
        ease: [0.16, 1, 0.3, 1] 
      }}
      className={`
        relative overflow-hidden
        bg-white/[0.03] backdrop-blur-2xl
        border border-secondary/15
        shadow-glass rounded-2xl
        px-8 py-10
        ${className}
      `}
    >
      {/* Reflejo superior suave */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-right from-transparent via-secondary/20 to-transparent" />
      
      {/* Contenido */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Efecto de luz ambiental (trasfondo) */}
      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-secondary/5 blur-[80px] rounded-full pointer-events-none" />
    </motion.div>
  );
};

export default GlassContainer;
