"use client"

import React, { useState } from "react";
import { Landmark, Handshake, Shield, FileText, FlaskConical, Truck } from "lucide-react";
import ActionCard from "../shared/ActionCard";

// Import Modular Modals
import KedutaanModal from "./1_kedutaan/KedutaanModal";
import PaktaNonAgresiModal from "./2_pakta_non_agresi/PaktaNonAgresiModal";
import AliansiPertahananModal from "./3_aliansi_pertahanan/AliansiPertahananModal";
import PerjanjianDagangModal from "./4_perjanjian_dagang/PerjanjianDagangModal";
import KontrakPenelitianModal from "./5_kontrak_penelitian/KontrakPenelitianModal";
import KirimPasukanModal from "./6_kirim_pasukan/KirimPasukanModal";

export default function DiplomacyTab() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 max-h-[300px]">
        <ActionCard 
          icon={<Landmark className="h-4 w-4" />} 
          label="Kedutaan" 
          bg="from-blue-900/30 to-zinc-900" 
          onClick={() => setActiveModal('kedutaan')}
        />
        <ActionCard 
          icon={<Handshake className="h-4 w-4" />} 
          label="Pakta Non-Agresi" 
          bg="from-indigo-900/30 to-zinc-900" 
          onClick={() => setActiveModal('pakta')}
        />
        <ActionCard 
          icon={<Shield className="h-4 w-4" />} 
          label="Aliansi Pertahanan" 
          bg="from-teal-900/30 to-zinc-900" 
          onClick={() => setActiveModal('aliansi')}
        />
        <ActionCard 
          icon={<FileText className="h-4 w-4" />} 
          label="Perjanjian Dagang" 
          bg="from-amber-900/30 to-zinc-900" 
          onClick={() => setActiveModal('dagang')}
        />
        <ActionCard 
          icon={<FlaskConical className="h-4 w-4" />} 
          label="Kontrak Penelitian" 
          bg="from-cyan-900/30 to-zinc-900" 
          onClick={() => setActiveModal('penelitian')}
        />
        <ActionCard 
          icon={<Truck className="h-4 w-4" />} 
          label="Kirim Pasukan" 
          bg="from-sky-900/30 to-zinc-900" 
          onClick={() => setActiveModal('pasukan')}
        />
      </div>

      {/* Render Specific Modals */}
      <KedutaanModal isOpen={activeModal === 'kedutaan'} onClose={() => setActiveModal(null)} />
      <PaktaNonAgresiModal isOpen={activeModal === 'pakta'} onClose={() => setActiveModal(null)} />
      <AliansiPertahananModal isOpen={activeModal === 'aliansi'} onClose={() => setActiveModal(null)} />
      <PerjanjianDagangModal isOpen={activeModal === 'dagang'} onClose={() => setActiveModal(null)} />
      <KontrakPenelitianModal isOpen={activeModal === 'penelitian'} onClose={() => setActiveModal(null)} />
      <KirimPasukanModal isOpen={activeModal === 'pasukan'} onClose={() => setActiveModal(null)} />
    </>
  );
}
