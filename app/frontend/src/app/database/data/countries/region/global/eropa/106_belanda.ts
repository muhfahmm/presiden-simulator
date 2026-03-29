import { CountryData } from "@/app/database/data/types";
import { belanda_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/eropa/106_belanda";
import { belanda_armada } from "../../modules/2_militer/2_armada_militer/eropa/106_belanda";
import { belanda_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/eropa/106_belanda";
import { belanda_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/eropa/106_belanda";
import { belanda_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/eropa/106_belanda";
import { belanda_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/eropa/106_belanda";
import { belanda_listrik } from "../../modules/1_ekonomi/2_kelistrikan/eropa/106_belanda";
import { belanda_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/eropa/106_belanda";
import { belanda_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/eropa/106_belanda";
import { belanda_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/eropa/106_belanda";
import { belanda_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/eropa/106_belanda";
import { belanda_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/eropa/106_belanda";
import { belanda_profile } from "../../modules/0_profiles/eropa/106_belanda";
import { belanda_strategis } from "../../modules/2_militer/3_militer_strategis/eropa/106_belanda";

export const belanda: CountryData = {
  ...belanda_profile,
  "sektor_listrik": belanda_listrik,
  "infrastruktur": belanda_infrastruktur,
  "sektor_ekstraksi": belanda_ekstraksi,
  "sektor_manufaktur": belanda_manufaktur,
  "sektor_peternakan": belanda_peternakan,
  "sektor_agrikultur": belanda_agrikultur,
  "sektor_perikanan": belanda_perikanan,
  "sektor_olahan_pangan": belanda_olahan_pangan,
  "sektor_farmasi": belanda_farmasi,
  "sektor_pertahanan": belanda_pertahanan,
  "armada_militer": belanda_armada,
  "militer_strategis": belanda_strategis,
  "armada_kepolisian": belanda_kepolisian,
  "pabrik_militer": {
    "pabrik_drone_kamikaze": 0,
    "pabrik_amunisi": 0,
    "pabrik_kendaraan_tempur": 0,
    "pabrik_senjata_berat": 0
  },
  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 34,
      "dasar": 15,
      "menengah": 28,
      "lanjutan": 27,
      "universitas": 33,
      "lembaga_pendidikan": 11,
      "laboratorium": 1,
      "observatorium": 40,
      "pusat_penelitian": 34,
      "pusat_pengembangan": 25,
      "literasi": 74
    },
    "kesehatan": {
      "rumah_sakit_besar": 12,
      "rumah_sakit_kecil": 26,
      "pusat_diagnostik": 28,
      "harapan_hidup": 27,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 34,
      "pengadilan": 30,
      "kejaksaan": 2,
      "pos_polisi": 6,
      "armada_mobil_polisi": 6595,
      "akademi_polisi": 28,
      "indeks_korupsi": 73,
      "indeks_keamanan": 95
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 38,
      "sirkuit_balap": 21,
      "stadion": 35,
      "stadion_internasional": 13
  },
  "un_vote": 196,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 12,
      "kepuasan": 67,
      "pendapatan": 271
    },
    "korporasi": {
      "tarif": 37,
      "kepuasan": 52,
      "pendapatan": 1015
    },
    "penghasilan": {
      "tarif": 35,
      "kepuasan": 61,
      "pendapatan": 489
    },
    "bea_cukai": {
      "tarif": 31,
      "kepuasan": 86,
      "pendapatan": 610
    },
    "lingkungan": {
      "tarif": 31,
      "kepuasan": 88,
      "pendapatan": 731
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 53 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 159 },
    "lainnya": {
      "tarif": 5,
      "kepuasan": 93,
      "pendapatan": 129
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
    "subsidi_kesehatan": 100,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 75
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 104100,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 12320,
    "harga_gula": 7200,
    "harga_telur": 24880,
    "harga_bbm": 10700,
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
      "kekuatan_lunak": 36,
      "kekuatan_keras": 22,
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
    "kesehatan": 23,
    "pendidikan": 25,
    "keamanan": 26,
    "keuangan": 30,
    "lingkungan": 60
  }
};
