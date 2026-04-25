import React, { useState, useEffect } from "react";
import { Landmark, Handshake, Shield, FileText, FlaskConical, Truck, ChevronRight, Hammer, X, Loader2, Briefcase, Ban, Globe2 } from "lucide-react";
import ActionCard from "../shared/ActionCard";
import { embassyStorage, EmbassyStatus } from "./1_kedutaan/logic/embassyStorage";
import { nonAggressionStorage, NonAggressionStatus } from "./2_pakta_non_agresi/logic/nonAggressionStorage";
import { aliansiStorage, AliansiStatus } from "./3_aliansi_pertahanan/logic/aliansiStorage";
import { tradeStorage, TradeStatus } from "./4_perjanjian_dagang/logic/tradeStorage";

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
  const [nonAggressionStatus, setNonAggressionStatus] = useState<NonAggressionStatus>('none');
  const [aliansiStatus, setAliansiStatus] = useState<AliansiStatus>('none');
  const [tradeStatus, setTradeStatus] = useState<TradeStatus>('none');
  const [isDevModalOpen, setIsDevModalOpen] = useState(false);
  const [devModalTitle, setDevModalTitle] = useState("");

  useEffect(() => {
    const updateStatus = () => {
      setEmbassyStatus(embassyStorage.getEmbassyStatus(targetCountry));
      
      // Check primary key, then fallback to space-based variant for legacy data
      const spaceVariant = targetCountry.replace(/_/g, ' ');
      
      let pactStatus = nonAggressionStorage.getStatus(targetCountry);
      if (pactStatus === 'none' && spaceVariant !== targetCountry) {
        pactStatus = nonAggressionStorage.getStatus(spaceVariant);
      }
      setNonAggressionStatus(pactStatus);
      
      let allianceStatus = aliansiStorage.getStatus(targetCountry);
      if (allianceStatus === 'none' && spaceVariant !== targetCountry) {
        allianceStatus = aliansiStorage.getStatus(spaceVariant);
      }
      setAliansiStatus(allianceStatus);
      
      setTradeStatus(tradeStorage.getTradeStatus(userCountry, targetCountry));
    };

    updateStatus();
    
    window.addEventListener("embassy_status_updated", updateStatus);
    window.addEventListener("non_aggression_updated", updateStatus);
    window.addEventListener("aliansi_updated", updateStatus);
    return () => {
      window.removeEventListener("embassy_status_updated", updateStatus);
      window.removeEventListener("non_aggression_updated", updateStatus);
      window.removeEventListener("aliansi_updated", updateStatus);
    };
  }, [targetCountry, userCountry]);

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
          icon={
            nonAggressionStatus === 'active' ? <Handshake className="h-4 w-4 text-amber-400" /> :
            <Handshake className="h-4 w-4" />
          } 
          label={
            nonAggressionStatus === 'active' ? "PAKTA AKTIF" : "Pakta Non-Agresi"
          }
          bg={
            nonAggressionStatus === 'active' ? "from-amber-700/40 to-zinc-900" : "from-indigo-900/20 to-zinc-900"
          } 
          disabled={embassyStatus !== 'completed'}
          onClick={() => setActiveMenu(`CountryModal:${targetId}:diplomasi_hubungan:pakta_non_agresi`)}
        />
        <ActionCard 
          icon={
            aliansiStatus === 'active' ? <Shield className="h-4 w-4 text-amber-400" /> : <Shield className="h-4 w-4" />
          } 
          label={
            aliansiStatus === 'active' ? "ALIANSI AKTIF" : "Aliansi Pertahanan"
          }
          bg={
            aliansiStatus === 'active' ? "from-amber-700/40 to-zinc-900" : "from-teal-900/20 to-zinc-900"
          } 
          disabled={embassyStatus !== 'completed'}
          onClick={() => setActiveMenu(`CountryModal:${targetId}:diplomasi_hubungan:aliansi_pertahanan`)}
        />
        <ActionCard 
          icon={
            tradeStatus === 'active' ? <FileText className="h-4 w-4 text-amber-400" /> : <FileText className="h-4 w-4" />
          } 
          label={
            tradeStatus === 'active' ? "DAGANG AKTIF" : "Perjanjian Dagang"
          }
          bg={
            tradeStatus === 'active' ? "from-amber-700/40 to-zinc-900" : "from-amber-900/20 to-zinc-900"
          } 
          disabled={embassyStatus !== 'completed'}
          onClick={() => setActiveMenu(`CountryModal:${targetId}:diplomasi_hubungan:perjanjian_dagang`)}
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
          icon={<Landmark className="h-4 w-4" />}
          label="Kedutaan Besar"
          bg="from-purple-900/30 to-zinc-900/80"
          onClick={() => setActiveMenu(`CountryModal:${targetId}:diplomasi_hubungan:kedutaan_besar`)}
        />
        <ActionCard
          icon={<Globe2 className="h-4 w-4" />}
          label="Hubungan Internasional"
          bg="from-blue-900/20 to-zinc-900"
          onClick={() => setActiveMenu(`CountryModal:${targetId}:diplomasi_hubungan:hubungan_internasional`)}
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
