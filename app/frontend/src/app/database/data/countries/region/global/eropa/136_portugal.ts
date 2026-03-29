import { CountryData } from "@/app/database/data/types";
import { portugal_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/eropa/136_portugal";
import { portugal_armada } from "../../modules/2_militer/2_armada_militer/eropa/136_portugal";
import { portugal_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/eropa/136_portugal";
import { portugal_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/eropa/136_portugal";
import { portugal_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/eropa/136_portugal";
import { portugal_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/eropa/136_portugal";
import { portugal_listrik } from "../../modules/1_ekonomi/2_kelistrikan/eropa/136_portugal";
import { portugal_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/eropa/136_portugal";
import { portugal_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/eropa/136_portugal";
import { portugal_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/eropa/136_portugal";
import { portugal_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/eropa/136_portugal";
import { portugal_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/eropa/136_portugal";
import { portugal_profile } from "../../modules/0_profiles/eropa/136_portugal";
import { portugal_strategis } from "../../modules/2_militer/3_militer_strategis/eropa/136_portugal";

export const portugal: CountryData = {
  ...portugal_profile,
  "sektor_listrik": portugal_listrik,
  "infrastruktur": portugal_infrastruktur,
  "sektor_ekstraksi": portugal_ekstraksi,
  "sektor_manufaktur": portugal_manufaktur,
  "sektor_peternakan": portugal_peternakan,
  "sektor_agrikultur": portugal_agrikultur,
  "sektor_perikanan": portugal_perikanan,
  "sektor_olahan_pangan": portugal_olahan_pangan,
  "sektor_farmasi": portugal_farmasi,
  "sektor_pertahanan": portugal_pertahanan,
  "armada_militer": portugal_armada,
  "militer_strategis": portugal_strategis,
  "armada_kepolisian": portugal_kepolisian,
  "pabrik_militer": {
    "pabrik_drone_kamikaze": 0,
    "pabrik_amunisi": 0,
    "pabrik_kendaraan_tempur": 0,
    "pabrik_senjata_berat": 0
  },
  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 3,
      "dasar": 4,
      "menengah": 24,
      "lanjutan": 29,
      "universitas": 30,
      "lembaga_pendidikan": 18,
      "laboratorium": 22,
      "observatorium": 34,
      "pusat_penelitian": 32,
      "pusat_pengembangan": 11,
      "literasi": 52
    },
    "kesehatan": {
      "rumah_sakit_besar": 12,
      "rumah_sakit_kecil": 9,
      "pusat_diagnostik": 26,
      "harapan_hidup": 23,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 30,
      "pengadilan": 34,
      "kejaksaan": 26,
      "pos_polisi": 12,
      "armada_mobil_polisi": 2351,
      "akademi_polisi": 11,
      "indeks_korupsi": 56,
      "indeks_keamanan": 80
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 21,
      "sirkuit_balap": 35,
      "stadion": 38,
      "stadion_internasional": 21
  },
  "un_vote": 194,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 16,
      "kepuasan": 67,
      "pendapatan": 114
    },
    "korporasi": {
      "tarif": 40,
      "kepuasan": 52,
      "pendapatan": 204
    },
    "penghasilan": {
      "tarif": 16,
      "kepuasan": 61,
      "pendapatan": 52
    },
    "bea_cukai": {
      "tarif": 7,
      "kepuasan": 86,
      "pendapatan": 32
    },
    "lingkungan": {
      "tarif": 18,
      "kepuasan": 88,
      "pendapatan": 99
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 14 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 41 },
    "lainnya": {
      "tarif": 28,
      "kepuasan": 93,
      "pendapatan": 194
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
    "harga_beras": 8000,
    "harga_daging_sapi": 52050,
    "harga_ayam": 57400,
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 31100,
    "harga_bbm": 10700,
    "harga_listrik": 800,
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
      "kekuatan_lunak": 36,
      "kekuatan_keras": 30,
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
    "pendidikan": 33,
    "keamanan": 9,
    "keuangan": 12,
    "lingkungan": 60
  }
};
