import { CountryData } from "@/app/database/data/types";
import { georgia_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/asia/64_georgia";
import { georgia_armada } from "../../modules/2_militer/2_armada_militer/asia/64_georgia";
import { georgia_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/asia/64_georgia";
import { georgia_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/asia/64_georgia";
import { georgia_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/asia/64_georgia";
import { georgia_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/asia/64_georgia";
import { georgia_listrik } from "../../modules/1_ekonomi/2_kelistrikan/asia/64_georgia";
import { georgia_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/asia/64_georgia";
import { georgia_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/asia/64_georgia";
import { georgia_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/asia/64_georgia";
import { georgia_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/asia/64_georgia";
import { georgia_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/asia/64_georgia";
import { georgia_profile } from "../../modules/0_profiles/asia/64_georgia";
import { georgia_strategis } from "../../modules/2_militer/3_militer_strategis/asia/64_georgia";

export const georgia: CountryData = {
  ...georgia_profile,
  "sektor_listrik": georgia_listrik,
  "infrastruktur": georgia_infrastruktur,
  "sektor_ekstraksi": georgia_ekstraksi,
  "sektor_manufaktur": georgia_manufaktur,
  "sektor_peternakan": georgia_peternakan,
  "sektor_agrikultur": georgia_agrikultur,
  "sektor_perikanan": georgia_perikanan,
  "sektor_olahan_pangan": georgia_olahan_pangan,
  "sektor_farmasi": georgia_farmasi,
  "sektor_pertahanan": georgia_pertahanan,
  "armada_militer": georgia_armada,
  "militer_strategis": georgia_strategis,
  "armada_kepolisian": georgia_kepolisian,
  "pabrik_militer": {
    "pabrik_drone_kamikaze": 0,
    "pabrik_amunisi": 0,
    "pabrik_kendaraan_tempur": 0,
    "pabrik_senjata_berat": 0
  },
  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 9,
      "dasar": 15,
      "menengah": 36,
      "lanjutan": 16,
      "universitas": 13,
      "lembaga_pendidikan": 31,
      "laboratorium": 19,
      "observatorium": 19,
      "pusat_penelitian": 40,
      "pusat_pengembangan": 28,
      "literasi": 54
    },
    "kesehatan": {
      "rumah_sakit_besar": 37,
      "rumah_sakit_kecil": 40,
      "pusat_diagnostik": 7,
      "harapan_hidup": 12,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 33,
      "pengadilan": 39,
      "kejaksaan": 23,
      "pos_polisi": 7,
      "armada_mobil_polisi": 2029,
      "akademi_polisi": 14,
      "indeks_korupsi": 78,
      "indeks_keamanan": 64
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 31,
      "sirkuit_balap": 18,
      "stadion": 2,
      "stadion_internasional": 26
  },
  "un_vote": 127,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 23,
      "kepuasan": 67,
      "pendapatan": 10
    },
    "korporasi": {
      "tarif": 15,
      "kepuasan": 52,
      "pendapatan": 6
    },
    "penghasilan": {
      "tarif": 22,
      "kepuasan": 61,
      "pendapatan": 7
    },
    "bea_cukai": {
      "tarif": 7,
      "kepuasan": 86,
      "pendapatan": 3
    },
    "lingkungan": {
      "tarif": 32,
      "kepuasan": 88,
      "pendapatan": 17
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 2 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 4 },
    "lainnya": {
      "tarif": 17,
      "kepuasan": 93,
      "pendapatan": 9
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 60,
    "gaji_guru": 60,
    "gaji_medis": 80,
    "gaji_militer": 60
  },
  "subsidi": {
    "subsidi_energi": 75,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 32000,
    "harga_daging_sapi": 52050,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 21560,
    "harga_gula": 14400,
    "harga_telur": 31100,
    "harga_bbm": 10700,
    "harga_listrik": 1280,
    "harga_air": 7280,
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
      "kekuatan_lunak": 18,
      "kekuatan_keras": 32,
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
    "kesehatan": 17,
    "pendidikan": 8,
    "keamanan": 21,
    "keuangan": 8,
    "lingkungan": 60
  }
};
