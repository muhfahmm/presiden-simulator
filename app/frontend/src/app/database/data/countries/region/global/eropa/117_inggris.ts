import { CountryData } from "@/app/database/data/types";
import { inggris_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/eropa/117_inggris";
import { inggris_armada } from "../../modules/2_militer/2_armada_militer/eropa/117_inggris";
import { inggris_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/eropa/117_inggris";
import { inggris_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/eropa/117_inggris";
import { inggris_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/eropa/117_inggris";
import { inggris_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/eropa/117_inggris";
import { inggris_listrik } from "../../modules/1_ekonomi/2_kelistrikan/eropa/117_inggris";
import { inggris_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/eropa/117_inggris";
import { inggris_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/eropa/117_inggris";
import { inggris_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/eropa/117_inggris";
import { inggris_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/eropa/117_inggris";
import { inggris_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/eropa/117_inggris";
import { inggris_profile } from "../../modules/0_profiles/eropa/117_inggris";
import { inggris_strategis } from "../../modules/2_militer/3_militer_strategis/eropa/117_inggris";

export const inggris: CountryData = {
  ...inggris_profile,
  "sektor_listrik": inggris_listrik,
  "infrastruktur": inggris_infrastruktur,
  "sektor_ekstraksi": inggris_ekstraksi,
  "sektor_manufaktur": inggris_manufaktur,
  "sektor_peternakan": inggris_peternakan,
  "sektor_agrikultur": inggris_agrikultur,
  "sektor_perikanan": inggris_perikanan,
  "sektor_olahan_pangan": inggris_olahan_pangan,
  "sektor_farmasi": inggris_farmasi,
  "sektor_pertahanan": inggris_pertahanan,
  "armada_militer": inggris_armada,
  "militer_strategis": inggris_strategis,
  "armada_kepolisian": inggris_kepolisian,
  "pabrik_militer": {
    "pabrik_drone_kamikaze": 0,
    "pabrik_amunisi": 0,
    "pabrik_kendaraan_tempur": 0,
    "pabrik_senjata_berat": 0
  },
  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 10,
      "dasar": 17,
      "menengah": 31,
      "lanjutan": 5,
      "universitas": 9,
      "lembaga_pendidikan": 1,
      "laboratorium": 24,
      "observatorium": 28,
      "pusat_penelitian": 3,
      "pusat_pengembangan": 30,
      "literasi": 93
    },
    "kesehatan": {
      "rumah_sakit_besar": 4,
      "rumah_sakit_kecil": 32,
      "pusat_diagnostik": 20,
      "harapan_hidup": 12,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 11,
      "pengadilan": 39,
      "kejaksaan": 25,
      "pos_polisi": 2,
      "armada_mobil_polisi": 9587,
      "akademi_polisi": 26,
      "indeks_korupsi": 89,
      "indeks_keamanan": 81
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 19,
      "sirkuit_balap": 40,
      "stadion": 25,
      "stadion_internasional": 14
  },
  "un_vote": 181,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 16,
      "kepuasan": 67,
      "pendapatan": 1495
    },
    "korporasi": {
      "tarif": 19,
      "kepuasan": 52,
      "pendapatan": 1669
    },
    "penghasilan": {
      "tarif": 39,
      "kepuasan": 61,
      "pendapatan": 2342
    },
    "bea_cukai": {
      "tarif": 35,
      "kepuasan": 86,
      "pendapatan": 3052
    },
    "lingkungan": {
      "tarif": 31,
      "kepuasan": 88,
      "pendapatan": 1976
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 171 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 511 },
    "lainnya": {
      "tarif": 7,
      "kepuasan": 93,
      "pendapatan": 641
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
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 83280,
    "harga_ayam": 32800,
    "harga_minyak_goreng": 12320,
    "harga_gula": 20160,
    "harga_telur": 31100,
    "harga_bbm": 10700,
    "harga_listrik": 1280,
    "harga_air": 7280,
    "harga_obat": 221060,
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
      "kekuatan_lunak": 3,
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
    "kesehatan": 32,
    "pendidikan": 31,
    "keamanan": 5,
    "keuangan": 2,
    "lingkungan": 60
  }
};
