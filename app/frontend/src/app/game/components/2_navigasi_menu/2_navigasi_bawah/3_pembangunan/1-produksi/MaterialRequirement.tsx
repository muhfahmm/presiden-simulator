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
  "1_pembangkit_listrik_tenaga_nuklir": { beton: 95500, baja: 88000, kayu: 0 },
  "2_pembangkit_listrik_tenaga_air": { beton: 72000, baja: 64500, kayu: 32000 },
  "3_pembangkit_listrik_tenaga_surya": { beton: 35000, baja: 42500, kayu: 0 },
  "4_pembangkit_listrik_tenaga_uap": { beton: 58000, baja: 71000, kayu: 0 },
  "5_pembangkit_listrik_tenaga_gas": { beton: 44500, baja: 52000, kayu: 0 },
  "6_pembangkit_listrik_tenaga_angin": { beton: 38000, baja: 45500, kayu: 0 },

  // --- 2. SEKTOR EKSTRAKSI ---
  "1_tambang_emas": { beton: 62500, baja: 58000, kayu: 44500 },
  "2_tambang_uranium": { beton: 74000, baja: 82500, kayu: 55000 },
  "3_tambang_batu_bara": { beton: 38500, baja: 45000, kayu: 32000 },
  "4_sumur_minyak": { beton: 52000, baja: 66500, kayu: 0 },
  "5_pengeboran_gas": { beton: 48000, baja: 59500, kayu: 0 },
  "6_tambang_garam": { beton: 26500, baja: 28000, kayu: 25500 },
  "7_tambang_nikel": { beton: 41000, baja: 48500, kayu: 36000 },
  "8_tambang_litium": { beton: 43500, baja: 51000, kayu: 38500 },
  "9_tambang_tembaga": { beton: 39500, baja: 46000, kayu: 34500 },
  "10_tambang_aluminium": { beton: 37000, baja: 44500, kayu: 32500 },
  "11_tambang_logam_tanah_jarang": { beton: 68500, baja: 75000, kayu: 49000 },
  "12_tambang_bijih_besi": { beton: 34000, baja: 41500, kayu: 29500 },

  // --- 3. SEKTOR MANUFAKTUR ---
  "1_pabrik_elektronik": { beton: 55500, baja: 68000, kayu: 0 },
  "2_pabrik_mobil": { beton: 64000, baja: 78500, kayu: 0 },
  "3_pabrik_motor": { beton: 42500, baja: 53000, kayu: 0 },
  "4_smelter": { beton: 89000, baja: 94500, kayu: 0 },
  "5_pabrik_semen": { beton: 76500, baja: 54000, kayu: 0 },
  "6_penggergajian_kayu": { beton: 31000, baja: 28500, kayu: 62000 },

  // --- 4. SEKTOR PETERNAKAN ---
  "1_peternakan_unggas": { beton: 25500, baja: 25000, kayu: 34500 },
  "2_peternakan_sapi_perah": { beton: 28000, baja: 26500, kayu: 41000 },
  "3_peternakan_sapi_potong": { beton: 28000, baja: 26500, kayu: 41000 },
  "4_peternakan_domba_kambing": { beton: 26500, baja: 25500, kayu: 37500 },

  // --- 5. SEKTOR AGRIKULTUR ---
  "1_sawah_padi": { beton: 25000, baja: 25000, kayu: 32000 },
  "2_ladang_gandum": { beton: 25000, baja: 25000, kayu: 32000 },
  "3_ladang_jagung": { beton: 25000, baja: 25000, kayu: 32000 },
  "4_ladang_umbi": { beton: 25500, baja: 25000, kayu: 35500 },
  "5_ladang_kedelai": { beton: 25500, baja: 25000, kayu: 35500 },
  "6_perkebunan_sawit": { beton: 38500, baja: 32000, kayu: 56500 },
  "7_perkebunan_teh": { beton: 27500, baja: 25500, kayu: 44000 },
  "8_perkebunan_kopi": { beton: 27500, baja: 25500, kayu: 44000 },
  "9_perkebunan_kakao": { beton: 27500, baja: 25500, kayu: 44000 },
  "10_perkebunan_tebu": { beton: 27500, baja: 25500, kayu: 44000 },
  "11_kebun_sayur": { beton: 25000, baja: 25000, kayu: 31500 },
  "12_perkebunan_karet": { beton: 34500, baja: 29000, kayu: 51000 },
  "13_perkebunan_kapas": { beton: 26500, baja: 25500, kayu: 38000 },
  "14_perkebunan_tembakau": { beton: 25500, baja: 25000, kayu: 35500 },

  // --- 6. SEKTOR PERIKANAN ---
  "1_tambak_udang": { beton: 42000, baja: 31500, kayu: 48500 },
  "2_budidaya_ikan_tawar": { beton: 38500, baja: 27500, kayu: 52000 },
  "3_budidaya_mutiara": { beton: 46500, baja: 38000, kayu: 42500 },

  // --- 7. SEKTOR OLAHAN PANGAN ---
  "1_pabrik_air_mineral": { beton: 48500, baja: 44000, kayu: 0 },
  "2_pabrik_gula": { beton: 56500, baja: 62000, kayu: 34500 },
  "3_pabrik_roti": { beton: 41500, baja: 37000, kayu: 29500 },
  "4_pabrik_pengolahan_daging": { beton: 54500, baja: 51000, kayu: 0 },
  "5_pabrik_mie_instan": { beton: 49500, baja: 46500, kayu: 0 },
  "6_pabrik_minyak_goreng": { beton: 52000, baja: 48500, kayu: 0 },
  "7_pabrik_pengolahan_susu": { beton: 47500, baja: 43000, kayu: 0 },
  "8_pabrik_pakan_ternak": { beton: 44500, baja: 39500, kayu: 28500 },
  "9_pabrik_pengalengan_ikan": { beton: 49500, baja: 43500, kayu: 0 },
  "10_pabrik_pengolahan_kopi_teh": { beton: 41500, baja: 37000, kayu: 29500 },

  // --- 8. SEKTOR FARMASI ---
  "1_pabrik_farmasi": { beton: 68500, baja: 62500, kayu: 0 },

  // --- 9. SEKTOR INFRASTRUKTUR ---
  "1_jalur_sepeda": { beton: 26500, baja: 25500, kayu: 0 },
  "2_jalan_tol": { beton: 78500, baja: 64000, kayu: 0 },
  "3_terminal_bus": { beton: 46500, baja: 41500, kayu: 28500 },
  "4_jalur_kereta": { beton: 62000, baja: 84500, kayu: 37500 },
  "5_kereta_bawah_tanah": { beton: 89500, baja: 95500, kayu: 0 },
  "6_pelabuhan_laut": { beton: 82500, baja: 91000, kayu: 48500 },
  "7_bandara": { beton: 94500, baja: 98000, kayu: 39500 },
  "8_helipad": { beton: 31000, baja: 34500, kayu: 0 },

  // --- 10. SEKTOR SOSIAL (PENDIDIKAN) ---
  "1_prasekolah": { beton: 38500, baja: 28500, kayu: 32000 },
  "2_dasar": { beton: 44000, baja: 31000, kayu: 36500 },
  "3_menengah": { beton: 51500, baja: 36000, kayu: 27500 },
  "4_lanjutan": { beton: 59500, baja: 44500, kayu: 27500 },
  "5_universitas": { beton: 72000, baja: 64500, kayu: 0 },
  "6_lembaga_pendidikan": { beton: 62000, baja: 51000, kayu: 27500 },
  "7_laboratorium": { beton: 76500, baja: 71500, kayu: 0 },
  "8_observatorium": { beton: 68000, baja: 62500, kayu: 0 },
  "9_pusat_penelitian": { beton: 84500, baja: 78500, kayu: 0 },
  "10_pusat_pengembangan": { beton: 81000, baja: 73500, kayu: 0 },

  // --- 11. SEKTOR SOSIAL (KESEHATAN & HUKUM) ---
  "11_rumah_sakit_besar": { beton: 88500, baja: 81000, kayu: 0 },
  "12_rumah_sakit_kecil": { beton: 48500, baja: 38500, kayu: 0 },
  "13_pusat_diagnostik": { beton: 42500, baja: 33500, kayu: 0 },
  "14_kejaksaan_court": { beton: 72500, baja: 59500, kayu: 0 },
  "15_legal_aid": { beton: 36500, baja: 31500, kayu: 27500 },

  // --- 12. SEKTOR SOSIAL (OLAHRAGA, KOMERSIAL, HIBURAN) ---
  "16_kolam_renang": { beton: 44500, baja: 32500, kayu: 0 },
  "17_sirkuit_balap": { beton: 75500, baja: 82500, kayu: 0 },
  "18_stadium_int": { beton: 96500, baja: 99500, kayu: 0 },
  "19_gym_center": { beton: 49500, baja: 41500, kayu: 0 },
  "20_lapangan_golf": { beton: 38500, baja: 31000, kayu: 58500 },
  "21_esports_arena": { beton: 58500, baja: 66500, kayu: 0 },
  "22_gokart_circuit": { beton: 51500, baja: 47500, kayu: 0 },
  "23_pusat_belanja": { beton: 84500, baja: 91500, kayu: 0 },
  "24_hotel": { beton: 89500, baja: 94500, kayu: 0 },
  "25_pusat_grosir_tekstil": { beton: 68500, baja: 59500, kayu: 33500 },
  "26_bioskop": { beton: 56500, baja: 64500, kayu: 0 },
  "27_gedung_teater": { beton: 72500, baja: 78500, kayu: 36500 },

  // --- 13. PERTAHANAN NASIONAL (MANAJEMEN) ---
  "penjara": { beton: 78500, baja: 62000, kayu: 0 },
  "1_penjara": { beton: 78500, baja: 62000, kayu: 0 },
  "gudang_senjata": { beton: 64500, baja: 81500, kayu: 0 },
  "2_gudang_senjata": { beton: 64500, baja: 81500, kayu: 0 },
  "hangar_tank": { beton: 89500, baja: 97000, kayu: 0 },
  "3_hangar_tank": { beton: 89500, baja: 97000, kayu: 0 },
  "pusat_komando": { beton: 98500, baja: 92500, kayu: 0 },
  "5_pusat_komando": { beton: 98500, baja: 92500, kayu: 0 },
  "pangkalan_udara": { beton: 99500, baja: 96500, kayu: 0 },
  "6_pangkalan_udara": { beton: 99500, baja: 96500, kayu: 0 },
  "pangkalan_laut": { beton: 99000, baja: 98500, kayu: 0 },
  "7_pangkalan_laut": { beton: 99000, baja: 98500, kayu: 0 },
  "program_luar_angkasa": { beton: 100000, baja: 100000, kayu: 0 },
  "8_program_luar_angkasa": { beton: 100000, baja: 100000, kayu: 0 },
  "pertahanan_siber": { beton: 84500, baja: 91000, kayu: 0 },
  "9_pertahanan_siber": { beton: 84500, baja: 91000, kayu: 0 },

  // --- 14. KEPOLISIAN (ARMADA POLISI) ---
  "1_pusat_komando": { beton: 88500, baja: 78000, kayu: 0 },
  "pusat_komando_polisi": { beton: 88500, baja: 78000, kayu: 0 },
  "2_akademi_polisi": { beton: 72000, baja: 51500, kayu: 34500 },
  "akademi_polisi": { beton: 72000, baja: 51500, kayu: 34500 },
  "3_pusat_forensik": { beton: 48500, baja: 44000, kayu: 0 },
  "pusat_forensik": { beton: 48500, baja: 44000, kayu: 0 },
  "4_kantor_polisi": { beton: 41500, baja: 33500, kayu: 28500 },
  "kantor_polisi": { beton: 41500, baja: 33500, kayu: 28500 },
  "5_pos_polisi": { beton: 28500, baja: 26500, kayu: 25500 },
  "pos_polisi": { beton: 28500, baja: 26500, kayu: 25500 },
  "6_network_cctv": { beton: 26500, baja: 28000, kayu: 0 },
  "network_cctv": { beton: 26500, baja: 28000, kayu: 0 },
  "7_armada_mobil": { beton: 0, baja: 26000, kayu: 0 },
  "armada_mobil_polisi": { beton: 0, baja: 26000, kayu: 0 },
  "8_mobil_interceptor": { beton: 0, baja: 27500, kayu: 0 },
  "mobil_interceptor": { beton: 0, baja: 27500, kayu: 0 },
  "9_unit_r2": { beton: 0, baja: 25100, kayu: 0 },
  "unit_r2": { beton: 0, baja: 25100, kayu: 0 },
  "10_heli_polisi": { beton: 36500, baja: 48500, kayu: 0 },
  "heli_polisi": { beton: 36500, baja: 48500, kayu: 0 },
  "11_unit_k9": { beton: 31500, baja: 28500, kayu: 33500 },
  "unit_k9": { beton: 31500, baja: 28500, kayu: 33500 },
  "12_swat": { beton: 49500, baja: 44500, kayu: 0 },
  "swat": { beton: 49500, baja: 44500, kayu: 0 },
  "13_anti_huru_hara": { beton: 42500, baja: 38500, kayu: 0 },
  "anti_huru_hara": { beton: 42500, baja: 38500, kayu: 0 },

  // --- 15. INTELIJEN ---
  "sistem_satelit": { beton: 86500, baja: 98000, kayu: 0 },
  "jaringan_radar": { beton: 64000, baja: 78500, kayu: 0 },
  "operasi_siber": { beton: 55000, baja: 69500, kayu: 0 },

  // --- 16. ARMADA MILITER ---
  "1_barak": { beton: 48500, baja: 36000, kayu: 31500 },
  "barak": { beton: 48500, baja: 36000, kayu: 31500 },
  "2_tank": { beton: 0, baja: 62500, kayu: 0 },
  "tank": { beton: 0, baja: 62500, kayu: 0 },
  "3_apc": { beton: 0, baja: 54500, kayu: 0 },
  "apc": { beton: 0, baja: 54500, kayu: 0 },
  "4_artileri": { beton: 0, baja: 59000, kayu: 0 },
  "artileri": { beton: 0, baja: 59000, kayu: 0 },
  "5_roket_peluncur": { beton: 0, baja: 71500, kayu: 0 },
  "roket_peluncur": { beton: 0, baja: 71500, kayu: 0 },
  "6_misil_sam": { beton: 38500, baja: 84000, kayu: 0 },
  "misil_sam": { beton: 38500, baja: 84000, kayu: 0 },
  "7_kendaraan_taktis": { beton: 0, baja: 44500, kayu: 0 },
  "kendaraan_taktis": { beton: 0, baja: 44500, kayu: 0 },
  "8_kapal_induk": { beton: 98000, baja: 100000, kayu: 0 },
  "kapal_induk": { beton: 98000, baja: 100000, kayu: 0 },
  "8b_kapal_induk_nuklir": { beton: 100000, baja: 100000, kayu: 0 },
  "kapal_induk_nuklir": { beton: 100000, baja: 100000, kayu: 0 },
  "9_kapal_perusak": { beton: 74500, baja: 88000, kayu: 0 },
  "kapal_perusak": { beton: 74500, baja: 88000, kayu: 0 },
  "10_kapal_korvet": { beton: 62000, baja: 74500, kayu: 0 },
  "kapal_korvet": { beton: 62000, baja: 74500, kayu: 0 },
  "11_kapal_selam_nuklir": { beton: 68500, baja: 82000, kayu: 0 },
  "kapal_selam_nuklir": { beton: 68500, baja: 82000, kayu: 0 },
  "12_kapal_selam_reguler": { beton: 58000, baja: 71500, kayu: 0 },
  "kapal_selam_reguler": { beton: 58000, baja: 71500, kayu: 0 },
  "13_penyapu_ranjau": { beton: 41500, baja: 48500, kayu: 0 },
  "penyapu_ranjau": { beton: 41500, baja: 48500, kayu: 0 },
  "14_kapal_logistik": { beton: 55500, baja: 62000, kayu: 0 },
  "kapal_logistik": { beton: 55500, baja: 62000, kayu: 0 },
  "15_jet_tempur_siluman": { beton: 0, baja: 89500, kayu: 0 },
  "jet_tempur_siluman": { beton: 0, baja: 89500, kayu: 0 },
  "16_jet_pencegat": { beton: 0, baja: 76500, kayu: 0 },
  "jet_pencegat": { beton: 0, baja: 76500, kayu: 0 },
  "17_pesawat_pembom": { beton: 0, baja: 92000, kayu: 0 },
  "pesawat_pembom": { beton: 0, baja: 92000, kayu: 0 },
  "18_helikopter_serbu": { beton: 0, baja: 68500, kayu: 0 },
  "helikopter_serbu": { beton: 0, baja: 68500, kayu: 0 },
  "19_pesawat_intai": { beton: 0, baja: 58500, kayu: 0 },
  "pesawat_intai": { beton: 0, baja: 58500, kayu: 0 },
  "20_drone_intai": { beton: 0, baja: 38500, kayu: 0 },
  "drone_intai": { beton: 0, baja: 38500, kayu: 0 },
  "21_drone_kamikaze": { beton: 0, baja: 28500, kayu: 0 },
  "drone_kamikaze": { beton: 0, baja: 28500, kayu: 0 },
  "22_transport_udara": { beton: 0, baja: 64500, kayu: 0 },
  "transport_udara": { beton: 0, baja: 64500, kayu: 0 },

  // --- 17. HUNIAN & PEMUKIMAN ---
  "rumah_subsidi": { beton: 26500, baja: 0, kayu: 29000 },
  "apartemen": { beton: 48500, baja: 36000, kayu: 0 },
  "mansion": { beton: 72500, baja: 64000, kayu: 51500 },

  // --- 18. PABRIK MILITER ---
  "1_pabrik_amunisi": { beton: 68500, baja: 74500, kayu: 0 },
  "2_pabrik_amunisi": { beton: 68500, baja: 74500, kayu: 0 },
  "pabrik_amunisi": { beton: 68500, baja: 74500, kayu: 0 },
  "2_pabrik_kendaraan_tempur": { beton: 82500, baja: 91000, kayu: 0 },
  "pabrik_kendaraan_tempur": { beton: 82500, baja: 91000, kayu: 0 },
  "2_pabrik_senjata_berat": { beton: 86500, baja: 94500, kayu: 0 },
  "pabrik_senjata_berat": { beton: 86500, baja: 94500, kayu: 0 },
  "2_pabrik_drone_kamikaze": { beton: 71500, baja: 78500, kayu: 0 },
  "pabrik_drone_kamikaze": { beton: 71500, baja: 78500, kayu: 0 },
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
