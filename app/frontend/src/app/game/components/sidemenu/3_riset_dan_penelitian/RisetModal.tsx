"use client"

import React from 'react';
import { 
  X, 
  Microscope, 
  FlaskConical, 
  Atom, 
  Dna, 
  Cpu, 
  Zap, 
  Lock,
  Factory
} from 'lucide-react';
import IndustrialResearchDetail from './1_riset_industri/IndustrialResearchDetail';



interface RisetModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeMenu: string;
  setActiveMenu: (menu: string) => void;
}


export default function RisetModal({ isOpen, onClose, activeMenu, setActiveMenu }: RisetModalProps) {
  if (!isOpen) return null;

  const researchCategories = [
    { id: 'Produksi_Industri', name: 'Produksi Industri', icon: Factory, color: 'text-indigo-400', unread: 0 },
  ];



  return (
    <div className="absolute inset-0 bg-black/85 z-[110] flex items-center justify-center animate-in fade-in duration-300 p-4 md:p-8 no-scrollbar">
      <div className="bg-zinc-950 border border-zinc-800 rounded-[40px] w-full max-w-[95vw] h-[82vh] overflow-hidden shadow-2xl flex flex-col relative">
        
        {/* Glow Effects */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]"></div>

        {/* Header Section */}
        <div className="px-8 py-6 border-b border-zinc-800/50 flex items-center justify-between bg-zinc-900/30 relative z-10">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-500/10 rounded-xl">
              <Microscope className="h-6 w-6 text-purple-500" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight italic uppercase">Pusat Riset & Pengembangan</h2>
              <p className="text-xs text-zinc-500 font-medium uppercase tracking-widest mt-0.5">National Research & Innovation Center</p>
            </div>
          </div>
          <button onClick={onClose} className="p-3 rounded-2xl bg-rose-600 border border-rose-500 hover:bg-rose-500 text-white transition-all cursor-pointer shadow-[0_0_15px_rgba(225,29,72,0.3)] active:scale-95 group flex items-center gap-2">
              <span className="text-[10px] font-black uppercase tracking-widest pl-1">Tutup</span>
              <X className="h-6 w-6 group-hover:rotate-90 transition-transform" />
          </button>
        </div>

        {/* Content Section */}
        <div className="flex-1 overflow-y-auto no-scrollbar bg-zinc-950/20 relative z-10">
          {activeMenu.startsWith('Menu:Riset:') ? (
            <IndustrialResearchDetail onBack={() => setActiveMenu('Menu:Riset')} />
          ) : (
            <div className="p-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="max-w-4xl mx-auto flex flex-col items-center justify-center text-center space-y-8 py-12">
                <div className="flex justify-center w-full mt-12 mb-12">
                  {researchCategories.map(cat => (
                    <div 
                      key={cat.id} 
                      onClick={() => setActiveMenu(`Menu:Riset:${cat.id}`)}
                      className="bg-zinc-900/60 border-2 border-zinc-500/30 p-20 rounded-[4rem] flex flex-col items-center gap-10 group hover:border-indigo-400/50 transition-all duration-500 hover:scale-[1.02] shadow-[0_0_50px_rgba(0,0,0,0.5)] hover:shadow-[0_0_80px_rgba(99,102,241,0.15)] relative overflow-hidden cursor-pointer"
                    >

                      {/* Subtle Card Glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                      <div className={`p-12 bg-zinc-950/80 rounded-[2.5rem] border border-zinc-800 ${cat.color} group-hover:scale-110 transition-transform duration-500 shadow-2xl relative z-10`}>
                        <cat.icon size={64} strokeWidth={1.5} />
                      </div>

                      <div className="flex flex-col items-center gap-2 relative z-10">
                        <span className="text-2xl font-black uppercase tracking-[0.2em] text-white italic group-hover:text-indigo-400 transition-colors">
                          {cat.name}
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-indigo-500/60">
                          Sektor Manufaktur Strategis
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
