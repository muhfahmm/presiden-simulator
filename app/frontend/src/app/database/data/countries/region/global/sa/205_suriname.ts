import { CountryData } from "@/app/database/data/types";
import { suriname_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/sa/205_suriname";
import { suriname_armada } from "../../modules/2_militer/2_armada_militer/sa/205_suriname";
import { suriname_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/sa/205_suriname";
import { suriname_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/sa/205_suriname";
import { suriname_hukum } from "../../modules/3_sosial/3_hukum/sa/205_suriname";
import { suriname_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/sa/205_suriname";
import { suriname_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/sa/205_suriname";
import { suriname_kesehatan } from "../../modules/3_sosial/2_kesehatan/sa/205_suriname";
import { suriname_listrik } from "../../modules/1_ekonomi/2_kelistrikan/sa/205_suriname";
import { suriname_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/sa/205_suriname";
import { suriname_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/sa/205_suriname";
import { suriname_olahraga } from "../../modules/3_sosial/4_olahraga/sa/205_suriname";
import { suriname_pabrik } from "../../modules/2_militer/5_pabrik_militer/sa/205_suriname";
import { suriname_pendidikan } from "../../modules/3_sosial/1_pendidikan/sa/205_suriname";
import { suriname_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/sa/205_suriname";
import { suriname_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/sa/205_suriname";
import { suriname_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/sa/205_suriname";
import { suriname_profile } from "../../modules/0_profiles/sa/205_suriname";
import { suriname_strategis } from "../../modules/2_militer/3_militer_strategis/sa/205_suriname";

export const suriname: CountryData = {
  ...suriname_profile,
  "sektor_listrik": suriname_listrik,
  "infrastruktur": suriname_infrastruktur,
  "sektor_ekstraksi": suriname_ekstraksi,
  "sektor_manufaktur": suriname_manufaktur,
  "sektor_peternakan": suriname_peternakan,
  "sektor_agrikultur": suriname_agrikultur,
  "sektor_perikanan": suriname_perikanan,
  "sektor_olahan_pangan": suriname_olahan_pangan,
  "sektor_farmasi": suriname_farmasi,
  "sektor_pertahanan": suriname_pertahanan,
  "armada_militer": suriname_armada,
  "militer_strategis": suriname_strategis,
  "armada_kepolisian": suriname_kepolisian,
  "pabrik_militer": suriname_pabrik,
    "pendidikan": suriname_pendidikan,
  "kesehatan": suriname_kesehatan,
  "hukum": suriname_hukum,
  "sektor_olahraga": suriname_olahraga,
  "un_vote": 3,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 33,
      "kepuasan": 67,
      "pendapatan": 1
    },
    "korporasi": {
      "tarif": 40,
      "kepuasan": 52,
      "pendapatan": 3
    },
    "penghasilan": {
      "tarif": 3,
      "kepuasan": 61,
      "pendapatan": 0
    },
    "bea_cukai": {
      "tarif": 10,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 38,
      "kepuasan": 88,
      "pendapatan": 1
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
    "gaji_asn": 60,
    "gaji_guru": 60,
    "gaji_medis": 70,
    "gaji_militer": 60
  },
  "subsidi": {
    "subsidi_energi": 75,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 50,
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
    "harga_ayam": 20500,
    "harga_minyak_goreng": 30800,
    "harga_gula": 14400,
    "harga_telur": 24880,
    "harga_bbm": 10700,
    "harga_listrik": 1280,
    "harga_air": 7280,
    "harga_obat": 126320,
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
      "kekuatan_lunak": 1,
      "kekuatan_keras": 4,
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
    "kesehatan": 4,
    "pendidikan": 21,
    "keamanan": 23,
    "keuangan": 27,
    "lingkungan": 60
  }
};
