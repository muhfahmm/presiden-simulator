import { CountryData } from "@/app/database/data/types";
import { rwanda_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/afrika/44_rwanda";
import { rwanda_armada } from "../../modules/2_militer/2_armada_militer/afrika/44_rwanda";
import { rwanda_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/afrika/44_rwanda";
import { rwanda_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/afrika/44_rwanda";
import { rwanda_hukum } from "../../modules/3_sosial/3_hukum/afrika/44_rwanda";
import { rwanda_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/afrika/44_rwanda";
import { rwanda_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/afrika/44_rwanda";
import { rwanda_kesehatan } from "../../modules/3_sosial/2_kesehatan/afrika/44_rwanda";
import { rwanda_listrik } from "../../modules/1_ekonomi/2_kelistrikan/afrika/44_rwanda";
import { rwanda_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/afrika/44_rwanda";
import { rwanda_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/afrika/44_rwanda";
import { rwanda_olahraga } from "../../modules/3_sosial/4_olahraga/afrika/44_rwanda";
import { rwanda_pabrik } from "../../modules/2_militer/5_pabrik_militer/afrika/44_rwanda";
import { rwanda_pendidikan } from "../../modules/3_sosial/1_pendidikan/afrika/44_rwanda";
import { rwanda_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/afrika/44_rwanda";
import { rwanda_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/afrika/44_rwanda";
import { rwanda_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/afrika/44_rwanda";
import { rwanda_profile } from "../../modules/0_profiles/afrika/44_rwanda";
import { rwanda_strategis } from "../../modules/2_militer/3_militer_strategis/afrika/44_rwanda";

export const rwanda: CountryData = {
  ...rwanda_profile,
  "sektor_listrik": rwanda_listrik,
  "infrastruktur": rwanda_infrastruktur,
  "sektor_ekstraksi": rwanda_ekstraksi,
  "sektor_manufaktur": rwanda_manufaktur,
  "sektor_peternakan": rwanda_peternakan,
  "sektor_agrikultur": rwanda_agrikultur,
  "sektor_perikanan": rwanda_perikanan,
  "sektor_olahan_pangan": rwanda_olahan_pangan,
  "sektor_farmasi": rwanda_farmasi,
  "sektor_pertahanan": rwanda_pertahanan,
  "armada_militer": rwanda_armada,
  "militer_strategis": rwanda_strategis,
  "armada_kepolisian": rwanda_kepolisian,
  "pabrik_militer": rwanda_pabrik,
    "pendidikan": rwanda_pendidikan,
  "kesehatan": rwanda_kesehatan,
  "hukum": rwanda_hukum,
  "sektor_olahraga": rwanda_olahraga,
  "un_vote": 50,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 31,
      "kepuasan": 67,
      "pendapatan": 8
    },
    "korporasi": {
      "tarif": 2,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 10,
      "kepuasan": 61,
      "pendapatan": 2
    },
    "bea_cukai": {
      "tarif": 1,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 11,
      "kepuasan": 88,
      "pendapatan": 4
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 33,
      "kepuasan": 93,
      "pendapatan": 7
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 40,
    "gaji_guru": 50,
    "gaji_medis": 50,
    "gaji_militer": 60
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 25,
    "subsidi_umkm": 25,
    "subsidi_transportasi": 25,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 208200,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 43540,
    "harga_bbm": 8560,
    "harga_listrik": 1600,
    "harga_air": 5200,
    "harga_obat": 78950,
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
      "kekuatan_lunak": 12,
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
    "kesehatan": 5,
    "pendidikan": 19,
    "keamanan": 24,
    "keuangan": 34,
    "lingkungan": 60
  }
};
