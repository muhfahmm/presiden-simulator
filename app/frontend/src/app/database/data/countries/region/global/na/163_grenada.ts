import { CountryData } from "@/app/database/data/types";
import { grenada_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/na/163_grenada";
import { grenada_armada } from "../../modules/2_militer/2_armada_militer/na/163_grenada";
import { grenada_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/na/163_grenada";
import { grenada_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/na/163_grenada";
import { grenada_hukum } from "../../modules/3_sosial/3_hukum/na/163_grenada";
import { grenada_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/na/163_grenada";
import { grenada_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/na/163_grenada";
import { grenada_kesehatan } from "../../modules/3_sosial/2_kesehatan/na/163_grenada";
import { grenada_listrik } from "../../modules/1_ekonomi/2_kelistrikan/na/163_grenada";
import { grenada_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/na/163_grenada";
import { grenada_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/na/163_grenada";
import { grenada_olahraga } from "../../modules/3_sosial/4_olahraga/na/163_grenada";
import { grenada_pabrik } from "../../modules/2_militer/5_pabrik_militer/na/163_grenada";
import { grenada_pendidikan } from "../../modules/3_sosial/1_pendidikan/na/163_grenada";
import { grenada_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/na/163_grenada";
import { grenada_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/na/163_grenada";
import { grenada_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/na/163_grenada";
import { grenada_profile } from "../../modules/0_profiles/na/163_grenada";
import { grenada_strategis } from "../../modules/2_militer/3_militer_strategis/na/163_grenada";

export const grenada: CountryData = {
  ...grenada_profile,
  "sektor_listrik": grenada_listrik,
  "infrastruktur": grenada_infrastruktur,
  "sektor_ekstraksi": grenada_ekstraksi,
  "sektor_manufaktur": grenada_manufaktur,
  "sektor_peternakan": grenada_peternakan,
  "sektor_agrikultur": grenada_agrikultur,
  "sektor_perikanan": grenada_perikanan,
  "sektor_olahan_pangan": grenada_olahan_pangan,
  "sektor_farmasi": grenada_farmasi,
  "sektor_pertahanan": grenada_pertahanan,
  "armada_militer": grenada_armada,
  "militer_strategis": grenada_strategis,
  "armada_kepolisian": grenada_kepolisian,
  "pabrik_militer": grenada_pabrik,
    "pendidikan": grenada_pendidikan,
  "kesehatan": grenada_kesehatan,
  "hukum": grenada_hukum,
  "sektor_olahraga": grenada_olahraga,
  "un_vote": 63,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 6,
      "kepuasan": 67,
      "pendapatan": 1
    },
    "korporasi": {
      "tarif": 22,
      "kepuasan": 52,
      "pendapatan": 5
    },
    "penghasilan": {
      "tarif": 36,
      "kepuasan": 61,
      "pendapatan": 10
    },
    "bea_cukai": {
      "tarif": 12,
      "kepuasan": 86,
      "pendapatan": 1
    },
    "lingkungan": {
      "tarif": 18,
      "kepuasan": 88,
      "pendapatan": 3
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 33,
      "kepuasan": 93,
      "pendapatan": 3
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
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 83280,
    "harga_ayam": 82000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 20160,
    "harga_telur": 43540,
    "harga_bbm": 10700,
    "harga_listrik": 1600,
    "harga_air": 4160,
    "harga_obat": 315800,
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
      "kekuatan_lunak": 23,
      "kekuatan_keras": 18,
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
    "kesehatan": 8,
    "pendidikan": 35,
    "keamanan": 12,
    "keuangan": 9,
    "lingkungan": 60
  }
};
