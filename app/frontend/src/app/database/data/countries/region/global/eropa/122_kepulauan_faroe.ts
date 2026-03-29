import { CountryData } from "@/app/database/data/types";
import { kepulauan_faroe_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/eropa/122_kepulauan_faroe";
import { kepulauan_faroe_armada } from "../../modules/2_militer/2_armada_militer/eropa/122_kepulauan_faroe";
import { kepulauan_faroe_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/eropa/122_kepulauan_faroe";
import { kepulauan_faroe_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/eropa/122_kepulauan_faroe";
import { kepulauan_faroe_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/eropa/122_kepulauan_faroe";
import { kepulauan_faroe_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/eropa/122_kepulauan_faroe";
import { kepulauan_faroe_listrik } from "../../modules/1_ekonomi/2_kelistrikan/eropa/122_kepulauan_faroe";
import { kepulauan_faroe_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/eropa/122_kepulauan_faroe";
import { kepulauan_faroe_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/eropa/122_kepulauan_faroe";
import { kepulauan_faroe_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/eropa/122_kepulauan_faroe";
import { kepulauan_faroe_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/eropa/122_kepulauan_faroe";
import { kepulauan_faroe_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/eropa/122_kepulauan_faroe";
import { kepulauan_faroe_profile } from "../../modules/0_profiles/eropa/122_kepulauan_faroe";
import { kepulauan_faroe_strategis } from "../../modules/2_militer/3_militer_strategis/eropa/122_kepulauan_faroe";

export const kepulauan_faroe: CountryData = {
  ...kepulauan_faroe_profile,
  "sektor_listrik": kepulauan_faroe_listrik,
  "infrastruktur": kepulauan_faroe_infrastruktur,
  "sektor_ekstraksi": kepulauan_faroe_ekstraksi,
  "sektor_manufaktur": kepulauan_faroe_manufaktur,
  "sektor_peternakan": kepulauan_faroe_peternakan,
  "sektor_agrikultur": kepulauan_faroe_agrikultur,
  "sektor_perikanan": kepulauan_faroe_perikanan,
  "sektor_olahan_pangan": kepulauan_faroe_olahan_pangan,
  "sektor_farmasi": kepulauan_faroe_farmasi,
  "sektor_pertahanan": kepulauan_faroe_pertahanan,
  "armada_militer": kepulauan_faroe_armada,
  "militer_strategis": kepulauan_faroe_strategis,
  "armada_kepolisian": kepulauan_faroe_kepolisian,
  "pabrik_militer": {
    "pabrik_drone_kamikaze": 0,
    "pabrik_amunisi": 0,
    "pabrik_kendaraan_tempur": 0,
    "pabrik_senjata_berat": 0
  },
  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 19,
      "dasar": 1,
      "menengah": 20,
      "lanjutan": 32,
      "universitas": 40,
      "lembaga_pendidikan": 24,
      "laboratorium": 18,
      "observatorium": 39,
      "pusat_penelitian": 13,
      "pusat_pengembangan": 12,
      "literasi": 86
    },
    "kesehatan": {
      "rumah_sakit_besar": 39,
      "rumah_sakit_kecil": 7,
      "pusat_diagnostik": 23,
      "harapan_hidup": 1,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 37,
      "pengadilan": 31,
      "kejaksaan": 17,
      "pos_polisi": 39,
      "armada_mobil_polisi": 5067,
      "akademi_polisi": 6,
      "indeks_korupsi": 94,
      "indeks_keamanan": 68
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 1,
      "sirkuit_balap": 39,
      "stadion": 17,
      "stadion_internasional": 10
  },
  "un_vote": 18,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 35,
      "kepuasan": 67,
      "pendapatan": 4
    },
    "korporasi": {
      "tarif": 7,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 29,
      "kepuasan": 61,
      "pendapatan": 8
    },
    "bea_cukai": {
      "tarif": 30,
      "kepuasan": 86,
      "pendapatan": 6
    },
    "lingkungan": {
      "tarif": 34,
      "kepuasan": 88,
      "pendapatan": 4
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 1,
      "kepuasan": 93,
      "pendapatan": 0
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
    "subsidi_pendidikan": 100,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 75
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 32000,
    "harga_daging_sapi": 104100,
    "harga_ayam": 32800,
    "harga_minyak_goreng": 15400,
    "harga_gula": 28800,
    "harga_telur": 43540,
    "harga_bbm": 10700,
    "harga_listrik": 1600,
    "harga_air": 5200,
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
      "kekuatan_lunak": 9,
      "kekuatan_keras": 16,
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
    "kesehatan": 30,
    "pendidikan": 32,
    "keamanan": 9,
    "keuangan": 17,
    "lingkungan": 60
  }
};
