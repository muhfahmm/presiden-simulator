"use client"

import React, { useState } from "react";
import { Shield, Gift, Heart, AlertTriangle, Lightbulb } from "lucide-react";
import ActionCard from "../shared/ActionCard";

// Import Modular Modals
import BeriTentaraModal from "./1_beri_tentara/BeriTentaraModal";
import KirimHadiahModal from "./2_kirim_hadiah/KirimHadiahModal";
import TingkatkanHubunganModal from "./3_tingkatkan_hubungan/TingkatkanHubunganModal";
import DukungKedaulatanModal from "./4_dukung_kedaulatan/DukungKedaulatanModal";
import MintaBantuanModal from "./5_minta_bantuan/MintaBantuanModal";
import TanamkanIdeologiModal from "./6_tanamkan_ideologi/TanamkanIdeologiModal";

interface AidTabProps {
  targetId: string;
  setActiveMenu: (menu: string) => void;
}

export default function AidTab({ targetId, setActiveMenu }: AidTabProps) {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 gap-3">
        <ActionCard 
          icon={<Shield className="h-4 w-4" />} 
          label="Beri Tentara" 
          bg="from-green-900/30 to-zinc-900" 
          onClick={() => setActiveModal('tentara')}
        />
        <ActionCard 
          icon={<Gift className="h-4 w-4" />} 
          label="Kirim Hadiah" 
          bg="from-pink-900/30 to-zinc-900" 
          onClick={() => setActiveModal('hadiah')}
        />
        <ActionCard 
          icon={<Heart className="h-4 w-4" />} 
          label="Tingkatkan Hubungan" 
          bg="from-red-900/30 to-zinc-900" 
          onClick={() => setActiveMenu(`CountryModal:${targetId}:bantuan_kerjasama:tingkatkan_hubungan`)}
        />
        <ActionCard 
          icon={<Shield className="h-4 w-4" />} 
          label="Dukung Kedaulatan" 
          bg="from-sky-900/30 to-zinc-900" 
          onClick={() => setActiveModal('kedaulatan')}
        />
        <ActionCard 
          icon={<AlertTriangle className="h-4 w-4" />} 
          label="Minta Bantuan" 
          bg="from-orange-900/30 to-zinc-900" 
          onClick={() => setActiveModal('bantuan')}
        />
        <ActionCard 
          icon={<Lightbulb className="h-4 w-4" />} 
          label="Tanamkan Ideologi" 
          bg="from-violet-900/30 to-zinc-900" 
          onClick={() => setActiveModal('ideologi')}
        />
      </div>

      {/* Render Specific Modals */}
      <BeriTentaraModal isOpen={activeModal === 'tentara'} onClose={() => setActiveModal(null)} />
      <KirimHadiahModal isOpen={activeModal === 'hadiah'} onClose={() => setActiveModal(null)} />
      <DukungKedaulatanModal isOpen={activeModal === 'kedaulatan'} onClose={() => setActiveModal(null)} />
      <MintaBantuanModal isOpen={activeModal === 'bantuan'} onClose={() => setActiveModal(null)} />
      <TanamkanIdeologiModal isOpen={activeModal === 'ideologi'} onClose={() => setActiveModal(null)} />
    </>
  );
}
