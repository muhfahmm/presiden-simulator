import { CountryData } from "@/app/database/data/types";
import { thailand_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/asia/96_thailand";
import { thailand_armada } from "../../modules/2_militer/2_armada_militer/asia/96_thailand";
import { thailand_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/asia/96_thailand";
import { thailand_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/asia/96_thailand";
import { thailand_hukum } from "../../modules/3_sosial/3_hukum/asia/96_thailand";
import { thailand_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/asia/96_thailand";
import { thailand_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/asia/96_thailand";
import { thailand_kesehatan } from "../../modules/3_sosial/2_kesehatan/asia/96_thailand";
import { thailand_listrik } from "../../modules/1_ekonomi/2_kelistrikan/asia/96_thailand";
import { thailand_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/asia/96_thailand";
import { thailand_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/asia/96_thailand";
import { thailand_olahraga } from "../../modules/3_sosial/4_olahraga/asia/96_thailand";
import { thailand_pabrik } from "../../modules/2_militer/5_pabrik_militer/asia/96_thailand";
import { thailand_pendidikan } from "../../modules/3_sosial/1_pendidikan/asia/96_thailand";
import { thailand_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/asia/96_thailand";
import { thailand_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/asia/96_thailand";
import { thailand_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/asia/96_thailand";
import { thailand_profile } from "../../modules/0_profiles/asia/96_thailand";
import { thailand_strategis } from "../../modules/2_militer/3_militer_strategis/asia/96_thailand";

export const thailand: CountryData = {
  ...thailand_profile,
  "sektor_listrik": thailand_listrik,
  "infrastruktur": thailand_infrastruktur,
  "sektor_ekstraksi": thailand_ekstraksi,
  "sektor_manufaktur": thailand_manufaktur,
  "sektor_peternakan": thailand_peternakan,
  "sektor_agrikultur": thailand_agrikultur,
  "sektor_perikanan": thailand_perikanan,
  "sektor_olahan_pangan": thailand_olahan_pangan,
  "sektor_farmasi": thailand_farmasi,
  "sektor_pertahanan": thailand_pertahanan,
  "armada_militer": thailand_armada,
  "militer_strategis": thailand_strategis,
  "armada_kepolisian": thailand_kepolisian,
  "pabrik_militer": thailand_pabrik,
    "pendidikan": thailand_pendidikan,
  "kesehatan": thailand_kesehatan,
  "hukum": thailand_hukum,
  "sektor_olahraga": thailand_olahraga,
  "un_vote": 154,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 25,
      "kepuasan": 67,
      "pendapatan": 307
    },
    "korporasi": {
      "tarif": 39,
      "kepuasan": 52,
      "pendapatan": 520
    },
    "penghasilan": {
      "tarif": 26,
      "kepuasan": 61,
      "pendapatan": 152
    },
    "bea_cukai": {
      "tarif": 40,
      "kepuasan": 86,
      "pendapatan": 451
    },
    "lingkungan": {
      "tarif": 8,
      "kepuasan": 88,
      "pendapatan": 43
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 25 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 75 },
    "lainnya": {
      "tarif": 22,
      "kepuasan": 93,
      "pendapatan": 135
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 70,
    "gaji_guru": 70,
    "gaji_medis": 60,
    "gaji_militer": 70
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12800,
    "harga_daging_sapi": 104100,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 15550,
    "harga_bbm": 8560,
    "harga_listrik": 3200,
    "harga_air": 10400,
    "harga_obat": 126320,
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
      "kekuatan_lunak": 29,
      "kekuatan_keras": 2,
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
    "pendidikan": 20,
    "keamanan": 9,
    "keuangan": 24,
    "lingkungan": 60
  }
};
