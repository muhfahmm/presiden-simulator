import { CountryData } from "@/app/database/data/types";
import { belgia_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/eropa/108_belgia";
import { belgia_armada } from "../../modules/2_militer/2_armada_militer/eropa/108_belgia";
import { belgia_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/eropa/108_belgia";
import { belgia_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/eropa/108_belgia";
import { belgia_hukum } from "../../modules/3_sosial/3_hukum/eropa/108_belgia";
import { belgia_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/eropa/108_belgia";
import { belgia_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/eropa/108_belgia";
import { belgia_kesehatan } from "../../modules/3_sosial/2_kesehatan/eropa/108_belgia";
import { belgia_listrik } from "../../modules/1_ekonomi/2_kelistrikan/eropa/108_belgia";
import { belgia_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/eropa/108_belgia";
import { belgia_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/eropa/108_belgia";
import { belgia_olahraga } from "../../modules/3_sosial/4_olahraga/eropa/108_belgia";
import { belgia_pabrik } from "../../modules/2_militer/5_pabrik_militer/eropa/108_belgia";
import { belgia_pendidikan } from "../../modules/3_sosial/1_pendidikan/eropa/108_belgia";
import { belgia_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/eropa/108_belgia";
import { belgia_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/eropa/108_belgia";
import { belgia_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/eropa/108_belgia";
import { belgia_profile } from "../../modules/0_profiles/eropa/108_belgia";
import { belgia_strategis } from "../../modules/2_militer/3_militer_strategis/eropa/108_belgia";

export const belgia: CountryData = {
  ...belgia_profile,
  "sektor_listrik": belgia_listrik,
  "infrastruktur": belgia_infrastruktur,
  "sektor_ekstraksi": belgia_ekstraksi,
  "sektor_manufaktur": belgia_manufaktur,
  "sektor_peternakan": belgia_peternakan,
  "sektor_agrikultur": belgia_agrikultur,
  "sektor_perikanan": belgia_perikanan,
  "sektor_olahan_pangan": belgia_olahan_pangan,
  "sektor_farmasi": belgia_farmasi,
  "sektor_pertahanan": belgia_pertahanan,
  "armada_militer": belgia_armada,
  "militer_strategis": belgia_strategis,
  "armada_kepolisian": belgia_kepolisian,
  "pabrik_militer": belgia_pabrik,
    "pendidikan": belgia_pendidikan,
  "kesehatan": belgia_kesehatan,
  "hukum": belgia_hukum,
  "sektor_olahraga": belgia_olahraga,
  "un_vote": 189,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 11,
      "kepuasan": 67,
      "pendapatan": 101
    },
    "korporasi": {
      "tarif": 27,
      "kepuasan": 52,
      "pendapatan": 194
    },
    "penghasilan": {
      "tarif": 8,
      "kepuasan": 61,
      "pendapatan": 83
    },
    "bea_cukai": {
      "tarif": 38,
      "kepuasan": 86,
      "pendapatan": 555
    },
    "lingkungan": {
      "tarif": 6,
      "kepuasan": 88,
      "pendapatan": 71
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 31 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 92 },
    "lainnya": {
      "tarif": 12,
      "kepuasan": 93,
      "pendapatan": 146
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
    "subsidi_energi": 50,
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
    "harga_daging_sapi": 83280,
    "harga_ayam": 82000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 24880,
    "harga_bbm": 10700,
    "harga_listrik": 1600,
    "harga_air": 10400,
    "harga_obat": 78950,
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
      "kekuatan_lunak": 39,
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
    "kesehatan": 20,
    "pendidikan": 26,
    "keamanan": 34,
    "keuangan": 20,
    "lingkungan": 60
  }
};
