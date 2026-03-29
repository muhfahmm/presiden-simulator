import { CountryData } from "@/app/database/data/types";
import { kosovo_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/eropa/123_kosovo";
import { kosovo_armada } from "../../modules/2_militer/2_armada_militer/eropa/123_kosovo";
import { kosovo_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/eropa/123_kosovo";
import { kosovo_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/eropa/123_kosovo";
import { kosovo_hukum } from "../../modules/3_sosial/3_hukum/eropa/123_kosovo";
import { kosovo_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/eropa/123_kosovo";
import { kosovo_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/eropa/123_kosovo";
import { kosovo_kesehatan } from "../../modules/3_sosial/2_kesehatan/eropa/123_kosovo";
import { kosovo_listrik } from "../../modules/1_ekonomi/2_kelistrikan/eropa/123_kosovo";
import { kosovo_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/eropa/123_kosovo";
import { kosovo_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/eropa/123_kosovo";
import { kosovo_olahraga } from "../../modules/3_sosial/4_olahraga/eropa/123_kosovo";
import { kosovo_pabrik } from "../../modules/2_militer/5_pabrik_militer/eropa/123_kosovo";
import { kosovo_pendidikan } from "../../modules/3_sosial/1_pendidikan/eropa/123_kosovo";
import { kosovo_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/eropa/123_kosovo";
import { kosovo_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/eropa/123_kosovo";
import { kosovo_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/eropa/123_kosovo";
import { kosovo_profile } from "../../modules/0_profiles/eropa/123_kosovo";
import { kosovo_strategis } from "../../modules/2_militer/3_militer_strategis/eropa/123_kosovo";

export const kosovo: CountryData = {
  ...kosovo_profile,
  "sektor_listrik": kosovo_listrik,
  "infrastruktur": kosovo_infrastruktur,
  "sektor_ekstraksi": kosovo_ekstraksi,
  "sektor_manufaktur": kosovo_manufaktur,
  "sektor_peternakan": kosovo_peternakan,
  "sektor_agrikultur": kosovo_agrikultur,
  "sektor_perikanan": kosovo_perikanan,
  "sektor_olahan_pangan": kosovo_olahan_pangan,
  "sektor_farmasi": kosovo_farmasi,
  "sektor_pertahanan": kosovo_pertahanan,
  "armada_militer": kosovo_armada,
  "militer_strategis": kosovo_strategis,
  "armada_kepolisian": kosovo_kepolisian,
  "pabrik_militer": kosovo_pabrik,
    "pendidikan": kosovo_pendidikan,
  "kesehatan": kosovo_kesehatan,
  "hukum": kosovo_hukum,
  "sektor_olahraga": kosovo_olahraga,
  "un_vote": 7,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 30,
      "kepuasan": 67,
      "pendapatan": 3
    },
    "korporasi": {
      "tarif": 37,
      "kepuasan": 52,
      "pendapatan": 9
    },
    "penghasilan": {
      "tarif": 32,
      "kepuasan": 61,
      "pendapatan": 8
    },
    "bea_cukai": {
      "tarif": 31,
      "kepuasan": 86,
      "pendapatan": 8
    },
    "lingkungan": {
      "tarif": 8,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 2,
      "kepuasan": 93,
      "pendapatan": 0
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
    "subsidi_pangan": 25,
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
    "harga_daging_sapi": 52050,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 12320,
    "harga_gula": 28800,
    "harga_telur": 31100,
    "harga_bbm": 8560,
    "harga_listrik": 2240,
    "harga_air": 10400,
    "harga_obat": 315800,
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
      "kekuatan_lunak": 17,
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
    "kesehatan": 39,
    "pendidikan": 9,
    "keamanan": 33,
    "keuangan": 9,
    "lingkungan": 60
  }
};
