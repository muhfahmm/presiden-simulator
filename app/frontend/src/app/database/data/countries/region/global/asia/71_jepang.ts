import { CountryData } from "@/app/database/data/types";
import { jepang_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/asia/71_jepang";
import { jepang_armada } from "../../modules/2_militer/2_armada_militer/asia/71_jepang";
import { jepang_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/asia/71_jepang";
import { jepang_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/asia/71_jepang";
import { jepang_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/asia/71_jepang";
import { jepang_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/asia/71_jepang";
import { jepang_listrik } from "../../modules/1_ekonomi/2_kelistrikan/asia/71_jepang";
import { jepang_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/asia/71_jepang";
import { jepang_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/asia/71_jepang";
import { jepang_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/asia/71_jepang";
import { jepang_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/asia/71_jepang";
import { jepang_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/asia/71_jepang";
import { jepang_profile } from "../../modules/0_profiles/asia/71_jepang";
import { jepang_strategis } from "../../modules/2_militer/3_militer_strategis/asia/71_jepang";

export const jepang: CountryData = {
  ...jepang_profile,
  "sektor_listrik": jepang_listrik,
  "infrastruktur": jepang_infrastruktur,
  "sektor_ekstraksi": jepang_ekstraksi,
  "sektor_manufaktur": jepang_manufaktur,
  "sektor_peternakan": jepang_peternakan,
  "sektor_agrikultur": jepang_agrikultur,
  "sektor_perikanan": jepang_perikanan,
  "sektor_olahan_pangan": jepang_olahan_pangan,
  "sektor_farmasi": jepang_farmasi,
  "sektor_pertahanan": jepang_pertahanan,
  "armada_militer": jepang_armada,
  "militer_strategis": jepang_strategis,
  "armada_kepolisian": jepang_kepolisian,
  "pabrik_militer": {
    "pabrik_drone_kamikaze": 0,
    "pabrik_amunisi": 0,
    "pabrik_kendaraan_tempur": 0,
    "pabrik_senjata_berat": 0
  },
  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 28,
      "dasar": 7,
      "menengah": 22,
      "lanjutan": 10,
      "universitas": 23,
      "lembaga_pendidikan": 17,
      "laboratorium": 17,
      "observatorium": 9,
      "pusat_penelitian": 13,
      "pusat_pengembangan": 5,
      "literasi": 86
    },
    "kesehatan": {
      "rumah_sakit_besar": 11,
      "rumah_sakit_kecil": 35,
      "pusat_diagnostik": 9,
      "harapan_hidup": 17,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 23,
      "pengadilan": 13,
      "kejaksaan": 14,
      "pos_polisi": 28,
      "armada_mobil_polisi": 6450,
      "akademi_polisi": 33,
      "indeks_korupsi": 90,
      "indeks_keamanan": 64
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 13,
      "sirkuit_balap": 39,
      "stadion": 39,
      "stadion_internasional": 12
  },
  "un_vote": 207,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 3,
      "kepuasan": 67,
      "pendapatan": 209
    },
    "korporasi": {
      "tarif": 6,
      "kepuasan": 52,
      "pendapatan": 245
    },
    "penghasilan": {
      "tarif": 23,
      "kepuasan": 61,
      "pendapatan": 1899
    },
    "bea_cukai": {
      "tarif": 12,
      "kepuasan": 86,
      "pendapatan": 568
    },
    "lingkungan": {
      "tarif": 5,
      "kepuasan": 88,
      "pendapatan": 433
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 200 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 600 },
    "lainnya": {
      "tarif": 16,
      "kepuasan": 93,
      "pendapatan": 1182
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 70,
    "gaji_guru": 70,
    "gaji_medis": 70,
    "gaji_militer": 60
  },
  "subsidi": {
    "subsidi_energi": 75,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 104100,
    "harga_ayam": 82000,
    "harga_minyak_goreng": 21560,
    "harga_gula": 7200,
    "harga_telur": 31100,
    "harga_bbm": 10700,
    "harga_listrik": 1600,
    "harga_air": 2600,
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
      "kekuatan_lunak": 39,
      "kekuatan_keras": 19,
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
    "pendidikan": 40,
    "keamanan": 10,
    "keuangan": 22,
    "lingkungan": 60
  }
};
