'use client';

import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { listAssets, getAssetUrl } from '@/lib/storage-helper';
import GlassContainer from '@/components/ui/GlassContainer';
import { Image as ImageIcon, Sparkles, Download, ArrowLeft } from 'lucide-react';

/**
 * @file: Gallery Page
 * @description: Visualización de activos de lujo generados por IA y almacenados en Supabase.
 */

interface Asset {
  name: string;
  url: string;
}

export default function GalleryPage() {
  const [assets, setAssets] = useState<Asset[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAssets();
  }, []);

  const fetchAssets = async () => {
    try {
      const files = await listAssets();
      if (files) {
        const formattedAssets = files.map((file) => ({
          name: file.name,
          url: getAssetUrl(`gallery/${file.name}`),
        }));
        setAssets(formattedAssets);
      }
    } catch (err) {
      console.error('Error fetching assets:', err);
    }
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-surface p-6 md:p-12 space-y-12">
      
      {/* Navigation Header */}
      <nav className="flex items-center justify-between animate-stitch-in">
        <button 
          onClick={() => window.location.href = '/dashboard'}
          className="flex items-center gap-2 text-white/40 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest"
        >
          <ArrowLeft size={16} /> Volver al Dashboard
        </button>
        <div className="text-secondary font-bold uppercase tracking-[0.3em] text-[10px]">
          Atelier Visual Assets
        </div>
      </nav>

      <header className="space-y-4 text-center max-w-2xl mx-auto animate-stitch-in [animation-delay:200ms]">
        <h1 className="text-5xl font-bold tracking-tight gold-gradient">Galería de Activos</h1>
        <p className="text-white/40 font-body">Visualización y gestión de activos visuales generados por IA con el estilo Nano Banana Pro.</p>
      </header>

      {/* Gallery Grid */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-8 animate-stitch-in [animation-delay:400ms]">
        
        {/* Placeholder for Generating New Asset */}
        <div className="aspect-[3/4] rounded-3xl border-2 border-dashed border-secondary/20 flex flex-col items-center justify-center space-y-4 hover:border-secondary/40 transition-all cursor-pointer group">
          <div className="w-16 h-16 rounded-2xl bg-secondary/5 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
             <Sparkles size={32} />
          </div>
          <span className="text-xs font-bold uppercase tracking-widest text-secondary/60">Nuevo Activo AI</span>
        </div>

        {loading ? (
          [1, 2, 3].map((i) => (
            <div key={i} className="aspect-[3/4] bg-white/5 animate-pulse rounded-3xl border border-white/5" />
          ))
        ) : (
          assets.map((asset, i) => (
            <GlassContainer key={i} className="group p-0 overflow-hidden aspect-[3/4]">
              <div className="relative w-full h-full">
                <img 
                  src={asset.url} 
                  alt={asset.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                    <span className="text-[10px] text-white font-bold uppercase tracking-widest">{asset.name.split('.')[0]}</span>
                    <button className="p-2 bg-secondary text-primary rounded-lg hover:scale-110 transition-transform">
                      <Download size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </GlassContainer>
          ))
        )}

      </section>

      {/* Empty State */}
      {!loading && assets.length === 0 && (
        <div className="py-24 text-center space-y-4">
          <ImageIcon className="mx-auto text-white/10" size={64} />
          <p className="text-white/30 font-body text-sm">No hay activos almacenados en Supabase Storage.</p>
        </div>
      )}

    </main>
  );
}
