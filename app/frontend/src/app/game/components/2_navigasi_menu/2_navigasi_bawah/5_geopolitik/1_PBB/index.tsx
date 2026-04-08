"use client"

import { useState, useEffect } from "react";
import { X, Globe, Shield, Gavel, Crown } from "lucide-react"
import { gameStorage } from "@/app/game/gamestorage";
import { countries } from "@/app/database/data/negara/benua/index";

// Import Modular Tabs
import PemungutanSuaraTab from "./1_pemungutan_suara/PemungutanSuaraTab";
import DewanKeamananTab from "./2_dewan_keamanan/DewanKeamananTab";
import SuaraPBBTab from "./3_suara_pbb/SuaraPBBTab";

type Tab = "pemungutan_suara" | "dewan_keamanan" | "suara_PBB";

interface PBBModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeMenu?: string;
  setActiveMenu?: (menu: string) => void;
}

export default function PBBModal({ isOpen, onClose, activeMenu, setActiveMenu }: PBBModalProps) {
  const [currentData, setCurrentData] = useState<any>(null);
  const [activeTab, setActiveTab] = useState<Tab>("pemungutan_suara");

  useEffect(() => {
    if (activeMenu) {
      if (activeMenu.endsWith(":pemungutan_suara")) setActiveTab("pemungutan_suara");
      else if (activeMenu.endsWith(":dewan_keamanan")) setActiveTab("dewan_keamanan");
      else if (activeMenu.endsWith(":suara_PBB")) setActiveTab("suara_PBB");
      else if (activeMenu === "Menu:PBB") setActiveTab("pemungutan_suara");
    }
  }, [activeMenu]);

  useEffect(() => {
    const session = gameStorage.getSession();
    if (session) {
      const countryName = session.country || localStorage.getItem("selectedCountry") || "Indonesia";
      const data = countries.find(c => c.name_id === countryName || c.name_en === countryName) || countries[0];
      setCurrentData(data);
    }
  }, [isOpen]);

  if (!isOpen || !currentData) return null;

  const tabs = [
    { id: "pemungutan_suara" as Tab, label: "Pemungutan Suara", icon: Gavel },
    { id: "dewan_keamanan" as Tab, label: "Dewan Keamanan", icon: Shield },
    { id: "suara_PBB" as Tab, label: "Suara PBB", icon: Crown },
  ];

  const handleTabChange = (tabId: Tab) => {
    setActiveTab(tabId);
    if (setActiveMenu) {
      setActiveMenu(`Menu:PBB:${tabId}`);
    }
  };

  return (
    <div className="absolute inset-0 bg-black/85 z-50 flex items-center justify-center animate-in fade-in duration-300 p-4 md:p-8">
      <div className="bg-zinc-950 border border-zinc-800 rounded-[36px] w-full max-w-[95vw] h-[82vh] overflow-hidden shadow-2xl flex flex-col">
        {/* Header */}
        <div className="px-8 py-5 border-b border-zinc-800/50 flex items-center gap-4 bg-zinc-900/30">
          <div className="p-2 bg-cyan-500/10 rounded-xl border border-cyan-500/10">
            <Globe className="h-5 w-5 text-cyan-500" />
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-black text-white tracking-tight italic uppercase">Markas Besar PBB</h2>
            <p className="text-[10px] text-zinc-500 font-medium uppercase tracking-widest">United Nations Headquarters • New York</p>
          </div>

          {/* Tabs Navigation */}
          <div className="flex gap-1.5 p-1.5 bg-zinc-900 border border-zinc-800 rounded-2xl">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-cyan-600 text-white shadow-lg shadow-cyan-500/20"
                    : "text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/50"
                }`}
              >
                <tab.icon className="h-3.5 w-3.5" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Close Button */}
          <button onClick={onClose} className="p-3 rounded-2xl bg-rose-600 border border-rose-500 hover:bg-rose-500 text-white transition-all cursor-pointer shadow-[0_0_15px_rgba(225,29,72,0.3)] active:scale-95 group flex items-center gap-2">
            <span className="text-[10px] font-black uppercase tracking-widest pl-1">Tutup</span>
            <X className="h-5 w-5 group-hover:rotate-90 transition-transform" />
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === "pemungutan_suara" && <PemungutanSuaraTab />}
        {activeTab === "dewan_keamanan" && <DewanKeamananTab />}
        {activeTab === "suara_PBB" && <SuaraPBBTab currentData={currentData} />}
      </div>
    </div>
  )
}
