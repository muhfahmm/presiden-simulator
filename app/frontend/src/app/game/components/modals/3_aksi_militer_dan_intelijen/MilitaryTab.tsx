"use client"

import React, { useState } from "react";
import { Swords, Eye, Bomb, Flame, Zap, Shield, Handshake, Skull, Radiation } from "lucide-react";
import ActionCard from "../shared/ActionCard";
import { countries } from "@/app/pilih_negara/data/semua_fitur_negara/0_profiles/index";
import { aiBuildingStorage } from "@/app/game/components/AI_logic/5_AI_Pembangunan/antarmuka_data_pembangunan/AIBuildingStorage";
import { buildingStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/3_pembangunan/buildingStorage";
import { getNormalizedUser } from "@/app/game/components/modals/1_info_strategis/8_Hubungan/RelationMatrix";

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

  const country = countries.find(c => c.name_id.toLowerCase() === targetId.toLowerCase());
  const nuclearData = country?.militer_strategis;
  const isUser = targetId.toLowerCase() === getNormalizedUser().toLowerCase();

  const getNuclearStatus = () => {
    if (!nuclearData) return "Tidak Ada";
    
    // Check construction queue
    const queue = isUser ? buildingStorage.getQueue() : aiBuildingStorage.getQueue(country?.name_en || "");
    const inQueue = queue.some(item => item.buildingKey === 'program_nuklir');
    
    if (inQueue) return "Pembangunan";
    if (nuclearData.status_nuklir) {
      const count = nuclearData.operasi_strategis?.misil_nuklir || 0;
      return count > 0 ? `Aktif (${count.toLocaleString()})` : "Capabilitas Aktif";
    }
    if ((nuclearData.operasi_strategis?.program_nuklir || 0) > 0) return "Tersedia";
    
    return "Tidak Ada";
  };

  const nukeStatus = getNuclearStatus();
  const nukeColor = (nukeStatus.includes("Aktif") || nukeStatus.startsWith("Capabilitas")) ? "text-rose-500" : 
                    nukeStatus === "Pembangunan" ? "text-amber-500" : 
                    nukeStatus === "Tersedia" ? "text-emerald-500" : "text-zinc-500";

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
        <ActionCard 
          icon={<Radiation className="h-4 w-4" />} 
          label={
            <div className="flex flex-col items-center">
              <span>Program Nuklir</span>
              <span className={`text-[8px] uppercase tracking-tighter mt-0.5 ${nukeColor}`}>{nukeStatus}</span>
            </div>
          } 
          bg="from-emerald-900/20 to-zinc-900" 
          onClick={() => setActiveModal('nuklir')}
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
