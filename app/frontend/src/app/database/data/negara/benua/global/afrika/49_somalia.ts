import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { somalia_agrikultur } from "@/app/database/data/semua_fitur_negara/1_produksi/5_sektor_agrikultur/afrika/49_somalia";
import { somalia_armada } from "@/app/database/data/semua_fitur_negara/2_militer/2_armada_militer/afrika/49_somalia";
import { somalia_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_produksi/2_sektor_mineral_kritis/afrika/49_somalia";
import { somalia_farmasi } from "@/app/database/data/semua_fitur_negara/1_produksi/8_sektor_farmasi/afrika/49_somalia";
import { somalia_hukum } from "@/app/database/data/semua_fitur_negara/3_sosial/3_hukum/afrika/49_somalia";
import { somalia_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_produksi/9_infrastruktur/afrika/49_somalia";
import { somalia_kepolisian } from "@/app/database/data/semua_fitur_negara/2_militer/4_armada_kepolisian/afrika/49_somalia";
import { somalia_kesehatan } from "@/app/database/data/semua_fitur_negara/3_sosial/2_kesehatan/afrika/49_somalia";
import { somalia_listrik } from "@/app/database/data/semua_fitur_negara/1_produksi/1_sektor_listrik_nasional/afrika/49_somalia";
import { somalia_manufaktur } from "@/app/database/data/semua_fitur_negara/1_produksi/3_manufaktur/afrika/49_somalia";
import { somalia_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_produksi/7_sektor_olahan_pangan/afrika/49_somalia";
import { somalia_olahraga } from "@/app/database/data/semua_fitur_negara/3_sosial/4_olahraga/afrika/49_somalia";
import { somalia_pabrik } from "@/app/database/data/semua_fitur_negara/2_militer/5_pabrik_militer/afrika/49_somalia";
import { somalia_pendidikan } from "@/app/database/data/semua_fitur_negara/3_sosial/1_pendidikan/afrika/49_somalia";
import { somalia_perikanan } from "@/app/database/data/semua_fitur_negara/1_produksi/6_sektor_perikanan/afrika/49_somalia";
import { somalia_pertahanan } from "@/app/database/data/semua_fitur_negara/2_militer/1_sektor_pertahanan/afrika/49_somalia";
import { somalia_peternakan } from "@/app/database/data/semua_fitur_negara/1_produksi/4_sektor_peternakan/afrika/49_somalia";
import { somalia_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/afrika/49_somalia";
import { somalia_strategis } from "@/app/database/data/semua_fitur_negara/2_militer/3_militer_strategis/afrika/49_somalia";
import { somalia_geopolitik } from "@/app/database/data/semua_fitur_negara/4_geopolitik/afrika/49_somalia";

export const somalia: CountryData = {
  ...somalia_profile,
  "sektor_listrik": somalia_listrik,
  "infrastruktur": somalia_infrastruktur,
  "sektor_ekstraksi": somalia_ekstraksi,
  "sektor_manufaktur": somalia_manufaktur,
  "sektor_peternakan": somalia_peternakan,
  "sektor_agrikultur": somalia_agrikultur,
  "sektor_perikanan": somalia_perikanan,
  "sektor_olahan_pangan": somalia_olahan_pangan,
  "sektor_farmasi": somalia_farmasi,
  "sektor_pertahanan": somalia_pertahanan,
  "armada_militer": somalia_armada,
  "militer_strategis": somalia_strategis,
  "armada_kepolisian": somalia_kepolisian,
  "pabrik_militer": somalia_pabrik,
    "pendidikan": somalia_pendidikan,
  "kesehatan": somalia_kesehatan,
  "hukum": somalia_hukum,
  "sektor_olahraga": somalia_olahraga,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 12,
      "kepuasan": 67,
      "pendapatan": 1
    },
    "korporasi": {
      "tarif": 12,
      "kepuasan": 52,
      "pendapatan": 2
    },
    "penghasilan": {
      "tarif": 39,
      "kepuasan": 61,
      "pendapatan": 5
    },
    "bea_cukai": {
      "tarif": 11,
      "kepuasan": 86,
      "pendapatan": 2
    },
    "lingkungan": {
      "tarif": 6,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 40,
      "kepuasan": 93,
      "pendapatan": 5
    }
  },
  // =============================================================
  // 12. ðŸ’° GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 40,
    "gaji_guru": 50,
    "gaji_medis": 40,
    "gaji_militer": 50
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 25,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 25,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 52050,
    "harga_ayam": 32800,
    "harga_minyak_goreng": 21560,
    "harga_gula": 14400,
    "harga_telur": 31100,
    "harga_bbm": 10700,
    "harga_listrik": 2240,
    "harga_air": 5200,
    "harga_obat": 157900,
    "harga_pendidikan": 967800
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": somalia_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 8,
    "pendidikan": 11,
    "keamanan": 24,
    "keuangan": 13,
    "lingkungan": 60
  }
};

