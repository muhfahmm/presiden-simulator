"use client"

import { useState, useEffect } from "react"
import { X, BarChart3, TrendingUp, TrendingDown, Landmark, PieChart, Coins, Shield, Zap, Building2, Activity, Info, Wallet, ArrowRight, Hammer, Users, Eye, ChevronLeft, Car, Home } from "lucide-react"
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
import { produksi } from "../../../../select-country/data/pembangunan/produksi"

import { calculateDailyBudgetDelta, calculateBaseMaintenance, calculateDeltaMaintenance } from "../../../data/economy/economyLogic"
import { incomeStorage } from "./pemasukkan/IncomeStorage"
import { expenseStorage } from "./pengeluaran/ExpenseStorage"

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PemasukkanPengeluaranModal({ isOpen, onClose }: ModalProps) {
  const [currentBudget, setCurrentBudget] = useState<number>(0);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const [expData, setExpData] = useState(expenseStorage.getData());
  const [incData, setIncData] = useState(incomeStorage.getData());

  useEffect(() => {
    const update = () => {
      if (isOpen) {
        setCurrentBudget(budgetStorage.getBudget());
      }
    };

    const updateExpense = () => { if (isOpen) setExpData(expenseStorage.getData()); };
    const updateIncome = () => { if (isOpen) setIncData(incomeStorage.getData()); };

    if (isOpen) {
      update();
      updateExpense();
      updateIncome();
      window.addEventListener('budget_storage_updated', update);
      window.addEventListener('expense_storage_updated', updateExpense);
      window.addEventListener('income_storage_updated', updateIncome);
    }
    return () => {
      window.removeEventListener('budget_storage_updated', update);
      window.removeEventListener('expense_storage_updated', updateExpense);
      window.removeEventListener('income_storage_updated', updateIncome);
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
  
  
  const dailyTaxRevenue = activeDomesticRevenue + activeTradeRevenue + (incData.grants || 0) + (incData.investments || 0);

  // 2. Expenses
  const buildingData = buildingStorage.getData();
  const dailyBaseMaintenance = calculateBaseMaintenance(initialCountry);
  const dailyDeltaMaintenance = calculateDeltaMaintenance(buildingData.buildingDeltas);
  const dailyMilitaryExpense = produksiMiliter.reduce((acc, item: any) => acc + (item.maintenance || 0), 0);
  
  // Extra Fiscal Expenses
  const totalSubsidyLevel = ((expData.subsidyEnergi || 0) + (expData.subsidyPangan || 0) + (expData.subsidyKesehatan || 0) + (expData.subsidyPendidikan || 0) + (expData.subsidyUmkm || 0) + (expData.subsidyTransport || 0) + (expData.subsidyRumah || 0)) / 7;
  const subsidyExpense = (dailyTaxRevenue * (totalSubsidyLevel / 100));
  const coreMaintenance = dailyBaseMaintenance + dailyDeltaMaintenance;
  const getMult = (v: number) => v <= 2.0 ? v : v / 100;
  const avgSalaryMultiplier = (getMult(expData.salaryAsn || 1) + getMult(expData.salaryGuru || 1) + getMult(expData.salaryMedis || 1) + getMult(expData.salaryMiliter || 1)) / 4;
  const salaryExpense = (coreMaintenance * 0.1) * avgSalaryMultiplier;

  const totalDailyExpense = coreMaintenance + dailyMilitaryExpense + subsidyExpense + salaryExpense + (expData.debtInterestPaid || 0);

  // 3. Final Balance
  const netDailySurplus = calculateDailyBudgetDelta(initialCountry, buildingData.buildingDeltas);
  const surplusPercentage = (netDailySurplus / dailyTaxRevenue) * 100;

  const getSatisfaction = (mult: number) => {
    if (mult <= 2.0) { // Backward compatibility
       if (mult <= 0.5) return 25;
       if (mult <= 1.0) return 50;
       if (mult <= 1.5) return 75;
       return 100;
    }
    return mult; // Direct percentage (10-100)
  };
  const avgSatisfaction = Math.round(((getSatisfaction(expData.salaryAsn || 1) + getSatisfaction(expData.salaryGuru || 1) + getSatisfaction(expData.salaryMedis || 1) + getSatisfaction(expData.salaryMiliter || 1))) / 4);

  const expenseItems = [
     { id: "military", label: "Beban Militer & Pertahanan", value: dailyMilitaryExpense, icon: Shield, color: "text-red-400", desc: "Pemeliharaan alutsista dan gaji personel aktif." },
     { id: "maintenance", label: "Pemeliharaan Infrastruktur", value: dailyBaseMaintenance, icon: Zap, color: "text-amber-400", desc: "Listrik, jalan raya, pelabuhan, dan fasilitas publik." },
     { id: "salaries", label: "Gaji Pegawai & Birokrasi", value: salaryExpense, icon: Users, color: "text-blue-400", desc: "Gaji ASN, Tenaga Medis, Guru, dan Aparatur Negara.", satisfaction: avgSatisfaction, satisfactionLabel: "Indeks Kepuasan Pegawai" },
     { id: "subsidies", label: "Subsidi Publik", value: subsidyExpense, icon: Coins, color: "text-green-400", desc: "Bantuan modal dan subsidi harga untuk rakyat.", satisfaction: Math.round(((expData.subsidyEnergi || 0) + (expData.subsidyPangan || 0) + (expData.subsidyKesehatan || 0) + (expData.subsidyPendidikan || 0) + (expData.subsidyUmkm || 0) + (expData.subsidyTransport || 0) + (expData.subsidyRumah || 0)) / 7), satisfactionLabel: "Indeks Kepuasan Publik" },
     ...(expData.debtInterestPaid > 0 ? [{ id: "debt", label: "Bunga Hutang Luar Negeri", value: expData.debtInterestPaid, icon: Landmark, color: "text-rose-500", desc: "Biaya bunga atas pinjaman dana internasional." }] : [])
  ];

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
                <p className="text-xs text-zinc-500 font-bold uppercase tracking-[0.3em]">Treasury & National Fiscal v1.0</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="px-4 py-2 bg-zinc-900/50 border border-zinc-800 rounded-xl flex items-center gap-3">
               <Activity className="h-4 w-4 text-emerald-400" />
               <span className="text-xs font-black text-zinc-300 uppercase tracking-widest">Kesehatan Fiskal: <span className="text-emerald-400 ml-1">Optimis</span></span>
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
                   <span className="text-xs font-black text-zinc-500 uppercase tracking-widest block mb-2">Total Kas Negara</span>
                   <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-black text-white tracking-tight">{Math.round(currentBudget).toLocaleString('id-ID')}</span>
                   </div>
                </div>
                <div className="pt-4 border-t border-zinc-800 flex justify-between items-center">
                   <span className="text-[13px] font-bold text-zinc-500 uppercase">Status</span>
                   <span className="text-xs font-black text-emerald-400 uppercase tracking-widest italic">Liquid</span>
                </div>
             </div>
             <div className="bg-zinc-900/40 border border-zinc-800 p-8 rounded-3xl flex flex-col gap-6 relative group overflow-hidden transition-all hover:bg-zinc-900/60 shadow-lg">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity"><PieChart className="h-10 w-10 text-blue-400" /></div>
                <div>
                   <span className="text-xs font-black text-zinc-500 uppercase tracking-widest block mb-2">Pendapatan Pajak</span>
                   <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-black text-blue-400 tracking-tight">{Math.round(dailyTaxRevenue).toLocaleString('id-ID')}</span>
                      <span className="text-sm font-bold text-zinc-500 uppercase">/ Hari</span>
                   </div>
                </div>
                <div className="pt-4 border-t border-zinc-800 flex justify-between items-center">
                   <span className="text-[13px] font-bold text-zinc-500 uppercase">Konteks</span>
                   <span className="text-xs font-black text-blue-400 uppercase tracking-widest italic">{initialCountry.name_id} v.1</span>
                </div>
             </div>
             <div className="bg-zinc-900/40 border border-zinc-800 p-8 rounded-3xl flex flex-col gap-6 relative group overflow-hidden transition-all hover:bg-zinc-900/60 shadow-lg">
                <div className={`absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity`}>
                   {netDailySurplus >= 0 ? <TrendingUp className="h-10 w-10 text-emerald-400" /> : <TrendingDown className="h-10 w-10 text-red-400" />}
                </div>
                <div>
                   <span className="text-xs font-black text-zinc-500 uppercase tracking-widest block mb-2">Saldo Bersih</span>
                   <div className="flex items-baseline gap-2">
                      <span className={`text-3xl font-black tracking-tight ${netDailySurplus >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                         {netDailySurplus >= 0 ? '+' : ''}{Math.round(netDailySurplus).toLocaleString('id-ID')}
                      </span>
                      <span className="text-sm font-bold text-zinc-500 uppercase">/ Hari</span>
                   </div>
                </div>
                <div className="pt-4 border-t border-zinc-800 flex justify-between items-center">
                   <span className="text-[13px] font-bold text-zinc-500 uppercase">Proyeksi</span>
                   <span className={`text-xs font-black uppercase tracking-widest ${netDailySurplus >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
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
                      <span className="text-[13px] font-black text-zinc-600 uppercase tracking-widest block px-1">Domestic Fiscal</span>
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
                               <span className="text-[13px] font-bold text-zinc-300 uppercase tracking-tight">{tax.label}</span>
                            </div>
                            <span className="text-[13px] font-black text-white">+{Math.round(((savedTaxes as any)[tax.id]?.revenue || 0)).toLocaleString('id-ID')}</span>
                         </div>
                      ))}
                   </div>

                   {/* Trade Taxes */}
                   <div className="space-y-3 mt-6">
                      <span className="text-[13px] font-black text-zinc-600 uppercase tracking-widest block px-1">Trade & Logistics</span>
                      {[
                         { id: "customs", label: "Bea Cukai", icon: Landmark, color: "text-amber-400" },
                         { id: "transit_allied", label: "Transit (Sekutu)", icon: Shield, color: "text-blue-400" },
                         { id: "transit_non_allied", label: "Transit (Non-Mitra)", icon: Activity, color: "text-rose-400" }
                      ].map((tax) => (
                         <div key={tax.id} className="bg-zinc-950/50 border border-zinc-900 p-4 rounded-2xl flex justify-between items-center group hover:border-zinc-800 transition-all">
                            <div className="flex items-center gap-3">
                               <tax.icon size={14} className={tax.color} />
                               <span className="text-[13px] font-bold text-zinc-300 uppercase tracking-tight">{tax.label}</span>
                            </div>
                            <span className="text-[13px] font-black text-white">+{Math.round(((savedTaxes as any)[tax.id]?.revenue || 0)).toLocaleString('id-ID')}</span>
                         </div>
                      ))}
                   </div>
                </div>
             </div>

             {/* KOLOM 2: PENGELUARAN */}
             <div className="bg-zinc-900/30 border border-zinc-800 rounded-[2rem] p-8 space-y-8 backdrop-blur-sm shadow-xl relative overflow-hidden">
                <div className="flex items-center justify-between">
                   <h3 className="text-xl font-black text-white uppercase tracking-tighter italic flex items-center gap-3">
                      <div className="p-2 bg-red-500/10 rounded-lg border border-red-500/20"><TrendingDown size={18} className="text-red-400" /></div>
                      Pengeluaran Harian
                   </h3>
                   <span className="text-xs font-black text-red-400">-{Math.round(totalDailyExpense).toLocaleString('id-ID')}</span>
                </div>
                
                  <div className="space-y-3 max-h-[400px] overflow-y-auto no-scrollbar pr-2">
                      {expenseItems.map((item: any, i: number) => (
                           <div key={i} className="bg-zinc-950/50 border border-zinc-900 p-4 rounded-2xl group transition-all hover:border-zinc-800 relative">
                              <div className="flex justify-between items-center mb-1">
                                 <div className="flex items-center gap-3">
                                    <item.icon size={13} className={item.color} />
                                    <span className="text-[13px] font-bold text-zinc-300 uppercase tracking-tight">{item.label}</span>
                                 </div>
                                 <div className="flex items-center gap-2">
                                    <span className={`text-[13px] font-black ${item.id === 'subsidies' ? item.color : item.color}`}>-{Math.round(item.id === 'subsidies' ? item.value : item.value * 100000).toLocaleString('id-ID')}</span>
                                    <button onClick={() => setExpandedItem(item.id)} className="p-1 rounded-md hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer ml-1">
                                       <Eye size={12} />
                                    </button>
                                 </div>
                              </div>
                              <p className="text-[13px] text-zinc-600 font-medium italic leading-relaxed group-hover:text-zinc-500 transition-colors">"{item.desc}"</p>
                              {item.satisfaction !== undefined && (
                                 <div className="mt-1 flex items-center gap-1">
                                    <span className="text-[11px] text-zinc-500 font-bold">{item.satisfactionLabel || "Index Kepuasan Global"}: <span className={item.satisfaction >= 80 ? 'text-emerald-400' : item.satisfaction >= 60 ? 'text-amber-400' : 'text-red-400'}>{item.satisfaction}%</span></span>
                                 </div>
                              )}
                           </div>
                        ))}
                  </div>

                  {/* ABSOLUTE OVERLAY MENU DETAILS (Menutup Pendapatan & Pengeluaran) */}
                  <div className={`absolute inset-0 bg-zinc-950/98 border border-zinc-800 rounded-[2rem] p-8 shadow-2xl transition-all duration-500 ease-in-out backdrop-blur-3xl z-30 flex flex-col ${expandedItem ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'}`}>
                     <div className="flex items-center justify-between border-b border-zinc-900 pb-4 mb-6">
                        <div className="flex items-center gap-4">
                           <button onClick={() => setExpandedItem(null)} className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-all cursor-pointer">
                              <ChevronLeft size={14} />
                           </button>
                            <div>
                               <h3 className="text-xl font-black text-white uppercase tracking-tighter italic">
                                  {expenseItems.find((item: any) => item.id === expandedItem)?.label || "Detail Kebijakan & Manajemen"}
                               </h3>
                              <p className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Kustomisasi Anggaran Proyeksi</p>
                           </div>
                        </div>
                     </div>

                     <div className="flex-1 overflow-y-auto no-scrollbar space-y-6">
                        {expandedItem === 'salaries' && (() => {
                           const getSatisfaction = (mult: number) => {
                              if (mult <= 2.0) {
                                 if (mult <= 0.5) return 25;
                                 if (mult <= 1.0) return 50;
                                 if (mult <= 1.5) return 75;
                                 return 100;
                              }
                              return mult;
                           };
                           const satisfyColors = (sat: number) => sat >= 80 ? 'text-emerald-400' : sat >= 60 ? 'text-amber-400' : 'text-red-400';
                           return (
                           <div className="bg-zinc-900/40 border border-zinc-800 p-6 rounded-3xl space-y-6">
                              <div className="flex justify-between items-center">
                                 <div className="flex items-center gap-3">
                                    <Users className="h-5 w-5 text-blue-400" />
                                    <span className="text-sm font-bold text-white">Manajemen Gaji Aparatur & Pegawai</span>
                                 </div>
                                 <div className="flex items-center gap-2 bg-zinc-950 px-3 py-1 rounded-full border border-zinc-900">
                                    <span className="text-[11px] text-zinc-500 font-bold">Indeks Kepuasan Pegawai:</span>
                                    <span className={`text-xs font-black ${satisfyColors((getSatisfaction(expData.salaryAsn) + getSatisfaction(expData.salaryGuru) + getSatisfaction(expData.salaryMedis) + getSatisfaction(expData.salaryMiliter)) / 4)}`}>
                                       {Math.round((getSatisfaction(expData.salaryAsn) + getSatisfaction(expData.salaryGuru) + getSatisfaction(expData.salaryMedis) + getSatisfaction(expData.salaryMiliter)) / 4)}%
                                    </span>
                                 </div>
                              </div>
                              <p className="text-xs text-zinc-500">Koefisien penggajian departmental. Kepuasan tinggi mencegah demonstrasi/pemogokan kerja dan menjaga kestabilan pemerintahan.</p>
                              
                              <div className="grid grid-cols-2 gap-4">
                                 {[
                                    { key: 'salaryAsn', label: 'Gaji ASN & Birokrasi', icon: Users, color: 'text-blue-400' },
                                    { key: 'salaryGuru', label: 'Gaji Guru & Pengajar', icon: Users, color: 'text-cyan-400' },
                                    { key: 'salaryMedis', label: 'Gaji Tenaga Medis', icon: Activity, color: 'text-rose-400' },
                                    { key: 'salaryMiliter', label: 'Gaji Personel Militer', icon: Shield, color: 'text-red-400' }
                                 ].map((s: any) => {
                                    const satisfaction = getSatisfaction((expData as any)[s.key] || 1.0);
                                    const sumMult = (expData.salaryAsn || 1) + (expData.salaryGuru || 1) + (expData.salaryMedis || 1) + (expData.salaryMiliter || 1);
                                    const sectorExpense = (((expData as any)[s.key] || 1) / (sumMult > 0 ? sumMult : 4)) * salaryExpense;
                                    
                                    return (
                                    <div key={s.key} className="bg-zinc-950 core-border border border-zinc-900 p-4 rounded-xl space-y-3">
                                       <div className="flex justify-between items-center">
                                          <div className="flex items-center gap-2">
                                             <s.icon size={13} className={s.color} />
                                             <span className="text-xs font-bold text-zinc-300">{s.label}</span>
                                          </div>
                                          <div className="flex items-center gap-1.5">
                                             <span className={`text-[10px] font-bold ${satisfyColors(satisfaction)}`}>{satisfaction}%</span>
                                              <span className={`text-xs font-black text-white`}>{Math.round(sectorExpense * 100000).toLocaleString('id-ID')}</span>
                                          </div>
                                       </div>
                                        <div className="grid grid-cols-5 gap-1.5 pt-1">
                                           {[10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((val) => {
                                              const value = (expData as any)[s.key] || 100;
                                              const currentVal = value <= 2.0 ? value * 100 : value;
                                              const isActive = currentVal === val;
                                              return (
                                                 <button key={val} onClick={() => {
                                                    setExpData(prev => ({ ...prev, [s.key]: val }));
                                                    expenseStorage.updateExpense(s.key as any, val);
                                                 }} className={`py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer text-center ${isActive ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30' : 'bg-zinc-950 border border-zinc-900 text-zinc-500 hover:bg-zinc-800 hover:text-white'}`}>
                                                    {val}%
                                                 </button>
                                              );
                                           })}
                                        </div>
                                    </div>
                                 )})}
                              </div>
                           </div>
                        )})()}

                        {expandedItem === 'subsidies' && (
                           <div className="bg-zinc-900/40 border border-zinc-800 p-6 rounded-3xl space-y-6">
                              <div className="flex justify-between items-center">
                                 <div className="flex items-center gap-3">
                                    <Coins className="h-5 w-5 text-green-400" />
                                    <span className="text-sm font-bold text-white">Subsidi Publik Modular</span>
                                 </div>
                                 <div className="flex items-center gap-2 bg-zinc-950 px-3 py-1 rounded-full border border-zinc-900">
                                    <span className="text-[11px] text-zinc-500 font-bold">Total Alokasi Rata-rata:</span>
                                    <span className="text-xs font-black text-green-400">
                                       {Math.round(((expData.subsidyEnergi || 0) + (expData.subsidyPangan || 0) + (expData.subsidyKesehatan || 0) + (expData.subsidyPendidikan || 0) + (expData.subsidyUmkm || 0) + (expData.subsidyTransport || 0) + (expData.subsidyRumah || 0)) / 7)}%
                                    </span>
                                 </div>
                              </div>
                              <p className="text-xs text-zinc-500">Mendistribusikan kas negara untuk meredakan biaya hidup rakyat atau mendongkrak stabilitas ekonomi dasar departemen bervalidasi.</p>
                              <div className="grid grid-cols-2 gap-4 max-h-[300px] overflow-y-auto pr-2 no-scrollbar">
                                 {[
                                    { key: 'subsidyEnergi', label: 'Energi (BBM & Listrik)', icon: Zap, color: 'text-yellow-400' },
                                    { key: 'subsidyPangan', label: 'Pangan (Bahan Pokok)', icon: Coins, color: 'text-green-500' },
                                    { key: 'subsidyKesehatan', label: 'Kesehatan (BPJS)', icon: Activity, color: 'text-rose-400' },
                                    { key: 'subsidyPendidikan', label: 'Pendidikan (BOS)', icon: Users, color: 'text-cyan-400' },
                                    { key: 'subsidyUmkm', label: 'Sektor UMKM & Tani', icon: Hammer, color: 'text-orange-400' },
                                    { key: 'subsidyTransport', label: 'Transportasi Umum', icon: Car, color: 'text-blue-400' },
                                    { key: 'subsidyRumah', label: 'Perumahan Rakyat', icon: Home, color: 'text-indigo-400' }
                                 ].map((s: any) => {
                                    const value = (expData as any)[s.key] || 0;
                                    // Total alloc Rupiah allocation estimate = Tax revenue * (sub % / 100) / 7 (Now 7 categories)
                                    const allocRupiah = (dailyTaxRevenue * (value / 100)) / 7;
                                    const formatRupiah = Math.round(allocRupiah).toLocaleString('id-ID');
                                    return (
                                    <div key={s.key} className="bg-zinc-950 core-border border border-zinc-900 p-4 rounded-xl space-y-3">
                                       <div className="flex justify-between items-center">
                                          <div className="flex items-center gap-2">
                                             <s.icon size={13} className={s.color} />
                                             <span className="text-xs font-bold text-zinc-300">{s.label}</span>
                                          </div>
                                          <span className="text-xs font-black text-white">{value}%</span>
                                       </div>
                                        <div className="grid grid-cols-5 gap-1.5 pt-1">
                                           {[0, 25, 50, 75, 100].map((val) => {
                                              const isActive = value === val;
                                              return (
                                                 <button key={val} onClick={() => {
                                                    setExpData(prev => ({ ...prev, [s.key]: val }));
                                                    expenseStorage.updateExpense(s.key as any, val);
                                                 }} className={`py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer text-center ${isActive ? 'bg-green-500 text-white shadow-lg shadow-green-500/30' : 'bg-zinc-900 border border-zinc-800 text-zinc-500 hover:bg-zinc-800 hover:text-white'}`}>
                                                    {val}%
                                                 </button>
                                              );
                                           })}
                                        </div>
                                       <div className="flex justify-between text-xs font-bold text-zinc-500 mt-0.5">
                                           <span>{value > 0 ? 'Active' : '0% Off'}</span>
                                           {value > 0 && <span>Alokasi: {formatRupiah}</span>}
                                        </div>
                                    </div>
                                 )})}
                              </div>
                           </div>
                        )}

                        {expandedItem === 'military' && (
                           <div className="bg-zinc-900/40 border border-zinc-800 p-6 rounded-3xl space-y-4">
                              <div className="flex items-center gap-3">
                                 <Shield className="h-5 w-5 text-red-400" />
                                 <span className="text-sm font-bold text-white">Rincian Perawatan Militer</span>
                              </div>
                              <div className="grid grid-cols-2 gap-3 max-h-[250px] overflow-y-auto pr-2 no-scrollbar">
                                 {produksiMiliter.filter((m: any) => m.maintenance > 0).map((m: any, idx: number) => (
                                    <div key={idx} className="bg-zinc-950 core-border border border-zinc-900 p-3 rounded-xl flex justify-between items-center">
                                       <span className="text-xs font-medium text-zinc-400">{m.name_id}</span>
                                       <span className="text-xs font-black text-red-500">-{m.maintenance.toLocaleString('id-ID')}</span>
                                    </div>
                                 ))}
                              </div>
                           </div>
                        )}


                        {expandedItem === 'maintenance' && (() => {
                           const allMetadata = [
                              ...Object.values(KAPASITAS_LISTRIK_METADATA),
                              ...Object.values(mineralKritisRate),
                              ...Object.values(produkIndustriRate),
                              ...Object.values(komoditasPanganRate),
                              ...Object.values(tempatUmum),
                              ...Object.values(produksiMiliter)
                           ];

                           const sectors = [
                              { label: "Kelistrikan", data: initialCountry.sector_electricity },
                              { label: "Infrastruktur", data: initialCountry.infrastructure },
                              { label: "Pertahanan & Militer", data: { 
                                 ...(initialCountry as any).sector_defense, 
                                 ...(initialCountry as any).sector_military_strategic,
                                 ...(initialCountry as any).sector_defense?.military_fleet?.darat,
                                 ...(initialCountry as any).sector_defense?.military_fleet?.laut,
                                 ...(initialCountry as any).sector_defense?.military_fleet?.udara
                              } },
                              { label: "Ekstraksi", data: initialCountry.sector_extraction },
                              { label: "Manufaktur", data: initialCountry.sector_manufacturing },
                              { label: "Peternakan", data: initialCountry.sector_livestock },
                              { label: "Pertanian", data: initialCountry.sector_agriculture },
                              { label: "Pendidikan", data: initialCountry.sector_social?.education },
                              { label: "Kesehatan", data: initialCountry.sector_social?.health },
                              { label: "Olahraga", data: initialCountry.sector_social?.sports },
                              { label: "Hukum", data: initialCountry.sector_social?.law }
                           ];

                           const listItems: any[] = []; // (Not needed, replaced with aggregated record)
                           const aggregated: Record<string, any[]> = {};
                           sectors.forEach(s => {
                              if (!s.data) return;
                              Object.entries(s.data).forEach(([key, count]) => {
                                 if (typeof count !== 'number' || count <= 0) return;
                                 const metadata = allMetadata.find((m: any) => m.key === key || m.id === key || m.dataKey === key) as any;
                                 if (metadata) {
                                    const cat = metadata.category || metadata.groupId || s.label;
                                    if (!aggregated[cat]) aggregated[cat] = [];
                                    aggregated[cat].push({
                                       name: metadata.desc || metadata.label || metadata.name || key,
                                       count: count,
                                       maintenance: metadata.maintenanceCost || metadata.maintenance || 0
                                    });
                                 }
                              });
                           });

                           return (
                              <div className="bg-zinc-900/40 border border-zinc-800 p-6 rounded-3xl space-y-4">
                                 <div className="flex items-center gap-3 border-b border-zinc-800 pb-2">
                                    <Zap className="h-5 w-5 text-amber-400" />
                                    <span className="text-sm font-bold text-white">Rincian Perawatan Infrastruktur</span>
                                 </div>
                                 <div className="space-y-4 max-h-[380px] overflow-y-auto pr-2 no-scrollbar">
                                     {Object.entries(aggregated).map(([category, items]: any, catIdx) => {
                                        const totalCount = items.length;
                                        return (
                                        <div key={catIdx} className="space-y-2">
                                           <div className="flex items-center gap-2">
                                              <div className="w-1 h-3 bg-amber-400 rounded-full"></div>
                                              <span className="text-sm font-black text-amber-400 uppercase tracking-wider">{category} <span className="text-zinc-200">({totalCount})</span></span>
                                           </div>
                                           <div className="grid grid-cols-2 gap-2">
                                              {items.map((item: any, idx: number) => (
                                                 <div key={idx} className="bg-zinc-950 core-border border border-zinc-900/60 p-3 rounded-xl flex justify-between items-center">
                                                    <div className="flex flex-col">
                                                       <span className="text-sm font-bold text-white">{item.name}</span>
                                                       <span className="text-xs font-medium text-zinc-400">Jumlah: {item.count}</span>
                                                    </div>
                                                    <span className="text-sm font-black text-rose-400">-{item.maintenance} / unit</span>
                                                 </div>
                                              ))}
                                           </div>
                                        </div>
                                     )})} 
                                 </div>
                              </div>
                           );
                        })()}

                        {!['salaries', 'subsidies', 'military', 'maintenance'].includes(expandedItem || '') && expandedItem && (
                           <div className="flex flex-col items-center justify-center h-full gap-3">
                              <Info size={24} className="text-zinc-600" />
                              <p className="text-xs text-zinc-500 italic">Rincian statis tidak memiliki kontrol manajemen saat ini.</p>
                           </div>
                        )}
                     </div>
                  </div>
               
                    {/* Future Projection / Summary Card */}
                   <div className="mt-6 bg-zinc-950/80 border border-zinc-800 p-6 rounded-3xl space-y-4">
                      <div className="flex justify-between items-end">
                         <span className="text-xs font-black text-zinc-500 uppercase tracking-widest">Kesehatan Arus Kas</span>
                         <span className={`text-lg font-black ${netDailySurplus >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                            {Math.round(surplusPercentage)}% Surplus
                         </span>
                      </div>
                      <div className="h-2 w-full bg-zinc-900 rounded-full overflow-hidden">
                         <div className={`h-full transition-all duration-1000 ${netDailySurplus >= 0 ? 'bg-emerald-500' : 'bg-red-500'}`} style={{ width: `${Math.max(5, Math.min(100, Math.abs(surplusPercentage)))}%` }} />
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                         <div className="flex flex-col">
                            <span className="text-xs text-zinc-500 uppercase font-bold">Proyeksi Lusa</span>
                            <span className="text-xs font-black text-zinc-200">{(currentBudget + (netDailySurplus * 2)).toLocaleString('id-ID')}</span>
                         </div>
                         <div className="flex flex-col items-end">
                            <span className="text-xs text-zinc-500 uppercase font-bold">Saldo Mingguan</span>
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
              <p className="text-xs text-zinc-500 font-medium italic">Seluruh kalkulasi anggaran adalah proyeksi berbasis real-time data ekonomi nasional dan kebijakan fiskal aktif.</p>
           </div>
           <div className="flex items-center gap-6">
              <div className="flex flex-col items-end">
                 <span className="text-[13px] font-bold text-zinc-500 uppercase tracking-widest">Daily Net Change</span>
                 <span className={`text-xs font-black ${netDailySurplus >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>{netDailySurplus >= 0 ? '+' : ''}{Math.round(netDailySurplus).toLocaleString('id-ID')}</span>
              </div>
           </div>
        </div>
      </div>
    </div>
  )
}
