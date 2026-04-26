"use client"

import React from 'react';
import { Landmark, Coins, AlertCircle, Lock, CheckCircle2 } from 'lucide-react';

interface OrgDebtPanelProps {
    isImfMember: boolean;
    isWbMember: boolean;
    onApply: (org: 'IMF' | 'WB') => void;
}

export const OrgDebtPanel: React.FC<OrgDebtPanelProps> = ({ isImfMember, isWbMember, onApply }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* IMF Card */}
            <div className={`p-5 rounded-3xl border transition-all relative overflow-hidden ${isImfMember ? 'bg-blue-600/5 border-blue-500/20 group hover:border-blue-500/40' : 'bg-zinc-900/20 border-zinc-800 opacity-70'}`}>
                <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-blue-500/10 rounded-2xl border border-blue-500/20">
                        <Coins className="h-6 w-6 text-blue-400" />
                    </div>
                    {isImfMember ? (
                        <div className="flex items-center gap-1.5 px-3 py-1 bg-green-500/10 rounded-full border border-green-500/20">
                            <CheckCircle2 className="h-3 w-3 text-green-500" />
                            <span className="text-[8px] font-black text-green-500 uppercase tracking-widest">Anggota</span>
                        </div>
                    ) : (
                        <div className="flex items-center gap-1.5 px-3 py-1 bg-rose-500/10 rounded-full border border-rose-500/20">
                            <Lock className="h-3 w-3 text-rose-500" />
                            <span className="text-[8px] font-black text-rose-500 uppercase tracking-widest">Terkunci</span>
                        </div>
                    )}
                </div>
                
                <h4 className="text-sm font-black text-white uppercase italic">IMF (Dana Moneter)</h4>
                <p className="text-[10px] text-zinc-500 font-medium mt-1 mb-6 uppercase tracking-wider leading-relaxed">
                   Stabilitas Sistem Keuangan Global & Bantuan Krisis Likuiditas.
                </p>

                {isImfMember ? (
                    <button 
                        onClick={() => onApply('IMF')}
                        className="w-full py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-[9px] font-black uppercase tracking-[0.2em] rounded-xl shadow-lg shadow-blue-900/40 active:scale-95 transition-all"
                    >
                        Ajukan Paket Krisis →
                    </button>
                ) : (
                    <div className="py-2.5 px-4 bg-zinc-900 border border-amber-500/20 rounded-xl flex items-center gap-3 shadow-[0_0_15px_rgba(245,158,11,0.05)]">
                        <AlertCircle className="h-4 w-4 text-amber-500 animate-pulse" />
                        <span className="text-[10px] font-black text-amber-500 uppercase leading-tight tracking-wider">
                            Harus bergabung melalui hub Geopolitik
                        </span>
                    </div>
                )}
            </div>

            {/* World Bank Card */}
            <div className={`p-5 rounded-3xl border transition-all relative overflow-hidden ${isWbMember ? 'bg-emerald-600/5 border-emerald-500/20 group hover:border-emerald-500/40' : 'bg-zinc-900/20 border-zinc-800 opacity-70'}`}>
                <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-emerald-500/10 rounded-2xl border border-emerald-500/20">
                        <Landmark className="h-6 w-6 text-emerald-400" />
                    </div>
                    {isWbMember ? (
                        <div className="flex items-center gap-1.5 px-3 py-1 bg-green-500/10 rounded-full border border-green-500/20">
                            <CheckCircle2 className="h-3 w-3 text-green-500" />
                            <span className="text-[8px] font-black text-green-500 uppercase tracking-widest">Anggota</span>
                        </div>
                    ) : (
                        <div className="flex items-center gap-1.5 px-3 py-1 bg-rose-500/10 rounded-full border border-rose-500/20">
                            <Lock className="h-3 w-3 text-rose-500" />
                            <span className="text-[8px] font-black text-rose-500 uppercase tracking-widest">Terkunci</span>
                        </div>
                    )}
                </div>
                
                <h4 className="text-sm font-black text-white uppercase italic">Bank Dunia</h4>
                <p className="text-[10px] text-zinc-500 font-medium mt-1 mb-6 uppercase tracking-wider leading-relaxed">
                   Pemberian pinjaman untuk pembangunan ekonomi & infrastruktur strategis.
                </p>

                {isWbMember ? (
                    <button 
                        onClick={() => onApply('WB')}
                        className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-[9px] font-black uppercase tracking-[0.2em] rounded-xl shadow-lg shadow-emerald-900/40 active:scale-95 transition-all"
                    >
                        Dana Pembangunan →
                    </button>
                ) : (
                    <div className="py-2.5 px-4 bg-zinc-900 border border-amber-500/20 rounded-xl flex items-center gap-3 shadow-[0_0_15px_rgba(245,158,11,0.05)]">
                        <AlertCircle className="h-4 w-4 text-amber-500 animate-pulse" />
                        <span className="text-[10px] font-black text-amber-500 uppercase leading-tight tracking-wider">
                            Harus bergabung melalui hub Geopolitik
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
};
