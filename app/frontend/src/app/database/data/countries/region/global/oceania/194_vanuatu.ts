import { CountryData } from "@/app/database/data/types";
import { vanuatu_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/oceania/194_vanuatu";
import { vanuatu_armada } from "../../modules/2_militer/2_armada_militer/oceania/194_vanuatu";
import { vanuatu_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/oceania/194_vanuatu";
import { vanuatu_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/oceania/194_vanuatu";
import { vanuatu_hukum } from "../../modules/3_sosial/3_hukum/oceania/194_vanuatu";
import { vanuatu_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/oceania/194_vanuatu";
import { vanuatu_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/oceania/194_vanuatu";
import { vanuatu_kesehatan } from "../../modules/3_sosial/2_kesehatan/oceania/194_vanuatu";
import { vanuatu_listrik } from "../../modules/1_ekonomi/2_kelistrikan/oceania/194_vanuatu";
import { vanuatu_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/oceania/194_vanuatu";
import { vanuatu_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/oceania/194_vanuatu";
import { vanuatu_olahraga } from "../../modules/3_sosial/4_olahraga/oceania/194_vanuatu";
import { vanuatu_pabrik } from "../../modules/2_militer/5_pabrik_militer/oceania/194_vanuatu";
import { vanuatu_pendidikan } from "../../modules/3_sosial/1_pendidikan/oceania/194_vanuatu";
import { vanuatu_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/oceania/194_vanuatu";
import { vanuatu_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/oceania/194_vanuatu";
import { vanuatu_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/oceania/194_vanuatu";
import { vanuatu_profile } from "../../modules/0_profiles/oceania/194_vanuatu";
import { vanuatu_strategis } from "../../modules/2_militer/3_militer_strategis/oceania/194_vanuatu";

export const vanuatu: CountryData = {
  ...vanuatu_profile,
  "sektor_listrik": vanuatu_listrik,
  "infrastruktur": vanuatu_infrastruktur,
  "sektor_ekstraksi": vanuatu_ekstraksi,
  "sektor_manufaktur": vanuatu_manufaktur,
  "sektor_peternakan": vanuatu_peternakan,
  "sektor_agrikultur": vanuatu_agrikultur,
  "sektor_perikanan": vanuatu_perikanan,
  "sektor_olahan_pangan": vanuatu_olahan_pangan,
  "sektor_farmasi": vanuatu_farmasi,
  "sektor_pertahanan": vanuatu_pertahanan,
  "armada_militer": vanuatu_armada,
  "militer_strategis": vanuatu_strategis,
  "armada_kepolisian": vanuatu_kepolisian,
  "pabrik_militer": vanuatu_pabrik,
    "pendidikan": vanuatu_pendidikan,
  "kesehatan": vanuatu_kesehatan,
  "hukum": vanuatu_hukum,
  "sektor_olahraga": vanuatu_olahraga,
  "un_vote": 1,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 8,
      "kepuasan": 67,
      "pendapatan": 0
    },
    "korporasi": {
      "tarif": 10,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 10,
      "kepuasan": 61,
      "pendapatan": 0
    },
    "bea_cukai": {
      "tarif": 38,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 10,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 14,
      "kepuasan": 93,
      "pendapatan": 0
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 90,
    "gaji_guru": 90,
    "gaji_medis": 80,
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
    "harga_daging_sapi": 104100,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 12320,
    "harga_gula": 14400,
    "harga_telur": 24880,
    "harga_bbm": 5350,
    "harga_listrik": 3200,
    "harga_air": 5200,
    "harga_obat": 221060,
    "harga_pendidikan": 387120
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
      "kekuatan_keras": 10,
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
    "pendidikan": 10,
    "keamanan": 39,
    "keuangan": 34,
    "lingkungan": 60
  }
};
