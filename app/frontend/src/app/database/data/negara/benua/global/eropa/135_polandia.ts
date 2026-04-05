import { CountryData } from "@/app/database/data/types";
import { polandia_agrikultur } from "@/app/database/data/semua_fitur_negara/1_produksi/5_sektor_agrikultur/eropa/135_polandia";
import { polandia_armada } from "@/app/database/data/semua_fitur_negara/2_militer/2_armada_militer/eropa/135_polandia";
import { polandia_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_produksi/2_sektor_mineral_kritis/eropa/135_polandia";
import { polandia_farmasi } from "@/app/database/data/semua_fitur_negara/1_produksi/8_sektor_farmasi/eropa/135_polandia";
import { polandia_hukum } from "@/app/database/data/semua_fitur_negara/3_sosial/3_hukum/eropa/135_polandia";
import { polandia_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_produksi/9_infrastruktur/eropa/135_polandia";
import { polandia_kepolisian } from "@/app/database/data/semua_fitur_negara/2_militer/4_armada_kepolisian/eropa/135_polandia";
import { polandia_kesehatan } from "@/app/database/data/semua_fitur_negara/3_sosial/2_kesehatan/eropa/135_polandia";
import { polandia_listrik } from "@/app/database/data/semua_fitur_negara/1_produksi/1_sektor_listrik_nasional/eropa/135_polandia";
import { polandia_manufaktur } from "@/app/database/data/semua_fitur_negara/1_produksi/3_manufaktur/eropa/135_polandia";
import { polandia_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_produksi/7_sektor_olahan_pangan/eropa/135_polandia";
import { polandia_olahraga } from "@/app/database/data/semua_fitur_negara/3_sosial/4_olahraga/eropa/135_polandia";
import { polandia_pabrik } from "@/app/database/data/semua_fitur_negara/2_militer/5_pabrik_militer/eropa/135_polandia";
import { polandia_pendidikan } from "@/app/database/data/semua_fitur_negara/3_sosial/1_pendidikan/eropa/135_polandia";
import { polandia_perikanan } from "@/app/database/data/semua_fitur_negara/1_produksi/6_sektor_perikanan/eropa/135_polandia";
import { polandia_pertahanan } from "@/app/database/data/semua_fitur_negara/2_militer/1_sektor_pertahanan/eropa/135_polandia";
import { polandia_peternakan } from "@/app/database/data/semua_fitur_negara/1_produksi/4_sektor_peternakan/eropa/135_polandia";
import { polandia_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/eropa/135_polandia";
import { polandia_strategis } from "@/app/database/data/semua_fitur_negara/2_militer/3_militer_strategis/eropa/135_polandia";
import { polandia_geopolitik } from "@/app/database/data/semua_fitur_negara/4_geopolitik/eropa/135_polandia";

export const polandia: CountryData = {
  ...polandia_profile,
  "sektor_listrik": polandia_listrik,
  "infrastruktur": polandia_infrastruktur,
  "sektor_ekstraksi": polandia_ekstraksi,
  "sektor_manufaktur": polandia_manufaktur,
  "sektor_peternakan": polandia_peternakan,
  "sektor_agrikultur": polandia_agrikultur,
  "sektor_perikanan": polandia_perikanan,
  "sektor_olahan_pangan": polandia_olahan_pangan,
  "sektor_farmasi": polandia_farmasi,
  "sektor_pertahanan": polandia_pertahanan,
  "armada_militer": polandia_armada,
  "militer_strategis": polandia_strategis,
  "armada_kepolisian": polandia_kepolisian,
  "pabrik_militer": polandia_pabrik,
    "pendidikan": polandia_pendidikan,
  "kesehatan": polandia_kesehatan,
  "hukum": polandia_hukum,
  "sektor_olahraga": polandia_olahraga,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 12,
      "kepuasan": 67,
      "pendapatan": 112
    },
    "korporasi": {
      "tarif": 26,
      "kepuasan": 52,
      "pendapatan": 392
    },
    "penghasilan": {
      "tarif": 6,
      "kepuasan": 61,
      "pendapatan": 80
    },
    "bea_cukai": {
      "tarif": 34,
      "kepuasan": 86,
      "pendapatan": 763
    },
    "lingkungan": {
      "tarif": 24,
      "kepuasan": 88,
      "pendapatan": 382
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 41 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 123 },
    "lainnya": {
      "tarif": 25,
      "kepuasan": 93,
      "pendapatan": 591
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 90,
    "gaji_guru": 90,
    "gaji_medis": 90,
    "gaji_militer": 80
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 100,
    "subsidi_pendidikan": 100,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 75
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 22400,
    "harga_daging_sapi": 145740,
    "harga_ayam": 32800,
    "harga_minyak_goreng": 15400,
    "harga_gula": 11520,
    "harga_telur": 15550,
    "harga_bbm": 10700,
    "harga_listrik": 1280,
    "harga_air": 5200,
    "harga_obat": 157900,
    "harga_pendidikan": 387120
  },
    // =============================================================
  // 15. 🌍 GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": polandia_geopolitik,
  // =============================================================
  // 16. 🏛️ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 11,
    "pendidikan": 32,
    "keamanan": 17,
    "keuangan": 39,
    "lingkungan": 60
  }
};

