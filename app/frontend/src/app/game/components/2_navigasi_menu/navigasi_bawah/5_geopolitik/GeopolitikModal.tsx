"use client"

import { useState } from "react"
import { X, Globe, Users, Handshake, Shield, Globe2, Landmark, Star, BarChart3, HelpingHand, MapPin } from "lucide-react"
import { CountryData } from "@/app/database/data/types/index";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: CountryData;
}

export default function GeopolitikModal({ isOpen, onClose, data }: ModalProps) {
  const [activeTab, setActiveTab] = useState<"hub" | "diplomacy" | "treaties">("hub");
  if (!isOpen) return null;

  const sections = [
    {
      title: "Perserikatan Bangsa-Bangsa",
      icon: Shield,
      items: [
        { label: "Resolusi PBB", desc: "Rancangan resolusi & embargo" },
        { label: "Sanksi Internasional", desc: "Ekonomi, militer, & politik" },
        { label: "Dewan Keamanan", desc: "Hak veto & keanggotaan" },
        { label: "Organisasi PBB", desc: "WHO, IMF, Bank Dunia, UNESCO" }
      ]
    },
    {
      title: "Organisasi Regional & Global",
      icon: Users,
      items: [
        { label: "Blok Kawasan", desc: "ASEAN, Uni Eropa, Uni Afrika" },
        { label: "Aliansi Strategis", desc: "NATO, BRICS, QUAD" },
        { label: "Blok Ekonomi", desc: "OPEC, G20, APEC" }
      ]
    },
    {
      title: "Hubungan Diplomatik",
      icon: Handshake,
      items: [
        { label: "Tingkat Hubungan", desc: "Diplomatik, militer, & budaya" },
        { label: "Program Bantuan", desc: "Hibah teknologi & sumber daya" },
        { label: "Sosial Budaya", desc: "Agama & ideologi dunia" }
      ]
    }
  ];

  return (
    <div className="absolute inset-0 bg-black/80 z-50 flex items-center justify-center animate-in fade-in duration-200 p-8">
      <div className="bg-zinc-950 border border-zinc-800 rounded-3xl w-full max-w-5xl h-[85vh] overflow-hidden shadow-2xl flex flex-col">
        {/* Header */}
        <div className="px-8 py-6 border-b border-zinc-800/50 flex items-center justify-between bg-zinc-900/40">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-indigo-500/10 rounded-xl">
              <Globe className="h-6 w-6 text-indigo-500" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight">Geopolitik & Luar Negeri</h2>
              <p className="text-xs text-zinc-500 font-medium uppercase tracking-widest mt-0.5">Global Strategic Hub • {data.name_id}</p>
            </div>
          </div>

          {/* Tab Switcher */}
          <div className="flex gap-2 p-1.5 bg-zinc-900/80 rounded-2xl border border-zinc-800/50">
            {(["hub", "diplomacy", "treaties"] as const).map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all cursor-pointer ${
                  activeTab === tab 
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/20" 
                    : "text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/50"
                }`}
              >
                {tab === "hub" ? "Strategic Hub" : tab === "diplomacy" ? "Diplomacy & Orgs" : "Treaties & Pacts"}
              </button>
            ))}
          </div>

          <button onClick={onClose} className="p-2 mr-4 rounded-xl hover:bg-zinc-800 transition-all text-zinc-400 hover:text-white cursor-pointer group">
            <X className="h-6 w-6 group-hover:rotate-90 transition-transform" />
          </button>
        </div>
        
        {/* Content */}
        <div className="flex-1 overflow-y-auto p-8 no-scrollbar bg-[radial-gradient(circle_at_50%_0%,_rgba(79,70,229,0.08),_transparent_50%)]">
          
          {activeTab === "hub" && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              {sections.map((section, idx) => (
                <div key={idx} className="flex flex-col gap-6">
                  <div className="flex items-center gap-3 border-l-2 border-indigo-500/40 pl-4">
                    <section.icon className="h-4.5 w-4.5 text-indigo-400" />
                    <h3 className="text-xs font-black text-zinc-100 uppercase tracking-[0.2em]">{section.title}</h3>
                  </div>
                  
                  <div className="space-y-3">
                    {section.items.map((item, i) => (
                      <button key={i} className="w-full flex items-start gap-4 p-4 bg-zinc-900/40 border border-zinc-800/50 hover:border-indigo-500/40 hover:bg-zinc-800/40 rounded-2xl transition-all group text-left cursor-pointer shadow-inner">
                        <div className="mt-1 h-2 w-2 rounded-full bg-indigo-500 group-hover:scale-125 transition-transform shadow-[0_0_8px_rgba(99,102,241,0.5)]"></div>
                        <div>
                          <h4 className="text-[12px] font-black text-zinc-200 mb-1 group-hover:text-indigo-400 transition-colors uppercase tracking-tight">{item.label}</h4>
                          <p className="text-[10px] text-zinc-500 font-medium leading-relaxed">{item.desc}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "diplomacy" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              {/* International Influence Stats */}
              <div className="bg-zinc-900/40 border border-zinc-800/50 rounded-3xl p-8 flex flex-col gap-8 shadow-inner">
                <div className="flex items-center gap-3">
                  <BarChart3 className="h-5 w-5 text-indigo-400" />
                  <h3 className="text-sm font-black text-zinc-100 uppercase tracking-widest">Global Influence Index</h3>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <InfluenceMeter label="Soft Power" value={data.geopolitik.pengaruh_internasional.kekuatan_lunak} color="from-blue-500 to-indigo-500" icon={<Star size={14}/>} description="Diplomasi, Budaya, & Ekonomi" />
                  <InfluenceMeter label="Hard Power" value={data.geopolitik.pengaruh_internasional.kekuatan_keras} color="from-red-500 to-orange-500" icon={<Shield size={14}/>} description="Kekuatan Militer & Geostrategis" />
                </div>

                <div className="p-6 bg-indigo-500/5 border border-indigo-500/10 rounded-2xl">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">Diplomatic Prestige</span>
                    <span className="text-xl font-black text-indigo-400">{data.geopolitik.pengaruh_internasional.prestise_diplomatik} IX</span>
                  </div>
                  <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full bg-indigo-500 transition-all duration-1000" style={{ width: `${data.geopolitik.pengaruh_internasional.prestise_diplomatik}%` }} />
                  </div>
                  <p className="text-[10px] text-zinc-500 mt-2 italic font-medium">Pengaruh global Anda sangat bergantung pada kepercayaan internasional dan stabilitas aliansi.</p>
                </div>
              </div>

              {/* Membership List */}
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Landmark className="h-5 w-5 text-indigo-400" />
                    <h3 className="text-sm font-black text-zinc-100 uppercase tracking-widest">Organisasi Internasional</h3>
                  </div>
                  <span className="text-[10px] font-black text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">{data.geopolitik.organisasi_internasional.length} GRUP</span>
                </div>

                <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2 no-scrollbar">
                  {data.geopolitik.organisasi_internasional.map((org, i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-zinc-900/60 border border-zinc-800 rounded-2xl hover:border-indigo-500/30 transition-all group shadow-inner">
                      <div className="flex items-center gap-4">
                        <div className="p-2 bg-zinc-800 rounded-xl group-hover:bg-indigo-500/10 transition-colors">
                          <Globe2 className="h-5 w-5 text-zinc-500 group-hover:text-indigo-400 transition-colors" />
                        </div>
                        <div>
                          <p className="text-sm font-black text-zinc-100 uppercase tracking-tight">{org.name}</p>
                          <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">{org.role}</p>
                        </div>
                      </div>
                      <div className={`h-2 w-2 rounded-full ${org.role === 'Pemimpin' ? 'bg-amber-400 animate-pulse' : 'bg-zinc-700'}`}></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "treaties" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              {/* Active Agreements */}
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <Handshake className="h-5 w-5 text-indigo-400" />
                  <h3 className="text-sm font-black text-zinc-100 uppercase tracking-widest">Perjanjian Aktif</h3>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  {data.geopolitik.perjanjian?.map((agr, i) => (
                    <div key={i} className="p-5 bg-zinc-900/40 border border-zinc-800 rounded-3xl hover:border-indigo-500/40 transition-all flex flex-col gap-4 group shadow-inner">
                      <div className="flex items-center justify-between">
                        <div className="flex items-baseline gap-2">
                          <span className="text-xs font-black text-zinc-400 uppercase">Partner:</span>
                          <span className="text-lg font-black text-white group-hover:text-indigo-400 transition-colors">{agr.mitra}</span>
                        </div>
                        <span className={`text-[10px] font-black px-3 py-1 rounded-full border ${
                          agr.jenis === 'Militer' ? 'bg-red-500/10 text-red-400 border-red-500/20' : 
                          agr.jenis === 'Perdagangan' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 
                          'bg-indigo-500/10 text-indigo-400 border-indigo-500/20'
                        } uppercase tracking-widest`}>{agr.jenis} Pact</span>
                      </div>
                      <div className="flex items-center justify-between pt-2 border-t border-zinc-800/50">
                        <div className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                          <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">{agr.status}</span>
                        </div>
                        <div className="flex -space-x-2">
                          {[1, 2, 3].map(j => (
                            <div key={j} className="h-6 w-6 rounded-full border-2 border-zinc-900 bg-zinc-800 flex items-center justify-center">
                              <span className="text-[10px] font-bold text-zinc-500">?</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bilateral Relations Status */}
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-indigo-400" />
                  <h3 className="text-sm font-black text-zinc-100 uppercase tracking-widest">Relasi Bilateral</h3>
                </div>
                <div className="bg-zinc-900/40 border border-zinc-800/50 rounded-3xl p-6 shadow-inner">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-[10px] font-black text-emerald-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                        <HelpingHand size={12}/> Sekutu Strategis
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {data.geopolitik.sekutu.map((a, i) => (
                          <span key={i} className="px-4 py-2 bg-emerald-500/5 border border-emerald-500/20 rounded-xl text-xs font-bold text-zinc-200 hover:border-emerald-500/40 transition-all cursor-pointer">
                            {a}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-[10px] font-black text-red-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                        <Users size={12}/> Rival Geopolitik
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {data.geopolitik.musuh && data.geopolitik.musuh.length > 0 ? data.geopolitik.musuh.map((e, i) => (
                          <span key={i} className="px-4 py-2 bg-red-500/5 border border-red-500/20 rounded-xl text-xs font-bold text-zinc-200 hover:border-red-500/40 transition-all cursor-pointer">
                            {e}
                          </span>
                        )) : (
                          <span className="text-[10px] text-zinc-600 italic">Tidak ada rivalitas terbuka saat ini.</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Summary Overlay */}
        <div className="mt-auto px-8 py-6 border-t border-zinc-800/50 flex items-center justify-around bg-zinc-900/30">
          <div className="text-center group cursor-pointer">
            <p className="text-[9px] text-zinc-500 font-black uppercase tracking-widest mb-1 group-hover:text-zinc-400 transition-colors">Status Internasional</p>
            <p className="text-lg font-black text-indigo-400 uppercase tracking-tighter">
              {data.geopolitik.pengaruh_internasional.prestise_diplomatik > 70 ? "NEGARA BERPENGARUH" : 
               data.geopolitik.pengaruh_internasional.prestise_diplomatik > 40 ? "PEMAIN REGIONAL" : "NEGARA BERKEMBANG"}
            </p>
          </div>
          <div className="h-8 w-[1px] bg-zinc-800"></div>
          <div className="text-center group cursor-pointer">
            <p className="text-[9px] text-zinc-500 font-black uppercase tracking-widest mb-1 group-hover:text-zinc-400 transition-colors">Anggota Organisasi</p>
            <p className="text-lg font-black text-indigo-400 uppercase tracking-tighter">{data.geopolitik.organisasi_internasional.length} BLOK</p>
          </div>
          <div className="h-8 w-[1px] bg-zinc-800"></div>
          <div className="text-center group cursor-pointer">
            <p className="text-[9px] text-zinc-500 font-black uppercase tracking-widest mb-1 group-hover:text-zinc-400 transition-colors">Peringkat Diplomasi</p>
            <p className="text-lg font-black text-indigo-400 uppercase tracking-tighter">TOP {Math.max(1, 40 - Math.floor(data.geopolitik.pengaruh_internasional.prestise_diplomatik / 2.5))}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function InfluenceMeter({ label, value, color, icon, description }: { label: string, value: number, color: string, icon: React.ReactNode, description: string }) {
  return (
    <div className="flex flex-col gap-3 group">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest group-hover:text-zinc-300 transition-colors flex items-center gap-2">{icon} {label}</span>
        <span className="text-sm font-black text-white">{value}%</span>
      </div>
      <div className="relative h-14 w-full bg-zinc-800/50 rounded-2xl overflow-hidden border border-zinc-800 p-1.5">
        <div 
          className={`h-full rounded-xl bg-gradient-to-r ${color} transition-all duration-1000 shadow-lg`} 
          style={{ width: `${value}%` }}
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-sm px-2">
          <span className="text-[9px] font-black text-white text-center uppercase tracking-tighter leading-none">{description}</span>
        </div>
      </div>
    </div>
  )
}
