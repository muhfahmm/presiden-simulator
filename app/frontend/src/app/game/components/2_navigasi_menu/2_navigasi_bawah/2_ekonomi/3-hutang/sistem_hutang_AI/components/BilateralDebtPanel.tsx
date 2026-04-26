"use client"

import React from 'react';
import { Globe, ArrowUpRight, ArrowDownLeft, Check, X, HeartHandshake } from 'lucide-react';
import { debtAiStorage, DebtOffer } from '../storage/DebtAiStorage';
import { DebtAiService } from '../services/DebtAiService';
import { countries } from '@/app/database/data/negara/benua/index';

interface BilateralDebtPanelProps {
    offers: DebtOffer[];
    onAction: () => void;
}

export const BilateralDebtPanel: React.FC<BilateralDebtPanelProps> = ({ offers, onAction }) => {
    const handleAccept = (id: string) => {
        const success = DebtAiService.acceptLoan(id);
        if (success) onAction();
    };

    const handleReject = (id: string) => {
        debtAiStorage.updateOfferStatus(id, 'rejected');
        onAction();
    };

    // Helper to get country code for flagcdn
    const getCountryCode = (emoji: string) => {
        const chars = [...emoji];
        if (chars.length < 2) return "";
        return chars.map(ch => String.fromCharCode((ch.codePointAt(0) || 0) - 0x1F1E6 + 65)).join("").toLowerCase();
    };

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between mb-2">
                <h4 className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em]">Market Hutang Bilateral</h4>
                <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-[9px] font-bold text-green-500 uppercase tracking-widest">Live Updates</span>
                </div>
            </div>

            {offers.length === 0 ? (
                <div className="py-12 border border-dashed border-zinc-800 rounded-3xl flex flex-col items-center justify-center text-center px-6 bg-zinc-900/10">
                    <Globe className="h-8 w-8 text-zinc-800 mb-3" />
                    <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest leading-relaxed">
                        Belum ada tawaran diplomatik.<br/>Hubungan yang baik memicu tawaran finansial.
                    </p>
                </div>
            ) : (
                <div className="grid grid-cols-1 gap-3">
                    {offers.filter(o => o.status === 'pending').map((offer) => {
                        const country = countries.find(c => c.name_id === offer.lender || c.name_en === offer.lender);
                        const code = country ? getCountryCode(country.flag) : "";
                        const isRequest = offer.type === 'NPC_REQUEST';

                        return (
                            <div key={offer.id} className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-4 hover:border-zinc-700 transition-all group relative overflow-hidden">
                                {isRequest && (
                                    <div className="absolute top-0 left-0 w-1 h-full bg-rose-500/50" />
                                )}
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="relative w-10 h-7 rounded-md overflow-hidden border border-zinc-800 shadow-sm bg-zinc-950 flex-shrink-0">
                                            {code ? (
                                                <img 
                                                    src={`https://flagcdn.com/w80/${code}.png`} 
                                                    alt={offer.lender}
                                                    className="w-full h-full object-cover"
                                                />
                                            ) : (
                                                <span className="text-sm">🏳️</span>
                                            )}
                                        </div>
                                        <div className="min-w-0">
                                            <p className="text-[11px] font-black text-white uppercase truncate">{offer.lender}</p>
                                            <div className="flex items-center gap-1.5 mt-0.5">
                                                <div className={`w-1.5 h-1.5 rounded-full ${isRequest ? 'bg-rose-500' : 'bg-emerald-500'}`} />
                                                <p className={`text-[8px] font-black uppercase tracking-tighter ${isRequest ? 'text-rose-400' : 'text-emerald-400'}`}>
                                                    {isRequest ? 'Membutuhkan Dana' : 'Tawaran Pinjaman'}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className={`text-sm font-black ${isRequest ? 'text-rose-400' : 'text-emerald-400'}`}>
                                            {offer.amount.toLocaleString()}EM
                                        </p>
                                        <p className="text-[9px] font-bold text-zinc-500 uppercase tracking-tighter italic">Strategic Fund</p>
                                    </div>
                                </div>

                                <div className="bg-zinc-950/50 border border-zinc-800/50 rounded-xl p-2.5 mb-4 flex justify-between items-center">
                                    <div className="flex flex-col">
                                        <span className="text-[7px] font-black text-zinc-600 uppercase tracking-widest">Suku Bunga</span>
                                        <span className="text-[11px] font-black text-blue-400 italic">{offer.interestRate}% <span className="text-[8px] text-zinc-500 not-italic">APR</span></span>
                                    </div>
                                    <div className="w-px h-6 bg-zinc-800/50" />
                                    <div className="flex flex-col text-right">
                                        <span className="text-[7px] font-black text-zinc-600 uppercase tracking-widest">Durasi</span>
                                        <span className="text-[11px] font-black text-zinc-300">{offer.tenorMonths} <span className="text-[8px] text-zinc-500">Bulan</span></span>
                                    </div>
                                </div>

                                <div className="flex gap-2">
                                    <button 
                                        onClick={() => handleAccept(offer.id)}
                                        className={`flex-1 py-2.5 ${isRequest ? 'bg-rose-600 hover:bg-rose-500 shadow-rose-900/20' : 'bg-emerald-600 hover:bg-emerald-500 shadow-emerald-900/20'} text-white text-[9px] font-black uppercase tracking-[0.2em] rounded-xl transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2 cursor-pointer`}
                                    >
                                        {isRequest ? (
                                            <><HeartHandshake className="h-3 w-3" /> Beri Dana</>
                                        ) : (
                                            <><Check className="h-3 w-3" /> Terima Pinjaman</>
                                        )}
                                    </button>
                                    <button 
                                        onClick={() => handleReject(offer.id)}
                                        className="px-4 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-500 hover:text-white rounded-xl transition-all active:scale-95 border border-zinc-700/30 cursor-pointer"
                                        title="Tolak"
                                    >
                                        <X className="h-4 w-4" />
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};
