"use client"

import { useState, useEffect } from "react"
import { X, FileText, Scale, Coins, Smile, Meh, Frown, Angry, AlertCircle, TrendingUp, RefreshCw, Wallet, Globe, Shield, ShieldAlert, Info } from "lucide-react"
import { countries } from "../../../../select-country/data/countries"
import { CountryData } from "../../../../select-country/data/types"
import { gameStorage } from "../../../gamestorage"
import { taxStorage } from "./TaxStorage"

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PajakModal({ isOpen, onClose }: ModalProps) {
  const session = gameStorage.getSession();
  const initialCountry = countries.find((c: CountryData) => c.name_en === session?.country) || countries[0];
  
  // Local state for managed taxes and country budget
  const [managedTaxes, setManagedTaxes] = useState<any>(null);
  const [currentBudget, setCurrentBudget] = useState<number>(session?.budget || 0);
  const [isSaving, setIsSaving] = useState(false);
  const [hoveredInfo, setHoveredInfo] = useState<string | null>(null);

  useEffect(() => {
    if (initialCountry) {
      const savedTaxes = taxStorage.getTaxes(initialCountry.name_en);
      if (savedTaxes) {
        setManagedTaxes(savedTaxes);
      } else {
        setManagedTaxes(JSON.parse(JSON.stringify(initialCountry.taxes)));
      }
    }
  }, [initialCountry, isOpen]);

  if (!isOpen || !managedTaxes) return null;

  const domesticTaxes = [
    { label: "Pajak Pertambahan Nilai (PPN)", key: "vat", color: "text-purple-400", accent: "bg-purple-500", info: "Pajak atas konsumsi barang dan jasa. Menaikkan PPN menambah pendapatan besar tapi menurunkan daya beli rakyat secara luas." },
    { label: "Pajak Korporasi", key: "corporate", color: "text-cyan-400", accent: "bg-cyan-500", info: "Pajak atas keuntungan perusahaan. Tarif tinggi menghambat investasi namun sangat efektif untuk kas negara dari sektor industri." },
    { label: "Pajak Penghasilan Pribadi", key: "income", color: "text-green-400", accent: "bg-green-500", info: "Pajak langsung dari pendapatan warga. Sangat sensitif bagi popularitas pemerintah; kenaikan kecil berdampak besar pada sentimen." },
    { label: "Pajak Lingkungan", key: "environment", color: "text-emerald-400", accent: "bg-emerald-500", info: "Dikenakan pada polusi dan limbah. Mendukung target ekologi tapi bisa menaikkan biaya operasional bisnis." },
    { label: "Pajak yang Lain", key: "other", color: "text-zinc-400", accent: "bg-zinc-500", info: "Pajak administratif dan retribusi lainnya. Dampak ekonomi moderat." }
  ];

  const tradeTaxes = [
    { label: "Bea Cukai (Customs)", key: "customs", color: "text-amber-400", accent: "bg-amber-500", info: "Pajak impor/ekspor barang. Melindungi industri dalam negeri tapi bisa memicu perang tarif dagang." },
    { label: "Transit (Mitra Dagang)", key: "transit_allied", color: "text-blue-400", accent: "bg-blue-500", info: "Biaya masuk jalur logistik untuk sekutu. Tarif tinggi merusak kepercayaan diplomatik dengan mitra dekat." },
    { label: "Transit (Non-Mitra)", key: "transit_non_allied", color: "text-rose-400", accent: "bg-rose-500", info: "Biaya lintas untuk negara non-aliansi. Sumber pendapatan strategis tapi sangat berisiko memicu ketegangan geopolitik." }
  ];

  const handleRateChange = (key: string, newRate: number) => {
    const oldData = (initialCountry.taxes as any)[key];
    const baseRevenue = oldData.revenue / (oldData.rate || 1);
    const newRevenue = Math.floor(baseRevenue * newRate);
    
    // Satisfaction/Diplomacy impact
    const isTradeTax = tradeTaxes.some(t => t.key === key);
    const impactMultiplier = isTradeTax ? 2.0 : 1.5; 
    
    let specializedImpact = 0;
    if (key === 'transit_allied' && newRate > 10) specializedImpact = (newRate - 10) * 1.5;
    if (key === 'transit_non_allied' && newRate > 25) specializedImpact = (newRate - 25) * 1.0;

    const totalImpact = ((newRate - oldData.rate) * impactMultiplier) + specializedImpact;
    const newSatisfaction = Math.max(0, Math.min(100, Math.floor(oldData.satisfaction - totalImpact)));

    setManagedTaxes((prev: any) => ({
      ...prev,
      [key]: {
        ...prev[key],
        rate: newRate,
        revenue: newRevenue,
        satisfaction: newSatisfaction
      }
    }));
  };

  const getSatisfactionIcon = (score: number, isTrade?: boolean) => {
    if (isTrade) {
      if (score >= 80) return <Globe className="h-4 w-4 text-blue-400 animate-pulse" />;
      if (score >= 60) return <Shield className="h-4 w-4 text-cyan-400" />;
      if (score >= 40) return <Globe className="h-4 w-4 text-yellow-400" />;
      if (score >= 20) return <AlertCircle className="h-4 w-4 text-orange-400" />;
      return <ShieldAlert className="h-4 w-4 text-red-500 animate-bounce" />;
    }
    if (score >= 80) return <Smile className="h-4 w-4 text-green-400" />;
    if (score >= 60) return <Smile className="h-4 w-4 text-lime-400 opacity-80" />;
    if (score >= 40) return <Meh className="h-4 w-4 text-yellow-400" />;
    if (score >= 20) return <Frown className="h-4 w-4 text-orange-400" />;
    return <Angry className="h-4 w-4 text-red-500 animate-pulse" />;
  };

  const allTaxItems = [...domesticTaxes, ...tradeTaxes];
  const totalRevenue = allTaxItems.reduce((acc, item) => acc + (managedTaxes[item.key]?.revenue || 0), 0);
  const originalTotalRevenue = allTaxItems.reduce((acc, item) => acc + ((initialCountry.taxes as any)[item.key]?.revenue || 0), 0);
  const revenueDelta = totalRevenue - originalTotalRevenue;
  const projectedBudget = currentBudget + revenueDelta;

  const handleApplyReform = () => {
    setIsSaving(true);
    setTimeout(() => {
      gameStorage.updateBudget(revenueDelta);
      setCurrentBudget(projectedBudget);
      taxStorage.saveTaxes(initialCountry.name_en, managedTaxes); 
      setIsSaving(false);
      alert("Reformasi Pajak Berhasil! Kas negara telah disesuaikan.");
    }, 1500);
  };

  const renderTaxCard = (item: any) => {
    const data = managedTaxes[item.key];
    if (!data) return null;
    const isTrade = tradeTaxes.some(t => t.key === item.key);
    
    return (
      <div key={item.key} className={`bg-zinc-900/40 border ${isTrade ? 'border-amber-500/10 hover:border-amber-500/30' : 'border-zinc-800/80 hover:border-green-500/30'} p-6 rounded-3xl group transition-all flex flex-col gap-6 relative overflow-hidden backdrop-blur-md`}>
        <div className={`absolute -top-10 -right-10 w-32 h-32 bg-white/5 blur-3xl rounded-full ${isTrade ? 'group-hover:bg-amber-500/5' : 'group-hover:bg-green-500/5'} transition-colors`}></div>
        
        <div className="flex justify-between items-start relative z-10">
          <div className="flex flex-col">
            <div className="flex items-center gap-2 group/info">
              <span className="text-[9px] font-black text-zinc-600 uppercase tracking-wider">
                {isTrade ? 'Trade_Logistics_Tax' : 'Domestic_Fiscal_Tax'}
              </span>
              <button 
                onMouseEnter={() => setHoveredInfo(item.key)}
                onMouseLeave={() => setHoveredInfo(null)}
                className="p-1 rounded-full hover:bg-zinc-800 transition-colors"
                title="Informasi Pajak"
              >
                <Info size={10} className="text-zinc-600 group-hover/info:text-zinc-400" />
              </button>
            </div>
            <h3 className="text-sm font-black text-white leading-tight uppercase tracking-tight flex items-center gap-2">
              {item.label}
            </h3>
          </div>
          <div className={`${item.accent}/10 ${item.color} text-[11px] font-black px-3 py-1.5 rounded-xl border border-white/5 shadow-inner`}>
            {data.rate}%
          </div>
        </div>

        {/* Info Tooltip Overlay */}
        {hoveredInfo === item.key && (
          <div className="absolute inset-0 z-20 bg-zinc-950/95 p-6 flex flex-col justify-center animate-in fade-in zoom-in-95 duration-200">
            <Info className={`h-6 w-6 ${item.color} mb-3`} />
            <p className="text-[11px] text-zinc-300 font-medium leading-relaxed italic">
              "{item.info}"
            </p>
            <div className="mt-4 pt-4 border-t border-zinc-800">
               <p className="text-[9px] font-black text-zinc-500 uppercase tracking-widest">
                 Dampak: {isTrade ? 'Stabilitas Diplomatik' : 'Kepuasan Warga'}
               </p>
            </div>
          </div>
        )}

        <div className="space-y-4 relative z-10">
          <div className="flex flex-col gap-2">
            <div className="flex justify-between text-[10px] font-bold uppercase tracking-tighter">
              <span className="text-zinc-500">Penyesuaian Tarif</span>
              <span className="text-white font-black">{data.rate}%</span>
            </div>
            <input 
              type="range" 
              min="0" 
              max="100" 
              value={data.rate} 
              onChange={(e) => handleRateChange(item.key, parseInt(e.target.value))}
              className={`w-full h-1.5 bg-zinc-800 rounded-full appearance-none cursor-pointer accent-green-500 hover:accent-green-400 transition-all ${isTrade ? 'accent-amber-500 hover:accent-amber-400' : ''}`}
            />
          </div>

          <div className="grid grid-cols-2 gap-4 pt-2">
             <div className="flex flex-col gap-1 bg-zinc-950/50 p-3 rounded-2xl border border-zinc-900">
                <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-tighter">Penerimaan</span>
                <div className="flex items-center gap-2">
                  <Coins size={14} className="text-yellow-500" />
                  <span className="text-xs font-black text-white">Rp {data.revenue?.toLocaleString('id-ID')}</span>
                </div>
             </div>
             <div className="flex flex-col gap-1 bg-zinc-950/50 p-3 rounded-2xl border border-zinc-900 items-end">
                <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-tighter text-right">
                  {isTrade ? 'Hubungan Negara' : 'Sentimen Publik'}
                </span>
                <div className="flex items-center gap-2">
                  {getSatisfactionIcon(data.satisfaction, isTrade)}
                  <span className={`text-xs font-black ${isTrade ? 'text-amber-400/80' : 'text-zinc-300'}`}>{data.satisfaction}%</span>
                </div>
             </div>
          </div>
        </div>
        
        <div className="h-1 w-full bg-zinc-800/50 rounded-full overflow-hidden relative z-10">
          <div 
            className={`h-full transition-all duration-300 ${
              data.satisfaction >= 60 ? (isTrade ? 'bg-amber-400' : 'bg-green-500') : 
              data.satisfaction >= 40 ? 'bg-yellow-500' : 
              'bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]'
            }`}
            style={{ width: `${data.satisfaction}%` }}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="absolute inset-0 bg-black/80 z-50 flex items-center justify-center animate-in fade-in duration-200 p-8">
      <div className="bg-zinc-950 border border-zinc-800 rounded-3xl w-full max-w-6xl max-h-[90vh] overflow-hidden shadow-2xl flex flex-col relative">
        <div className="absolute top-0 left-1/4 w-1/2 h-1 bg-gradient-to-r from-transparent via-green-500/50 to-transparent blur-sm"></div>
        
        {/* Header */}
        <div className="px-10 py-8 border-b border-zinc-900 flex items-center justify-between bg-zinc-900/30">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-green-500/10 rounded-2xl border border-green-500/20" title="Fiscal Management">
              <FileText className="h-7 w-7 text-green-500" />
            </div>
            <div>
              <h2 className="text-3xl font-black text-white tracking-tighter uppercase italic">Manajemen Pajak</h2>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse"></span>
                <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-[0.3em]">Taxation & Revenue Center v4.0</p>
              </div>
            </div>
          </div>
          <button onClick={onClose} className="p-3 rounded-2xl hover:bg-zinc-800 transition-all text-zinc-400 hover:text-white cursor-pointer group">
            <X className="h-7 w-7 group-hover:rotate-90 transition-transform" />
          </button>
        </div>
        
        {/* Summary Bar */}
        <div className="px-10 py-6 bg-zinc-900/10 border-b border-zinc-900 flex items-center justify-between">
          <div className="flex items-center gap-12">
            <div className="flex flex-col">
              <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1">Total Pendapatan Pajak</span>
              <span className="text-3xl font-black text-green-400 tracking-tighter italic">
                Rp {totalRevenue.toLocaleString('id-ID')}
              </span>
            </div>
            <div className="h-12 w-px bg-zinc-800" />
            <div className="flex flex-col">
              <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1">Proyeksi Kas Negara</span>
              <div className="flex items-baseline gap-2">
                <span className={`text-2xl font-black ${revenueDelta >= 0 ? 'text-white' : 'text-red-400'}`}>
                  Rp {projectedBudget.toLocaleString('id-ID')}
                </span>
                <span className={`text-[10px] font-bold ${revenueDelta >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {revenueDelta >= 0 ? '+' : ''}{revenueDelta.toLocaleString('id-ID')}
                </span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-4 bg-zinc-900/50 border border-zinc-800 p-2 rounded-xl">
            <div className="flex items-center gap-3 bg-green-500/5 border border-green-500/10 px-4 py-2 rounded-xl">
              <TrendingUp className="h-4 w-4 text-green-400" />
              <span className="text-[11px] font-black text-green-400 uppercase tracking-widest">
                {revenueDelta >= 0 ? 'Surplus' : 'Defisit'} Terdeteksi
              </span>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-10 no-scrollbar space-y-12 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.02),transparent)] pb-24">
          
          {/* Section: Domestik */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="h-10 w-1 bg-green-500 rounded-full shadow-[0_0_15px_rgba(34,197,94,0.3)]"></div>
              <div>
                <h3 className="text-xl font-black text-zinc-100 uppercase tracking-tight italic">Pajak Domestik</h3>
                <p className="text-[10px] text-zinc-500 font-black uppercase tracking-widest">Sektor Ekonomi Internal & Lingkungan</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {domesticTaxes.map(renderTaxCard)}
            </div>
          </div>

          {/* Section: Perdagangan */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="h-10 w-1 bg-amber-500 rounded-full shadow-[0_0_15px_rgba(245,158,11,0.3)]"></div>
              <div>
                <h3 className="text-xl font-black text-amber-500 uppercase tracking-tight italic">Pajak Perdagangan & Transit</h3>
                <p className="text-[10px] text-zinc-500 font-black uppercase tracking-widest">Arus Logistik & Hubungan Luar Negeri</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tradeTaxes.map(renderTaxCard)}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-6">
            <div className="bg-gradient-to-br from-green-600/10 to-transparent border border-green-500/20 p-8 rounded-3xl flex items-center justify-between gap-8 group hover:border-green-500/40 transition-all relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 blur-3xl pointer-events-none"></div>
              <div className="flex gap-6 items-center relative z-10">
                <div className="p-5 bg-green-500/10 rounded-2xl border border-green-500/20 shadow-lg group-hover:scale-110 transition-transform">
                  <Wallet className="h-10 w-10 text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-white uppercase tracking-tighter italic">Reformasi Fiskal</h3>
                  <p className="text-xs text-zinc-400 max-w-[300px] font-medium leading-relaxed mt-1">
                    Tarif pajak saat ini akan {revenueDelta >= 0 ? 'menambah' : 'mengurangi'} kas negara sebesar 
                    <span className={`font-black ml-1 ${revenueDelta >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                      Rp {Math.abs(revenueDelta).toLocaleString('id-ID')}
                    </span>.
                  </p>
                </div>
              </div>
              <button 
                onClick={handleApplyReform}
                disabled={isSaving}
                className="px-10 py-5 bg-green-600 hover:bg-green-500 text-white text-[11px] font-black uppercase tracking-[0.3em] rounded-2xl transition-all shadow-[0_20px_40px_rgba(22,163,74,0.3)] hover:shadow-[0_25px_50px_rgba(22,163,74,0.4)] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed group flex items-center gap-3 relative z-10"
              >
                {isSaving ? (
                  <>
                    <RefreshCw className="h-4 w-4 animate-spin" />
                    Memproses...
                  </>
                ) : (
                  <>
                    Terapkan Reformasi
                    <span className="text-lg">→</span>
                  </>
                )}
              </button>
            </div>

            <div className="bg-zinc-900/30 border border-zinc-800/50 p-8 rounded-3xl flex items-center gap-6 backdrop-blur-sm">
              <div className="p-4 bg-amber-500/10 rounded-xl border border-amber-500/20">
                <AlertCircle className="h-8 w-8 text-amber-500" />
              </div>
              <div>
                <h4 className="text-xs font-black text-white uppercase tracking-[0.2em] mb-1">Stabilitas & Diplomasi</h4>
                <p className="text-[11px] text-zinc-500 font-medium leading-relaxed">
                  Pajak domestik mempengaruhi rakyat, sementara pajak perdagangan mempengaruhi hubungan internasional.
                  <span className="text-amber-500/80 ml-1">Tarif transit yang tinggi akan merusak hubungan dengan mitra dagang global.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
