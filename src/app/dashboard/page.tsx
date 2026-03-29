'use client';

import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useStitchTokens } from '@/lib/stitch-bridge';
import CrystalCard from '@/components/ui/CrystalCard';
import { LayoutDashboard, Plus, Search, Filter } from 'lucide-react';

/**
 * @file: Dashboard Page
 * @description: Interfaz principal Atelier con visualización de datos en tarjetas de cristal.
 */

interface Project {
  id: string;
  title: string;
  category: string;
  status: string;
  roi_percent: number;
  stitch_color: string;
}

export default function DashboardPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const tokens = useStitchTokens();

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    const { data, error } = await supabase
      .from('atelier_projects')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && data) {
      setProjects(data);
    }
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-surface p-6 md:p-12 space-y-10 selection:bg-secondary">
      
      {/* Header Section */}
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 animate-stitch-in">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-secondary font-bold uppercase tracking-[0.2em] text-[10px]">
            <LayoutDashboard size={14} />
            Sistema Atelier
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white">Dashboard Proyectos</h1>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-secondary transition-colors" size={18} />
            <input 
              type="text" 
              placeholder="Buscar proyectos..." 
              className="bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-secondary/40 transition-all w-64"
            />
          </div>
          <button className="p-3 bg-white/5 border border-white/10 rounded-xl text-white/60 hover:text-secondary hover:border-secondary/40 transition-all">
            <Filter size={20} />
          </button>
          <button className="flex items-center gap-2 px-6 py-3 bg-secondary text-primary font-bold rounded-xl hover:bg-secondary/90 transition-all active:scale-[0.98]">
            <Plus size={20} /> Nuevo
          </button>
        </div>
      </header>

      {/* Stats Summary */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6 animate-stitch-in [animation-delay:200ms]">
        {[
          { label: 'Proyectos Activos', value: projects.length, trend: '+2 este mes' },
          { label: 'ROI Promedio', value: '18.5%', trend: '+1.2%' },
          { label: 'Activos en Storage', value: '124', trend: 'Nano Banana Pro' },
          { label: 'Stitch Sync', value: 'Ready', trend: 'v2.5' }
        ].map((stat, i) => (
          <div key={i} className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 space-y-2">
            <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest">{stat.label}</span>
            <div className="text-2xl font-bold text-white">{stat.value}</div>
            <div className="text-[10px] text-secondary font-medium">{stat.trend}</div>
          </div>
        ))}
      </section>

      {/* Project Feed */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold tracking-tight text-white/80">Proyectos Recientes</h2>
          <span className="text-xs text-secondary/60">Actualizado vía Google Stitch</span>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-48 bg-white/5 animate-pulse rounded-2xl border border-white/5" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <CrystalCard 
                key={project.id}
                title={project.title}
                category={project.category}
                status={project.status}
                roi={project.roi_percent}
                stitchColor={project.stitch_color}
                delay={0.4 + (i * 0.1)}
              />
            ))}
          </div>
        )}
      </section>

      {/* Asset Gallery Shortcut */}
      <section className="bg-gradient-to-r from-secondary/5 via-primary/5 to-transparent border border-secondary/10 rounded-3xl p-8 flex items-center justify-between mt-12">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold gold-gradient">AI Visual Gallery</h2>
          <p className="text-white/40 text-sm max-w-md">Explora y gestiona los activos visuales generados por IA sincronizados con el Storage de Supabase.</p>
        </div>
        <button 
          onClick={() => window.location.href = '/gallery'}
          className="px-8 py-4 bg-white/5 border border-white/10 rounded-2xl font-bold text-white hover:bg-white/10 transition-all"
        >
          Acceder a Galería ↗
        </button>
      </section>

    </main>
  );
}
