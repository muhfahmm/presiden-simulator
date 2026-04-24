"use client"

import React, { useState, useMemo, useEffect } from 'react';
import { Search, MapPin, Globe, Users, SearchSlash, Command, CheckCircle2, Crown, Sparkles } from "lucide-react";
import { countries } from "@/app/database/data/negara/benua/index";
import { OrganizationMembers } from "@/app/database/data/database_organisasi_internasional/index";
import { gameStorage } from "@/app/game/gamestorage";
import { unMembershipStorage } from "./1_organisasi_PBB/logic/unMembershipStorage";

interface OrgMembersListProps {
    orgId: string;
    orgName: string;
    searchQuery: string;
}

export default function OrgMembersList({ orgId, orgName, searchQuery }: OrgMembersListProps) {
    const [userCountry, setUserCountry] = useState<string>("Indonesia");

    useEffect(() => {
        const session = gameStorage.getSession();
        if (session) {
            setUserCountry(session.country || localStorage.getItem("selectedCountry") || "Indonesia");
        }
    }, []);

    // Get specific member list for this organization from database
    const allowedMembers = OrganizationMembers[orgId];

    // Filter countries based on organization membership and search query
    const memberCountries = useMemo(() => {
        return countries.filter(c => {
            // 1. Check if country is a member using centralized logic
            // (User must have manually joined, AI nations use DB)
            const isMember = unMembershipStorage.isMember(orgId, c.name_id);

            if (!isMember) return false;

            // 2. Apply search filter
            return c.name_id.toLowerCase().includes(searchQuery.toLowerCase()) ||
                   c.name_en.toLowerCase().includes(searchQuery.toLowerCase());
        });
    }, [orgId, searchQuery]);

    return (
        <div className="flex flex-col gap-6 p-10">
            <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-purple-500/10 rounded-xl border border-purple-500/20 text-purple-400">
                        <Users size={16} />
                    </div>
                    <div>
                        <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest leading-none mb-1 block">Total Keanggotaan</span>
                        <h5 className="text-sm font-black text-white uppercase tracking-tight italic">
                            {memberCountries.length} Negara Terdaftar
                        </h5>
                    </div>
                </div>
            </div>


            {/* LIST AREA */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 animate-in fade-in slide-in-from-bottom-5 duration-700">
                {memberCountries.length > 0 ? (
                    memberCountries.map((country, idx) => {
                        const isUser = country.name_id.toLowerCase() === userCountry.toLowerCase();
                        
                        return (
                            <div 
                                key={country.name_en || idx}
                                className={`group p-4 rounded-2xl transition-all duration-300 flex items-center justify-between relative backdrop-blur-sm shadow-sm hover:shadow-[0_0_30px_rgba(168,85,247,0.05)] border ${
                                    isUser 
                                    ? "bg-purple-600/10 border-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.15)] ring-1 ring-purple-500/30" 
                                    : "bg-zinc-900/10 border-zinc-800/40 hover:border-purple-500/30 hover:bg-zinc-900/30"
                                }`}
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`w-10 h-10 rounded-full border flex items-center justify-center text-xl shadow-inner group-hover:scale-110 transition-transform ${
                                        isUser ? "bg-purple-900/50 border-purple-400" : "bg-zinc-800/50 border-zinc-800"
                                    }`}>
                                        {country.flag || "🏳️"}
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="flex items-center gap-1.5 mb-1">
                                            <span className={`text-[9px] font-black uppercase tracking-widest leading-none ${
                                                isUser ? "text-purple-400" : "text-zinc-600"
                                            }`}>
                                                {isUser ? "Negara Anda" : "Negara Anggota"}
                                            </span>
                                            {isUser && <Sparkles size={8} className="text-amber-400 animate-pulse" />}
                                        </div>
                                        <h4 className={`text-sm font-black uppercase tracking-tight transition-colors ${
                                            isUser ? "text-white" : "text-white group-hover:text-purple-400"
                                        }`}>
                                            {country.name_id}
                                        </h4>
                                    </div>
                                </div>

                                <div className={`p-2.5 border rounded-xl transition-all ${
                                    isUser 
                                    ? "bg-purple-500 text-white border-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.5)]" 
                                    : "bg-zinc-950/50 border-zinc-800/50 text-emerald-500/60 group-hover:text-emerald-500 group-hover:border-emerald-500/30"
                                }`}>
                                    {isUser ? <Crown size={16} /> : <CheckCircle2 size={16} />}
                                </div>

                                {isUser && (
                                    <div className="absolute -top-1.5 -right-1.5 h-3 w-3 bg-purple-500 rounded-full border-2 border-zinc-950 animate-ping opacity-75" />
                                )}
                            </div>
                        );
                    })
                ) : (
                    <div className="col-span-full flex flex-col items-center justify-center gap-6 text-center py-20 opacity-40">
                        <div className="p-8 rounded-full bg-zinc-900/50 border border-zinc-800/50">
                            <SearchSlash size={60} strokeWidth={1} />
                        </div>
                        <div className="space-y-1">
                            <h4 className="text-xl font-black text-zinc-500 uppercase italic tracking-widest">Negara Tidak Ditemukan</h4>
                            <p className="text-[10px] text-zinc-700 font-bold uppercase tracking-widest max-w-xs mx-auto">Periksa kembali parameter pencarian identitas kedaulatan.</p>
                        </div>
                    </div>
                )}
            </div>


        </div>
    );
}
