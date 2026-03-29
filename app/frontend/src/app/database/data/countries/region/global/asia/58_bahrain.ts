import { CountryData } from "@/app/database/data/types";
import { bahrain_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/asia/58_bahrain";
import { bahrain_armada } from "../../modules/2_militer/2_armada_militer/asia/58_bahrain";
import { bahrain_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/asia/58_bahrain";
import { bahrain_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/asia/58_bahrain";
import { bahrain_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/asia/58_bahrain";
import { bahrain_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/asia/58_bahrain";
import { bahrain_listrik } from "../../modules/1_ekonomi/2_kelistrikan/asia/58_bahrain";
import { bahrain_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/asia/58_bahrain";
import { bahrain_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/asia/58_bahrain";
import { bahrain_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/asia/58_bahrain";
import { bahrain_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/asia/58_bahrain";
import { bahrain_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/asia/58_bahrain";
import { bahrain_profile } from "../../modules/0_profiles/asia/58_bahrain";
import { bahrain_strategis } from "../../modules/2_militer/3_militer_strategis/asia/58_bahrain";

export const bahrain: CountryData = {
  ...bahrain_profile,
  "sektor_listrik": bahrain_listrik,
  "infrastruktur": bahrain_infrastruktur,
  "sektor_ekstraksi": bahrain_ekstraksi,
  "sektor_manufaktur": bahrain_manufaktur,
  "sektor_peternakan": bahrain_peternakan,
  "sektor_agrikultur": bahrain_agrikultur,
  "sektor_perikanan": bahrain_perikanan,
  "sektor_olahan_pangan": bahrain_olahan_pangan,
  "sektor_farmasi": bahrain_farmasi,
  "sektor_pertahanan": bahrain_pertahanan,
  "armada_militer": bahrain_armada,
  "militer_strategis": bahrain_strategis,
  "armada_kepolisian": bahrain_kepolisian,
  "pabrik_militer": {
    "pabrik_drone_kamikaze": 0,
    "pabrik_amunisi": 0,
    "pabrik_kendaraan_tempur": 0,
    "pabrik_senjata_berat": 0
  },
  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 27,
      "dasar": 35,
      "menengah": 39,
      "lanjutan": 12,
      "universitas": 24,
      "lembaga_pendidikan": 3,
      "laboratorium": 12,
      "observatorium": 4,
      "pusat_penelitian": 18,
      "pusat_pengembangan": 24,
      "literasi": 61
    },
    "kesehatan": {
      "rumah_sakit_besar": 36,
      "rumah_sakit_kecil": 12,
      "pusat_diagnostik": 7,
      "harapan_hidup": 11,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 35,
      "pengadilan": 20,
      "kejaksaan": 22,
      "pos_polisi": 24,
      "armada_mobil_polisi": 9975,
      "akademi_polisi": 8,
      "indeks_korupsi": 92,
      "indeks_keamanan": 72
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 5,
      "sirkuit_balap": 13,
      "stadion": 4,
      "stadion_internasional": 27
  },
  "un_vote": 96,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 12,
      "kepuasan": 67,
      "pendapatan": 6
    },
    "korporasi": {
      "tarif": 27,
      "kepuasan": 52,
      "pendapatan": 27
    },
    "penghasilan": {
      "tarif": 20,
      "kepuasan": 61,
      "pendapatan": 11
    },
    "bea_cukai": {
      "tarif": 4,
      "kepuasan": 86,
      "pendapatan": 2
    },
    "lingkungan": {
      "tarif": 37,
      "kepuasan": 88,
      "pendapatan": 22
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 3 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 7 },
    "lainnya": {
      "tarif": 26,
      "kepuasan": 93,
      "pendapatan": 31
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 60,
    "gaji_guru": 60,
    "gaji_medis": 80,
    "gaji_militer": 80
  },
  "subsidi": {
    "subsidi_energi": 75,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 22400,
    "harga_daging_sapi": 104100,
    "harga_ayam": 20500,
    "harga_minyak_goreng": 30800,
    "harga_gula": 20160,
    "harga_telur": 31100,
    "harga_bbm": 5350,
    "harga_listrik": 3200,
    "harga_air": 10400,
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
      "kekuatan_lunak": 27,
      "kekuatan_keras": 14,
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
    "pendidikan": 35,
    "keamanan": 22,
    "keuangan": 13,
    "lingkungan": 60
  }
};
