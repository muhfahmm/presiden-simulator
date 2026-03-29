import { CountryData } from "@/app/database/data/types";
import { republik_timor_leste_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/asia/90_republik_timor_leste";
import { republik_timor_leste_armada } from "../../modules/2_militer/2_armada_militer/asia/90_republik_timor_leste";
import { republik_timor_leste_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/asia/90_republik_timor_leste";
import { republik_timor_leste_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/asia/90_republik_timor_leste";
import { republik_timor_leste_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/asia/90_republik_timor_leste";
import { republik_timor_leste_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/asia/90_republik_timor_leste";
import { republik_timor_leste_listrik } from "../../modules/1_ekonomi/2_kelistrikan/asia/90_republik_timor_leste";
import { republik_timor_leste_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/asia/90_republik_timor_leste";
import { republik_timor_leste_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/asia/90_republik_timor_leste";
import { republik_timor_leste_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/asia/90_republik_timor_leste";
import { republik_timor_leste_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/asia/90_republik_timor_leste";
import { republik_timor_leste_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/asia/90_republik_timor_leste";
import { republik_timor_leste_profile } from "../../modules/0_profiles/asia/90_republik_timor_leste";
import { republik_timor_leste_strategis } from "../../modules/2_militer/3_militer_strategis/asia/90_republik_timor_leste";

export const republik_timor_leste: CountryData = {
  ...republik_timor_leste_profile,
  "sektor_listrik": republik_timor_leste_listrik,
  "infrastruktur": republik_timor_leste_infrastruktur,
  "sektor_ekstraksi": republik_timor_leste_ekstraksi,
  "sektor_manufaktur": republik_timor_leste_manufaktur,
  "sektor_peternakan": republik_timor_leste_peternakan,
  "sektor_agrikultur": republik_timor_leste_agrikultur,
  "sektor_perikanan": republik_timor_leste_perikanan,
  "sektor_olahan_pangan": republik_timor_leste_olahan_pangan,
  "sektor_farmasi": republik_timor_leste_farmasi,
  "sektor_pertahanan": republik_timor_leste_pertahanan,
  "armada_militer": republik_timor_leste_armada,
  "militer_strategis": republik_timor_leste_strategis,
  "armada_kepolisian": republik_timor_leste_kepolisian,
  "pabrik_militer": {
    "pabrik_drone_kamikaze": 0,
    "pabrik_amunisi": 0,
    "pabrik_kendaraan_tempur": 0,
    "pabrik_senjata_berat": 0
  },
  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 8,
      "dasar": 7,
      "menengah": 32,
      "lanjutan": 8,
      "universitas": 16,
      "lembaga_pendidikan": 26,
      "laboratorium": 36,
      "observatorium": 8,
      "pusat_penelitian": 13,
      "pusat_pengembangan": 19,
      "literasi": 79
    },
    "kesehatan": {
      "rumah_sakit_besar": 16,
      "rumah_sakit_kecil": 38,
      "pusat_diagnostik": 35,
      "harapan_hidup": 32,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 17,
      "pengadilan": 13,
      "kejaksaan": 20,
      "pos_polisi": 11,
      "armada_mobil_polisi": 4976,
      "akademi_polisi": 4,
      "indeks_korupsi": 93,
      "indeks_keamanan": 90
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 2,
      "sirkuit_balap": 36,
      "stadion": 23,
      "stadion_internasional": 6
  },
  "un_vote": 33,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 21,
      "kepuasan": 67,
      "pendapatan": 0
    },
    "korporasi": {
      "tarif": 3,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 30,
      "kepuasan": 61,
      "pendapatan": 1
    },
    "bea_cukai": {
      "tarif": 16,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 16,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 27,
      "kepuasan": 93,
      "pendapatan": 1
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 60,
    "gaji_guru": 60,
    "gaji_medis": 80,
    "gaji_militer": 60
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 8000,
    "harga_daging_sapi": 104100,
    "harga_ayam": 57400,
    "harga_minyak_goreng": 7700,
    "harga_gula": 11520,
    "harga_telur": 62200,
    "harga_bbm": 21400,
    "harga_listrik": 1600,
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
      "kekuatan_lunak": 29,
      "kekuatan_keras": 27,
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
    "kesehatan": 35,
    "pendidikan": 29,
    "keamanan": 8,
    "keuangan": 29,
    "lingkungan": 60
  }
};
