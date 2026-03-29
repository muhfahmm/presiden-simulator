import { CountryData } from "@/app/database/data/types";
import { austria_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/eropa/105_austria";
import { austria_armada } from "../../modules/2_militer/2_armada_militer/eropa/105_austria";
import { austria_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/eropa/105_austria";
import { austria_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/eropa/105_austria";
import { austria_hukum } from "../../modules/3_sosial/3_hukum/eropa/105_austria";
import { austria_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/eropa/105_austria";
import { austria_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/eropa/105_austria";
import { austria_kesehatan } from "../../modules/3_sosial/2_kesehatan/eropa/105_austria";
import { austria_listrik } from "../../modules/1_ekonomi/2_kelistrikan/eropa/105_austria";
import { austria_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/eropa/105_austria";
import { austria_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/eropa/105_austria";
import { austria_olahraga } from "../../modules/3_sosial/4_olahraga/eropa/105_austria";
import { austria_pabrik } from "../../modules/2_militer/5_pabrik_militer/eropa/105_austria";
import { austria_pendidikan } from "../../modules/3_sosial/1_pendidikan/eropa/105_austria";
import { austria_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/eropa/105_austria";
import { austria_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/eropa/105_austria";
import { austria_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/eropa/105_austria";
import { austria_profile } from "../../modules/0_profiles/eropa/105_austria";
import { austria_strategis } from "../../modules/2_militer/3_militer_strategis/eropa/105_austria";

export const austria: CountryData = {
  ...austria_profile,
  "sektor_listrik": austria_listrik,
  "infrastruktur": austria_infrastruktur,
  "sektor_ekstraksi": austria_ekstraksi,
  "sektor_manufaktur": austria_manufaktur,
  "sektor_peternakan": austria_peternakan,
  "sektor_agrikultur": austria_agrikultur,
  "sektor_perikanan": austria_perikanan,
  "sektor_olahan_pangan": austria_olahan_pangan,
  "sektor_farmasi": austria_farmasi,
  "sektor_pertahanan": austria_pertahanan,
  "armada_militer": austria_armada,
  "militer_strategis": austria_strategis,
  "armada_kepolisian": austria_kepolisian,
  "pabrik_militer": austria_pabrik,
    "pendidikan": austria_pendidikan,
  "kesehatan": austria_kesehatan,
  "hukum": austria_hukum,
  "sektor_olahraga": austria_olahraga,
  "un_vote": 192,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 12,
      "kepuasan": 67,
      "pendapatan": 170
    },
    "korporasi": {
      "tarif": 38,
      "kepuasan": 52,
      "pendapatan": 532
    },
    "penghasilan": {
      "tarif": 31,
      "kepuasan": 61,
      "pendapatan": 408
    },
    "bea_cukai": {
      "tarif": 10,
      "kepuasan": 86,
      "pendapatan": 117
    },
    "lingkungan": {
      "tarif": 8,
      "kepuasan": 88,
      "pendapatan": 64
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 25 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 75 },
    "lainnya": {
      "tarif": 30,
      "kepuasan": 93,
      "pendapatan": 219
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
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 104100,
    "harga_ayam": 20500,
    "harga_minyak_goreng": 7700,
    "harga_gula": 20160,
    "harga_telur": 31100,
    "harga_bbm": 14980,
    "harga_listrik": 1600,
    "harga_air": 5200,
    "harga_obat": 315800,
    "harga_pendidikan": 967800
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
      "kekuatan_lunak": 28,
      "kekuatan_keras": 34,
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
    "kesehatan": 18,
    "pendidikan": 12,
    "keamanan": 23,
    "keuangan": 37,
    "lingkungan": 60
  }
};
