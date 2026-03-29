import { CountryData } from "@/app/database/data/types";
import { slovenia_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/eropa/143_slovenia";
import { slovenia_armada } from "../../modules/2_militer/2_armada_militer/eropa/143_slovenia";
import { slovenia_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/eropa/143_slovenia";
import { slovenia_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/eropa/143_slovenia";
import { slovenia_hukum } from "../../modules/3_sosial/3_hukum/eropa/143_slovenia";
import { slovenia_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/eropa/143_slovenia";
import { slovenia_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/eropa/143_slovenia";
import { slovenia_kesehatan } from "../../modules/3_sosial/2_kesehatan/eropa/143_slovenia";
import { slovenia_listrik } from "../../modules/1_ekonomi/2_kelistrikan/eropa/143_slovenia";
import { slovenia_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/eropa/143_slovenia";
import { slovenia_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/eropa/143_slovenia";
import { slovenia_olahraga } from "../../modules/3_sosial/4_olahraga/eropa/143_slovenia";
import { slovenia_pabrik } from "../../modules/2_militer/5_pabrik_militer/eropa/143_slovenia";
import { slovenia_pendidikan } from "../../modules/3_sosial/1_pendidikan/eropa/143_slovenia";
import { slovenia_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/eropa/143_slovenia";
import { slovenia_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/eropa/143_slovenia";
import { slovenia_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/eropa/143_slovenia";
import { slovenia_profile } from "../../modules/0_profiles/eropa/143_slovenia";
import { slovenia_strategis } from "../../modules/2_militer/3_militer_strategis/eropa/143_slovenia";

export const slovenia: CountryData = {
  ...slovenia_profile,
  "sektor_listrik": slovenia_listrik,
  "infrastruktur": slovenia_infrastruktur,
  "sektor_ekstraksi": slovenia_ekstraksi,
  "sektor_manufaktur": slovenia_manufaktur,
  "sektor_peternakan": slovenia_peternakan,
  "sektor_agrikultur": slovenia_agrikultur,
  "sektor_perikanan": slovenia_perikanan,
  "sektor_olahan_pangan": slovenia_olahan_pangan,
  "sektor_farmasi": slovenia_farmasi,
  "sektor_pertahanan": slovenia_pertahanan,
  "armada_militer": slovenia_armada,
  "militer_strategis": slovenia_strategis,
  "armada_kepolisian": slovenia_kepolisian,
  "pabrik_militer": slovenia_pabrik,
    "pendidikan": slovenia_pendidikan,
  "kesehatan": slovenia_kesehatan,
  "hukum": slovenia_hukum,
  "sektor_olahraga": slovenia_olahraga,
  "un_vote": 78,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 35,
      "kepuasan": 67,
      "pendapatan": 61
    },
    "korporasi": {
      "tarif": 32,
      "kepuasan": 52,
      "pendapatan": 60
    },
    "penghasilan": {
      "tarif": 27,
      "kepuasan": 61,
      "pendapatan": 32
    },
    "bea_cukai": {
      "tarif": 36,
      "kepuasan": 86,
      "pendapatan": 52
    },
    "lingkungan": {
      "tarif": 6,
      "kepuasan": 88,
      "pendapatan": 11
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 4 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 10 },
    "lainnya": {
      "tarif": 13,
      "kepuasan": 93,
      "pendapatan": 15
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
    "harga_daging_sapi": 104100,
    "harga_ayam": 20500,
    "harga_minyak_goreng": 12320,
    "harga_gula": 20160,
    "harga_telur": 31100,
    "harga_bbm": 14980,
    "harga_listrik": 800,
    "harga_air": 7280,
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
      "kekuatan_lunak": 10,
      "kekuatan_keras": 31,
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
    "kesehatan": 2,
    "pendidikan": 6,
    "keamanan": 19,
    "keuangan": 10,
    "lingkungan": 60
  }
};
