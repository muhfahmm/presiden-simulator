import { CountryData } from "@/app/database/data/types";
import { uzbekistan_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/asia/99_uzbekistan";
import { uzbekistan_armada } from "../../modules/2_militer/2_armada_militer/asia/99_uzbekistan";
import { uzbekistan_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/asia/99_uzbekistan";
import { uzbekistan_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/asia/99_uzbekistan";
import { uzbekistan_hukum } from "../../modules/3_sosial/3_hukum/asia/99_uzbekistan";
import { uzbekistan_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/asia/99_uzbekistan";
import { uzbekistan_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/asia/99_uzbekistan";
import { uzbekistan_kesehatan } from "../../modules/3_sosial/2_kesehatan/asia/99_uzbekistan";
import { uzbekistan_listrik } from "../../modules/1_ekonomi/2_kelistrikan/asia/99_uzbekistan";
import { uzbekistan_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/asia/99_uzbekistan";
import { uzbekistan_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/asia/99_uzbekistan";
import { uzbekistan_olahraga } from "../../modules/3_sosial/4_olahraga/asia/99_uzbekistan";
import { uzbekistan_pabrik } from "../../modules/2_militer/5_pabrik_militer/asia/99_uzbekistan";
import { uzbekistan_pendidikan } from "../../modules/3_sosial/1_pendidikan/asia/99_uzbekistan";
import { uzbekistan_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/asia/99_uzbekistan";
import { uzbekistan_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/asia/99_uzbekistan";
import { uzbekistan_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/asia/99_uzbekistan";
import { uzbekistan_profile } from "../../modules/0_profiles/asia/99_uzbekistan";
import { uzbekistan_strategis } from "../../modules/2_militer/3_militer_strategis/asia/99_uzbekistan";

export const uzbekistan: CountryData = {
  ...uzbekistan_profile,
  "sektor_listrik": uzbekistan_listrik,
  "infrastruktur": uzbekistan_infrastruktur,
  "sektor_ekstraksi": uzbekistan_ekstraksi,
  "sektor_manufaktur": uzbekistan_manufaktur,
  "sektor_peternakan": uzbekistan_peternakan,
  "sektor_agrikultur": uzbekistan_agrikultur,
  "sektor_perikanan": uzbekistan_perikanan,
  "sektor_olahan_pangan": uzbekistan_olahan_pangan,
  "sektor_farmasi": uzbekistan_farmasi,
  "sektor_pertahanan": uzbekistan_pertahanan,
  "armada_militer": uzbekistan_armada,
  "militer_strategis": uzbekistan_strategis,
  "armada_kepolisian": uzbekistan_kepolisian,
  "pabrik_militer": uzbekistan_pabrik,
    "pendidikan": uzbekistan_pendidikan,
  "kesehatan": uzbekistan_kesehatan,
  "hukum": uzbekistan_hukum,
  "sektor_olahraga": uzbekistan_olahraga,
  "un_vote": 80,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 18,
      "kepuasan": 67,
      "pendapatan": 39
    },
    "korporasi": {
      "tarif": 32,
      "kepuasan": 52,
      "pendapatan": 74
    },
    "penghasilan": {
      "tarif": 26,
      "kepuasan": 61,
      "pendapatan": 46
    },
    "bea_cukai": {
      "tarif": 6,
      "kepuasan": 86,
      "pendapatan": 8
    },
    "lingkungan": {
      "tarif": 19,
      "kepuasan": 88,
      "pendapatan": 20
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 5 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 14 },
    "lainnya": {
      "tarif": 39,
      "kepuasan": 93,
      "pendapatan": 71
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 70,
    "gaji_guru": 60,
    "gaji_medis": 80,
    "gaji_militer": 70
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 50,
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
    "harga_daging_sapi": 208200,
    "harga_ayam": 57400,
    "harga_minyak_goreng": 30800,
    "harga_gula": 14400,
    "harga_telur": 24880,
    "harga_bbm": 5350,
    "harga_listrik": 2240,
    "harga_air": 10400,
    "harga_obat": 157900,
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
      "kekuatan_lunak": 18,
      "kekuatan_keras": 3,
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
    "kesehatan": 34,
    "pendidikan": 8,
    "keamanan": 24,
    "keuangan": 31,
    "lingkungan": 60
  }
};
