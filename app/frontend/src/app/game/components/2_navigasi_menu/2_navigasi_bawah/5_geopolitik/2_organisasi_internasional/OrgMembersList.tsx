"use client"

import React, { useState, useMemo } from 'react';
import { Search, MapPin, Globe, Users, SearchSlash, Command, CheckCircle2 } from "lucide-react";
import { countries } from "@/app/database/data/negara/benua/index";

interface OrgMembersListProps {
    orgId: string;
    orgName: string;
}

export default function OrgMembersList({ orgId, orgName }: OrgMembersListProps) {
    const [searchQuery, setSearchQuery] = useState("");

    // For now, mapping all countries as members for UN organizations
    const memberCountries = useMemo(() => {
        return countries.filter(c => 
            c.name_id.toLowerCase().includes(searchQuery.toLowerCase()) ||
            c.name_en.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [searchQuery]);

    return (
        <div className="flex flex-col gap-6 p-10">
            {/* SEARCH BAR */}
            <div className="sticky top-0 z-30 pb-4 bg-zinc-950/80 backdrop-blur-md relative group mt-2">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-700 group-focus-within:text-purple-500 transition-colors z-10" />
                <input 
                    type="text" 
                    id="member-search-input"
                    placeholder="CARI NEGARA ANGGOTA..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-black/40 border border-zinc-800 rounded-3xl py-5 pl-14 pr-6 text-sm font-black text-white placeholder:text-zinc-800 outline-none focus:border-purple-500/40 focus:ring-[12px] focus:ring-purple-500/5 transition-all uppercase tracking-widest shadow-inner backdrop-blur-md"
                />
                <div className="absolute right-6 top-1/2 -translate-y-1/2 flex items-center gap-2">
                    <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-zinc-900 border border-zinc-800 rounded-xl text-[9px] font-black text-zinc-600 uppercase tracking-tighter">
                        <Users size={10} />
                        <span>{memberCountries.length} ANGGOTA TERDAFTAR</span>
                    </div>
                </div>
            </div>

            {/* LIST AREA */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 animate-in fade-in slide-in-from-bottom-5 duration-700">
                {memberCountries.length > 0 ? (
                    memberCountries.map((country, idx) => (
                        <div 
                            key={country.name_en || idx}
                            className="group bg-zinc-900/10 border border-zinc-800/40 hover:border-purple-500/30 hover:bg-zinc-900/30 p-4 rounded-2xl transition-all duration-300 flex items-center justify-between relative backdrop-blur-sm shadow-sm hover:shadow-[0_0_30px_rgba(168,85,247,0.05)]"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-zinc-800/50 rounded-full border border-zinc-800 flex items-center justify-center text-xl shadow-inner group-hover:scale-110 transition-transform">
                                    {country.flag || "🏳️"}
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[9px] font-black text-zinc-600 uppercase tracking-widest leading-none mb-1">Negara Anggota</span>
                                    <h4 className="text-sm font-black text-white uppercase tracking-tight group-hover:text-purple-400 transition-colors">
                                        {country.name_id}
                                    </h4>
                                </div>
                            </div>

                            <div className="p-2.5 bg-zinc-950/50 border border-zinc-800/50 rounded-xl text-emerald-500/60 group-hover:text-emerald-500 group-hover:border-emerald-500/30 transition-all">
                                <CheckCircle2 size={16} />
                            </div>
                        </div>
                    ))
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

            {/* FOOTER INFO */}
            <div className="p-5 bg-zinc-900/20 border border-zinc-800/50 rounded-[32px] flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="p-2 bg-blue-500/10 rounded-lg border border-blue-500/20">
                        <Globe size={14} className="text-blue-500" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[8px] font-black text-zinc-500 uppercase tracking-[0.2em] leading-none mb-1">Basis Data Global</span>
                        <span className="text-[10px] font-black text-zinc-300 uppercase tracking-widest italic">Semua Negara Diakui Terdaftar Aktif</span>
                    </div>
                </div>
                <div className="text-right">
                    <span className="text-[8px] font-black text-zinc-600 uppercase tracking-[0.3em]">Protocol UN-88-M</span>
                </div>
            </div>
        </div>
    );
}
