import { CountryData } from "@/app/database/data/types";
import { israel_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/asia/70_israel";
import { israel_armada } from "../../modules/2_militer/2_armada_militer/asia/70_israel";
import { israel_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/asia/70_israel";
import { israel_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/asia/70_israel";
import { israel_hukum } from "../../modules/3_sosial/3_hukum/asia/70_israel";
import { israel_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/asia/70_israel";
import { israel_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/asia/70_israel";
import { israel_kesehatan } from "../../modules/3_sosial/2_kesehatan/asia/70_israel";
import { israel_listrik } from "../../modules/1_ekonomi/2_kelistrikan/asia/70_israel";
import { israel_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/asia/70_israel";
import { israel_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/asia/70_israel";
import { israel_olahraga } from "../../modules/3_sosial/4_olahraga/asia/70_israel";
import { israel_pabrik } from "../../modules/2_militer/5_pabrik_militer/asia/70_israel";
import { israel_pendidikan } from "../../modules/3_sosial/1_pendidikan/asia/70_israel";
import { israel_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/asia/70_israel";
import { israel_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/asia/70_israel";
import { israel_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/asia/70_israel";
import { israel_profile } from "../../modules/0_profiles/asia/70_israel";
import { israel_strategis } from "../../modules/2_militer/3_militer_strategis/asia/70_israel";

export const israel: CountryData = {
  ...israel_profile,
  "sektor_listrik": israel_listrik,
  "infrastruktur": israel_infrastruktur,
  "sektor_ekstraksi": israel_ekstraksi,
  "sektor_manufaktur": israel_manufaktur,
  "sektor_peternakan": israel_peternakan,
  "sektor_agrikultur": israel_agrikultur,
  "sektor_perikanan": israel_perikanan,
  "sektor_olahan_pangan": israel_olahan_pangan,
  "sektor_farmasi": israel_farmasi,
  "sektor_pertahanan": israel_pertahanan,
  "armada_militer": israel_armada,
  "militer_strategis": israel_strategis,
  "armada_kepolisian": israel_kepolisian,
  "pabrik_militer": israel_pabrik,
    "pendidikan": israel_pendidikan,
  "kesehatan": israel_kesehatan,
  "hukum": israel_hukum,
  "sektor_olahraga": israel_olahraga,
  "un_vote": 199,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 6,
      "kepuasan": 67,
      "pendapatan": 40
    },
    "korporasi": {
      "tarif": 14,
      "kepuasan": 52,
      "pendapatan": 160
    },
    "penghasilan": {
      "tarif": 17,
      "kepuasan": 61,
      "pendapatan": 97
    },
    "bea_cukai": {
      "tarif": 4,
      "kepuasan": 86,
      "pendapatan": 58
    },
    "lingkungan": {
      "tarif": 17,
      "kepuasan": 88,
      "pendapatan": 139
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 26 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 76 },
    "lainnya": {
      "tarif": 37,
      "kepuasan": 93,
      "pendapatan": 383
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 50,
    "gaji_guru": 60,
    "gaji_medis": 70,
    "gaji_militer": 70
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 22400,
    "harga_daging_sapi": 145740,
    "harga_ayam": 32800,
    "harga_minyak_goreng": 12320,
    "harga_gula": 28800,
    "harga_telur": 62200,
    "harga_bbm": 10700,
    "harga_listrik": 800,
    "harga_air": 7280,
    "harga_obat": 126320,
    "harga_pendidikan": 483900
  },
    // =============================================================
  // 15. 🌍 GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": {
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 37,
      "kekuatan_keras": 17,
      "prestise_diplomatik": 57
    },
    "organisasi_internasional": [
      {
        "name": "PBB (UN)",
        "role": "Anggota"
      },
      {
        "name": "WHO",
        "role": "Anggota"
      },
      {
        "name": "WTO",
        "role": "Anggota"
      }
    ]
  },
  // =============================================================
  // 16. 🏛️ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 11,
    "pendidikan": 16,
    "keamanan": 39,
    "keuangan": 31,
    "lingkungan": 60
  }
};
