import React from 'react';
import { Layers, TreePine, Hammer, Construction, Warehouse } from "lucide-react";
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
  "6_pembangkit_listrik_tenaga_angin": { beton: 350, baja: 700, kayu: 0 },

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
  "1_peternakan_unggas": { beton: 20, baja: 10, kayu: 150 },
  "2_peternakan_sapi_perah": { beton: 40, baja: 15, kayu: 250 },
  "3_peternakan_sapi_potong": { beton: 40, baja: 15, kayu: 250 },
  "4_peternakan_domba_kambing": { beton: 30, baja: 10, kayu: 200 },

  // --- 5. SEKTOR AGRIKULTUR ---
  "1_sawah_padi": { beton: 10, baja: 5, kayu: 100 },
  "2_ladang_gandum": { beton: 10, baja: 5, kayu: 100 },
  "3_ladang_jagung": { beton: 10, baja: 5, kayu: 100 },
  "4_ladang_umbi": { beton: 15, baja: 5, kayu: 150 },
  "5_ladang_kedelai": { beton: 15, baja: 5, kayu: 150 },
  "6_perkebunan_sawit": { beton: 100, baja: 50, kayu: 500 },
  "7_perkebunan_teh": { beton: 30, baja: 10, kayu: 300 },
  "8_perkebunan_kopi": { beton: 30, baja: 10, kayu: 300 },
  "9_perkebunan_kakao": { beton: 30, baja: 10, kayu: 300 },
  "10_perkebunan_tebu": { beton: 30, baja: 10, kayu: 300 },
  "11_kebun_sayur": { beton: 5, baja: 2, kayu: 100 },
  "12_perkebunan_karet": { beton: 80, baja: 40, kayu: 400 },
  "13_perkebunan_kapas": { beton: 20, baja: 10, kayu: 200 },
  "14_perkebunan_tembakau": { beton: 15, baja: 5, kayu: 150 },

  // --- 6. SEKTOR PERIKANAN ---
  "1_tambak_udang": { beton: 150, baja: 50, kayu: 200 },
  "2_budidaya_ikan_tawar": { beton: 100, baja: 30, kayu: 300 },
  "3_budidaya_mutiara": { beton: 200, baja: 100, kayu: 150 },

  // --- 7. SEKTOR OLAHAN PANGAN ---
  "1_pabrik_air_mineral": { beton: 300, baja: 200, kayu: 0 },
  "2_pabrik_gula": { beton: 600, baja: 800, kayu: 100 },
  "3_pabrik_roti": { beton: 250, baja: 150, kayu: 50 },
  "4_pabrik_pengolahan_daging": { beton: 500, baja: 400, kayu: 0 },
  "5_pabrik_mie_instan": { beton: 400, baja: 300, kayu: 0 },
  "6_pabrik_minyak_goreng": { beton: 450, baja: 350, kayu: 0 },
  "7_pabrik_pengolahan_susu": { beton: 350, baja: 250, kayu: 0 },
  "8_pabrik_pakan_ternak": { beton: 300, baja: 200, kayu: 50 },
  "9_pabrik_pengalengan_ikan": { beton: 400, baja: 300, kayu: 0 },
  "10_pabrik_pengolahan_kopi_teh": { beton: 250, baja: 150, kayu: 50 },

  // --- 8. SEKTOR FARMASI ---
  "1_pabrik_farmasi": { beton: 800, baja: 600, kayu: 0 },

  // --- 9. SEKTOR INFRASTRUKTUR ---
  "1_jalur_sepeda": { beton: 10, baja: 5, kayu: 0 },
  "2_jalan_tol": { beton: 1500, baja: 800, kayu: 0 },
  "3_terminal_bus": { beton: 400, baja: 300, kayu: 50 },
  "4_jalur_kereta": { beton: 1200, baja: 2000, kayu: 200 },
  "5_kereta_bawah_tanah": { beton: 3500, baja: 5000, kayu: 0 },
  "6_pelabuhan_laut": { beton: 2500, baja: 3500, kayu: 500 },
  "7_bandara": { beton: 4000, baja: 6000, kayu: 200 },
  "8_helipad": { beton: 150, baja: 200, kayu: 0 },

  // --- 10. SEKTOR SOSIAL (PENDIDIKAN) ---
  "1_prasekolah": { beton: 150, baja: 50, kayu: 100 },
  "2_dasar": { beton: 250, baja: 80, kayu: 150 },
  "3_menengah": { beton: 400, baja: 150, kayu: 50 },
  "4_lanjutan": { beton: 600, baja: 250, kayu: 50 },
  "5_universitas": { beton: 1200, baja: 800, kayu: 0 },
  "6_lembaga_pendidikan": { beton: 800, baja: 400, kayu: 50 },
  "7_laboratorium": { beton: 1500, baja: 1200, kayu: 0 },
  "8_observatorium": { beton: 1000, baja: 800, kayu: 0 },
  "9_pusat_penelitian": { beton: 2000, baja: 1500, kayu: 0 },
  "10_pusat_pengembangan": { beton: 1800, baja: 1200, kayu: 0 },

  // --- 11. SEKTOR SOSIAL (KESEHATAN & HUKUM) ---
  "11_rumah_sakit_besar": { beton: 2500, baja: 1800, kayu: 0 },
  "12_rumah_sakit_kecil": { beton: 600, baja: 300, kayu: 0 },
  "13_pusat_diagnostik": { beton: 400, baja: 200, kayu: 0 },
  "14_kejaksaan_court": { beton: 1500, baja: 800, kayu: 0 },
  "15_legal_aid": { beton: 300, baja: 150, kayu: 50 },

  // --- 12. SEKTOR SOSIAL (OLAHRAGA, KOMERSIAL, HIBURAN) ---
  "16_kolam_renang": { beton: 300, baja: 150, kayu: 0 },
  "17_sirkuit_balap": { beton: 1500, baja: 2000, kayu: 0 },
  "18_stadium_int": { beton: 5000, baja: 8000, kayu: 0 },
  "19_gym_center": { beton: 400, baja: 250, kayu: 0 },
  "20_lapangan_golf": { beton: 200, baja: 100, kayu: 500 },
  "21_esports_arena": { beton: 800, baja: 1200, kayu: 0 },
  "22_gokart_circuit": { beton: 600, baja: 400, kayu: 0 },
  "23_pusat_belanja": { beton: 2500, baja: 3500, kayu: 0 },
  "24_hotel": { beton: 3500, baja: 4500, kayu: 0 },
  "25_pusat_grosir_tekstil": { beton: 1200, baja: 800, kayu: 100 },
  "26_bioskop": { beton: 800, baja: 1200, kayu: 0 },
  "27_gedung_teater": { beton: 1500, baja: 2000, kayu: 100 },

  // --- 13. PERTAHANAN NASIONAL (MANAJEMEN) ---
  "penjara": { beton: 2500, baja: 1200, kayu: 0 },
  "1_penjara": { beton: 2500, baja: 1200, kayu: 0 },
  "gudang_senjata": { beton: 1500, baja: 2500, kayu: 0 },
  "2_gudang_senjata": { beton: 1500, baja: 2500, kayu: 0 },
  "hangar_tank": { beton: 3500, baja: 5500, kayu: 0 },
  "3_hangar_tank": { beton: 3500, baja: 5500, kayu: 0 },
  "pusat_komando": { beton: 12000, baja: 8000, kayu: 0 },
  "5_pusat_komando": { beton: 12000, baja: 8000, kayu: 0 },
  "pangkalan_udara": { beton: 25000, baja: 18000, kayu: 0 },
  "6_pangkalan_udara": { beton: 25000, baja: 18000, kayu: 0 },
  "pangkalan_laut": { beton: 35000, baja: 25000, kayu: 0 },
  "7_pangkalan_laut": { beton: 35000, baja: 25000, kayu: 0 },
  "program_luar_angkasa": { beton: 85000, baja: 120000, kayu: 0 },
  "8_program_luar_angkasa": { beton: 85000, baja: 120000, kayu: 0 },
  "pertahanan_siber": { beton: 4500, baja: 6500, kayu: 0 },
  "9_pertahanan_siber": { beton: 4500, baja: 6500, kayu: 0 },

  // --- 14. KEPOLISIAN (ARMADA POLISI) ---
  "1_pusat_komando": { beton: 5500, baja: 3500, kayu: 0 },
  "pusat_komando_polisi": { beton: 5500, baja: 3500, kayu: 0 },
  "2_akademi_polisi": { beton: 3500, baja: 1500, kayu: 200 },
  "akademi_polisi": { beton: 3500, baja: 1500, kayu: 200 },
  "3_pusat_forensik": { beton: 1200, baja: 800, kayu: 0 },
  "pusat_forensik": { beton: 1200, baja: 800, kayu: 0 },
  "4_kantor_polisi": { beton: 800, baja: 400, kayu: 50 },
  "kantor_polisi": { beton: 800, baja: 400, kayu: 50 },
  "5_pos_polisi": { beton: 150, baja: 80, kayu: 30 },
  "pos_polisi": { beton: 150, baja: 80, kayu: 30 },
  "6_network_cctv": { beton: 50, baja: 150, kayu: 0 },
  "network_cctv": { beton: 50, baja: 150, kayu: 0 },
  "7_armada_mobil": { beton: 0, baja: 25, kayu: 0 },
  "armada_mobil_polisi": { beton: 0, baja: 25, kayu: 0 },
  "8_mobil_interceptor": { beton: 0, baja: 30, kayu: 0 },
  "mobil_interceptor": { beton: 0, baja: 30, kayu: 0 },
  "9_unit_r2": { beton: 0, baja: 5, kayu: 0 },
  "unit_r2": { beton: 0, baja: 5, kayu: 0 },
  "10_heli_polisi": { beton: 200, baja: 500, kayu: 0 },
  "heli_polisi": { beton: 200, baja: 500, kayu: 0 },
  "11_unit_k9": { beton: 100, baja: 50, kayu: 150 },
  "unit_k9": { beton: 100, baja: 50, kayu: 150 },
  "12_swat": { beton: 400, baja: 300, kayu: 0 },
  "swat": { beton: 400, baja: 300, kayu: 0 },
  "13_anti_huru_hara": { beton: 300, baja: 200, kayu: 0 },
  "anti_huru_hara": { beton: 300, baja: 200, kayu: 0 },

  // --- 15. INTELIJEN ---
  "sistem_satelit": { beton: 5000, baja: 12000, kayu: 0 },
  "jaringan_radar": { beton: 2500, baja: 4500, kayu: 0 },
  "operasi_siber": { beton: 1500, baja: 2500, kayu: 0 },

  // --- 16. ARMADA MILITER ---
  "1_barak": { beton: 1500, baja: 800, kayu: 300 },
  "barak": { beton: 1500, baja: 800, kayu: 300 },
  "2_tank": { beton: 0, baja: 1500, kayu: 0 },
  "tank": { beton: 0, baja: 1500, kayu: 0 },
  "3_apc": { beton: 0, baja: 800, kayu: 0 },
  "apc": { beton: 0, baja: 800, kayu: 0 },
  "4_artileri": { beton: 0, baja: 1200, kayu: 0 },
  "artileri": { beton: 0, baja: 1200, kayu: 0 },
  "5_roket_peluncur": { beton: 0, baja: 2500, kayu: 0 },
  "roket_peluncur": { beton: 0, baja: 2500, kayu: 0 },
  "6_misil_sam": { beton: 200, baja: 3500, kayu: 0 },
  "misil_sam": { beton: 200, baja: 3500, kayu: 0 },
  "7_kendaraan_taktis": { beton: 0, baja: 400, kayu: 0 },
  "kendaraan_taktis": { beton: 0, baja: 400, kayu: 0 },
  "8_kapal_induk": { beton: 10000, baja: 15000, kayu: 0 },
  "kapal_induk": { beton: 10000, baja: 15000, kayu: 0 },
  "8b_kapal_induk_nuklir": { beton: 15000, baja: 25000, kayu: 0 },
  "kapal_induk_nuklir": { beton: 15000, baja: 25000, kayu: 0 },
  "9_kapal_perusak": { beton: 2000, baja: 4500, kayu: 0 },
  "kapal_perusak": { beton: 2000, baja: 4500, kayu: 0 },
  "10_kapal_korvet": { beton: 1000, baja: 1500, kayu: 0 },
  "kapal_korvet": { beton: 1000, baja: 1500, kayu: 0 },
  "11_kapal_selam_nuklir": { beton: 1000, baja: 3500, kayu: 0 },
  "kapal_selam_nuklir": { beton: 1000, baja: 3500, kayu: 0 },
  "12_kapal_selam_reguler": { beton: 800, baja: 2000, kayu: 0 },
  "kapal_selam_reguler": { beton: 800, baja: 2000, kayu: 0 },
  "13_penyapu_ranjau": { beton: 400, baja: 500, kayu: 0 },
  "penyapu_ranjau": { beton: 400, baja: 500, kayu: 0 },
  "14_kapal_logistik": { beton: 1000, baja: 1200, kayu: 0 },
  "kapal_logistik": { beton: 1000, baja: 1200, kayu: 0 },
  "15_jet_tempur_siluman": { beton: 0, baja: 800, kayu: 0 },
  "jet_tempur_siluman": { beton: 0, baja: 800, kayu: 0 },
  "16_jet_pencegat": { beton: 0, baja: 450, kayu: 0 },
  "jet_pencegat": { beton: 0, baja: 450, kayu: 0 },
  "17_pesawat_pembom": { beton: 0, baja: 1200, kayu: 0 },
  "pesawat_pembom": { beton: 0, baja: 1200, kayu: 0 },
  "18_helikopter_serbu": { beton: 0, baja: 250, kayu: 0 },
  "helikopter_serbu": { beton: 0, baja: 250, kayu: 0 },
  "19_pesawat_intai": { beton: 0, baja: 350, kayu: 0 },
  "pesawat_intai": { beton: 0, baja: 350, kayu: 0 },
  "20_drone_intai": { beton: 0, baja: 20, kayu: 0 },
  "drone_intai": { beton: 0, baja: 20, kayu: 0 },
  "21_drone_kamikaze": { beton: 0, baja: 5, kayu: 0 },
  "drone_kamikaze": { beton: 0, baja: 5, kayu: 0 },
  "22_transport_udara": { beton: 0, baja: 550, kayu: 0 },
  "transport_udara": { beton: 0, baja: 550, kayu: 0 },

  // --- 17. HUNIAN & PEMUKIMAN ---
  "rumah_subsidi": { beton: 10, baja: 0, kayu: 20 },
  "apartemen": { beton: 100, baja: 50, kayu: 0 },
  "mansion": { beton: 200, baja: 50, kayu: 50 },

  // --- 18. PABRIK MILITER ---
  "1_pabrik_amunisi": { beton: 1200, baja: 1500, kayu: 0 },
  "2_pabrik_amunisi": { beton: 1200, baja: 1500, kayu: 0 },
  "pabrik_amunisi": { beton: 1200, baja: 1500, kayu: 0 },
  "2_pabrik_kendaraan_tempur": { beton: 1200, baja: 1500, kayu: 0 },
  "pabrik_kendaraan_tempur": { beton: 1200, baja: 1500, kayu: 0 },
  "2_pabrik_senjata_berat": { beton: 1200, baja: 1500, kayu: 0 },
  "pabrik_senjata_berat": { beton: 1200, baja: 1500, kayu: 0 },
  "2_pabrik_drone_kamikaze": { beton: 1200, baja: 1500, kayu: 0 },
  "pabrik_drone_kamikaze": { beton: 1200, baja: 1500, kayu: 0 },
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
