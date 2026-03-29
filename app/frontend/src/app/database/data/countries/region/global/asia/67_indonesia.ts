import { CountryData } from "@/app/database/data/types";
import { indonesia_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/asia/67_indonesia";
import { indonesia_armada } from "../../modules/2_militer/2_armada_militer/asia/67_indonesia";
import { indonesia_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/asia/67_indonesia";
import { indonesia_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/asia/67_indonesia";
import { indonesia_hukum } from "../../modules/3_sosial/3_hukum/asia/67_indonesia";
import { indonesia_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/asia/67_indonesia";
import { indonesia_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/asia/67_indonesia";
import { indonesia_kesehatan } from "../../modules/3_sosial/2_kesehatan/asia/67_indonesia";
import { indonesia_listrik } from "../../modules/1_ekonomi/2_kelistrikan/asia/67_indonesia";
import { indonesia_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/asia/67_indonesia";
import { indonesia_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/asia/67_indonesia";
import { indonesia_olahraga } from "../../modules/3_sosial/4_olahraga/asia/67_indonesia";
import { indonesia_pabrik } from "../../modules/2_militer/5_pabrik_militer/asia/67_indonesia";
import { indonesia_pendidikan } from "../../modules/3_sosial/1_pendidikan/asia/67_indonesia";
import { indonesia_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/asia/67_indonesia";
import { indonesia_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/asia/67_indonesia";
import { indonesia_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/asia/67_indonesia";
import { indonesia_profile } from "../../modules/0_profiles/asia/67_indonesia";
import { indonesia_strategis } from "../../modules/2_militer/3_militer_strategis/asia/67_indonesia";

export const indonesia: CountryData = {
  ...indonesia_profile,
  "sektor_listrik": indonesia_listrik,
  "infrastruktur": indonesia_infrastruktur,
  "sektor_ekstraksi": indonesia_ekstraksi,
  "sektor_manufaktur": indonesia_manufaktur,
  "sektor_peternakan": indonesia_peternakan,
  "sektor_agrikultur": indonesia_agrikultur,
  "sektor_perikanan": indonesia_perikanan,
  "sektor_olahan_pangan": indonesia_olahan_pangan,
  "sektor_farmasi": indonesia_farmasi,
  "sektor_pertahanan": indonesia_pertahanan,
  "armada_militer": indonesia_armada,
  "militer_strategis": indonesia_strategis,
  "armada_kepolisian": indonesia_kepolisian,
  "pabrik_militer": indonesia_pabrik,
    "pendidikan": indonesia_pendidikan,
  "kesehatan": indonesia_kesehatan,
  "hukum": indonesia_hukum,
  "sektor_olahraga": indonesia_olahraga,
  
  "un_vote": 128,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 27,
      "kepuasan": 67,
      "pendapatan": 532
    },
    "korporasi": {
      "tarif": 15,
      "kepuasan": 52,
      "pendapatan": 220
    },
    "penghasilan": {
      "tarif": 34,
      "kepuasan": 61,
      "pendapatan": 1159
    },
    "bea_cukai": {
      "tarif": 40,
      "kepuasan": 86,
      "pendapatan": 1343
    },
    "lingkungan": {
      "tarif": 29,
      "kepuasan": 88,
      "pendapatan": 1060
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 70 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 208 },
    "lainnya": {
      "tarif": 19,
      "kepuasan": 93,
      "pendapatan": 724
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 70,
    "gaji_guru": 60,
    "gaji_medis": 80,
    "gaji_militer": 80
  },
  "subsidi": {
    "subsidi_energi": 75,
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
    "harga_beras": 22400,
    "harga_daging_sapi": 104100,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 20160,
    "harga_telur": 62200,
    "harga_bbm": 10700,
    "harga_listrik": 1600,
    "harga_air": 2600,
    "harga_obat": 157900,
    "harga_pendidikan": 483900
  },
  // =============================================================
  // 15. 🌍 GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": {
    "reputasi_diplomatik": "Unggul",
    "aliansi_aktif": ["Amerika Serikat", "Jepang", "Australia", "India"],
    "pengaruh_global": 78.2,
    "peringkat_diplomasi": 12,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 8,
      "kekuatan_keras": 7,
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
    "kesehatan": 37,
    "pendidikan": 19,
    "keamanan": 9,
    "keuangan": 2,
    "lingkungan": 60
  }
};
