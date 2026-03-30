import React, { useState, useEffect } from "react";
import { Landmark, Handshake, Shield, FileText, FlaskConical, Truck, ChevronRight, Hammer, X } from "lucide-react";
import ActionCard from "../shared/ActionCard";


interface DiplomacyTabProps {
  userCountry: string;
  targetCountry: string;
  activeSubTab?: string;
  setActiveMenu: (menu: string) => void;
  relationScore: number;
  relationLabel: string;
  relationColor: string;
}

export default function DiplomacyTab({ 
  userCountry, targetCountry, activeSubTab, setActiveMenu,
  relationScore, relationLabel, relationColor
}: DiplomacyTabProps) {
  const [embassyStatus, setEmbassyStatus] = useState<'none' | 'building' | 'completed'>('none');
  const [isDevModalOpen, setIsDevModalOpen] = useState(false);
  const [devModalTitle, setDevModalTitle] = useState("");

  useEffect(() => {
    setEmbassyStatus('none');
  }, [targetCountry]);

  const handleOpenModal = (title: string) => {
    setDevModalTitle(title);
    setIsDevModalOpen(true);
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-3 max-h-[300px]">
        <ActionCard 
          icon={<Landmark className="h-4 w-4" />} 
          label="Kedutaan"
          bg="from-blue-900/30 to-zinc-900" 
          onClick={() => handleOpenModal('Kedutaan')}
        />
        <ActionCard 
          icon={<Handshake className="h-4 w-4" />} 
          label="Pakta Non-Agresi"
          bg="from-indigo-900/20 to-zinc-900" 
          onClick={() => handleOpenModal('Pakta Non-Agresi')}
        />
        <ActionCard 
          icon={<Shield className="h-4 w-4" />} 
          label="Aliansi Pertahanan"
          bg="from-teal-900/20 to-zinc-900" 
          onClick={() => handleOpenModal('Aliansi Pertahanan')}
        />
        <ActionCard 
          icon={<FileText className="h-4 w-4" />} 
          label="Perjanjian Dagang"
          bg="from-amber-900/20 to-zinc-900" 
          onClick={() => handleOpenModal('Perjanjian Dagang')}
        />
        <ActionCard 
          icon={<FlaskConical className="h-4 w-4" />} 
          label="Kontrak Penelitian"
          bg="from-cyan-900/20 to-zinc-900" 
          onClick={() => handleOpenModal('Kontrak Penelitian')}
        />
        <ActionCard 
          icon={<Truck className="h-4 w-4" />} 
          label="Kirim Pasukan"
          bg="from-sky-900/20 to-zinc-900" 
          onClick={() => handleOpenModal('Kirim Pasukan')}
        />
      </div>

      {/* Local UnderDevelopmentModal - No URL Change */}
      {isDevModalOpen && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#1c1e24] border border-zinc-800/80 rounded-2xl w-full max-w-sm overflow-hidden shadow-2xl relative animate-in zoom-in-95 duration-200">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600"></div>
            
            <div className="p-6 flex flex-col items-center text-center">
              <button 
                onClick={() => setIsDevModalOpen(false)}
                className="absolute top-4 right-4 text-zinc-500 hover:text-zinc-200 transition-colors p-1"
              >
                <X size={18} />
              </button>

              <div className="w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center mb-6 border border-amber-500/20 shadow-[0_0_20px_rgba(245,158,11,0.1)]">
                <Hammer className="h-8 w-8 text-amber-500 animate-pulse" />
              </div>

              <h3 className="text-xl font-bold text-zinc-100 mb-2">{devModalTitle}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                Maaf, fitur ini sedang <span className="text-amber-500 font-semibold italic">dalam proses pengembangan</span>. Nantikan pembaruan selanjutnya!
              </p>

              <button 
                onClick={() => setIsDevModalOpen(false)}
                className="w-full py-3 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-bold rounded-xl transition-all border border-zinc-700/50 hover:border-zinc-600 shadow-lg active:scale-95"
              >
                Mengerti
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
