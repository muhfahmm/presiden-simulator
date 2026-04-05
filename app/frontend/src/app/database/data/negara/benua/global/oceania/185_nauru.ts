import { CountryData } from "@/app/database/data/types";
import { nauru_agrikultur } from "@/app/database/data/semua_fitur_negara/1_produksi/5_sektor_agrikultur/oceania/185_nauru";
import { nauru_armada } from "@/app/database/data/semua_fitur_negara/2_militer/2_armada_militer/oceania/185_nauru";
import { nauru_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_produksi/2_sektor_mineral_kritis/oceania/185_nauru";
import { nauru_farmasi } from "@/app/database/data/semua_fitur_negara/1_produksi/8_sektor_farmasi/oceania/185_nauru";
import { nauru_hukum } from "@/app/database/data/semua_fitur_negara/3_sosial/3_hukum/oceania/185_nauru";
import { nauru_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_produksi/9_infrastruktur/oceania/185_nauru";
import { nauru_kepolisian } from "@/app/database/data/semua_fitur_negara/2_militer/4_armada_kepolisian/oceania/185_nauru";
import { nauru_kesehatan } from "@/app/database/data/semua_fitur_negara/3_sosial/2_kesehatan/oceania/185_nauru";
import { nauru_listrik } from "@/app/database/data/semua_fitur_negara/1_produksi/1_sektor_listrik_nasional/oceania/185_nauru";
import { nauru_manufaktur } from "@/app/database/data/semua_fitur_negara/1_produksi/3_manufaktur/oceania/185_nauru";
import { nauru_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_produksi/7_sektor_olahan_pangan/oceania/185_nauru";
import { nauru_olahraga } from "@/app/database/data/semua_fitur_negara/3_sosial/4_olahraga/oceania/185_nauru";
import { nauru_pabrik } from "@/app/database/data/semua_fitur_negara/2_militer/5_pabrik_militer/oceania/185_nauru";
import { nauru_pendidikan } from "@/app/database/data/semua_fitur_negara/3_sosial/1_pendidikan/oceania/185_nauru";
import { nauru_perikanan } from "@/app/database/data/semua_fitur_negara/1_produksi/6_sektor_perikanan/oceania/185_nauru";
import { nauru_pertahanan } from "@/app/database/data/semua_fitur_negara/2_militer/1_sektor_pertahanan/oceania/185_nauru";
import { nauru_peternakan } from "@/app/database/data/semua_fitur_negara/1_produksi/4_sektor_peternakan/oceania/185_nauru";
import { nauru_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/oceania/185_nauru";
import { nauru_strategis } from "@/app/database/data/semua_fitur_negara/2_militer/3_militer_strategis/oceania/185_nauru";
import { nauru_geopolitik } from "@/app/database/data/semua_fitur_negara/4_geopolitik/oceania/185_nauru";

export const nauru: CountryData = {
  ...nauru_profile,
  "sektor_listrik": nauru_listrik,
  "infrastruktur": nauru_infrastruktur,
  "sektor_ekstraksi": nauru_ekstraksi,
  "sektor_manufaktur": nauru_manufaktur,
  "sektor_peternakan": nauru_peternakan,
  "sektor_agrikultur": nauru_agrikultur,
  "sektor_perikanan": nauru_perikanan,
  "sektor_olahan_pangan": nauru_olahan_pangan,
  "sektor_farmasi": nauru_farmasi,
  "sektor_pertahanan": nauru_pertahanan,
  "armada_militer": nauru_armada,
  "militer_strategis": nauru_strategis,
  "armada_kepolisian": nauru_kepolisian,
  "pabrik_militer": nauru_pabrik,
    "pendidikan": nauru_pendidikan,
  "kesehatan": nauru_kesehatan,
  "hukum": nauru_hukum,
  "sektor_olahraga": nauru_olahraga,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 18,
      "kepuasan": 67,
      "pendapatan": 0
    },
    "korporasi": {
      "tarif": 16,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 25,
      "kepuasan": 61,
      "pendapatan": 0
    },
    "bea_cukai": {
      "tarif": 34,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 10,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 32,
      "kepuasan": 93,
      "pendapatan": 0
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 80,
    "gaji_guru": 90,
    "gaji_medis": 80,
    "gaji_militer": 80
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 75
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 104100,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 21560,
    "harga_gula": 11520,
    "harga_telur": 43540,
    "harga_bbm": 10700,
    "harga_listrik": 1600,
    "harga_air": 5200,
    "harga_obat": 221060,
    "harga_pendidikan": 967800
  },
    // =============================================================
  // 15. 🌍 GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": nauru_geopolitik,
  // =============================================================
  // 16. 🏛️ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 37,
    "pendidikan": 29,
    "keamanan": 5,
    "keuangan": 9,
    "lingkungan": 60
  }
};

