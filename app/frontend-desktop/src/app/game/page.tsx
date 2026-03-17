"use client"

import { useState } from "react";
import { 
  BarChart2, Shield, Users, Landmark, AlertTriangle, 
  MapPin, Settings, LogOut, Heart, Coins 
} from "lucide-react";
import ParticleCanvas from "@/components/ParticleCanvas";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import WorldMapCanvas from "@/components/WorldMapCanvas";

export default function GameDashboard() {
  const [approval, setApproval] = useState(65);
  const [budget, setBudget] = useState(1240.5); // in Trillion
  const [stability, setStability] = useState(82);
  const [selectedCountry, setSelectedCountry] = useState("Indonesia");

  return (
    <div className="flex min-h-screen bg-zinc-950 text-white font-sans relative overflow-hidden">
      {/* ParticleCanvas removed for static maps */}

      {/* Sidebar Nav */}
      <aside className="w-64 bg-zinc-900/40 backdrop-blur-md border-r border-zinc-800 z-10 flex flex-col p-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-red-600 to-yellow-500 flex items-center justify-center font-bold text-lg shadow-lg">
            P
          </div>
          <div>
            <h2 className="font-bold text-sm">PRESIDEN</h2>
            <p className="text-xs text-zinc-400">Simulator 2045</p>
          </div>
        </div>

        <nav className="flex-1 flex flex-col gap-2">
          <SidebarItem icon={<BarChart2 className="h-5 w-5" />} label="Ringkasan Negara" active />
          <SidebarItem icon={<Shield className="h-5 w-5" />} label="Militer & Pertahanan" />
          <SidebarItem icon={<Users className="h-5 w-5" />} label="Sosial Masyarakat" />
          <SidebarItem icon={<Landmark className="h-5 w-5" />} label="Ekonomi & Pajak" />
          <SidebarItem icon={<MapPin className="h-5 w-5" />} label="Peta Wilayah" />
        </nav>

        <div className="border-t border-zinc-800 pt-4 flex flex-col gap-2">
          <SidebarItem icon={<Settings className="h-5 w-5" />} label="Pengaturan" />
          <SidebarItem icon={<LogOut className="h-5 w-5" />} label="Keluar Menu" />
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 z-10 flex flex-col h-screen overflow-y-auto">
        {/* Top Header / Status bar */}
        <header className="bg-zinc-900/30 backdrop-blur-sm border-b border-zinc-800 px-8 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
            Ruang Oval Kepresidenan
          </h1>
          
          <div className="flex items-center gap-6">
            <StatusBadge icon={<Heart className="h-4 w-4 text-red-500" />} label="Persetujuan" value={`${approval}%`} />
            <StatusBadge icon={<Coins className="h-4 w-4 text-yellow-500" />} label="Kas Negara" value={`Rp ${budget} T`} />
            <StatusBadge icon={<Shield className="h-4 w-4 text-green-500" />} label="Stabilitas" value={`${stability}%`} />
          </div>
        </header>

        {/* Main interactive map background viewport */}
        <div className="flex-1 relative w-full h-full overflow-hidden">
          <TransformWrapper initialScale={2.2} minScale={1} maxScale={8} centerOnInit limitToBounds>
            <TransformComponent wrapperClass="!w-full !h-full" contentClass="!w-full !h-full flex items-center justify-center">
              <div className="relative aspect-[2/1] min-w-[1240px] h-full flex items-center justify-center">
                <WorldMapCanvas selectedCountry={selectedCountry} onSelect={setSelectedCountry} />
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30 pointer-events-none" />
              </div>
            </TransformComponent>
          </TransformWrapper>
        </div>
      </main>
    </div>
  );
}

function SidebarItem({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) {
  return (
    <button className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl transition-all font-medium text-sm cursor-pointer ${
      active ? 'bg-red-500/10 border border-red-500/30 text-red-500' : 'hover:bg-zinc-800/80 text-zinc-400 hover:text-white'
    }`}>
      {icon}
      {label}
    </button>
  );
}

function StatusBadge({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
  return (
    <div className="flex items-center gap-2 bg-zinc-900/80 px-3 py-1.5 rounded-lg border border-zinc-800">
      {icon}
      <div className="text-left leading-tight">
        <p className="text-[10px] text-zinc-500 font-semibold uppercase">{label}</p>
        <p className="text-xs font-bold">{value}</p>
      </div>
    </div>
  );
}

function MiniStat({ label, value, opacity = false }: { label: string, value: string, opacity?: boolean }) {
  return (
    <div className="flex items-center justify-between border-b border-zinc-800/50 pb-2">
      <span className="text-xs text-zinc-400">{label}</span>
      <span className={`text-sm font-bold ${opacity ? 'text-zinc-500' : 'text-white'}`}>{value}</span>
    </div>
  );
}

function OptionButton({ label }: { label: string }) {
  return (
    <button className="text-left text-xs bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 hover:border-zinc-700 p-3 rounded-lg transition-all cursor-pointer">
      {label}
    </button>
  );
}
