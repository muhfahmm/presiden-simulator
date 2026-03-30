"use client"

import { useState, useEffect } from "react"
import { X, Shield, BookOpen, Scale, Landmark, Activity, Users, Coins, Heart, Handshake, Flag, Crown, Info, Plus, Minus, CheckCircle2, ChevronRight } from "lucide-react"
import { ideologies } from "@/app/database/data/ideologies"
import NavigasiWaktu from "../../2_ekonomi/1-perdagangan/NavigasiWaktu";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  countryData: any;
}

const ideologyEffects: Record<string, { plus: string[]; minus: string[] }> = {
  "Demokrasi": {
    plus: ["Approval Rating +30%", "Investasi Asing (FDI) +20%"],
    minus: ["Biaya Politik (UU) +50%", "Kecepatan Pengambilan Keputusan -30%"]
  },
  "Komunisme": {
    plus: ["Biaya Produksi Pabrik -30%", "Pengangguran 0%"],
    minus: ["Daily Revenue (Pajak Swasta) -50%", "Inovasi Teknologi -20%"]
  },
  "Kapitalisme": {
    plus: ["Pertumbuhan Kas Negara +35%", "Kecepatan Pembangunan +20%"],
    minus: ["Kesenjangan Sosial +25%", "Happiness Index Warga Bawah -15%"]
  },
  "Sosialisme": {
    plus: ["Health Score +20%", "Pendidikan +15%", "Kesejahteraan Bawah +20%"],
    minus: ["Beban APBN (Biaya Harian) +30%", "Kecepatan Akumulasi Kas -15%"]
  },
  "Liberalisme": {
    plus: ["Kebebasan Pers +40%", "Pertumbuhan Sektor Jasa/Komersial +25%"],
    minus: ["Kriminalitas +10%", "Stabilitas Nasional sulit dijaga (Protes Mudah Terjadi)"]
  },
  "Konservatisme": {
    plus: ["Stabilitas Politik +20%", "Ketahanan Budaya +15%"],
    minus: ["Kecepatan Perubahan UU -40%", "Hubungan dengan Kaum Muda -15%"]
  },
  "Nasionalisme": {
    plus: ["Damage Unit Militer +20%", "Efektivitas UU Mandiri +15%"],
    minus: ["Harga Barang Impor +25%", "Hubungan Diplomasi Luar Negeri -20%"]
  },
  "Monarki": {
    plus: ["Pengambilan Keputusan Instan (Tanpa Delay)", "Loyalitas Pejabat +30%"],
    minus: ["Biaya Perawatan Istana (APBN) +20%", "Jika Raja Tidak Populer, Risiko Revolusi +50%"]
  }
};

const icons: Record<string, any> = {
  "Demokrasi": Users,
  "Komunisme": Shield,
  "Kapitalisme": Coins,
  "Sosialisme": Heart,
  "Liberalisme": Handshake,
  "Konservatisme": Shield,
  "Nasionalisme": Flag,
  "Monarki": Crown
};

