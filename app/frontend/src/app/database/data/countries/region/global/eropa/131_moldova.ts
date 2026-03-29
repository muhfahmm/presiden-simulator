import { CountryData } from "@/app/database/data/types";
import { moldova_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/eropa/131_moldova";
import { moldova_armada } from "../../modules/2_militer/2_armada_militer/eropa/131_moldova";
import { moldova_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/eropa/131_moldova";
import { moldova_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/eropa/131_moldova";
import { moldova_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/eropa/131_moldova";
import { moldova_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/eropa/131_moldova";
import { moldova_listrik } from "../../modules/1_ekonomi/2_kelistrikan/eropa/131_moldova";
import { moldova_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/eropa/131_moldova";
import { moldova_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/eropa/131_moldova";
import { moldova_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/eropa/131_moldova";
import { moldova_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/eropa/131_moldova";
import { moldova_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/eropa/131_moldova";
import { moldova_profile } from "../../modules/0_profiles/eropa/131_moldova";
import { moldova_strategis } from "../../modules/2_militer/3_militer_strategis/eropa/131_moldova";

export const moldova: CountryData = {
  ...moldova_profile,
  "sektor_listrik": moldova_listrik,
  "infrastruktur": moldova_infrastruktur,
  "sektor_ekstraksi": moldova_ekstraksi,
  "sektor_manufaktur": moldova_manufaktur,
  "sektor_peternakan": moldova_peternakan,
  "sektor_agrikultur": moldova_agrikultur,
  "sektor_perikanan": moldova_perikanan,
  "sektor_olahan_pangan": moldova_olahan_pangan,
  "sektor_farmasi": moldova_farmasi,
  "sektor_pertahanan": moldova_pertahanan,
  "armada_militer": moldova_armada,
  "militer_strategis": moldova_strategis,
  "armada_kepolisian": moldova_kepolisian,
  "pabrik_militer": {
    "pabrik_drone_kamikaze": 0,
    "pabrik_amunisi": 0,
    "pabrik_kendaraan_tempur": 0,
    "pabrik_senjata_berat": 0
  },
  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 13,
      "dasar": 32,
      "menengah": 34,
      "lanjutan": 25,
      "universitas": 40,
      "lembaga_pendidikan": 31,
      "laboratorium": 9,
      "observatorium": 20,
      "pusat_penelitian": 3,
      "pusat_pengembangan": 6,
      "literasi": 59
    },
    "kesehatan": {
      "rumah_sakit_besar": 20,
      "rumah_sakit_kecil": 14,
      "pusat_diagnostik": 38,
      "harapan_hidup": 2,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 39,
      "pengadilan": 40,
      "kejaksaan": 40,
      "pos_polisi": 3,
      "armada_mobil_polisi": 9602,
      "akademi_polisi": 13,
      "indeks_korupsi": 57,
      "indeks_keamanan": 65
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 29,
      "sirkuit_balap": 7,
      "stadion": 28,
      "stadion_internasional": 38
  },
  "un_vote": 38,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 14,
      "kepuasan": 67,
      "pendapatan": 5
    },
    "korporasi": {
      "tarif": 6,
      "kepuasan": 52,
      "pendapatan": 1
    },
    "penghasilan": {
      "tarif": 17,
      "kepuasan": 61,
      "pendapatan": 5
    },
    "bea_cukai": {
      "tarif": 36,
      "kepuasan": 86,
      "pendapatan": 15
    },
    "lingkungan": {
      "tarif": 21,
      "kepuasan": 88,
      "pendapatan": 5
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 3 },
    "lainnya": {
      "tarif": 33,
      "kepuasan": 93,
      "pendapatan": 12
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
    "subsidi_energi": 25,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 100,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 75
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12800,
    "harga_daging_sapi": 104100,
    "harga_ayam": 32800,
    "harga_minyak_goreng": 12320,
    "harga_gula": 14400,
    "harga_telur": 43540,
    "harga_bbm": 10700,
    "harga_listrik": 1280,
    "harga_air": 2600,
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
      "kekuatan_lunak": 15,
      "kekuatan_keras": 7,
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
    "pendidikan": 27,
    "keamanan": 22,
    "keuangan": 9,
    "lingkungan": 60
  }
};
