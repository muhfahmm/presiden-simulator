import { CountryData } from "@/app/database/data/types";
import { bahama_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/na/154_bahama";
import { bahama_armada } from "../../modules/2_militer/2_armada_militer/na/154_bahama";
import { bahama_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/na/154_bahama";
import { bahama_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/na/154_bahama";
import { bahama_hukum } from "../../modules/3_sosial/3_hukum/na/154_bahama";
import { bahama_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/na/154_bahama";
import { bahama_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/na/154_bahama";
import { bahama_kesehatan } from "../../modules/3_sosial/2_kesehatan/na/154_bahama";
import { bahama_listrik } from "../../modules/1_ekonomi/2_kelistrikan/na/154_bahama";
import { bahama_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/na/154_bahama";
import { bahama_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/na/154_bahama";
import { bahama_olahraga } from "../../modules/3_sosial/4_olahraga/na/154_bahama";
import { bahama_pabrik } from "../../modules/2_militer/5_pabrik_militer/na/154_bahama";
import { bahama_pendidikan } from "../../modules/3_sosial/1_pendidikan/na/154_bahama";
import { bahama_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/na/154_bahama";
import { bahama_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/na/154_bahama";
import { bahama_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/na/154_bahama";
import { bahama_profile } from "../../modules/0_profiles/na/154_bahama";
import { bahama_strategis } from "../../modules/2_militer/3_militer_strategis/na/154_bahama";

export const bahama: CountryData = {
  ...bahama_profile,
  "sektor_listrik": bahama_listrik,
  "infrastruktur": bahama_infrastruktur,
  "sektor_ekstraksi": bahama_ekstraksi,
  "sektor_manufaktur": bahama_manufaktur,
  "sektor_peternakan": bahama_peternakan,
  "sektor_agrikultur": bahama_agrikultur,
  "sektor_perikanan": bahama_perikanan,
  "sektor_olahan_pangan": bahama_olahan_pangan,
  "sektor_farmasi": bahama_farmasi,
  "sektor_pertahanan": bahama_pertahanan,
  "armada_militer": bahama_armada,
  "militer_strategis": bahama_strategis,
  "armada_kepolisian": bahama_kepolisian,
  "pabrik_militer": bahama_pabrik,
    "pendidikan": bahama_pendidikan,
  "kesehatan": bahama_kesehatan,
  "hukum": bahama_hukum,
  "sektor_olahraga": bahama_olahraga,
  "un_vote": 170,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 39,
      "kepuasan": 67,
      "pendapatan": 5
    },
    "korporasi": {
      "tarif": 28,
      "kepuasan": 52,
      "pendapatan": 3
    },
    "penghasilan": {
      "tarif": 39,
      "kepuasan": 61,
      "pendapatan": 11
    },
    "bea_cukai": {
      "tarif": 32,
      "kepuasan": 86,
      "pendapatan": 8
    },
    "lingkungan": {
      "tarif": 38,
      "kepuasan": 88,
      "pendapatan": 14
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 3 },
    "lainnya": {
      "tarif": 32,
      "kepuasan": 93,
      "pendapatan": 11
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 90,
    "gaji_guru": 90,
    "gaji_medis": 90,
    "gaji_militer": 90
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 100,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 32000,
    "harga_daging_sapi": 104100,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 11520,
    "harga_telur": 31100,
    "harga_bbm": 14980,
    "harga_listrik": 800,
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
      "kekuatan_lunak": 37,
      "kekuatan_keras": 36,
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
    "kesehatan": 19,
    "pendidikan": 22,
    "keamanan": 8,
    "keuangan": 13,
    "lingkungan": 60
  }
};
