import { CountryData } from "@/app/database/data/types";
import { jamaika_agrikultur } from "@/app/database/data/semua_fitur_negara/1_produksi/7_sektor_agrikultur/na/167_jamaika";
import { jamaika_armada } from "@/app/database/data/semua_fitur_negara/2_militer/2_armada_militer/na/167_jamaika";
import { jamaika_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_produksi/4_sektor_ekstraksi/na/167_jamaika";
import { jamaika_farmasi } from "@/app/database/data/semua_fitur_negara/1_produksi/10_sektor_farmasi/na/167_jamaika";
import { jamaika_hukum } from "@/app/database/data/semua_fitur_negara/3_sosial/3_hukum/na/167_jamaika";
import { jamaika_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_produksi/3_infrastruktur/na/167_jamaika";
import { jamaika_kepolisian } from "@/app/database/data/semua_fitur_negara/2_militer/4_armada_kepolisian/na/167_jamaika";
import { jamaika_kesehatan } from "@/app/database/data/semua_fitur_negara/3_sosial/2_kesehatan/na/167_jamaika";
import { jamaika_listrik } from "@/app/database/data/semua_fitur_negara/1_produksi/2_kelistrikan/na/167_jamaika";
import { jamaika_manufaktur } from "@/app/database/data/semua_fitur_negara/1_produksi/5_sektor_manufaktur/na/167_jamaika";
import { jamaika_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_produksi/9_sektor_olahan_pangan/na/167_jamaika";
import { jamaika_olahraga } from "@/app/database/data/semua_fitur_negara/3_sosial/4_olahraga/na/167_jamaika";
import { jamaika_pabrik } from "@/app/database/data/semua_fitur_negara/2_militer/5_pabrik_militer/na/167_jamaika";
import { jamaika_pendidikan } from "@/app/database/data/semua_fitur_negara/3_sosial/1_pendidikan/na/167_jamaika";
import { jamaika_perikanan } from "@/app/database/data/semua_fitur_negara/1_produksi/8_sektor_perikanan/na/167_jamaika";
import { jamaika_pertahanan } from "@/app/database/data/semua_fitur_negara/2_militer/1_sektor_pertahanan/na/167_jamaika";
import { jamaika_peternakan } from "@/app/database/data/semua_fitur_negara/1_produksi/6_sektor_peternakan/na/167_jamaika";
import { jamaika_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/na/167_jamaika";
import { jamaika_strategis } from "@/app/database/data/semua_fitur_negara/2_militer/3_militer_strategis/na/167_jamaika";
import { jamaika_geopolitik } from "@/app/database/data/semua_fitur_negara/4_geopolitik/na/167_jamaika";

export const jamaika: CountryData = {
  ...jamaika_profile,
  "sektor_listrik": jamaika_listrik,
  "infrastruktur": jamaika_infrastruktur,
  "sektor_ekstraksi": jamaika_ekstraksi,
  "sektor_manufaktur": jamaika_manufaktur,
  "sektor_peternakan": jamaika_peternakan,
  "sektor_agrikultur": jamaika_agrikultur,
  "sektor_perikanan": jamaika_perikanan,
  "sektor_olahan_pangan": jamaika_olahan_pangan,
  "sektor_farmasi": jamaika_farmasi,
  "sektor_pertahanan": jamaika_pertahanan,
  "armada_militer": jamaika_armada,
  "militer_strategis": jamaika_strategis,
  "armada_kepolisian": jamaika_kepolisian,
  "pabrik_militer": jamaika_pabrik,
    "pendidikan": jamaika_pendidikan,
  "kesehatan": jamaika_kesehatan,
  "hukum": jamaika_hukum,
  "sektor_olahraga": jamaika_olahraga,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 34,
      "kepuasan": 67,
      "pendapatan": 15
    },
    "korporasi": {
      "tarif": 23,
      "kepuasan": 52,
      "pendapatan": 6
    },
    "penghasilan": {
      "tarif": 31,
      "kepuasan": 61,
      "pendapatan": 6
    },
    "bea_cukai": {
      "tarif": 36,
      "kepuasan": 86,
      "pendapatan": 10
    },
    "lingkungan": {
      "tarif": 8,
      "kepuasan": 88,
      "pendapatan": 1
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 3 },
    "lainnya": {
      "tarif": 9,
      "kepuasan": 93,
      "pendapatan": 2
    }
  },
  // =============================================================
  // 12. ðŸ’° GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 100,
    "gaji_guru": 90,
    "gaji_medis": 90,
    "gaji_militer": 80
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 25,
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
    "harga_beras": 8000,
    "harga_daging_sapi": 104100,
    "harga_ayam": 57400,
    "harga_minyak_goreng": 12320,
    "harga_gula": 20160,
    "harga_telur": 24880,
    "harga_bbm": 10700,
    "harga_listrik": 2240,
    "harga_air": 7280,
    "harga_obat": 221060,
    "harga_pendidikan": 677460
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": jamaika_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 16,
    "pendidikan": 34,
    "keamanan": 35,
    "keuangan": 14,
    "lingkungan": 60
  }
};

