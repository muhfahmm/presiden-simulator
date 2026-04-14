"use client"

import React from 'react';
import { 
  Terminal, Server, Code2, 
  Cpu, Activity, Zap, 
  Globe, Shield, Box
} from 'lucide-react';

export default function ServerTestPage() {
  const modules = [
    { name: 'Go (Golang)', path: '/server/go', icon: <Zap className="text-sky-400" />, status: 'Structure Only', description: 'Engine for high-concurrency tasks.' },
    { name: 'Rust', path: '/server/rust', icon: <Shield className="text-orange-500" />, status: 'Structure Only', description: 'Memory-safe compute engine.' },
    { name: 'C++ (CPP)', path: '/server/cpp', icon: <Box className="text-blue-500" />, status: 'Active (AI Brain)', description: 'Low-latency mathematical simulation.' },
    { name: 'Python', path: '/server/python', icon: <Code2 className="text-yellow-400" />, status: 'Structure Only', description: 'Data science and complex heuristics.' },
    { name: 'Java', path: '/server/java', icon: <Server className="text-red-400" />, status: 'Structure Only', description: 'Enterprise-grade services.' }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-8 font-sans">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-12">
        <div className="flex items-center gap-4 mb-2">
          <div className="p-3 bg-amber-500/10 rounded-2xl border border-amber-500/20">
            <Terminal className="text-amber-500" size={28} />
          </div>
          <h1 className="text-4xl font-black tracking-tighter uppercase italic">
            Server Architecture <span className="text-amber-500">Hub</span>
          </h1>
        </div>
        <p className="text-zinc-500 font-medium">Cross-language backend infrastructure status and testing.</p>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map((mod) => (
          <div key={mod.name} className="bg-zinc-900/30 border border-zinc-800 rounded-3xl p-6 hover:border-zinc-700 transition-all group overflow-hidden relative">
            <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity">
              {mod.icon}
            </div>
            
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-zinc-950 rounded-xl border border-zinc-800">
                {mod.icon}
              </div>
              <div>
                <h3 className="font-black uppercase tracking-tight">{mod.name}</h3>
                <span className="text-[10px] font-bold text-zinc-500 font-mono">{mod.path}</span>
              </div>
            </div>

            <p className="text-xs text-zinc-400 mb-6 leading-relaxed">
              {mod.description}
            </p>

            <div className="flex items-center justify-between mt-auto">
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${mod.status === 'Active (AI Brain)' ? 'bg-emerald-500 animate-pulse' : 'bg-zinc-700'}`} />
                <span className={`text-[10px] font-black uppercase tracking-widest ${mod.status === 'Active (AI Brain)' ? 'text-emerald-500' : 'text-zinc-500'}`}>
                  {mod.status}
                </span>
              </div>
              <button className="text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors">
                Run Test
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Info */}
      <div className="max-w-6xl mx-auto mt-12 p-8 bg-amber-500/5 border border-amber-500/10 rounded-[40px] flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-6">
          <div className="p-4 bg-zinc-950 rounded-full border border-zinc-800">
            <Activity className="text-emerald-500" size={32} />
          </div>
          <div>
            <h4 className="text-lg font-black uppercase italic">Simultaneous AI Simulation</h4>
            <p className="text-xs text-zinc-400">Processing 207 nations at 1Hz frequency across multi-language binaries.</p>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="px-4 py-2 bg-zinc-950 border border-zinc-800 rounded-xl text-xs font-mono">Status: NORMAL</div>
          <div className="px-4 py-2 bg-zinc-950 border border-zinc-800 rounded-xl text-xs font-mono">Load: 0.2%</div>
        </div>
      </div>
    </div>
  );
}
