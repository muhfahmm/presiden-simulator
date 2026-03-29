import { CountryData } from "@/app/database/data/types";
import { bangladesh_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/asia/59_bangladesh";
import { bangladesh_armada } from "../../modules/2_militer/2_armada_militer/asia/59_bangladesh";
import { bangladesh_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/asia/59_bangladesh";
import { bangladesh_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/asia/59_bangladesh";
import { bangladesh_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/asia/59_bangladesh";
import { bangladesh_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/asia/59_bangladesh";
import { bangladesh_listrik } from "../../modules/1_ekonomi/2_kelistrikan/asia/59_bangladesh";
import { bangladesh_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/asia/59_bangladesh";
import { bangladesh_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/asia/59_bangladesh";
import { bangladesh_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/asia/59_bangladesh";
import { bangladesh_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/asia/59_bangladesh";
import { bangladesh_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/asia/59_bangladesh";
import { bangladesh_profile } from "../../modules/0_profiles/asia/59_bangladesh";
import { bangladesh_strategis } from "../../modules/2_militer/3_militer_strategis/asia/59_bangladesh";

export const bangladesh: CountryData = {
  ...bangladesh_profile,
  "sektor_listrik": bangladesh_listrik,
  "infrastruktur": bangladesh_infrastruktur,
  "sektor_ekstraksi": bangladesh_ekstraksi,
  "sektor_manufaktur": bangladesh_manufaktur,
  "sektor_peternakan": bangladesh_peternakan,
  "sektor_agrikultur": bangladesh_agrikultur,
  "sektor_perikanan": bangladesh_perikanan,
  "sektor_olahan_pangan": bangladesh_olahan_pangan,
  "sektor_farmasi": bangladesh_farmasi,
  "sektor_pertahanan": bangladesh_pertahanan,
  "armada_militer": bangladesh_armada,
  "militer_strategis": bangladesh_strategis,
  "armada_kepolisian": bangladesh_kepolisian,
  "pabrik_militer": {
    "pabrik_drone_kamikaze": 0,
    "pabrik_amunisi": 0,
    "pabrik_kendaraan_tempur": 0,
    "pabrik_senjata_berat": 0
  },
  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 27,
      "dasar": 38,
      "menengah": 3,
      "lanjutan": 17,
      "universitas": 27,
      "lembaga_pendidikan": 28,
      "laboratorium": 11,
      "observatorium": 39,
      "pusat_penelitian": 24,
      "pusat_pengembangan": 1,
      "literasi": 55
    },
    "kesehatan": {
      "rumah_sakit_besar": 1,
      "rumah_sakit_kecil": 5,
      "pusat_diagnostik": 20,
      "harapan_hidup": 17,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 13,
      "pengadilan": 30,
      "kejaksaan": 39,
      "pos_polisi": 26,
      "armada_mobil_polisi": 5208,
      "akademi_polisi": 23,
      "indeks_korupsi": 79,
      "indeks_keamanan": 63
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 25,
      "sirkuit_balap": 36,
      "stadion": 9,
      "stadion_internasional": 39
  },
  "un_vote": 118,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 7,
      "kepuasan": 67,
      "pendapatan": 58
    },
    "korporasi": {
      "tarif": 32,
      "kepuasan": 52,
      "pendapatan": 156
    },
    "penghasilan": {
      "tarif": 11,
      "kepuasan": 61,
      "pendapatan": 55
    },
    "bea_cukai": {
      "tarif": 5,
      "kepuasan": 86,
      "pendapatan": 39
    },
    "lingkungan": {
      "tarif": 21,
      "kepuasan": 88,
      "pendapatan": 248
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 23 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 68 },
    "lainnya": {
      "tarif": 9,
      "kepuasan": 93,
      "pendapatan": 96
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 70,
    "gaji_guru": 60,
    "gaji_medis": 80,
    "gaji_militer": 70
  },
  "subsidi": {
    "subsidi_energi": 75,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12800,
    "harga_daging_sapi": 83280,
    "harga_ayam": 82000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 11520,
    "harga_telur": 31100,
    "harga_bbm": 5350,
    "harga_listrik": 1600,
    "harga_air": 7280,
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
      "kekuatan_lunak": 7,
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
    "kesehatan": 36,
    "pendidikan": 22,
    "keamanan": 36,
    "keuangan": 17,
    "lingkungan": 60
  }
};
