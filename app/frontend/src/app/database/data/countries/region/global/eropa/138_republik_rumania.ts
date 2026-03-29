import { CountryData } from "@/app/database/data/types";
import { republik_rumania_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/eropa/138_republik_rumania";
import { republik_rumania_armada } from "../../modules/2_militer/2_armada_militer/eropa/138_republik_rumania";
import { republik_rumania_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/eropa/138_republik_rumania";
import { republik_rumania_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/eropa/138_republik_rumania";
import { republik_rumania_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/eropa/138_republik_rumania";
import { republik_rumania_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/eropa/138_republik_rumania";
import { republik_rumania_listrik } from "../../modules/1_ekonomi/2_kelistrikan/eropa/138_republik_rumania";
import { republik_rumania_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/eropa/138_republik_rumania";
import { republik_rumania_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/eropa/138_republik_rumania";
import { republik_rumania_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/eropa/138_republik_rumania";
import { republik_rumania_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/eropa/138_republik_rumania";
import { republik_rumania_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/eropa/138_republik_rumania";
import { republik_rumania_profile } from "../../modules/0_profiles/eropa/138_republik_rumania";
import { republik_rumania_strategis } from "../../modules/2_militer/3_militer_strategis/eropa/138_republik_rumania";

export const republik_rumania: CountryData = {
  ...republik_rumania_profile,
  "sektor_listrik": republik_rumania_listrik,
  "infrastruktur": republik_rumania_infrastruktur,
  "sektor_ekstraksi": republik_rumania_ekstraksi,
  "sektor_manufaktur": republik_rumania_manufaktur,
  "sektor_peternakan": republik_rumania_peternakan,
  "sektor_agrikultur": republik_rumania_agrikultur,
  "sektor_perikanan": republik_rumania_perikanan,
  "sektor_olahan_pangan": republik_rumania_olahan_pangan,
  "sektor_farmasi": republik_rumania_farmasi,
  "sektor_pertahanan": republik_rumania_pertahanan,
  "armada_militer": republik_rumania_armada,
  "militer_strategis": republik_rumania_strategis,
  "armada_kepolisian": republik_rumania_kepolisian,
  "pabrik_militer": {
    "pabrik_drone_kamikaze": 0,
    "pabrik_amunisi": 0,
    "pabrik_kendaraan_tempur": 0,
    "pabrik_senjata_berat": 0
  },
  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 1,
      "dasar": 7,
      "menengah": 29,
      "lanjutan": 10,
      "universitas": 1,
      "lembaga_pendidikan": 32,
      "laboratorium": 6,
      "observatorium": 39,
      "pusat_penelitian": 6,
      "pusat_pengembangan": 29,
      "literasi": 52
    },
    "kesehatan": {
      "rumah_sakit_besar": 36,
      "rumah_sakit_kecil": 13,
      "pusat_diagnostik": 33,
      "harapan_hidup": 21,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 33,
      "pengadilan": 35,
      "kejaksaan": 4,
      "pos_polisi": 1,
      "armada_mobil_polisi": 7557,
      "akademi_polisi": 32,
      "indeks_korupsi": 62,
      "indeks_keamanan": 83
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 15,
      "sirkuit_balap": 39,
      "stadion": 24,
      "stadion_internasional": 28
  },
  "un_vote": 143,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 13,
      "kepuasan": 67,
      "pendapatan": 132
    },
    "korporasi": {
      "tarif": 21,
      "kepuasan": 52,
      "pendapatan": 177
    },
    "penghasilan": {
      "tarif": 28,
      "kepuasan": 61,
      "pendapatan": 137
    },
    "bea_cukai": {
      "tarif": 15,
      "kepuasan": 86,
      "pendapatan": 137
    },
    "lingkungan": {
      "tarif": 9,
      "kepuasan": 88,
      "pendapatan": 85
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 18 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 52 },
    "lainnya": {
      "tarif": 31,
      "kepuasan": 93,
      "pendapatan": 305
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
    "subsidi_kesehatan": 100,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 75
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12800,
    "harga_daging_sapi": 83280,
    "harga_ayam": 20500,
    "harga_minyak_goreng": 15400,
    "harga_gula": 20160,
    "harga_telur": 31100,
    "harga_bbm": 10700,
    "harga_listrik": 2240,
    "harga_air": 5200,
    "harga_obat": 157900,
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
      "kekuatan_lunak": 33,
      "kekuatan_keras": 6,
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
    "kesehatan": 16,
    "pendidikan": 17,
    "keamanan": 19,
    "keuangan": 26,
    "lingkungan": 60
  }
};
