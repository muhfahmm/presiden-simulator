"use client"

import React, { useState, useEffect } from 'react';
import { LogIn, CheckCircle2, Coins, AlertCircle, Loader2 } from "lucide-react";
import { unMembershipStorage } from "./unMembershipStorage";
import { budgetStorage } from "@/app/game/components/1_navbar/3_kas_negara";

interface JoinOrgButtonProps {
    orgId: string;
    orgName: string;
    membershipFee?: number;
    className?: string;
}

export default function JoinOrgButton({ 
    orgId, 
    orgName, 
    membershipFee = 500000000, // Default 500M
    className = "" 
}: JoinOrgButtonProps) {
    const [isMember, setIsMember] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const checkMembership = () => {
            const joined = unMembershipStorage.getJoinedOrganizations();
            setIsMember(joined.includes(orgId));
        };

        checkMembership();
        window.addEventListener("un_membership_updated", checkMembership);
        return () => window.removeEventListener("un_membership_updated", checkMembership);
    }, [orgId]);

    const handleJoin = async () => {
        setIsLoading(true);
        setError(null);

        try {
            const currentCash = budgetStorage.getData().anggaran;
            
            if (currentCash < membershipFee) {
                setError("Anggaran tidak cukup untuk membayar iuran keanggotaan.");
                setIsLoading(false);
                return;
            }

            // Deduct money
            budgetStorage.setBudgetDirect(currentCash - membershipFee);
            
            // Join org
            unMembershipStorage.joinOrganization(orgId);
            
            // Success
            setIsMember(true);
        } catch (err) {
            setError("Terjadi kesalahan teknis saat memproses keanggotaan.");
        } finally {
            setIsLoading(false);
        }
    };

    if (isMember) {
        return (
            <div className="flex items-center gap-3 px-6 py-3 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl text-emerald-400 font-bold uppercase text-[10px] tracking-widest animate-in fade-in zoom-in duration-300">
                <CheckCircle2 size={16} />
                Sudah Menjadi Anggota
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center gap-4 w-full">
            <button 
                onClick={handleJoin}
                disabled={isLoading}
                className={`group relative overflow-hidden px-10 py-4 bg-purple-600 hover:bg-purple-500 disabled:opacity-50 text-white font-black uppercase text-[11px] tracking-[0.2em] rounded-full transition-all shadow-[0_10px_30px_-5px_rgba(147,51,234,0.4)] active:scale-95 cursor-pointer flex items-center gap-3 ${className}`}
            >
                {isLoading ? (
                    <Loader2 size={16} className="animate-spin" />
                ) : (
                    <LogIn size={16} className="group-hover:translate-x-1 transition-transform" />
                )}
                {isLoading ? "Memproses..." : "Bayar Iuran & Bergabung"}
                
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </button>

            <div className="flex flex-col items-center gap-1">
                <div className="flex items-center gap-2 text-zinc-500 font-bold uppercase text-[9px] tracking-widest">
                    <Coins size={12} />
                    Biaya Keanggotaan: ${membershipFee.toLocaleString()}
                </div>
                {error && (
                    <div className="flex items-center gap-1.5 text-rose-500 font-bold uppercase text-[9px] tracking-widest animate-bounce">
                        <AlertCircle size={12} />
                        {error}
                    </div>
                )}
            </div>
        </div>
    );
}
