"use client"

import React from "react";
import { X, TrendingUp, TrendingDown, Coins, Landmark, Receipt, Percent, Globe, Briefcase, Zap, Shield, HeartPulse, GraduationCap, Truck, Home, Activity, Info, BarChart3, PieChart, Users } from "lucide-react";
import { CountryData } from "@/app/database/data/semua_fitur_negara/index";
import { taxStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/2-pajak/TaxStorage";
import { incomeStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/4-pemasukkanpengeluaran/pemasukkan/IncomeStorage";
import { expenseStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/4-pemasukkanpengeluaran/pengeluaran/ExpenseStorage";
import { priceStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/8-pasar-domestik/priceStorage";
import { calculateTotalMaintenance, calculateBudgetBreakdown } from "@/app/game/data/economy/BudgetDeltaLogic";
import { produksiMiliter } from "@/app/database/data/semua_fitur_negara";
import NavigasiWaktu from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/1-perdagangan/NavigasiWaktu";

interface BudgetDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  countryData: CountryData;
  buildingDeltas: Record<string, number>;
}

export default function BudgetDetailModal({ isOpen, onClose, countryData, buildingDeltas }: BudgetDetailModalProps) {
  if (!isOpen) return null;

  const breakdown = calculateBudgetBreakdown(countryData, buildingDeltas);
  const { totalAnnualRevenue, totalAnnualExpense, netAnnualSurplus, dailyDelta, revenues, expenses } = breakdown;

  const revenuesList = [
    { key: "ppn", label: "PPN (Pajak Pertambahan Nilai)", icon: <Receipt className="h-4 w-4 text-cyan-400" />, value: revenues.domestic.ppn },
    { key: "korporasi", label: "PPh Korporasi (Perusahaan)", icon: <Landmark className="h-4 w-4 text-blue-400" />, value: revenues.domestic.korporasi },
    { key: "penghasilan", label: "PPh Pribadi (Penghasilan)", icon: <Percent className="h-4 w-4 text-purple-400" />, value: revenues.domestic.penghasilan },
    { key: "lingkungan", label: "Pajak Lingkungan", icon: <Globe className="h-4 w-4 text-emerald-400" />, value: revenues.domestic.lingkungan },
    { key: "lainnya", label: "Pajak Lain-lain (PBB, dll)", icon: <Coins className="h-4 w-4 text-zinc-400" />, value: revenues.domestic.lainnya },
    { key: "bea_cukai", label: "Bea Cukai & Ekspor", icon: <TrendingUp className="h-4 w-4 text-amber-400" />, value: revenues.trade.bea_cukai },
    { key: "transit_sekutu", label: "Biaya Transit (Sekutu)", icon: <Activity className="h-4 w-4 text-green-400" />, value: revenues.trade.transit_sekutu },
    { key: "transit_non_sekutu", label: "Biaya Transit (Non-Sekutu)", icon: <Activity className="h-4 w-4 text-orange-400" />, value: revenues.trade.transit_non_sekutu },
    { key: "hibah", label: "Hibah & Grants Internasional", value: revenues.other.grants, icon: <Briefcase className="h-4 w-4 text-indigo-400" /> },
    { key: "investasi", label: "FDI (Investasi Asing Langsung)", value: revenues.other.investments, icon: <BarChart3 className="h-4 w-4 text-cyan-500" /> }
  ];

  const expensesListByGroup = [
    { label: "Subsidi Negara", value: expenses.subsidies, icon: <TrendingDown className="h-4 w-4 text-rose-500" />, sub: `${breakdown.details.subsidiLevel.toFixed(1)}% Alokasi` },
    { label: "Gaji & Tunjangan ASN/Militer", value: expenses.salaries, icon: <Users className="h-4 w-4 text-rose-400" />, sub: `${breakdown.details.salaryMultiplier.toFixed(2)}x Multiplier` },
    { label: "Pemeliharaan Infrastruktur", value: expenses.maintenance, icon: <Zap className="h-4 w-4 text-orange-400" />, sub: "Operasional Nasional" },
    { label: "Anggaran Pertahanan & Alutsista", value: expenses.military, icon: <Shield className="h-4 w-4 text-zinc-400" />, sub: "Maintenance Militer" },
    { label: "Bunga Hutang Negara", value: expenses.debtInterest, icon: <Receipt className="h-4 w-4 text-red-500" />, sub: "Debt Servicing" },
    { label: "Subsidi Harga Pasar", value: expenses.priceSubsidies, icon: <Activity className="h-4 w-4 text-rose-300" />, sub: "Price Leveling" }
  ];

  return (
    <div
      className="fixed inset-0 z-[10001] flex items-center justify-center p-4 md:p-8 bg-zinc-950/80 backdrop-blur-md cursor-default pointer-events-auto"
      onClick={onClose}
    >
      {/* Modal Container */}
      <div
        className="relative bg-zinc-950 border border-zinc-800 rounded-[40px] w-full max-w-5xl h-[85vh] flex flex-col overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300 backdrop-blur-3xl"
        onClick={(e) => e.stopPropagation()}
      >

        {/* Header */}
        <div className="px-8 py-6 border-b border-zinc-800/50 flex items-center justify-between bg-zinc-900/30">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-amber-500/10 rounded-2xl border border-amber-500/20">
              <Coins className="h-6 w-6 text-amber-500" />
            </div>
            <div>
              <h2 className="text-2xl font-black text-white tracking-tighter italic uppercase">Rincian Anggaran Negara</h2>
               <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-[0.2em]">National Fiscal Transparency Report</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <NavigasiWaktu />
            <button
              onClick={onClose}
              className="p-3 rounded-2xl bg-zinc-900 border border-zinc-800 hover:bg-rose-500/20 hover:text-rose-500 transition-all cursor-pointer group"
            >
              <X className="h-6 w-6 group-hover:rotate-90 transition-transform" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-8 pb-32 space-y-8 no-scrollbar">

          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-zinc-900/40 border border-zinc-800 p-6 rounded-[32px] flex flex-col gap-2">
              <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Total Pemasukan (Thn)</span>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-black text-emerald-500 tracking-tighter italic">{totalAnnualRevenue.toLocaleString('id-ID')}</span>
              </div>
            </div>
            <div className="bg-zinc-900/40 border border-zinc-800 p-6 rounded-[32px] flex flex-col gap-2">
              <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Total Pengeluaran (Thn)</span>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-black text-rose-500 tracking-tighter italic">{totalAnnualExpense.toLocaleString('id-ID')}</span>
              </div>
            </div>
            <div className={`border p-6 rounded-[32px] flex flex-col gap-2 ${netAnnualSurplus >= 0 ? 'bg-emerald-500/5 border-emerald-500/20' : 'bg-rose-500/5 border-rose-500/20'}`}>
              <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest leading-none">Net Surplus / Defisit Harian</span>
              <div className="flex items-baseline gap-2">
                <span className={`text-4xl font-black tracking-tighter italic ${netAnnualSurplus >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {netAnnualSurplus >= 0 ? '+' : ''}{Math.round(dailyDelta).toLocaleString('id-ID')}
                </span>
                <span className="text-xs font-black text-zinc-400 uppercase italic">/ Hari</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Revenue Column */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 px-2">
                <TrendingUp className="h-4 w-4 text-emerald-500" />
                <h3 className="text-xs font-black text-zinc-400 uppercase tracking-widest">Aliran Pemasukan Kas Negara</h3>
              </div>
              <div className="bg-zinc-900/20 border border-zinc-800 rounded-[32px] p-2 space-y-1">
                {revenuesList.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 rounded-2xl hover:bg-white/5 transition-colors group">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-zinc-900 rounded-xl group-hover:scale-110 transition-transform">{item.icon}</div>
                      <span className="text-xs font-bold text-zinc-300 group-hover:text-white transition-colors">{item.label}</span>
                    </div>
                    <span className="text-sm font-black text-emerald-400 italic">+{item.value.toLocaleString('id-ID')}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Expense Column */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 px-2">
                <TrendingDown className="h-4 w-4 text-rose-500" />
                <h3 className="text-xs font-black text-zinc-400 uppercase tracking-widest">Aliran Pengeluaran & Belanja</h3>
              </div>
              <div className="bg-zinc-900/20 border border-zinc-800 rounded-[32px] p-2 space-y-1">
                {expensesListByGroup.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 rounded-2xl hover:bg-white/5 transition-colors group">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-zinc-900 rounded-xl group-hover:scale-110 transition-transform">{item.icon}</div>
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-zinc-300 group-hover:text-white transition-colors">{item.label}</span>
                        <span className="text-[9px] font-medium text-zinc-500 tracking-wider uppercase group-hover:text-zinc-400">{item.sub}</span>
                      </div>
                    </div>
                    <span className="text-sm font-black text-rose-400 italic">-{Math.round(item.value).toLocaleString('id-ID')}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
