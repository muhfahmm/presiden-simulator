import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { brunei_agrikultur } from "@/app/database/data/semua_fitur_negara/1_produksi/5_sektor_agrikultur/asia/61_brunei";
import { brunei_armada } from "@/app/database/data/semua_fitur_negara/2_militer/2_armada_militer/asia/61_brunei";
import { brunei_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_produksi/2_sektor_mineral_kritis/asia/61_brunei";
import { brunei_farmasi } from "@/app/database/data/semua_fitur_negara/1_produksi/8_sektor_farmasi/asia/61_brunei";
import { brunei_hukum } from "@/app/database/data/semua_fitur_negara/3_sosial/3_hukum/asia/61_brunei";
import { brunei_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_produksi/9_infrastruktur/asia/61_brunei";
import { brunei_kepolisian } from "@/app/database/data/semua_fitur_negara/2_militer/4_armada_kepolisian/asia/61_brunei";
import { brunei_kesehatan } from "@/app/database/data/semua_fitur_negara/3_sosial/2_kesehatan/asia/61_brunei";
import { brunei_listrik } from "@/app/database/data/semua_fitur_negara/1_produksi/1_sektor_listrik_nasional/asia/61_brunei";
import { brunei_manufaktur } from "@/app/database/data/semua_fitur_negara/1_produksi/3_manufaktur/asia/61_brunei";
import { brunei_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_produksi/7_sektor_olahan_pangan/asia/61_brunei";
import { brunei_olahraga } from "@/app/database/data/semua_fitur_negara/3_sosial/4_olahraga/asia/61_brunei";
import { brunei_pabrik } from "@/app/database/data/semua_fitur_negara/2_militer/5_pabrik_militer/asia/61_brunei";
import { brunei_pendidikan } from "@/app/database/data/semua_fitur_negara/3_sosial/1_pendidikan/asia/61_brunei";
import { brunei_perikanan } from "@/app/database/data/semua_fitur_negara/1_produksi/6_sektor_perikanan/asia/61_brunei";
import { brunei_pertahanan } from "@/app/database/data/semua_fitur_negara/2_militer/1_sektor_pertahanan/asia/61_brunei";
import { brunei_peternakan } from "@/app/database/data/semua_fitur_negara/1_produksi/4_sektor_peternakan/asia/61_brunei";
import { brunei_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/asia/61_brunei";
import { brunei_strategis } from "@/app/database/data/semua_fitur_negara/2_militer/3_militer_strategis/asia/61_brunei";
import { brunei_geopolitik } from "@/app/database/data/semua_fitur_negara/4_geopolitik/asia/61_brunei";

export const brunei: CountryData = {
  ...brunei_profile,
  "sektor_listrik": brunei_listrik,
  "infrastruktur": brunei_infrastruktur,
  "sektor_ekstraksi": brunei_ekstraksi,
  "sektor_manufaktur": brunei_manufaktur,
  "sektor_peternakan": brunei_peternakan,
  "sektor_agrikultur": brunei_agrikultur,
  "sektor_perikanan": brunei_perikanan,
  "sektor_olahan_pangan": brunei_olahan_pangan,
  "sektor_farmasi": brunei_farmasi,
  "sektor_pertahanan": brunei_pertahanan,
  "armada_militer": brunei_armada,
  "militer_strategis": brunei_strategis,
  "armada_kepolisian": brunei_kepolisian,
  "pabrik_militer": brunei_pabrik,
    "pendidikan": brunei_pendidikan,
  "kesehatan": brunei_kesehatan,
  "hukum": brunei_hukum,
  "sektor_olahraga": brunei_olahraga,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 37,
      "kepuasan": 67,
      "pendapatan": 15
    },
    "korporasi": {
      "tarif": 8,
      "kepuasan": 52,
      "pendapatan": 2
    },
    "penghasilan": {
      "tarif": 24,
      "kepuasan": 61,
      "pendapatan": 4
    },
    "bea_cukai": {
      "tarif": 4,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 19,
      "kepuasan": 88,
      "pendapatan": 5
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 3 },
    "lainnya": {
      "tarif": 20,
      "kepuasan": 93,
      "pendapatan": 8
    }
  },
  // =============================================================
  // 12. ðŸ’° GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 60,
    "gaji_guru": 60,
    "gaji_medis": 60,
    "gaji_militer": 70
  },
  "subsidi": {
    "subsidi_energi": 75,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 22400,
    "harga_daging_sapi": 145740,
    "harga_ayam": 20500,
    "harga_minyak_goreng": 7700,
    "harga_gula": 14400,
    "harga_telur": 43540,
    "harga_bbm": 10700,
    "harga_listrik": 2240,
    "harga_air": 5200,
    "harga_obat": 78950,
    "harga_pendidikan": 967800
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": brunei_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 9,
    "pendidikan": 24,
    "keamanan": 13,
    "keuangan": 14,
    "lingkungan": 60
  }
};

