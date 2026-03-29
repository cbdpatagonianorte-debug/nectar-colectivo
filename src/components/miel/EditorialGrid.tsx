'use client';

import React from 'react';
import { motion } from 'framer-motion';

/**
 * @file: EditorialGrid.tsx
 * @description: Layout asimétrico inspirado en "The Artisanal Archive".
 * Implementa desplazamiento de elementos y sangrías dinámicas.
 */

interface EditorialGridProps {
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  reverse?: boolean;
}

export default function EditorialGrid({ 
  title, 
  subtitle, 
  description, 
  imageUrl, 
  reverse = false 
}: EditorialGridProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-12 gap-12 items-center py-24 ${reverse ? 'md:flex-row-reverse' : ''}`}>
      
      {/* Content Column (Asymmetric) */}
      <motion.div 
        initial={{ opacity: 0, x: reverse ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className={`md:col-span-7 lg:col-span-6 ${reverse ? 'md:col-start-7 lg:col-start-7' : 'md:col-start-1 lg:col-start-1'} space-y-6 px-6 md:px-12`}
      >
        <span className="text-secondary font-bold uppercase tracking-[0.3em] text-[10px]">
          {subtitle}
        </span>
        <h2 className="text-4xl md:text-6xl font-display leading-[1.1] text-on-surface">
          {title}
        </h2>
        <p className="text-on-surface-variant font-body leading-relaxed max-w-lg text-lg">
          {description}
        </p>
        <div className="pt-4">
          <button className="text-[11px] font-bold uppercase tracking-widest text-primary border-b-2 border-accent-gold pb-1 hover:text-secondary transition-colors">
            Explora la Cosecha 
          </button>
        </div>
      </motion.div>

      {/* Image Column (Bleeding edges) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className={`md:col-span-5 lg:col-span-6 relative group ${reverse ? 'md:col-start-1 lg:col-start-1' : ''}`}
      >
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl md:rounded-[3rem] shadow-2xl shadow-primary/5">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          {/* Subtle Honey Glow Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent pointer-events-none" />
        </div>
        
        {/* Floating Asymmetric Detail */}
        <div className={`absolute -bottom-8 ${reverse ? '-right-8' : '-left-8'} p-8 rounded-full bg-surface-container-lowest shadow-xl text-secondary animate-bounce [animation-duration:4s]`}>
          <div className="w-4 h-4 rounded-full bg-accent-gold" />
        </div>
      </motion.div>

    </div>
  );
}
