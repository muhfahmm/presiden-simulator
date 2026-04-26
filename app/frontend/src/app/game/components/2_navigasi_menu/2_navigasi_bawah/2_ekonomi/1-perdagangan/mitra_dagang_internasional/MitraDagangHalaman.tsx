import React from "react";
import { Plus, Globe } from "lucide-react";
import { countries } from "@/app/database/data/negara/benua/index";

interface MitraDagangHalamanProps {
    activePartnersList: any[];
    onAddPartner: () => void;
}

export const MitraDagangHalaman: React.FC<MitraDagangHalamanProps> = ({ activePartnersList, onAddPartner }) => {
    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex items-center justify-between">
                <div className="space-y-1">
                    <h3 className="text-[11px] font-black text-blue-500 uppercase tracking-[0.3em] italic">Jaringan Perdagangan</h3>
                    <h2 className="text-xl font-black text-white uppercase tracking-tight italic">Mitra Dagang Internasional</h2>
                </div>
                <div className="h-[1px] flex-1 bg-zinc-900 mx-8 hidden md:block"></div>
                <button 
                    onClick={onAddPartner}
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl flex items-center gap-3 cursor-pointer group transition-all shadow-lg shadow-blue-900/20 active:scale-95"
                >
                    <Plus className="h-5 w-5 group-hover:rotate-90 transition-transform" />
                    <span className="text-[11px] font-black uppercase tracking-widest">Tambah Mitra</span>
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <button 
                    onClick={onAddPartner} 
                    className="bg-blue-500/5 border border-dashed border-blue-500/30 hover:border-blue-500/60 hover:bg-blue-500/10 p-6 rounded-3xl flex items-center gap-5 cursor-pointer group transition-all min-h-[100px]"
                >
                    <div className="p-4 bg-blue-500/10 rounded-2xl group-hover:bg-blue-500 group-hover:text-white transition-all">
                        <Plus className="h-6 w-6" />
                    </div>
                    <div className="text-left">
                        <div className="text-sm font-black text-blue-400 uppercase tracking-widest">Tambah Mitra Dagang</div>
                        <div className="text-[10px] font-bold text-zinc-600 uppercase tracking-tighter italic">Ekspansi Jaringan Internasional</div>
                    </div>
                </button>

                {activePartnersList.map((agreement: any, idx: number) => {
                    const country = countries.find(c => 
                        c.name_id?.toLowerCase() === agreement.mitra?.toLowerCase() || 
                        c.name_en?.toLowerCase() === agreement.mitra?.toLowerCase()
                    );
                    
                    const getCountryCode = (emoji: string) => {
                        const chars = [...emoji];
                        if (chars.length < 2) return "";
                        return chars.map(ch => String.fromCharCode((ch.codePointAt(0) || 0) - 0x1F1E6 + 65)).join("").toLowerCase();
                    };

                    const code = country ? getCountryCode(country.flag) : "";

                    return (
                        <div 
                            key={idx} 
                            className="bg-zinc-900/40 border border-zinc-800/50 p-6 rounded-3xl flex items-center justify-between group hover:border-zinc-700 transition-all shadow-xl"
                        >
                            <div className="flex items-center gap-5">
                                <div className="w-16 h-10 bg-zinc-900 rounded-xl group-hover:bg-zinc-800 transition-all shadow-inner flex items-center justify-center overflow-hidden border border-zinc-800">
                                    {code ? (
                                        <img 
                                            src={`https://flagcdn.com/w160/${code}.png`} 
                                            alt={agreement.mitra}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    ) : (
                                        <Globe className="h-6 w-6 text-zinc-700" />
                                    )}
                                </div>
                                <div>
                                    <div className="text-sm font-black text-white uppercase tracking-wider">{agreement.mitra}</div>
                                </div>
                            </div>
                            <div className="flex flex-col items-end gap-1">
                                <span className={`${agreement.status === 'Aktif' ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20' : 'bg-amber-500/10 text-amber-500 border-amber-500/20'} px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.1em] rounded-xl border text-center shadow-inner`}>
                                    {agreement.status === 'Aktif' ? 'Terverifikasi' : 'Diproses'}
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>

            {activePartnersList.length === 0 && (
                <div className="py-20 flex flex-col items-center justify-center text-center space-y-4 opacity-50">
                    <Globe className="h-16 w-16 text-zinc-800" />
                    <p className="text-[12px] font-black text-zinc-600 uppercase tracking-widest">Belum ada mitra dagang aktif</p>
                </div>
            )}
        </div>
    );
};
