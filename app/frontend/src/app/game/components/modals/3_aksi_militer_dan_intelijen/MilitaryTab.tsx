"use client"

import React, { useState } from "react";
import { Swords, Eye, Bomb, Flame, Zap, Shield, Handshake, Skull } from "lucide-react";
import ActionCard from "../shared/ActionCard";

// Import Modular Modals
import SerangNegaraModal from "./1_serang_negara/SerangNegaraModal";
import SpionaseModal from "./2_spionase/SpionaseModal";
import SabotaseModal from "./3_sabotase/SabotaseModal";
import PerangNuklirModal from "./4_perang_nuklir/PerangNuklirModal";
import KudetaModal from "./5_kudeta/KudetaModal";
import HinaModal from "./6_hina/HinaModal";


interface MilitaryTabProps {
  setActiveMenu: (menu: string) => void;
  targetId: string;
  targetCountry: string;
}

export default function MilitaryTab({ setActiveMenu, targetId, targetCountry }: MilitaryTabProps) {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 gap-3">
        <ActionCard 
          icon={<Swords className="h-4 w-4" />} 
          label="Serang Negara" 
          bg="from-red-900/30 to-zinc-900" 
          onClick={() => setActiveMenu(`Komando Pertahanan:Misi Serangan:${targetId}`)}
        />
        <ActionCard 
          icon={<Eye className="h-4 w-4" />} 
          label="Spionase" 
          bg="from-slate-900/30 to-zinc-900" 
          onClick={() => setActiveMenu('spionase')}
        />
        {/* ... existing Spionase, Sabotase etc cards remain the same ... */}
        <ActionCard 
          icon={<Bomb className="h-4 w-4" />} 
          label="Sabotase" 
          bg="from-orange-900/30 to-zinc-900" 
          onClick={() => setActiveModal('sabotase')}
        />
        <ActionCard 
          icon={<Flame className="h-4 w-4" />} 
          label="Perang Nuklir" 
          bg="from-rose-900/30 to-zinc-900" 
          onClick={() => setActiveModal('nuklir')}
        />
        <ActionCard 
          icon={<Zap className="h-4 w-4" />} 
          label="Kudeta" 
          bg="from-purple-900/30 to-zinc-900" 
          onClick={() => setActiveModal('kudeta')}
        />
        <ActionCard 
          icon={<Skull className="h-4 w-4" />} 
          label="Hina" 
          bg="from-stone-900/30 to-zinc-900" 
          onClick={() => setActiveModal('hina')}
        />
        <ActionCard 
          icon={<Handshake className="h-4 w-4" />} 
          label="Daftar Pakta" 
          bg="from-red-900/40 to-zinc-900" 
          onClick={() => setActiveMenu(`CountryModal:${targetId}:aksi_militer_intelijen:daftar_pakta`)}
        />
        <ActionCard 
          icon={<Shield className="h-4 w-4" />} 
          label="Daftar Aliansi" 
          bg="from-rose-900/40 to-zinc-900" 
          onClick={() => setActiveMenu(`CountryModal:${targetId}:aksi_militer_intelijen:daftar_aliansi`)}
        />
      </div>


      {/* Render Specific Modals */}
      <SpionaseModal isOpen={activeModal === 'spionase'} onClose={() => setActiveModal(null)} />
      <SabotaseModal isOpen={activeModal === 'sabotase'} onClose={() => setActiveModal(null)} />
      <PerangNuklirModal isOpen={activeModal === 'nuklir'} onClose={() => setActiveModal(null)} />
      <KudetaModal isOpen={activeModal === 'kudeta'} onClose={() => setActiveModal(null)} />
      <HinaModal isOpen={activeModal === 'hina'} onClose={() => setActiveModal(null)} />
    </>


  );
}
