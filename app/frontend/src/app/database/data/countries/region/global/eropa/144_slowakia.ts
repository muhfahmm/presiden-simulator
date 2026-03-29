import { CountryData } from "@/app/database/data/types";
import { slowakia_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/eropa/144_slowakia";
import { slowakia_armada } from "../../modules/2_militer/2_armada_militer/eropa/144_slowakia";
import { slowakia_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/eropa/144_slowakia";
import { slowakia_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/eropa/144_slowakia";
import { slowakia_hukum } from "../../modules/3_sosial/3_hukum/eropa/144_slowakia";
import { slowakia_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/eropa/144_slowakia";
import { slowakia_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/eropa/144_slowakia";
import { slowakia_kesehatan } from "../../modules/3_sosial/2_kesehatan/eropa/144_slowakia";
import { slowakia_listrik } from "../../modules/1_ekonomi/2_kelistrikan/eropa/144_slowakia";
import { slowakia_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/eropa/144_slowakia";
import { slowakia_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/eropa/144_slowakia";
import { slowakia_olahraga } from "../../modules/3_sosial/4_olahraga/eropa/144_slowakia";
import { slowakia_pabrik } from "../../modules/2_militer/5_pabrik_militer/eropa/144_slowakia";
import { slowakia_pendidikan } from "../../modules/3_sosial/1_pendidikan/eropa/144_slowakia";
import { slowakia_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/eropa/144_slowakia";
import { slowakia_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/eropa/144_slowakia";
import { slowakia_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/eropa/144_slowakia";
import { slowakia_profile } from "../../modules/0_profiles/eropa/144_slowakia";
import { slowakia_strategis } from "../../modules/2_militer/3_militer_strategis/eropa/144_slowakia";

export const slowakia: CountryData = {
  ...slowakia_profile,
  "sektor_listrik": slowakia_listrik,
  "infrastruktur": slowakia_infrastruktur,
  "sektor_ekstraksi": slowakia_ekstraksi,
  "sektor_manufaktur": slowakia_manufaktur,
  "sektor_peternakan": slowakia_peternakan,
  "sektor_agrikultur": slowakia_agrikultur,
  "sektor_perikanan": slowakia_perikanan,
  "sektor_olahan_pangan": slowakia_olahan_pangan,
  "sektor_farmasi": slowakia_farmasi,
  "sektor_pertahanan": slowakia_pertahanan,
  "armada_militer": slowakia_armada,
  "militer_strategis": slowakia_strategis,
  "armada_kepolisian": slowakia_kepolisian,
  "pabrik_militer": slowakia_pabrik,
    "pendidikan": slowakia_pendidikan,
  "kesehatan": slowakia_kesehatan,
  "hukum": slowakia_hukum,
  "sektor_olahraga": slowakia_olahraga,
  "un_vote": 176,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 13,
      "kepuasan": 67,
      "pendapatan": 25
    },
    "korporasi": {
      "tarif": 13,
      "kepuasan": 52,
      "pendapatan": 39
    },
    "penghasilan": {
      "tarif": 38,
      "kepuasan": 61,
      "pendapatan": 89
    },
    "bea_cukai": {
      "tarif": 27,
      "kepuasan": 86,
      "pendapatan": 56
    },
    "lingkungan": {
      "tarif": 1,
      "kepuasan": 88,
      "pendapatan": 3
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 7 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 19 },
    "lainnya": {
      "tarif": 32,
      "kepuasan": 93,
      "pendapatan": 94
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 100,
    "gaji_guru": 90,
    "gaji_medis": 90,
    "gaji_militer": 80
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
    "harga_beras": 12800,
    "harga_daging_sapi": 145740,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 12320,
    "harga_gula": 20160,
    "harga_telur": 43540,
    "harga_bbm": 14980,
    "harga_listrik": 2240,
    "harga_air": 5200,
    "harga_obat": 126320,
    "harga_pendidikan": 387120
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
      "kekuatan_lunak": 13,
      "kekuatan_keras": 38,
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
    "kesehatan": 22,
    "pendidikan": 30,
    "keamanan": 14,
    "keuangan": 28,
    "lingkungan": 60
  }
};
