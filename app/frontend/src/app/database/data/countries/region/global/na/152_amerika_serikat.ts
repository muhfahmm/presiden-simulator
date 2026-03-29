import { CountryData } from "@/app/database/data/types";
import { amerika_serikat_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/na/152_amerika_serikat";
import { amerika_serikat_armada } from "../../modules/2_militer/2_armada_militer/na/152_amerika_serikat";
import { amerika_serikat_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/na/152_amerika_serikat";
import { amerika_serikat_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/na/152_amerika_serikat";
import { amerika_serikat_hukum } from "../../modules/3_sosial/3_hukum/na/152_amerika_serikat";
import { amerika_serikat_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/na/152_amerika_serikat";
import { amerika_serikat_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/na/152_amerika_serikat";
import { amerika_serikat_kesehatan } from "../../modules/3_sosial/2_kesehatan/na/152_amerika_serikat";
import { amerika_serikat_listrik } from "../../modules/1_ekonomi/2_kelistrikan/na/152_amerika_serikat";
import { amerika_serikat_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/na/152_amerika_serikat";
import { amerika_serikat_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/na/152_amerika_serikat";
import { amerika_serikat_olahraga } from "../../modules/3_sosial/4_olahraga/na/152_amerika_serikat";
import { amerika_serikat_pabrik } from "../../modules/2_militer/5_pabrik_militer/na/152_amerika_serikat";
import { amerika_serikat_pendidikan } from "../../modules/3_sosial/1_pendidikan/na/152_amerika_serikat";
import { amerika_serikat_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/na/152_amerika_serikat";
import { amerika_serikat_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/na/152_amerika_serikat";
import { amerika_serikat_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/na/152_amerika_serikat";
import { amerika_serikat_profile } from "../../modules/0_profiles/na/152_amerika_serikat";
import { amerika_serikat_strategis } from "../../modules/2_militer/3_militer_strategis/na/152_amerika_serikat";

export const amerika_serikat: CountryData = {
  ...amerika_serikat_profile,
  "sektor_listrik": amerika_serikat_listrik,
  "infrastruktur": amerika_serikat_infrastruktur,
  "sektor_ekstraksi": amerika_serikat_ekstraksi,
  "sektor_manufaktur": amerika_serikat_manufaktur,
  "sektor_peternakan": amerika_serikat_peternakan,
  "sektor_agrikultur": amerika_serikat_agrikultur,
  "sektor_perikanan": amerika_serikat_perikanan,
  "sektor_olahan_pangan": amerika_serikat_olahan_pangan,
  "sektor_farmasi": amerika_serikat_farmasi,
  "sektor_pertahanan": amerika_serikat_pertahanan,
  "armada_militer": amerika_serikat_armada,
  "militer_strategis": amerika_serikat_strategis,
  "armada_kepolisian": amerika_serikat_kepolisian,
  "pabrik_militer": amerika_serikat_pabrik,
    "pendidikan": amerika_serikat_pendidikan,
  "kesehatan": amerika_serikat_kesehatan,
  "hukum": amerika_serikat_hukum,
  "sektor_olahraga": amerika_serikat_olahraga,
  "un_vote": 203,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 35,
      "kepuasan": 67,
      "pendapatan": 28175
    },
    "korporasi": {
      "tarif": 28,
      "kepuasan": 52,
      "pendapatan": 19391
    },
    "penghasilan": {
      "tarif": 21,
      "kepuasan": 61,
      "pendapatan": 5914
    },
    "bea_cukai": {
      "tarif": 4,
      "kepuasan": 86,
      "pendapatan": 2690
    },
    "lingkungan": {
      "tarif": 18,
      "kepuasan": 88,
      "pendapatan": 7054
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1401 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 4201 },
    "lainnya": {
      "tarif": 13,
      "kepuasan": 93,
      "pendapatan": 4046
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
    "subsidi_energi": 25,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 100,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 75
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 32000,
    "harga_daging_sapi": 52050,
    "harga_ayam": 57400,
    "harga_minyak_goreng": 15400,
    "harga_gula": 11520,
    "harga_telur": 31100,
    "harga_bbm": 5350,
    "harga_listrik": 800,
    "harga_air": 5200,
    "harga_obat": 157900,
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
      "kekuatan_lunak": 25,
      "kekuatan_keras": 15,
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
    "kesehatan": 6,
    "pendidikan": 13,
    "keamanan": 35,
    "keuangan": 32,
    "lingkungan": 60
  }
};
