import { CountryData } from "@/app/database/data/types";
import { kosovo_agrikultur } from "@/app/database/data/semua_fitur_negara/1_produksi/7_sektor_agrikultur/eropa/123_kosovo";
import { kosovo_armada } from "@/app/database/data/semua_fitur_negara/2_militer/2_armada_militer/eropa/123_kosovo";
import { kosovo_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_produksi/4_sektor_ekstraksi/eropa/123_kosovo";
import { kosovo_farmasi } from "@/app/database/data/semua_fitur_negara/1_produksi/10_sektor_farmasi/eropa/123_kosovo";
import { kosovo_hukum } from "@/app/database/data/semua_fitur_negara/3_sosial/3_hukum/eropa/123_kosovo";
import { kosovo_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_produksi/3_infrastruktur/eropa/123_kosovo";
import { kosovo_kepolisian } from "@/app/database/data/semua_fitur_negara/2_militer/4_armada_kepolisian/eropa/123_kosovo";
import { kosovo_kesehatan } from "@/app/database/data/semua_fitur_negara/3_sosial/2_kesehatan/eropa/123_kosovo";
import { kosovo_listrik } from "@/app/database/data/semua_fitur_negara/1_produksi/2_kelistrikan/eropa/123_kosovo";
import { kosovo_manufaktur } from "@/app/database/data/semua_fitur_negara/1_produksi/5_sektor_manufaktur/eropa/123_kosovo";
import { kosovo_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_produksi/9_sektor_olahan_pangan/eropa/123_kosovo";
import { kosovo_olahraga } from "@/app/database/data/semua_fitur_negara/3_sosial/4_olahraga/eropa/123_kosovo";
import { kosovo_pabrik } from "@/app/database/data/semua_fitur_negara/2_militer/5_pabrik_militer/eropa/123_kosovo";
import { kosovo_pendidikan } from "@/app/database/data/semua_fitur_negara/3_sosial/1_pendidikan/eropa/123_kosovo";
import { kosovo_perikanan } from "@/app/database/data/semua_fitur_negara/1_produksi/8_sektor_perikanan/eropa/123_kosovo";
import { kosovo_pertahanan } from "@/app/database/data/semua_fitur_negara/2_militer/1_sektor_pertahanan/eropa/123_kosovo";
import { kosovo_peternakan } from "@/app/database/data/semua_fitur_negara/1_produksi/6_sektor_peternakan/eropa/123_kosovo";
import { kosovo_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/eropa/123_kosovo";
import { kosovo_strategis } from "@/app/database/data/semua_fitur_negara/2_militer/3_militer_strategis/eropa/123_kosovo";
import { kosovo_geopolitik } from "@/app/database/data/semua_fitur_negara/4_geopolitik/eropa/123_kosovo";

export const kosovo: CountryData = {
  ...kosovo_profile,
  "sektor_listrik": kosovo_listrik,
  "infrastruktur": kosovo_infrastruktur,
  "sektor_ekstraksi": kosovo_ekstraksi,
  "sektor_manufaktur": kosovo_manufaktur,
  "sektor_peternakan": kosovo_peternakan,
  "sektor_agrikultur": kosovo_agrikultur,
  "sektor_perikanan": kosovo_perikanan,
  "sektor_olahan_pangan": kosovo_olahan_pangan,
  "sektor_farmasi": kosovo_farmasi,
  "sektor_pertahanan": kosovo_pertahanan,
  "armada_militer": kosovo_armada,
  "militer_strategis": kosovo_strategis,
  "armada_kepolisian": kosovo_kepolisian,
  "pabrik_militer": kosovo_pabrik,
    "pendidikan": kosovo_pendidikan,
  "kesehatan": kosovo_kesehatan,
  "hukum": kosovo_hukum,
  "sektor_olahraga": kosovo_olahraga,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 30,
      "kepuasan": 67,
      "pendapatan": 3
    },
    "korporasi": {
      "tarif": 37,
      "kepuasan": 52,
      "pendapatan": 9
    },
    "penghasilan": {
      "tarif": 32,
      "kepuasan": 61,
      "pendapatan": 8
    },
    "bea_cukai": {
      "tarif": 31,
      "kepuasan": 86,
      "pendapatan": 8
    },
    "lingkungan": {
      "tarif": 8,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 2,
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
    "gaji_medis": 90,
    "gaji_militer": 80
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 25,
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
    "harga_beras": 12800,
    "harga_daging_sapi": 52050,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 12320,
    "harga_gula": 28800,
    "harga_telur": 31100,
    "harga_bbm": 8560,
    "harga_listrik": 2240,
    "harga_air": 10400,
    "harga_obat": 315800,
    "harga_pendidikan": 483900
  },
    // =============================================================
  // 15. 🌍 GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": kosovo_geopolitik,
  // =============================================================
  // 16. 🏛️ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 39,
    "pendidikan": 9,
    "keamanan": 33,
    "keuangan": 9,
    "lingkungan": 60
  }
};
