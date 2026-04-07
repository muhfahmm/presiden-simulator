"use client"

import { useState, useEffect } from "react"
import { X, BarChart3, TrendingUp, TrendingDown, Landmark, PieChart, Coins, Shield, Zap, Building2, Activity, Info, Wallet, ArrowRight, Hammer, Users, Eye, EyeOff, ChevronLeft, Car, Home, Search } from "lucide-react"
import { countries } from "@/app/database/data/negara/benua/index"
import { CountryData } from "@/app/database/data/semua_fitur_negara/index"
import { gameStorage } from "@/app/game/gamestorage"
import { budgetStorage } from "@/app/game/components/1_navbar/3_kas_negara"
import { buildingStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/3_pembangunan/buildingStorage"
import { taxStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/2-pajak/TaxStorage"

import { 
  KAPASITAS_LISTRIK_METADATA, 
  mineralKritisRate, 
  produkIndustriRate, 
  komoditasPanganRate, 
  produksiMiliter, 
  infrastrukturRate,
  sosialRate 
} from "@/app/database/data/semua_fitur_negara"

import { calculateDailyBudgetDelta, calculateBaseMaintenance, calculateDeltaMaintenance } from "@/app/game/data/economy/BudgetDeltaLogic"
import { incomeStorage } from "./pemasukkan/IncomeStorage"
import NavigasiWaktu from "../1-perdagangan/NavigasiWaktu"
import { expenseStorage } from "./pengeluaran/ExpenseStorage"
import { calculateGoldMineRevenue } from "@/app/game/components/1_navbar/3_kas_negara/GoldMineRevenue"
import { calculateTempatUmumRevenue, getTempatUmumRevenueBreakdown, getTempatUmumUnitCount, getDetailedTempatUmumBreakdown } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/3_pembangunan/3-tempat-umum/logic/TempatUmumRevenueLogic"

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PemasukkanPengeluaranModal({ isOpen, onClose }: ModalProps) {
  const session = gameStorage.getSession();
  const initialCountry = countries.find((c: CountryData) => c.name_id === session?.country || c.name_en === session?.country) || countries[0];

  const [currentBudget, setCurrentBudget] = useState<number>(0);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const [expData, setExpData] = useState(() => expenseStorage.getData(initialCountry.name_en, initialCountry));
  const [incData, setIncData] = useState(incomeStorage.getData());
  const [searchQuery, setSearchQuery] = useState("");
  
  // Visibility toggles for sections
  const [showDomestic, setShowDomestic] = useState(true);
  const [showTrade, setShowTrade] = useState(true);
  const [showServices, setShowServices] = useState(true);

  useEffect(() => {
    const update = () => {
      if (isOpen) {
        setCurrentBudget(budgetStorage.getBudget());
      }
    };

    const updateExpense = () => { if (isOpen) setExpData(expenseStorage.getData(initialCountry.name_en, initialCountry)); };
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

  // 1. Revenue â€” dynamic iteration same as PajakModal
  const savedTaxes = taxStorage.getTaxes(initialCountry.name_en) || initialCountry.pajak;
  const TRADE_KEYS = new Set(["bea_cukai", "transit_sekutu", "transit_non_sekutu", "tarif_ekspor", "tarif_impor"]);
  const autoLabel = (key: string) => key.replace(/_/g, " ").replace(/\b\w/g, c => c.toUpperCase());
  const allTaxKeys = Object.keys(savedTaxes as any);
  const dynamicDomestic = allTaxKeys.filter(k => !TRADE_KEYS.has(k)).map(k => ({ id: k, label: autoLabel(k) }));
  const dynamicTrade = allTaxKeys.filter(k => TRADE_KEYS.has(k)).map(k => ({ id: k, label: autoLabel(k) }));

  const activeDomesticRevenue = dynamicDomestic.reduce((acc, t) => acc + ((savedTaxes as any)[t.id]?.pendapatan || 0), 0) / 365;
  const activeTradeRevenue = dynamicTrade.reduce((acc, t) => acc + ((savedTaxes as any)[t.id]?.pendapatan || 0), 0) / 365;

  // 2. Expenses
  const buildingData = buildingStorage.getData();

  const dailyTaxRevenue = activeDomesticRevenue + activeTradeRevenue;
  const goldRevenue = calculateGoldMineRevenue(buildingData.buildingDeltas, initialCountry);
  const serviceRevenue = calculateTempatUmumRevenue(buildingData.buildingDeltas, initialCountry);
  const totalDailyIncome = dailyTaxRevenue + (incData.grants || 0) + (incData.investments || 0) + goldRevenue + serviceRevenue;

  // Breakdown functions for UI
  const serviceBreakdown = getTempatUmumRevenueBreakdown(buildingData.buildingDeltas, initialCountry);
  const serviceUnitCount = getTempatUmumUnitCount(buildingData.buildingDeltas, initialCountry);
  const serviceDetailedBreakdown = getDetailedTempatUmumBreakdown(buildingData.buildingDeltas, initialCountry);

  const getSatisfaction = (mult: number) => {
    if (mult <= 2.0) { // Backward compatibility
       if (mult <= 0.5) return 25;
       if (mult <= 1.0) return 50;
       if (mult <= 1.5) return 75;
       return 100;
    }
    return mult; // Direct percentage (10-100)
  };
  const avgSatisfaction = 100; // Placeholder until new happiness system is implemented

  const allMetadata = [
    ...Object.values(KAPASITAS_LISTRIK_METADATA),
    ...Object.values(mineralKritisRate),
    ...Object.values(produkIndustriRate),
    ...Object.values(komoditasPanganRate),
    ...Object.values(infrastrukturRate),
    ...Object.values(sosialRate),
    ...produksiMiliter
  ];



  const totalDailyExpense = (expData.debtInterestPaid || 0);

  // 3. Final Balance
  const netDailySurplus = totalDailyIncome - totalDailyExpense;
  const surplusPercentage = totalDailyIncome > 0 ? (netDailySurplus / totalDailyIncome) * 100 : 0;
  const expenseItems = [
     ...(expData.debtInterestPaid > 0 ? [{ id: "debt", label: "Bunga Hutang Luar Negeri", value: expData.debtInterestPaid, icon: Landmark, color: "text-rose-500", desc: "Biaya bunga atas pinjaman dana internasional." }] : [])
  ];

  return (
    <div className="absolute inset-0 bg-black/85 z-50 flex items-center justify-center animate-in fade-in duration-300 p-4 md:p-8">
      <div className="bg-zinc-950 border border-zinc-800 rounded-[40px] w-full max-w-[95vw] h-[82vh] overflow-hidden shadow-2xl flex flex-col relative animate-in zoom-in-95 duration-500">
        
        {/* Glow Effects */}
        <div className="absolute top-0 left-1/4 w-1/2 h-1 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent blur-sm"></div>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]"></div>

        {/* Header (Synchronized with EnergiModal) */}
        <div className="px-8 py-6 border-b border-zinc-800/50 flex items-center justify-between bg-zinc-900/30">
           <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-500/10 rounded-xl">
                 <BarChart3 className="h-6 w-6 text-purple-500" />
              </div>
              <div>
                 <h2 className="text-2xl font-bold text-white tracking-tight">Pemasukkan & Pengeluaran</h2>
                 <p className="text-xs text-zinc-500 font-medium uppercase tracking-widest mt-0.5">Treasury & National Fiscal Management</p>
              </div>
           </div>
           <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-zinc-900 border border-zinc-800 text-white flex items-center gap-3 shadow-[0_0_15px_rgba(16,185,129,0.1)] transition-all">
                 <Activity className="h-6 w-6 text-emerald-500" />
                 <span className="text-[10px] font-black text-zinc-300 uppercase tracking-widest">Kesehatan Fiskal: <span className="text-emerald-500 ml-1">Optimis</span></span>
              </div>
              <NavigasiWaktu />
              <button
                 onClick={onClose}
                 className="p-3 rounded-2xl bg-rose-600 border border-rose-500 hover:bg-rose-500 text-white transition-all cursor-pointer shadow-[0_0_15px_rgba(225,29,72,0.3)] active:scale-95 group flex items-center gap-2"
              >
                 <span className="text-[10px] font-black uppercase tracking-widest pl-1">Tutup</span>
                 <X className="h-6 w-6 group-hover:rotate-90 transition-transform" />
              </button>
           </div>
        </div>
        
        <div className="flex-1 overflow-y-auto p-10 no-scrollbar space-y-8 bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.03),transparent_40%)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="bg-zinc-900/40 border border-zinc-800 p-8 rounded-3xl flex flex-col gap-6 relative group overflow-hidden transition-all hover:bg-zinc-900/60 shadow-lg">
                 <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity"><TrendingUp className="h-10 w-10 text-blue-400" /></div>
                <div>
                   <span className="text-xs font-black text-zinc-500 uppercase tracking-widest block mb-2">Total Kas Negara</span>
                   <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-black text-white tracking-tight">{Math.round(currentBudget).toLocaleString('id-ID')}</span>
                   </div>
                </div>
                <div className="pt-4 border-t border-zinc-800 flex justify-between items-center">
                   <span className="text-[13px] font-bold text-zinc-500 uppercase">Status</span>
                   <span className="text-xs font-black text-blue-400 uppercase tracking-widest italic">Liquid</span>
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
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
             {/* KOLOM 1: PENDAPATAN */}
             <div className="bg-zinc-900/30 border border-zinc-800 rounded-[2rem] p-8 space-y-8 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                   <h3 className="text-xl font-black text-white uppercase tracking-tighter italic flex items-center gap-3">
                      <div className="p-2 bg-emerald-500/10 rounded-lg border border-emerald-500/20"><TrendingUp size={18} className="text-emerald-400" /></div>
                      Pendapatan Harian
                   </h3>
                   <span className="text-xs font-black text-emerald-400">+{Math.round(totalDailyIncome).toLocaleString('id-ID')}</span>
                </div>
                                 <div className="space-y-4 max-h-[400px] overflow-y-auto no-scrollbar pr-2">
                    {/* Domestic Taxes — dynamic */}
                    {dynamicDomestic.length > 0 && (
                    <div className="space-y-3">
                       <div className="flex items-center justify-between px-1">
                          <span className="text-[13px] font-black text-zinc-600 uppercase tracking-widest block">Domestic Fiscal</span>
                          <button 
                             onClick={() => setShowDomestic(!showDomestic)}
                             className="p-1 hover:bg-zinc-800 rounded-lg text-zinc-500 hover:text-white transition-all cursor-pointer group/btn"
                             title={showDomestic ? "Sembunyikan" : "Tampilkan"}
                          >
                             {showDomestic ? <Eye size={14} className="group-hover/btn:scale-110 transition-transform" /> : <EyeOff size={14} className="group-hover/btn:scale-110 transition-transform" />}
                          </button>
                       </div>
                       
                       <div className={`space-y-3 overflow-hidden transition-all duration-700 ease-in-out ${showDomestic ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
                          {dynamicDomestic.map((tax) => (
                             <div key={tax.id} className="bg-zinc-950/50 border border-zinc-900 p-4 rounded-2xl flex justify-between items-center group hover:border-zinc-800 transition-all">
                                <div className="flex items-center gap-3">
                                   <Coins size={14} className="text-purple-400" />
                                   <span className="text-[13px] font-bold text-zinc-300 uppercase tracking-tight">{tax.label}</span>
                                </div>
                                <span className="text-[13px] font-black text-white">+{Math.round(((savedTaxes as any)[tax.id]?.pendapatan || 0)).toLocaleString('id-ID')}</span>
                             </div>
                          ))}
                       </div>
                    </div>
                    )}

                    {/* Trade Taxes — dynamic */}
                    {dynamicTrade.length > 0 && (
                    <div className="space-y-3 mt-6">
                       <div className="flex items-center justify-between px-1">
                          <span className="text-[13px] font-black text-zinc-600 uppercase tracking-widest block">Trade &amp; Logistics</span>
                          <button 
                             onClick={() => setShowTrade(!showTrade)}
                             className="p-1 hover:bg-zinc-800 rounded-lg text-zinc-500 hover:text-white transition-all cursor-pointer group/btn"
                             title={showTrade ? "Sembunyikan" : "Tampilkan"}
                          >
                             {showTrade ? <Eye size={14} className="group-hover/btn:scale-110 transition-transform" /> : <EyeOff size={14} className="group-hover/btn:scale-110 transition-transform" />}
                          </button>
                       </div>

                       <div className={`space-y-3 overflow-hidden transition-all duration-700 ease-in-out ${showTrade ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
                          {dynamicTrade.map((tax) => (
                             <div key={tax.id} className="bg-zinc-950/50 border border-zinc-900 p-4 rounded-2xl flex justify-between items-center group hover:border-zinc-800 transition-all">
                                <div className="flex items-center gap-3">
                                   <Landmark size={14} className="text-amber-400" />
                                   <span className="text-[13px] font-bold text-zinc-300 uppercase tracking-tight">{tax.label}</span>
                                </div>
                                <span className="text-[13px] font-black text-white">+{Math.round(((savedTaxes as any)[tax.id]?.pendapatan || 0)).toLocaleString('id-ID')}</span>
                             </div>
                          ))}
                       </div>
                    </div>
                    )}

                    {/* Resources & Production Income */}
                    {(() => {
                      const goldMineCount = buildingData.buildingDeltas["1_tambang_emas"] || 0;
                      return goldMineCount > 0 ? (
                        <div className="space-y-3 mt-6">
                           <span className="text-[13px] font-black text-zinc-600 uppercase tracking-widest block px-1">Resource & Production Revenue</span>
                           <div className="bg-zinc-950/50 border border-amber-500/20 p-4 rounded-2xl flex justify-between items-center group hover:border-amber-500/40 transition-all shadow-[0_0_15px_rgba(245,158,11,0.05)]">
                              <div className="flex items-center gap-3">
                                 <div className="p-1.5 bg-amber-500/10 rounded-lg"><Coins size={14} className="text-amber-400" /></div>
                                 <span className="text-[13px] font-bold text-zinc-300 uppercase tracking-tight">Hasil Tambang Emas ({goldMineCount} Unit)</span>
                              </div>
                              <span className="text-[13px] font-black text-amber-500">+{goldRevenue.toLocaleString('id-ID')}</span>
                           </div>
                        </div>
                      ) : null;
                    })()}

                    {/* Services & Commercial Income Breakdown (Always Visible) */}
                    <div className="space-y-3 mt-6">
                      <div className="flex items-center justify-between px-1">
                         <span className="text-[13px] font-black text-zinc-600 uppercase tracking-widest block">Service & Commercial Sectors</span>
                         <button 
                            onClick={() => setShowServices(!showServices)}
                            className="p-1 hover:bg-zinc-800 rounded-lg text-zinc-500 hover:text-white transition-all cursor-pointer group/btn"
                            title={showServices ? "Sembunyikan" : "Tampilkan"}
                         >
                            {showServices ? <Eye size={14} className="group-hover/btn:scale-110 transition-transform" /> : <EyeOff size={14} className="group-hover/btn:scale-110 transition-transform" />}
                         </button>
                      </div>
                      
                      <div className={`space-y-3 overflow-hidden transition-all duration-700 ease-in-out ${showServices ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
                        {/* Sektor Olahraga */}
                        <div className="space-y-2">
                          <div className="bg-zinc-950/50 border border-cyan-500/10 p-4 rounded-2xl flex justify-between items-center group hover:border-cyan-500/40 transition-all">
                            <div className="flex items-center gap-3">
                               <div className="p-1.5 bg-cyan-500/10 rounded-lg"><Activity size={14} className="text-cyan-400" /></div>
                               <span className="text-[13px] font-bold text-zinc-300 uppercase tracking-tight">Sektor Olahraga & Rekreasi ({serviceUnitCount.olahraga} Unit)</span>
                            </div>
                            <span className={`text-[13px] font-black ${serviceBreakdown.olahraga > 0 ? 'text-cyan-400' : 'text-zinc-600'}`}>+{serviceBreakdown.olahraga.toLocaleString('id-ID')}</span>
                          </div>
                          {serviceDetailedBreakdown.filter((d: any) => d.sector === 'olahraga').map((item: any) => (
                            <div key={item.key} className="flex justify-between items-center px-4 py-1.5 ml-4 border-l border-zinc-900">
                              <span className="text-[11px] font-medium text-zinc-500 uppercase tracking-wider">{item.label} ({item.count} x {item.rate.toLocaleString('id-ID')})</span>
                              <span className="text-[11px] font-bold text-zinc-400">+{item.total.toLocaleString('id-ID')}</span>
                            </div>
                          ))}
                        </div>

                        {/* Sektor Komersial */}
                        <div className="space-y-2">
                          <div className="bg-zinc-950/50 border border-emerald-500/10 p-4 rounded-2xl flex justify-between items-center group hover:border-emerald-500/40 transition-all">
                            <div className="flex items-center gap-3">
                               <div className="p-1.5 bg-emerald-500/10 rounded-lg"><Building2 size={14} className="text-emerald-400" /></div>
                               <span className="text-[13px] font-bold text-zinc-300 uppercase tracking-tight">Sektor Komersial & Retail ({serviceUnitCount.komersial} Unit)</span>
                            </div>
                            <span className={`text-[13px] font-black ${serviceBreakdown.komersial > 0 ? 'text-emerald-400' : 'text-zinc-600'}`}>+{serviceBreakdown.komersial.toLocaleString('id-ID')}</span>
                          </div>
                          {serviceDetailedBreakdown.filter((d: any) => d.sector === 'komersial').map((item: any) => (
                            <div key={item.key} className="flex justify-between items-center px-4 py-1.5 ml-4 border-l border-zinc-900">
                              <span className="text-[11px] font-medium text-zinc-500 uppercase tracking-wider">{item.label} ({item.count} x {item.rate.toLocaleString('id-ID')})</span>
                              <span className="text-[11px] font-bold text-zinc-400">+{item.total.toLocaleString('id-ID')}</span>
                            </div>
                          ))}
                        </div>

                        {/* Sektor Hiburan */}
                        <div className="space-y-2">
                          <div className="bg-zinc-950/50 border border-purple-500/10 p-4 rounded-2xl flex justify-between items-center group hover:border-purple-500/40 transition-all">
                            <div className="flex items-center gap-3">
                               <div className="p-1.5 bg-purple-500/10 rounded-lg"><PieChart size={14} className="text-purple-400" /></div>
                               <span className="text-[13px] font-bold text-zinc-300 uppercase tracking-tight">Sektor Hiburan & Seni ({serviceUnitCount.hiburan} Unit)</span>
                            </div>
                            <span className={`text-[13px] font-black ${serviceBreakdown.hiburan > 0 ? 'text-purple-400' : 'text-zinc-600'}`}>+{serviceBreakdown.hiburan.toLocaleString('id-ID')}</span>
                          </div>
                          {serviceDetailedBreakdown.filter((d: any) => d.sector === 'hiburan').map((item: any) => (
                            <div key={item.key} className="flex justify-between items-center px-4 py-1.5 ml-4 border-l border-zinc-900">
                              <span className="text-[11px] font-medium text-zinc-500 uppercase tracking-wider">{item.label} ({item.count} x {item.rate.toLocaleString('id-ID')})</span>
                              <span className="text-[11px] font-bold text-zinc-400">+{item.total.toLocaleString('id-ID')}</span>
                            </div>
                          ))}
                        </div>
                      </div>
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
                                    <span className={`text-[13px] font-black ${item.color}`}>-{Math.round(item.value).toLocaleString('id-ID')}</span>
                                    <button onClick={() => setExpandedItem(item.id)} className="p-1 rounded-md hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer ml-1">
                                       <Eye size={12} />
                                    </button>
                                 </div>
                              </div>
                              <p className="text-[13px] text-zinc-600 font-medium italic leading-relaxed group-hover:text-zinc-500 transition-colors">"{item.desc}"</p>
                              {item.kepuasan !== undefined && (
                                 <div className="mt-1 flex items-center gap-1">
                                    <span className="text-[11px] text-zinc-500 font-bold">{item.satisfactionLabel || "Index Kepuasan Global"}: <span className={item.kepuasan >= 80 ? 'text-emerald-400' : item.kepuasan >= 60 ? 'text-amber-400' : 'text-red-400'}>{item.kepuasan}%</span></span>
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
                        {expandedItem && (
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