import { CountryData } from "@/app/database/data/types";
import { korea_utara_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/asia/76_korea_utara";
import { korea_utara_armada } from "../../modules/2_militer/2_armada_militer/asia/76_korea_utara";
import { korea_utara_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/asia/76_korea_utara";
import { korea_utara_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/asia/76_korea_utara";
import { korea_utara_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/asia/76_korea_utara";
import { korea_utara_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/asia/76_korea_utara";
import { korea_utara_listrik } from "../../modules/1_ekonomi/2_kelistrikan/asia/76_korea_utara";
import { korea_utara_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/asia/76_korea_utara";
import { korea_utara_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/asia/76_korea_utara";
import { korea_utara_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/asia/76_korea_utara";
import { korea_utara_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/asia/76_korea_utara";
import { korea_utara_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/asia/76_korea_utara";
import { korea_utara_profile } from "../../modules/0_profiles/asia/76_korea_utara";
import { korea_utara_strategis } from "../../modules/2_militer/3_militer_strategis/asia/76_korea_utara";

export const korea_utara: CountryData = {
  ...korea_utara_profile,
  "sektor_listrik": korea_utara_listrik,
  "infrastruktur": korea_utara_infrastruktur,
  "sektor_ekstraksi": korea_utara_ekstraksi,
  "sektor_manufaktur": korea_utara_manufaktur,
  "sektor_peternakan": korea_utara_peternakan,
  "sektor_agrikultur": korea_utara_agrikultur,
  "sektor_perikanan": korea_utara_perikanan,
  "sektor_olahan_pangan": korea_utara_olahan_pangan,
  "sektor_farmasi": korea_utara_farmasi,
  "sektor_pertahanan": korea_utara_pertahanan,
  "armada_militer": korea_utara_armada,
  "militer_strategis": korea_utara_strategis,
  "armada_kepolisian": korea_utara_kepolisian,
  "pabrik_militer": {
    "pabrik_drone_kamikaze": 0,
    "pabrik_amunisi": 0,
    "pabrik_kendaraan_tempur": 0,
    "pabrik_senjata_berat": 0
  },
  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 3,
      "dasar": 6,
      "menengah": 26,
      "lanjutan": 10,
      "universitas": 14,
      "lembaga_pendidikan": 4,
      "laboratorium": 40,
      "observatorium": 25,
      "pusat_penelitian": 23,
      "pusat_pengembangan": 15,
      "literasi": 81
    },
    "kesehatan": {
      "rumah_sakit_besar": 7,
      "rumah_sakit_kecil": 19,
      "pusat_diagnostik": 32,
      "harapan_hidup": 14,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 2,
      "pengadilan": 3,
      "kejaksaan": 17,
      "pos_polisi": 29,
      "armada_mobil_polisi": 9672,
      "akademi_polisi": 4,
      "indeks_korupsi": 74,
      "indeks_keamanan": 65
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 38,
      "sirkuit_balap": 4,
      "stadion": 15,
      "stadion_internasional": 1
  },
  "un_vote": 56,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 25,
      "kepuasan": 67,
      "pendapatan": 5
    },
    "korporasi": {
      "tarif": 27,
      "kepuasan": 52,
      "pendapatan": 9
    },
    "penghasilan": {
      "tarif": 36,
      "kepuasan": 61,
      "pendapatan": 8
    },
    "bea_cukai": {
      "tarif": 11,
      "kepuasan": 86,
      "pendapatan": 4
    },
    "lingkungan": {
      "tarif": 30,
      "kepuasan": 88,
      "pendapatan": 8
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 3 },
    "lainnya": {
      "tarif": 16,
      "kepuasan": 93,
      "pendapatan": 6
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 70,
    "gaji_guru": 60,
    "gaji_medis": 70,
    "gaji_militer": 60
  },
  "subsidi": {
    "subsidi_energi": 75,
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
    "harga_beras": 16000,
    "harga_daging_sapi": 104100,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 11520,
    "harga_telur": 15550,
    "harga_bbm": 8560,
    "harga_listrik": 1600,
    "harga_air": 4160,
    "harga_obat": 157900,
    "harga_pendidikan": 967800
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
      "kekuatan_keras": 37,
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
    "kesehatan": 3,
    "pendidikan": 1,
    "keamanan": 29,
    "keuangan": 3,
    "lingkungan": 60
  }
};
