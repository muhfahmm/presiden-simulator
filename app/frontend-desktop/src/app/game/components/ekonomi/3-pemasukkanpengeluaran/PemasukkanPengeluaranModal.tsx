"use client"

import { useState, useEffect } from "react"
import { X, BarChart3, TrendingUp, TrendingDown, Landmark, PieChart, Coins, Shield, Zap, Building2, Activity, Info, Wallet, ArrowRight, Hammer, Users } from "lucide-react"
import { countries } from "../../../../select-country/data/countries"
import { CountryData } from "../../../../select-country/data/types"
import { gameStorage } from "../../../gamestorage"
import { budgetStorage } from "../budgetStorage"
import { buildingStorage } from "../../pembangunan/buildingStorage"
import { taxStorage } from "../2-pajak/TaxStorage"

import { KAPASITAS_LISTRIK_METADATA } from "../../../../select-country/data/electricity"
import { mineralKritisRate } from "../../../../select-country/data/pembangunan/laju-produksi/1_mineral_kritis"
import { produkIndustriRate } from "../../../../select-country/data/pembangunan/laju-produksi/2_produk_industri"
import { komoditasPanganRate } from "../../../../select-country/data/pembangunan/laju-produksi/3_komoditas_pangan"
import { produksiMiliter } from "../../../../select-country/data/pembangunan/produksi-militer"
import { tempatUmum } from "../../../../select-country/data/pembangunan/tempat-umum"

