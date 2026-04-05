import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { islandia_agrikultur } from "@/app/database/data/semua_fitur_negara/1_produksi/5_sektor_agrikultur/eropa/119_islandia";
import { islandia_armada } from "@/app/database/data/semua_fitur_negara/2_produksi_militer/2_armada_militer/eropa/119_islandia";
import { islandia_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_produksi/2_sektor_mineral_kritis/eropa/119_islandia";
import { islandia_farmasi } from "@/app/database/data/semua_fitur_negara/1_produksi/8_sektor_farmasi/eropa/119_islandia";
import { islandia_hukum } from "@/app/database/data/semua_fitur_negara/3_tempat_umum/3_hukum/eropa/119_islandia";
import { islandia_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_produksi/9_infrastruktur/eropa/119_islandia";
import { islandia_kepolisian } from "@/app/database/data/semua_fitur_negara/2_produksi_militer/4_armada_kepolisian/eropa/119_islandia";
import { islandia_kesehatan } from "@/app/database/data/semua_fitur_negara/3_tempat_umum/2_kesehatan/eropa/119_islandia";
import { islandia_listrik } from "@/app/database/data/semua_fitur_negara/1_produksi/1_sektor_listrik_nasional/eropa/119_islandia";
import { islandia_manufaktur } from "@/app/database/data/semua_fitur_negara/1_produksi/3_manufaktur/eropa/119_islandia";
import { islandia_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_produksi/7_sektor_olahan_pangan/eropa/119_islandia";
import { islandia_olahraga } from "@/app/database/data/semua_fitur_negara/3_tempat_umum/4_olahraga/eropa/119_islandia";
import { islandia_pabrik } from "@/app/database/data/semua_fitur_negara/2_produksi_militer/5_pabrik_militer/eropa/119_islandia";
import { islandia_pendidikan } from "@/app/database/data/semua_fitur_negara/3_tempat_umum/1_pendidikan/eropa/119_islandia";
import { islandia_perikanan } from "@/app/database/data/semua_fitur_negara/1_produksi/6_sektor_perikanan/eropa/119_islandia";
import { islandia_pertahanan } from "@/app/database/data/semua_fitur_negara/2_produksi_militer/1_sektor_pertahanan/eropa/119_islandia";
import { islandia_peternakan } from "@/app/database/data/semua_fitur_negara/1_produksi/4_sektor_peternakan/eropa/119_islandia";
import { islandia_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/eropa/119_islandia";
import { islandia_strategis } from "@/app/database/data/semua_fitur_negara/2_produksi_militer/3_militer_strategis/eropa/119_islandia";
import { islandia_geopolitik } from "@/app/database/data/semua_fitur_negara/4_geopolitik/eropa/119_islandia";

export const islandia: CountryData = {
  ...islandia_profile,
  "sektor_listrik": islandia_listrik,
  "infrastruktur": islandia_infrastruktur,
  "sektor_ekstraksi": islandia_ekstraksi,
  "sektor_manufaktur": islandia_manufaktur,
  "sektor_peternakan": islandia_peternakan,
  "sektor_agrikultur": islandia_agrikultur,
  "sektor_perikanan": islandia_perikanan,
  "sektor_olahan_pangan": islandia_olahan_pangan,
  "sektor_farmasi": islandia_farmasi,
  "sektor_pertahanan": islandia_pertahanan,
  "armada_militer": islandia_armada,
  "militer_strategis": islandia_strategis,
  "armada_kepolisian": islandia_kepolisian,
  "pabrik_militer": islandia_pabrik,
    "pendidikan": islandia_pendidikan,
  "kesehatan": islandia_kesehatan,
  "hukum": islandia_hukum,
  "sektor_olahraga": islandia_olahraga,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 14,
      "kepuasan": 67,
      "pendapatan": 4
    },
    "korporasi": {
      "tarif": 32,
      "kepuasan": 52,
      "pendapatan": 9
    },
    "penghasilan": {
      "tarif": 28,
      "kepuasan": 61,
      "pendapatan": 22
    },
    "bea_cukai": {
      "tarif": 16,
      "kepuasan": 86,
      "pendapatan": 8
    },
    "lingkungan": {
      "tarif": 9,
      "kepuasan": 88,
      "pendapatan": 3
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 2 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 5 },
    "lainnya": {
      "tarif": 20,
      "kepuasan": 93,
      "pendapatan": 6
    }
  },
  // =============================================================
  // 12. ðŸ’° GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 90,
    "gaji_guru": 90,
    "gaji_medis": 90,
    "gaji_militer": 80
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 100,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 75
  },
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 104100,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 20160,
    "harga_telur": 15550,
    "harga_bbm": 8560,
    "harga_listrik": 1600,
    "harga_air": 5200,
    "harga_obat": 157900,
    "harga_pendidikan": 387120
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": islandia_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 32,
    "pendidikan": 28,
    "keamanan": 9,
    "keuangan": 22,
    "lingkungan": 60
  }
};

