"use client"

import { useState } from "react";
import { 
  Shield, AlertTriangle, Heart, Landmark, Handshake, 
  FileText, FlaskConical, Truck, Eye, Flame, Zap, Bomb, Gift, Lightbulb, Swords 
} from "lucide-react";

interface StrategyModalProps {
  isOpen: boolean;
  onClose: () => void;
  targetCountry: string | null;
}

export default function StrategyModal({ isOpen, onClose, targetCountry }: StrategyModalProps) {
  const [menuTab, setMenuTab] = useState<'info' | 'diplomacy' | 'military' | 'aid'>('info');

  if (!isOpen || !targetCountry) return null;

  return (
    <div className="absolute inset-0 bg-black/70 z-30 flex items-center justify-center p-4 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#181a1f] border border-zinc-800/80 rounded-2xl w-full max-w-lg flex flex-col gap-0 text-white shadow-2xl relative overflow-hidden">
        
        {/* 1. Modal Header with Flag title structure */}
        <div className="flex justify-between items-center border-b border-zinc-800/80 p-5 bg-zinc-900/40">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🌍</span>
            <div>
              <h2 className="font-bold text-xl text-amber-500">
                {targetCountry}
              </h2>
              <p className="text-xs text-zinc-400">Hubungan: Stabil (Netral)</p>
            </div>
          </div>
          <button 
            onClick={onClose} 
            className="h-8 w-8 rounded-full hover:bg-zinc-800 flex items-center justify-center text-zinc-500 hover:text-white transition cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* 2. Content Views depending on menuTab */}
        <div className="flex-1 p-5 overflow-y-auto">
          {menuTab === 'info' && (
            <div className="space-y-4">
              <div className="bg-zinc-900/70 p-4 rounded-xl border border-zinc-800/50 space-y-3">
                <InfoRow label="Sumber Daya Alam" value="🪵 🪨 🛢️ 🥩" />
                <InfoRow label="Jumlah suara di PBB" value="👍 14" />
                <InfoRow label="Agama Mayoritas" value="📖 Islam" />
                <InfoRow label="Ideologi Negara" value="⚖️ Pasifisme" />
              </div>
              <div className="space-y-2.5">
                <p className="text-xs text-zinc-500 font-semibold">Keseimbangan Pasukan</p>
                <div className="h-3 w-full bg-zinc-800/80 rounded-full overflow-hidden flex border border-zinc-800">
                  <div className="bg-red-500/80 h-full" style={{ width: '60%' }} />
                  <div className="bg-green-500/80 h-full" style={{ width: '40%' }} />
                </div>
                <p className="text-[10px] text-zinc-500 text-center">Tingkat kekuatan merujuk pada dominasi perbatasan total.</p>
              </div>
            </div>
          )}

          {(menuTab === 'diplomacy' || menuTab === 'military' || menuTab === 'aid') && (
            <div className="grid grid-cols-2 gap-3 max-h-[300px]">
              {menuTab === 'diplomacy' ? (
                <>
                  <ActionCard icon={<Landmark className="h-4 w-4" />} label="Kedutaan" bg="from-blue-900/30 to-zinc-900" />
                  <ActionCard icon={<Handshake className="h-4 w-4" />} label="Pakta Non-Agresi" bg="from-indigo-900/30 to-zinc-900" />
                  <ActionCard icon={<Shield className="h-4 w-4" />} label="Aliansi Pertahanan" bg="from-teal-900/30 to-zinc-900" />
                  <ActionCard icon={<FileText className="h-4 w-4" />} label="Perjanjian Dagang" bg="from-amber-900/30 to-zinc-900" />
                  <ActionCard icon={<FlaskConical className="h-4 w-4" />} label="Kontrak Penelitian" bg="from-cyan-900/30 to-zinc-900" />
                  <ActionCard icon={<Truck className="h-4 w-4" />} label="Kirim Pasukan" bg="from-sky-900/30 to-zinc-900" />
                </>
              ) : menuTab === 'military' ? (
                <>
                  <ActionCard icon={<Swords className="h-4 w-4" />} label="Serang Negara" bg="from-red-900/30 to-zinc-900" />
                  <ActionCard icon={<Eye className="h-4 w-4" />} label="Spionase" bg="from-slate-900/30 to-zinc-900" />
                  <ActionCard icon={<Bomb className="h-4 w-4" />} label="Sabotase" bg="from-orange-900/30 to-zinc-900" />
                  <ActionCard icon={<Flame className="h-4 w-4" />} label="Perang Nuklir" bg="from-rose-900/30 to-zinc-900" />
                  <ActionCard icon={<Zap className="h-4 w-4" />} label="Kudeta" bg="from-purple-900/30 to-zinc-900" />
                  <ActionCard icon={<Shield className="h-4 w-4" />} label="Hina" bg="from-stone-900/30 to-zinc-900" />
                </>
              ) : (
                <>
                  <ActionCard icon={<Shield className="h-4 w-4" />} label="Beri Tentara" bg="from-green-900/30 to-zinc-900" />
                  <ActionCard icon={<Gift className="h-4 w-4" />} label="Kirim Hadiah" bg="from-pink-900/30 to-zinc-900" />
                  <ActionCard icon={<Heart className="h-4 w-4" />} label="Tingkatkan Hubungan" bg="from-red-900/30 to-zinc-900" />
                  <ActionCard icon={<Shield className="h-4 w-4" />} label="Dukung Kedaulatan" bg="from-sky-900/30 to-zinc-900" />
                  <ActionCard icon={<AlertTriangle className="h-4 w-4" />} label="Minta Bantuan" bg="from-orange-900/30 to-zinc-900" />
                  <ActionCard icon={<Lightbulb className="h-4 w-4" />} label="Tanamkan Ideologi" bg="from-violet-900/30 to-zinc-900" />
                </>
              )}
            </div>
          )}
        </div>

        {/* 3. Constant Bottom Navigation Tab Bar */}
        <div className="border-t border-zinc-800/80 bg-zinc-900/60 p-3 flex justify-evenly items-center">
          <TabButton icon="📊" active={menuTab === 'info'} onClick={() => setMenuTab('info')} />
          <TabButton icon="🤝" active={menuTab === 'diplomacy'} onClick={() => setMenuTab('diplomacy')} />
          <TabButton icon="⚔️" active={menuTab === 'military'} onClick={() => setMenuTab('military')} />
          <TabButton icon="🎁" active={menuTab === 'aid'} onClick={() => setMenuTab('aid')} />
        </div>

      </div>
    </div>
  );
}

