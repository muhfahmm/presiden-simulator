import { CountryData } from "@/app/database/data/types";
import { korea_selatan_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/asia/75_korea_selatan";
import { korea_selatan_armada } from "../../modules/2_militer/2_armada_militer/asia/75_korea_selatan";
import { korea_selatan_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/asia/75_korea_selatan";
import { korea_selatan_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/asia/75_korea_selatan";
import { korea_selatan_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/asia/75_korea_selatan";
import { korea_selatan_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/asia/75_korea_selatan";
import { korea_selatan_listrik } from "../../modules/1_ekonomi/2_kelistrikan/asia/75_korea_selatan";
import { korea_selatan_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/asia/75_korea_selatan";
import { korea_selatan_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/asia/75_korea_selatan";
import { korea_selatan_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/asia/75_korea_selatan";
import { korea_selatan_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/asia/75_korea_selatan";
import { korea_selatan_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/asia/75_korea_selatan";
import { korea_selatan_profile } from "../../modules/0_profiles/asia/75_korea_selatan";
import { korea_selatan_strategis } from "../../modules/2_militer/3_militer_strategis/asia/75_korea_selatan";

export const korea_selatan: CountryData = {
  ...korea_selatan_profile,
  "sektor_listrik": korea_selatan_listrik,
  "infrastruktur": korea_selatan_infrastruktur,
  "sektor_ekstraksi": korea_selatan_ekstraksi,
  "sektor_manufaktur": korea_selatan_manufaktur,
  "sektor_peternakan": korea_selatan_peternakan,
  "sektor_agrikultur": korea_selatan_agrikultur,
  "sektor_perikanan": korea_selatan_perikanan,
  "sektor_olahan_pangan": korea_selatan_olahan_pangan,
  "sektor_farmasi": korea_selatan_farmasi,
  "sektor_pertahanan": korea_selatan_pertahanan,
  "armada_militer": korea_selatan_armada,
  "militer_strategis": korea_selatan_strategis,
  "armada_kepolisian": korea_selatan_kepolisian,
  "pabrik_militer": {
    "pabrik_drone_kamikaze": 0,
    "pabrik_amunisi": 0,
    "pabrik_kendaraan_tempur": 0,
    "pabrik_senjata_berat": 0
  },
  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 31,
      "dasar": 28,
      "menengah": 3,
      "lanjutan": 18,
      "universitas": 26,
      "lembaga_pendidikan": 9,
      "laboratorium": 12,
      "observatorium": 1,
      "pusat_penelitian": 1,
      "pusat_pengembangan": 39,
      "literasi": 94
    },
    "kesehatan": {
      "rumah_sakit_besar": 14,
      "rumah_sakit_kecil": 2,
      "pusat_diagnostik": 17,
      "harapan_hidup": 39,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 40,
      "pengadilan": 23,
      "kejaksaan": 27,
      "pos_polisi": 35,
      "armada_mobil_polisi": 8927,
      "akademi_polisi": 35,
      "indeks_korupsi": 74,
      "indeks_keamanan": 83
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 30,
      "sirkuit_balap": 18,
      "stadion": 14,
      "stadion_internasional": 3
  },
  "un_vote": 185,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 24,
      "kepuasan": 67,
      "pendapatan": 1153
    },
    "korporasi": {
      "tarif": 1,
      "kepuasan": 52,
      "pendapatan": 50
    },
    "penghasilan": {
      "tarif": 1,
      "kepuasan": 61,
      "pendapatan": 17
    },
    "bea_cukai": {
      "tarif": 38,
      "kepuasan": 86,
      "pendapatan": 1632
    },
    "lingkungan": {
      "tarif": 26,
      "kepuasan": 88,
      "pendapatan": 1078
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 86 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 257 },
    "lainnya": {
      "tarif": 20,
      "kepuasan": 93,
      "pendapatan": 375
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 60,
    "gaji_guru": 60,
    "gaji_medis": 70,
    "gaji_militer": 70
  },
  "subsidi": {
    "subsidi_energi": 75,
    "subsidi_pangan": 75,
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
    "harga_beras": 8000,
    "harga_daging_sapi": 83280,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 21560,
    "harga_gula": 11520,
    "harga_telur": 24880,
    "harga_bbm": 10700,
    "harga_listrik": 1600,
    "harga_air": 4160,
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
      "kekuatan_lunak": 33,
      "kekuatan_keras": 29,
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
    "kesehatan": 7,
    "pendidikan": 34,
    "keamanan": 9,
    "keuangan": 12,
    "lingkungan": 60
  }
};
