"use client"

import React, { useState, useEffect } from 'react';
import { Anchor, Coins, Zap, CheckCircle2 } from "lucide-react";
import { unIMOStorage } from "./unIMOStorage";

interface OrgProps {
    currentCash: number;
    currentDate: string;
    onUpdate?: () => void;
}

export default function IMOMenu({ currentCash, currentDate, onUpdate }: OrgProps) {
    const [state, setState] = useState(unIMOStorage.getData());

    useEffect(() => {
        setState(unIMOStorage.getData());
    }, []);

    const handleJoin = () => {
        const result = unIMOStorage.join(currentCash, currentDate);
        if (result.success) {
            setState(unIMOStorage.getData());
            if (onUpdate) onUpdate();
        } else {
            alert(result.message);
        }
    };

    return (
        <div className="bg-zinc-950/20 border border-zinc-800/30 rounded-3xl p-6 space-y-6 backdrop-blur-md">
            <div className="flex items-center gap-3">
                <div className="p-2.5 bg-teal-500/10 rounded-xl border border-teal-500/20">
                    <Anchor className="h-5 w-5 text-teal-500" />
                </div>
                <h3 className="text-lg font-black text-white uppercase italic">IMO Details</h3>
            </div>
            
            <div className="grid grid-cols-1 gap-4 text-left font-sans not-italic">
                <div className="p-4 bg-zinc-900/40 border border-zinc-800/50 rounded-2xl">
                    <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1.5 flex items-center gap-2">
                        <Zap size={12} className="text-teal-500" /> Dampak Bergabung
                    </p>
                    <p className="text-[11px] text-zinc-300 font-bold leading-relaxed">
                        Speed Armada +10% & Proteksi Pembajakan.
                    </p>
                </div>

                <div className="p-4 bg-zinc-900/40 border border-zinc-800/50 rounded-2xl">
                    <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1.5 flex items-center gap-2">
                        <Coins size={12} className="text-amber-500" /> Biaya Masuk
                    </p>
                    <p className="text-[11px] text-zinc-300 font-bold leading-relaxed">
                        Koordinasi Navigasi: 8.000.000.
                    </p>
                </div>
            </div>

            {state.isJoined ? (
                <div className="w-full py-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center gap-3 text-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.1)]">
                    <CheckCircle2 size={16} />
                    <span className="text-[10px] font-black uppercase tracking-widest">Keanggotaan Aktif</span>
                </div>
            ) : (
                <button 
                    onClick={handleJoin}
                    className="w-full py-4 rounded-2xl bg-purple-600 hover:bg-purple-500 text-white text-[10px] font-black uppercase tracking-[0.2em] transition-all active:scale-95 shadow-lg shadow-purple-600/20 cursor-pointer"
                >
                    Apply Membership
                </button>
            )}
        </div>
    );
}
