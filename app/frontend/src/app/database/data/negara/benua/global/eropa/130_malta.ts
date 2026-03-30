import { CountryData } from "@/app/database/data/types";
import { malta_agrikultur } from "@/app/database/data/semua_fitur_negara/1_produksi/7_sektor_agrikultur/eropa/130_malta";
import { malta_armada } from "@/app/database/data/semua_fitur_negara/2_militer/2_armada_militer/eropa/130_malta";
import { malta_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_produksi/4_sektor_ekstraksi/eropa/130_malta";
import { malta_farmasi } from "@/app/database/data/semua_fitur_negara/1_produksi/10_sektor_farmasi/eropa/130_malta";
import { malta_hukum } from "@/app/database/data/semua_fitur_negara/3_sosial/3_hukum/eropa/130_malta";
import { malta_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_produksi/3_infrastruktur/eropa/130_malta";
import { malta_kepolisian } from "@/app/database/data/semua_fitur_negara/2_militer/4_armada_kepolisian/eropa/130_malta";
import { malta_kesehatan } from "@/app/database/data/semua_fitur_negara/3_sosial/2_kesehatan/eropa/130_malta";
import { malta_listrik } from "@/app/database/data/semua_fitur_negara/1_produksi/2_kelistrikan/eropa/130_malta";
import { malta_manufaktur } from "@/app/database/data/semua_fitur_negara/1_produksi/5_sektor_manufaktur/eropa/130_malta";
import { malta_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_produksi/9_sektor_olahan_pangan/eropa/130_malta";
import { malta_olahraga } from "@/app/database/data/semua_fitur_negara/3_sosial/4_olahraga/eropa/130_malta";
import { malta_pabrik } from "@/app/database/data/semua_fitur_negara/2_militer/5_pabrik_militer/eropa/130_malta";
import { malta_pendidikan } from "@/app/database/data/semua_fitur_negara/3_sosial/1_pendidikan/eropa/130_malta";
import { malta_perikanan } from "@/app/database/data/semua_fitur_negara/1_produksi/8_sektor_perikanan/eropa/130_malta";
import { malta_pertahanan } from "@/app/database/data/semua_fitur_negara/2_militer/1_sektor_pertahanan/eropa/130_malta";
import { malta_peternakan } from "@/app/database/data/semua_fitur_negara/1_produksi/6_sektor_peternakan/eropa/130_malta";
import { malta_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/eropa/130_malta";
import { malta_strategis } from "@/app/database/data/semua_fitur_negara/2_militer/3_militer_strategis/eropa/130_malta";
import { malta_geopolitik } from "@/app/database/data/semua_fitur_negara/4_geopolitik/eropa/130_malta";

export const malta: CountryData = {
  ...malta_profile,
  "sektor_listrik": malta_listrik,
  "infrastruktur": malta_infrastruktur,
  "sektor_ekstraksi": malta_ekstraksi,
  "sektor_manufaktur": malta_manufaktur,
  "sektor_peternakan": malta_peternakan,
  "sektor_agrikultur": malta_agrikultur,
  "sektor_perikanan": malta_perikanan,
  "sektor_olahan_pangan": malta_olahan_pangan,
  "sektor_farmasi": malta_farmasi,
  "sektor_pertahanan": malta_pertahanan,
  "armada_militer": malta_armada,
  "militer_strategis": malta_strategis,
  "armada_kepolisian": malta_kepolisian,
  "pabrik_militer": malta_pabrik,
    "pendidikan": malta_pendidikan,
  "kesehatan": malta_kesehatan,
  "hukum": malta_hukum,
  "sektor_olahraga": malta_olahraga,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 32,
      "kepuasan": 67,
      "pendapatan": 14
    },
    "korporasi": {
      "tarif": 14,
      "kepuasan": 52,
      "pendapatan": 3
    },
    "penghasilan": {
      "tarif": 30,
      "kepuasan": 61,
      "pendapatan": 11
    },
    "bea_cukai": {
      "tarif": 21,
      "kepuasan": 86,
      "pendapatan": 5
    },
    "lingkungan": {
      "tarif": 33,
      "kepuasan": 88,
      "pendapatan": 12
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 3 },
    "lainnya": {
      "tarif": 5,
      "kepuasan": 93,
      "pendapatan": 1
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
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 100,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 145740,
    "harga_ayam": 20500,
    "harga_minyak_goreng": 12320,
    "harga_gula": 20160,
    "harga_telur": 15550,
    "harga_bbm": 8560,
    "harga_listrik": 1280,
    "harga_air": 4160,
    "harga_obat": 157900,
    "harga_pendidikan": 677460
  },
    // =============================================================
  // 15. 🌍 GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": malta_geopolitik,
  // =============================================================
  // 16. 🏛️ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 17,
    "pendidikan": 34,
    "keamanan": 16,
    "keuangan": 11,
    "lingkungan": 60
  }
};
