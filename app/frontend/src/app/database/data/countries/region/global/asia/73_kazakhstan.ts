import { CountryData } from "@/app/database/data/types";
import { kazakhstan_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/asia/73_kazakhstan";
import { kazakhstan_armada } from "../../modules/2_militer/2_armada_militer/asia/73_kazakhstan";
import { kazakhstan_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/asia/73_kazakhstan";
import { kazakhstan_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/asia/73_kazakhstan";
import { kazakhstan_hukum } from "../../modules/3_sosial/3_hukum/asia/73_kazakhstan";
import { kazakhstan_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/asia/73_kazakhstan";
import { kazakhstan_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/asia/73_kazakhstan";
import { kazakhstan_kesehatan } from "../../modules/3_sosial/2_kesehatan/asia/73_kazakhstan";
import { kazakhstan_listrik } from "../../modules/1_ekonomi/2_kelistrikan/asia/73_kazakhstan";
import { kazakhstan_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/asia/73_kazakhstan";
import { kazakhstan_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/asia/73_kazakhstan";
import { kazakhstan_olahraga } from "../../modules/3_sosial/4_olahraga/asia/73_kazakhstan";
import { kazakhstan_pabrik } from "../../modules/2_militer/5_pabrik_militer/asia/73_kazakhstan";
import { kazakhstan_pendidikan } from "../../modules/3_sosial/1_pendidikan/asia/73_kazakhstan";
import { kazakhstan_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/asia/73_kazakhstan";
import { kazakhstan_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/asia/73_kazakhstan";
import { kazakhstan_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/asia/73_kazakhstan";
import { kazakhstan_profile } from "../../modules/0_profiles/asia/73_kazakhstan";
import { kazakhstan_strategis } from "../../modules/2_militer/3_militer_strategis/asia/73_kazakhstan";

export const kazakhstan: CountryData = {
  ...kazakhstan_profile,
  "sektor_listrik": kazakhstan_listrik,
  "infrastruktur": kazakhstan_infrastruktur,
  "sektor_ekstraksi": kazakhstan_ekstraksi,
  "sektor_manufaktur": kazakhstan_manufaktur,
  "sektor_peternakan": kazakhstan_peternakan,
  "sektor_agrikultur": kazakhstan_agrikultur,
  "sektor_perikanan": kazakhstan_perikanan,
  "sektor_olahan_pangan": kazakhstan_olahan_pangan,
  "sektor_farmasi": kazakhstan_farmasi,
  "sektor_pertahanan": kazakhstan_pertahanan,
  "armada_militer": kazakhstan_armada,
  "militer_strategis": kazakhstan_strategis,
  "armada_kepolisian": kazakhstan_kepolisian,
  "pabrik_militer": kazakhstan_pabrik,
    "pendidikan": kazakhstan_pendidikan,
  "kesehatan": kazakhstan_kesehatan,
  "hukum": kazakhstan_hukum,
  "sektor_olahraga": kazakhstan_olahraga,
  "un_vote": 187,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 32,
      "kepuasan": 67,
      "pendapatan": 133
    },
    "korporasi": {
      "tarif": 18,
      "kepuasan": 52,
      "pendapatan": 102
    },
    "penghasilan": {
      "tarif": 13,
      "kepuasan": 61,
      "pendapatan": 90
    },
    "bea_cukai": {
      "tarif": 22,
      "kepuasan": 86,
      "pendapatan": 100
    },
    "lingkungan": {
      "tarif": 13,
      "kepuasan": 88,
      "pendapatan": 65
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 13 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 38 },
    "lainnya": {
      "tarif": 17,
      "kepuasan": 93,
      "pendapatan": 46
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 70,
    "gaji_guru": 60,
    "gaji_medis": 70,
    "gaji_militer": 70
  },
  "subsidi": {
    "subsidi_energi": 75,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 208200,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 7700,
    "harga_gula": 28800,
    "harga_telur": 24880,
    "harga_bbm": 10700,
    "harga_listrik": 2240,
    "harga_air": 5200,
    "harga_obat": 126320,
    "harga_pendidikan": 241950
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
      "kekuatan_lunak": 38,
      "kekuatan_keras": 20,
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
    "kesehatan": 20,
    "pendidikan": 26,
    "keamanan": 11,
    "keuangan": 32,
    "lingkungan": 60
  }
};