function IdeologyCard({ ideology, isActive, countryData }: { ideology: string; isActive: boolean; countryData: any }) {
  const [showInfo, setShowInfo] = useState(false);
  const [showEffectDetail, setShowEffectDetail] = useState(false);
  const [selectedEffect, setSelectedEffect] = useState("");
  const Icon = icons[ideology] || Landmark;
  const effects = ideologyEffects[ideology];

  return (
    <div
      className={`relative p-6 rounded-3xl border transition-all group overflow-hidden h-[280px] flex flex-col ${isActive
          ? "bg-cyan-500/10 border-cyan-500 shadow-[0_0_30px_rgba(6,182,212,0.1)]"
          : "bg-zinc-900/40 border-zinc-800 hover:border-zinc-700"
        }`}
    >
      <div className={`absolute -top-10 -right-10 w-32 h-32 blur-3xl rounded-full transition-opacity ${isActive ? "bg-cyan-500/10 opacity-100" : "bg-white/5 opacity-0 group-hover:opacity-100"}`}></div>

      {/* Content */}
      <div className="flex flex-col gap-4 relative z-10 h-full">
        <div className="flex justify-between items-start">
          <div className={`p-3 rounded-2xl ${isActive ? "bg-cyan-500 text-black" : "bg-zinc-800 text-zinc-400 group-hover:text-white transition-colors"}`}>
            <Icon className="h-6 w-6" />
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setShowInfo(true)}
              className="p-2 bg-white/5 hover:bg-white/10 border border-white/5 rounded-xl transition-all active:scale-90 cursor-pointer"
            >
              <Info className="h-4 w-4 text-zinc-400 group-hover:text-white" />
            </button>
            {isActive && (
              <div className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/30 rounded-full">
                <span className="text-[9px] font-black text-cyan-400 uppercase tracking-widest">Aktif</span>
              </div>
            )}
          </div>
        </div>

        <div className="space-y-1">
          <h3 className="text-xl font-black text-white uppercase tracking-tight italic">{ideology}</h3>
          <p className="text-[11px] text-zinc-500 font-medium leading-tight">Haluan filosofi dan sistem pemerintahan negara.</p>
        </div>

        <div className="mt-auto pt-2 border-t border-white/5">
          {!isActive ? (
            <button 
              className="w-full py-2.5 bg-zinc-800/50 hover:bg-cyan-500/20 border border-white/5 hover:border-cyan-500/30 rounded-xl text-[10px] font-black text-zinc-400 hover:text-cyan-400 uppercase tracking-[0.2em] transition-all cursor-pointer group/btn flex items-center justify-center gap-2"
            >
              <span>Ganti</span>
              <Plus className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          ) : (
            <div className="w-full py-2.5 bg-cyan-500/10 border border-cyan-500/20 rounded-xl text-[10px] font-black text-cyan-400 uppercase tracking-[0.2em] flex items-center justify-center gap-2">
              <CheckCircle2 className="h-3 w-3" />
              <span>Haluan Aktif</span>
            </div>
          )}
        </div>
      </div>

      {/* Info Overlay (Inside Card) */}
      {showInfo && (
        <div className="absolute inset-0 z-20 bg-zinc-950/95 backdrop-blur-md p-6 flex flex-col animate-in slide-in-from-bottom-2 duration-300">
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-[10px] font-black text-cyan-400 uppercase tracking-widest italic">{ideology} Effects</h4>
            <button onClick={() => setShowInfo(false)} className="p-1.5 hover:bg-white/5 rounded-lg transition-colors cursor-pointer">
              <X className="h-4 w-4 text-zinc-500" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto flex gap-4 pr-1 custom-scrollbar mt-2">
            <div className="flex-1 space-y-2">
              {effects.plus.map((eff, i) => (
                <div 
                  key={i} 
                  className="flex items-center gap-2 group/eff cursor-pointer hover:bg-white/5 p-2 -mx-2 rounded-xl transition-all"
                  onClick={() => {
                    setSelectedEffect(eff);
                    setShowEffectDetail(true);
                  }}
                >
                  <div className="p-1 bg-emerald-500/20 rounded-lg shrink-0">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  </div>
                  <span className="text-[16px] font-bold text-zinc-100 leading-tight tracking-tight flex-1">{eff}</span>
                  <ChevronRight className="h-4 w-4 text-zinc-600 group-hover/eff:text-emerald-400 transition-colors" />
                </div>
              ))}
            </div>

            <div className="flex-1 space-y-2 border-l border-white/5 pl-4">
              {effects.minus.map((eff, i) => (
                <div 
                  key={i} 
                  className="flex items-center gap-2 group/eff cursor-pointer hover:bg-white/5 p-2 -mx-2 rounded-xl transition-all"
                  onClick={() => {
                    setSelectedEffect(eff);
                    setShowEffectDetail(true);
                  }}
                >
                  <div className="p-1 bg-rose-500/20 rounded-lg shrink-0">
                    <X className="h-4 w-4 text-rose-500" />
                  </div>
                  <span className="text-[16px] font-bold text-zinc-100 leading-tight tracking-tight flex-1">{eff}</span>
                  <ChevronRight className="h-4 w-4 text-zinc-600 group-hover/eff:text-rose-400 transition-colors" />
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => setShowInfo(false)}
            className="mt-4 w-full py-2 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/20 rounded-xl text-[9px] font-black text-cyan-400 uppercase tracking-widest transition-all cursor-pointer"
          >
            Tutup Info
          </button>
        </div>
      )}

      {/* Effect Detail Placeholder Modal */}
      {showEffectDetail && (
        <div className="absolute inset-0 z-30 bg-zinc-950 flex flex-col p-6 animate-in zoom-in-95 duration-200">
          <div className="flex justify-between items-center mb-6">
            <h4 className="text-[10px] font-black text-cyan-400 uppercase tracking-widest italic">Detail Efek Ideologi</h4>
            <button onClick={() => setShowEffectDetail(false)} className="p-1.5 hover:bg-white/5 rounded-lg transition-colors cursor-pointer">
              <X className="h-4 w-4 text-zinc-500" />
            </button>
          </div>
          
          <div className="flex-1 flex flex-col items-center justify-center text-center space-y-6">
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-500/20 blur-2xl rounded-full"></div>
              <div className="relative p-6 bg-cyan-500/10 rounded-[32px] border border-cyan-500/20 shadow-2xl">
                <Info className="h-10 w-10 text-cyan-400" />
              </div>
            </div>
            
            <div className="space-y-2 max-w-[200px]">
              <h5 className="text-xl font-black text-white italic uppercase tracking-tighter leading-tight drop-shadow-sm">{selectedEffect}</h5>
              <div className="h-px w-12 bg-zinc-800 mx-auto"></div>
              <p className="text-[11px] text-zinc-500 font-medium leading-relaxed">Analisis mendalam mengenai implikasi politik dan fundamental ideologi dari efek ini sedang dalam tahap pengembangan.</p>
            </div>
          </div>

          <button
            onClick={() => setShowEffectDetail(false)}
            className="w-full py-4 bg-zinc-900 hover:bg-zinc-800 border border-white/5 rounded-2xl text-[10px] font-black text-white uppercase tracking-[0.2em] transition-all cursor-pointer active:scale-95 shadow-xl"
          >
            Kembali Ke Dashboard
          </button>
        </div>
      )}
    </div>
  );
}

export default function IdeologiModal({ isOpen, onClose, countryData }: ModalProps) {
  if (!isOpen) return null;

  const currentIdeology = countryData?.ideology || "Demokrasi";

  return (
    <div className="absolute inset-0 bg-black/85 z-50 flex items-center justify-center animate-in fade-in duration-300 p-4 md:p-8">
      <div className="bg-zinc-950 border border-zinc-800 rounded-[40px] w-full max-w-[95vw] h-[92vh] overflow-hidden shadow-2xl flex flex-col relative animate-in zoom-in-95 duration-500">

        {/* Glow Effects */}
        <div className="absolute top-0 left-1/4 w-1/2 h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent blur-sm"></div>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px]"></div>

        {/* Header */}
        <div className="px-8 py-6 border-b border-zinc-800/50 flex items-center justify-between bg-zinc-900/30">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-cyan-500/10 rounded-xl">
              <Shield className="h-6 w-6 text-cyan-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight">Ideologi Negara</h2>
              <p className="text-xs text-zinc-500 font-medium uppercase tracking-widest mt-0.5">Fondasi Politik dan Haluan Bangsa</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
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

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-10 bg-zinc-950/20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-24">
            {ideologies.map((ideology) => (
              <IdeologyCard
                key={ideology}
                ideology={ideology}
                isActive={ideology === currentIdeology}
                countryData={countryData}
              />
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="px-10 py-6 bg-zinc-900/30 border-t border-zinc-900 flex items-center justify-between backdrop-blur-3xl relative z-10">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-cyan-500/10 border border-cyan-500/20 rounded-full">
              <div className="h-2 w-2 rounded-full bg-cyan-500 animate-pulse" />
              <span className="text-[10px] font-black text-cyan-400 uppercase tracking-widest">Status Politik</span>
            </div>
            <p className="text-xs text-zinc-500 font-medium italic tracking-tight">Kalkulasi stabilitas nasional berdasarkan keselarasan ideologi.</p>
          </div>
          <div className="flex items-center gap-8">
            <div className="flex flex-col items-end">
              <span className="text-[10px] font-black text-zinc-600 uppercase tracking-widest">Haluan Negara</span>
              <span className="text-base font-black tracking-tighter italic text-cyan-400 uppercase">
                {currentIdeology}
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
