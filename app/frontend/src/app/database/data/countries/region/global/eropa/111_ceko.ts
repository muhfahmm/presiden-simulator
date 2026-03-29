import { CountryData } from "@/app/database/data/types";
import { ceko_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/eropa/111_ceko";
import { ceko_armada } from "../../modules/2_militer/2_armada_militer/eropa/111_ceko";
import { ceko_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/eropa/111_ceko";
import { ceko_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/eropa/111_ceko";
import { ceko_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/eropa/111_ceko";
import { ceko_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/eropa/111_ceko";
import { ceko_listrik } from "../../modules/1_ekonomi/2_kelistrikan/eropa/111_ceko";
import { ceko_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/eropa/111_ceko";
import { ceko_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/eropa/111_ceko";
import { ceko_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/eropa/111_ceko";
import { ceko_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/eropa/111_ceko";
import { ceko_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/eropa/111_ceko";
import { ceko_profile } from "../../modules/0_profiles/eropa/111_ceko";
import { ceko_strategis } from "../../modules/2_militer/3_militer_strategis/eropa/111_ceko";

export const ceko: CountryData = {
  ...ceko_profile,
  "sektor_listrik": ceko_listrik,
  "infrastruktur": ceko_infrastruktur,
  "sektor_ekstraksi": ceko_ekstraksi,
  "sektor_manufaktur": ceko_manufaktur,
  "sektor_peternakan": ceko_peternakan,
  "sektor_agrikultur": ceko_agrikultur,
  "sektor_perikanan": ceko_perikanan,
  "sektor_olahan_pangan": ceko_olahan_pangan,
  "sektor_farmasi": ceko_farmasi,
  "sektor_pertahanan": ceko_pertahanan,
  "armada_militer": ceko_armada,
  "militer_strategis": ceko_strategis,
  "armada_kepolisian": ceko_kepolisian,
  "pabrik_militer": {
    "pabrik_drone_kamikaze": 0,
    "pabrik_amunisi": 0,
    "pabrik_kendaraan_tempur": 0,
    "pabrik_senjata_berat": 0
  },
  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 36,
      "dasar": 30,
      "menengah": 6,
      "lanjutan": 26,
      "universitas": 12,
      "lembaga_pendidikan": 24,
      "laboratorium": 9,
      "observatorium": 13,
      "pusat_penelitian": 27,
      "pusat_pengembangan": 37,
      "literasi": 87
    },
    "kesehatan": {
      "rumah_sakit_besar": 21,
      "rumah_sakit_kecil": 9,
      "pusat_diagnostik": 31,
      "harapan_hidup": 19,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 34,
      "pengadilan": 29,
      "kejaksaan": 29,
      "pos_polisi": 28,
      "armada_mobil_polisi": 1808,
      "akademi_polisi": 7,
      "indeks_korupsi": 66,
      "indeks_keamanan": 92
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 3,
      "sirkuit_balap": 14,
      "stadion": 29,
      "stadion_internasional": 10
  },
  "un_vote": 26,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 9,
      "kepuasan": 67,
      "pendapatan": 66
    },
    "korporasi": {
      "tarif": 22,
      "kepuasan": 52,
      "pendapatan": 171
    },
    "penghasilan": {
      "tarif": 25,
      "kepuasan": 61,
      "pendapatan": 98
    },
    "bea_cukai": {
      "tarif": 9,
      "kepuasan": 86,
      "pendapatan": 43
    },
    "lingkungan": {
      "tarif": 13,
      "kepuasan": 88,
      "pendapatan": 72
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 17 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 49 },
    "lainnya": {
      "tarif": 25,
      "kepuasan": 93,
      "pendapatan": 131
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 90,
    "gaji_guru": 100,
    "gaji_medis": 90,
    "gaji_militer": 80
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
    "harga_ayam": 41000,
    "harga_minyak_goreng": 12320,
    "harga_gula": 28800,
    "harga_telur": 43540,
    "harga_bbm": 8560,
    "harga_listrik": 1600,
    "harga_air": 4160,
    "harga_obat": 221060,
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
      "kekuatan_lunak": 2,
      "kekuatan_keras": 26,
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
    "kesehatan": 15,
    "pendidikan": 8,
    "keamanan": 39,
    "keuangan": 23,
    "lingkungan": 60
  }
};
