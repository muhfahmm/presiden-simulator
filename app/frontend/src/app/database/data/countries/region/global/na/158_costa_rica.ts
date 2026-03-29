import { CountryData } from "@/app/database/data/types";
import { costa_rica_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/na/158_costa_rica";
import { costa_rica_armada } from "../../modules/2_militer/2_armada_militer/na/158_costa_rica";
import { costa_rica_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/na/158_costa_rica";
import { costa_rica_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/na/158_costa_rica";
import { costa_rica_hukum } from "../../modules/3_sosial/3_hukum/na/158_costa_rica";
import { costa_rica_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/na/158_costa_rica";
import { costa_rica_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/na/158_costa_rica";
import { costa_rica_kesehatan } from "../../modules/3_sosial/2_kesehatan/na/158_costa_rica";
import { costa_rica_listrik } from "../../modules/1_ekonomi/2_kelistrikan/na/158_costa_rica";
import { costa_rica_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/na/158_costa_rica";
import { costa_rica_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/na/158_costa_rica";
import { costa_rica_olahraga } from "../../modules/3_sosial/4_olahraga/na/158_costa_rica";
import { costa_rica_pabrik } from "../../modules/2_militer/5_pabrik_militer/na/158_costa_rica";
import { costa_rica_pendidikan } from "../../modules/3_sosial/1_pendidikan/na/158_costa_rica";
import { costa_rica_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/na/158_costa_rica";
import { costa_rica_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/na/158_costa_rica";
import { costa_rica_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/na/158_costa_rica";
import { costa_rica_profile } from "../../modules/0_profiles/na/158_costa_rica";
import { costa_rica_strategis } from "../../modules/2_militer/3_militer_strategis/na/158_costa_rica";

export const costa_rica: CountryData = {
  ...costa_rica_profile,
  "sektor_listrik": costa_rica_listrik,
  "infrastruktur": costa_rica_infrastruktur,
  "sektor_ekstraksi": costa_rica_ekstraksi,
  "sektor_manufaktur": costa_rica_manufaktur,
  "sektor_peternakan": costa_rica_peternakan,
  "sektor_agrikultur": costa_rica_agrikultur,
  "sektor_perikanan": costa_rica_perikanan,
  "sektor_olahan_pangan": costa_rica_olahan_pangan,
  "sektor_farmasi": costa_rica_farmasi,
  "sektor_pertahanan": costa_rica_pertahanan,
  "armada_militer": costa_rica_armada,
  "militer_strategis": costa_rica_strategis,
  "armada_kepolisian": costa_rica_kepolisian,
  "pabrik_militer": costa_rica_pabrik,
    "pendidikan": costa_rica_pendidikan,
  "kesehatan": costa_rica_kesehatan,
  "hukum": costa_rica_hukum,
  "sektor_olahraga": costa_rica_olahraga,
  "un_vote": 72,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 40,
      "kepuasan": 67,
      "pendapatan": 69
    },
    "korporasi": {
      "tarif": 34,
      "kepuasan": 52,
      "pendapatan": 41
    },
    "penghasilan": {
      "tarif": 15,
      "kepuasan": 61,
      "pendapatan": 13
    },
    "bea_cukai": {
      "tarif": 31,
      "kepuasan": 86,
      "pendapatan": 44
    },
    "lingkungan": {
      "tarif": 17,
      "kepuasan": 88,
      "pendapatan": 34
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 4 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 11 },
    "lainnya": {
      "tarif": 38,
      "kepuasan": 93,
      "pendapatan": 75
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
    "subsidi_energi": 25,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 100,
    "subsidi_pendidikan": 100,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 208200,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 12320,
    "harga_gula": 11520,
    "harga_telur": 31100,
    "harga_bbm": 10700,
    "harga_listrik": 1600,
    "harga_air": 5200,
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
      "kekuatan_lunak": 4,
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
    "kesehatan": 11,
    "pendidikan": 8,
    "keamanan": 10,
    "keuangan": 36,
    "lingkungan": 60
  }
};
