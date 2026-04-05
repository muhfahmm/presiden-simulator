"use client"

import { useState, useEffect } from "react";
import { Radiation, Zap, FlaskConical, Binary, AlertTriangle, ArrowLeft, Loader2, Gauge, Microscope, ChevronRight, Box } from "lucide-react";
import { CountryData } from "@/app/database/data/semua_fitur_negara/index";
import { nuclearStorage, NuclearData } from "../../nuclearStorage";
import { budgetStorage } from "@/app/game/components/1_navbar/3_kas_negara";

interface Props {
  onBack: () => void;
  data: CountryData;
}

export default function ProgramNuklirRiset({ onBack, data }: Props) {
  const [nuclearData, setNuclearData] = useState<NuclearData>(nuclearStorage.getData());

  useEffect(() => {
    const handleUpdate = () => setNuclearData(nuclearStorage.getData());
    window.addEventListener('nuclear_storage_updated', handleUpdate);
    return () => window.removeEventListener('nuclear_storage_updated', handleUpdate);
  }, []);

  const toggleEnrichment = () => {
    nuclearStorage.saveData({
      ...nuclearData,
      isEnriching: !nuclearData.isEnriching
    });
  };

  const produceWarhead = (type: 'tactical' | 'strategic') => {
    const isTactical = type === 'tactical';
    const cost = isTactical ? 5000000 : 15000000;
    const reqPurity = isTactical ? 90 : 95;

    if (budgetStorage.getBudget() < cost) return;
    if (nuclearData.uraniumPurity < reqPurity) return;
    if (!isTactical && nuclearData.miniaturizationLevel < 2) return;

    budgetStorage.updateBudget(-cost);
    nuclearStorage.saveData({
      ...nuclearData,
      tacticalWarheads: isTactical ? nuclearData.tacticalWarheads + 1 : nuclearData.tacticalWarheads,
      strategicWarheads: !isTactical ? nuclearData.strategicWarheads + 1 : nuclearData.strategicWarheads,
      uraniumPurity: nuclearData.uraniumPurity - (isTactical ? 5 : 10) // Consume purity
    });
  };

  const upgradeLab = () => {
    const cost = nuclearData.labLevel === 1 ? 10000000 : 25000000;
    if (nuclearData.labLevel >= 3) return;
    if (budgetStorage.getBudget() < cost) return;

    budgetStorage.updateBudget(-cost);
    nuclearStorage.saveData({
      ...nuclearData,
      labLevel: nuclearData.labLevel + 1
    });
  };

  const disposeWaste = () => {
    if (nuclearData.wasteAmount <= 0) return;
    nuclearStorage.saveData({
      ...nuclearData,
      wasteAmount: Math.max(0, nuclearData.wasteAmount - 50)
    });
  };

  return (
    <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-right-8 duration-700">
      
      {/* Detail Header */}
      <div className="flex items-center justify-between">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group text-[10px] font-black uppercase tracking-widest cursor-pointer"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Kembali ke Strategi Utama
        </button>
        <div className="flex items-center gap-2 px-4 py-1.5 bg-yellow-500/10 border border-yellow-500/20 rounded-full">
           <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse"></div>
           <span className="text-[9px] font-black text-yellow-500 uppercase tracking-widest">Otoritas Level Omega Aktif</span>
        </div>
      </div>
      
      {/* Strategic Maintenance Alert */}
      <div className="bg-amber-500/10 border border-amber-500/30 rounded-3xl p-5 flex items-start gap-4 animate-in slide-in-from-top-4 duration-500">
         <div className="p-2.5 bg-amber-500/20 rounded-xl border border-amber-500/30">
            <Zap className="h-5 w-5 text-amber-500 animate-pulse" />
         </div>
         <div className="flex-1 space-y-1">
            <div className="flex justify-between items-center">
               <h4 className="text-[11px] font-black text-amber-500 uppercase tracking-widest leading-none">Peringatan Anggaran Operasional</h4>
               <span className="text-[9px] font-black text-zinc-400 uppercase px-2 py-0.5 bg-zinc-950 border border-zinc-800 rounded-full italic tracking-tighter">Budget Alert</span>
            </div>
            <p className="text-[10px] text-zinc-300 font-medium leading-relaxed mt-1">
               Mengaktifkan unit sentrifugasi akan mengonsumsi <span className="text-white font-bold">{(50000 * nuclearData.labLevel).toLocaleString('id-ID')} GOLD / Hari</span> dari Kas Negara untuk keperluan energi tinggi dan pemeliharaan teknis di Level Lab {nuclearData.labLevel}.
            </p>
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column: Enrichment Control */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-[40px] p-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
               <Radiation size={160} className="animate-spin-slow" />
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-yellow-500/10 rounded-2xl border border-yellow-500/20">
                  <Gauge className="h-6 w-6 text-yellow-500" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-white italic uppercase tracking-tight">Sentrifugasi & Pengayaan</h3>
                  <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest mt-0.5">Uranium Enrichment Facility v4.0</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                      <span className="text-zinc-400">Kemurnian Terkini</span>
                      <span className="text-yellow-500 italic">{nuclearData.uraniumPurity.toFixed(2)}% U-235</span>
                    </div>
                    <div className="h-4 bg-zinc-950 border border-zinc-800 rounded-full p-1 shadow-inner overflow-hidden">
                       <div 
                         className="h-full bg-gradient-to-r from-yellow-700 via-yellow-500 to-yellow-400 rounded-full transition-all duration-1000 shadow-[0_0_15px_rgba(234,179,8,0.3)]"
                         style={{ width: `${nuclearData.uraniumPurity}%` }}
                       ></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-zinc-950/50 border border-zinc-800 rounded-2xl flex flex-col gap-1">
                      <span className="text-[8px] font-black text-zinc-400 uppercase tracking-widest leading-none">Output Harian</span>
                      <span className="text-lg font-black text-white italic">{(0.1 * nuclearData.labLevel).toFixed(2)} <span className="text-[10px] text-zinc-400 uppercase">%</span></span>
                    </div>
                    <div className="p-4 bg-zinc-950/50 border border-zinc-800 rounded-2xl flex flex-col gap-1">
                      <span className="text-[8px] font-black text-zinc-400 uppercase tracking-widest leading-none">Beban Energi</span>
                      <span className="text-lg font-black text-cyan-500 italic">{450 * nuclearData.labLevel} <span className="text-[10px] text-zinc-400 uppercase">MW/H</span></span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <button 
                    onClick={toggleEnrichment}
                    className={`w-full py-6 rounded-3xl font-black uppercase tracking-[0.2em] transition-all active:scale-95 flex items-center justify-center gap-3 shadow-2xl cursor-pointer ${
                      nuclearData.isEnriching 
                        ? "bg-rose-600 text-white hover:bg-rose-500 shadow-rose-900/20" 
                        : "bg-yellow-500 text-black hover:bg-yellow-400 shadow-yellow-900/20"
                    }`}
                  >
                    {nuclearData.isEnriching ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Hentikan Reaktor
                      </>
                    ) : (
                      <>
                        <Zap className="h-5 w-5" />
                        Aktifkan Sentrifugasi
                      </>
                    )}
                  </button>
                  <p className="text-[9px] text-center text-zinc-400 font-bold uppercase tracking-widest">Membutuhkan Otorisasi Kementrian Energi</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Warhead Card */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-[32px] p-6 group hover:border-zinc-700 transition-all">
               <div className="flex items-center justify-between mb-6">
                  <div className="p-2.5 bg-zinc-950 rounded-xl border border-zinc-800 group-hover:bg-zinc-900 transition-colors">
                    <Binary className="h-5 w-5 text-zinc-400" />
                  </div>
                  <span className="text-[9px] font-black text-zinc-400 uppercase tracking-widest">Inventory Strategis</span>
               </div>
               <div className="space-y-1">
                  <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">Hulu Ledak Siap (T / S)</span>
                  <div className="text-4xl font-black text-white italic tracking-tighter">
                    {nuclearData.tacticalWarheads} <span className="text-sm text-zinc-400 uppercase mx-1">/</span> {nuclearData.strategicWarheads}
                  </div>
               </div>
               <div className="grid grid-cols-2 gap-2 mt-6">
                  <button 
                    onClick={() => produceWarhead('tactical')}
                    className="py-3 rounded-xl bg-zinc-800 border border-zinc-700 text-zinc-400 font-bold text-[9px] uppercase tracking-widest hover:text-white hover:bg-zinc-700 transition-all active:scale-95 cursor-pointer"
                  >
                    Taktis (5M)
                  </button>
                  <button 
                    onClick={() => produceWarhead('strategic')}
                    className="py-3 rounded-xl bg-zinc-800 border border-zinc-700 text-zinc-400 font-bold text-[9px] uppercase tracking-widest hover:text-white hover:bg-zinc-700 transition-all active:scale-95 cursor-pointer"
                  >
                    Strategis (15M)
                  </button>
               </div>
            </div>

            {/* Waste Management Card */}
            <div className="bg-zinc-900/50 border border-rose-500/10 rounded-[32px] p-6 group hover:border-rose-500/30 transition-all">
               <div className="flex items-center justify-between mb-6">
                  <div className="p-2.5 bg-rose-500/5 rounded-xl border border-rose-500/10">
                    <AlertTriangle className="h-5 w-5 text-rose-500/50" />
                  </div>
                  <div className="flex items-center gap-1.5 px-2 py-0.5 bg-zinc-950 border border-zinc-800 rounded-full">
                     <div className="w-1 h-1 rounded-full bg-emerald-500"></div>
                     <span className="text-[8px] font-black text-emerald-500 uppercase tracking-widest">Aman</span>
                  </div>
               </div>
               <div className="space-y-1">
                  <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">Limbah Radioaktif</span>
                  <div className="text-4xl font-black text-white italic tracking-tighter">{nuclearData.wasteAmount.toFixed(1)} <span className="text-sm text-zinc-400 uppercase ml-1">KG</span></div>
               </div>
               <button 
                onClick={disposeWaste}
                className="w-full mt-6 py-3 rounded-xl bg-rose-950/20 border border-rose-500/20 text-rose-500/70 font-bold text-[10px] uppercase tracking-widest hover:bg-rose-900/30 transition-all active:scale-95 cursor-pointer"
               >
                  Pembuangan Samudra (Rahasia)
               </button>
            </div>
          </div>
        </div>

        {/* Right Column: Research & Upgrades */}
        <div className="space-y-6">
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-[40px] p-8 h-full flex flex-col shadow-2xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-cyan-500/10 rounded-2xl border border-cyan-500/20">
                <Microscope className="h-6 w-6 text-cyan-500" />
              </div>
              <div>
                <h3 className="text-lg font-black text-white italic uppercase tracking-tight">Riset Strategis</h3>
                <p className="text-[9px] text-zinc-400 font-bold uppercase tracking-widest mt-0.5">Omega Level Research Tree</p>
              </div>
            </div>

            <div className="flex-1 space-y-4">
              {[
                { 
                  id: 'lab',
                  title: `Level Lab: ${nuclearData.labLevel}`, 
                  desc: "Meningkatkan efisiensi sentrifugasi +15% per level", 
                  cost: nuclearData.labLevel === 1 ? "10M" : nuclearData.labLevel === 2 ? "25M" : "MAX", 
                  status: nuclearData.labLevel < 3 ? 'ready' : 'locked',
                  action: upgradeLab
                },
                { 
                  id: 'min',
                  title: `Miniaturisasi: Lvl ${nuclearData.miniaturizationLevel}`, 
                  desc: "Diperlukan untuk memproduksi hulu ledak strategis.", 
                  cost: "15M", 
                  status: nuclearData.miniaturizationLevel < 2 ? 'ready' : 'locked',
                  action: () => {
                    if (budgetStorage.getBudget() < 15000000) return;
                    budgetStorage.updateBudget(-15000000);
                    nuclearStorage.saveData({ ...nuclearData, miniaturizationLevel: nuclearData.miniaturizationLevel + 1 });
                  }
                },
                { 
                  id: 'sec',
                  title: `Keamanan: Lvl ${nuclearData.securityLevel}`, 
                  desc: "Perlindungan riset dari sabotase asing dan kebocoran.", 
                  cost: "8M", 
                  status: nuclearData.securityLevel < 3 ? 'ready' : 'locked',
                  action: () => {
                    if (budgetStorage.getBudget() < 8000000) return;
                    budgetStorage.updateBudget(-8000000);
                    nuclearStorage.saveData({ ...nuclearData, securityLevel: nuclearData.securityLevel + 1 });
                  }
                },
              ].map((item, i) => (
                <div 
                  key={i} 
                  onClick={item.status === 'ready' ? item.action : undefined}
                  className={`p-5 rounded-3xl border transition-all ${
                    item.status === 'ready' 
                      ? "bg-zinc-950/80 border-cyan-500/30 hover:border-cyan-500 hover:bg-zinc-900 cursor-pointer group" 
                      : "bg-zinc-950/30 border-zinc-800 opacity-60"
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className={`text-xs font-black uppercase tracking-tight ${item.status === 'ready' ? 'text-cyan-400' : 'text-zinc-400'}`}>{item.title}</h4>
                    <span className="text-[10px] font-black text-zinc-400 tracking-tighter uppercase italic">{item.cost}</span>
                  </div>
                  <p className="text-[9px] font-medium text-zinc-400 leading-relaxed mb-4">{item.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[8px] font-black text-zinc-400 uppercase tracking-widest">{item.status === 'ready' ? 'Siaga Inisiasi' : 'Mencapai Batas'}</span>
                    <ChevronRight size={14} className={`${item.status === 'ready' ? 'text-cyan-500 group-hover:translate-x-1' : 'text-zinc-600'} transition-all`} />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-zinc-800/50">
               <div className="bg-zinc-950 border border-zinc-800 p-4 rounded-2xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                     <FlaskConical className="h-4 w-4 text-emerald-500" />
                     <span className="text-[9px] font-black text-zinc-400 uppercase tracking-widest">Staf Ahli Aktif</span>
                  </div>
                  <span className="text-xs font-black text-white italic">12 <span className="text-[9px] text-zinc-400 not-italic ml-1 uppercase">Ilmuwan</span></span>
               </div>
            </div>
          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
