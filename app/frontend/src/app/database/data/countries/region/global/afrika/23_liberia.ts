import { CountryData } from "@/app/database/data/types";
import { liberia_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/afrika/23_liberia";
import { liberia_armada } from "../../modules/2_militer/2_armada_militer/afrika/23_liberia";
import { liberia_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/afrika/23_liberia";
import { liberia_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/afrika/23_liberia";
import { liberia_hukum } from "../../modules/3_sosial/3_hukum/afrika/23_liberia";
import { liberia_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/afrika/23_liberia";
import { liberia_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/afrika/23_liberia";
import { liberia_kesehatan } from "../../modules/3_sosial/2_kesehatan/afrika/23_liberia";
import { liberia_listrik } from "../../modules/1_ekonomi/2_kelistrikan/afrika/23_liberia";
import { liberia_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/afrika/23_liberia";
import { liberia_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/afrika/23_liberia";
import { liberia_olahraga } from "../../modules/3_sosial/4_olahraga/afrika/23_liberia";
import { liberia_pabrik } from "../../modules/2_militer/5_pabrik_militer/afrika/23_liberia";
import { liberia_pendidikan } from "../../modules/3_sosial/1_pendidikan/afrika/23_liberia";
import { liberia_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/afrika/23_liberia";
import { liberia_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/afrika/23_liberia";
import { liberia_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/afrika/23_liberia";
import { liberia_profile } from "../../modules/0_profiles/afrika/23_liberia";
import { liberia_strategis } from "../../modules/2_militer/3_militer_strategis/afrika/23_liberia";

export const liberia: CountryData = {
  ...liberia_profile,
  "sektor_listrik": liberia_listrik,
  "infrastruktur": liberia_infrastruktur,
  "sektor_ekstraksi": liberia_ekstraksi,
  "sektor_manufaktur": liberia_manufaktur,
  "sektor_peternakan": liberia_peternakan,
  "sektor_agrikultur": liberia_agrikultur,
  "sektor_perikanan": liberia_perikanan,
  "sektor_olahan_pangan": liberia_olahan_pangan,
  "sektor_farmasi": liberia_farmasi,
  "sektor_pertahanan": liberia_pertahanan,
  "armada_militer": liberia_armada,
  "militer_strategis": liberia_strategis,
  "armada_kepolisian": liberia_kepolisian,
  "pabrik_militer": liberia_pabrik,
    "pendidikan": liberia_pendidikan,
  "kesehatan": liberia_kesehatan,
  "hukum": liberia_hukum,
  "sektor_olahraga": liberia_olahraga,
  "un_vote": 93,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 37,
      "kepuasan": 67,
      "pendapatan": 4
    },
    "korporasi": {
      "tarif": 24,
      "kepuasan": 52,
      "pendapatan": 2
    },
    "penghasilan": {
      "tarif": 39,
      "kepuasan": 61,
      "pendapatan": 2
    },
    "bea_cukai": {
      "tarif": 17,
      "kepuasan": 86,
      "pendapatan": 1
    },
    "lingkungan": {
      "tarif": 2,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 39,
      "kepuasan": 93,
      "pendapatan": 4
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 30,
    "gaji_guru": 40,
    "gaji_medis": 50,
    "gaji_militer": 40
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 22400,
    "harga_daging_sapi": 104100,
    "harga_ayam": 82000,
    "harga_minyak_goreng": 7700,
    "harga_gula": 20160,
    "harga_telur": 62200,
    "harga_bbm": 14980,
    "harga_listrik": 2240,
    "harga_air": 5200,
    "harga_obat": 78950,
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
      "kekuatan_lunak": 39,
      "kekuatan_keras": 8,
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
    "kesehatan": 7,
    "pendidikan": 21,
    "keamanan": 36,
    "keuangan": 3,
    "lingkungan": 60
  }
};
