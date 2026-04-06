import { Home, Building2, Landmark, Users, Coins, Zap, Clock, Info, Hammer, Flame, Activity, Loader2 } from "lucide-react";
import { hunianRate } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum";
import { gameStorage } from "@/app/game/gamestorage";
import { countries } from "@/app/database/data/negara/benua/index";

export default function HunianPemukiman() {
  const session = gameStorage.getSession();
  const currentCountryCode = session?.country || "Indonesia";
  const countryData = countries.find((c: any) =>
    c.name_id === currentCountryCode ||
    c.name_en === currentCountryCode ||
    (c.id && c.id === currentCountryCode)
  ) || countries[79];
  
  const hunianData = countryData?.hunian || { rumah_subsidi: 0, apartemen: 0, mansion: 0 };

  const prototypeHouses = [
    {
      id: "rumah_subsidi",
      title: hunianRate.rumah_subsidi.label,
      deskripsi: hunianRate.rumah_subsidi.deskripsi,
      category: "RESIDENSIAL",
      icon: Home,
      color: "text-cyan-500",
      price: hunianRate.rumah_subsidi.biaya_pembangunan.toLocaleString('id-ID'),
      maintenance: hunianRate.rumah_subsidi.biaya_pemeliharaan,
      konsumsi_listrik: hunianRate.rumah_subsidi.konsumsi_listrik,
      capacity: hunianRate.rumah_subsidi.kapasitas.toLocaleString('id-ID'),
      time: hunianRate.rumah_subsidi.waktu_pembangunan,
      count: hunianData.rumah_subsidi || 0,
    },
    {
      id: "apartemen",
      title: hunianRate.apartemen.label,
      deskripsi: hunianRate.apartemen.deskripsi,
      category: "KAPASITAS TINGGI",
      icon: Building2,
      color: "text-cyan-500",
      price: hunianRate.apartemen.biaya_pembangunan.toLocaleString('id-ID'),
      maintenance: hunianRate.apartemen.biaya_pemeliharaan,
      konsumsi_listrik: hunianRate.apartemen.konsumsi_listrik,
      capacity: hunianRate.apartemen.kapasitas.toLocaleString('id-ID'),
      time: hunianRate.apartemen.waktu_pembangunan,
      count: hunianData.apartemen || 0,
    },
    {
      id: "mansion",
      title: hunianRate.mansion.label,
      deskripsi: hunianRate.mansion.deskripsi,
      category: "ELITE",
      icon: Landmark,
      color: "text-cyan-500",
      price: hunianRate.mansion.biaya_pembangunan.toLocaleString('id-ID'),
      maintenance: hunianRate.mansion.biaya_pemeliharaan,
      konsumsi_listrik: hunianRate.mansion.konsumsi_listrik,
      capacity: hunianRate.mansion.kapasitas.toLocaleString('id-ID'),
      time: hunianRate.mansion.waktu_pembangunan,
      count: hunianData.mansion || 0,
    },
  ];

  return (
    <div className="flex-1 p-8 space-y-8 animate-in fade-in duration-700">
      <div className="flex items-center gap-3 px-2">
        <div className="p-1.5 bg-cyan-500/10 rounded-lg"><Home size={16} className="text-cyan-500" /></div>
        <h3 className="text-lg font-black text-white uppercase italic tracking-widest">Katalog Hunian Nasional (Prototype)</h3>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-zinc-800 to-transparent ml-4 opacity-50"></div>
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
                <button className="p-2.5 rounded-xl border bg-zinc-950/80 border-zinc-800 text-zinc-500 hover:text-cyan-400 hover:border-cyan-500/30 transition-all cursor-pointer">
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
                    Kapasitas: {item.capacity} Jiwa/unit
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
