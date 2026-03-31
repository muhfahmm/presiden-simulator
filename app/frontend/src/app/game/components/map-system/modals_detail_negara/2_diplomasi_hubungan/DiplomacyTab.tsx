import React, { useState, useEffect } from "react";
import { Landmark, Handshake, Shield, FileText, FlaskConical, Truck, ChevronRight, Hammer, X, Loader2, Briefcase, Ban } from "lucide-react";
import ActionCard from "../shared/ActionCard";
import { embassyStorage, EmbassyStatus } from "./1_kedutaan/logic/embassyStorage";


interface DiplomacyTabProps {
  userCountry: string;
  targetCountry: string;
  targetId: string;
  activeSubTab?: string;
  setActiveMenu: (menu: string) => void;
  relationScore: number;
  relationLabel: string;
  relationColor: string;
}

export default function DiplomacyTab({ 
  userCountry, targetCountry, targetId, activeSubTab, setActiveMenu,
  relationScore, relationLabel, relationColor
}: DiplomacyTabProps) {
  const [embassyStatus, setEmbassyStatus] = useState<EmbassyStatus>('none');
  const [isDevModalOpen, setIsDevModalOpen] = useState(false);
  const [devModalTitle, setDevModalTitle] = useState("");

  useEffect(() => {
    const updateStatus = () => {
      setEmbassyStatus(embassyStorage.getEmbassyStatus(targetCountry));
    };

    updateStatus();
    
    window.addEventListener("embassy_status_updated", updateStatus);
    return () => window.removeEventListener("embassy_status_updated", updateStatus);
  }, [targetCountry]);

  const handleOpenModal = (title: string) => {
    setDevModalTitle(title);
    setIsDevModalOpen(true);
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-3">
        <ActionCard 
          icon={
            embassyStatus === 'building' ? <Loader2 className="h-4 w-4 animate-spin text-amber-500" /> : 
            <Landmark className={`h-4 w-4 ${embassyStatus === 'completed' ? 'text-amber-500' : ''}`} />
          } 
          label={
            embassyStatus === 'none' ? "Kedutaan Besar" : 
            embassyStatus === 'building' ? "Dalam Pembangunan" : 
            <div className="flex items-center justify-center gap-1.5">
              <span className="text-zinc-100">LIHAT KEDUTAAN</span>
              <ChevronRight size={10} className="text-amber-500" />
            </div>
          }
          bg={
            embassyStatus === 'none' ? "from-blue-900/30 to-zinc-900/80" :
            embassyStatus === 'building' ? "from-amber-900/40 to-zinc-900 shadow-[0_0_20px_rgba(245,158,11,0.05)]" :
            "from-emerald-900/40 to-zinc-900 shadow-[0_0_20px_rgba(16,185,129,0.05)]"
          }
          onClick={() => {
            const menuSuffix = embassyStatus === 'completed' ? 'kedutaan_detail' : 'kedutaan';
            setActiveMenu(`CountryModal:${targetId}:diplomasi_hubungan:${menuSuffix}`);
          }}
        />
        <ActionCard 
          icon={<Handshake className="h-4 w-4" />} 
          label="Pakta Non-Agresi"
          bg="from-indigo-900/20 to-zinc-900" 
          disabled={embassyStatus !== 'completed'}
          onClick={() => handleOpenModal('Pakta Non-Agresi')}
        />
        <ActionCard 
          icon={<Shield className="h-4 w-4" />} 
          label="Aliansi Pertahanan"
          bg="from-teal-900/20 to-zinc-900" 
          disabled={embassyStatus !== 'completed'}
          onClick={() => handleOpenModal('Aliansi Pertahanan')}
        />
        <ActionCard 
          icon={<FileText className="h-4 w-4" />} 
          label="Perjanjian Dagang"
          bg="from-amber-900/20 to-zinc-900" 
          disabled={embassyStatus !== 'completed'}
          onClick={() => handleOpenModal('Perjanjian Dagang')}
        />
        <ActionCard 
          icon={<FlaskConical className="h-4 w-4" />} 
          label="Kontrak Penelitian"
          bg="from-cyan-900/20 to-zinc-900" 
          disabled={embassyStatus !== 'completed'}
          onClick={() => handleOpenModal('Kontrak Penelitian')}
        />
        <ActionCard 
          icon={<Truck className="h-4 w-4" />} 
          label="Kirim Pasukan"
          bg="from-sky-900/20 to-zinc-900" 
          disabled={embassyStatus !== 'completed'}
          onClick={() => handleOpenModal('Kirim Pasukan')}
        />
        <ActionCard
          icon={<Briefcase className="h-4 w-4" />}
          label="Lihat Mitra Dagang"
          bg="from-orange-900/30 to-zinc-900/80"
          onClick={() => {
            setActiveMenu(`CountryModal:${targetId}:diplomasi_hubungan:mitra_dagang`);
          }}
        />
        <ActionCard
          icon={<Ban className="h-4 w-4 text-red-400" />}
          label="Sanksi Ekonomi"
          bg="from-red-900/10 to-zinc-900/50"
          disabled={true}
          onClick={() => {}}
        />
      </div>

      {/* Keep other buttons using dev modal for now, or update them later as needed */}
    </>
  );
}
