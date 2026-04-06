"use client"

import { useState } from "react"
import { X, Swords, TrendingUp, TrendingDown, Target, ShieldAlert, Info } from "lucide-react"
import { calculateTotalMilitaryPower } from "../../kekuatanmiliter"
import { militaryAidStorage, MILITARY_KEY_MAP } from "../../../../../../map-system/modals_detail_negara/4_bantuan_dan_kerjasama/1_beri_tentara/logic/militaryAidStorage"

// Custom Realistic Icons
const TankIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="14" width="20" height="6" rx="3" />
    <circle cx="6" cy="17" r="1.5" fill="currentColor" />
    <circle cx="12" cy="17" r="1.5" fill="currentColor" />
    <circle cx="18" cy="17" r="1.5" fill="currentColor" />
    <path d="M4 14l2-3h12l2 3" />
    <path d="M8 11V8a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v3" />
    <path d="M16 9h6" />
  </svg>
)

const JetIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 2l-2 5-6 6a1 1 0 0 0 .7 1.7h4.3L8 20h8l-1-5.3h4.3a1 1 0 0 0 .7-1.7l-6-6-2-5z" />
    <path d="M12 6v4" />
  </svg>
)

const BattleshipIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M2 16l3 4h14l3-4z" />
    <path d="M2 16q6-2 18 0" />
    <path d="M8 14V9h8v5" />
    <path d="M12 9V5" />
    <path d="M11 5h2" />
    <path d="M16 11v-2h3" />
    <path d="M8 11v-2H5" />
  </svg>
)

interface PerbandinganProps {
  isOpen: boolean
  onClose: () => void
  userCountryData: any
  targetCountryData: any
  userDeltas: Record<string, any>
  onConfirmWar?: (target: string) => void
}

