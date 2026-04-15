"use client"

import { KAPASITAS_LISTRIK_METADATA } from '@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/1_db_listrik';
import { mineralKritisRate } from '@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/2_db_ekstraksi';
import { manufakturRate } from '@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/3_db_manufaktur';
import { peternakanRate } from '@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/4_db_peternakan';
import { agrikulturRate } from '@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/5_db_agrikultur';
import { perikananRate } from '@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/6_db_perikanan';
import { olahanPanganRate } from '@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/7_db_olahan_pangan';
import { farmasiRate } from '@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/8_db_farmasi';
import { infrastrukturRate } from '@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur';
import { intelijenRate } from '@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen';
import { armadaMiliterRate } from '@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer';
import { armadaPolisiRate } from '@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi';
import { pertahananRate } from '@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan';
import { komandoPertahananRate } from '@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan';
import { pabrikMiliterRate } from '@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer';
import { countries } from '@/app/database/data/negara/benua/index';

// Aggregate ALL rate definitions into one lookup
export const ALL_BUILDING_RATES: Record<string, any> = {
  ...KAPASITAS_LISTRIK_METADATA,
  ...(mineralKritisRate || {}),
  ...(manufakturRate || {}),
  ...(peternakanRate || {}),
  ...(agrikulturRate || {}),
  ...(perikananRate || {}),
  ...(olahanPanganRate || {}),
  ...(farmasiRate || {}),
  ...(infrastrukturRate || {}),
  ...(intelijenRate || {}),
  ...(armadaMiliterRate || {}),
  ...(armadaPolisiRate || {}),
  ...(pertahananRate || {}),
  ...(komandoPertahananRate || {}),
  ...(pabrikMiliterRate || {}),
};

