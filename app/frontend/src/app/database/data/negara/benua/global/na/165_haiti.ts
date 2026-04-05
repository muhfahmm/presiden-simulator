import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { haiti_agrikultur } from "@/app/database/data/semua_fitur_negara/1_produksi/5_sektor_agrikultur/na/165_haiti";
import { haiti_armada } from "@/app/database/data/semua_fitur_negara/2_produksi_militer/2_armada_militer/na/165_haiti";
import { haiti_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_produksi/2_sektor_mineral_kritis/na/165_haiti";
import { haiti_farmasi } from "@/app/database/data/semua_fitur_negara/1_produksi/8_sektor_farmasi/na/165_haiti";
import { haiti_hukum } from "@/app/database/data/semua_fitur_negara/3_tempat_umum/3_hukum/na/165_haiti";
import { haiti_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_produksi/9_infrastruktur/na/165_haiti";
import { haiti_kepolisian } from "@/app/database/data/semua_fitur_negara/2_produksi_militer/4_armada_kepolisian/na/165_haiti";
import { haiti_kesehatan } from "@/app/database/data/semua_fitur_negara/3_tempat_umum/2_kesehatan/na/165_haiti";
import { haiti_listrik } from "@/app/database/data/semua_fitur_negara/1_produksi/1_sektor_listrik_nasional/na/165_haiti";
import { haiti_manufaktur } from "@/app/database/data/semua_fitur_negara/1_produksi/3_manufaktur/na/165_haiti";
import { haiti_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_produksi/7_sektor_olahan_pangan/na/165_haiti";
import { haiti_olahraga } from "@/app/database/data/semua_fitur_negara/3_tempat_umum/4_olahraga/na/165_haiti";
import { haiti_pabrik } from "@/app/database/data/semua_fitur_negara/2_produksi_militer/5_pabrik_militer/na/165_haiti";
import { haiti_pendidikan } from "@/app/database/data/semua_fitur_negara/3_tempat_umum/1_pendidikan/na/165_haiti";
import { haiti_perikanan } from "@/app/database/data/semua_fitur_negara/1_produksi/6_sektor_perikanan/na/165_haiti";
import { haiti_pertahanan } from "@/app/database/data/semua_fitur_negara/2_produksi_militer/1_sektor_pertahanan/na/165_haiti";
import { haiti_peternakan } from "@/app/database/data/semua_fitur_negara/1_produksi/4_sektor_peternakan/na/165_haiti";
import { haiti_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/na/165_haiti";
import { haiti_strategis } from "@/app/database/data/semua_fitur_negara/2_produksi_militer/3_militer_strategis/na/165_haiti";
import { haiti_geopolitik } from "@/app/database/data/semua_fitur_negara/4_geopolitik/na/165_haiti";

export const haiti: CountryData = {
  ...haiti_profile,
  "sektor_listrik": haiti_listrik,
  "infrastruktur": haiti_infrastruktur,
  "sektor_ekstraksi": haiti_ekstraksi,
  "sektor_manufaktur": haiti_manufaktur,
  "sektor_peternakan": haiti_peternakan,
  "sektor_agrikultur": haiti_agrikultur,
  "sektor_perikanan": haiti_perikanan,
  "sektor_olahan_pangan": haiti_olahan_pangan,
  "sektor_farmasi": haiti_farmasi,
  "sektor_pertahanan": haiti_pertahanan,
  "armada_militer": haiti_armada,
  "militer_strategis": haiti_strategis,
  "armada_kepolisian": haiti_kepolisian,
  "pabrik_militer": haiti_pabrik,
    "pendidikan": haiti_pendidikan,
  "kesehatan": haiti_kesehatan,
  "hukum": haiti_hukum,
  "sektor_olahraga": haiti_olahraga,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 1,
      "kepuasan": 67,
      "pendapatan": 0
    },
    "korporasi": {
      "tarif": 6,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 35,
      "kepuasan": 61,
      "pendapatan": 9
    },
    "bea_cukai": {
      "tarif": 24,
      "kepuasan": 86,
      "pendapatan": 6
    },
    "lingkungan": {
      "tarif": 7,
      "kepuasan": 88,
      "pendapatan": 1
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 7,
      "kepuasan": 93,
      "pendapatan": 1
    }
  },
  // =============================================================
  // 12. ðŸ’° GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 90,
    "gaji_guru": 90,
    "gaji_medis": 90,
    "gaji_militer": 90
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 25,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 100,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 75
  },
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12800,
    "harga_daging_sapi": 104100,
    "harga_ayam": 82000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 20160,
    "harga_telur": 15550,
    "harga_bbm": 8560,
    "harga_listrik": 2240,
    "harga_air": 7280,
    "harga_obat": 157900,
    "harga_pendidikan": 483900
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": haiti_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 32,
    "pendidikan": 16,
    "keamanan": 15,
    "keuangan": 7,
    "lingkungan": 60
  }
};