export default function Perbandingan({ isOpen, onClose, userCountryData, targetCountryData, userDeltas, onConfirmWar }: PerbandinganProps) {
  if (!isOpen || !userCountryData || !targetCountryData) return null

  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)
  
  // Calculate target deltas (received aid)
  const aidData = militaryAidStorage.getAid();
  const targetAid = targetCountryData ? (aidData[targetCountryData.name.toLowerCase()] || {}) : {};
  
  const userPower = calculateTotalMilitaryPower(userCountryData.armada_militer, userDeltas)
  const targetPower = calculateTotalMilitaryPower(targetCountryData.armada_militer, targetAid)

  const comparisonItems = [
    { id: 'total', label: "Total Kekuatan", user: userPower.total, target: targetPower.total, icon: Swords, color: "rose" },
    { id: 'darat', label: "Armada Darat", user: userPower.darat, target: targetPower.darat, icon: TankIcon, color: "amber" },
    { id: 'laut', label: "Armada Laut", user: userPower.laut, target: targetPower.laut, icon: BattleshipIcon, color: "cyan" },
    { id: 'udara', label: "Armada Udara", user: userPower.udara, target: targetPower.udara, icon: JetIcon, color: "violet" },
  ]

  const getDetailData = (categoryId: string) => {
    const userArmada = userCountryData.armada_militer
    const targetArmada = targetCountryData.armada_militer

    switch (categoryId) {
      case 'darat':
        return [
          { label: "Pasukan Infanteri", user: ((userArmada.barak || 0) + (userDeltas.barak || 0)) * 10000, target: ((targetArmada.barak || 0) + (targetAid.barak || 0)) * 10000 },
          { label: "Main Battle Tank", user: (userArmada.darat?.tank_tempur_utama || 0) + (userDeltas.tank || 0), target: (targetArmada.darat?.tank_tempur_utama || 0) + (targetAid.tank_tempur_utama || 0) },
          { label: "APC / IFV", user: (userArmada.darat?.apc_ifv || 0) + (userDeltas.apc || 0), target: (targetArmada.darat?.apc_ifv || 0) + (targetAid.apc_ifv || 0) },
          { label: "Artileri Berat", user: (userArmada.darat?.artileri_berat || 0) + (userDeltas.artileri || 0), target: (targetArmada.darat?.artileri_berat || 0) + (targetAid.artileri_berat || 0) },
          { label: "MLRS Rocket", user: (userArmada.darat?.sistem_peluncur_roket || 0) + (userDeltas.rocket || 0), target: (targetArmada.darat?.sistem_peluncur_roket || 0) + (targetAid.sistem_peluncur_roket || 0) },
          { label: "Mobile SAM", user: (userArmada.darat?.pertahanan_udara_mobile || 0) + (userDeltas.sam || 0), target: (targetArmada.darat?.pertahanan_udara_mobile || 0) + (targetAid.pertahanan_udara_mobile || 0) },
          { label: "Kendaraan Taktis", user: (userArmada.darat?.kendaraan_taktis || 0) + (userDeltas.tactical || 0), target: (targetArmada.darat?.kendaraan_taktis || 0) + (targetAid.kendaraan_taktis || 0) },
        ]
      case 'laut':
        return [
          { label: "Kapal Induk Konvensional", user: (userArmada.laut?.kapal_induk || 0) + (userDeltas.carrier || 0), target: (targetArmada.laut?.kapal_induk || 0) + (targetAid.kapal_induk || 0) },
          { label: "Kapal Induk Nuklir", user: (userArmada.laut?.kapal_induk_nuklir || 0) + (userDeltas.nuclear_carrier || 0), target: (targetArmada.laut?.kapal_induk_nuklir || 0) + (targetAid.kapal_induk_nuklir || 0) },
          { label: "Kapal Destroyer", user: (userArmada.laut?.kapal_destroyer || 0) + (userDeltas.destroyer || 0), target: (targetArmada.laut?.kapal_destroyer || 0) + (targetAid.kapal_destroyer || 0) },
          { label: "Kapal Korvet", user: (userArmada.laut?.kapal_korvet || 0) + (userDeltas.corvette || 0), target: (targetArmada.laut?.kapal_korvet || 0) + (targetAid.kapal_korvet || 0) },
          { label: "Kapal Selam Nuklir", user: (userArmada.laut?.kapal_selam_nuklir || 0) + (userDeltas.submarine || 0), target: (targetArmada.laut?.kapal_selam_nuklir || 0) + (targetAid.kapal_selam_nuklir || 0) },
          { label: "Kapal Selam Regular", user: (userArmada.laut?.kapal_selam_regular || 0) + (userDeltas.reg_sub || 0), target: (targetArmada.laut?.kapal_selam_regular || 0) + (targetAid.kapal_selam_regular || 0) },
          { label: "Kapal Ranjau", user: (userArmada.laut?.kapal_ranjau || 0) + (userDeltas.mine_ship || 0), target: (targetArmada.laut?.kapal_ranjau || 0) + (targetAid.kapal_ranjau || 0) },
          { label: "Kapal Logistik", user: (userArmada.laut?.kapal_logistik || 0) + (userDeltas.logistics || 0), target: (targetArmada.laut?.kapal_logistik || 0) + (targetAid.kapal_logistik || 0) },
        ]
      case 'udara':
        return [
          { label: "Jet Stealth", user: (userArmada.udara?.jet_tempur_siluman || 0) + (userDeltas.stealth_jet || 0), target: (targetArmada.udara?.jet_tempur_siluman || 0) + (targetAid.jet_tempur_siluman || 0) },
          { label: "Jet Interceptor", user: (userArmada.udara?.jet_tempur_interceptor || 0) + (userDeltas.interceptor || 0), target: (targetArmada.udara?.jet_tempur_interceptor || 0) + (targetAid.jet_tempur_interceptor || 0) },
          { label: "Pesawat Pengebom", user: (userArmada.udara?.pesawat_pengebom || 0) + (userDeltas.bomber || 0), target: (targetArmada.udara?.pesawat_pengebom || 0) + (targetAid.pesawat_pengebom || 0) },
          { label: "Heli Serang", user: (userArmada.udara?.helikopter_serang || 0) + (userDeltas.heli_attack || 0), target: (targetArmada.udara?.helikopter_serang || 0) + (targetAid.helikopter_serang || 0) },
          { label: "Pesawat Intai", user: (userArmada.udara?.pesawat_pengintai || 0) + (userDeltas.recon_plane || 0), target: (targetArmada.udara?.pesawat_pengintai || 0) + (targetAid.pesawat_pengintai || 0) },
          { label: "Drone UAV", user: (userArmada.udara?.drone_intai_uav || 0) + (userDeltas.uav || 0), target: (targetArmada.udara?.drone_intai_uav || 0) + (targetAid.drone_intai_uav || 0) },
          { label: "Drone Kamikaze", user: (userArmada.udara?.drone_kamikaze || 0) + (userDeltas.kamikaze || 0), target: (targetArmada.udara?.drone_kamikaze || 0) + (targetAid.drone_kamikaze || 0) },
          { label: "Pesawat Angkut", user: (userArmada.udara?.pesawat_angkut || 0) + (userDeltas.transport || 0), target: (targetArmada.udara?.pesawat_angkut || 0) + (targetAid.pesawat_angkut || 0) },
        ]
      case 'total':
        return [
          { label: "Kekuatan Darat", user: userPower.darat, target: targetPower.darat },
          { label: "Kekuatan Laut", user: userPower.laut, target: targetPower.laut },
          { label: "Kekuatan Udara", user: userPower.udara, target: targetPower.udara },
        ]
      default:
        return []
    }
  }

  return (
    <div className="absolute inset-0 bg-black/70 backdrop-blur-md z-[200] flex items-center justify-center p-4 animate-in fade-in duration-300">
      <div className="bg-zinc-950 border border-zinc-800 rounded-[40px] w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl flex flex-col relative">
        {/* Header */}
        <div className="px-10 py-8 border-b border-zinc-800/50 flex items-center justify-between bg-zinc-900/30">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-rose-500/10 rounded-2xl border border-rose-500/20 text-rose-500">
              <Swords size={32} />
            </div>
            <div>
              <h2 className="text-3xl font-black text-white tracking-tight italic uppercase">Analisis Kekuatan Perang</h2>
              <p className="text-xs text-zinc-500 font-bold uppercase tracking-[0.2em] mt-1">Strategic War Capability Comparison</p>
            </div>
          </div>
          <button onClick={onClose} className="p-3 rounded-2xl bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-zinc-500 hover:text-white transition-all cursor-pointer">
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-10 no-scrollbar space-y-12">
          {/* Top Comparison Summary */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
            {/* User Country */}
            <div className="flex flex-col items-center gap-4 p-8 bg-cyan-500/5 border border-cyan-500/20 rounded-[32px] relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                  <ShieldAlert size={120} className="text-cyan-500" />
               </div>
               <span className="text-[10px] font-black text-cyan-500 uppercase tracking-[0.3em] mb-2 border border-cyan-500/30 px-4 py-1 rounded-full">Kekuatan Nasional</span>
               <h3 className="text-4xl font-black text-white uppercase italic tracking-tighter text-center">{userCountryData.name_id || userCountryData.name_en}</h3>
               <div className="flex items-baseline gap-2 mt-4">
                  <span className="text-5xl font-black text-white tracking-tighter tabular-nums">{userPower.total.toLocaleString()}</span>
                  <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Power Score</span>
               </div>
            </div>

            {/* VS Badge */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:flex items-center justify-center">
              <div className="w-16 h-16 bg-zinc-950 border-4 border-zinc-900 rounded-full flex items-center justify-center shadow-2xl">
                <span className="text-2xl font-black text-rose-500 italic">VS</span>
              </div>
            </div>

            {/* Target Country */}
            <div className="flex flex-col items-center gap-4 p-8 bg-rose-500/5 border border-rose-500/20 rounded-[32px] relative overflow-hidden group">
               <div className="absolute top-0 left-0 p-4 opacity-10 group-hover:scale-110 transition-transform -scale-x-100">
                  <Target size={120} className="text-rose-500" />
               </div>
               <span className="text-[10px] font-black text-rose-500 uppercase tracking-[0.3em] mb-2 border border-rose-500/30 px-4 py-1 rounded-full">Target Operasi</span>
               <h3 className="text-4xl font-black text-white uppercase italic tracking-tighter text-center">{targetCountryData.name}</h3>
               <div className="flex items-baseline gap-2 mt-4">
                  <span className="text-5xl font-black text-white tracking-tighter tabular-nums">{targetPower.total.toLocaleString()}</span>
                  <span className="text-xs font-bold text-rose-400 uppercase tracking-widest">Power Score</span>
               </div>
            </div>
          </div>

          {/* Detailed Breakdown */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-zinc-800"></div>
              <span className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.4em] whitespace-nowrap">Perbandingan Armada Tempur</span>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-zinc-800"></div>
            </div>

            {comparisonItems.map((item) => {
              const total = item.user + item.target || 1
              const userWidth = (item.user / total) * 100
              const targetWidth = (item.target / total) * 100
              const isUserStronger = item.user >= item.target
              const isExpanded = expandedCategory === item.id

              return (
                <div key={item.id} className="bg-zinc-900/40 border border-zinc-800/50 p-6 rounded-3xl hover:bg-zinc-800/40 transition-all">
                  <div className="flex items-center justify-between mb-6 relative">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-xl bg-zinc-950/80 border border-zinc-800/50`}>
                        <item.icon size={20} className={item.color === 'rose' ? 'text-rose-500' : item.color === 'amber' ? 'text-amber-500' : item.color === 'cyan' ? 'text-cyan-500' : 'text-violet-500'} />
                      </div>
                      <span className="text-lg font-black text-white uppercase italic tracking-tight whitespace-nowrap">{item.label}</span>
                    </div>

                    {/* Info Detail Button Integrated in Center */}
                    <button 
                      onClick={() => setExpandedCategory(isExpanded ? null : item.id)}
                      className={`p-2 rounded-xl border transition-all cursor-pointer shadow-lg ${isExpanded ? 'bg-amber-500 border-amber-500 text-black font-black scale-110' : 'bg-zinc-950 border-zinc-800 text-zinc-500 hover:text-white hover:border-zinc-500 hover:scale-110 active:scale-95'}`}
                      title="Lihat Detail Satuan"
                    >
                      <Info size={18} />
                    </button>

                    {isUserStronger ? (
                       <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest flex items-center gap-2 whitespace-nowrap">
                         <TrendingUp size={14} /> Keunggulan Nasional
                       </span>
                    ) : (
                       <span className="text-[10px] font-black text-rose-400 uppercase tracking-widest flex items-center gap-2 whitespace-nowrap">
                         <TrendingDown size={14} /> Ancaman Target
                       </span>
                    )}
                  </div>

                  <div className="space-y-4">
                    <div className="h-6 w-full bg-zinc-950 rounded-2xl border border-zinc-800 overflow-hidden flex relative group/bar">
                      {/* User Portion */}
                      <div 
                        className="h-full bg-gradient-to-r from-cyan-600 to-cyan-400 transition-all duration-1000 relative" 
                        style={{ width: `${userWidth}%` }}
                      >
                        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover/bar:opacity-100 transition-opacity"></div>
                      </div>
                      
                      {/* Divider / Gap */}
                      <div className="w-px h-full bg-zinc-950 z-10"></div>

                      {/* Target Portion */}
                      <div 
                        className="h-full bg-gradient-to-l from-rose-600 to-rose-400 transition-all duration-1000 relative" 
                        style={{ width: `${targetWidth}%` }}
                      >
                        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover/bar:opacity-100 transition-opacity"></div>
                      </div>

                      {/* 50% Marker */}
                      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 z-20"></div>
                    </div>

                    <div className="flex items-center justify-between px-2">
                       <div className="flex flex-col">
                          <span className="text-[10px] font-black text-cyan-500 uppercase tracking-widest">Nasional</span>
                          <div className="flex items-baseline gap-2">
                            <span className="text-xl font-black text-white tabular-nums">{item.user.toLocaleString()}</span>
                            <span className="text-[10px] font-bold text-zinc-500">{userWidth.toFixed(1)}%</span>
                          </div>
                       </div>
                       
                       <div className="text-center bg-zinc-950/50 border border-zinc-800 px-4 py-1 rounded-full">
                          <span className="text-[10px] font-black text-white uppercase tracking-[0.2em]">
                             {Math.abs(userWidth - targetWidth).toFixed(1)}% {userWidth > targetWidth ? "Margin" : "Defisit"}
                          </span>
                       </div>

                       <div className="flex flex-col items-end">
                          <span className="text-[10px] font-black text-rose-500 uppercase tracking-widest">Target</span>
                          <div className="flex items-baseline gap-2">
                            <span className="text-[10px] font-bold text-zinc-500">{targetWidth.toFixed(1)}%</span>
                            <span className="text-xl font-black text-white tabular-nums">{item.target.toLocaleString()}</span>
                          </div>
                       </div>
                    </div>
                  </div>

                  {/* Expanded Detail View */}
                  {isExpanded && (
                    <div className="mt-8 pt-8 border-t border-zinc-800/50 space-y-2 animate-in slide-in-from-top-4 duration-500">
                      {/* Table Header */}
                      <div className="grid grid-cols-[1fr_120px_120px] gap-4 px-6 mb-4">
                        <span className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em]">Jenis Satuan</span>
                        <span className="text-[10px] font-black text-cyan-500 uppercase tracking-[0.2em] text-center">Nasional</span>
                        <span className="text-[10px] font-black text-rose-500 uppercase tracking-[0.2em] text-center">Target</span>
                      </div>
                      
                      {/* Table Rows */}
                      <div className="space-y-1">
                        {getDetailData(item.id).map((detail, idx) => (
                          <div 
                            key={idx} 
                            className={`grid grid-cols-[1fr_120px_120px] gap-4 px-6 py-4 rounded-2xl border transition-all hover:bg-zinc-900/60 group/row ${
                              idx % 2 === 0 ? 'bg-zinc-950/30 border-transparent' : 'bg-transparent border-transparent'
                            }`}
                          >
                            <span className="text-xs font-bold text-zinc-400 uppercase tracking-wide group-hover/row:text-white transition-colors">
                              {detail.label}
                            </span>
                            <div className="flex justify-center">
                              <span className={`text-sm font-black tabular-nums py-1 px-3 rounded-lg ${
                                detail.user > detail.target ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' : 'text-white'
                              }`}>
                                {detail.user.toLocaleString()}
                              </span>
                            </div>
                            <div className="flex justify-center">
                              <span className={`text-sm font-black tabular-nums py-1 px-3 rounded-lg ${
                                detail.target > detail.user ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20' : 'text-white'
                              }`}>
                                {detail.target.toLocaleString()}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Strategic Warning */}
          <div className={`p-8 rounded-[32px] border flex items-center gap-6 ${
            userPower.total > targetPower.total 
              ? "bg-emerald-500/5 border-emerald-500/20" 
              : "bg-rose-500/5 border-rose-500/20"
          }`}>
            <div className={`p-4 rounded-2xl ${userPower.total > targetPower.total ? 'bg-emerald-500/10 text-emerald-500' : 'bg-rose-500/10 text-rose-500'}`}>
              <Info size={32} />
            </div>
            <div>
              <h4 className={`text-xl font-black uppercase italic ${userPower.total > targetPower.total ? 'text-emerald-400' : 'text-rose-400'}`}>
                {userPower.total > targetPower.total ? "Estimasi Kemenangan Tinggi" : "Peringatan: Risiko Kekalahan"}
              </h4>
              <p className="text-xs text-zinc-500 font-bold uppercase tracking-widest mt-1 leading-relaxed">
                {userPower.total > targetPower.total 
                  ? "Pasukan nasional memiliki keunggulan daya tempur yang signifikan dibandingkan target. Perang dapat diinisiasi." 
                  : "Kekuatan militer target melampaui kapasitas pertahanan nasional. Disarankan untuk memperkuat armada sebelum deklarasi perang."}
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-10 py-8 border-t border-zinc-800/50 bg-zinc-900/30 flex items-center gap-4">
          <button 
            onClick={onClose}
            className="flex-1 py-5 rounded-2xl border border-zinc-800 text-zinc-500 hover:text-white hover:bg-zinc-800 font-black uppercase tracking-[0.3em] transition-all cursor-pointer shadow-lg active:scale-[0.98]"
          >
            Tarik Mundur
          </button>
          <button 
            onClick={() => {
              if (onConfirmWar) {
                const targetName = targetCountryData.name_id || targetCountryData.name_en || targetCountryData.name;
                onConfirmWar(targetName.toLowerCase());
              }
            }}
            className="flex-[2] py-5 rounded-2xl bg-rose-600 hover:bg-rose-500 text-white font-black uppercase tracking-[0.3em] transition-all cursor-pointer shadow-xl shadow-rose-900/20 active:scale-[0.98] flex items-center justify-center gap-3"
          >
            <Swords size={20} />
            Konfirmasi Perang
          </button>
        </div>
      </div>
    </div>
  )
}
