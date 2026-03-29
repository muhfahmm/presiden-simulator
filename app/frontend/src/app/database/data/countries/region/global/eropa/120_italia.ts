import { CountryData } from "@/app/database/data/types";
import { italia_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/eropa/120_italia";
import { italia_armada } from "../../modules/2_militer/2_armada_militer/eropa/120_italia";
import { italia_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/eropa/120_italia";
import { italia_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/eropa/120_italia";
import { italia_hukum } from "../../modules/3_sosial/3_hukum/eropa/120_italia";
import { italia_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/eropa/120_italia";
import { italia_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/eropa/120_italia";
import { italia_kesehatan } from "../../modules/3_sosial/2_kesehatan/eropa/120_italia";
import { italia_listrik } from "../../modules/1_ekonomi/2_kelistrikan/eropa/120_italia";
import { italia_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/eropa/120_italia";
import { italia_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/eropa/120_italia";
import { italia_olahraga } from "../../modules/3_sosial/4_olahraga/eropa/120_italia";
import { italia_pabrik } from "../../modules/2_militer/5_pabrik_militer/eropa/120_italia";
import { italia_pendidikan } from "../../modules/3_sosial/1_pendidikan/eropa/120_italia";
import { italia_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/eropa/120_italia";
import { italia_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/eropa/120_italia";
import { italia_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/eropa/120_italia";
import { italia_profile } from "../../modules/0_profiles/eropa/120_italia";
import { italia_strategis } from "../../modules/2_militer/3_militer_strategis/eropa/120_italia";

export const italia: CountryData = {
  ...italia_profile,
  "sektor_listrik": italia_listrik,
  "infrastruktur": italia_infrastruktur,
  "sektor_ekstraksi": italia_ekstraksi,
  "sektor_manufaktur": italia_manufaktur,
  "sektor_peternakan": italia_peternakan,
  "sektor_agrikultur": italia_agrikultur,
  "sektor_perikanan": italia_perikanan,
  "sektor_olahan_pangan": italia_olahan_pangan,
  "sektor_farmasi": italia_farmasi,
  "sektor_pertahanan": italia_pertahanan,
  "armada_militer": italia_armada,
  "militer_strategis": italia_strategis,
  "armada_kepolisian": italia_kepolisian,
  "pabrik_militer": italia_pabrik,
    "pendidikan": italia_pendidikan,
  "kesehatan": italia_kesehatan,
  "hukum": italia_hukum,
  "sektor_olahraga": italia_olahraga,
  "un_vote": 146,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 24,
      "kepuasan": 67,
      "pendapatan": 1599
    },
    "korporasi": {
      "tarif": 40,
      "kepuasan": 52,
      "pendapatan": 1766
    },
    "penghasilan": {
      "tarif": 40,
      "kepuasan": 61,
      "pendapatan": 2288
    },
    "bea_cukai": {
      "tarif": 28,
      "kepuasan": 86,
      "pendapatan": 1840
    },
    "lingkungan": {
      "tarif": 27,
      "kepuasan": 88,
      "pendapatan": 1486
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 114 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 340 },
    "lainnya": {
      "tarif": 20,
      "kepuasan": 93,
      "pendapatan": 469
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
    "subsidi_energi": 50,
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
    "harga_beras": 32000,
    "harga_daging_sapi": 83280,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 28800,
    "harga_telur": 24880,
    "harga_bbm": 21400,
    "harga_listrik": 800,
    "harga_air": 5200,
    "harga_obat": 221060,
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
      "kekuatan_lunak": 5,
      "kekuatan_keras": 22,
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
    "kesehatan": 36,
    "pendidikan": 28,
    "keamanan": 40,
    "keuangan": 18,
    "lingkungan": 60
  }
};
