'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shrub, Droplets, Fingerprint, Waves, Award } from 'lucide-react';

/**
 * @file: SensoryCatalog.tsx
 * @description: Catálogo sensorial de mieles con enfoque en la experiencia física.
 */

interface ProductNote {
  icon: React.ReactNode;
  label: string;
  value: string;
}

interface Product {
  name: string;
  origin: string;
  notes: ProductNote[];
  price: string;
}

export default function SensoryCatalog() {
  const products: Product[] = [
    {
      name: "Miel con clavo de olor",
      origin: "Comarca, Patagonia Norte",
      price: "$5.300",
      notes: [
        { icon: <Droplets size={14} />, label: "Olor", value: "Especiado e intenso" },
        { icon: <Fingerprint size={14} />, label: "Color", value: "Clara cristalina" },
        { icon: <Waves size={14} />, label: "Textura", value: "Fluida y envolvente" },
        { icon: <Shrub size={14} />, label: "Sabor", value: "Clavo y notas a madera" },
      ]
    },
    {
      name: "Miel Pura",
      origin: "Comarca, Patagonia Norte",
      price: "$5.000",
      notes: [
        { icon: <Droplets size={14} />, label: "Olor", value: "Flores silvestres y campo" },
        { icon: <Fingerprint size={14} />, label: "Color", value: "Dorado ambarino" },
        { icon: <Waves size={14} />, label: "Textura", value: "Suave y cristalina" },
        { icon: <Shrub size={14} />, label: "Sabor", value: "Dulzor balanceado y floral" },
      ]
    },
    {
      name: "Miel Dorada",
      origin: "Comarca, Patagonia Norte",
      price: "$5.800",
      notes: [
        { icon: <Droplets size={14} />, label: "Olor", value: "Cálido, terroso y cítrico" },
        { icon: <Fingerprint size={14} />, label: "Color", value: "Dorado intenso / Ocre" },
        { icon: <Waves size={14} />, label: "Textura", value: "Densa y levemente granulosa" },
        { icon: <Shrub size={14} />, label: "Sabor", value: "Dulce especiado y picante" },
      ]
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-12">
      {products.map((product, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
          viewport={{ once: true }}
          className="surface-lowest p-8 rounded-[3rem] shadow-xl shadow-primary/5 space-y-8 flex flex-col group relative overflow-hidden"
        >
          {/* Certification Badge */}
          <div className="absolute top-6 right-6 flex items-center gap-2 bg-secondary/5 px-4 py-2 rounded-full text-secondary text-[9px] font-bold uppercase tracking-widest border border-secondary/10">
            <Award size={12} />
            Miel 100% Artesanal
          </div>

          <div className="space-y-2 pt-6">
            <h3 className="text-3xl font-display text-on-surface group-hover:text-primary transition-colors">
              {product.name}
            </h3>
            <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/40 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
              {product.origin}
            </p>
          </div>

          {/* Sensory Grid */}
          <div className="grid grid-cols-2 gap-6 bg-surface p-6 rounded-[2rem] border border-surface-container">
            {product.notes.map((note, i) => (
              <div key={i} className="space-y-1">
                <div className="flex items-center gap-2 text-primary font-bold text-[9px] uppercase tracking-wider">
                  {note.icon} {note.label}
                </div>
                <p className="text-sm font-body text-on-surface-variant/80">
                  {note.value}
                </p>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between pt-4">
            <span className="text-2xl font-bold text-primary font-display">{product.price}</span>
            <button className="text-[10px] uppercase font-bold tracking-widest text-secondary hover:text-primary transition-all border-b border-secondary/10 pb-1">
              Ver Detalles Sensoriales
            </button>
          </div>
        </motion.div>
      ))}

      {/* Trust Quote Module */}
      <div className="col-span-1 md:col-span-3 py-16 text-center">
        <div className="inline-flex items-center gap-6 bg-surface-container py-6 px-12 rounded-full border border-surface-container-high shadow-inner">
          <div className="w-12 h-12 rounded-full bg-accent-gold/20 flex items-center justify-center text-primary">
            <Award />
          </div>
          <p className="font-body text-sm font-medium text-on-surface-variant italic">
            "Directamente de la Patagonia: sin aditivos, sin pasteurización. Solo la esencia de la tierra."
          </p>
        </div>
      </div>
    </div>
  );
}
