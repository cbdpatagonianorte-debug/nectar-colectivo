'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * @file: WhatsAppFAB.tsx
 * @description: Floating Action Button para contacto directo vía WhatsApp.
 */

export default function WhatsAppFAB() {
  const phoneNumber = "541150599066";
  const message = encodeURIComponent("Hola, me interesa la miel de Nectar Colectivo.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[100] w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl shadow-green-500/30 hover:shadow-green-500/50 transition-shadow"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={32} fill="currentColor" />
      
      {/* Tooltip hint */}
      <div className="absolute right-20 bg-white text-on-surface-variant px-4 py-2 rounded-lg text-xs font-bold shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        ¿Alguna duda? Escríbenos.
      </div>
    </motion.a>
  );
}
