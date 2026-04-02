"use client"

import { useState, useMemo } from "react"
import { X, Truck, Ship, Plane, Swords, TrendingUp, TrendingDown, Target, ShieldAlert, Info, Search } from "lucide-react"
import { calculateTotalMilitaryPower } from "../../3_armada_militer/kekuatanmiliter"
import { militaryAidStorage } from "../../../../../map-system/modals_detail_negara/4_bantuan_dan_kerjasama/1_beri_tentara/logic/militaryAidStorage"
import { buildingStorage } from "../../../3_pembangunan/buildingStorage"
import { countries } from "@/app/database/data/negara/benua/index"

interface MisiSeranganProps {
  isOpen: boolean
  onClose: () => void
  userCountryData: any
}

export default function MisiSeranganModal({ isOpen, onClose, userCountryData }: MisiSeranganProps) {
  const [targetCountry, setTargetCountry] = useState<any | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)
  const [sortBy, setSortBy] = useState<"name" | "power">("name")

  // Get Target Data mapping first so we can sort by power
  const aidData = useMemo(() => militaryAidStorage.getAid(), []);

  // Filter countries for selection
  const availableTargets = useMemo(() => {
    if (!userCountryData) return []
    let targets = countries
      .filter(c => c.name_id !== userCountryData.name_id)
      .filter(c => (c.name_id || c.name_en).toLowerCase().includes(searchTerm.toLowerCase()));
      
    if (sortBy === "name") {
      targets.sort((a, b) => (a.name_id || a.name_en).localeCompare(b.name_id || b.name_en))
    } else {
      targets.sort((a, b) => {
        const aAid = aidData[a.name_en?.toLowerCase()] || aidData[a.name_id?.toLowerCase()] || {};
        const bAid = aidData[b.name_en?.toLowerCase()] || aidData[b.name_id?.toLowerCase()] || {};
        const pA = calculateTotalMilitaryPower(a.armada_militer || {}, aAid).total;
        const pB = calculateTotalMilitaryPower(b.armada_militer || {}, bAid).total;
        return pB - pA;
      });
    }

    return targets;
  }, [searchTerm, userCountryData?.name_id, sortBy, aidData])

  // Get User Deltas
  const userDeltas = buildingStorage.getData().buildingDeltas || {};
  const userPower = calculateTotalMilitaryPower(userCountryData?.armada_militer || {}, userDeltas)

  // Get current Target Aid
  const targetAid = targetCountry ? (aidData[targetCountry.name_en?.toLowerCase()] || aidData[targetCountry.name_id?.toLowerCase()] || {}) : {};
  const targetPower = targetCountry ? calculateTotalMilitaryPower(targetCountry.armada_militer, targetAid) : { total: 0, darat: 0, laut: 0, udara: 0 }

  const comparisonItems = [
    { id: 'total', label: "Total Kekuatan", user: userPower.total, target: targetPower.total, icon: Swords, color: "rose" },
    { id: 'darat', label: "Armada Darat", user: userPower.darat, target: targetPower.darat, icon: Truck, color: "amber" },
    { id: 'laut', label: "Armada Laut", user: userPower.laut, target: targetPower.laut, icon: Ship, color: "cyan" },
    { id: 'udara', label: "Armada Udara", user: userPower.udara, target: targetPower.udara, icon: Plane, color: "violet" },
  ]

  const getDetailData = (categoryId: string) => {
    if (!targetCountry || !userCountryData) return []
    const userArmada = userCountryData.armada_militer || {}
    const targetArmada = targetCountry.armada_militer || {}

    switch (categoryId) {
      case 'darat':
        return [
          { label: "Main Battle Tank", user: (userArmada.darat?.tank_tempur_utama || 0) + (userDeltas.tank || 0), target: (targetArmada.darat?.tank_tempur_utama || 0) + (targetAid.tank_tempur_utama || 0) },
          { label: "APC / IFV", user: (userArmada.darat?.apc_ifv || 0) + (userDeltas.apc || 0), target: (targetArmada.darat?.apc_ifv || 0) + (targetAid.apc_ifv || 0) },
          { label: "Artileri Berat", user: (userArmada.darat?.artileri_berat || 0) + (userDeltas.artileri || 0), target: (targetArmada.darat?.artileri_berat || 0) + (targetAid.artileri_berat || 0) },
          { label: "MLRS Rocket", user: (userArmada.darat?.sistem_peluncur_roket || 0) + (userDeltas.rocket || 0), target: (targetArmada.darat?.sistem_peluncur_roket || 0) + (targetAid.sistem_peluncur_roket || 0) },
          { label: "Mobile SAM", user: (userArmada.darat?.pertahanan_udara_mobile || 0) + (userDeltas.sam || 0), target: (targetArmada.darat?.pertahanan_udara_mobile || 0) + (targetAid.pertahanan_udara_mobile || 0) },
          { label: "Kendaraan Taktis", user: (userArmada.darat?.kendaraan_taktis || 0) + (userDeltas.tactical || 0), target: (targetArmada.darat?.kendaraan_taktis || 0) + (targetAid.kendaraan_taktis || 0) },
        ]
      case 'laut':
        return [
          { label: "Kapal Induk", user: (userArmada.laut?.kapal_induk || 0) + (userDeltas.carrier || 0), target: (targetArmada.laut?.kapal_induk || 0) + (targetAid.kapal_induk || 0) },
          { label: "Kapal Destroyer", user: (userArmada.laut?.kapal_destroyer || 0) + (userDeltas.destroyer || 0), target: (targetArmada.laut?.kapal_destroyer || 0) + (targetAid.kapal_destroyer || 0) },
          { label: "Kapal Korvet", user: (userArmada.laut?.kapal_korvet || 0) + (userDeltas.corvette || 0), target: (targetArmada.laut?.kapal_korvet || 0) + (targetAid.kapal_korvet || 0) },
          { label: "Kapal Selam Nuklir", user: (userArmada.laut?.kapal_selam_nuklir || 0) + (userDeltas.submarine || 0), target: (targetArmada.laut?.kapal_selam_nuklir || 0) + (targetAid.kapal_selam_nuklir || 0) },
          { label: "Kapal Selam Regular", user: (userArmada.laut?.kapal_selam_regular || 0) + (userDeltas.reg_sub || 0), target: (targetArmada.laut?.kapal_selam_regular || 0) + (targetAid.kapal_selam_regular || 0) },
        ]
      case 'udara':
        return [
          { label: "Jet Stealth", user: (userArmada.udara?.jet_tempur_siluman || 0) + (userDeltas.stealth_jet || 0), target: (targetArmada.udara?.jet_tempur_siluman || 0) + (targetAid.jet_tempur_siluman || 0) },
          { label: "Jet Interceptor", user: (userArmada.udara?.jet_tempur_interceptor || 0) + (userDeltas.interceptor || 0), target: (targetArmada.udara?.jet_tempur_interceptor || 0) + (targetAid.jet_tempur_interceptor || 0) },
          { label: "Pesawat Pengebom", user: (userArmada.udara?.pesawat_pengebom || 0) + (userDeltas.bomber || 0), target: (targetArmada.udara?.pesawat_pengebom || 0) + (targetAid.pesawat_pengebom || 0) },
          { label: "Heli Serang", user: (userArmada.udara?.helikopter_serang || 0) + (userDeltas.heli_attack || 0), target: (targetArmada.udara?.helikopter_serang || 0) + (targetAid.helikopter_serang || 0) },
          { label: "Pesawat Intai", user: (userArmada.udara?.pesawat_pengintai || 0) + (userDeltas.recon_plane || 0), target: (targetArmada.udara?.pesawat_pengintai || 0) + (targetAid.pesawat_pengintai || 0) },
          { label: "Drone UAV", user: (userArmada.udara?.drone_intai_uav || 0) + (userDeltas.uav || 0), target: (targetArmada.udara?.drone_intai_uav || 0) + (targetAid.drone_intai_uav || 0) },
        ]
      default:
        return []
    }
  }

  if (!isOpen || !userCountryData) return null

  return (
    <div className="absolute inset-0 bg-black/80 backdrop-blur-md z-[200] flex items-center justify-center p-4 animate-in fade-in duration-300">
      <div className="bg-zinc-950 border border-zinc-800 rounded-[40px] w-full max-w-5xl max-h-[90vh] overflow-hidden shadow-2xl flex flex-col relative">
        {/* Header */}
        <div className="px-8 py-6 border-b border-zinc-800/50 flex items-center justify-between bg-zinc-900/30">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-rose-500/10 rounded-2xl border border-rose-500/20 text-rose-500">
              <Swords size={28} />
            </div>
            <div>
              <h2 className="text-2xl font-black text-white tracking-tight italic uppercase">Misi Serangan: Analisis Target</h2>
              <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-[0.2em] mt-1">Strategic Offensive Operation Analysis</p>
            </div>
          </div>
          <button onClick={onClose} className="p-3 rounded-2xl bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-zinc-500 hover:text-white transition-all cursor-pointer shadow-lg">
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-8 flex flex-col md:flex-row gap-8">
          {/* Left Panel: Target Selection */}
          <div className="w-full md:w-1/3 flex flex-col gap-4 border-r border-zinc-800/50 pr-8">
            <h3 className="text-sm font-black text-zinc-400 uppercase tracking-widest">Pilih Target Operasi</h3>
            
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
              <input 
                type="text" 
                placeholder="Cari negara target..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-800 rounded-xl pl-10 pr-4 py-3 text-sm font-medium text-white placeholder:text-zinc-600 focus:outline-none focus:border-rose-500/50 transition-colors"
              />
            </div>
            
            <div className="flex gap-2 bg-zinc-900/50 p-1.5 rounded-xl border border-zinc-800 mt-1">
              <button 
                onClick={() => setSortBy("name")}
                className={`flex-1 py-1.5 text-[10px] font-black uppercase tracking-widest rounded-lg transition-all cursor-pointer ${sortBy === 'name' ? 'bg-zinc-800 text-white shadow-lg border border-zinc-700' : 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/50 border border-transparent'}`}
              >
                Nama
              </button>
              <button 
                onClick={() => setSortBy("power")}
                className={`flex-1 py-1.5 text-[10px] font-black uppercase tracking-widest rounded-lg transition-all cursor-pointer ${sortBy === 'power' ? 'bg-rose-600/20 text-rose-400 shadow-lg border border-rose-500/30' : 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/50 border border-transparent'}`}
              >
                Kekuatan
              </button>
            </div>

            <div className="flex-1 overflow-y-auto no-scrollbar space-y-2 mt-2 h-[400px]">
              {availableTargets.map((c) => {
                const cAid = aidData[c.name_en?.toLowerCase()] || aidData[c.name_id?.toLowerCase()] || {};
                const cPower = calculateTotalMilitaryPower(c.armada_militer || {}, cAid);

                return (
                  <button
                    key={c.name_en}
                    onClick={() => setTargetCountry(c)}
                    className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all cursor-pointer text-left ${
                      targetCountry?.name_en === c.name_en 
                        ? 'bg-rose-500/10 border-rose-500/30' 
                        : 'bg-zinc-900/50 border-zinc-800 hover:bg-zinc-800'
                    }`}
                  >
                    <span className={`text-xs font-bold uppercase tracking-wider ${targetCountry?.name_en === c.name_en ? 'text-rose-400' : 'text-zinc-400'}`}>
                      {c.name_id || c.name_en}
                    </span>
                    <span className={`text-[10px] font-black uppercase tracking-widest ${targetCountry?.name_en === c.name_en ? 'text-rose-500' : 'text-zinc-500'}`}>
                      {cPower.total.toLocaleString()} <span className="opacity-50">PWR</span>
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Right Panel: Comparison Detail */}
          <div className="flex-1">
            {!targetCountry ? (
               <div className="h-full flex flex-col items-center justify-center opacity-30 text-center px-12">
                 <Target size={64} className="mb-6 text-zinc-600" />
                 <h3 className="text-xl font-black text-zinc-500 uppercase tracking-widest mb-2">Pilih Negara Target</h3>
                 <p className="text-sm font-bold text-zinc-600">Pilih negara dari daftar di sebelah kiri untuk melihat analisis perbandingan kekuatan pasukan dan kalkulasi kemungkinan keberhasilan operasi serangan.</p>
               </div>
            ) : (
               <div className="space-y-8 animate-in fade-in duration-500">
                 {/* Top Comparison Summary */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative">
                    {/* User Country */}
                    <div className="flex flex-col items-center gap-2 p-5 bg-cyan-500/5 border border-cyan-500/20 rounded-3xl relative overflow-hidden group">
                       <span className="text-[9px] font-black text-cyan-500 uppercase tracking-[0.3em] mb-1">Kekuatan Nasional</span>
                       <h3 className="text-2xl font-black text-white uppercase italic tracking-tighter text-center">{userCountryData.name_id || userCountryData.name_en}</h3>
                       <span className="text-4xl font-black text-white tracking-tighter tabular-nums mt-1">{userPower.total.toLocaleString()}</span>
                    </div>

                    {/* Target Country */}
                    <div className="flex flex-col items-center gap-2 p-5 bg-rose-500/5 border border-rose-500/20 rounded-3xl relative overflow-hidden group">
                       <span className="text-[9px] font-black text-rose-500 uppercase tracking-[0.3em] mb-1">Target Operasi</span>
                       <h3 className="text-2xl font-black text-white uppercase italic tracking-tighter text-center">{targetCountry.name_id || targetCountry.name_en}</h3>
                       <span className="text-4xl font-black text-white tracking-tighter tabular-nums mt-1">{targetPower.total.toLocaleString()}</span>
                    </div>
                  </div>

                  {/* Detailed Breakdown */}
                  <div className="space-y-4">
                    {comparisonItems.map((item) => {
                      const total = item.user + item.target || 1
                      const userWidth = (item.user / total) * 100
                      const targetWidth = (item.target / total) * 100
                      const isUserStronger = item.user >= item.target
                      const isExpanded = expandedCategory === item.id

                      return (
                        <div key={item.id} className="bg-zinc-900/40 border border-zinc-800/50 p-5 rounded-3xl hover:bg-zinc-800/40 transition-all">
                          <div className="flex items-center justify-between mb-4 relative">
                            <div className="flex items-center gap-3">
                              <div className={`p-2 rounded-xl bg-zinc-950/80 border border-zinc-800/50`}>
                                <item.icon size={16} className={item.color === 'rose' ? 'text-rose-500' : item.color === 'amber' ? 'text-amber-500' : item.color === 'cyan' ? 'text-cyan-500' : 'text-violet-500'} />
                              </div>
                              <span className="text-sm font-black text-white uppercase italic tracking-tight">{item.label}</span>
                            </div>

                            <button 
                              onClick={() => setExpandedCategory(isExpanded ? null : item.id)}
                              className={`p-1.5 rounded-lg border transition-all cursor-pointer shadow-sm ${isExpanded ? 'bg-amber-500 border-amber-500 text-black' : 'bg-zinc-950 border-zinc-800 text-zinc-500 hover:text-white hover:border-zinc-500'}`}
                            >
                              <Info size={14} />
                            </button>
                          </div>

                          <div className="space-y-3">
                            <div className="h-4 w-full bg-zinc-950 rounded-xl border border-zinc-800 overflow-hidden flex relative group/bar">
                              <div className="h-full bg-gradient-to-r from-cyan-600 to-cyan-400 transition-all duration-1000" style={{ width: `${userWidth}%` }} />
                              <div className="w-px h-full bg-zinc-950 z-10" />
                              <div className="h-full bg-gradient-to-l from-rose-600 to-rose-400 transition-all duration-1000" style={{ width: `${targetWidth}%` }} />
                            </div>

                            <div className="flex items-center justify-between px-1">
                               <div className="flex items-baseline gap-2">
                                 <span className="text-lg font-black text-cyan-400 tabular-nums">{item.user.toLocaleString()}</span>
                                 <span className="text-[10px] font-bold text-zinc-500">{userWidth.toFixed(1)}%</span>
                               </div>
                               
                               <div className="flex items-baseline gap-2 flex-row-reverse">
                                 <span className="text-lg font-black text-rose-400 tabular-nums">{item.target.toLocaleString()}</span>
                                 <span className="text-[10px] font-bold text-zinc-500">{targetWidth.toFixed(1)}%</span>
                               </div>
                            </div>
                          </div>

                          {/* Expanded Detail View */}
                          {isExpanded && (
                            <div className="mt-4 pt-4 border-t border-zinc-800/50 space-y-1">
                              {getDetailData(item.id).map((detail, idx) => (
                                <div key={idx} className="flex items-center justify-between px-3 py-2 bg-zinc-950/30 rounded-lg">
                                  <span className="text-[10px] font-bold text-zinc-400 uppercase">{detail.label}</span>
                                  <div className="flex items-center gap-6">
                                    <span className={`text-[11px] font-black tabular-nums w-10 text-right ${detail.user > detail.target ? 'text-cyan-400' : 'text-zinc-300'}`}>
                                      {detail.user.toLocaleString()}
                                    </span>
                                    <span className="text-[9px] text-zinc-600">VS</span>
                                    <span className={`text-[11px] font-black tabular-nums w-10 text-left ${detail.target > detail.user ? 'text-rose-400' : 'text-zinc-300'}`}>
                                      {detail.target.toLocaleString()}
                                    </span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>

                  {/* Operational Status */}
                  <div className={`p-5 rounded-2xl border flex items-center gap-4 ${
                    userPower.total > targetPower.total ? "bg-emerald-500/5 border-emerald-500/20" : "bg-rose-500/5 border-rose-500/20"
                  }`}>
                    <div className={`p-3 rounded-xl ${userPower.total > targetPower.total ? 'bg-emerald-500/10 text-emerald-500' : 'bg-rose-500/10 text-rose-500'}`}>
                      <Info size={24} />
                    </div>
                    <div>
                      <h4 className={`text-sm font-black uppercase italic ${userPower.total > targetPower.total ? 'text-emerald-400' : 'text-rose-400'}`}>
                        {userPower.total > targetPower.total ? "Estimasi Kemenangan Tinggi" : "Peringatan Risiko Kekalahan"}
                      </h4>
                      <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest mt-1">
                        {userPower.total > targetPower.total 
                          ? "Keunggulan daya tempur. Perang dapat diinisiasi." 
                          : "Kekuatan musuh dominan. Tingkatkan armada."}
                      </p>
                    </div>
                  </div>

                  {/* Start Button */}
                  <button className="w-full py-4 rounded-2xl bg-rose-600 hover:bg-rose-500 text-white font-black uppercase tracking-[0.3em] transition-all cursor-pointer shadow-xl shadow-rose-900/20 active:scale-[0.98] flex items-center justify-center gap-3 mt-4">
                    <Swords size={18} />
                    Eksekusi Serangan
                  </button>
               </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
