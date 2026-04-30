import React, { useMemo } from 'react';
import { X, Sword, Shield, Target, Users, Plane, Ship, Truck } from 'lucide-react';
import { countries } from "@/app/database/data/negara/benua/index";
import { calculateTotalMilitaryPower } from "../../../3_armada_militer/kekuatanmiliter";

interface ModalPerangProps {
  invasion: any;
  onClose: () => void;
}

export const ModalPerang: React.FC<ModalPerangProps> = ({ invasion, onClose }) => {
  const targetName = invasion.target;
  const deployedUnits = invasion.units;

  const targetCountry = useMemo(() => {
    return countries.find(c => c.name_id === targetName);
  }, [targetName]);

  const targetPower = useMemo(() => {
    if (!targetCountry) return { darat: 0, laut: 0, udara: 0, total: 0 };
    return calculateTotalMilitaryPower(targetCountry.armada_militer, {}, targetCountry.religion, targetCountry.ideology);
  }, [targetCountry]);

  // Total deployed strength calculation
  const playerDeployedPower = useMemo(() => {
    // This is a simplified calculation for the report
    return deployedUnits.reduce((acc: number, unit: any) => acc + (unit.count || 0), 0) * 1000; // placeholder multiplier
  }, [deployedUnits]);

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
              <h2 className="text-2xl font-black text-white uppercase tracking-tight italic">Laporan Medan Tempur</h2>
              <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                <Target className="h-3 w-3" />
                Target: {targetName}
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
          <div className="grid grid-cols-2 gap-8">
            
            {/* Player Side */}
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
                <span className="text-emerald-500 font-black uppercase tracking-tighter text-lg italic">Pasukan Anda</span>
                <span className="bg-emerald-500/10 text-emerald-500 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-emerald-500/20">Siap Tempur</span>
              </div>
              
              <div className="space-y-3">
                {deployedUnits.map((unit: any, idx: number) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-zinc-800/50 rounded-2xl border border-zinc-700/30">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-zinc-900 rounded-lg">
                        {unit.type === 'tank' && <Truck className="h-4 w-4 text-emerald-500" />}
                        {unit.type === 'pesawat' && <Plane className="h-4 w-4 text-emerald-500" />}
                        {unit.type === 'kapal' && <Ship className="h-4 w-4 text-emerald-500" />}
                      </div>
                      <span className="text-zinc-300 font-bold capitalize">{unit.type}</span>
                    </div>
                    <span className="text-white font-black">{unit.count?.toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Target Side */}
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
                <span className="text-rose-500 font-black uppercase tracking-tighter text-lg italic">Pasukan {targetName}</span>
                <span className="bg-rose-500/10 text-rose-500 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-rose-500/20">Siaga</span>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-rose-500/5 rounded-2xl border border-rose-500/10 space-y-4">
                  <div className="flex justify-between items-end">
                    <span className="text-zinc-500 text-[10px] font-black uppercase tracking-widest">Total Power Pertahanan</span>
                    <span className="text-white font-black text-xl">{targetPower.total.toLocaleString()}</span>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-[10px] font-bold uppercase text-zinc-400">
                      <span>Darat</span>
                      <span>{targetPower.darat.toLocaleString()}</span>
                    </div>
                    <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                      <div className="h-full bg-rose-500" style={{ width: '60%' }} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-[10px] font-bold uppercase text-zinc-400">
                      <span>Udara</span>
                      <span>{targetPower.udara.toLocaleString()}</span>
                    </div>
                    <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                      <div className="h-full bg-rose-500" style={{ width: '45%' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Strategic Analysis */}
          <div className="mt-12 p-6 bg-red-500/5 border border-red-500/10 rounded-3xl">
             <div className="flex items-start gap-4">
                <div className="p-3 bg-red-500/20 rounded-2xl">
                   <Shield className="h-6 w-6 text-red-500" />
                </div>
                <div>
                   <h4 className="text-red-500 font-black uppercase tracking-tighter text-lg italic">Analisis Intelijen</h4>
                   <p className="text-zinc-400 text-sm mt-1 leading-relaxed">
                      Kekuatan pertahanan musuh di sektor darat terpantau cukup solid. Disarankan untuk menggunakan 
                      dukungan armada udara guna melemahkan garis depan sebelum melakukan penetrasi darat.
                   </p>
                </div>
             </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-6 bg-zinc-900 border-t border-zinc-800 flex gap-4">
          <button 
            onClick={onClose}
            className="flex-1 py-4 px-6 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-black uppercase tracking-widest text-xs rounded-2xl transition-all"
          >
            Mundur / Batalkan
          </button>
          <button 
            className="flex-2 py-4 px-12 bg-red-600 hover:bg-red-500 text-white font-black uppercase tracking-widest text-xs rounded-2xl shadow-[0_0_20px_rgba(220,38,38,0.4)] transition-all flex items-center justify-center gap-3"
          >
            <Sword className="h-4 w-4" />
            Mulai Pertempuran
          </button>
        </div>
      </div>
    </div>
  );
};
