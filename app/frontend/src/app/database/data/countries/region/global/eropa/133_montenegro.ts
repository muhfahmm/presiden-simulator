import { CountryData } from "@/app/database/data/types";
import { montenegro_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/eropa/133_montenegro";
import { montenegro_armada } from "../../modules/2_militer/2_armada_militer/eropa/133_montenegro";
import { montenegro_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/eropa/133_montenegro";
import { montenegro_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/eropa/133_montenegro";
import { montenegro_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/eropa/133_montenegro";
import { montenegro_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/eropa/133_montenegro";
import { montenegro_listrik } from "../../modules/1_ekonomi/2_kelistrikan/eropa/133_montenegro";
import { montenegro_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/eropa/133_montenegro";
import { montenegro_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/eropa/133_montenegro";
import { montenegro_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/eropa/133_montenegro";
import { montenegro_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/eropa/133_montenegro";
import { montenegro_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/eropa/133_montenegro";
import { montenegro_profile } from "../../modules/0_profiles/eropa/133_montenegro";
import { montenegro_strategis } from "../../modules/2_militer/3_militer_strategis/eropa/133_montenegro";

export const montenegro: CountryData = {
  ...montenegro_profile,
  "sektor_listrik": montenegro_listrik,
  "infrastruktur": montenegro_infrastruktur,
  "sektor_ekstraksi": montenegro_ekstraksi,
  "sektor_manufaktur": montenegro_manufaktur,
  "sektor_peternakan": montenegro_peternakan,
  "sektor_agrikultur": montenegro_agrikultur,
  "sektor_perikanan": montenegro_perikanan,
  "sektor_olahan_pangan": montenegro_olahan_pangan,
  "sektor_farmasi": montenegro_farmasi,
  "sektor_pertahanan": montenegro_pertahanan,
  "armada_militer": montenegro_armada,
  "militer_strategis": montenegro_strategis,
  "armada_kepolisian": montenegro_kepolisian,
  "pabrik_militer": {
    "pabrik_drone_kamikaze": 0,
    "pabrik_amunisi": 0,
    "pabrik_kendaraan_tempur": 0,
    "pabrik_senjata_berat": 0
  },
  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 3,
      "dasar": 11,
      "menengah": 7,
      "lanjutan": 34,
      "universitas": 20,
      "lembaga_pendidikan": 9,
      "laboratorium": 19,
      "observatorium": 38,
      "pusat_penelitian": 29,
      "pusat_pengembangan": 20,
      "literasi": 83
    },
    "kesehatan": {
      "rumah_sakit_besar": 2,
      "rumah_sakit_kecil": 13,
      "pusat_diagnostik": 4,
      "harapan_hidup": 4,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 3,
      "pengadilan": 12,
      "kejaksaan": 37,
      "pos_polisi": 3,
      "armada_mobil_polisi": 5087,
      "akademi_polisi": 14,
      "indeks_korupsi": 95,
      "indeks_keamanan": 72
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 23,
      "sirkuit_balap": 1,
      "stadion": 7,
      "stadion_internasional": 7
  },
  "un_vote": 104,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 33,
      "kepuasan": 67,
      "pendapatan": 5
    },
    "korporasi": {
      "tarif": 7,
      "kepuasan": 52,
      "pendapatan": 1
    },
    "penghasilan": {
      "tarif": 24,
      "kepuasan": 61,
      "pendapatan": 1
    },
    "bea_cukai": {
      "tarif": 28,
      "kepuasan": 86,
      "pendapatan": 2
    },
    "lingkungan": {
      "tarif": 37,
      "kepuasan": 88,
      "pendapatan": 4
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 2,
      "kepuasan": 93,
      "pendapatan": 0
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 80,
    "gaji_guru": 100,
    "gaji_medis": 90,
    "gaji_militer": 80
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 50,
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
    "harga_beras": 12800,
    "harga_daging_sapi": 145740,
    "harga_ayam": 32800,
    "harga_minyak_goreng": 15400,
    "harga_gula": 11520,
    "harga_telur": 62200,
    "harga_bbm": 14980,
    "harga_listrik": 1600,
    "harga_air": 7280,
    "harga_obat": 126320,
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
      "kekuatan_lunak": 21,
      "kekuatan_keras": 34,
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
    "kesehatan": 4,
    "pendidikan": 39,
    "keamanan": 9,
    "keuangan": 21,
    "lingkungan": 60
  }
};
