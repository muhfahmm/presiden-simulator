import { CountryData } from "@/app/database/data/types";
import { yordania_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/asia/102_yordania";
import { yordania_armada } from "../../modules/2_militer/2_armada_militer/asia/102_yordania";
import { yordania_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/asia/102_yordania";
import { yordania_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/asia/102_yordania";
import { yordania_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/asia/102_yordania";
import { yordania_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/asia/102_yordania";
import { yordania_listrik } from "../../modules/1_ekonomi/2_kelistrikan/asia/102_yordania";
import { yordania_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/asia/102_yordania";
import { yordania_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/asia/102_yordania";
import { yordania_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/asia/102_yordania";
import { yordania_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/asia/102_yordania";
import { yordania_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/asia/102_yordania";
import { yordania_profile } from "../../modules/0_profiles/asia/102_yordania";
import { yordania_strategis } from "../../modules/2_militer/3_militer_strategis/asia/102_yordania";

export const yordania: CountryData = {
  ...yordania_profile,
  "sektor_listrik": yordania_listrik,
  "infrastruktur": yordania_infrastruktur,
  "sektor_ekstraksi": yordania_ekstraksi,
  "sektor_manufaktur": yordania_manufaktur,
  "sektor_peternakan": yordania_peternakan,
  "sektor_agrikultur": yordania_agrikultur,
  "sektor_perikanan": yordania_perikanan,
  "sektor_olahan_pangan": yordania_olahan_pangan,
  "sektor_farmasi": yordania_farmasi,
  "sektor_pertahanan": yordania_pertahanan,
  "armada_militer": yordania_armada,
  "militer_strategis": yordania_strategis,
  "armada_kepolisian": yordania_kepolisian,
  "pabrik_militer": {
    "pabrik_drone_kamikaze": 0,
    "pabrik_amunisi": 0,
    "pabrik_kendaraan_tempur": 0,
    "pabrik_senjata_berat": 0
  },
  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 4,
      "dasar": 10,
      "menengah": 27,
      "lanjutan": 36,
      "universitas": 33,
      "lembaga_pendidikan": 23,
      "laboratorium": 29,
      "observatorium": 28,
      "pusat_penelitian": 17,
      "pusat_pengembangan": 34,
      "literasi": 69
    },
    "kesehatan": {
      "rumah_sakit_besar": 37,
      "rumah_sakit_kecil": 4,
      "pusat_diagnostik": 1,
      "harapan_hidup": 17,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 40,
      "pengadilan": 12,
      "kejaksaan": 15,
      "pos_polisi": 8,
      "armada_mobil_polisi": 7967,
      "akademi_polisi": 13,
      "indeks_korupsi": 60,
      "indeks_keamanan": 55
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 40,
      "sirkuit_balap": 15,
      "stadion": 19,
      "stadion_internasional": 11
  },
  "un_vote": 82,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 29,
      "kepuasan": 67,
      "pendapatan": 20
    },
    "korporasi": {
      "tarif": 37,
      "kepuasan": 52,
      "pendapatan": 22
    },
    "penghasilan": {
      "tarif": 36,
      "kepuasan": 61,
      "pendapatan": 25
    },
    "bea_cukai": {
      "tarif": 1,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 21,
      "kepuasan": 88,
      "pendapatan": 26
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 3 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 7 },
    "lainnya": {
      "tarif": 21,
      "kepuasan": 93,
      "pendapatan": 24
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 60,
    "gaji_guru": 60,
    "gaji_medis": 70,
    "gaji_militer": 60
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 208200,
    "harga_ayam": 32800,
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 31100,
    "harga_bbm": 21400,
    "harga_listrik": 1600,
    "harga_air": 5200,
    "harga_obat": 221060,
    "harga_pendidikan": 241950
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
      "kekuatan_lunak": 7,
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
    "kesehatan": 27,
    "pendidikan": 14,
    "keamanan": 28,
    "keuangan": 35,
    "lingkungan": 60
  }
};