import { calculateDailyBudgetDelta, calculateBaseMaintenance, calculateDeltaMaintenance } from "../../../data/economy/economyLogic"
import { incomeStorage } from "./pemasukkan/IncomeStorage"
import { expenseStorage } from "./pengeluaran/ExpenseStorage"

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PemasukkanPengeluaranModal({ isOpen, onClose }: ModalProps) {
  const [currentBudget, setCurrentBudget] = useState<number>(0);

  useEffect(() => {
    const update = () => {
      if (isOpen) {
        setCurrentBudget(budgetStorage.getBudget());
      }
    };

    if (isOpen) {
      update();
      window.addEventListener('budget_storage_updated', update);
    }
    return () => {
      window.removeEventListener('budget_storage_updated', update);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const session = gameStorage.getSession();
  const initialCountry = countries.find((c: CountryData) => c.name_en === session?.country) || countries[0];

  // --- LOGIKA KALKULASI (Unified with economyLogic.ts) ---

  // 1. Revenue
  const savedTaxes = taxStorage.getTaxes(initialCountry.name_en) || initialCountry.taxes;
  const domesticTaxes = ["vat", "corporate", "income", "environment", "other"];
  const tradeTaxes = ["customs", "transit_allied", "transit_non_allied"];

  const activeDomesticRevenue = domesticTaxes.reduce((acc, key) => acc + ((savedTaxes as any)[key]?.revenue || 0), 0);
  const activeTradeRevenue = tradeTaxes.reduce((acc, key) => acc + ((savedTaxes as any)[key]?.revenue || 0), 0);
  
  const incData = incomeStorage.getData();
  const dailyTaxRevenue = activeDomesticRevenue + activeTradeRevenue + (incData.grants || 0) + (incData.investments || 0);

  // 2. Expenses
  const expData = expenseStorage.getData();
  const buildingData = buildingStorage.getData();
  const dailyBaseMaintenance = calculateBaseMaintenance(initialCountry);
  const dailyDeltaMaintenance = calculateDeltaMaintenance(buildingData.buildingDeltas);
  const dailyMilitaryExpense = produksiMiliter.reduce((acc, item: any) => acc + (item.maintenance || 0), 0);
  
  // Extra Fiscal Expenses
  const subsidyExpense = (dailyTaxRevenue * (expData.subsidyLevel / 100));
  const coreMaintenance = dailyBaseMaintenance + dailyDeltaMaintenance;
  const salaryExpense = (coreMaintenance * 0.1) * expData.salaryMultiplier;

  const totalDailyExpense = coreMaintenance + dailyMilitaryExpense + subsidyExpense + salaryExpense + (expData.debtInterestPaid || 0);

  // 3. Final Balance
  const netDailySurplus = calculateDailyBudgetDelta(initialCountry, buildingData.buildingDeltas);
  const surplusPercentage = (netDailySurplus / dailyTaxRevenue) * 100;

  return (
    <div className="absolute inset-0 bg-black/85 z-50 flex items-center justify-center animate-in fade-in duration-300 p-4 md:p-8">
      <div className="bg-zinc-950 border border-zinc-800 rounded-[40px] w-full max-w-[95vw] h-[92vh] overflow-hidden shadow-2xl flex flex-col relative animate-in zoom-in-95 duration-500">
        
        {/* Glow Effects */}
        <div className="absolute top-0 left-1/4 w-1/2 h-1 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent blur-sm"></div>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]"></div>

        <div className="px-10 py-8 border-b border-zinc-900 flex items-center justify-between bg-zinc-900/30 backdrop-blur-3xl">
          <div className="flex items-center gap-6">
            <div className="p-2 bg-purple-500/10 rounded-xl border border-purple-500/20">
              <BarChart3 className="h-6 w-6 text-purple-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight uppercase italic">Pemasukkan & Pengeluaran</h2>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-500 animate-pulse"></span>
                <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-[0.3em]">Treasury & National Fiscal v1.0</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="px-4 py-2 bg-zinc-900/50 border border-zinc-800 rounded-xl flex items-center gap-3">
               <Activity className="h-4 w-4 text-emerald-400" />
               <span className="text-[10px] font-black text-zinc-300 uppercase tracking-widest">Kesehatan Fiskal: <span className="text-emerald-400 ml-1">Optimis</span></span>
            </div>
            <button onClick={onClose} className="p-3 rounded-2xl hover:bg-zinc-800 transition-all text-zinc-400 hover:text-white cursor-pointer group">
              <X className="h-7 w-7 group-hover:rotate-90 transition-transform" />
            </button>
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto p-10 no-scrollbar space-y-8 bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.03),transparent_40%)]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             <div className="bg-zinc-900/40 border border-zinc-800 p-8 rounded-3xl flex flex-col gap-6 relative group overflow-hidden transition-all hover:bg-zinc-900/60 shadow-lg">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity"><TrendingUp className="h-10 w-10 text-emerald-400" /></div>
                <div>
                   <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest block mb-2">Total Kas Negara</span>
                   <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-black text-white tracking-tight">{Math.round(currentBudget).toLocaleString('id-ID')}</span>
                   </div>
                </div>
                <div className="pt-4 border-t border-zinc-800 flex justify-between items-center">
                   <span className="text-[9px] font-bold text-zinc-500 uppercase">Status</span>
                   <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest italic">Liquid</span>
                </div>
             </div>
             <div className="bg-zinc-900/40 border border-zinc-800 p-8 rounded-3xl flex flex-col gap-6 relative group overflow-hidden transition-all hover:bg-zinc-900/60 shadow-lg">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity"><PieChart className="h-10 w-10 text-blue-400" /></div>
                <div>
                   <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest block mb-2">Pendapatan Pajak</span>
                   <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-black text-blue-400 tracking-tight">{Math.round(dailyTaxRevenue).toLocaleString('id-ID')}</span>
                      <span className="text-sm font-bold text-zinc-500 uppercase">/ Hari</span>
                   </div>
                </div>
                <div className="pt-4 border-t border-zinc-800 flex justify-between items-center">
                   <span className="text-[9px] font-bold text-zinc-500 uppercase">Konteks</span>
                   <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest italic">{initialCountry.name_id} v.1</span>
                </div>
             </div>
             <div className="bg-zinc-900/40 border border-zinc-800 p-8 rounded-3xl flex flex-col gap-6 relative group overflow-hidden transition-all hover:bg-zinc-900/60 shadow-lg">
                <div className={`absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity`}>
                   {netDailySurplus >= 0 ? <TrendingUp className="h-10 w-10 text-emerald-400" /> : <TrendingDown className="h-10 w-10 text-red-400" />}
                </div>
                <div>
                   <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest block mb-2">Saldo Bersih</span>
                   <div className="flex items-baseline gap-2">
                      <span className={`text-3xl font-black tracking-tight ${netDailySurplus >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                         {netDailySurplus >= 0 ? '+' : ''}{Math.round(netDailySurplus).toLocaleString('id-ID')}
                      </span>
                      <span className="text-sm font-bold text-zinc-500 uppercase">/ Hari</span>
                   </div>
                </div>
                <div className="pt-4 border-t border-zinc-800 flex justify-between items-center">
                   <span className="text-[9px] font-bold text-zinc-500 uppercase">Proyeksi</span>
                   <span className={`text-[10px] font-black uppercase tracking-widest ${netDailySurplus >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                      {netDailySurplus >= 0 ? 'Surplus' : 'Defisit'}
                   </span>
                </div>
             </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
             {/* KOLOM 1: PENDAPATAN */}
             <div className="bg-zinc-900/30 border border-zinc-800 rounded-[2rem] p-8 space-y-8 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                   <h3 className="text-xl font-black text-white uppercase tracking-tighter italic flex items-center gap-3">
                      <div className="p-2 bg-emerald-500/10 rounded-lg border border-emerald-500/20"><TrendingUp size={18} className="text-emerald-400" /></div>
                      Pendapatan Harian
                   </h3>
                   <span className="text-xs font-black text-emerald-400">+{Math.round(dailyTaxRevenue).toLocaleString('id-ID')}</span>
                </div>
                
                <div className="space-y-4 max-h-[400px] overflow-y-auto no-scrollbar pr-2">
                   {/* Domestic Taxes */}
                   <div className="space-y-3">
                      <span className="text-[9px] font-black text-zinc-600 uppercase tracking-widest block px-1">Domestic Fiscal</span>
                      {[
                         { id: "vat", label: "Pajak PPN", icon: Coins, color: "text-purple-400" },
                         { id: "corporate", label: "Pajak Korporasi", icon: Building2, color: "text-cyan-400" },
                         { id: "income", label: "Pajak Penghasilan", icon: Wallet, color: "text-green-400" },
                         { id: "environment", label: "Pajak Lingkungan", icon: Activity, color: "text-emerald-400" },
                         { id: "other", label: "Pajak Lainnya", icon: Info, color: "text-zinc-500" }
                      ].map((tax) => (
                         <div key={tax.id} className="bg-zinc-950/50 border border-zinc-900 p-4 rounded-2xl flex justify-between items-center group hover:border-zinc-800 transition-all">
                            <div className="flex items-center gap-3">
                               <tax.icon size={14} className={tax.color} />
                               <span className="text-[11px] font-bold text-zinc-300 uppercase tracking-tight">{tax.label}</span>
                            </div>
                            <span className="text-[11px] font-black text-white">+{Math.round(((savedTaxes as any)[tax.id]?.revenue || 0)).toLocaleString('id-ID')}</span>
                         </div>
                      ))}
                   </div>

                   {/* Trade Taxes */}
                   <div className="space-y-3 mt-6">
                      <span className="text-[9px] font-black text-zinc-600 uppercase tracking-widest block px-1">Trade & Logistics</span>
                      {[
                         { id: "customs", label: "Bea Cukai", icon: Landmark, color: "text-amber-400" },
                         { id: "transit_allied", label: "Transit (Sekutu)", icon: Shield, color: "text-blue-400" },
                         { id: "transit_non_allied", label: "Transit (Non-Mitra)", icon: Activity, color: "text-rose-400" }
                      ].map((tax) => (
                         <div key={tax.id} className="bg-zinc-950/50 border border-zinc-900 p-4 rounded-2xl flex justify-between items-center group hover:border-zinc-800 transition-all">
                            <div className="flex items-center gap-3">
                               <tax.icon size={14} className={tax.color} />
                               <span className="text-[11px] font-bold text-zinc-300 uppercase tracking-tight">{tax.label}</span>
                            </div>
                            <span className="text-[11px] font-black text-white">+{Math.round(((savedTaxes as any)[tax.id]?.revenue || 0)).toLocaleString('id-ID')}</span>
                         </div>
                      ))}
                   </div>
                </div>
             </div>

             {/* KOLOM 2: PENGELUARAN */}
             <div className="bg-zinc-900/30 border border-zinc-800 rounded-[2rem] p-8 space-y-8 backdrop-blur-sm shadow-xl">
                <div className="flex items-center justify-between">
                   <h3 className="text-xl font-black text-white uppercase tracking-tighter italic flex items-center gap-3">
                      <div className="p-2 bg-red-500/10 rounded-lg border border-red-500/20"><TrendingDown size={18} className="text-red-400" /></div>
                      Pengeluaran Harian
                   </h3>
                   <span className="text-xs font-black text-red-400">-{Math.round(totalDailyExpense).toLocaleString('id-ID')}</span>
                </div>
                
                 <div className="space-y-4 max-h-[400px] overflow-y-auto no-scrollbar pr-2">
                    {[
                       { label: "Beban Militer & Pertahanan", value: dailyMilitaryExpense, icon: Shield, color: "text-red-400", desc: "Pemeliharaan alutsista dan gaji personel aktif." },
                       { label: "Pemeliharaan Infrastruktur", value: dailyBaseMaintenance, icon: Zap, color: "text-amber-400", desc: "Listrik, jalan raya, pelabuhan, dan fasilitas publik." },
                       { label: "Gaji Pegawai & Birokrasi", value: salaryExpense, icon: Users, color: "text-blue-400", desc: "Gaji ASN, Tenaga Medis, Guru, dan Aparatur Negara." },
                       { label: "Subsidi Publik (Energi/Pangan)", value: subsidyExpense, icon: Coins, color: "text-green-400", desc: "Bantuan modal dan subsidi harga untuk rakyat." },
                       { label: "Pengembangan Baru", value: dailyDeltaMaintenance, icon: Hammer, color: "text-zinc-400", desc: "Biaya harian untuk gedung yang baru saja dibangun." },
                       ...(expData.debtInterestPaid > 0 ? [{ label: "Bunga Hutang Luar Negeri", value: expData.debtInterestPaid, icon: Landmark, color: "text-rose-500", desc: "Biaya bunga atas pinjaman dana internasional." }] : [])
                    ].map((item: any, i: number) => (
                       <div key={i} className="bg-zinc-950/50 border border-zinc-900 p-4 rounded-2xl group transition-all hover:border-zinc-800">
                          <div className="flex justify-between items-center mb-1">
                             <div className="flex items-center gap-3">
                                <item.icon size={13} className={item.color} />
                                <span className="text-[11px] font-bold text-zinc-300 uppercase tracking-tight">{item.label}</span>
                             </div>
                             <span className={`text-[11px] font-black ${item.color}`}>-{Math.round(item.value).toLocaleString('id-ID')}</span>
                          </div>
                          <p className="text-[9px] text-zinc-600 font-medium italic leading-relaxed group-hover:text-zinc-500 transition-colors">"{item.desc}"</p>
                       </div>
                    ))}
                 </div>

                   {/* Future Projection / Summary Card */}
                   <div className="mt-6 bg-zinc-950/80 border border-zinc-800 p-6 rounded-3xl space-y-4">
                      <div className="flex justify-between items-end">
                         <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Kesehatan Arus Kas</span>
                         <span className={`text-lg font-black ${netDailySurplus >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                            {Math.round(surplusPercentage)}% Surplus
                         </span>
                      </div>
                      <div className="h-2 w-full bg-zinc-900 rounded-full overflow-hidden">
                         <div className={`h-full transition-all duration-1000 ${netDailySurplus >= 0 ? 'bg-emerald-500' : 'bg-red-500'}`} style={{ width: `${Math.max(5, Math.min(100, Math.abs(surplusPercentage)))}%` }} />
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                         <div className="flex flex-col">
                            <span className="text-[8px] text-zinc-500 uppercase font-bold">Proyeksi Lusa</span>
                            <span className="text-xs font-black text-zinc-200">{(currentBudget + (netDailySurplus * 2)).toLocaleString('id-ID')}</span>
                         </div>
                         <div className="flex flex-col items-end">
                            <span className="text-[8px] text-zinc-500 uppercase font-bold">Saldo Mingguan</span>
                            <span className="text-xs font-black text-zinc-200">{(currentBudget + (netDailySurplus * 7)).toLocaleString('id-ID')}</span>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        
        <div className="px-10 py-6 bg-zinc-900/30 border-t border-zinc-900 flex items-center justify-between backdrop-blur-3xl">
           <div className="flex items-center gap-3">
              <Info size={14} className="text-zinc-500" />
              <p className="text-[10px] text-zinc-500 font-medium italic">Seluruh kalkulasi anggaran adalah proyeksi berbasis real-time data ekonomi nasional dan kebijakan fiskal aktif.</p>
           </div>
           <div className="flex items-center gap-6">
              <div className="flex flex-col items-end">
                 <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">Daily Net Change</span>
                 <span className={`text-xs font-black ${netDailySurplus >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>{netDailySurplus >= 0 ? '+' : ''}{Math.round(netDailySurplus).toLocaleString('id-ID')}</span>
              </div>
           </div>
        </div>
      </div>
    </div>
  )
}
