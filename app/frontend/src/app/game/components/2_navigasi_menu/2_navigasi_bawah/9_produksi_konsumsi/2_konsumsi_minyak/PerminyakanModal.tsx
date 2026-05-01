"use client"

import { useState } from "react";
import { X, Activity, TrendingUp, TrendingDown, Info, Factory, Pickaxe, Eye, EyeOff, Truck, Ship, Plane, Zap, Package, Droplet, Bike, Car, Bus, Shield, Anchor, Crosshair, Target, Bolt, Radiation } from "lucide-react";
import { 
  mineralKritisRate,
  infrastrukturRate,
  armadaMiliterRate
} from "@/app/database/data/semua_fitur_negara";
import { gameStorage } from "@/app/game/gamestorage";
import { buildingStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/3_pembangunan/buildingStorage";
import { countries } from "@/app/database/data/semua_fitur_negara/0_profiles/index";

import { VEHICLE_CAPACITIES } from "./perminyakan_data";
import { getVehicleData } from "@/app/database/data/database_kendaraan_bermotor";

interface PerminyakanModalProps {
  isOpen: boolean;
  onClose: () => void;
  setActiveMenu: (menu: string) => void;
}

export default function PerminyakanModal({ isOpen, onClose, setActiveMenu }: PerminyakanModalProps) {
  const [showProduksi, setShowProduksi] = useState(true);
  const [showKonsumsi, setShowKonsumsi] = useState(true);

  if (!isOpen) return null;

  const session = gameStorage.getSession();
  const currentCountryName = session?.country || "Indonesia";
  const searchName = currentCountryName.toLowerCase().trim();
  const selectedData = countries.find((c: any) =>
    c.name_id.toLowerCase() === searchName ||
    c.name_en.toLowerCase() === searchName
  );
  const currentData = selectedData || countries[0];

  const buildingData = buildingStorage.getData();
  const buildingDeltas = buildingData.buildingDeltas;

  // Sync Logic with Deltas
  const currentDataWithDeltas = {
    ...currentData,
    sektor_ekstraksi: { ...currentData.sektor_ekstraksi || {} },
    infrastruktur: { ...currentData.infrastruktur || {} },
  };

  Object.entries(buildingDeltas).forEach(([key, deltaValue]) => {
    if (typeof deltaValue !== 'number' || deltaValue === 0) return;
    if ((mineralKritisRate as any)[key]) {
      const dataKey = (mineralKritisRate as any)[key].dataKey;
      (currentDataWithDeltas.sektor_ekstraksi as any)[dataKey] = ((currentDataWithDeltas.sektor_ekstraksi as any)[dataKey] || 0) + deltaValue;
    }
  });

  // Calculate Production (Oil Wells)
  const oilWellMeta = mineralKritisRate["4_sumur_minyak"];
  const countOilWells = currentDataWithDeltas.sektor_ekstraksi.minyak_bumi || 0;
  const totalProduction = countOilWells * oilWellMeta.produksi;

  // Detailed Consumption Logic (Exclusively from Database Baseline)
  const baselineVehicles = getVehicleData(currentData.name_id.toLowerCase().replace(/ /g, "_"));
  
  const motorCount = (baselineVehicles?.sepeda_motor || 0);
  const carCount = (baselineVehicles?.mobil || 0);
  const busCount = (baselineVehicles?.bus || 0);
  const truckCount = (baselineVehicles?.truk || 0);

  const consMotor = motorCount * 12; 
  const consCar = carCount * 28;    
  const consBus = busCount * 145;   
  const consTruck = truckCount * 85; 

  const literPerBarel = 159;
  const consMotorLiter = consMotor * literPerBarel;
  const consCarLiter = consCar * literPerBarel;
  const consBusLiter = consBus * literPerBarel;
  const consTruckLiter = consTruck * literPerBarel;

  const transportConsumption = consMotor + consCar + consBus + consTruck;
  const industryConsumption = (currentDataWithDeltas.sektor_manufaktur?.smelter || 0) * 150; 
  
  // Military Fleet Consumption Logic
  const armada = currentData.armada_militer;
  
  // Armada Darat
  const consTank = (armada.darat?.tank_tempur_utama || 0) * (armadaMiliterRate["2_tank"]?.konsumsi_bahan_bakar || 0);
  const consAPC = (armada.darat?.apc_ifv || 0) * (armadaMiliterRate["3_apc"]?.konsumsi_bahan_bakar || 0);
  const consArtileri = (armada.darat?.artileri_berat || 0) * (armadaMiliterRate["4_artileri"]?.konsumsi_bahan_bakar || 0);
  const consMLRS = (armada.darat?.sistem_peluncur_roket || 0) * (armadaMiliterRate["5_roket_peluncur"]?.konsumsi_bahan_bakar || 0);
  const consSAM = (armada.darat?.pertahanan_udara_mobile || 0) * (armadaMiliterRate["6_misil_sam"]?.konsumsi_bahan_bakar || 0);
  const consDarat = consTank + consAPC + consArtileri + consMLRS + consSAM;

  // Armada Laut
  const consInduk = (armada.laut?.kapal_induk || 0) * (armadaMiliterRate["8_kapal_induk"]?.konsumsi_bahan_bakar || 0);
  const consIndukNuklir = 0; // Kapal Induk Nuklir tidak menggunakan BBM (Uranium)
  const consDestroyer = (armada.laut?.kapal_destroyer || 0) * (armadaMiliterRate["9_kapal_perusak"]?.konsumsi_bahan_bakar || 0);
  const consKorvet = (armada.laut?.kapal_korvet || 0) * (armadaMiliterRate["10_kapal_korvet"]?.konsumsi_bahan_bakar || 0);
  const consSubN = 0; // Kapal Selam Nuklir tidak menggunakan BBM (Uranium)
  const consSubR = (armada.laut?.kapal_selam_regular || 0) * (armadaMiliterRate["12_kapal_selam_reguler"]?.konsumsi_bahan_bakar || 0);
  const consRanjau = (armada.laut?.kapal_ranjau || 0) * (armadaMiliterRate["13_penyapu_ranjau"]?.konsumsi_bahan_bakar || 0);
  const consLogLaut = (armada.laut?.kapal_logistik || 0) * (armadaMiliterRate["14_kapal_logistik"]?.konsumsi_bahan_bakar || 0);
  const consLaut = consInduk + consIndukNuklir + consDestroyer + consKorvet + consSubN + consSubR + consRanjau + consLogLaut;

  // Armada Udara
  const consStealth = (armada.udara?.jet_tempur_siluman || 0) * (armadaMiliterRate["15_jet_tempur_siluman"]?.konsumsi_bahan_bakar || 0);
  const consIntercept = (armada.udara?.jet_tempur_interceptor || 0) * (armadaMiliterRate["16_jet_pencegat"]?.konsumsi_bahan_bakar || 0);
  const consBomber = (armada.udara?.pesawat_pengebom || 0) * (armadaMiliterRate["17_pesawat_pembom"]?.konsumsi_bahan_bakar || 0);
  const consHeli = (armada.udara?.helikopter_serang || 0) * (armadaMiliterRate["18_helikopter_serbu"]?.konsumsi_bahan_bakar || 0);
  const consIntai = (armada.udara?.pesawat_pengintai || 0) * (armadaMiliterRate["19_pesawat_intai"]?.konsumsi_bahan_bakar || 0);
  const consUAV = (armada.udara?.drone_intai_uav || 0) * (armadaMiliterRate["20_drone_intai"]?.konsumsi_bahan_bakar || 0);
  const consKamikaze = (armada.udara?.drone_kamikaze || 0) * (armadaMiliterRate["21_drone_kamikaze"]?.konsumsi_bahan_bakar || 0);
  const consAngkut = (armada.udara?.pesawat_angkut || 0) * (armadaMiliterRate["22_transport_udara"]?.konsumsi_bahan_bakar || 0);
  const consUdara = consStealth + consIntercept + consBomber + consHeli + consIntai + consUAV + consKamikaze + consAngkut;

  const totalMilitaryConsumption = consDarat + consLaut + consUdara;
  const totalConsumption = transportConsumption + industryConsumption + totalMilitaryConsumption;
  const surplus = totalProduction - totalConsumption;

  return (
    <div className="absolute inset-0 bg-black/60 z-50 flex items-center justify-center animate-in fade-in duration-300 p-6">
      <div className="bg-zinc-950 border border-zinc-800 rounded-[40px] w-full max-w-[95vw] h-[82vh] overflow-hidden shadow-2xl flex flex-col relative animate-in zoom-in-95 duration-500">

        {/* Subtle Accents */}
        <div className="absolute top-0 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent blur-sm"></div>
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-amber-600/5 rounded-full blur-[80px]"></div>

        {/* Header Section */}
        <div className="px-8 py-6 border-b border-zinc-800/50 flex items-center justify-between bg-zinc-900/30 relative z-10">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-amber-500/10 rounded-xl border border-amber-500/20">
              <Droplet className="h-6 w-6 text-amber-500" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight leading-none uppercase">Pusat Perminyakan Nasional</h2>
              <div className="flex items-center gap-3 mt-1">
                <p className="text-xs text-zinc-500 font-medium uppercase tracking-widest mt-1">National Petroleum Control Center</p>
                <div className="flex items-center gap-1.5 px-2 py-0.5 bg-zinc-800 border border-zinc-700 rounded-md">
                   <Info size={10} className="text-amber-500" />
                   <span className="text-[8px] text-zinc-400 font-black tracking-wider uppercase italic">1 Barel = 159 Liter</span>
                </div>
              </div>
            </div>
          </div>
          <button onClick={onClose} className="p-3 rounded-2xl bg-rose-600 border border-rose-500 hover:bg-rose-500 text-white transition-all cursor-pointer shadow-[0_0_15px_rgba(225,29,72,0.3)] active:scale-95 group flex items-center gap-2">
            <span className="text-[10px] font-black uppercase tracking-widest pl-1">Tutup</span>
            <X className="h-6 w-6 group-hover:rotate-90 transition-transform" />
          </button>
        </div>

        {/* Unified Navigation Tabs */}
        <div className="px-6 py-2 bg-zinc-900/40 border-b border-zinc-800 flex gap-2 relative z-10">
          <button 
            onClick={() => setActiveMenu("Menu:Kelistrikan")}
            className="px-4 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-widest flex items-center gap-2 transition-all text-zinc-500 hover:bg-zinc-800/60 hover:text-zinc-300"
          >
            <Bolt size={16} /> Kelistrikan
          </button>
          <button 
            onClick={() => setActiveMenu("Menu:Perminyakan")}
            className="px-4 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-widest flex items-center gap-2 transition-all bg-zinc-100 text-zinc-950 shadow-lg cursor-default"
          >
            <Droplet size={16} /> Perminyakan
          </button>
          <button 
            onClick={() => setActiveMenu("Menu:Uranium")}
            className="px-4 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-widest flex items-center gap-2 transition-all text-zinc-500 hover:bg-zinc-800/60 hover:text-zinc-300"
          >
            <Radiation size={16} /> Uranium
          </button>
        </div>

        {/* Dashboard Summary (Synchronized with ProduksiHub) */}
        <div className="px-8 py-4 bg-zinc-900/50 border-b border-zinc-800/50 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            <div className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-2xl flex items-center gap-4 transition-all hover:bg-zinc-900/80">
              <div className="p-3 bg-amber-500/10 rounded-xl">
                <Package className="h-6 w-6 text-amber-500" />
              </div>
              <div>
                <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">Total Produksi</p>
                <p className="text-xl font-black text-white leading-tight">{totalProduction.toLocaleString('id-ID')} <span className="text-[10px] text-zinc-500">BRL</span></p>
              </div>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-2xl flex items-center gap-4 transition-all hover:bg-zinc-900/80">
              <div className="p-3 bg-rose-500/10 rounded-xl">
                <Activity className="h-6 w-6 text-rose-500" />
              </div>
              <div>
                <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">Total Konsumsi</p>
                <p className="text-xl font-black text-white leading-tight">{totalConsumption.toLocaleString('id-ID')} <span className="text-[10px] text-zinc-500">BRL</span></p>
              </div>
            </div>

            <div className={`bg-zinc-900/50 border border-zinc-800 p-4 rounded-2xl flex items-center gap-4 relative overflow-hidden group transition-all hover:bg-zinc-900/80 ${surplus >= 0 ? "hover:border-emerald-500/30" : "hover:border-rose-500/30"}`}>
              <div className={`p-3 rounded-xl ${surplus >= 0 ? "bg-emerald-500/10" : "bg-rose-500/10"}`}>
                {surplus >= 0 ? <TrendingUp className="h-6 w-6 text-emerald-500" /> : <TrendingDown className="h-6 w-6 text-rose-400" />}
              </div>
              <div className="relative z-10">
                <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">Neraca Perminyakan</p>
                <p className={`text-xl font-black leading-tight ${surplus >= 0 ? "text-emerald-400" : "text-rose-500"}`}>
                  {surplus.toLocaleString('id-ID')} <span className="text-[10px] text-zinc-500">BRL</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Premium Content Area */}
        <div className="flex-1 overflow-y-auto p-8 no-scrollbar bg-zinc-950/20 relative z-10">
          <div className="space-y-12">
            
            {/* Section: Sektor Ekstraksi Minyak */}
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
              <div className="flex items-center gap-3 mb-5 px-1">
                <div className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-800">
                  <Pickaxe className="h-4 w-4 text-amber-500" />
                </div>
                <h3 className="text-xl font-black text-white uppercase tracking-widest italic">1. Sektor Ekstraksi Minyak <span className="text-amber-500 ml-3 font-black lowercase italic text-xs tracking-normal bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">(1 Jenis Sumur)</span></h3>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-zinc-800 to-transparent ml-4 opacity-50"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-1 pb-4">
                <div className="bg-zinc-900/40 border border-zinc-800 p-6 rounded-[2.5rem] flex flex-col gap-6 relative group overflow-hidden transition-all hover:bg-zinc-900/60 shadow-lg min-h-[220px]">
                  <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity pointer-events-none">
                    <Droplet className="h-24 w-24" />
                  </div>
                  
                  <div className="flex items-start justify-between relative z-10">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-2xl bg-zinc-950 border border-zinc-800 group-hover:scale-110 transition-transform duration-500 shadow-xl text-amber-500">
                        <Zap size={22} />
                      </div>
                      <div className="p-2 bg-zinc-950/50 border border-zinc-800 rounded-xl">
                        <Info className="h-4 w-4 text-zinc-600" />
                      </div>
                    </div>
                    <div className="bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-xl">
                      <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest whitespace-nowrap">Aktif: {countOilWells} Unit</span>
                    </div>
                  </div>

                  <div className="space-y-1 relative z-10">
                    <h4 className="text-sm font-black text-white uppercase tracking-tighter italic leading-tight group-hover:text-amber-400 transition-colors">Sumur Minyak Bumi</h4>
                    <div className="flex flex-col gap-2 pt-3">
                      <div className="flex items-center gap-2">
                        <TrendingUp size={12} className="text-zinc-500" />
                        <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Output Harian Nasional</span>
                      </div>
                      <p className="text-2xl font-black text-white tracking-tight tabular-nums">
                        {totalProduction.toLocaleString('id-ID')} <span className="text-[10px] text-zinc-600 uppercase font-bold ml-1">BRL</span>
                      </p>
                    </div>
                  </div>

                  <div className="mt-auto relative z-10">
                    <div className="h-1.5 w-full bg-zinc-950 rounded-full overflow-hidden border border-zinc-900">
                      <div className="h-full bg-amber-500 rounded-full shadow-[0_0_10px_rgba(245,158,11,0.4)] transition-all duration-1000" style={{ width: countOilWells > 0 ? '100%' : '0%' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section: Alokasi Konsumsi BBM */}
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 pt-8 border-t border-zinc-900/50">
              <div className="flex items-center gap-3 mb-8 px-1">
                <div className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-800">
                  <Activity className="h-4 w-4 text-rose-400" />
                </div>
                <h3 className="text-xl font-black text-white uppercase tracking-widest italic">2. Alokasi Konsumsi BBM Nasional</h3>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-zinc-800 to-transparent ml-4 opacity-50"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { label: "Sepeda Motor", val: consMotor, icon: Bike, color: "text-zinc-400", desc: "Transportasi Roda 2" },
                  { label: "Kendaraan Pribadi", val: consCar, icon: Car, color: "text-zinc-400", desc: "Transportasi Roda 4" },
                  { label: "Angkutan Logistik", val: consTruck, icon: Truck, color: "text-zinc-400", desc: "Rantai Pasok Nasional" },
                  { label: "Transportasi Bus", val: consBus, icon: Bus, color: "text-zinc-400", desc: "Transportasi Publik" },
                  { label: "Armada Militer", val: totalMilitaryConsumption, icon: Shield, color: "text-rose-400", desc: "Bahan Bakar Taktis" },
                  { label: "Sektor Industri", val: industryConsumption, icon: Factory, color: "text-amber-400", desc: "Industri & Smelting" },
                ].map((item, idx) => (
                  <div key={idx} className="bg-zinc-900/30 border border-zinc-800/50 p-5 rounded-2xl flex items-center justify-between hover:bg-zinc-800/50 hover:border-rose-500/20 transition-all group">
                    <div className="flex items-center gap-4">
                      <div className={`p-2.5 bg-zinc-950 rounded-xl border border-zinc-800 group-hover:scale-110 transition-transform ${item.color}`}>
                        <item.icon size={18} />
                      </div>
                      <div>
                        <p className="text-[11px] text-zinc-100 font-black uppercase tracking-widest leading-none">{item.label}</p>
                        <p className="text-[9px] text-zinc-600 mt-1.5 font-bold tracking-tighter uppercase">{item.desc}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-black text-white tabular-nums leading-none">{item.val.toLocaleString('id-ID')}</p>
                      <p className="text-[10px] text-zinc-600 font-black uppercase tracking-widest mt-1">BRL</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

