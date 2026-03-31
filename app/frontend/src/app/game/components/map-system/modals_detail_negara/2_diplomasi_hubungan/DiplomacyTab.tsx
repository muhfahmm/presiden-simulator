import React, { useState, useEffect } from "react";
import { Landmark, Handshake, Shield, FileText, FlaskConical, Truck, ChevronRight, Hammer, X } from "lucide-react";
import ActionCard from "../shared/ActionCard";


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
      <div className="grid grid-cols-2 gap-3">
        <ActionCard 
          icon={<Landmark className="h-4 w-4" />} 
          label="Kedutaan"
          bg="from-blue-900/30 to-zinc-900" 
          onClick={() => setActiveMenu(`CountryModal:${targetId}:diplomasi_hubungan:kedutaan`)}
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

      {/* Keep other buttons using dev modal for now, or update them later as needed */}
    </>
  );
}
