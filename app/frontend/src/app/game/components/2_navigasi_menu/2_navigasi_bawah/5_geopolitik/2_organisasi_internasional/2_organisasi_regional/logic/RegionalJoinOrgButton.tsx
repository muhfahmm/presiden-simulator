"use client"

import React, { useState, useEffect } from 'react';
import { LogIn, CheckCircle2, Coins, AlertCircle, Loader2, Lock } from "lucide-react";
import { regionalMembershipStorage } from "./regionalMembershipStorage";
import { budgetStorage } from "@/app/game/components/1_navbar/3_kas_negara";
import { regionalMembershipRouter } from "./router/RegionalMembershipRouter";

interface RegionalJoinOrgButtonProps {
    orgId: string;
    orgName: string;
    membershipFee?: number;
    className?: string;
}

export default function RegionalJoinOrgButton({ 
    orgId, 
    orgName, 
    membershipFee = 750000000, // Regional fees are often higher
    className = "" 
}: RegionalJoinOrgButtonProps) {
    const [isMember, setIsMember] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [eligibility, setEligibility] = useState<{ eligible: boolean, reason: string }>({ eligible: true, reason: "" });

    useEffect(() => {
        const userCountry = localStorage.getItem("selectedCountry") || "indonesia";
        const result = regionalMembershipRouter.checkEligibility(userCountry, orgId);
        setEligibility(result);

        const checkMembership = () => {
            const joined = regionalMembershipStorage.getJoinedOrganizations();
            setIsMember(joined.includes(orgId));
        };

        checkMembership();
        window.addEventListener("regional_membership_updated", checkMembership);
        return () => window.removeEventListener("regional_membership_updated", checkMembership);
    }, [orgId]);

    const handleJoin = async () => {
        if (!eligibility.eligible) return;
        
        setIsLoading(true);
        setError(null);

        try {
            const currentCash = budgetStorage.getData().anggaran;
            if (currentCash < membershipFee) {
                setError("Anggaran tidak cukup.");
                setIsLoading(false);
                return;
            }

            budgetStorage.setBudgetDirect(currentCash - membershipFee);
            regionalMembershipStorage.joinOrganization(orgId);
            setIsMember(true);
        } catch (err) {
            setError("Gagal bergabung.");
        } finally {
            setIsLoading(false);
        }
    };

    if (isMember) {
        return (
            <div className="flex items-center gap-3 px-6 py-3 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl text-emerald-400 font-bold uppercase text-[10px] tracking-widest animate-in fade-in zoom-in duration-300">
                <CheckCircle2 size={16} />
                Anggota Resmi {orgName}
            </div>
        );
    }

    if (!eligibility.eligible) {
        return (
            <div className="flex flex-col items-center gap-3 p-6 bg-zinc-900/50 border border-zinc-800 rounded-3xl w-full">
                <div className="p-3 bg-rose-500/10 rounded-2xl">
                    <Lock size={20} className="text-rose-500" />
                </div>
                <div className="text-center">
                    <p className="text-rose-500 font-black uppercase text-[11px] tracking-widest">Akses Terbatas</p>
                    <p className="text-zinc-500 font-medium text-[10px] mt-1">{eligibility.reason}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center gap-4 w-full">
            <button 
                onClick={handleJoin}
                disabled={isLoading}
                className={`group relative overflow-hidden px-10 py-4 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white font-black uppercase text-[11px] tracking-[0.2em] rounded-full transition-all shadow-[0_10px_30px_-5px_rgba(79,70,229,0.4)] active:scale-95 cursor-pointer flex items-center gap-3 ${className}`}
            >
                {isLoading ? <Loader2 size={16} className="animate-spin" /> : <LogIn size={16} />}
                {isLoading ? "Memproses..." : "Bergabung ke Blok Regional"}
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </button>
            <div className="flex flex-col items-center gap-1">
                <div className="flex items-center gap-2 text-zinc-500 font-bold uppercase text-[9px] tracking-widest">
                    <Coins size={12} />
                    Iuran Regional: ${membershipFee.toLocaleString()}
                </div>
                {error && <div className="text-rose-500 font-bold uppercase text-[9px] tracking-widest">{error}</div>}
            </div>
        </div>
    );
}
