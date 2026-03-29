import { CountryData } from "@/app/database/data/types";
import { marshall_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/oceania/183_marshall";
import { marshall_armada } from "../../modules/2_militer/2_armada_militer/oceania/183_marshall";
import { marshall_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/oceania/183_marshall";
import { marshall_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/oceania/183_marshall";
import { marshall_hukum } from "../../modules/3_sosial/3_hukum/oceania/183_marshall";
import { marshall_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/oceania/183_marshall";
import { marshall_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/oceania/183_marshall";
import { marshall_kesehatan } from "../../modules/3_sosial/2_kesehatan/oceania/183_marshall";
import { marshall_listrik } from "../../modules/1_ekonomi/2_kelistrikan/oceania/183_marshall";
import { marshall_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/oceania/183_marshall";
import { marshall_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/oceania/183_marshall";
import { marshall_olahraga } from "../../modules/3_sosial/4_olahraga/oceania/183_marshall";
import { marshall_pabrik } from "../../modules/2_militer/5_pabrik_militer/oceania/183_marshall";
import { marshall_pendidikan } from "../../modules/3_sosial/1_pendidikan/oceania/183_marshall";
import { marshall_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/oceania/183_marshall";
import { marshall_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/oceania/183_marshall";
import { marshall_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/oceania/183_marshall";
import { marshall_profile } from "../../modules/0_profiles/oceania/183_marshall";
import { marshall_strategis } from "../../modules/2_militer/3_militer_strategis/oceania/183_marshall";

export const marshall: CountryData = {
  ...marshall_profile,
  "sektor_listrik": marshall_listrik,
  "infrastruktur": marshall_infrastruktur,
  "sektor_ekstraksi": marshall_ekstraksi,
  "sektor_manufaktur": marshall_manufaktur,
  "sektor_peternakan": marshall_peternakan,
  "sektor_agrikultur": marshall_agrikultur,
  "sektor_perikanan": marshall_perikanan,
  "sektor_olahan_pangan": marshall_olahan_pangan,
  "sektor_farmasi": marshall_farmasi,
  "sektor_pertahanan": marshall_pertahanan,
  "armada_militer": marshall_armada,
  "militer_strategis": marshall_strategis,
  "armada_kepolisian": marshall_kepolisian,
  "pabrik_militer": marshall_pabrik,
    "pendidikan": marshall_pendidikan,
  "kesehatan": marshall_kesehatan,
  "hukum": marshall_hukum,
  "sektor_olahraga": marshall_olahraga,
  "un_vote": 4,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 27,
      "kepuasan": 67,
      "pendapatan": 0
    },
    "korporasi": {
      "tarif": 24,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 34,
      "kepuasan": 61,
      "pendapatan": 0
    },
    "bea_cukai": {
      "tarif": 5,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 3,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 30,
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
    "gaji_medis": 80,
    "gaji_militer": 80
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 83280,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 7700,
    "harga_gula": 28800,
    "harga_telur": 62200,
    "harga_bbm": 14980,
    "harga_listrik": 1600,
    "harga_air": 2600,
    "harga_obat": 157900,
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
      "kekuatan_lunak": 22,
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
    "kesehatan": 22,
    "pendidikan": 30,
    "keamanan": 30,
    "keuangan": 18,
    "lingkungan": 60
  }
};
