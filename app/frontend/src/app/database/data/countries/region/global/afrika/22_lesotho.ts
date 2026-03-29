import { CountryData } from "@/app/database/data/types";
import { lesotho_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/afrika/22_lesotho";
import { lesotho_armada } from "../../modules/2_militer/2_armada_militer/afrika/22_lesotho";
import { lesotho_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/afrika/22_lesotho";
import { lesotho_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/afrika/22_lesotho";
import { lesotho_hukum } from "../../modules/3_sosial/3_hukum/afrika/22_lesotho";
import { lesotho_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/afrika/22_lesotho";
import { lesotho_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/afrika/22_lesotho";
import { lesotho_kesehatan } from "../../modules/3_sosial/2_kesehatan/afrika/22_lesotho";
import { lesotho_listrik } from "../../modules/1_ekonomi/2_kelistrikan/afrika/22_lesotho";
import { lesotho_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/afrika/22_lesotho";
import { lesotho_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/afrika/22_lesotho";
import { lesotho_olahraga } from "../../modules/3_sosial/4_olahraga/afrika/22_lesotho";
import { lesotho_pabrik } from "../../modules/2_militer/5_pabrik_militer/afrika/22_lesotho";
import { lesotho_pendidikan } from "../../modules/3_sosial/1_pendidikan/afrika/22_lesotho";
import { lesotho_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/afrika/22_lesotho";
import { lesotho_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/afrika/22_lesotho";
import { lesotho_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/afrika/22_lesotho";
import { lesotho_profile } from "../../modules/0_profiles/afrika/22_lesotho";
import { lesotho_strategis } from "../../modules/2_militer/3_militer_strategis/afrika/22_lesotho";

export const lesotho: CountryData = {
  ...lesotho_profile,
  "sektor_listrik": lesotho_listrik,
  "infrastruktur": lesotho_infrastruktur,
  "sektor_ekstraksi": lesotho_ekstraksi,
  "sektor_manufaktur": lesotho_manufaktur,
  "sektor_peternakan": lesotho_peternakan,
  "sektor_agrikultur": lesotho_agrikultur,
  "sektor_perikanan": lesotho_perikanan,
  "sektor_olahan_pangan": lesotho_olahan_pangan,
  "sektor_farmasi": lesotho_farmasi,
  "sektor_pertahanan": lesotho_pertahanan,
  "armada_militer": lesotho_armada,
  "militer_strategis": lesotho_strategis,
  "armada_kepolisian": lesotho_kepolisian,
  "pabrik_militer": lesotho_pabrik,
    "pendidikan": lesotho_pendidikan,
  "kesehatan": lesotho_kesehatan,
  "hukum": lesotho_hukum,
  "sektor_olahraga": lesotho_olahraga,
  "un_vote": 115,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 16,
      "kepuasan": 67,
      "pendapatan": 0
    },
    "korporasi": {
      "tarif": 10,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 40,
      "kepuasan": 61,
      "pendapatan": 2
    },
    "bea_cukai": {
      "tarif": 17,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 38,
      "kepuasan": 88,
      "pendapatan": 2
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 22,
      "kepuasan": 93,
      "pendapatan": 1
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 40,
    "gaji_guru": 40,
    "gaji_medis": 50,
    "gaji_militer": 60
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 25,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 25,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 104100,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 21560,
    "harga_gula": 28800,
    "harga_telur": 31100,
    "harga_bbm": 10700,
    "harga_listrik": 2240,
    "harga_air": 7280,
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
      "kekuatan_lunak": 36,
      "kekuatan_keras": 23,
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
    "kesehatan": 29,
    "pendidikan": 9,
    "keamanan": 11,
    "keuangan": 33,
    "lingkungan": 60
  }
};
