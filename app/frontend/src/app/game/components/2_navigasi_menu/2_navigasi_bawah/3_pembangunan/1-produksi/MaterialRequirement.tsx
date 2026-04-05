import React from 'react';
import { Layers, TreePine, Hammer, Construction, Warehouse } from "lucide-react";
import { CountryData } from "@/app/database/data/semua_fitur_negara/index";
import { budgetStorage } from "@/app/game/components/1_navbar/3_kas_negara";

/**
 * Interface untuk persyaratan material bangunan
 */
export interface BuildingRequirement {
  beton: number;
  kayu: number;
  baja: number;
}

/**
 * Database Kebutuhan Material (Beton, Kayu, Baja)
 * Mapping dari buildingKey ke BuildingRequirement
 */
export const BUILDING_REQUIREMENTS: Record<string, BuildingRequirement> = {
  // --- 1. SEKTOR KELISTRIKAN ---
  "1_pembangkit_listrik_tenaga_nuklir": { beton: 2500, baja: 5000, kayu: 0 },
  "2_pembangkit_listrik_tenaga_air": { beton: 1200, baja: 1800, kayu: 100 },
  "3_pembangkit_listrik_tenaga_surya": { beton: 200, baja: 450, kayu: 0 },
  "4_pembangkit_listrik_tenaga_uap": { beton: 850, baja: 1400, kayu: 0 },
  "5_pembangkit_listrik_tenaga_gas": { beton: 600, baja: 950, kayu: 0 },
  "6_pembangkit_listrik_tenaga_bayu": { beton: 350, baja: 700, kayu: 0 },

  // --- 2. SEKTOR EKSTRAKSI ---
  "1_tambang_emas": { beton: 150, baja: 300, kayu: 450 },
  "2_tambang_uranium": { beton: 250, baja: 500, kayu: 400 },
  "3_tambang_batu_bara": { beton: 100, baja: 250, kayu: 600 },
  "4_sumur_minyak": { beton: 400, baja: 800, kayu: 0 },
  "5_pengeboran_gas": { beton: 350, baja: 750, kayu: 0 },
  "6_tambang_garam": { beton: 50, baja: 100, kayu: 150 },
  "7_tambang_nikel": { beton: 200, baja: 400, kayu: 300 },
  "8_tambang_litium": { beton: 200, baja: 400, kayu: 250 },
  "9_tambang_tembaga": { beton: 200, baja: 400, kayu: 350 },
  "10_tambang_aluminium": { beton: 200, baja: 400, kayu: 300 },
  "11_tambang_logam_tanah_jarang": { beton: 300, baja: 600, kayu: 200 },
  "12_tambang_bijih_besi": { beton: 150, baja: 350, kayu: 400 },

  // --- 3. SEKTOR MANUFAKTUR ---
  "1_pabrik_elektronik": { beton: 800, baja: 1200, kayu: 0 },
  "2_pabrik_mobil": { beton: 1000, baja: 1500, kayu: 0 },
  "3_pabrik_motor": { beton: 500, baja: 750, kayu: 0 },
  "4_smelter": { beton: 1500, baja: 2500, kayu: 0 },
  "5_pabrik_semen": { beton: 2000, baja: 1000, kayu: 0 },
  "6_penggergajian_kayu": { beton: 200, baja: 150, kayu: 1000 },

  // --- 4. SEKTOR PETERNAKAN ---
  "1_peternakan_ayam_unggas": { beton: 20, baja: 10, kayu: 150 },
  "2_peternakan_sapi_perah": { beton: 40, baja: 15, kayu: 250 },
  "3_peternakan_sapi_potong": { beton: 40, baja: 15, kayu: 250 },
  "4_peternakan_domba_kambing": { beton: 30, baja: 10, kayu: 200 },

  // --- 5. SEKTOR AGRIKULTUR ---
  "1_pertanian_padi": { beton: 10, baja: 5, kayu: 100 },
  "2_pertanian_gandum_jagung": { beton: 10, baja: 5, kayu: 100 },
  "3_pertanian_sayur_umbi": { beton: 5, baja: 2, kayu: 150 },
  "4_pertanian_kedelai": { beton: 5, baja: 2, kayu: 150 },
  "5_perkebunan_kelapa_sawit": { beton: 100, baja: 50, kayu: 500 },
  "6_perkebunan_kopi_teh_kakao": { beton: 30, baja: 10, kayu: 300 },

  // --- 6. SEKTOR PERIKANAN ---
  "1_budidaya_udang_kerang": { beton: 150, baja: 50, kayu: 200 },
  "2_budidaya_ikan": { beton: 100, baja: 30, kayu: 300 },

  // --- 7. SEKTOR OLAHAN PANGAN ---
  "1_pabrik_air_mineral": { beton: 300, baja: 200, kayu: 0 },
  "2_pabrik_gula": { beton: 600, baja: 800, kayu: 100 },
  "3_pabrik_roti": { beton: 250, baja: 150, kayu: 50 },
  "4_pabrik_pengolahan_daging": { beton: 500, baja: 400, kayu: 0 },
  "5_pabrik_mie_instan": { beton: 400, baja: 300, kayu: 0 },

  // --- 8. SEKTOR FARMASI ---
  "1_pabrik_farmasi": { beton: 800, baja: 600, kayu: 0 },

  // --- 9. SEKTOR INFRASTRUKTUR (Contoh) ---
  "1_jalur_sepeda": { beton: 10, baja: 5, kayu: 0 },
  "2_jalan_tol": { beton: 1500, baja: 800, kayu: 0 },
  "3_terminal_bus": { beton: 400, baja: 300, kayu: 50 },
  "4_jalur_kereta": { beton: 1200, baja: 2000, kayu: 200 },
  "5_kereta_bawah_tanah": { beton: 3500, baja: 5000, kayu: 0 },
  "6_pelabuhan_laut": { beton: 2500, baja: 3500, kayu: 500 },
  "7_bandara": { beton: 4000, baja: 6000, kayu: 200 },
  "8_helipad": { beton: 150, baja: 200, kayu: 0 },

  // --- 10. SEKTOR SOSIAL (Contoh) ---
  "tk_sd": { beton: 150, baja: 50, kayu: 100 },
  "smp_sma": { beton: 400, baja: 150, kayu: 50 },
  "pt_lembaga": { beton: 1200, baja: 800, kayu: 0 },
  "lab_riset": { beton: 1500, baja: 1200, kayu: 0 },
  "rumah_sakit_besar": { beton: 2500, baja: 1800, kayu: 0 },
  "rumah_sakit_kecil": { beton: 600, baja: 300, kayu: 0 },
  "stadium_int": { beton: 5000, baja: 8000, kayu: 0 },
  "kejaksaan_court": { beton: 1000, baja: 700, kayu: 0 },
  "stasiun_komando": { beton: 1200, baja: 1500, kayu: 0 },

  // --- 11. SEKTOR PABRIK MILITER ---
  "pabrik_drone_kamikaze": { beton: 850, baja: 1100, kayu: 0 },
  "pabrik_amunisi": { beton: 600, baja: 900, kayu: 150 },
  "pabrik_kendaraan_tempur": { beton: 1200, baja: 1800, kayu: 0 },
  "pabrik_senjata_berat": { beton: 1500, baja: 2200, kayu: 0 },

  // --- 12. PERTAHANAN NASIONAL ---
  "1_penjara": { beton: 1200, baja: 800, kayu: 200 },
  "2_gudang_senjata": { beton: 800, baja: 1400, kayu: 100 },
  "3_hangar_tank": { beton: 1500, baja: 2500, kayu: 0 },
  "4_akademi_militer": { beton: 2500, baja: 1800, kayu: 0 },
  "5_pusat_komando": { beton: 4000, baja: 3000, kayu: 0 },
  "6_pangkalan_udara": { beton: 3500, baja: 5000, kayu: 200 },
  "7_pangkalan_laut": { beton: 4500, baja: 7000, kayu: 500 },
  "8_program_luar_angkasa": { beton: 8000, baja: 15000, kayu: 0 },
  "9_pertahanan_siber": { beton: 1000, baja: 600, kayu: 0 },

  // --- 13. KEPOLISIAN NEGARA ---
  "1_pusat_komando": { beton: 1500, baja: 1200, kayu: 0 },
  "2_akademi_polisi": { beton: 1000, baja: 800, kayu: 0 },
  "3_pusat_forensik": { beton: 600, baja: 400, kayu: 0 },
  "4_kantor_polisi": { beton: 400, baja: 200, kayu: 50 },
  "5_pos_polisi": { beton: 100, baja: 50, kayu: 20 },
  "6_network_cctv": { beton: 50, baja: 300, kayu: 0 },
  "7_armada_mobil": { beton: 0, baja: 150, kayu: 0 },
  "8_mobil_interceptor": { beton: 0, baja: 200, kayu: 0 },
  "9_unit_r2": { beton: 0, baja: 50, kayu: 0 },
  "10_heli_polisi": { beton: 100, baja: 1200, kayu: 0 },
  "11_unit_k9": { beton: 50, baja: 20, kayu: 100 },
  "12_swat": { beton: 200, baja: 400, kayu: 0 },
  "13_anti_huru_hara": { beton: 150, baja: 300, kayu: 0 },

  // --- 14. UNIT MILITER (ARMADA MILITER) ---
  "barak": { beton: 400, baja: 300, kayu: 50 },
  "tank": { beton: 150, baja: 800, kayu: 0 },
  "apc": { beton: 80, baja: 400, kayu: 0 },
  "artileri": { beton: 120, baja: 500, kayu: 0 },
  "rocket": { beton: 150, baja: 600, kayu: 0 },
  "sam": { beton: 180, baja: 700, kayu: 0 },
  "tactical": { beton: 50, baja: 200, kayu: 0 },
  
  "carrier": { beton: 2500, baja: 8000, kayu: 200 },
  "destroyer": { beton: 800, baja: 3500, kayu: 50 },
  "corvette": { beton: 500, baja: 2000, kayu: 30 },
  "submarine": { beton: 600, baja: 4500, kayu: 0 },
  "reg_sub": { beton: 400, baja: 2500, kayu: 0 },
  "mine_ship": { beton: 200, baja: 800, kayu: 20 },
  "logistics": { beton: 300, baja: 1200, kayu: 100 },

  "stealth_jet": { beton: 100, baja: 600, kayu: 0 },
  "interceptor": { beton: 80, baja: 400, kayu: 0 },
  "bomber": { beton: 150, baja: 900, kayu: 0 },
  "heli_attack": { beton: 60, baja: 300, kayu: 0 },
  "recon_plane": { beton: 40, baja: 200, kayu: 0 },
  "uav": { beton: 10, baja: 50, kayu: 0 },
  "kamikaze": { beton: 5, baja: 20, kayu: 0 },
  "transport": { beton: 120, baja: 500, kayu: 20 },
};

