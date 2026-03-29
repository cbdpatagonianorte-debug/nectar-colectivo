'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Sprout, Heart, ShieldAlert, X, Zap } from 'lucide-react';

/**
 * @file: EducationalResources.tsx
 * @description: Sección de blog educativo con Modales de Lectura Inmersiva y Sistema de Noticias.
 */

interface Article {
  title: string;
  description: string;
  content: string;
  icon: React.ReactNode;
  tag: string;
  color: string;
}

export default function EducationalResources() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const resources: Article[] = [
    {
      title: "Beneficios reales de la miel cruda",
      description: "Descubre por qué la miel sin pasteurizar es un superalimento para tu sistema inmune.",
      tag: "Salud",
      icon: <Heart className="text-red-400" />,
      color: "bg-red-400/10",
      content: `La miel cruda es una "farmacia natural". Al consumirla directamente de la colmena (sin procesar), incorporas fitonutrientes que tienen propiedades antifúngicas y antibacterianas potentes.

Beneficios clave:
- Refuerzo Inmune: Contiene polen local que ayuda a tu sistema a adaptarse a los alérgenos de tu entorno.
- Energía Natural: Sus azúcares no refinados se absorben de manera equilibrada, proporcionando energía sin los picos de insulina del azúcar blanco.
- Salud Digestiva: Actúa como un prebiótico, alimentando las bacterias buenas de tu intestino.
- Alivio de Garganta: Es un recubrimiento natural que calma la irritación de forma inmediata.`
    },
    {
      title: "Qué pasa si las abejas desaparecen",
      description: "Nuestra biodiversidad depende de ellas. Por cada kilo de miel, protegemos un ecosistema.",
      tag: "Ecosistema",
      icon: <ShieldAlert className="text-accent-gold" />,
      color: "bg-accent-gold/10",
      content: `Las abejas son el pilar invisible de nuestra mesa. Se estima que uno de cada tres bocados de comida que consumimos depende directamente de la polinización. 

En la Patagonia, las abejas polinizan especies nativas como el Maqui, el Radal y el Pehuén, manteniendo la estructura de nuestros bosques. Sin ellas, estos bosques no se regenerarían, perdiendo el hogar de miles de especies.

Néctar Colectivo nace para protegerlas. No solo extraemos miel; practicamos una apicultura de conservación donde la salud de la colmena siempre es prioridad frente a la producción masiva. Consumir nuestra miel es financiar la protección de las abejas patagónicas.`
    },
    {
      title: "Noticias: Inicio de Floración 2026",
      description: "Las primeras flores de primavera están brotando. El ciclo de la vida recomienza.",
      tag: "Novedades",
      icon: <Zap className="text-blue-400" />,
      color: "bg-blue-400/10",
      content: `¡El bosque está despertando! Esta semana hemos observado los primeros brotes de la temporada en la zona norte de la Comarca. 

Este es el momento más crítico y hermoso: las colmenas comienzan a activarse después del largo invierno patagónico. La calidad de la miel de este año dependerá de las lluvias de las próximas semanas. 

Mantente conectado para recibir actualizaciones sobre las primeras extracciones de 'Miel de Primavera' que estarán disponibles pronto.`
    }
  ];

  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
        {resources.map((resource, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            onClick={() => setSelectedArticle(resource)}
            className="group surface-low p-8 rounded-[2rem] space-y-6 hover:bg-surface-container-highest transition-colors cursor-pointer border-transparent hover:border-accent-gold/20 border flex flex-col h-full"
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform ${resource.color}`}>
              {resource.icon}
            </div>
            
            <div className="space-y-3 flex-grow">
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-on-surface-variant/40">
                {resource.tag}
              </span>
              <h3 className="text-xl font-display text-on-surface leading-tight">
                {resource.title}
              </h3>
              <p className="text-sm font-body text-on-surface-variant/70 leading-relaxed">
                {resource.description}
              </p>
            </div>
            
            <div className="pt-4 text-[10px] font-bold uppercase tracking-widest text-primary flex items-center gap-2 group-hover:gap-4 transition-all">
              Leer Artículo <div className="w-1 h-1 rounded-full bg-accent-gold" />
            </div>
          </motion.div>
        ))}

        {/* Sustainability Pledge */}
        <div className="col-span-1 md:col-span-2 lg:col-span-4 text-center pt-8">
          <p className="text-sm font-medium text-secondary flex items-center justify-center gap-2">
             <Sprout size={16} /> 
             Producción circular: Por cada frasco, sembramos 100 flores nativas.
          </p>
        </div>
      </div>

      {/* Inmersive Reading Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-6 md:p-12"
          >
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => setSelectedArticle(null)}
              className="absolute inset-0 bg-black/40 backdrop-blur-xl"
            />

            {/* Content Panel */}
            <motion.div
              layoutId={`article-${selectedArticle.title}`}
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-2xl bg-[#FCF9F4] rounded-[3rem] shadow-2xl overflow-hidden max-h-[85vh] flex flex-col"
            >
              {/* Header Context */}
              <div className="p-8 pb-4 flex justify-between items-start">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
                    {selectedArticle.tag} • El Archivo Néctar
                  </span>
                  <h2 className="text-3xl md:text-4xl font-display text-on-surface">
                    {selectedArticle.title}
                  </h2>
                </div>
                <button 
                  onClick={() => setSelectedArticle(null)}
                  className="p-3 hover:bg-surface-container rounded-full transition-colors group"
                >
                  <X className="text-on-surface-variant group-hover:rotate-90 transition-transform" />
                </button>
              </div>

              {/* Body Content */}
              <div className="p-8 pt-0 overflow-y-auto font-body text-on-surface-variant/80 text-lg leading-relaxed space-y-6">
                <div className="w-full h-[1px] bg-on-surface-variant/10 mb-8" />
                {selectedArticle.content.split('\n\n').map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
                
                <div className="pt-12 flex flex-col items-center gap-4 text-center">
                   <div className="w-12 h-[1px] bg-accent-gold/40" />
                   <p className="text-xs uppercase tracking-[0.4em] font-bold text-primary">Néctar Colectivo</p>
                   <p className="text-[10px] text-on-surface-variant/40 italic">Escrito con respeto en la Patagonia.</p>
                </div>
              </div>

              {/* Interactive Footer */}
              <div className="p-8 bg-surface-container-low flex justify-center">
                <button 
                  onClick={() => setSelectedArticle(null)}
                  className="px-8 py-3 bg-secondary text-white rounded-full text-xs font-bold uppercase tracking-widest hover:scale-105 transition-transform"
                >
                  Volver al Origen
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
