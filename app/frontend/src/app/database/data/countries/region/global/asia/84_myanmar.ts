import { CountryData } from "@/app/database/data/types";
import { myanmar_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/asia/84_myanmar";
import { myanmar_armada } from "../../modules/2_militer/2_armada_militer/asia/84_myanmar";
import { myanmar_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/asia/84_myanmar";
import { myanmar_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/asia/84_myanmar";
import { myanmar_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/asia/84_myanmar";
import { myanmar_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/asia/84_myanmar";
import { myanmar_listrik } from "../../modules/1_ekonomi/2_kelistrikan/asia/84_myanmar";
import { myanmar_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/asia/84_myanmar";
import { myanmar_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/asia/84_myanmar";
import { myanmar_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/asia/84_myanmar";
import { myanmar_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/asia/84_myanmar";
import { myanmar_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/asia/84_myanmar";
import { myanmar_profile } from "../../modules/0_profiles/asia/84_myanmar";
import { myanmar_strategis } from "../../modules/2_militer/3_militer_strategis/asia/84_myanmar";

export const myanmar: CountryData = {
  ...myanmar_profile,
  "sektor_listrik": myanmar_listrik,
  "infrastruktur": myanmar_infrastruktur,
  "sektor_ekstraksi": myanmar_ekstraksi,
  "sektor_manufaktur": myanmar_manufaktur,
  "sektor_peternakan": myanmar_peternakan,
  "sektor_agrikultur": myanmar_agrikultur,
  "sektor_perikanan": myanmar_perikanan,
  "sektor_olahan_pangan": myanmar_olahan_pangan,
  "sektor_farmasi": myanmar_farmasi,
  "sektor_pertahanan": myanmar_pertahanan,
  "armada_militer": myanmar_armada,
  "militer_strategis": myanmar_strategis,
  "armada_kepolisian": myanmar_kepolisian,
  "pabrik_militer": {
    "pabrik_drone_kamikaze": 0,
    "pabrik_amunisi": 0,
    "pabrik_kendaraan_tempur": 0,
    "pabrik_senjata_berat": 0
  },
  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 7,
      "dasar": 37,
      "menengah": 11,
      "lanjutan": 18,
      "universitas": 4,
      "lembaga_pendidikan": 31,
      "laboratorium": 1,
      "observatorium": 25,
      "pusat_penelitian": 22,
      "pusat_pengembangan": 13,
      "literasi": 72
    },
    "kesehatan": {
      "rumah_sakit_besar": 16,
      "rumah_sakit_kecil": 20,
      "pusat_diagnostik": 3,
      "harapan_hidup": 3,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 12,
      "pengadilan": 23,
      "kejaksaan": 13,
      "pos_polisi": 11,
      "armada_mobil_polisi": 908,
      "akademi_polisi": 13,
      "indeks_korupsi": 51,
      "indeks_keamanan": 91
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 13,
      "sirkuit_balap": 3,
      "stadion": 29,
      "stadion_internasional": 24
  },
  "un_vote": 55,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 9,
      "kepuasan": 67,
      "pendapatan": 12
    },
    "korporasi": {
      "tarif": 30,
      "kepuasan": 52,
      "pendapatan": 43
    },
    "penghasilan": {
      "tarif": 11,
      "kepuasan": 61,
      "pendapatan": 19
    },
    "bea_cukai": {
      "tarif": 29,
      "kepuasan": 86,
      "pendapatan": 45
    },
    "lingkungan": {
      "tarif": 38,
      "kepuasan": 88,
      "pendapatan": 24
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 3 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 9 },
    "lainnya": {
      "tarif": 12,
      "kepuasan": 93,
      "pendapatan": 17
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 70,
    "gaji_guru": 70,
    "gaji_medis": 70,
    "gaji_militer": 70
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 50,
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
    "harga_daging_sapi": 104100,
    "harga_ayam": 32800,
    "harga_minyak_goreng": 21560,
    "harga_gula": 14400,
    "harga_telur": 31100,
    "harga_bbm": 10700,
    "harga_listrik": 1280,
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
      "kekuatan_lunak": 15,
      "kekuatan_keras": 2,
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
    "pendidikan": 35,
    "keamanan": 2,
    "keuangan": 13,
    "lingkungan": 60
  }
};