/**
 * Mendapatkan persyaratan material untuk kunci bangunan tertentu
 */
export const getBuildingRequirement = (key: string): BuildingRequirement => {
  return BUILDING_REQUIREMENTS[key] || { beton: 0, kayu: 0, baja: 0 };
};

interface Props {
  buildingKey: string;
  quantity: number;
}

/**
 * Komponen UI untuk menampilkan persyaratan material dan stok gudang
 */
export const MaterialRequirement: React.FC<Props> = ({ buildingKey, quantity }) => {
  const requirements = getBuildingRequirement(buildingKey);
  
  // Jika tidak ada material yang dibutuhkan, tidak tampilkan apapun
  if (requirements.beton === 0 && requirements.kayu === 0 && requirements.baja === 0) {
    return null;
  }

  // Mengambil stok riil dari budgetStorage (Cumulative Production)
  const cumulativeStock = budgetStorage.getCumulativeProduction();
  const stocks = {
    beton: cumulativeStock["5_pabrik_semen"] || 0,
    kayu: cumulativeStock["6_penggergajian_kayu"] || 0,
    baja: cumulativeStock["12_tambang_bijih_besi"] || 0,
  };

  const materials = [
    { label: "Beton", value: requirements.beton * quantity, currentStock: stocks.beton, icon: Layers, color: "text-zinc-300", bg: "bg-zinc-500/10", border: "border-zinc-500/20" },
    { label: "Baja", value: requirements.baja * quantity, currentStock: stocks.baja, icon: Hammer, color: "text-amber-500", bg: "bg-amber-500/10", border: "border-amber-500/20" },
    { label: "Kayu", value: requirements.kayu * quantity, currentStock: stocks.kayu, icon: TreePine, color: "text-emerald-500", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
  ].filter(m => m.value > 0);

  return (
    <div className="w-full space-y-4 mt-6">
      <div className="flex items-center justify-between px-1">
        <div className="flex items-center gap-2">
            <Construction size={14} className="text-cyan-500" />
            <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Kebutuhan Material Bangunan</span>
        </div>
        <div className="flex items-center gap-1.5 opacity-60">
            <Warehouse size={12} className="text-zinc-500" />
            <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-tighter">Stok Gudang Riil</span>
        </div>
      </div>
      
      <div className={`grid ${materials.length === 1 ? 'grid-cols-1' : materials.length === 2 ? 'grid-cols-2' : 'grid-cols-3'} gap-2.5`}>
        {materials.map((m) => {
          const isLowStock = m.currentStock < m.value;
          return (
            <div key={m.label} className={`flex flex-col gap-2 p-3.5 rounded-[22px] ${m.bg} border ${m.border} group transition-all duration-300 hover:bg-zinc-900/40`}>
                <div className="flex items-start justify-between">
                    <div className={`p-1.5 rounded-lg bg-zinc-950/50 border ${m.border}`}>
                        {/* @ts-ignore */}
                        <m.icon size={16} className={`${m.color}`} />
                    </div>
                    <div className="text-right">
                        <span className="text-[8px] font-bold text-zinc-600 uppercase block leading-none">Dibutuhkan</span>
                        <span className={`text-[13px] font-black ${isLowStock ? "text-rose-500" : m.color}`}>{m.value.toLocaleString('id-ID')}</span>
                    </div>
                </div>

                <div className="h-[1px] w-full bg-zinc-800/30"></div>

                <div className="flex items-center justify-between">
                    <span className="text-[9px] font-black text-zinc-500 uppercase tracking-tighter italic">{m.label}</span>
                    <div className="flex flex-col items-end">
                        <span className={`text-[11px] font-black tracking-tight ${isLowStock ? "text-rose-500" : "text-white"}`}>
                            {m.currentStock.toLocaleString('id-ID')} <span className="text-[7px] opacity-50">T</span>
                        </span>
                        <span className="text-[6px] font-bold text-zinc-600 -mt-0.5 uppercase">Gudang</span>
                    </div>
                </div>
                
                {/* Visual Progress/Stock indicator */}
                <div className="h-1 w-full bg-zinc-950 rounded-full overflow-hidden mt-0.5">
                    <div 
                        className={`h-full ${isLowStock ? 'bg-rose-500' : 'bg-emerald-500'} transition-all duration-500`} 
                        style={{ width: `${m.value > 0 ? Math.min(100, (m.currentStock / m.value) * 100) : 100}%` }}
                    />
                </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MaterialRequirement;
