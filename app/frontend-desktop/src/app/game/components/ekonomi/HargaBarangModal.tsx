"use client"

import React, { useState, useMemo } from "react"
import { X, Tag, TrendingUp, TrendingDown, Coins, Gem, BarChart3, Info, Globe, ArrowUpRight, ArrowDownRight, Activity, Droplets } from "lucide-react"

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Helper to generate random SVG paths for sparklines
const generateSparkline = (width: number, height: number, points: number) => {
  const step = width / (points - 1);
  const data = Array.from({ length: points }, () => Math.random() * height);
  return `M 0 ${data[0]} ${data.map((h, i) => `L ${i * step} ${h}`).join(' ')}`;
};

export default function HargaBarangModal({ isOpen, onClose }: ModalProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua");

  const priceData = [
    { name: "Emas (Gold)", price: 2150, unit: "/oz", trend: "up", change: "+0.3%", icon: Gem, color: "text-yellow-500", glow: "shadow-yellow-500/20" },
    { name: "Uranium", price: 92.4, unit: "/lb", trend: "up", change: "+1.2%", icon: Activity, color: "text-green-400", glow: "shadow-green-400/20" },
    { name: "Batu Bara", price: 125, unit: "/ton", trend: "down", change: "-5.8%", icon: Coins, color: "text-zinc-700", glow: "shadow-zinc-700/20" },
    { name: "Minyak Bumi", price: 78.4, unit: "/barrel", trend: "down", change: "-1.1%", icon: Coins, color: "text-zinc-400", glow: "shadow-zinc-500/20" },
    { name: "Gas Alam", price: 2.45, unit: "/mmBtu", trend: "up", change: "+3.2%", icon: Activity, color: "text-blue-300", glow: "shadow-blue-300/20" },
    { name: "Garam (Salt)", price: 1.5, unit: "/kg", trend: "up", change: "+0.5%", icon: BarChart3, color: "text-white", glow: "shadow-white/20" },
    { name: "Nikel", price: 17200, unit: "/ton", trend: "down", change: "-4.2%", icon: Gem, color: "text-green-500", glow: "shadow-green-500/20" },
    { name: "Litium", price: 13500, unit: "/ton", trend: "up", change: "+8.5%", icon: Gem, color: "text-cyan-400", glow: "shadow-cyan-400/20" },
    { name: "Tembaga", price: 8900, unit: "/ton", trend: "up", change: "+1.5%", icon: Gem, color: "text-orange-600", glow: "shadow-orange-600/20" },
    { name: "Aluminium", price: 2450, unit: "/ton", trend: "up", change: "+0.4%", icon: BarChart3, color: "text-zinc-300", glow: "shadow-zinc-300/20" },
    { name: "Rare Earth", price: 640, unit: "/kg", trend: "up", change: "+12.4%", icon: Activity, color: "text-purple-400", glow: "shadow-purple-400/20" },
    { name: "Bijih Besi", price: 110, unit: "/ton", trend: "down", change: "-2.3%", icon: BarChart3, color: "text-red-900", glow: "shadow-red-900/20" },
  ];

  // Memoized paths to prevent flickering on re-render
  const mainChartPath = useMemo(() => {
    const points = Array.from({ length: 20 }, (_, i) => ({
      x: i * 40,
      y: 100 + Math.sin(i * 0.5) * 50 + Math.random() * 20
    }));
    return `M 0 ${points[0].y} ${points.map(p => `L ${p.x} ${p.y}`).join(' ')}`;
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center animate-in fade-in zoom-in-95 duration-300 p-4 lg:p-12 backdrop-blur-md">
      <div className="bg-zinc-950 border border-zinc-800/50 rounded-[3rem] w-full max-w-6xl h-[85vh] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.8)] flex flex-col relative font-sans">
        
        {/* Decorative Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

        {/* Top Header */}
        <div className="px-10 py-8 border-b border-zinc-900 flex items-center justify-between bg-zinc-950/80 backdrop-blur-xl relative z-10">
          <div className="flex items-center gap-6">
            <div className="p-4 bg-cyan-500/10 rounded-[1.5rem] border border-cyan-500/20 shadow-[0_0_30px_rgba(6,182,212,0.15)] group hover:scale-110 transition-transform">
              <Tag className="h-8 w-8 text-cyan-400" />
            </div>
            <div>
              <h2 className="text-3xl font-black text-white tracking-tighter uppercase italic flex items-center gap-3">
                Indeks Harga Global
              </h2>
              <div className="flex items-center gap-2 mt-1">
                <span className="h-2 w-2 rounded-full bg-cyan-500 animate-pulse shadow-[0_0_10px_rgba(6,182,212,0.5)]"></span>
                <p className="text-[11px] text-zinc-500 font-bold uppercase tracking-[0.4em]">Integrated Terminal System v8.0</p>
              </div>
            </div>
          </div>
          <button onClick={onClose} className="p-4 rounded-2xl hover:bg-zinc-900 transition-all text-zinc-500 hover:text-white cursor-pointer group border border-transparent hover:border-zinc-800">
            <X className="h-8 w-8 group-hover:rotate-90 transition-transform" />
          </button>
        </div>
        
        {/* Content */}
        <div className="flex-1 overflow-y-auto p-10 relative z-10 space-y-10">
          
          {/* Main Chart Section */}
          <div className="bg-zinc-900/20 border border-zinc-900 rounded-[2.5rem] p-10 relative overflow-hidden backdrop-blur-sm group">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-600/5 blur-[120px] rounded-full pointer-events-none"></div>
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
              <div className="space-y-1">
                <span className="text-[10px] font-black text-cyan-500 uppercase tracking-[0.5em] block">Volatilitas Pasar 24 Jam</span>
                <h3 className="text-2xl font-black text-white tracking-tight flex items-center gap-3">
                  INDEX_DASHBOARD_LIVE
                  <div className="h-1 w-12 bg-cyan-500/30 rounded-full"></div>
                </h3>
              </div>
              <div className="flex gap-4">
                <div className="px-6 py-3 bg-zinc-950 border border-zinc-800 rounded-2xl flex flex-col">
                  <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">Kinerja Index</span>
                  <span className="text-lg font-black text-green-500">+12.4%</span>
                </div>
                <div className="px-6 py-3 bg-zinc-950 border border-zinc-800 rounded-2xl flex flex-col">
                  <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">Sentimen Global</span>
                  <span className="text-lg font-black text-cyan-400">BULLISH</span>
                </div>
              </div>
            </div>

            {/* SVG Main Chart */}
            <div className="relative h-64 w-full bg-zinc-950/30 rounded-3xl border border-zinc-900/50 p-4">
              <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 800 200">
                <defs>
                  <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path 
                  d={`${mainChartPath} L 800 200 L 0 200 Z`} 
                  fill="url(#chartGradient)" 
                  className="animate-in fade-in duration-1000"
                />
                <path 
                  d={mainChartPath} 
                  fill="none" 
                  stroke="#22d3ee" 
                  strokeWidth="3" 
                  strokeLinecap="round" 
                  className="animate-pulse"
                />
                {/* Horizontal Grid Lines */}
                {[50, 100, 150].map(y => (
                  <line key={y} x1="0" y1={y} x2="800" y2={y} stroke="#ffffff08" strokeWidth="1" />
                ))}
              </svg>
            </div>
          </div>

          {/* Commodity Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {priceData.map((item, idx) => (
              <div key={idx} className="bg-zinc-900/20 border border-zinc-900 p-8 rounded-[2.5rem] flex flex-col gap-8 group hover:border-cyan-500/30 transition-all relative overflow-hidden backdrop-blur-sm">
                
                {/* Background Icon Glow */}
                <div className={`absolute -top-10 -right-10 opacity-5 group-hover:opacity-10 transition-all duration-700 rotate-12 group-hover:rotate-0`}>
                  <item.icon className="h-48 w-48" />
                </div>
                
                <div className="flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-zinc-950 rounded-xl border border-zinc-800 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/20 transition-all">
                      <item.icon className={`h-4 w-4 ${item.color}`} />
                    </div>
                    <span className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em]">{item.name}</span>
                  </div>
                  <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-950 border border-zinc-800 text-[9px] font-black ${item.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                    {item.trend === 'up' ? <ArrowUpRight size={10} /> : <ArrowDownRight size={10} />}
                    {item.change}
                  </div>
                </div>

                <div className="space-y-1 relative z-10">
                  <span className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest block">Market Valuation</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-black text-white tracking-tighter italic">{typeof item.price === 'number' ? item.price.toLocaleString('id-ID') : item.price}</span>
                    <span className="text-[10px] font-bold text-zinc-500 uppercase">{item.unit}</span>
                  </div>
                </div>

                {/* Sparkline for each card */}
                <div className="h-12 w-full mt-2 relative z-10 opacity-40 group-hover:opacity-100 transition-opacity">
                  <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 20">
                    <path 
                      d={generateSparkline(100, 20, 10)} 
                      fill="none" 
                      stroke={item.trend === 'up' ? '#22c55e' : '#ef4444'} 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-zinc-900/20 border border-zinc-900 p-8 rounded-[2.5rem] flex items-start gap-8 relative overflow-hidden group hover:border-blue-500/20 transition-all backdrop-blur-sm">
             <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
             <div className="p-4 bg-zinc-950 rounded-[1.5rem] border border-zinc-800 relative z-10">
               <Activity className="h-6 w-6 text-blue-400" />
             </div>
             <div className="relative z-10">
               <h4 className="text-base font-black text-white uppercase tracking-tight mb-2">Terminal Analisis Strategis</h4>
               <p className="text-xs text-zinc-500 leading-relaxed font-medium">
                 Fluktuasi pasar yang Anda amati di atas merupakan cerminan dari kebijakan fiskal dan stabilitas geopolitik wilayah Anda. 
                 <span className="text-blue-400/80 ml-1">Pantau rute perdagangan secara aktif untuk menjaga ketahanan ekonomi nasional.</span>
               </p>
             </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-10 py-8 border-t border-zinc-900 bg-zinc-950/80 backdrop-blur-xl flex justify-end gap-6 relative z-10">
          <button className="px-8 py-3 text-[11px] font-black text-zinc-500 uppercase tracking-[0.3em] hover:text-white transition-colors border border-transparent hover:border-zinc-800 rounded-xl">
            Download Index Report
          </button>
          <button className="px-10 py-4 bg-cyan-600 hover:bg-cyan-500 text-white text-[11px] font-black uppercase tracking-[0.3em] rounded-2xl transition-all shadow-[0_15px_30px_rgba(6,182,212,0.3)] hover:shadow-[0_20px_40px_rgba(6,182,212,0.4)] active:scale-95">
            Analisis Komoditas Mendalam
          </button>
        </div>
      </div>
    </div>
  )
}
