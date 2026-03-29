import { CountryData } from "@/app/database/data/types";
import { kamboja_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/asia/72_kamboja";
import { kamboja_armada } from "../../modules/2_militer/2_armada_militer/asia/72_kamboja";
import { kamboja_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/asia/72_kamboja";
import { kamboja_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/asia/72_kamboja";
import { kamboja_hukum } from "../../modules/3_sosial/3_hukum/asia/72_kamboja";
import { kamboja_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/asia/72_kamboja";
import { kamboja_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/asia/72_kamboja";
import { kamboja_kesehatan } from "../../modules/3_sosial/2_kesehatan/asia/72_kamboja";
import { kamboja_listrik } from "../../modules/1_ekonomi/2_kelistrikan/asia/72_kamboja";
import { kamboja_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/asia/72_kamboja";
import { kamboja_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/asia/72_kamboja";
import { kamboja_olahraga } from "../../modules/3_sosial/4_olahraga/asia/72_kamboja";
import { kamboja_pabrik } from "../../modules/2_militer/5_pabrik_militer/asia/72_kamboja";
import { kamboja_pendidikan } from "../../modules/3_sosial/1_pendidikan/asia/72_kamboja";
import { kamboja_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/asia/72_kamboja";
import { kamboja_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/asia/72_kamboja";
import { kamboja_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/asia/72_kamboja";
import { kamboja_profile } from "../../modules/0_profiles/asia/72_kamboja";
import { kamboja_strategis } from "../../modules/2_militer/3_militer_strategis/asia/72_kamboja";

export const kamboja: CountryData = {
  ...kamboja_profile,
  "sektor_listrik": kamboja_listrik,
  "infrastruktur": kamboja_infrastruktur,
  "sektor_ekstraksi": kamboja_ekstraksi,
  "sektor_manufaktur": kamboja_manufaktur,
  "sektor_peternakan": kamboja_peternakan,
  "sektor_agrikultur": kamboja_agrikultur,
  "sektor_perikanan": kamboja_perikanan,
  "sektor_olahan_pangan": kamboja_olahan_pangan,
  "sektor_farmasi": kamboja_farmasi,
  "sektor_pertahanan": kamboja_pertahanan,
  "armada_militer": kamboja_armada,
  "militer_strategis": kamboja_strategis,
  "armada_kepolisian": kamboja_kepolisian,
  "pabrik_militer": kamboja_pabrik,
    "pendidikan": kamboja_pendidikan,
  "kesehatan": kamboja_kesehatan,
  "hukum": kamboja_hukum,
  "sektor_olahraga": kamboja_olahraga,
  "un_vote": 166,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 40,
      "kepuasan": 67,
      "pendapatan": 17
    },
    "korporasi": {
      "tarif": 25,
      "kepuasan": 52,
      "pendapatan": 18
    },
    "penghasilan": {
      "tarif": 22,
      "kepuasan": 61,
      "pendapatan": 10
    },
    "bea_cukai": {
      "tarif": 19,
      "kepuasan": 86,
      "pendapatan": 13
    },
    "lingkungan": {
      "tarif": 30,
      "kepuasan": 88,
      "pendapatan": 12
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 2 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 5 },
    "lainnya": {
      "tarif": 36,
      "kepuasan": 93,
      "pendapatan": 18
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 70,
    "gaji_guru": 70,
    "gaji_medis": 70,
    "gaji_militer": 80
  },
  "subsidi": {
    "subsidi_energi": 75,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 32000,
    "harga_daging_sapi": 208200,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 12320,
    "harga_gula": 14400,
    "harga_telur": 43540,
    "harga_bbm": 21400,
    "harga_listrik": 1600,
    "harga_air": 5200,
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
      "kekuatan_lunak": 28,
      "kekuatan_keras": 29,
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
    "kesehatan": 35,
    "pendidikan": 16,
    "keamanan": 14,
    "keuangan": 39,
    "lingkungan": 60
  }
};
