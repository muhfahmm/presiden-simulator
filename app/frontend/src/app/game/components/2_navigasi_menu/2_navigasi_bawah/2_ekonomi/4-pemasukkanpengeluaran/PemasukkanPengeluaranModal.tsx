"use client"

import { useState, useEffect } from "react"
import { X, BarChart3, TrendingUp, TrendingDown, Landmark, PieChart, Coins, Shield, Zap, Building2, Activity, Info, Wallet, ArrowRight, Hammer, Users, Eye, ChevronLeft, Car, Home, Search } from "lucide-react"
import { countries } from "@/app/database/data/countries/region/index"
import { CountryData } from "@/app/database/data/types/index"
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
  tempatUmum 
} from "@/app/database/data/types"

import { calculateDailyBudgetDelta, calculateBaseMaintenance, calculateDeltaMaintenance } from "@/app/game/data/economy/BudgetDeltaLogic"
import { incomeStorage } from "./pemasukkan/IncomeStorage"
import { expenseStorage } from "./pengeluaran/ExpenseStorage"

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

  // --- LOGIKA KALKULASI (Unified with economyLogic.ts) ---

  // 1. Revenue
  const savedTaxes = taxStorage.getTaxes(initialCountry.name_en) || initialCountry.pajak;
  const domesticTaxes = ["ppn", "korporasi", "pendapatan_nasional", "lingkungan", "lainnya"];
  const tradeTaxes = ["bea_cukai", "transit_sekutu", "transit_non_sekutu"];

  const activeDomesticRevenue = domesticTaxes.reduce((acc, key) => acc + ((savedTaxes as any)[key]?.pendapatan || 0), 0);
  const activeTradeRevenue = tradeTaxes.reduce((acc, key) => acc + ((savedTaxes as any)[key]?.pendapatan || 0), 0);
  
  
  const dailyTaxRevenue = activeDomesticRevenue + activeTradeRevenue + (incData.grants || 0) + (incData.investments || 0);

  // 2. Expenses
  const buildingData = buildingStorage.getData();

  const getSatisfaction = (mult: number) => {
    if (mult <= 2.0) { // Backward compatibility
       if (mult <= 0.5) return 25;
       if (mult <= 1.0) return 50;
       if (mult <= 1.5) return 75;
       return 100;
    }
    return mult; // Direct percentage (10-100)
  };
  const avgSatisfaction = Math.round(((getSatisfaction(expData.gaji_asn || 1) + getSatisfaction(expData.gaji_guru || 1) + getSatisfaction(expData.gaji_medis || 1) + getSatisfaction(expData.gaji_militer || 1))) / 4);

  const allMetadata = [
    ...Object.values(KAPASITAS_LISTRIK_METADATA),
    ...Object.values(mineralKritisRate),
    ...Object.values(produkIndustriRate),
    ...Object.values(komoditasPanganRate),
    ...tempatUmum,
    ...produksiMiliter
  ];

  const maintenanceSectors = [
    { label: "Kelistrikan", data: initialCountry.sektor_listrik },
    { label: "Infrastruktur", data: initialCountry.infrastruktur },
    { label: "Ekstraksi", data: initialCountry.sektor_ekstraksi },
    { label: "Manufaktur", data: initialCountry.sektor_manufaktur },
    { label: "Peternakan", data: initialCountry.sektor_peternakan },
    { label: "Perikanan", data: initialCountry.sektor_perikanan },
    { label: "Agrikultur", data: initialCountry.sektor_agrikultur },
    { label: "Pendidikan", data: initialCountry.sektor_sosial?.pendidikan },
    { label: "Kesehatan", data: initialCountry.sektor_sosial?.kesehatan },
    { label: "Olahraga", data: initialCountry.sektor_olahraga },
    { label: "Hukum", data: initialCountry.sektor_sosial?.hukum }
  ];

  const militarySectors = [
    { label: "Manajemen Pertahanan", data: initialCountry.sektor_pertahanan },
    { label: "Sektor Armada Tempur", data: {
      barak: initialCountry.armada_militer.barak,
      tank: initialCountry.armada_militer.darat.tank_tempur_utama,
      apc: initialCountry.armada_militer.darat.apc_ifv,
      artileri: initialCountry.armada_militer.darat.artileri_berat,
      carrier: initialCountry.armada_militer.laut.kapal_induk,
      destroyer: initialCountry.armada_militer.laut.kapal_destroyer,
      submarine: initialCountry.armada_militer.laut.kapal_selam_nuklir,
      stealth_jet: initialCountry.armada_militer.udara.jet_tempur_siluman,
      heli_attack: initialCountry.armada_militer.udara.helikopter_serang,
      recon_plane: initialCountry.armada_militer.udara.pesawat_pengintai,
    } },
    { label: "Strategis & Keamanan", data: {
      satellite: initialCountry.militer_strategis.intel_radar?.sistem_satelit,
      radar: initialCountry.militer_strategis.intel_radar?.jaringan_radar,
      operasi_siber: initialCountry.militer_strategis.intel_radar?.operasi_siber,
      pos_polisi: initialCountry.armada_kepolisian.armada_polisi.pusat_komando.kantor_polisi,
      police_car: initialCountry.armada_kepolisian.armada_polisi.patroli_lantas.mobil_patroli,
      police_bike: initialCountry.armada_kepolisian.armada_polisi.patroli_lantas.sepeda_motor,
      unit_k9: initialCountry.armada_kepolisian.armada_polisi.patroli_lantas.unit_k9,
      swat: initialCountry.armada_kepolisian.armada_polisi.taktis_khusus.swat,
      police_heli: initialCountry.armada_kepolisian.armada_polisi.taktis_khusus.helikopter_polisi,
      riot_control: initialCountry.armada_kepolisian.armada_polisi.taktis_khusus.anti_huru_hara,
      cctv_network: initialCountry.armada_kepolisian.armada_polisi.pusat_komando.kamera_pengawas,
      forensik: initialCountry.armada_kepolisian.armada_polisi.pusat_komando.pusat_forensik,
    } }
  ];

  const buildAggregated = (sectorsList: any[]) => {
    const agg: Record<string, any[]> = {};
    sectorsList.forEach(s => {
      if (!s.data) return;
      Object.entries(s.data).forEach(([key, count]) => {
        if (typeof count !== 'number' || count <= 0) return;
        const metadata = allMetadata.find((m: any) => m.key === key || m.id === key || m.dataKey === key) as any;
        if (metadata) {
          const cat = metadata.category || metadata.groupId || s.label;
          if (!agg[cat]) agg[cat] = [];
          agg[cat].push({
            name: metadata.desc || metadata.label || metadata.name || key,
            count: count,
            maintenance: metadata.maintenanceCost || metadata.maintenance || 0
          });
        }
      });
    });
    return agg;
  };

  const renderAggregatedSection = (agg: Record<string, any[]>, title: string, color: string, IconComponent: any) => {
    const totalMatches = Object.values(agg).reduce((acc: number, items: any[]) => {
      return acc + items.filter((item: any) => item.name.toLowerCase().includes(searchQuery.toLowerCase())).length;
    }, 0);

    return (
      <div className="bg-zinc-900/40 border border-zinc-800 p-6 rounded-3xl space-y-4">
        <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
          <div className="flex items-center gap-3">
            <IconComponent className={`h-5 w-5 ${color}`} />
            <span className="text-sm font-bold text-white">{title} <span className="text-zinc-400 font-medium ml-1">({totalMatches})</span></span>
          </div>
          <div className="flex items-center gap-2 bg-zinc-950/80 border border-zinc-800/80 px-4 py-2 rounded-xl w-full max-w-[220px] shadow-inner">
            <Search className="h-4 w-4 text-zinc-500" />
            <input 
              type="text" 
              placeholder="Cari bangunan..." 
              value={searchQuery || ""} 
              onChange={(e) => setSearchQuery(e.target.value)} 
              className="bg-transparent text-sm text-white outline-none w-full"
            />
          </div>
        </div>
        <div className="space-y-4 max-h-[380px] overflow-y-auto pr-2 no-scrollbar">
          {totalMatches === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-zinc-600">
               <Search className="h-12 w-12 mb-3 opacity-20" />
               <p className="text-sm font-black italic text-zinc-400">Tidak ada bangunan ditemukan</p>
               <p className="text-xs text-zinc-500 mt-1">Coba gunakan kata kunci lain...</p>
            </div>
          ) : (
            Object.entries(agg).map(([category, items]: any, catIdx) => {
              const filteredItems = items.filter((item: any) => item.name.toLowerCase().includes(searchQuery.toLowerCase()));
              const totalCount = filteredItems.length;
              if (totalCount === 0) return null;
              const categorySum = filteredItems.reduce((sum: number, item: any) => sum + (item.count * item.maintenance), 0);
              return (
                <div key={catIdx} className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className={`w-1 h-3 ${color.replace('text-', 'bg-')} rounded-full`}></div>
                    <span className={`text-sm font-black ${color} uppercase tracking-wider`}>{category} <span className="text-zinc-200">({totalCount})</span> <span className="text-rose-400 font-black ml-1">= -{categorySum}</span></span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {filteredItems.map((item: any, idx: number) => (
                      <div key={idx} className="bg-zinc-950 core-border border border-zinc-900/60 p-3 rounded-xl flex justify-between items-center">
                        <div className="flex flex-col">
                          <span className="text-sm font-bold text-white">{item.name}</span>
                          <span className="text-xs font-medium text-zinc-400">Jumlah: {item.count}</span>
                        </div>
                        <span className="text-sm font-black text-rose-400">-{item.maintenance} / unit <span className="text-zinc-500 font-bold mx-1">=</span> <span className="text-rose-400">-{item.count * item.maintenance}</span></span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    );
  };

  const aggMaintenance = buildAggregated(maintenanceSectors);
  const dailyBaseMaintenance = Object.values(aggMaintenance).reduce((sum, items) => sum + items.reduce((subSum, item) => subSum + (item.count * item.maintenance), 0), 0) / 100000;
  const dailyDeltaMaintenance = calculateDeltaMaintenance(buildingData.buildingDeltas);
  const aggMilitary = buildAggregated(militarySectors);
  const dailyMilitaryExpense = Object.values(aggMilitary).reduce((sum, items) => sum + items.reduce((subSum, item) => subSum + (item.count * item.maintenance), 0), 0) / 100000;
  
  // Extra Fiscal Expenses
  const totalSubsidyLevel = ((expData.subsidi_energi || 0) + (expData.subsidi_pangan || 0) + (expData.subsidi_kesehatan || 0) + (expData.subsidi_pendidikan || 0) + (expData.subsidi_umkm || 0) + (expData.subsidi_transportasi || 0) + (expData.subsidi_perumahan || 0)) / 7;
  const subsidyExpense = (dailyTaxRevenue * (totalSubsidyLevel / 100));
  const coreMaintenance = dailyBaseMaintenance + dailyDeltaMaintenance;
  const getMult = (v: number) => v <= 2.0 ? v : v / 100;
  const avgSalaryMultiplier = (getMult(expData.gaji_asn || 1) + getMult(expData.gaji_guru || 1) + getMult(expData.gaji_medis || 1) + getMult(expData.gaji_militer || 1)) / 4;
  const salaryExpense = (coreMaintenance * 0.1) * avgSalaryMultiplier;

  const totalDailyExpense = coreMaintenance + dailyMilitaryExpense + subsidyExpense + salaryExpense + (expData.debtInterestPaid || 0);

  // 3. Final Balance
  const netDailySurplus = dailyTaxRevenue - totalDailyExpense;
  const surplusPercentage = (netDailySurplus / dailyTaxRevenue) * 100;
  const expenseItems = [
     { id: "military", label: "Beban Militer & Pertahanan", value: dailyMilitaryExpense, icon: Shield, color: "text-red-400", desc: "Pemeliharaan alutsista dan gaji personel aktif." },
     { id: "maintenance", label: "Pemeliharaan Infrastruktur", value: dailyBaseMaintenance, icon: Zap, color: "text-amber-400", desc: "Listrik, jalan raya, pelabuhan, dan fasilitas publik." },
     { id: "gaji", label: "Gaji Pegawai Negeri & Birokrasi", value: salaryExpense, icon: Users, color: "text-blue-400", desc: "Gaji Pegawai Negeri, Tenaga Medis, Guru, dan Aparatur.", kepuasan: avgSatisfaction, satisfactionLabel: "Indeks Kepuasan Pegawai" },
     { id: "subsidi", label: "Subsidi Publik", value: subsidyExpense, icon: Coins, color: "text-green-400", desc: "Bantuan modal dan subsidi harga untuk rakyat.", kepuasan: Math.round(((expData.subsidi_energi || 0) + (expData.subsidi_pangan || 0) + (expData.subsidi_kesehatan || 0) + (expData.subsidi_pendidikan || 0) + (expData.subsidi_umkm || 0) + (expData.subsidi_transportasi || 0) + (expData.subsidi_perumahan || 0)) / 7), satisfactionLabel: "Indeks Kepuasan Publik" },
     ...(expData.debtInterestPaid > 0 ? [{ id: "debt", label: "Bunga Hutang Luar Negeri", value: expData.debtInterestPaid, icon: Landmark, color: "text-rose-500", desc: "Biaya bunga atas pinjaman dana internasional." }] : [])
  ];

  return (
    <div className="absolute inset-0 bg-black/85 z-50 flex items-center justify-center animate-in fade-in duration-300 p-4 md:p-8">
      <div className="bg-zinc-950 border border-zinc-800 rounded-[40px] w-full max-w-[95vw] h-[92vh] overflow-hidden shadow-2xl flex flex-col relative animate-in zoom-in-95 duration-500">
        
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
                         { id: "ppn", label: "Pajak PPN", icon: Coins, color: "text-purple-400" },
                         { id: "korporasi", label: "Pajak Korporasi", icon: Building2, color: "text-cyan-400" },
                         { id: "pendapatan_nasional", label: "Pajak Penghasilan", icon: Wallet, color: "text-green-400" },
                         { id: "lingkungan", label: "Pajak Lingkungan", icon: Activity, color: "text-emerald-400" },
                         { id: "lainnya", label: "Pajak Lainnya", icon: Info, color: "text-zinc-500" }
                      ].map((tax) => (
                         <div key={tax.id} className="bg-zinc-950/50 border border-zinc-900 p-4 rounded-2xl flex justify-between items-center group hover:border-zinc-800 transition-all">
                            <div className="flex items-center gap-3">
                               <tax.icon size={14} className={tax.color} />
                               <span className="text-[13px] font-bold text-zinc-300 uppercase tracking-tight">{tax.label}</span>
                            </div>
                            <span className="text-[13px] font-black text-white">+{Math.round(((savedTaxes as any)[tax.id]?.pendapatan || 0)).toLocaleString('id-ID')}</span>
                         </div>
                      ))}
                   </div>

                   {/* Trade Taxes */}
                   <div className="space-y-3 mt-6">
                      <span className="text-[13px] font-black text-zinc-600 uppercase tracking-widest block px-1">Trade & Logistics</span>
                      {[
                         { id: "bea_cukai", label: "Bea Cukai", icon: Landmark, color: "text-amber-400" },
                         { id: "transit_sekutu", label: "Transit (Sekutu)", icon: Shield, color: "text-blue-400" },
                         { id: "transit_non_sekutu", label: "Transit (Non-Mitra)", icon: Activity, color: "text-rose-400" }
                      ].map((tax) => (
                         <div key={tax.id} className="bg-zinc-950/50 border border-zinc-900 p-4 rounded-2xl flex justify-between items-center group hover:border-zinc-800 transition-all">
                            <div className="flex items-center gap-3">
                               <tax.icon size={14} className={tax.color} />
                               <span className="text-[13px] font-bold text-zinc-300 uppercase tracking-tight">{tax.label}</span>
                            </div>
                            <span className="text-[13px] font-black text-white">+{Math.round(((savedTaxes as any)[tax.id]?.pendapatan || 0)).toLocaleString('id-ID')}</span>
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
                                    <span className={`text-[13px] font-black ${item.id === 'subsidi' ? item.color : item.color}`}>-{Math.round(item.id === 'subsidi' ? item.value : item.value * 100000).toLocaleString('id-ID')}</span>
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
                        {expandedItem === 'gaji' && (() => {
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
                                    <span className={`text-xs font-black ${satisfyColors((getSatisfaction(expData.gaji_asn) + getSatisfaction(expData.gaji_guru) + getSatisfaction(expData.gaji_medis) + getSatisfaction(expData.gaji_militer)) / 4)}`}>
                                       {Math.round((getSatisfaction(expData.gaji_asn) + getSatisfaction(expData.gaji_guru) + getSatisfaction(expData.gaji_medis) + getSatisfaction(expData.gaji_militer)) / 4)}%
                                    </span>
                                 </div>
                              </div>
                              <p className="text-xs text-zinc-500">Koefisien penggajian departmental. Kepuasan tinggi mencegah demonstrasi/pemogokan kerja dan menjaga kestabilan pemerintahan.</p>
                              
                              <div className="grid grid-cols-2 gap-4">
                                 {[
                                    { key: 'gaji_asn', label: 'Gaji Pegawai Negeri & Birokrasi', icon: Users, color: 'text-blue-400' },
                                    { key: 'gaji_guru', label: 'Gaji Guru & Pengajar', icon: Users, color: 'text-cyan-400' },
                                    { key: 'gaji_medis', label: 'Gaji Tenaga Medis', icon: Activity, color: 'text-rose-400' },
                                    { key: 'gaji_militer', label: 'Gaji Personel Militer', icon: Shield, color: 'text-red-400' }
                                 ].map((s: any) => {
                                    const kepuasan = getSatisfaction((expData as any)[s.key] || 1.0);
                                    const sumMult = (expData.gaji_asn || 1) + (expData.gaji_guru || 1) + (expData.gaji_medis || 1) + (expData.gaji_militer || 1);
                                    const sectorExpense = (((expData as any)[s.key] || 1) / (sumMult > 0 ? sumMult : 4)) * salaryExpense;
                                    
                                    return (
                                    <div key={s.key} className="bg-zinc-950 core-border border border-zinc-900 p-4 rounded-xl space-y-3">
                                       <div className="flex justify-between items-center">
                                          <div className="flex items-center gap-2">
                                             <s.icon size={13} className={s.color} />
                                             <span className="text-xs font-bold text-zinc-300">{s.label}</span>
                                          </div>
                                          <div className="flex items-center gap-1.5">
                                             <span className={`text-[10px] font-bold ${satisfyColors(kepuasan)}`}>{kepuasan}%</span>
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
                                                    (expenseStorage as any).updateExpense(initialCountry.name_en, s.key as any, val, initialCountry);
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

                        {expandedItem === 'subsidi' && (
                           <div className="bg-zinc-900/40 border border-zinc-800 p-6 rounded-3xl space-y-6">
                              <div className="flex justify-between items-center">
                                 <div className="flex items-center gap-3">
                                    <Coins className="h-5 w-5 text-green-400" />
                                    <span className="text-sm font-bold text-white">Subsidi Publik Modular</span>
                                 </div>
                                 <div className="flex items-center gap-2 bg-zinc-950 px-3 py-1 rounded-full border border-zinc-900">
                                    <span className="text-[11px] text-zinc-500 font-bold">Total Alokasi Rata-rata:</span>
                                    <span className="text-xs font-black text-green-400">
                                       {Math.round(((expData.subsidi_energi || 0) + (expData.subsidi_pangan || 0) + (expData.subsidi_kesehatan || 0) + (expData.subsidi_pendidikan || 0) + (expData.subsidi_umkm || 0) + (expData.subsidi_transportasi || 0) + (expData.subsidi_perumahan || 0)) / 7)}%
                                    </span>
                                 </div>
                              </div>
                              <p className="text-xs text-zinc-500">Mendistribusikan kas negara untuk meredakan biaya hidup rakyat atau mendongkrak stabilitas ekonomi dasar departemen bervalidasi.</p>
                              <div className="grid grid-cols-2 gap-4 max-h-[300px] overflow-y-auto pr-2 no-scrollbar">
                                 {[
                                    { key: 'subsidi_energi', label: 'Energi (BBM & Listrik)', icon: Zap, color: 'text-yellow-400' },
                                    { key: 'subsidi_pangan', label: 'Pangan (Bahan Pokok)', icon: Coins, color: 'text-green-500' },
                                    { key: 'subsidi_kesehatan', label: 'Kesehatan', icon: Activity, color: 'text-rose-400' },
                                    { key: 'subsidi_pendidikan', label: 'Pendidikan', icon: Users, color: 'text-cyan-400' },
                                    { key: 'subsidi_umkm', label: 'Sektor Tani', icon: Hammer, color: 'text-orange-400' },
                                    { key: 'subsidi_transportasi', label: 'Transportasi Umum', icon: Car, color: 'text-blue-400' },
                                    { key: 'subsidi_perumahan', label: 'Perumahan Rakyat', icon: Home, color: 'text-indigo-400' }
                                 ].map((s: any) => {
                                    const value = (expData as any)[s.key] || 0;
                                    // Total alloc Rupiah allocation estimate = Tax pendapatan * (sub % / 100) / 7 (Now 7 categories)
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
                                                    (expenseStorage as any).updateExpense(initialCountry.name_en, s.key as any, val, initialCountry);
                                                 }} className={`py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer text-center ${isActive ? 'bg-green-500 text-white shadow-lg shadow-green-500/30' : 'bg-zinc-900 border border-zinc-800 text-zinc-500 hover:bg-zinc-800 hover:text-white'}`}>
                                                    {val}%
                                                 </button>
                                              );
                                           })}
                                        </div>
                                       <div className="flex justify-between text-xs font-bold text-zinc-500 mt-0.5">
                                           <span>{value > 0 ? 'Aktif' : '0% Off'}</span>
                                           {value > 0 && <span>Alokasi: {formatRupiah}</span>}
                                        </div>
                                    </div>
                                 )})}
                              </div>
                           </div>
                        )}

                        {expandedItem === 'military' && renderAggregatedSection(buildAggregated(militarySectors), "Rincian Perawatan Militer", "text-red-400", Shield)}

                        {expandedItem === 'maintenance' && renderAggregatedSection(buildAggregated(maintenanceSectors), "Rincian Perawatan Infrastruktur", "text-amber-400", Zap)}

                        {!['gaji', 'subsidi', 'military', 'maintenance'].includes(expandedItem || '') && expandedItem && (
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