// dataKey → sectorPath mapping (which CountryData property holds this dataKey)
export const DATA_KEY_TO_SECTOR: Record<string, string> = {
  // --- LISTRIK ---
  pembangkit_listrik_tenaga_nuklir: "sektor_listrik.pembangkit_listrik_tenaga_nuklir",
  pembangkit_listrik_tenaga_air: "sektor_listrik.pembangkit_listrik_tenaga_air",
  pembangkit_listrik_tenaga_surya: "sektor_listrik.pembangkit_listrik_tenaga_surya",
  pembangkit_listrik_tenaga_uap: "sektor_listrik.pembangkit_listrik_tenaga_uap",
  pembangkit_listrik_tenaga_gas: "sektor_listrik.pembangkit_listrik_tenaga_gas",
  pembangkit_listrik_tenaga_angin: "sektor_listrik.pembangkit_listrik_tenaga_angin",
  // --- INFRASTRUKTUR ---
  jalur_sepeda: "infrastruktur.jalur_sepeda",
  jalan_raya: "infrastruktur.jalan_raya",
  terminal_bus: "infrastruktur.terminal_bus",
  stasiun_kereta_api: "infrastruktur.stasiun_kereta_api",
  kereta_bawah_tanah: "infrastruktur.kereta_bawah_tanah",
  pelabuhan: "infrastruktur.pelabuhan",
  bandara: "infrastruktur.bandara",
  helipad: "infrastruktur.helipad",
  // --- PENDIDIKAN ---
  paud: "pendidikan.paud",
  sekolah_dasar: "pendidikan.sekolah_dasar",
  sekolah_menengah: "pendidikan.sekolah_menengah",
  sekolah_lanjutan: "pendidikan.sekolah_lanjutan",
  universitas: "pendidikan.universitas",
  laboratorium: "pendidikan.laboratorium",
  observatorium: "pendidikan.observatorium",
  pusat_penelitian: "pendidikan.pusat_penelitian",
  pusat_pengembangan: "pendidikan.pusat_pengembangan",
  // --- KESEHATAN ---
  puskesmas: "kesehatan.puskesmas",
  rumah_sakit_kecil: "kesehatan.rumah_sakit_kecil",
  rumah_sakit_besar: "kesehatan.rumah_sakit_besar",
  pusat_diagnostik: "kesehatan.pusat_diagnostik",
  // --- HUKUM ---
  pusat_bantuan_hukum: "hukum.pusat_bantuan_hukum",
  pengadilan: "hukum.pengadilan",
  kejaksaan: "hukum.kejaksaan",
  // --- OLAHRAGA ---
  stadion_nasional: "sektor_olahraga.stadion_nasional",
  stadion_internasional: "sektor_olahraga.stadion_internasional",
  arena_esports: "sektor_olahraga.arena_esports",
  // --- KOMERSIAL ---
  pusat_belanja: "sektor_komersial.pusat_belanja",
  hotel: "sektor_komersial.hotel",
  pusat_grosir_tekstil: "sektor_komersial.pusat_grosir_tekstil",
  // --- HIBURAN ---
  bioskop: "sektor_hiburan.bioskop",
  gedung_teater: "sektor_hiburan.gedung_teater",
  // --- HUNIAN ---
  rumah_subsidi: "hunian.rumah_subsidi",
  apartemen: "hunian.apartemen",
  mansion: "hunian.mansion",
  // --- INTELIJEN ---
  sistem_satelit: "intelijen.sistem_satelit",
  jaringan_radar: "intelijen.jaringan_radar",
  operasi_siber: "intelijen.operasi_siber",
  // --- ARMADA MILITER ---
  barak: "armada_militer.barak",
  tank_tempur_utama: "armada_militer.darat.tank_tempur_utama",
  apc_ifv: "armada_militer.darat.apc_ifv",
  artileri_berat: "armada_militer.darat.artileri_berat",
  sistem_peluncur_roket: "armada_militer.darat.sistem_peluncur_roket",
  pertahanan_udara_mobile: "armada_militer.darat.pertahanan_udara_mobile",
  kendaraan_taktis: "armada_militer.darat.kendaraan_taktis",
  kapal_induk: "armada_militer.laut.kapal_induk",
  kapal_induk_nuklir: "armada_militer.laut.kapal_induk_nuklir",
  kapal_destroyer: "armada_militer.laut.kapal_destroyer",
  kapal_korvet: "armada_militer.laut.kapal_korvet",
  kapal_selam_nuklir: "armada_militer.laut.kapal_selam_nuklir",
  kapal_selam_regular: "armada_militer.laut.kapal_selam_regular",
  kapal_ranjau: "armada_militer.laut.kapal_ranjau",
  kapal_logistik: "armada_militer.laut.kapal_logistik",
  jet_tempur_siluman: "armada_militer.udara.jet_tempur_siluman",
  jet_tempur_interceptor: "armada_militer.udara.jet_tempur_interceptor",
  pesawat_pengebom: "armada_militer.udara.pesawat_pengebom",
  helikopter_serang: "armada_militer.udara.helikopter_serang",
  pesawat_pengintai: "armada_militer.udara.pesawat_pengintai",
  drone_intai_uav: "armada_militer.udara.drone_intai_uav",
  drone_kamikaze: "armada_militer.udara.drone_kamikaze",
  pesawat_angkut: "armada_militer.udara.pesawat_angkut",
  // --- POLISI ---
  markas_besar_polri: "armada_kepolisian.armada_polisi.markas_besar_polri",
  akademi_kepolisian: "armada_kepolisian.armada_polisi.akademi_kepolisian",
  pusat_forensik: "armada_kepolisian.armada_polisi.pusat_forensik",
  kantor_polisi: "armada_kepolisian.armada_polisi.kantor_polisi",
  pos_polisi: "armada_kepolisian.armada_polisi.pos_polisi",
  network_cctv: "armada_kepolisian.armada_polisi.network_cctv",
  armada_mobil_polisi: "armada_kepolisian.armada_polisi.armada_mobil_polisi",
  mobil_patroli_interceptor: "armada_kepolisian.armada_polisi.mobil_patroli_interceptor",
  unit_roda_dua: "armada_kepolisian.armada_polisi.unit_roda_dua",
  helikopter_polisi: "armada_kepolisian.armada_polisi.helikopter_polisi",
  unit_k9: "armada_kepolisian.armada_polisi.unit_k9",
  pasukan_swat: "armada_kepolisian.armada_polisi.pasukan_swat",
  samapta: "armada_kepolisian.armada_polisi.samapta",
  // --- PERTAHANAN ---
  penjara: "sektor_pertahanan.penjara",
  gudang_senjata: "sektor_pertahanan.gudang_senjata",
  hangar_tank: "sektor_pertahanan.hangar_tank",
  pusat_komando: "sektor_pertahanan.pusat_komando",
  pangkalan_udara: "sektor_pertahanan.pangkalan_udara",
  pangkalan_laut: "sektor_pertahanan.pangkalan_laut",
  program_luar_angkasa: "sektor_pertahanan.program_luar_angkasa",
  pertahanan_siber: "sektor_pertahanan.pertahanan_siber",
  // --- EKSTRAKSI ---
  emas: "sektor_ekstraksi.emas",
  uranium: "sektor_ekstraksi.uranium",
  batu_bara: "sektor_ekstraksi.batu_bara",
  minyak_bumi: "sektor_ekstraksi.minyak_bumi",
  gas_alam: "sektor_ekstraksi.gas_alam",
  garam: "sektor_ekstraksi.garam",
  nikel: "sektor_ekstraksi.nikel",
  litium: "sektor_ekstraksi.litium",
  tembaga: "sektor_ekstraksi.tembaga",
  aluminium: "sektor_ekstraksi.aluminium",
  logam_tanah_jarang: "sektor_ekstraksi.logam_tanah_jarang",
  bijih_besi: "sektor_ekstraksi.bijih_besi",
  // --- MANUFAKTUR ---
  pabrik_semikonduktor: "sektor_manufaktur.pabrik_semikonduktor",
  pabrik_mobil: "sektor_manufaktur.pabrik_mobil",
  pabrik_sepeda_motor: "sektor_manufaktur.pabrik_sepeda_motor",
  pabrik_semen: "sektor_manufaktur.pabrik_semen",
  smelter: "sektor_manufaktur.smelter",
  penggergajian_kayu: "sektor_manufaktur.penggergajian_kayu",
  pabrik_pupuk: "sektor_manufaktur.pabrik_pupuk",
  // --- AGRIKULTUR ---
  padi: "sektor_agrikultur.padi",
  gandum: "sektor_agrikultur.gandum",
  jagung: "sektor_agrikultur.jagung",
  umbi: "sektor_agrikultur.umbi",
  kedelai: "sektor_agrikultur.kedelai",
  kelapa_sawit: "sektor_agrikultur.kelapa_sawit",
  tebu: "sektor_agrikultur.tebu",
  teh: "sektor_agrikultur.teh",
  kopi: "sektor_agrikultur.kopi",
  kakao: "sektor_agrikultur.kakao",
  karet: "sektor_agrikultur.karet",
  kapas: "sektor_agrikultur.kapas",
  tembakau: "sektor_agrikultur.tembakau",
  sayur: "sektor_agrikultur.sayur",
  // --- PETERNAKAN ---
  ayam_unggas: "sektor_peternakan.ayam_unggas",
  sapi_perah: "sektor_peternakan.sapi_perah",
  sapi_potong: "sektor_peternakan.sapi_potong",
  domba_kambing: "sektor_peternakan.domba_kambing",
  // --- PERIKANAN ---
  udang: "sektor_perikanan.udang",
  ikan: "sektor_perikanan.ikan",
  mutiara: "sektor_perikanan.mutiara",
  // --- OLAHAN PANGAN ---
  air_mineral: "sektor_olahan_pangan.air_mineral",
  gula: "sektor_olahan_pangan.gula",
  roti: "sektor_olahan_pangan.roti",
  pengolahan_daging: "sektor_olahan_pangan.pengolahan_daging",
  mie_instan: "sektor_olahan_pangan.mie_instan",
  minyak_goreng: "sektor_olahan_pangan.minyak_goreng",
  pengolahan_susu: "sektor_olahan_pangan.pengolahan_susu",
  pakan_ternak: "sektor_olahan_pangan.pakan_ternak",
  ikan_kaleng: "sektor_olahan_pangan.ikan_kaleng",
  // --- FARMASI ---
  farmasi: "sektor_farmasi.farmasi",
  // --- STRATEGIS ---
  pusat_komando_strategis: "militer_strategis.pusat_komando_strategis",
  bunker_komando: "militer_strategis.bunker_komando",
  pusat_komando_wilayah: "militer_strategis.pusat_komando_wilayah",
  pabrik_amunisi: "pabrik_militer.pabrik_amunisi",
};

