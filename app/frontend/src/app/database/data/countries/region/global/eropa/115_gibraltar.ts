import { CountryData } from "@/app/database/data/types";
import { gibraltar_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/eropa/115_gibraltar";
import { gibraltar_armada } from "../../modules/2_militer/2_armada_militer/eropa/115_gibraltar";
import { gibraltar_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/eropa/115_gibraltar";
import { gibraltar_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/eropa/115_gibraltar";
import { gibraltar_hukum } from "../../modules/3_sosial/3_hukum/eropa/115_gibraltar";
import { gibraltar_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/eropa/115_gibraltar";
import { gibraltar_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/eropa/115_gibraltar";
import { gibraltar_kesehatan } from "../../modules/3_sosial/2_kesehatan/eropa/115_gibraltar";
import { gibraltar_listrik } from "../../modules/1_ekonomi/2_kelistrikan/eropa/115_gibraltar";
import { gibraltar_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/eropa/115_gibraltar";
import { gibraltar_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/eropa/115_gibraltar";
import { gibraltar_olahraga } from "../../modules/3_sosial/4_olahraga/eropa/115_gibraltar";
import { gibraltar_pabrik } from "../../modules/2_militer/5_pabrik_militer/eropa/115_gibraltar";
import { gibraltar_pendidikan } from "../../modules/3_sosial/1_pendidikan/eropa/115_gibraltar";
import { gibraltar_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/eropa/115_gibraltar";
import { gibraltar_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/eropa/115_gibraltar";
import { gibraltar_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/eropa/115_gibraltar";
import { gibraltar_profile } from "../../modules/0_profiles/eropa/115_gibraltar";
import { gibraltar_strategis } from "../../modules/2_militer/3_militer_strategis/eropa/115_gibraltar";

export const gibraltar: CountryData = {
  ...gibraltar_profile,
  "sektor_listrik": gibraltar_listrik,
  "infrastruktur": gibraltar_infrastruktur,
  "sektor_ekstraksi": gibraltar_ekstraksi,
  "sektor_manufaktur": gibraltar_manufaktur,
  "sektor_peternakan": gibraltar_peternakan,
  "sektor_agrikultur": gibraltar_agrikultur,
  "sektor_perikanan": gibraltar_perikanan,
  "sektor_olahan_pangan": gibraltar_olahan_pangan,
  "sektor_farmasi": gibraltar_farmasi,
  "sektor_pertahanan": gibraltar_pertahanan,
  "armada_militer": gibraltar_armada,
  "militer_strategis": gibraltar_strategis,
  "armada_kepolisian": gibraltar_kepolisian,
  "pabrik_militer": gibraltar_pabrik,
    "pendidikan": gibraltar_pendidikan,
  "kesehatan": gibraltar_kesehatan,
  "hukum": gibraltar_hukum,
  "sektor_olahraga": gibraltar_olahraga,
  "un_vote": 23,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 20,
      "kepuasan": 67,
      "pendapatan": 2
    },
    "korporasi": {
      "tarif": 35,
      "kepuasan": 52,
      "pendapatan": 6
    },
    "penghasilan": {
      "tarif": 26,
      "kepuasan": 61,
      "pendapatan": 3
    },
    "bea_cukai": {
      "tarif": 23,
      "kepuasan": 86,
      "pendapatan": 4
    },
    "lingkungan": {
      "tarif": 5,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 17,
      "kepuasan": 93,
      "pendapatan": 1
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 100,
    "gaji_guru": 90,
    "gaji_medis": 90,
    "gaji_militer": 90
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 25,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 75
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12800,
    "harga_daging_sapi": 145740,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 7200,
    "harga_telur": 24880,
    "harga_bbm": 14980,
    "harga_listrik": 1280,
    "harga_air": 10400,
    "harga_obat": 78950,
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
      "kekuatan_lunak": 13,
      "kekuatan_keras": 16,
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
    "kesehatan": 36,
    "pendidikan": 18,
    "keamanan": 35,
    "keuangan": 39,
    "lingkungan": 60
  }
};
