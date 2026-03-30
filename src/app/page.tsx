'use client';

import React from 'react';
import { motion } from 'framer-motion';
import EditorialGrid from '@/components/miel/EditorialGrid';
import SensoryCatalog from '@/components/miel/SensoryCatalog';
import EducationalResources from '@/components/miel/EducationalResources';
import WhatsAppFAB from '@/components/ui/WhatsAppFAB';
import { ArrowRight, Leaf, Pin, Sparkles } from 'lucide-react';

/**
 * @file: page.tsx (Miel-Page: Nectar Colectivo Humanized)
 * @description: Landing page rediseñada para cercanía, educación y origen Patagonia.
 */

export default function NectarPage() {
  return (
    <main className="min-h-screen bg-surface selection:bg-accent-gold/20">
      
      {/* Navigation (Editorial Glassmorphism) */}
      <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-[90] px-12 py-5 rounded-full honey-glass border border-white/5 flex items-center gap-12 text-[10px] font-bold uppercase tracking-[0.3em] text-on-surface-variant">
        <a href="#historia" className="hover:text-primary transition-colors">Nuestro Origen</a>
        <a href="#catalogo" className="hover:text-primary transition-colors font-display text-xl normal-case tracking-normal text-on-surface">Néctar Colectivo</a>
        <a href="#educacion" className="hover:text-primary transition-colors">Aprende</a>
      </nav>

      {/* Hero Section (Patagonia Heart) */}
      <section className="relative min-h-[90vh] flex items-center pt-32 overflow-hidden bg-surface">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative order-2 lg:order-1"
          >
            {/* Main Visual */}
            <div className="relative z-10 w-full aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl shadow-primary/5 group">
              <img 
                src="/images/hero-nectar-v2.png" 
                alt="Miel Cruda de la Patagonia" 
                className="w-full h-full object-cover transition-transform duration-[3000ms] group-hover:scale-110"
              />
              
            </div>
            {/* Background Texture (Asymmetric) */}
            <div className="absolute -top-12 -left-12 w-80 h-80 bg-accent-gold/5 blur-[120px] rounded-full" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-12 order-1 lg:order-2"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-secondary">
                <Leaf size={18} />
                <span className="text-[11px] font-bold uppercase tracking-[0.4em]">De la colmena a tu mesa</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-display leading-[1.0] text-on-surface">
                Néctar Puro de la <br/>
                <span className="italic pl-12 text-primary">Patagonia.</span>
              </h1>
            </div>
            
            <p className="font-body text-lg md:text-xl text-on-surface-variant leading-relaxed max-w-xl">
              Miel cruda y de origen ético, cultivada con respeto en el corazón de la Patagonia. 
              Cada frasco es un reflejo puro de nuestra flora local, sin aditivos ni pasteurización. 
              Porque <span className="text-secondary font-bold">cuidar de las abejas</span> es cuidar de nuestro futuro.
            </p>

            {/* Nueva información de producto y envío */}
            <div className="flex flex-col gap-2 py-2">
              <div className="flex items-center gap-2 text-primary font-bold text-sm">
                <Sparkles size={16} />
                <span>Presentación exclusiva de 500 gr</span>
              </div>
              <p className="text-on-surface-variant text-sm font-medium italic">
                Envío gratis a toda la Patagonia en compras superiores a 3 frascos.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 pt-4">
              <button onClick={() => document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' })} className="honey-glow-cta flex items-center gap-3 group">
                Explorar Colección <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy/Properties Section */}
      <section className="bg-surface-container-low" id="historia">
        <div className="container mx-auto px-6">
          <EditorialGrid 
            title="Un Tesoro para tu Salud"
            subtitle="Propiedades y Beneficios"
            description="La miel cruda es mucho más que un endulzante. Al no ser pasteurizada ni filtrada industrialmente, conserva intactas sus enzimas, antioxidantes y minerales esenciales. Actúa como un antibiótico natural y refuerza tu sistema inmune, ofreciendo una biodisponibilidad que solo la naturaleza pura puede brindar."
            imageUrl="/images/properties-honey.png"
            reverse
          />
        </div>
      </section>

      {/* Module B: Sensory Shop */}
      <section className="py-32 bg-surface" id="catalogo">
        <div className="container mx-auto px-6 space-y-20">
          <header className="text-center space-y-6 max-w-2xl mx-auto">
            <span className="text-primary text-[10px] font-bold uppercase tracking-[0.4em]">Cosecha Seleccionada</span>
            <h2 className="text-4xl md:text-5xl font-display text-on-surface">El Paisaje en un Frasco</h2>
            <div className="w-16 h-[2px] bg-accent-gold/40 mx-auto" />
            <p className="text-on-surface-variant font-medium">Cada cosecha es un registro único del clima y el entorno. Descubre la biodiversidad de la Patagonia capturada sin retoques, tal como la abeja la entregó.</p>
          </header>

          <SensoryCatalog />
        </div>
      </section>

      {/* Module C: Education Resources */}
      <section className="py-32 bg-surface-container-low" id="educacion">
        <div className="container mx-auto px-6 space-y-20">
          <header className="text-center space-y-6 max-w-2xl mx-auto">
            <span className="text-secondary text-[10px] font-bold uppercase tracking-[0.4em]">Cultura de las Abejas</span>
            <h2 className="text-4xl md:text-5xl font-display text-on-surface">Aprende con Nosotros</h2>
            <p className="text-on-surface-variant font-medium">Creemos en el consumidor informado. Conoce más sobre la importancia de la miel cruda y la biodiversidad.</p>
          </header>

          <EducationalResources />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-surface-container py-24 text-center space-y-12">
        <div className="container mx-auto px-6">
          <div className="font-display text-4xl gold-gradient tracking-tighter mb-4">Néctar Colectivo</div>
          
          <div className="flex flex-wrap justify-center gap-12 text-[10px] font-bold uppercase tracking-[0.3em] text-on-surface-variant/50">
            <a href="#" className="hover:text-primary transition-colors">Instagram</a>
            <a href="#" className="hover:text-primary transition-colors">Nuestro Compromiso</a>
            <a href="https://wa.me/541150599066?text=Hola,%20me%20interesa%20la%20miel%20de%20Nectar%20Colectivo." target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Hacer un Pedido</a>
          </div>
          
          <div className="w-full max-w-4xl h-[1px] bg-on-surface-variant/10 mx-auto my-12" />
          <div className="text-[10px] text-on-surface-variant/30 uppercase tracking-[0.2em] font-medium">
            © 2026 Néctar Colectivo - Cosechado a Mano en la Patagonia • Sin Pasteurizar • Sin Aditivos
          </div>
        </div>
      </footer>

      {/* Floating Interaction */}
      <WhatsAppFAB />

    </main>
  );
}