export const BUILDING_NAME_LOOKUP: Record<string, { dataKey: string; sectorPath: string }> = (() => {
  const lookup: Record<string, { dataKey: string; sectorPath: string }> = {};

  for (const [, entry] of Object.entries(ALL_BUILDING_RATES)) {
    if (!entry || typeof entry !== 'object') continue;
    const dataKey = entry.dataKey || '';
    const sectorPath = DATA_KEY_TO_SECTOR[dataKey] || '';
    if (!dataKey || !sectorPath) continue;

    // Register by label, deskripsi, and dataKey itself
    const names = [entry.label, entry.deskripsi, dataKey].filter(Boolean);
    for (const name of names) {
      lookup[String(name).toLowerCase()] = { dataKey, sectorPath };
    }
  }
  return lookup;
})();

export const resolveNestedValue = (obj: any, path: string): number => {
  if (!obj || !path) return 0;
  const parts = path.split('.');
  let current = obj;
  for (const part of parts) {
    if (current == null || typeof current !== 'object') return 0;
    current = current[part];
  }
  return typeof current === 'number' ? current : 0;
};

export interface ConstructionDetection {
  country: any;
  building: { dataKey: string; sectorPath: string } | null;
  isAI: boolean;
}

export const detectConstructionDetails = (subject: string, content: string, source: string): ConstructionDetection => {
  const fullText = `${source} ${subject} ${content}`.toLowerCase();

  // 1. Detect Country
  let foundCountry: any = null;
  for (const country of countries) {
    const nameId = country.name_id.toLowerCase();
    const nameEn = country.name_en.toLowerCase();
    if (fullText.includes(nameId) || fullText.includes(nameEn)) {
      foundCountry = country;
      break;
    }
  }

  // 2. Detect Building
  let matchedEntry: { dataKey: string; sectorPath: string } | null = null;
  let longestMatch = 0;

  for (const [name, entry] of Object.entries(BUILDING_NAME_LOOKUP)) {
    if (fullText.includes(name) && name.length > longestMatch) {
      matchedEntry = entry;
      longestMatch = name.length;
    }
  }

  return {
    country: foundCountry,
    building: matchedEntry,
    isAI: foundCountry && foundCountry.name_id !== "Indonesia" // Simple check
  };
};
