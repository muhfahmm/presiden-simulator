import { Home, Building2, Landmark, Users, Coins, Zap, Clock, Info, Hammer, Flame, Activity, Loader2, X } from "lucide-react";
import { useState } from "react";
import { hunianRate } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum";
import { gameStorage } from "@/app/game/gamestorage";
import { countries } from "@/app/database/data/negara/benua/index";
import { populationStorage } from "@/app/game/components/1_navbar/2_populasi";
import { buildingStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/3_pembangunan/buildingStorage";

export default function HunianPemukiman() {
  const [activeInfo, setActiveInfo] = useState<string | null>(null);

  const session = gameStorage.getSession();
  const currentCountryCode = session?.country || "Indonesia";
  const countryData = countries.find((c: any) =>
    c.name_id === currentCountryCode ||
    c.name_en === currentCountryCode ||
    (c.id && c.id === currentCountryCode)
  ) || countries[79];
  
  const hunianData = countryData?.hunian || { rumah_subsidi: 0, apartemen: 0, mansion: 0 };

  const population = populationStorage.getPopulation();
  const deltas = buildingStorage.getData().buildingDeltas || {};

  const totalSubsidi = (hunianData.rumah_subsidi || 0) + (deltas['rumah_subsidi'] || 0);
  const totalApartemen = (hunianData.apartemen || 0) + (deltas['apartemen'] || 0);
  const totalMansion = (hunianData.mansion || 0) + (deltas['mansion'] || 0);

  const totalCapacity = (totalSubsidi * 5) + (totalApartemen * 6000) + (totalMansion * 10);
  const surplus = totalCapacity - population;

  const prototypeHouses = [
    {
      id: "rumah_subsidi",
      title: hunianRate.rumah_subsidi.label,
      deskripsi: hunianRate.rumah_subsidi.deskripsi,
      category: "RESIDENSIAL",
      icon: Home,
      color: "text-cyan-500",
      price: hunianRate.rumah_subsidi.biaya_pembangunan.toLocaleString('id-ID'),
      konsumsi_listrik: hunianRate.rumah_subsidi.konsumsi_listrik,
      kapasitas: hunianRate.rumah_subsidi.kapasitas.toLocaleString('id-ID'),
      time: hunianRate.rumah_subsidi.waktu_pembangunan,
      count: totalSubsidi,
    },
    {
      id: "apartemen",
      title: hunianRate.apartemen.label,
      deskripsi: hunianRate.apartemen.deskripsi,
      category: "KAPASITAS TINGGI",
      icon: Building2,
      color: "text-cyan-500",
      price: hunianRate.apartemen.biaya_pembangunan.toLocaleString('id-ID'),
      konsumsi_listrik: hunianRate.apartemen.konsumsi_listrik,
      kapasitas: hunianRate.apartemen.kapasitas.toLocaleString('id-ID'),
      time: hunianRate.apartemen.waktu_pembangunan,
      count: totalApartemen,
    },
    {
      id: "mansion",
      title: hunianRate.mansion.label,
      deskripsi: hunianRate.mansion.deskripsi,
      category: "ELITE",
      icon: Landmark,
      color: "text-cyan-500",
      price: hunianRate.mansion.biaya_pembangunan.toLocaleString('id-ID'),
      konsumsi_listrik: hunianRate.mansion.konsumsi_listrik,
      kapasitas: hunianRate.mansion.kapasitas.toLocaleString('id-ID'),
      time: hunianRate.mansion.waktu_pembangunan,
      count: totalMansion,
    },
  ];

  return (
    <div className="flex-1 p-8 space-y-8 animate-in fade-in duration-700">
      <div className="flex items-center gap-3 px-2">
        <div className="p-1.5 bg-cyan-500/10 rounded-lg"><Home size={16} className="text-cyan-500" /></div>
        <h3 className="text-lg font-black text-white uppercase italic tracking-widest">Katalog Hunian Nasional (Prototype)</h3>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-zinc-800 to-transparent ml-4 opacity-50"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 px-1">
        <div className="bg-zinc-950/60 border border-zinc-800/60 p-5 rounded-2xl flex items-center justify-between">
          <div>
            <p className="text-[10px] font-black tracking-widest text-zinc-500 uppercase mb-1">Total Kebutuhan Rumah</p>
            <p className="text-xl font-black text-rose-400">{population.toLocaleString('id-ID')} <span className="text-xs text-rose-500/50">Jiwa</span></p>
          </div>
          <div className="p-3 bg-rose-500/10 rounded-xl"><Users size={20} className="text-rose-500" /></div>
        </div>
        
        <div className="bg-zinc-950/60 border border-zinc-800/60 p-5 rounded-2xl flex items-center justify-between">
          <div>
            <p className="text-[10px] font-black tracking-widest text-zinc-500 uppercase mb-1">Total Kapasitas Tersedia</p>
            <p className="text-xl font-black text-emerald-400">{totalCapacity.toLocaleString('id-ID')} <span className="text-xs text-emerald-500/50">Jiwa</span></p>
          </div>
          <div className="p-3 bg-emerald-500/10 rounded-xl"><Home size={20} className="text-emerald-500" /></div>
        </div>

        <div className="bg-zinc-950/60 border border-zinc-800/60 p-5 rounded-2xl flex items-center justify-between">
          <div>
            <p className="text-[10px] font-black tracking-widest text-zinc-500 uppercase mb-1">Neraca Hunian (Surplus)</p>
            <p className={`text-xl font-black ${surplus >= 0 ? 'text-cyan-400' : 'text-red-400'}`}>{surplus > 0 ? '+' : ''}{surplus.toLocaleString('id-ID')} <span className="text-xs opacity-50">Jiwa</span></p>
          </div>
          <div className={`p-3 rounded-xl ${surplus >= 0 ? 'bg-cyan-500/10' : 'bg-red-500/10'}`}>
            <Activity size={20} className={surplus >= 0 ? 'text-cyan-500' : 'text-red-500'} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 px-1 pb-4">
        {prototypeHouses.map((item) => (
          <div key={item.id} className="bg-zinc-900/40 border border-zinc-800/60 p-4 rounded-2xl transition-all group flex flex-col gap-3 relative overflow-hidden h-full min-h-[420px]">
            
            {/* Card header */}
            <div className="flex items-start justify-between relative z-10">
              <div className="flex gap-2">
                <div className="p-2.5 bg-zinc-950/80 rounded-xl border border-zinc-800 group-hover:scale-110 transition-transform">
                  <item.icon className={`h-5 w-5 ${item.color} shadow-[0_0_10px_rgba(6,182,212,0.3)]`} />
                </div>
                <button 
                  onClick={() => setActiveInfo(activeInfo === item.id ? null : item.id)}
                  className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
                    activeInfo === item.id 
                      ? 'bg-cyan-500 border-cyan-400 text-white shadow-[0_0_15px_rgba(6,182,212,0.4)]' 
                      : 'bg-zinc-950/80 border-zinc-800 text-zinc-500 hover:text-cyan-400 hover:border-cyan-500/30'
                  }`}
                >
                  <Info size={16} />
                </button>
              </div>
              <div className="flex flex-col items-end gap-1">
                <div className="px-2.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] font-bold text-zinc-500 group-hover:text-cyan-400 transition-colors uppercase tracking-tight">
                  {item.category}
                </div>
                <div className="px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-[11px] font-black text-emerald-300 uppercase tracking-tighter shadow-[0_0_10px_rgba(16,185,129,0.2)]">
                  Terbangun: {item.count.toLocaleString('id-ID')} Unit
                </div>
              </div>
            </div>

            {/* Card body */}
            <div className="flex-1 flex flex-col relative z-10 mt-1">
              <h4 className="text-[17px] font-black text-zinc-100 tracking-tight group-hover:text-amber-400 transition-colors uppercase italic leading-tight mb-3">
                {item.title}
              </h4>

              <div className="flex flex-col gap-2.5 flex-1">

                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 bg-amber-500/10 rounded-lg">
                    <Zap size={12} className="text-amber-500/90" />
                  </div>
                  <span className="text-[12px] font-bold text-amber-500/80">
                    Konsumsi: {item.konsumsi_listrik} MW/unit
                  </span>
                </div>

                <div className="flex items-center gap-2.5 ml-1 border-l-2 border-amber-500/10 pl-3">
                  <div className="p-1.5 bg-amber-500/5 rounded-lg">
                    <Activity size={12} className="text-amber-400/70" />
                  </div>
                  <span className="text-[11px] font-bold text-amber-400/70 uppercase">
                    Total Konsumsi Listrik: {(item.count * item.konsumsi_listrik).toLocaleString('id-ID')} MW
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 bg-blue-500/10 rounded-lg">
                    <Users size={12} className="text-blue-400" />
                  </div>
                  <span className="text-[12px] font-bold text-blue-400/80">
                    Kapasitas: {item.kapasitas} Jiwa/unit
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 bg-zinc-800/50 rounded-lg">
                    <Clock size={12} className="text-zinc-500" />
                  </div>
                  <span className="text-[11px] font-bold text-zinc-500 italic uppercase">Waktu: {item.time} Hari</span>
                </div>
              </div>

              {/* Total Fasilitas section */}
              <div className="mt-4 pt-4 border-t border-zinc-800/30 flex flex-col gap-1.5 bg-zinc-950/30 rounded-2xl p-4 border border-zinc-800/20 shadow-inner">
                <div className="flex justify-between items-baseline gap-2">
                  <span className="text-[11px] font-black text-cyan-500/80 uppercase tracking-[0.15em] italic">
                    TOTAL FASILITAS:
                  </span>
                  <span className="text-[16px] font-black text-cyan-400 tracking-tight">
                    {item.count.toLocaleString('id-ID')} <span className="text-[10px] text-cyan-500/50 font-normal uppercase italic ml-1">Unit</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Build button */}
            <div className="mt-auto pt-4 relative z-10 flex items-center gap-4">
               <div className="flex flex-col">
                  <span className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest leading-none">Biaya Bangun</span>
                  <span className="text-sm font-black text-zinc-400 tracking-tight mt-1">{item.price}</span>
               </div>
               <button className="flex-1 py-3.5 rounded-2xl bg-cyan-600 text-white text-[11px] font-black uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(8,145,178,0.3)] hover:bg-cyan-500 hover:shadow-[0_0_30px_rgba(8,145,178,0.4)] transition-all cursor-not-allowed opacity-80 border border-cyan-400/20">
                  BANGUN
               </button>
            </div>

            {/* Detailed Info Overlay */}
            {activeInfo === item.id && (
              <div className="absolute inset-0 bg-zinc-950/98 backdrop-blur-xl z-50 p-8 flex flex-col animate-in fade-in zoom-in duration-300 border border-zinc-800 rounded-2xl">
                {/* Header */}
                <div className="flex justify-between items-start mb-10">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-cyan-500/10 rounded-2xl border border-cyan-500/20 shadow-[0_0_20px_rgba(6,182,212,0.15)]">
                      <Info size={24} className="text-cyan-400" />
                    </div>
                    <div>
                      <h5 className="text-xl font-black text-white uppercase tracking-tighter italic leading-none">Detail Fasilitas</h5>
                      <span className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] mt-1 block">Spesifikasi & Biaya</span>
                    </div>
                  </div>
                  <button onClick={() => setActiveInfo(null)} className="p-2 hover:bg-zinc-800 rounded-xl text-zinc-500 transition-colors cursor-pointer group">
                    <X size={20} className="group-hover:rotate-90 transition-transform" />
                  </button>
                </div>

                {/* Building Name Focus */}
                <div className="bg-zinc-900/50 border border-zinc-800/80 rounded-[32px] p-8 mb-8 text-center relative overflow-hidden group/name">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover/name:opacity-100 transition-opacity" />
                  <span className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.4em] mb-3 block">Nama Bangunan</span>
                  <h4 className="text-3xl font-black text-amber-400 uppercase italic tracking-tighter leading-tight drop-shadow-[0_2px_10px_rgba(251,191,36,0.3)]">
                    {item.title}
                  </h4>
                </div>

                {/* Specs Rows */}
                <div className="space-y-4 flex-1">
                  {/* Energy Row */}
                  <div className="bg-zinc-900/30 border border-zinc-800/40 rounded-3xl p-5 flex items-center justify-between group/row hover:border-pink-500/30 transition-all">
                    <div className="flex items-center gap-4">
                       <div className="p-3 bg-pink-500/10 rounded-2xl border border-pink-500/20">
                          <Zap size={18} className="text-pink-500" />
                       </div>
                       <span className="text-xs font-black text-zinc-400 uppercase tracking-widest">Beban Energi</span>
                    </div>
                    <span className="text-xl font-black text-pink-500 tracking-tight tabular-nums">{item.konsumsi_listrik} MW</span>
                  </div>

                  {/* Capacity Row */}
                  <div className="bg-zinc-900/30 border border-zinc-800/40 rounded-3xl p-5 flex items-center justify-between group/row hover:border-cyan-500/30 transition-all">
                    <div className="flex items-center gap-4">
                       <div className="p-3 bg-cyan-500/10 rounded-2xl border border-cyan-500/20">
                          <Users size={18} className="text-cyan-500" />
                       </div>
                       <span className="text-xs font-black text-zinc-400 uppercase tracking-widest">Kapasitas Hunian</span>
                    </div>
                    <span className="text-xl font-black text-cyan-400 tracking-tight tabular-nums">{item.kapasitas} Jiwa</span>
                  </div>

                </div>

                {/* Back Button */}
                <button 
                  onClick={() => setActiveInfo(null)}
                  className="mt-10 w-full py-5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 text-xs font-black uppercase tracking-[0.4em] rounded-[24px] transition-all hover:scale-[0.98] active:scale-95 shadow-xl"
                >
                  KEMBALI
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Development Notice */}
      <div className="mt-8 p-6 border border-zinc-800/50 rounded-[32px] bg-zinc-900/20 backdrop-blur-sm flex items-center justify-center gap-4">
        <div className="p-3 bg-zinc-900 rounded-2xl border border-zinc-800 animate-pulse">
          <Hammer className="h-6 w-6 text-zinc-600" />
        </div>
        <div>
          <h5 className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.4em]">Sektor Hunian sedang dikembangkan</h5>
          <p className="text-[9px] text-zinc-600 mt-0.5 uppercase italic">Data Parameter masih dalam tahap sinkronisasi dengan database nasional</p>
        </div>
      </div>
    </div>
  );
}
