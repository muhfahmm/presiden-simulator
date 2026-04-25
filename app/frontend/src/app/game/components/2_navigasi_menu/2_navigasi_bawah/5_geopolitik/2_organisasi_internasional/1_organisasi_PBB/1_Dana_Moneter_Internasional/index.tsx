"use client"

import React, { useState, useEffect } from 'react';
import { Shield, Coins, Zap, CheckCircle2 } from "lucide-react";
import JoinOrgButton from "../logic/JoinOrgButton";
import { getOrgFee } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/5_geopolitik/2_organisasi_internasional/1_organisasi_PBB/logic/GeopoliticalConfig";

interface OrgProps {
    currentCash: number;
    currentDate: string;
    onUpdate?: () => void;
}

export default function IMFMenu({ currentCash, currentDate, onUpdate }: OrgProps) {
    return (
        <div className="bg-zinc-950/20 border border-zinc-800/30 rounded-3xl p-6 space-y-6 backdrop-blur-md">
            <div className="flex items-center gap-3">
                <div className="p-2.5 bg-blue-500/10 rounded-xl border border-blue-500/20">
                    <Coins className="h-5 w-5 text-blue-500" />
                </div>
                <h3 className="text-lg font-black text-white uppercase italic">Dana Moneter Internasional (IMF)</h3>
            </div>
            
            <div className="grid grid-cols-1 gap-4 text-left font-sans not-italic">
                <div className="p-4 bg-zinc-900/40 border border-zinc-800/50 rounded-2xl">
                    <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1.5 flex items-center gap-2">
                        <Zap size={12} className="text-blue-500" /> Dampak Bergabung
                    </p>
                    <p className="text-[11px] text-zinc-300 font-bold leading-relaxed">
                        Akses Pinjaman Darurat & Inflasi -10%.
                    </p>
                </div>

                <div className="p-4 bg-zinc-900/40 border border-zinc-800/50 rounded-2xl">
                    <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1.5 flex items-center gap-2">
                        <Coins size={12} className="text-amber-500" /> Manfaat Utama
                    </p>
                    <p className="text-[11px] text-zinc-300 font-bold leading-relaxed">
                        Stabilitas Moneter & Konsultasi Fiskal Internasional.
                    </p>
                </div>
            </div>

            <JoinOrgButton 
                orgId="imf" 
                orgName="Dana Moneter Internasional" 
                membershipFee={getOrgFee("imf", currentCash)} 
            />
        </div>
    );
}
