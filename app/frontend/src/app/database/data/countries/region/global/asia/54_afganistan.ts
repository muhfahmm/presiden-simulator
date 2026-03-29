import { CountryData } from "@/app/database/data/types";
import { afganistan_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/asia/54_afganistan";
import { afganistan_armada } from "../../modules/2_militer/2_armada_militer/asia/54_afganistan";
import { afganistan_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/asia/54_afganistan";
import { afganistan_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/asia/54_afganistan";
import { afganistan_hukum } from "../../modules/3_sosial/3_hukum/asia/54_afganistan";
import { afganistan_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/asia/54_afganistan";
import { afganistan_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/asia/54_afganistan";
import { afganistan_kesehatan } from "../../modules/3_sosial/2_kesehatan/asia/54_afganistan";
import { afganistan_listrik } from "../../modules/1_ekonomi/2_kelistrikan/asia/54_afganistan";
import { afganistan_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/asia/54_afganistan";
import { afganistan_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/asia/54_afganistan";
import { afganistan_olahraga } from "../../modules/3_sosial/4_olahraga/asia/54_afganistan";
import { afganistan_pabrik } from "../../modules/2_militer/5_pabrik_militer/asia/54_afganistan";
import { afganistan_pendidikan } from "../../modules/3_sosial/1_pendidikan/asia/54_afganistan";
import { afganistan_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/asia/54_afganistan";
import { afganistan_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/asia/54_afganistan";
import { afganistan_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/asia/54_afganistan";
import { afganistan_profile } from "../../modules/0_profiles/asia/54_afganistan";
import { afganistan_strategis } from "../../modules/2_militer/3_militer_strategis/asia/54_afganistan";

export const afganistan: CountryData = {
  ...afganistan_profile,
  "sektor_listrik": afganistan_listrik,
  "infrastruktur": afganistan_infrastruktur,
  "sektor_ekstraksi": afganistan_ekstraksi,
  "sektor_manufaktur": afganistan_manufaktur,
  "sektor_peternakan": afganistan_peternakan,
  "sektor_agrikultur": afganistan_agrikultur,
  "sektor_perikanan": afganistan_perikanan,
  "sektor_olahan_pangan": afganistan_olahan_pangan,
  "sektor_farmasi": afganistan_farmasi,
  "sektor_pertahanan": afganistan_pertahanan,
  "armada_militer": afganistan_armada,
  "militer_strategis": afganistan_strategis,
  "armada_kepolisian": afganistan_kepolisian,
  "pabrik_militer": afganistan_pabrik,
    "pendidikan": afganistan_pendidikan,
  "kesehatan": afganistan_kesehatan,
  "hukum": afganistan_hukum,
  "sektor_olahraga": afganistan_olahraga,
  "un_vote": 126,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 15,
      "kepuasan": 67,
      "pendapatan": 2
    },
    "korporasi": {
      "tarif": 10,
      "kepuasan": 52,
      "pendapatan": 2
    },
    "penghasilan": {
      "tarif": 1,
      "kepuasan": 61,
      "pendapatan": 0
    },
    "bea_cukai": {
      "tarif": 37,
      "kepuasan": 86,
      "pendapatan": 12
    },
    "lingkungan": {
      "tarif": 12,
      "kepuasan": 88,
      "pendapatan": 4
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 3 },
    "lainnya": {
      "tarif": 38,
      "kepuasan": 93,
      "pendapatan": 11
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 70,
    "gaji_guru": 60,
    "gaji_medis": 60,
    "gaji_militer": 60
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12800,
    "harga_daging_sapi": 104100,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 11520,
    "harga_telur": 24880,
    "harga_bbm": 5350,
    "harga_listrik": 1280,
    "harga_air": 5200,
    "harga_obat": 157900,
    "harga_pendidikan": 677460
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
      "kekuatan_lunak": 25,
      "kekuatan_keras": 22,
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
    "kesehatan": 33,
    "pendidikan": 28,
    "keamanan": 19,
    "keuangan": 39,
    "lingkungan": 60
  }
};
