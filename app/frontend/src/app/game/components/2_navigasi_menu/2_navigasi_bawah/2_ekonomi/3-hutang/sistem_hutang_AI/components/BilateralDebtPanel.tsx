"use client"

import React from 'react';
import { Globe, ArrowUpRight, ArrowDownLeft, Landmark, Check, X, ShieldCheck } from 'lucide-react';
import { debtAiStorage, DebtOffer } from '../storage/DebtAiStorage';
import { DebtAiService } from '../services/DebtAiService';

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
                <div className="py-12 border border-dashed border-zinc-800 rounded-3xl flex flex-col items-center justify-center text-center px-6">
                    <Globe className="h-8 w-8 text-zinc-800 mb-3" />
                    <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest leading-relaxed">
                        Belum ada tawaran diplomatik.<br/>Hubungan yang baik memicu tawaran finansial.
                    </p>
                </div>
            ) : (
                <div className="grid grid-cols-1 gap-3">
                    {offers.filter(o => o.status === 'pending').map((offer) => (
                        <div key={offer.id} className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-4 hover:border-zinc-700 transition-all group">
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center gap-3">
                                    <div className={`p-2 rounded-xl ${offer.type === 'NPC_OFFER' ? 'bg-emerald-500/10' : 'bg-rose-500/10'}`}>
                                        {offer.type === 'NPC_OFFER' ? <ArrowDownLeft className="h-4 w-4 text-emerald-400" /> : <ArrowUpRight className="h-4 w-4 text-rose-400" />}
                                    </div>
                                    <div>
                                        <p className="text-[11px] font-black text-white uppercase">{offer.lender}</p>
                                        <p className="text-[9px] font-bold text-zinc-500 uppercase tracking-tighter">
                                            {offer.type === 'NPC_OFFER' ? 'Menawarkan Pinjaman' : 'Memohon Bantuan Dana'}
                                        </p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm font-black text-white">${offer.amount.toLocaleString()}</p>
                                    <p className="text-[9px] font-bold text-zinc-400">Bunga {offer.interestRate}% • {offer.tenorMonths} Bln</p>
                                </div>
                            </div>

                            <div className="flex gap-2">
                                <button 
                                    onClick={() => handleAccept(offer.id)}
                                    className="flex-1 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-[9px] font-black uppercase tracking-widest rounded-xl transition-all shadow-lg shadow-emerald-900/20 active:scale-95 flex items-center justify-center gap-2"
                                >
                                    <Check className="h-3 w-3" /> {offer.type === 'NPC_OFFER' ? 'Terima Dana' : 'Beri Pinjaman'}
                                </button>
                                <button 
                                    onClick={() => handleReject(offer.id)}
                                    className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white rounded-xl transition-all active:scale-95"
                                >
                                    <X className="h-4 w-4" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
