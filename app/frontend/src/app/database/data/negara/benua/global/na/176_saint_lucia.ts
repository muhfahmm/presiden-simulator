import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { saint_lucia_agrikultur } from "@/app/database/data/semua_fitur_negara/1_produksi/5_sektor_agrikultur/na/176_saint_lucia";
import { saint_lucia_armada } from "@/app/database/data/semua_fitur_negara/2_militer/2_armada_militer/na/176_saint_lucia";
import { saint_lucia_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_produksi/2_sektor_mineral_kritis/na/176_saint_lucia";
import { saint_lucia_farmasi } from "@/app/database/data/semua_fitur_negara/1_produksi/8_sektor_farmasi/na/176_saint_lucia";
import { saint_lucia_hukum } from "@/app/database/data/semua_fitur_negara/3_sosial/3_hukum/na/176_saint_lucia";
import { saint_lucia_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_produksi/9_infrastruktur/na/176_saint_lucia";
import { saint_lucia_kepolisian } from "@/app/database/data/semua_fitur_negara/2_militer/4_armada_kepolisian/na/176_saint_lucia";
import { saint_lucia_kesehatan } from "@/app/database/data/semua_fitur_negara/3_sosial/2_kesehatan/na/176_saint_lucia";
import { saint_lucia_listrik } from "@/app/database/data/semua_fitur_negara/1_produksi/1_sektor_listrik_nasional/na/176_saint_lucia";
import { saint_lucia_manufaktur } from "@/app/database/data/semua_fitur_negara/1_produksi/3_manufaktur/na/176_saint_lucia";
import { saint_lucia_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_produksi/7_sektor_olahan_pangan/na/176_saint_lucia";
import { saint_lucia_olahraga } from "@/app/database/data/semua_fitur_negara/3_sosial/4_olahraga/na/176_saint_lucia";
import { saint_lucia_pabrik } from "@/app/database/data/semua_fitur_negara/2_militer/5_pabrik_militer/na/176_saint_lucia";
import { saint_lucia_pendidikan } from "@/app/database/data/semua_fitur_negara/3_sosial/1_pendidikan/na/176_saint_lucia";
import { saint_lucia_perikanan } from "@/app/database/data/semua_fitur_negara/1_produksi/6_sektor_perikanan/na/176_saint_lucia";
import { saint_lucia_pertahanan } from "@/app/database/data/semua_fitur_negara/2_militer/1_sektor_pertahanan/na/176_saint_lucia";
import { saint_lucia_peternakan } from "@/app/database/data/semua_fitur_negara/1_produksi/4_sektor_peternakan/na/176_saint_lucia";
import { saint_lucia_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/na/176_saint_lucia";
import { saint_lucia_strategis } from "@/app/database/data/semua_fitur_negara/2_militer/3_militer_strategis/na/176_saint_lucia";
import { saint_lucia_geopolitik } from "@/app/database/data/semua_fitur_negara/4_geopolitik/na/176_saint_lucia";

export const saint_lucia: CountryData = {
  ...saint_lucia_profile,
  "sektor_listrik": saint_lucia_listrik,
  "infrastruktur": saint_lucia_infrastruktur,
  "sektor_ekstraksi": saint_lucia_ekstraksi,
  "sektor_manufaktur": saint_lucia_manufaktur,
  "sektor_peternakan": saint_lucia_peternakan,
  "sektor_agrikultur": saint_lucia_agrikultur,
  "sektor_perikanan": saint_lucia_perikanan,
  "sektor_olahan_pangan": saint_lucia_olahan_pangan,
  "sektor_farmasi": saint_lucia_farmasi,
  "sektor_pertahanan": saint_lucia_pertahanan,
  "armada_militer": saint_lucia_armada,
  "militer_strategis": saint_lucia_strategis,
  "armada_kepolisian": saint_lucia_kepolisian,
  "pabrik_militer": saint_lucia_pabrik,
    "pendidikan": saint_lucia_pendidikan,
  "kesehatan": saint_lucia_kesehatan,
  "hukum": saint_lucia_hukum,
  "sektor_olahraga": saint_lucia_olahraga,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 12,
      "kepuasan": 67,
      "pendapatan": 2
    },
    "korporasi": {
      "tarif": 6,
      "kepuasan": 52,
      "pendapatan": 1
    },
    "penghasilan": {
      "tarif": 29,
      "kepuasan": 61,
      "pendapatan": 7
    },
    "bea_cukai": {
      "tarif": 11,
      "kepuasan": 86,
      "pendapatan": 2
    },
    "lingkungan": {
      "tarif": 5,
      "kepuasan": 88,
      "pendapatan": 1
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 16,
      "kepuasan": 93,
      "pendapatan": 3
    }
  },
  // =============================================================
  // 12. ðŸ’° GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 80,
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
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 145740,
    "harga_ayam": 57400,
    "harga_minyak_goreng": 21560,
    "harga_gula": 28800,
    "harga_telur": 15550,
    "harga_bbm": 14980,
    "harga_listrik": 1280,
    "harga_air": 7280,
    "harga_obat": 126320,
    "harga_pendidikan": 387120
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": saint_lucia_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 35,
    "pendidikan": 21,
    "keamanan": 16,
    "keuangan": 28,
    "lingkungan": 60
  }
};

