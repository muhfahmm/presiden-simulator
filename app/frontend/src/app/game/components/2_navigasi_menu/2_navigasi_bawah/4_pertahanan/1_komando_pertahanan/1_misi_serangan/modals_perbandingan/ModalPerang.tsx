import React, { useMemo } from 'react';
import { X, Sword, Shield, Target, Users, Plane, Ship, Truck, Heart } from 'lucide-react';
import { countries } from "@/app/database/data/semua_fitur_negara/0_profiles/index";
import { calculateTotalMilitaryPower } from "../../../3_armada_militer/kekuatanmiliter";
import * as MilPower from "../../../3_armada_militer/kekuatanmiliter";
import { analisisStrategi } from "../pages/logic/EngineJembatan";
import { activeWarStorage } from "../pages/logic/activeWarStorage";

interface ModalPerangProps {
  invasion: any;
  onClose: () => void;
  onStartBattle: () => void;
}

export const ModalPerang: React.FC<ModalPerangProps> = ({ invasion, onClose, onStartBattle }) => {
  // SUPER ROBUST Country Detection
  const getSourceId = (): string | null => {
    // 1. Direct field check
    if (invasion.source) return invasion.source;
    
    // 2. ID Analysis (handle various separators)
    const id = invasion.id || "";
    const parts = id.split(/[-_ ]/); // Split by dash, underscore, or space
    
    // Format: ai-Source-Target-...
    if (id.startsWith('ai') && parts.length >= 2) return parts[1];
    
    // Format: source-target-...
    if (parts.length >= 2) return parts[0];

    return null;
  };

  const getTargetId = (): string | null => {
    if (invasion.target) return invasion.target;
    const id = invasion.id || "";
    const parts = id.split(/[-_ ]/);
    
    if (id.startsWith('ai') && parts.length >= 3) return parts[2];
    if (parts.length >= 2) return parts[1];
    
    return null;
  };

  // DEBUGGING: Lihat isi objek di Console browser (F12)
  React.useEffect(() => {
    console.log("WAR REPORT DEBUG:", {
        id: invasion.id,
        source: invasion.source,
        target: invasion.target,
        fullObject: invasion
    });
  }, [invasion]);

  const sourceId: string | null = getSourceId();
  const currentTargetId: string | null = getTargetId();

  const sourceCountry = useMemo(() => {
    if (!sourceId) return null;
    return countries.find(c => 
        c.name_id.toLowerCase() === sourceId.toLowerCase() || 
        c.name_en.toLowerCase() === sourceId.toLowerCase()
    );
  }, [sourceId]);

  const targetCountry = useMemo(() => {
    if (!currentTargetId) return null;
    return countries.find(c => 
        c.name_id.toLowerCase() === currentTargetId.toLowerCase() || 
        c.name_en.toLowerCase() === currentTargetId.toLowerCase()
    );
  }, [currentTargetId]);

  const targetName: string = currentTargetId || invasion.target || "Target Unknown";
  const deployedUnits = invasion.units || [];

  // Check if war is active
  const savedWar = activeWarStorage.getState();
  const isActive = savedWar?.target === targetName && savedWar?.phase !== 'result';
  const isCeasefire = savedWar?.target === targetName && savedWar?.isCeasefire;

  const targetPower = useMemo(() => {
    if (!targetCountry) return { darat: 0, laut: 0, udara: 0, total: 0 };
    return calculateTotalMilitaryPower(targetCountry.armada_militer, {}, targetCountry.religion, targetCountry.ideology);
  }, [targetCountry]);

  // Total deployed strength calculation
  const playerDeployedPower = useMemo(() => {
    return deployedUnits.reduce((acc: number, unit: any) => {
        let p = 1;
        const t = unit.type.toLowerCase();
        if (t === 'tank') p = MilPower.TANK_POWER_PER_UNIT;
        else if (t === 'pesawat') p = MilPower.INTERCEPTOR_POWER_PER_UNIT;
        else if (t === 'kapal') p = MilPower.DESTROYER_POWER_PER_UNIT;
        return acc + ((unit.count || 0) * p);
    }, 0);
  }, [deployedUnits]);

  // Sync with Engine Jembatan (Python)
  const intelAnalysis = useMemo(() => {
    // Generate virtual enemy unit array for analysis
    if (!targetCountry) return { probabilitas: 0, rekomendasi: "..." };
    
    // We need to simulate the enemy unit list for the Python logic
    const am = targetCountry.armada_militer || {};
    const enemyUnits = [
        { type: 'Infanteri', count: (am.barak || 0) * 10000 },
        { type: 'Tank', count: am.darat?.tank_tempur_utama || 0 },
        { type: 'Jet', count: (am.udara?.jet_tempur_siluman || 0) + (am.udara?.jet_tempur_interceptor || 0) }
    ];

    return analisisStrategi(deployedUnits, enemyUnits, playerDeployedPower, targetPower.total);
  }, [targetCountry, deployedUnits, playerDeployedPower, targetPower]);

  if (!targetCountry) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-sm">
      <div className="w-full max-w-4xl bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-red-950/50 to-zinc-900 border-b border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-red-500/10 rounded-2xl border border-red-500/20">
              <Sword className="h-6 w-6 text-red-500" />
            </div>
            <div>
              <h2 className="text-2xl font-black text-white uppercase tracking-tight italic flex items-center gap-2">
                Laporan Medan Tempur:
                <span className="text-red-500">{sourceCountry?.name_id || sourceId || 'Penyerang'}</span>
                <span className="text-zinc-500 text-sm">VS</span>
                <span className="text-rose-500">{targetCountry?.name_id || targetName}</span>
              </h2>
              <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                <Target className="h-3 w-3" />
                Status: Operasi Militer Aktif
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-zinc-800 rounded-xl transition-colors"
          >
            <X className="h-6 w-6 text-zinc-500" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-8">
          <div className="grid grid-cols-2 gap-12">
            
            {/* Player/Attacker Side */}
            <div className="space-y-8">
              <div className="flex items-center justify-between pb-4 border-b border-emerald-500/30">
                <div className="flex flex-col">
                  <span className="text-emerald-500 font-black uppercase tracking-tighter text-xl italic">
                    {invasion.source === 'indonesia' ? 'Pasukan Anda' : `Pasukan ${sourceCountry?.name_id || sourceId || 'Penyerang'}`}
                  </span>
                  <span className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest mt-1 italic">Status: Menyerang</span>
                </div>
                <div className="text-right">
                  <span className="block text-white font-black text-2xl tabular-nums leading-none">
                    {Math.round(((invasion.currentAttackerPower || playerDeployedPower) / (invasion.maxAttackerPower || playerDeployedPower)) * 100)}%
                  </span>
                  <span className="text-[9px] font-black text-emerald-500/60 uppercase tracking-widest italic">Integritas Armada</span>
                </div>
              </div>
              
              <div className="space-y-4">
                 <div className="h-4 bg-zinc-800 rounded-full overflow-hidden border border-zinc-700/50 p-0.5">
                    <div 
                      className="h-full bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.4)] transition-all duration-1000"
                      style={{ width: `${((invasion.currentAttackerPower || playerDeployedPower) / (invasion.maxAttackerPower || playerDeployedPower)) * 100}%` }}
                    />
                 </div>
                 <div className="flex justify-between items-center bg-zinc-800/30 p-4 rounded-2xl border border-zinc-700/20">
                    <span className="text-zinc-400 text-xs font-bold uppercase">Kekuatan Efektif</span>
                    <span className="text-white font-black text-lg italic">{(invasion.currentAttackerPower || playerDeployedPower).toLocaleString()} PWR</span>
                 </div>
                 
                 {/* Visual Unit Status */}
                 <div className="grid grid-cols-2 gap-2">
                    {deployedUnits.map((unit: any, idx: number) => (
                      <div key={idx} className="bg-zinc-800/50 p-2.5 rounded-xl border border-zinc-700/30 flex justify-between items-center">
                        <span className="text-[9px] font-black text-zinc-500 uppercase">{unit.type}</span>
                        <span className="text-xs font-black text-white italic">{unit.count?.toLocaleString()}</span>
                      </div>
                    ))}
                 </div>
              </div>
            </div>

            {/* Target/Defender Side */}
            <div className="space-y-8">
              <div className="flex items-center justify-between pb-4 border-b border-rose-500/30">
                <div className="flex flex-col">
                  <span className="text-rose-500 font-black uppercase tracking-tighter text-xl italic">Pertahanan {targetName}</span>
                  <span className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest mt-1 italic">Status: Bertahan</span>
                </div>
                <div className="text-right">
                  <span className="block text-white font-black text-2xl tabular-nums leading-none">
                    {Math.round(((invasion.currentDefenderPower || targetPower.total) / (invasion.maxDefenderPower || targetPower.total)) * 100)}%
                  </span>
                  <span className="text-[9px] font-black text-rose-500/60 uppercase tracking-widest italic">Ketahanan Wilayah</span>
                </div>
              </div>

              <div className="space-y-6">
                 <div className="h-4 bg-zinc-800 rounded-full overflow-hidden border border-zinc-700/50 p-0.5">
                    <div 
                      className="h-full bg-gradient-to-r from-rose-600 to-rose-400 rounded-full shadow-[0_0_15px_rgba(244,63,94,0.4)] transition-all duration-1000"
                      style={{ width: `${((invasion.currentDefenderPower || targetPower.total) / (invasion.maxDefenderPower || targetPower.total)) * 100}%` }}
                    />
                 </div>

                 {/* Detailed Unit Breakdown for Defender */}
                 <div className="grid grid-cols-2 gap-3">
                    <div className="bg-zinc-800/20 p-4 rounded-2xl border border-zinc-700/10 space-y-2">
                       <p className="text-[8px] font-black text-zinc-500 uppercase tracking-widest border-b border-zinc-800 pb-1 mb-2">Divisi Darat</p>
                       <div className="flex justify-between text-[10px] font-bold"><span className="text-zinc-400">Infanteri</span><span className="text-white">{(targetCountry.armada_militer?.barak || 0) * 10000}</span></div>
                       <div className="flex justify-between text-[10px] font-bold"><span className="text-zinc-400">Tank</span><span className="text-white">{targetCountry.armada_militer?.darat?.tank_tempur_utama || 0}</span></div>
                       <div className="flex justify-between text-[10px] font-bold"><span className="text-zinc-400">APC</span><span className="text-white">{targetCountry.armada_militer?.darat?.apc_ifv || 0}</span></div>
                    </div>

                    <div className="bg-zinc-800/20 p-4 rounded-2xl border border-zinc-700/10 space-y-2">
                       <p className="text-[8px] font-black text-zinc-500 uppercase tracking-widest border-b border-zinc-800 pb-1 mb-2">Skadron Udara</p>
                       <div className="flex justify-between text-[10px] font-bold"><span className="text-zinc-400">Jet Tempur</span><span className="text-white">{(targetCountry.armada_militer?.udara?.jet_tempur_siluman || 0) + (targetCountry.armada_militer?.udara?.jet_tempur_interceptor || 0)}</span></div>
                       <div className="flex justify-between text-[10px] font-bold"><span className="text-zinc-400">Helikopter</span><span className="text-white">{targetCountry.armada_militer?.udara?.helikopter_serang || 0}</span></div>
                       <div className="flex justify-between text-[10px] font-bold"><span className="text-zinc-400">Pembom</span><span className="text-white">{targetCountry.armada_militer?.udara?.pesawat_pengebom || 0}</span></div>
                    </div>
                    
                    <div className="col-span-2 bg-zinc-800/20 p-4 rounded-2xl border border-zinc-700/10 flex justify-between items-center">
                       <p className="text-[8px] font-black text-zinc-500 uppercase tracking-widest">Kekuatan Pertahanan Total</p>
                       <span className="text-white font-black text-lg italic">{targetPower.total.toLocaleString()} PWR</span>
                    </div>
                 </div>
              </div>
            </div>
          </div>

          {/* Siege Analysis */}
          <div className="mt-12 p-8 bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 border border-zinc-700/30 rounded-[40px] relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Shield className="h-32 w-32" />
             </div>
             
             <div className="relative flex items-center gap-8">
                <div className="flex flex-col items-center gap-2">
                   <div className="w-20 h-20 rounded-3xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                      <Sword className="h-10 w-10 text-red-500 animate-pulse" />
                   </div>
                   <span className="text-[10px] font-black text-red-500 uppercase italic">Fase Atrisi</span>
                </div>
                
                <div className="flex-1 space-y-2">
                    <h4 className="text-white font-black uppercase tracking-tighter text-2xl italic leading-none">
                       {invasion.source === 'indonesia' || invasion.isAiVsUser ? 'Analisis Intelijen (Python)' : 'Laporan Observasi Militer'}
                    </h4>
                    <p className="text-zinc-400 text-sm font-bold leading-relaxed max-w-2xl">
                       Perang memasuki fase atrisi panjang. Pertahanan {targetName} {((invasion.currentDefenderPower || targetPower.total) / (invasion.maxDefenderPower || targetPower.total)) < 0.5 ? 'mulai goyah' : 'masih sangat kokoh'}. 
                       Estimasi kemenangan didasarkan pada perbandingan sisa logistik dan kekuatan efektif armada yang tersisa.
                    </p>
                    <div className="flex items-center gap-6 mt-4 pt-4 border-t border-zinc-800">
                       <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                          <span className="text-[10px] font-black text-zinc-500 uppercase">Peluang Menang: <span className="text-white italic">{intelAnalysis.probabilitas}%</span></span>
                       </div>
                       <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-amber-500" />
                          <span className="text-[10px] font-black text-zinc-500 uppercase">Kondisi Medan: <span className="text-white italic">Sangat Berat</span></span>
                       </div>
                    </div>
                </div>
             </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-6 bg-zinc-900 border-t border-zinc-800 flex gap-4">
          {invasion.source === 'indonesia' || invasion.isAiVsUser ? (
            <>
              <button 
                onClick={onClose}
                className="flex-1 py-4 px-6 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-black uppercase tracking-widest text-xs rounded-2xl transition-all cursor-pointer"
              >
                Mundur / Batalkan
              </button>
              
              <button 
                onClick={onStartBattle}
                className={`flex-2 py-4 px-12 text-white font-black uppercase tracking-widest text-xs rounded-2xl transition-all flex items-center justify-center gap-3 cursor-pointer active:scale-95 ${
                  (isActive || isCeasefire) 
                    ? 'bg-amber-600 hover:bg-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.4)]' 
                    : 'bg-red-600 hover:bg-red-500 shadow-[0_0_20px_rgba(220,38,38,0.4)]'
                }`}
              >
                <Sword className="h-4 w-4" />
                {isActive || isCeasefire ? 'Lanjutkan Pertempuran' : 'Mulai Pertempuran'}
              </button>
            </>
          ) : (
            <button 
              onClick={onClose}
              className="w-full py-4 px-6 bg-zinc-800 hover:bg-zinc-700 text-white font-black uppercase tracking-widest text-xs rounded-2xl transition-all cursor-pointer"
            >
              Tutup Laporan Observasi
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

