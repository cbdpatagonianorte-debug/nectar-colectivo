'use client';

import React, { useState } from 'react';
import { supabase } from '@/lib/supabase';
import GlassContainer from '@/components/ui/GlassContainer';
import { LogIn, Mail, Lock, Sparkles } from 'lucide-react';

/**
 * @file: page.tsx (Login)
 * @description: Interfaz de acceso premium con estética Glassmorphism y fondo cinemático.
 */

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      window.location.href = '/dashboard';
    }
  };

  return (
    <main className="relative min-h-screen flex items-center justify-center p-6 bg-surface overflow-hidden">
      
      {/* Cinematic Background (Fall-back) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-surface to-black opacity-90" />
        {/* Simulación de profundidad cinemática */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-secondary/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-primary/30 blur-[150px] rounded-full" />
      </div>

      <GlassContainer className="w-full max-w-md z-10 animate-stitch-in" delay={0.2}>
        <div className="space-y-8">
          <header className="text-center space-y-2">
            <div className="mx-auto w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary border border-secondary/20 mb-4">
              <Sparkles size={32} />
            </div>
            <h1 className="text-3xl font-bold gold-gradient">Welcome back</h1>
            <p className="text-white/50 text-sm font-body">Inicia sesión en tu espacio Atelier</p>
          </header>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={18} />
                <input
                  type="email"
                  placeholder="Email institucional"
                  className="w-full bg-white/5 border border-secondary/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-secondary/40 transition-all font-body"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={18} />
                <input
                  type="password"
                  placeholder="Contraseña premium"
                  className="w-full bg-white/5 border border-secondary/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-secondary/40 transition-all font-body"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            {error && (
              <p className="text-red-400 text-xs text-center font-body bg-red-400/10 py-2 rounded-lg border border-red-400/20">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-secondary text-primary font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-secondary/90 transition-all disabled:opacity-50 active:scale-[0.98]"
            >
              {loading ? 'Validando...' : <><LogIn size={20} /> Entrar</>}
            </button>
          </form>

          <footer className="text-center">
            <p className="text-[10px] text-white/20 uppercase tracking-[0.2em] font-bold">
              Atelier Protected Access
            </p>
          </footer>
        </div>
      </GlassContainer>
    </main>
  );
}
