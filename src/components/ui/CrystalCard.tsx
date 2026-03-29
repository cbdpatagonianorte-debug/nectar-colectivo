'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useStitchTokens } from '@/lib/stitch-bridge';
import { TrendingUp, Box } from 'lucide-react';

/**
 * @file: CrystalCard.tsx
 * @description: Variante de contenedor con efectos de cristal y acentos de Stitch.
 * Utiliza los tokens de diseño para adaptar el color del borde y el resplandor.
 */

interface CrystalCardProps {
  title: string;
  category: string;
  status: string;
  roi: number;
  stitchColor?: string;
  delay?: number;
}

const CrystalCard: React.FC<CrystalCardProps> = ({ 
  title, 
  category, 
  status, 
  roi, 
  stitchColor, 
  delay = 0 
}) => {
  const tokens = useStitchTokens();
  const accentColor = stitchColor || tokens.colors.secondary;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className="group relative"
    >
      <div 
        className="relative overflow-hidden bg-white/[0.02] backdrop-blur-xl border rounded-2xl p-6 transition-all duration-500 hover:bg-white/[0.05]"
        style={{ borderColor: `${accentColor}33` }} // 20% opacity for border
      >
        {/* Glow effect */}
        <div 
          className="absolute -top-24 -left-24 w-48 h-48 blur-[60px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 rounded-full"
          style={{ backgroundColor: accentColor }}
        />

        <div className="relative z-10 space-y-6">
          <header className="flex justify-between items-start">
            <div className="space-y-1">
              <span 
                className="text-[10px] font-bold uppercase tracking-[0.2em]"
                style={{ color: accentColor }}
              >
                {category}
              </span>
              <h3 className="text-xl font-bold tracking-tight text-white">{title}</h3>
            </div>
            <div 
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-white/40"
              style={{ color: accentColor }}
            >
              <Box size={20} />
            </div>
          </header>

          <div className="flex items-center gap-4">
            <div className="flex-1 h-[2px] bg-white/5 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: '70%' }}
                transition={{ duration: 1.5, delay: delay + 0.3 }}
                className="h-full"
                style={{ backgroundColor: accentColor }}
              />
            </div>
            <span className="text-xs font-mono text-white/40">{status}</span>
          </div>

          <footer className="flex justify-between items-center pt-2">
            <div className="flex items-center gap-2 text-emerald-400">
              <TrendingUp size={16} />
              <span className="text-sm font-bold">ROI: {roi}%</span>
            </div>
            <button 
              className="text-[10px] font-bold uppercase tracking-widest text-white/30 hover:text-white transition-colors"
            >
              Details ↗
            </button>
          </footer>
        </div>
      </div>
    </motion.div>
  );
};

export default CrystalCard;
