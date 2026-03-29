import { CountryData } from "@/app/database/data/types";
import { laos_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/asia/78_laos";
import { laos_armada } from "../../modules/2_militer/2_armada_militer/asia/78_laos";
import { laos_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/asia/78_laos";
import { laos_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/asia/78_laos";
import { laos_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/asia/78_laos";
import { laos_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/asia/78_laos";
import { laos_listrik } from "../../modules/1_ekonomi/2_kelistrikan/asia/78_laos";
import { laos_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/asia/78_laos";
import { laos_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/asia/78_laos";
import { laos_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/asia/78_laos";
import { laos_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/asia/78_laos";
import { laos_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/asia/78_laos";
import { laos_profile } from "../../modules/0_profiles/asia/78_laos";
import { laos_strategis } from "../../modules/2_militer/3_militer_strategis/asia/78_laos";

export const laos: CountryData = {
  ...laos_profile,
  "sektor_listrik": laos_listrik,
  "infrastruktur": laos_infrastruktur,
  "sektor_ekstraksi": laos_ekstraksi,
  "sektor_manufaktur": laos_manufaktur,
  "sektor_peternakan": laos_peternakan,
  "sektor_agrikultur": laos_agrikultur,
  "sektor_perikanan": laos_perikanan,
  "sektor_olahan_pangan": laos_olahan_pangan,
  "sektor_farmasi": laos_farmasi,
  "sektor_pertahanan": laos_pertahanan,
  "armada_militer": laos_armada,
  "militer_strategis": laos_strategis,
  "armada_kepolisian": laos_kepolisian,
  "pabrik_militer": {
    "pabrik_drone_kamikaze": 0,
    "pabrik_amunisi": 0,
    "pabrik_kendaraan_tempur": 0,
    "pabrik_senjata_berat": 0
  },
  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 26,
      "dasar": 20,
      "menengah": 34,
      "lanjutan": 1,
      "universitas": 19,
      "lembaga_pendidikan": 17,
      "laboratorium": 33,
      "observatorium": 27,
      "pusat_penelitian": 9,
      "pusat_pengembangan": 12,
      "literasi": 77
    },
    "kesehatan": {
      "rumah_sakit_besar": 34,
      "rumah_sakit_kecil": 36,
      "pusat_diagnostik": 10,
      "harapan_hidup": 21,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 23,
      "pengadilan": 20,
      "kejaksaan": 38,
      "pos_polisi": 20,
      "armada_mobil_polisi": 598,
      "akademi_polisi": 34,
      "indeks_korupsi": 75,
      "indeks_keamanan": 55
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 40,
      "sirkuit_balap": 15,
      "stadion": 12,
      "stadion_internasional": 10
  },
  "un_vote": 21,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 32,
      "kepuasan": 67,
      "pendapatan": 12
    },
    "korporasi": {
      "tarif": 37,
      "kepuasan": 52,
      "pendapatan": 8
    },
    "penghasilan": {
      "tarif": 31,
      "kepuasan": 61,
      "pendapatan": 5
    },
    "bea_cukai": {
      "tarif": 13,
      "kepuasan": 86,
      "pendapatan": 3
    },
    "lingkungan": {
      "tarif": 26,
      "kepuasan": 88,
      "pendapatan": 10
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 3 },
    "lainnya": {
      "tarif": 8,
      "kepuasan": 93,
      "pendapatan": 1
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 50,
    "gaji_guru": 60,
    "gaji_medis": 70,
    "gaji_militer": 50
  },
  "subsidi": {
    "subsidi_energi": 75,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12800,
    "harga_daging_sapi": 104100,
    "harga_ayam": 20500,
    "harga_minyak_goreng": 12320,
    "harga_gula": 11520,
    "harga_telur": 24880,
    "harga_bbm": 5350,
    "harga_listrik": 1600,
    "harga_air": 5200,
    "harga_obat": 315800,
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
      "kekuatan_lunak": 2,
      "kekuatan_keras": 14,
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
    "pendidikan": 12,
    "keamanan": 39,
    "keuangan": 5,
    "lingkungan": 60
  }
};
