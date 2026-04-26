"use client"

import React, { useState, useEffect } from "react";
import { X, CreditCard, TrendingDown, Landmark, ShieldAlert, BadgeInfo, ArrowDownToLine, ArrowUpToLine, Wallet, Activity, Globe, Sparkles, ArrowRightLeft, FileText, BarChart3, Tag } from "lucide-react";
import { debtAiStorage, DebtOffer, ActiveDebt } from "./sistem_hutang_AI/storage/DebtAiStorage";
import { DebtAiService } from "./sistem_hutang_AI/services/DebtAiService";
import { BilateralDebtPanel } from "./sistem_hutang_AI/components/BilateralDebtPanel";
import { OrgDebtPanel } from "./sistem_hutang_AI/components/OrgDebtPanel";
import { gameStorage } from "@/app/game/gamestorage";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeMenu?: string;
  setActiveMenu?: (menu: string) => void;
}

export default function HutangModal({ isOpen, onClose, activeMenu, setActiveMenu }: ModalProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [offers, setOffers] = useState<DebtOffer[]>([]);
  const [activeDebts, setActiveDebts] = useState<ActiveDebt[]>([]);
  const [creditScore, setCreditScore] = useState(70);
  const [memberships, setMemberships] = useState({ isImfMember: false, isWbMember: false });
  const [currentCountry, setCurrentCountry] = useState("Indonesia");
  const [activeDebtTab, setActiveDebtTab] = useState<'HUTANG' | 'PIUTANG'>('HUTANG');

  useEffect(() => {
    setIsMounted(true);
    if (isOpen) {
      DebtAiService.seedInitialOffers();
      refreshData();
    }

    const handleUpdate = () => refreshData();
    window.addEventListener('debt_storage_updated', handleUpdate);
    return () => window.removeEventListener('debt_storage_updated', handleUpdate);
  }, [isOpen]);

  const refreshData = () => {
    const data = debtAiStorage.getData();
    setOffers([...data.offers]); // Force new array reference
    setActiveDebts([...data.activeDebts]);
    
    const storedScore = localStorage.getItem('em_user_credit_score');
    if (storedScore) setCreditScore(parseInt(storedScore));

    const session = gameStorage.getSession();
    const country = session?.country || "Indonesia";
    setCurrentCountry(country);
    setMemberships(DebtAiService.checkMembership(country));
  };

  if (!isOpen || !isMounted) return null;

  const totalDebt = activeDebts.reduce((acc, d) => d.status === 'ACTIVE' ? acc + d.remainingPrincipal : acc, 0);
  const totalMonthlyPayment = activeDebts.reduce((acc, d) => d.status === 'ACTIVE' ? acc + d.monthlyPayment : acc, 0);

  const debtStats = [
    { label: "Total Hutang Aktif", value: `$${totalDebt.toLocaleString()}`, status: totalDebt > 0 ? "Under Review" : "Healthy", color: totalDebt > 0 ? "text-amber-400" : "text-green-400" },
    { label: "Cicilan Bulanan", value: `$${totalMonthlyPayment.toLocaleString()}`, status: "Automatic", color: "text-zinc-500" },
    { label: "Credit Score AI", value: creditScore, status: creditScore > 75 ? "Excellent" : creditScore > 50 ? "Prime" : "Subprime", color: creditScore > 75 ? "text-blue-400" : "text-rose-400" }
  ];

  return (
    <div className="absolute inset-0 bg-black/60 z-50 flex items-center justify-center animate-in fade-in duration-300 p-4 md:p-8">
      <div className="bg-zinc-950/90 border border-zinc-800 rounded-[40px] w-full max-w-[95vw] h-[82vh] overflow-hidden shadow-2xl flex flex-col relative animate-in zoom-in-95 duration-500">
        
        {/* Glow Effects */}
        <div className="absolute top-0 left-1/4 w-1/2 h-1 bg-gradient-to-r from-transparent via-rose-500/50 to-transparent blur-sm"></div>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-rose-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]"></div>

        {/* Header */}
        <div className="px-8 py-6 border-b border-zinc-800/50 flex items-center justify-between bg-zinc-900/30">
           <div className="flex items-center gap-3">
              <div className="p-2 bg-rose-500/10 rounded-xl">
                 <Landmark className="h-6 w-6 text-rose-500" />
              </div>
              <div>
                 <h2 className="text-2xl font-bold text-white tracking-tight italic uppercase">Manajemen Hutang AI</h2>
                 <p className="text-xs text-zinc-500 font-medium uppercase tracking-widest mt-0.5">Strategic Financing • {currentCountry}</p>
              </div>
           </div>
           <div className="flex items-center gap-4">
              <button
                 className="p-3 rounded-2xl bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-white transition-all cursor-pointer group relative shadow-[0_0_15px_rgba(225,29,72,0.1)] active:scale-95 flex items-center gap-2"
                 title="Credit Score Analysis"
              >
                 <ShieldAlert className="h-6 w-6 text-rose-500 group-hover:scale-110 transition-transform" />
              </button>
              <button
                 onClick={onClose}
                 className="p-3 rounded-2xl bg-rose-600 border border-rose-500 hover:bg-rose-500 text-white transition-all cursor-pointer shadow-[0_0_15px_rgba(225,29,72,0.3)] active:scale-95 group flex items-center gap-2"
              >
                 <span className="text-[10px] font-black uppercase tracking-widest pl-1">Tutup</span>
                 <X className="h-6 w-6 group-hover:rotate-90 transition-transform" />
              </button>
           </div>
        </div>

        {/* Unified Navigation Tabs */}
        <div className="px-6 py-2 bg-zinc-900/40 border-b border-zinc-800 flex gap-2 relative z-10">
          <button 
            onClick={() => setActiveMenu?.("Menu:Perdagangan")}
            className={`px-4 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-widest flex items-center gap-2 transition-all ${activeMenu?.startsWith("Menu:Perdagangan") ? "bg-zinc-100 text-zinc-950 shadow-lg cursor-default" : "text-zinc-500 hover:bg-zinc-800/60 hover:text-zinc-300"}`}
          >
            <ArrowRightLeft size={16} /> Perdagangan
          </button>
          <button 
            onClick={() => setActiveMenu?.("Menu:Pajak")}
            className={`px-4 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-widest flex items-center gap-2 transition-all ${activeMenu === "Menu:Pajak" ? "bg-zinc-100 text-zinc-950 shadow-lg cursor-default" : "text-zinc-500 hover:bg-zinc-800/60 hover:text-zinc-300"}`}
          >
            <FileText size={16} /> Pajak
          </button>
          <button 
            onClick={() => setActiveMenu?.("Menu:Hutang")}
            className={`px-4 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-widest flex items-center gap-2 transition-all ${activeMenu === "Menu:Hutang" ? "bg-zinc-100 text-zinc-950 shadow-lg cursor-default" : "text-zinc-500 hover:bg-zinc-800/60 hover:text-zinc-300"}`}
          >
            <Landmark size={16} /> Hutang
          </button>
          <button 
            onClick={() => setActiveMenu?.("Menu:Budget")}
            className={`px-4 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-widest flex items-center gap-2 transition-all ${activeMenu === "Menu:Budget" ? "bg-zinc-100 text-zinc-950 shadow-lg cursor-default" : "text-zinc-500 hover:bg-zinc-800/60 hover:text-zinc-300"}`}
          >
            <BarChart3 size={16} /> Budget
          </button>
          <button 
            onClick={() => setActiveMenu?.("Menu:Harga")}
            className={`px-4 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-widest flex items-center gap-2 transition-all ${activeMenu === "Menu:Harga" ? "bg-zinc-100 text-zinc-950 shadow-lg cursor-default" : "text-zinc-500 hover:bg-zinc-800/60 hover:text-zinc-300"}`}
          >
            <Tag size={16} /> Harga
          </button>
        </div>
        
        {/* Content */}
        <div className="flex-1 overflow-y-auto p-8 no-scrollbar">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {debtStats.map((stat, idx) => (
              <div key={idx} className="bg-zinc-900/40 border border-zinc-800 p-6 rounded-2xl relative overflow-hidden group">
                <div className="flex flex-col gap-1 relative z-10">
                  <span className="text-[10px] font-black text-zinc-500 uppercase tracking-wider">{stat.label}</span>
                  <span className="text-xl font-black text-white">{stat.value}</span>
                  <span className={`text-[9px] font-bold mt-2 ${stat.color} uppercase tracking-widest`}>{stat.status}</span>
                </div>
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-125 transition-transform">
                  {idx === 2 ? <Activity className="h-12 w-12 text-blue-500" /> : <BadgeInfo className="h-12 w-12 text-zinc-500" />}
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left: Bilateral AI Market */}
            <div className="lg:col-span-4 space-y-6">
                 <BilateralDebtPanel 
                    offers={offers} 
                    onAction={refreshData} 
                 />
            </div>

            {/* Right: Organizations & Existing Debts */}
            <div className="lg:col-span-8 space-y-8">
                <section>
                    <div className="flex items-center gap-3 mb-4">
                        <Sparkles className="h-4 w-4 text-purple-400" />
                        <h3 className="text-[12px] font-black text-white uppercase tracking-[0.2em]">Pendanaan Multilateral</h3>
                    </div>
                    <OrgDebtPanel 
                        isImfMember={memberships.isImfMember} 
                        isWbMember={memberships.isWbMember} 
                        onApply={(org) => alert(`Pengajuan ke ${org} sedang diproses AI...`)}
                    />
                </section>

                <section>
                    <div className="flex items-center gap-3 mb-4">
                        <Wallet className="h-4 w-4 text-emerald-400" />
                        <h3 className="text-[12px] font-black text-white uppercase tracking-[0.2em]">Daftar Tagihan Berjalan</h3>
                    </div>
                    <div className="bg-zinc-900/40 border border-zinc-800 p-0 rounded-[32px] overflow-hidden flex flex-col">
                        {/* Tab Sub-Header */}
                        <div className="flex border-b border-zinc-800">
                            <button 
                                onClick={() => setActiveDebtTab('HUTANG')}
                                className={`flex-1 py-4 text-[10px] font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 ${activeDebtTab === 'HUTANG' ? 'bg-white/5 text-rose-500 border-b-2 border-rose-500 cursor-default' : 'text-zinc-500 hover:text-zinc-300 cursor-pointer'}`}
                            >
                                <ArrowDownToLine className="h-3 w-3" /> Hutang Pemerintah
                            </button>
                            <button 
                                onClick={() => setActiveDebtTab('PIUTANG')}
                                className={`flex-1 py-4 text-[10px] font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 ${activeDebtTab === 'PIUTANG' ? 'bg-white/5 text-emerald-500 border-b-2 border-emerald-500 cursor-default' : 'text-zinc-500 hover:text-zinc-300 cursor-pointer'}`}
                            >
                                <ArrowUpToLine className="h-3 w-3" /> Piutang Negara
                            </button>
                        </div>

                        <div className="p-6">
                            {activeDebts.filter(d => d.status === 'ACTIVE' && (activeDebtTab === 'HUTANG' ? (d.direction === 'BORROWER' || !d.direction) : d.direction === 'LENDER')).length > 0 ? (
                                <table className="w-full text-left">
                                    <thead className="border-b border-zinc-800">
                                        <tr className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">
                                            <th className="pb-4">{activeDebtTab === 'HUTANG' ? 'Pemberi Dana' : 'Penerima Dana'}</th>
                                            <th className="pb-4 text-center">Sisa Pokok</th>
                                            <th className="pb-4 text-center">Bunga</th>
                                            <th className="pb-4 text-right">{activeDebtTab === 'HUTANG' ? 'Cicilan/Bulan' : 'Penerimaan/Bulan'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {activeDebts.filter(d => d.status === 'ACTIVE' && (activeDebtTab === 'HUTANG' ? (d.direction === 'BORROWER' || !d.direction) : d.direction === 'LENDER')).map((debt, i) => (
                                            <tr key={i} className="border-b border-zinc-800/30 last:border-0 hover:bg-white/[0.02] transition-colors">
                                                <td className="py-4">
                                                    <p className="text-[11px] font-black text-white uppercase leading-none">{debt.provider}</p>
                                                    <p className="text-[9px] font-bold text-zinc-500 mt-1 uppercase tracking-tighter">{debt.type}</p>
                                                </td>
                                                <td className="py-4 text-center">
                                                    <span className="text-[11px] font-bold text-zinc-200">${debt.remainingPrincipal.toLocaleString()}</span>
                                                </td>
                                                <td className="py-4 text-center">
                                                    <span className={`text-[11px] font-bold ${activeDebtTab === 'HUTANG' ? 'text-blue-400' : 'text-emerald-400'}`}>{debt.interestRate}%</span>
                                                </td>
                                                <td className="py-4 text-right">
                                                    <span className="text-[11px] font-black text-white">${debt.monthlyPayment.toLocaleString()}</span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            ) : (
                                <div className="py-10 flex flex-col items-center justify-center text-center">
                                    <Landmark className="h-8 w-8 text-zinc-800 mb-3" />
                                    <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-[0.2em]">
                                        {activeDebtTab === 'HUTANG' ? 'Pemerintah Bersih dari Hutang' : 'Tidak ada Piutang Aktif'}
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
