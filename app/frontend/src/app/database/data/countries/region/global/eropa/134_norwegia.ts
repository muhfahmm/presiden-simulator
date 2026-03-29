import { CountryData } from "@/app/database/data/types";
import { norwegia_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/eropa/134_norwegia";
import { norwegia_armada } from "../../modules/2_militer/2_armada_militer/eropa/134_norwegia";
import { norwegia_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/eropa/134_norwegia";
import { norwegia_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/eropa/134_norwegia";
import { norwegia_hukum } from "../../modules/3_sosial/3_hukum/eropa/134_norwegia";
import { norwegia_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/eropa/134_norwegia";
import { norwegia_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/eropa/134_norwegia";
import { norwegia_kesehatan } from "../../modules/3_sosial/2_kesehatan/eropa/134_norwegia";
import { norwegia_listrik } from "../../modules/1_ekonomi/2_kelistrikan/eropa/134_norwegia";
import { norwegia_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/eropa/134_norwegia";
import { norwegia_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/eropa/134_norwegia";
import { norwegia_olahraga } from "../../modules/3_sosial/4_olahraga/eropa/134_norwegia";
import { norwegia_pabrik } from "../../modules/2_militer/5_pabrik_militer/eropa/134_norwegia";
import { norwegia_pendidikan } from "../../modules/3_sosial/1_pendidikan/eropa/134_norwegia";
import { norwegia_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/eropa/134_norwegia";
import { norwegia_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/eropa/134_norwegia";
import { norwegia_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/eropa/134_norwegia";
import { norwegia_profile } from "../../modules/0_profiles/eropa/134_norwegia";
import { norwegia_strategis } from "../../modules/2_militer/3_militer_strategis/eropa/134_norwegia";

export const norwegia: CountryData = {
  ...norwegia_profile,
  "sektor_listrik": norwegia_listrik,
  "infrastruktur": norwegia_infrastruktur,
  "sektor_ekstraksi": norwegia_ekstraksi,
  "sektor_manufaktur": norwegia_manufaktur,
  "sektor_peternakan": norwegia_peternakan,
  "sektor_agrikultur": norwegia_agrikultur,
  "sektor_perikanan": norwegia_perikanan,
  "sektor_olahan_pangan": norwegia_olahan_pangan,
  "sektor_farmasi": norwegia_farmasi,
  "sektor_pertahanan": norwegia_pertahanan,
  "armada_militer": norwegia_armada,
  "militer_strategis": norwegia_strategis,
  "armada_kepolisian": norwegia_kepolisian,
  "pabrik_militer": norwegia_pabrik,
    "pendidikan": norwegia_pendidikan,
  "kesehatan": norwegia_kesehatan,
  "hukum": norwegia_hukum,
  "sektor_olahraga": norwegia_olahraga,
  "un_vote": 161,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 15,
      "kepuasan": 67,
      "pendapatan": 187
    },
    "korporasi": {
      "tarif": 19,
      "kepuasan": 52,
      "pendapatan": 146
    },
    "penghasilan": {
      "tarif": 15,
      "kepuasan": 61,
      "pendapatan": 125
    },
    "bea_cukai": {
      "tarif": 19,
      "kepuasan": 86,
      "pendapatan": 158
    },
    "lingkungan": {
      "tarif": 3,
      "kepuasan": 88,
      "pendapatan": 45
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 29 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 85 },
    "lainnya": {
      "tarif": 1,
      "kepuasan": 93,
      "pendapatan": 13
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 90,
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
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 75
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 22400,
    "harga_daging_sapi": 104100,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 20160,
    "harga_telur": 31100,
    "harga_bbm": 14980,
    "harga_listrik": 1600,
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
      "kekuatan_lunak": 10,
      "kekuatan_keras": 31,
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
    "kesehatan": 32,
    "pendidikan": 14,
    "keamanan": 25,
    "keuangan": 21,
    "lingkungan": 60
  }
};
