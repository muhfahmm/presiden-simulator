import { CountryData } from "@/app/database/data/types";
import { finlandia_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/eropa/114_finlandia";
import { finlandia_armada } from "../../modules/2_militer/2_armada_militer/eropa/114_finlandia";
import { finlandia_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/eropa/114_finlandia";
import { finlandia_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/eropa/114_finlandia";
import { finlandia_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/eropa/114_finlandia";
import { finlandia_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/eropa/114_finlandia";
import { finlandia_listrik } from "../../modules/1_ekonomi/2_kelistrikan/eropa/114_finlandia";
import { finlandia_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/eropa/114_finlandia";
import { finlandia_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/eropa/114_finlandia";
import { finlandia_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/eropa/114_finlandia";
import { finlandia_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/eropa/114_finlandia";
import { finlandia_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/eropa/114_finlandia";
import { finlandia_profile } from "../../modules/0_profiles/eropa/114_finlandia";
import { finlandia_strategis } from "../../modules/2_militer/3_militer_strategis/eropa/114_finlandia";

export const finlandia: CountryData = {
  ...finlandia_profile,
  "sektor_listrik": finlandia_listrik,
  "infrastruktur": finlandia_infrastruktur,
  "sektor_ekstraksi": finlandia_ekstraksi,
  "sektor_manufaktur": finlandia_manufaktur,
  "sektor_peternakan": finlandia_peternakan,
  "sektor_agrikultur": finlandia_agrikultur,
  "sektor_perikanan": finlandia_perikanan,
  "sektor_olahan_pangan": finlandia_olahan_pangan,
  "sektor_farmasi": finlandia_farmasi,
  "sektor_pertahanan": finlandia_pertahanan,
  "armada_militer": finlandia_armada,
  "militer_strategis": finlandia_strategis,
  "armada_kepolisian": finlandia_kepolisian,
  "pabrik_militer": {
    "pabrik_drone_kamikaze": 0,
    "pabrik_amunisi": 0,
    "pabrik_kendaraan_tempur": 0,
    "pabrik_senjata_berat": 0
  },
  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 14,
      "dasar": 2,
      "menengah": 37,
      "lanjutan": 36,
      "universitas": 32,
      "lembaga_pendidikan": 15,
      "laboratorium": 17,
      "observatorium": 3,
      "pusat_penelitian": 36,
      "pusat_pengembangan": 40,
      "literasi": 64
    },
    "kesehatan": {
      "rumah_sakit_besar": 35,
      "rumah_sakit_kecil": 10,
      "pusat_diagnostik": 25,
      "harapan_hidup": 28,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 22,
      "pengadilan": 15,
      "kejaksaan": 36,
      "pos_polisi": 7,
      "armada_mobil_polisi": 6415,
      "akademi_polisi": 10,
      "indeks_korupsi": 50,
      "indeks_keamanan": 88
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 31,
      "sirkuit_balap": 18,
      "stadion": 4,
      "stadion_internasional": 20
  },
  "un_vote": 156,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 2,
      "kepuasan": 67,
      "pendapatan": 7
    },
    "korporasi": {
      "tarif": 23,
      "kepuasan": 52,
      "pendapatan": 113
    },
    "penghasilan": {
      "tarif": 24,
      "kepuasan": 61,
      "pendapatan": 99
    },
    "bea_cukai": {
      "tarif": 15,
      "kepuasan": 86,
      "pendapatan": 82
    },
    "lingkungan": {
      "tarif": 13,
      "kepuasan": 88,
      "pendapatan": 63
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 15 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 44 },
    "lainnya": {
      "tarif": 18,
      "kepuasan": 93,
      "pendapatan": 93
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 90,
    "gaji_guru": 90,
    "gaji_medis": 90,
    "gaji_militer": 80
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 25,
    "subsidi_kesehatan": 100,
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
    "harga_daging_sapi": 104100,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 12320,
    "harga_gula": 20160,
    "harga_telur": 24880,
    "harga_bbm": 8560,
    "harga_listrik": 1600,
    "harga_air": 7280,
    "harga_obat": 157900,
    "harga_pendidikan": 967800
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
      "kekuatan_lunak": 22,
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
    "kesehatan": 13,
    "pendidikan": 14,
    "keamanan": 27,
    "keuangan": 36,
    "lingkungan": 60
  }
};
