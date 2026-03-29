import { CountryData } from "@/app/database/data/types";
import { mauritania_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/afrika/29_mauritania";
import { mauritania_armada } from "../../modules/2_militer/2_armada_militer/afrika/29_mauritania";
import { mauritania_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/afrika/29_mauritania";
import { mauritania_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/afrika/29_mauritania";
import { mauritania_hukum } from "../../modules/3_sosial/3_hukum/afrika/29_mauritania";
import { mauritania_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/afrika/29_mauritania";
import { mauritania_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/afrika/29_mauritania";
import { mauritania_kesehatan } from "../../modules/3_sosial/2_kesehatan/afrika/29_mauritania";
import { mauritania_listrik } from "../../modules/1_ekonomi/2_kelistrikan/afrika/29_mauritania";
import { mauritania_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/afrika/29_mauritania";
import { mauritania_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/afrika/29_mauritania";
import { mauritania_olahraga } from "../../modules/3_sosial/4_olahraga/afrika/29_mauritania";
import { mauritania_pabrik } from "../../modules/2_militer/5_pabrik_militer/afrika/29_mauritania";
import { mauritania_pendidikan } from "../../modules/3_sosial/1_pendidikan/afrika/29_mauritania";
import { mauritania_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/afrika/29_mauritania";
import { mauritania_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/afrika/29_mauritania";
import { mauritania_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/afrika/29_mauritania";
import { mauritania_profile } from "../../modules/0_profiles/afrika/29_mauritania";
import { mauritania_strategis } from "../../modules/2_militer/3_militer_strategis/afrika/29_mauritania";

export const mauritania: CountryData = {
  ...mauritania_profile,
  "sektor_listrik": mauritania_listrik,
  "infrastruktur": mauritania_infrastruktur,
  "sektor_ekstraksi": mauritania_ekstraksi,
  "sektor_manufaktur": mauritania_manufaktur,
  "sektor_peternakan": mauritania_peternakan,
  "sektor_agrikultur": mauritania_agrikultur,
  "sektor_perikanan": mauritania_perikanan,
  "sektor_olahan_pangan": mauritania_olahan_pangan,
  "sektor_farmasi": mauritania_farmasi,
  "sektor_pertahanan": mauritania_pertahanan,
  "armada_militer": mauritania_armada,
  "militer_strategis": mauritania_strategis,
  "armada_kepolisian": mauritania_kepolisian,
  "pabrik_militer": mauritania_pabrik,
    "pendidikan": mauritania_pendidikan,
  "kesehatan": mauritania_kesehatan,
  "hukum": mauritania_hukum,
  "sektor_olahraga": mauritania_olahraga,
  "un_vote": 124,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 6,
      "kepuasan": 67,
      "pendapatan": 0
    },
    "korporasi": {
      "tarif": 7,
      "kepuasan": 52,
      "pendapatan": 1
    },
    "penghasilan": {
      "tarif": 6,
      "kepuasan": 61,
      "pendapatan": 1
    },
    "bea_cukai": {
      "tarif": 1,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 12,
      "kepuasan": 88,
      "pendapatan": 2
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 40,
      "kepuasan": 93,
      "pendapatan": 3
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 30,
    "gaji_guru": 50,
    "gaji_medis": 50,
    "gaji_militer": 50
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 25,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 8000,
    "harga_daging_sapi": 52050,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 12320,
    "harga_gula": 28800,
    "harga_telur": 31100,
    "harga_bbm": 5350,
    "harga_listrik": 1600,
    "harga_air": 7280,
    "harga_obat": 78950,
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
      "kekuatan_lunak": 17,
      "kekuatan_keras": 40,
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
    "kesehatan": 24,
    "pendidikan": 29,
    "keamanan": 29,
    "keuangan": 40,
    "lingkungan": 60
  }
};
