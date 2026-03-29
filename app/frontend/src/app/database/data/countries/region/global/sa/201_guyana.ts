import { CountryData } from "@/app/database/data/types";
import { guyana_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/sa/201_guyana";
import { guyana_armada } from "../../modules/2_militer/2_armada_militer/sa/201_guyana";
import { guyana_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/sa/201_guyana";
import { guyana_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/sa/201_guyana";
import { guyana_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/sa/201_guyana";
import { guyana_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/sa/201_guyana";
import { guyana_listrik } from "../../modules/1_ekonomi/2_kelistrikan/sa/201_guyana";
import { guyana_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/sa/201_guyana";
import { guyana_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/sa/201_guyana";
import { guyana_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/sa/201_guyana";
import { guyana_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/sa/201_guyana";
import { guyana_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/sa/201_guyana";
import { guyana_profile } from "../../modules/0_profiles/sa/201_guyana";
import { guyana_strategis } from "../../modules/2_militer/3_militer_strategis/sa/201_guyana";

export const guyana: CountryData = {
  ...guyana_profile,
  "sektor_listrik": guyana_listrik,
  "infrastruktur": guyana_infrastruktur,
  "sektor_ekstraksi": guyana_ekstraksi,
  "sektor_manufaktur": guyana_manufaktur,
  "sektor_peternakan": guyana_peternakan,
  "sektor_agrikultur": guyana_agrikultur,
  "sektor_perikanan": guyana_perikanan,
  "sektor_olahan_pangan": guyana_olahan_pangan,
  "sektor_farmasi": guyana_farmasi,
  "sektor_pertahanan": guyana_pertahanan,
  "armada_militer": guyana_armada,
  "militer_strategis": guyana_strategis,
  "armada_kepolisian": guyana_kepolisian,
  "pabrik_militer": {
    "pabrik_drone_kamikaze": 0,
    "pabrik_amunisi": 0,
    "pabrik_kendaraan_tempur": 0,
    "pabrik_senjata_berat": 0
  },
  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 14,
      "dasar": 24,
      "menengah": 34,
      "lanjutan": 14,
      "universitas": 29,
      "lembaga_pendidikan": 21,
      "laboratorium": 36,
      "observatorium": 6,
      "pusat_penelitian": 34,
      "pusat_pengembangan": 16,
      "literasi": 91
    },
    "kesehatan": {
      "rumah_sakit_besar": 15,
      "rumah_sakit_kecil": 15,
      "pusat_diagnostik": 19,
      "harapan_hidup": 14,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 31,
      "pengadilan": 38,
      "kejaksaan": 5,
      "pos_polisi": 30,
      "armada_mobil_polisi": 1553,
      "akademi_polisi": 32,
      "indeks_korupsi": 66,
      "indeks_keamanan": 53
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 35,
      "sirkuit_balap": 27,
      "stadion": 2,
      "stadion_internasional": 7
  },
  "un_vote": 74,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 11,
      "kepuasan": 67,
      "pendapatan": 2
    },
    "korporasi": {
      "tarif": 10,
      "kepuasan": 52,
      "pendapatan": 2
    },
    "penghasilan": {
      "tarif": 1,
      "kepuasan": 61,
      "pendapatan": 0
    },
    "bea_cukai": {
      "tarif": 18,
      "kepuasan": 86,
      "pendapatan": 3
    },
    "lingkungan": {
      "tarif": 26,
      "kepuasan": 88,
      "pendapatan": 6
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 3 },
    "lainnya": {
      "tarif": 36,
      "kepuasan": 93,
      "pendapatan": 13
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 60,
    "gaji_guru": 70,
    "gaji_medis": 70,
    "gaji_militer": 80
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 22400,
    "harga_daging_sapi": 104100,
    "harga_ayam": 32800,
    "harga_minyak_goreng": 30800,
    "harga_gula": 14400,
    "harga_telur": 43540,
    "harga_bbm": 10700,
    "harga_listrik": 2240,
    "harga_air": 4160,
    "harga_obat": 78950,
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
      "kekuatan_lunak": 5,
      "kekuatan_keras": 39,
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
    "pendidikan": 26,
    "keamanan": 10,
    "keuangan": 13,
    "lingkungan": 60
  }
};
