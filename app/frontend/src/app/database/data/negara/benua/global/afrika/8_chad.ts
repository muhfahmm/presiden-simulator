import { CountryData } from "@/app/database/data/types";
import { chad_agrikultur } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/5_sektor_agrikultur/afrika/8_chad";
import { chad_armada } from "@/app/database/data/semua_fitur_negara/2_militer/2_armada_militer/afrika/8_chad";
import { chad_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/2_sektor_mineral_kritis/afrika/8_chad";
import { chad_farmasi } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/8_sektor_farmasi/afrika/8_chad";
import { chad_hukum } from "@/app/database/data/semua_fitur_negara/3_sosial/3_hukum/afrika/8_chad";
import { chad_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/9_infrastruktur/afrika/8_chad";
import { chad_kepolisian } from "@/app/database/data/semua_fitur_negara/2_militer/4_armada_kepolisian/afrika/8_chad";
import { chad_kesehatan } from "@/app/database/data/semua_fitur_negara/3_sosial/2_kesehatan/afrika/8_chad";
import { chad_listrik } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/1_sektor_listrik_nasional/afrika/8_chad";
import { chad_manufaktur } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/3_manufaktur/afrika/8_chad";
import { chad_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/7_sektor_olahan_pangan/afrika/8_chad";
import { chad_olahraga } from "@/app/database/data/semua_fitur_negara/3_sosial/4_olahraga/afrika/8_chad";
import { chad_pabrik } from "@/app/database/data/semua_fitur_negara/2_militer/5_pabrik_militer/afrika/8_chad";
import { chad_pendidikan } from "@/app/database/data/semua_fitur_negara/3_sosial/1_pendidikan/afrika/8_chad";
import { chad_perikanan } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/6_sektor_perikanan/afrika/8_chad";
import { chad_pertahanan } from "@/app/database/data/semua_fitur_negara/2_militer/1_sektor_pertahanan/afrika/8_chad";
import { chad_peternakan } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/4_sektor_peternakan/afrika/8_chad";
import { chad_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/afrika/8_chad";
import { chad_strategis } from "@/app/database/data/semua_fitur_negara/2_militer/3_militer_strategis/afrika/8_chad";
import { chad_geopolitik } from "@/app/database/data/semua_fitur_negara/4_geopolitik/afrika/8_chad";

export const chad: CountryData = {
  ...chad_profile,
  "sektor_listrik": chad_listrik,
  "infrastruktur": chad_infrastruktur,
  "sektor_ekstraksi": chad_ekstraksi,
  "sektor_manufaktur": chad_manufaktur,
  "sektor_peternakan": chad_peternakan,
  "sektor_agrikultur": chad_agrikultur,
  "sektor_perikanan": chad_perikanan,
  "sektor_olahan_pangan": chad_olahan_pangan,
  "sektor_farmasi": chad_farmasi,
  "sektor_pertahanan": chad_pertahanan,
  "armada_militer": chad_armada,
  "militer_strategis": chad_strategis,
  "armada_kepolisian": chad_kepolisian,
  "pabrik_militer": chad_pabrik,
    "pendidikan": chad_pendidikan,
  "kesehatan": chad_kesehatan,
  "hukum": chad_hukum,
  "sektor_olahraga": chad_olahraga,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 32,
      "kepuasan": 67,
      "pendapatan": 4
    },
    "korporasi": {
      "tarif": 3,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 35,
      "kepuasan": 61,
      "pendapatan": 9
    },
    "bea_cukai": {
      "tarif": 13,
      "kepuasan": 86,
      "pendapatan": 2
    },
    "lingkungan": {
      "tarif": 30,
      "kepuasan": 88,
      "pendapatan": 8
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 28,
      "kepuasan": 93,
      "pendapatan": 4
    }
  },
  // =============================================================
  // 12. ðŸ’° GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 40,
    "gaji_guru": 40,
    "gaji_medis": 50,
    "gaji_militer": 60
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 25,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 25,
    "subsidi_umkm": 25,
    "subsidi_transportasi": 25,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 83280,
    "harga_ayam": 57400,
    "harga_minyak_goreng": 21560,
    "harga_gula": 11520,
    "harga_telur": 31100,
    "harga_bbm": 10700,
    "harga_listrik": 1600,
    "harga_air": 5200,
    "harga_obat": 157900,
    "harga_pendidikan": 483900
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": chad_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 34,
    "pendidikan": 32,
    "keamanan": 6,
    "keuangan": 23,
    "lingkungan": 60
  }
};

