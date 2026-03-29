import { CountryData } from "@/app/database/data/types";
import { albania_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/eropa/103_albania";
import { albania_armada } from "../../modules/2_militer/2_armada_militer/eropa/103_albania";
import { albania_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/eropa/103_albania";
import { albania_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/eropa/103_albania";
import { albania_hukum } from "../../modules/3_sosial/3_hukum/eropa/103_albania";
import { albania_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/eropa/103_albania";
import { albania_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/eropa/103_albania";
import { albania_kesehatan } from "../../modules/3_sosial/2_kesehatan/eropa/103_albania";
import { albania_listrik } from "../../modules/1_ekonomi/2_kelistrikan/eropa/103_albania";
import { albania_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/eropa/103_albania";
import { albania_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/eropa/103_albania";
import { albania_olahraga } from "../../modules/3_sosial/4_olahraga/eropa/103_albania";
import { albania_pabrik } from "../../modules/2_militer/5_pabrik_militer/eropa/103_albania";
import { albania_pendidikan } from "../../modules/3_sosial/1_pendidikan/eropa/103_albania";
import { albania_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/eropa/103_albania";
import { albania_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/eropa/103_albania";
import { albania_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/eropa/103_albania";
import { albania_profile } from "../../modules/0_profiles/eropa/103_albania";
import { albania_strategis } from "../../modules/2_militer/3_militer_strategis/eropa/103_albania";

export const albania: CountryData = {
  ...albania_profile,
  "sektor_listrik": albania_listrik,
  "infrastruktur": albania_infrastruktur,
  "sektor_ekstraksi": albania_ekstraksi,
  "sektor_manufaktur": albania_manufaktur,
  "sektor_peternakan": albania_peternakan,
  "sektor_agrikultur": albania_agrikultur,
  "sektor_perikanan": albania_perikanan,
  "sektor_olahan_pangan": albania_olahan_pangan,
  "sektor_farmasi": albania_farmasi,
  "sektor_pertahanan": albania_pertahanan,
  "armada_militer": albania_armada,
  "militer_strategis": albania_strategis,
  "armada_kepolisian": albania_kepolisian,
  "pabrik_militer": albania_pabrik,
    "pendidikan": albania_pendidikan,
  "kesehatan": albania_kesehatan,
  "hukum": albania_hukum,
  "sektor_olahraga": albania_olahraga,
  "un_vote": 77,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 24,
      "kepuasan": 67,
      "pendapatan": 8
    },
    "korporasi": {
      "tarif": 38,
      "kepuasan": 52,
      "pendapatan": 19
    },
    "penghasilan": {
      "tarif": 37,
      "kepuasan": 61,
      "pendapatan": 15
    },
    "bea_cukai": {
      "tarif": 1,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 18,
      "kepuasan": 88,
      "pendapatan": 6
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 2 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 4 },
    "lainnya": {
      "tarif": 25,
      "kepuasan": 93,
      "pendapatan": 7
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
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 145740,
    "harga_ayam": 32800,
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 24880,
    "harga_bbm": 14980,
    "harga_listrik": 1600,
    "harga_air": 4160,
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
      "kekuatan_lunak": 25,
      "kekuatan_keras": 9,
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
    "kesehatan": 1,
    "pendidikan": 4,
    "keamanan": 2,
    "keuangan": 33,
    "lingkungan": 60
  }
};
