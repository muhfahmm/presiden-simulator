import { CountryData } from "@/app/database/data/types";
import { saint_kitts_dan_nevis_agrikultur } from "@/app/database/data/semua_fitur_negara/1_produksi/5_sektor_agrikultur/na/175_saint_kitts_dan_nevis";
import { saint_kitts_dan_nevis_armada } from "@/app/database/data/semua_fitur_negara/2_militer/2_armada_militer/na/175_saint_kitts_dan_nevis";
import { saint_kitts_dan_nevis_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_produksi/2_sektor_mineral_kritis/na/175_saint_kitts_dan_nevis";
import { saint_kitts_dan_nevis_farmasi } from "@/app/database/data/semua_fitur_negara/1_produksi/8_sektor_farmasi/na/175_saint_kitts_dan_nevis";
import { saint_kitts_dan_nevis_hukum } from "@/app/database/data/semua_fitur_negara/3_sosial/3_hukum/na/175_saint_kitts_dan_nevis";
import { saint_kitts_dan_nevis_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_produksi/9_infrastruktur/na/175_saint_kitts_dan_nevis";
import { saint_kitts_dan_nevis_kepolisian } from "@/app/database/data/semua_fitur_negara/2_militer/4_armada_kepolisian/na/175_saint_kitts_dan_nevis";
import { saint_kitts_dan_nevis_kesehatan } from "@/app/database/data/semua_fitur_negara/3_sosial/2_kesehatan/na/175_saint_kitts_dan_nevis";
import { saint_kitts_dan_nevis_listrik } from "@/app/database/data/semua_fitur_negara/1_produksi/1_sektor_listrik_nasional/na/175_saint_kitts_dan_nevis";
import { saint_kitts_dan_nevis_manufaktur } from "@/app/database/data/semua_fitur_negara/1_produksi/3_manufaktur/na/175_saint_kitts_dan_nevis";
import { saint_kitts_dan_nevis_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_produksi/7_sektor_olahan_pangan/na/175_saint_kitts_dan_nevis";
import { saint_kitts_dan_nevis_olahraga } from "@/app/database/data/semua_fitur_negara/3_sosial/4_olahraga/na/175_saint_kitts_dan_nevis";
import { saint_kitts_dan_nevis_pabrik } from "@/app/database/data/semua_fitur_negara/2_militer/5_pabrik_militer/na/175_saint_kitts_dan_nevis";
import { saint_kitts_dan_nevis_pendidikan } from "@/app/database/data/semua_fitur_negara/3_sosial/1_pendidikan/na/175_saint_kitts_dan_nevis";
import { saint_kitts_dan_nevis_perikanan } from "@/app/database/data/semua_fitur_negara/1_produksi/6_sektor_perikanan/na/175_saint_kitts_dan_nevis";
import { saint_kitts_dan_nevis_pertahanan } from "@/app/database/data/semua_fitur_negara/2_militer/1_sektor_pertahanan/na/175_saint_kitts_dan_nevis";
import { saint_kitts_dan_nevis_peternakan } from "@/app/database/data/semua_fitur_negara/1_produksi/4_sektor_peternakan/na/175_saint_kitts_dan_nevis";
import { saint_kitts_dan_nevis_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/na/175_saint_kitts_dan_nevis";
import { saint_kitts_dan_nevis_strategis } from "@/app/database/data/semua_fitur_negara/2_militer/3_militer_strategis/na/175_saint_kitts_dan_nevis";
import { saint_kitts_dan_nevis_geopolitik } from "@/app/database/data/semua_fitur_negara/4_geopolitik/na/175_saint_kitts_dan_nevis";

export const saint_kitts_dan_nevis: CountryData = {
  ...saint_kitts_dan_nevis_profile,
  "sektor_listrik": saint_kitts_dan_nevis_listrik,
  "infrastruktur": saint_kitts_dan_nevis_infrastruktur,
  "sektor_ekstraksi": saint_kitts_dan_nevis_ekstraksi,
  "sektor_manufaktur": saint_kitts_dan_nevis_manufaktur,
  "sektor_peternakan": saint_kitts_dan_nevis_peternakan,
  "sektor_agrikultur": saint_kitts_dan_nevis_agrikultur,
  "sektor_perikanan": saint_kitts_dan_nevis_perikanan,
  "sektor_olahan_pangan": saint_kitts_dan_nevis_olahan_pangan,
  "sektor_farmasi": saint_kitts_dan_nevis_farmasi,
  "sektor_pertahanan": saint_kitts_dan_nevis_pertahanan,
  "armada_militer": saint_kitts_dan_nevis_armada,
  "militer_strategis": saint_kitts_dan_nevis_strategis,
  "armada_kepolisian": saint_kitts_dan_nevis_kepolisian,
  "pabrik_militer": saint_kitts_dan_nevis_pabrik,
    "pendidikan": saint_kitts_dan_nevis_pendidikan,
  "kesehatan": saint_kitts_dan_nevis_kesehatan,
  "hukum": saint_kitts_dan_nevis_hukum,
  "sektor_olahraga": saint_kitts_dan_nevis_olahraga,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 1,
      "kepuasan": 67,
      "pendapatan": 0
    },
    "korporasi": {
      "tarif": 26,
      "kepuasan": 52,
      "pendapatan": 5
    },
    "penghasilan": {
      "tarif": 13,
      "kepuasan": 61,
      "pendapatan": 2
    },
    "bea_cukai": {
      "tarif": 24,
      "kepuasan": 86,
      "pendapatan": 6
    },
    "lingkungan": {
      "tarif": 19,
      "kepuasan": 88,
      "pendapatan": 4
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 39,
      "kepuasan": 93,
      "pendapatan": 5
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 90,
    "gaji_guru": 100,
    "gaji_medis": 90,
    "gaji_militer": 90
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 100,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 32000,
    "harga_daging_sapi": 104100,
    "harga_ayam": 32800,
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 43540,
    "harga_bbm": 8560,
    "harga_listrik": 1280,
    "harga_air": 5200,
    "harga_obat": 126320,
    "harga_pendidikan": 241950
  },
    // =============================================================
  // 15. 🌍 GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": saint_kitts_dan_nevis_geopolitik,
  // =============================================================
  // 16. 🏛️ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 37,
    "pendidikan": 9,
    "keamanan": 5,
    "keuangan": 22,
    "lingkungan": 60
  }
};

