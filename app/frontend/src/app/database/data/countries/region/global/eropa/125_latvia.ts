import { CountryData } from "@/app/database/data/types";
import { latvia_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/eropa/125_latvia";
import { latvia_armada } from "../../modules/2_militer/2_armada_militer/eropa/125_latvia";
import { latvia_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/eropa/125_latvia";
import { latvia_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/eropa/125_latvia";
import { latvia_hukum } from "../../modules/3_sosial/3_hukum/eropa/125_latvia";
import { latvia_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/eropa/125_latvia";
import { latvia_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/eropa/125_latvia";
import { latvia_kesehatan } from "../../modules/3_sosial/2_kesehatan/eropa/125_latvia";
import { latvia_listrik } from "../../modules/1_ekonomi/2_kelistrikan/eropa/125_latvia";
import { latvia_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/eropa/125_latvia";
import { latvia_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/eropa/125_latvia";
import { latvia_olahraga } from "../../modules/3_sosial/4_olahraga/eropa/125_latvia";
import { latvia_pabrik } from "../../modules/2_militer/5_pabrik_militer/eropa/125_latvia";
import { latvia_pendidikan } from "../../modules/3_sosial/1_pendidikan/eropa/125_latvia";
import { latvia_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/eropa/125_latvia";
import { latvia_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/eropa/125_latvia";
import { latvia_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/eropa/125_latvia";
import { latvia_profile } from "../../modules/0_profiles/eropa/125_latvia";
import { latvia_strategis } from "../../modules/2_militer/3_militer_strategis/eropa/125_latvia";
import { latvia_geopolitik } from "../../modules/4_geopolitik/eropa/125_latvia";

export const latvia: CountryData = {
  ...latvia_profile,
  "sektor_listrik": latvia_listrik,
  "infrastruktur": latvia_infrastruktur,
  "sektor_ekstraksi": latvia_ekstraksi,
  "sektor_manufaktur": latvia_manufaktur,
  "sektor_peternakan": latvia_peternakan,
  "sektor_agrikultur": latvia_agrikultur,
  "sektor_perikanan": latvia_perikanan,
  "sektor_olahan_pangan": latvia_olahan_pangan,
  "sektor_farmasi": latvia_farmasi,
  "sektor_pertahanan": latvia_pertahanan,
  "armada_militer": latvia_armada,
  "militer_strategis": latvia_strategis,
  "armada_kepolisian": latvia_kepolisian,
  "pabrik_militer": latvia_pabrik,
    "pendidikan": latvia_pendidikan,
  "kesehatan": latvia_kesehatan,
  "hukum": latvia_hukum,
  "sektor_olahraga": latvia_olahraga,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 39,
      "kepuasan": 67,
      "pendapatan": 23
    },
    "korporasi": {
      "tarif": 35,
      "kepuasan": 52,
      "pendapatan": 25
    },
    "penghasilan": {
      "tarif": 14,
      "kepuasan": 61,
      "pendapatan": 15
    },
    "bea_cukai": {
      "tarif": 36,
      "kepuasan": 86,
      "pendapatan": 16
    },
    "lingkungan": {
      "tarif": 36,
      "kepuasan": 88,
      "pendapatan": 24
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 3 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 7 },
    "lainnya": {
      "tarif": 18,
      "kepuasan": 93,
      "pendapatan": 14
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 90,
    "gaji_guru": 90,
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
    "subsidi_perumahan": 75
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12800,
    "harga_daging_sapi": 104100,
    "harga_ayam": 20500,
    "harga_minyak_goreng": 30800,
    "harga_gula": 14400,
    "harga_telur": 31100,
    "harga_bbm": 10700,
    "harga_listrik": 2240,
    "harga_air": 5200,
    "harga_obat": 315800,
    "harga_pendidikan": 387120
  },
    // =============================================================
  // 15. 🌍 GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": latvia_geopolitik,
  // =============================================================
  // 16. 🏛️ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 16,
    "pendidikan": 1,
    "keamanan": 31,
    "keuangan": 27,
    "lingkungan": 60
  }
};
