import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { tajikistan_agrikultur } from "@/app/database/data/semua_fitur_negara/1_produksi/5_sektor_agrikultur/asia/95_tajikistan";
import { tajikistan_armada } from "@/app/database/data/semua_fitur_negara/2_produksi_militer/2_armada_militer/asia/95_tajikistan";
import { tajikistan_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_produksi/2_sektor_mineral_kritis/asia/95_tajikistan";
import { tajikistan_farmasi } from "@/app/database/data/semua_fitur_negara/1_produksi/8_sektor_farmasi/asia/95_tajikistan";
import { tajikistan_hukum } from "@/app/database/data/semua_fitur_negara/3_tempat_umum/3_hukum/asia/95_tajikistan";
import { tajikistan_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_produksi/9_infrastruktur/asia/95_tajikistan";
import { tajikistan_kepolisian } from "@/app/database/data/semua_fitur_negara/2_produksi_militer/4_armada_kepolisian/asia/95_tajikistan";
import { tajikistan_kesehatan } from "@/app/database/data/semua_fitur_negara/3_tempat_umum/2_kesehatan/asia/95_tajikistan";
import { tajikistan_listrik } from "@/app/database/data/semua_fitur_negara/1_produksi/1_sektor_listrik_nasional/asia/95_tajikistan";
import { tajikistan_manufaktur } from "@/app/database/data/semua_fitur_negara/1_produksi/3_manufaktur/asia/95_tajikistan";
import { tajikistan_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_produksi/7_sektor_olahan_pangan/asia/95_tajikistan";
import { tajikistan_olahraga } from "@/app/database/data/semua_fitur_negara/3_tempat_umum/4_olahraga/asia/95_tajikistan";
import { tajikistan_pabrik } from "@/app/database/data/semua_fitur_negara/2_produksi_militer/5_pabrik_militer/asia/95_tajikistan";
import { tajikistan_pendidikan } from "@/app/database/data/semua_fitur_negara/3_tempat_umum/1_pendidikan/asia/95_tajikistan";
import { tajikistan_perikanan } from "@/app/database/data/semua_fitur_negara/1_produksi/6_sektor_perikanan/asia/95_tajikistan";
import { tajikistan_pertahanan } from "@/app/database/data/semua_fitur_negara/2_produksi_militer/1_sektor_pertahanan/asia/95_tajikistan";
import { tajikistan_peternakan } from "@/app/database/data/semua_fitur_negara/1_produksi/4_sektor_peternakan/asia/95_tajikistan";
import { tajikistan_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/asia/95_tajikistan";
import { tajikistan_strategis } from "@/app/database/data/semua_fitur_negara/2_produksi_militer/3_militer_strategis/asia/95_tajikistan";
import { tajikistan_geopolitik } from "@/app/database/data/semua_fitur_negara/4_geopolitik/asia/95_tajikistan";

export const tajikistan: CountryData = {
  ...tajikistan_profile,
  "sektor_listrik": tajikistan_listrik,
  "infrastruktur": tajikistan_infrastruktur,
  "sektor_ekstraksi": tajikistan_ekstraksi,
  "sektor_manufaktur": tajikistan_manufaktur,
  "sektor_peternakan": tajikistan_peternakan,
  "sektor_agrikultur": tajikistan_agrikultur,
  "sektor_perikanan": tajikistan_perikanan,
  "sektor_olahan_pangan": tajikistan_olahan_pangan,
  "sektor_farmasi": tajikistan_farmasi,
  "sektor_pertahanan": tajikistan_pertahanan,
  "armada_militer": tajikistan_armada,
  "militer_strategis": tajikistan_strategis,
  "armada_kepolisian": tajikistan_kepolisian,
  "pabrik_militer": tajikistan_pabrik,
    "pendidikan": tajikistan_pendidikan,
  "kesehatan": tajikistan_kesehatan,
  "hukum": tajikistan_hukum,
  "sektor_olahraga": tajikistan_olahraga,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 7,
      "kepuasan": 67,
      "pendapatan": 1
    },
    "korporasi": {
      "tarif": 40,
      "kepuasan": 52,
      "pendapatan": 11
    },
    "penghasilan": {
      "tarif": 28,
      "kepuasan": 61,
      "pendapatan": 6
    },
    "bea_cukai": {
      "tarif": 33,
      "kepuasan": 86,
      "pendapatan": 4
    },
    "lingkungan": {
      "tarif": 5,
      "kepuasan": 88,
      "pendapatan": 1
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 11,
      "kepuasan": 93,
      "pendapatan": 3
    }
  },
  // =============================================================
  // 12. ðŸ’° GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 60,
    "gaji_guru": 70,
    "gaji_medis": 80,
    "gaji_militer": 60
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 208200,
    "harga_ayam": 20500,
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 43540,
    "harga_bbm": 10700,
    "harga_listrik": 1600,
    "harga_air": 4160,
    "harga_obat": 157900,
    "harga_pendidikan": 387120
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": tajikistan_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 35,
    "pendidikan": 8,
    "keamanan": 12,
    "keuangan": 29,
    "lingkungan": 60
  }
};

