import { CountryData } from "@/app/database/data/types";
import { estonia_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/eropa/113_estonia";
import { estonia_armada } from "../../modules/2_militer/2_armada_militer/eropa/113_estonia";
import { estonia_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/eropa/113_estonia";
import { estonia_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/eropa/113_estonia";
import { estonia_hukum } from "../../modules/3_sosial/3_hukum/eropa/113_estonia";
import { estonia_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/eropa/113_estonia";
import { estonia_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/eropa/113_estonia";
import { estonia_kesehatan } from "../../modules/3_sosial/2_kesehatan/eropa/113_estonia";
import { estonia_listrik } from "../../modules/1_ekonomi/2_kelistrikan/eropa/113_estonia";
import { estonia_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/eropa/113_estonia";
import { estonia_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/eropa/113_estonia";
import { estonia_olahraga } from "../../modules/3_sosial/4_olahraga/eropa/113_estonia";
import { estonia_pabrik } from "../../modules/2_militer/5_pabrik_militer/eropa/113_estonia";
import { estonia_pendidikan } from "../../modules/3_sosial/1_pendidikan/eropa/113_estonia";
import { estonia_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/eropa/113_estonia";
import { estonia_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/eropa/113_estonia";
import { estonia_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/eropa/113_estonia";
import { estonia_profile } from "../../modules/0_profiles/eropa/113_estonia";
import { estonia_strategis } from "../../modules/2_militer/3_militer_strategis/eropa/113_estonia";

export const estonia: CountryData = {
  ...estonia_profile,
  "sektor_listrik": estonia_listrik,
  "infrastruktur": estonia_infrastruktur,
  "sektor_ekstraksi": estonia_ekstraksi,
  "sektor_manufaktur": estonia_manufaktur,
  "sektor_peternakan": estonia_peternakan,
  "sektor_agrikultur": estonia_agrikultur,
  "sektor_perikanan": estonia_perikanan,
  "sektor_olahan_pangan": estonia_olahan_pangan,
  "sektor_farmasi": estonia_farmasi,
  "sektor_pertahanan": estonia_pertahanan,
  "armada_militer": estonia_armada,
  "militer_strategis": estonia_strategis,
  "armada_kepolisian": estonia_kepolisian,
  "pabrik_militer": estonia_pabrik,
    "pendidikan": estonia_pendidikan,
  "kesehatan": estonia_kesehatan,
  "hukum": estonia_hukum,
  "sektor_olahraga": estonia_olahraga,
  "un_vote": 168,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 15,
      "kepuasan": 67,
      "pendapatan": 16
    },
    "korporasi": {
      "tarif": 40,
      "kepuasan": 52,
      "pendapatan": 23
    },
    "penghasilan": {
      "tarif": 1,
      "kepuasan": 61,
      "pendapatan": 0
    },
    "bea_cukai": {
      "tarif": 10,
      "kepuasan": 86,
      "pendapatan": 10
    },
    "lingkungan": {
      "tarif": 31,
      "kepuasan": 88,
      "pendapatan": 31
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 2 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 6 },
    "lainnya": {
      "tarif": 22,
      "kepuasan": 93,
      "pendapatan": 19
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 90,
    "gaji_guru": 90,
    "gaji_medis": 100,
    "gaji_militer": 80
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 75
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 8000,
    "harga_daging_sapi": 208200,
    "harga_ayam": 32800,
    "harga_minyak_goreng": 30800,
    "harga_gula": 7200,
    "harga_telur": 62200,
    "harga_bbm": 8560,
    "harga_listrik": 1600,
    "harga_air": 10400,
    "harga_obat": 157900,
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
      "kekuatan_lunak": 38,
      "kekuatan_keras": 21,
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
    "kesehatan": 2,
    "pendidikan": 23,
    "keamanan": 14,
    "keuangan": 12,
    "lingkungan": 60
  }
};
