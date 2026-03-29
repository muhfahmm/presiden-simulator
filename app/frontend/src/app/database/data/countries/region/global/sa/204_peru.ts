import { CountryData } from "@/app/database/data/types";
import { peru_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/sa/204_peru";
import { peru_armada } from "../../modules/2_militer/2_armada_militer/sa/204_peru";
import { peru_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/sa/204_peru";
import { peru_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/sa/204_peru";
import { peru_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/sa/204_peru";
import { peru_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/sa/204_peru";
import { peru_listrik } from "../../modules/1_ekonomi/2_kelistrikan/sa/204_peru";
import { peru_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/sa/204_peru";
import { peru_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/sa/204_peru";
import { peru_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/sa/204_peru";
import { peru_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/sa/204_peru";
import { peru_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/sa/204_peru";
import { peru_profile } from "../../modules/0_profiles/sa/204_peru";
import { peru_strategis } from "../../modules/2_militer/3_militer_strategis/sa/204_peru";

export const peru: CountryData = {
  ...peru_profile,
  "sektor_listrik": peru_listrik,
  "infrastruktur": peru_infrastruktur,
  "sektor_ekstraksi": peru_ekstraksi,
  "sektor_manufaktur": peru_manufaktur,
  "sektor_peternakan": peru_peternakan,
  "sektor_agrikultur": peru_agrikultur,
  "sektor_perikanan": peru_perikanan,
  "sektor_olahan_pangan": peru_olahan_pangan,
  "sektor_farmasi": peru_farmasi,
  "sektor_pertahanan": peru_pertahanan,
  "armada_militer": peru_armada,
  "militer_strategis": peru_strategis,
  "armada_kepolisian": peru_kepolisian,
  "pabrik_militer": {
    "pabrik_drone_kamikaze": 0,
    "pabrik_amunisi": 0,
    "pabrik_kendaraan_tempur": 0,
    "pabrik_senjata_berat": 0
  },
  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 16,
      "dasar": 32,
      "menengah": 29,
      "lanjutan": 27,
      "universitas": 21,
      "lembaga_pendidikan": 15,
      "laboratorium": 29,
      "observatorium": 16,
      "pusat_penelitian": 28,
      "pusat_pengembangan": 13,
      "literasi": 59
    },
    "kesehatan": {
      "rumah_sakit_besar": 17,
      "rumah_sakit_kecil": 32,
      "pusat_diagnostik": 36,
      "harapan_hidup": 31,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 3,
      "pengadilan": 34,
      "kejaksaan": 26,
      "pos_polisi": 20,
      "armada_mobil_polisi": 8042,
      "akademi_polisi": 25,
      "indeks_korupsi": 91,
      "indeks_keamanan": 89
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 27,
      "sirkuit_balap": 30,
      "stadion": 2,
      "stadion_internasional": 3
  },
  "un_vote": 41,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 33,
      "kepuasan": 67,
      "pendapatan": 196
    },
    "korporasi": {
      "tarif": 14,
      "kepuasan": 52,
      "pendapatan": 100
    },
    "penghasilan": {
      "tarif": 29,
      "kepuasan": 61,
      "pendapatan": 138
    },
    "bea_cukai": {
      "tarif": 30,
      "kepuasan": 86,
      "pendapatan": 218
    },
    "lingkungan": {
      "tarif": 24,
      "kepuasan": 88,
      "pendapatan": 74
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 13 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 38 },
    "lainnya": {
      "tarif": 1,
      "kepuasan": 93,
      "pendapatan": 6
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
    "subsidi_energi": 50,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12800,
    "harga_daging_sapi": 83280,
    "harga_ayam": 32800,
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 43540,
    "harga_bbm": 5350,
    "harga_listrik": 1600,
    "harga_air": 4160,
    "harga_obat": 126320,
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
      "kekuatan_lunak": 2,
      "kekuatan_keras": 11,
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
    "kesehatan": 19,
    "pendidikan": 28,
    "keamanan": 11,
    "keuangan": 11,
    "lingkungan": 60
  }
};