{/* Helper UI Components for Modal Views */}
function InfoRow({ label, value }: { label: string, value: string }) {
  return (
    <div className="flex items-center justify-between border-b border-zinc-800/40 pb-2.5">
      <span className="text-xs text-zinc-400 font-medium">{label}</span>
      <span className="text-xs font-bold text-zinc-200">{value}</span>
    </div>
  );
}

function ActionCard({ icon, label, bg }: { icon: React.ReactNode, label: string, bg: string }) {
  return (
    <button className={`relative flex flex-col items-center justify-center p-3 rounded-xl bg-gradient-to-br border border-zinc-800/80 hover:border-zinc-700/80 transition-all cursor-pointer min-h-[75px] ${bg} hover:brightness-110 shadow-lg`}>
      <div className="text-zinc-300 mb-1.5 p-1 bg-zinc-900/50 rounded-lg border border-zinc-800/40">
        {icon}
      </div>
      <span className="text-[10px] font-bold text-center text-zinc-200 leading-tight">{label}</span>
    </button>
  );
}

function TabButton({ icon, active, onClick }: { icon: string, active: boolean, onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={`p-2.5 rounded-xl transition-all cursor-pointer flex items-center justify-center flex-1 ${
        active 
          ? 'bg-amber-500/80 text-white shadow-md' 
          : 'hover:bg-zinc-800/80 text-zinc-500 hover:text-zinc-200'
      }`}
    >
      <span className="text-lg">{icon}</span>
    </button>
  );
}
