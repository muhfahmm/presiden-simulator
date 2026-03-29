import { CountryData } from "@/app/database/data/types";
import { kuwait_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/asia/77_kuwait";
import { kuwait_armada } from "../../modules/2_militer/2_armada_militer/asia/77_kuwait";
import { kuwait_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/asia/77_kuwait";
import { kuwait_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/asia/77_kuwait";
import { kuwait_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/asia/77_kuwait";
import { kuwait_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/asia/77_kuwait";
import { kuwait_listrik } from "../../modules/1_ekonomi/2_kelistrikan/asia/77_kuwait";
import { kuwait_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/asia/77_kuwait";
import { kuwait_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/asia/77_kuwait";
import { kuwait_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/asia/77_kuwait";
import { kuwait_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/asia/77_kuwait";
import { kuwait_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/asia/77_kuwait";
import { kuwait_profile } from "../../modules/0_profiles/asia/77_kuwait";
import { kuwait_strategis } from "../../modules/2_militer/3_militer_strategis/asia/77_kuwait";

export const kuwait: CountryData = {
  ...kuwait_profile,
  "sektor_listrik": kuwait_listrik,
  "infrastruktur": kuwait_infrastruktur,
  "sektor_ekstraksi": kuwait_ekstraksi,
  "sektor_manufaktur": kuwait_manufaktur,
  "sektor_peternakan": kuwait_peternakan,
  "sektor_agrikultur": kuwait_agrikultur,
  "sektor_perikanan": kuwait_perikanan,
  "sektor_olahan_pangan": kuwait_olahan_pangan,
  "sektor_farmasi": kuwait_farmasi,
  "sektor_pertahanan": kuwait_pertahanan,
  "armada_militer": kuwait_armada,
  "militer_strategis": kuwait_strategis,
  "armada_kepolisian": kuwait_kepolisian,
  "pabrik_militer": {
    "pabrik_drone_kamikaze": 0,
    "pabrik_amunisi": 0,
    "pabrik_kendaraan_tempur": 0,
    "pabrik_senjata_berat": 0
  },
  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 20,
      "dasar": 14,
      "menengah": 25,
      "lanjutan": 22,
      "universitas": 36,
      "lembaga_pendidikan": 37,
      "laboratorium": 36,
      "observatorium": 19,
      "pusat_penelitian": 22,
      "pusat_pengembangan": 27,
      "literasi": 55
    },
    "kesehatan": {
      "rumah_sakit_besar": 15,
      "rumah_sakit_kecil": 23,
      "pusat_diagnostik": 21,
      "harapan_hidup": 24,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 26,
      "pengadilan": 19,
      "kejaksaan": 18,
      "pos_polisi": 32,
      "armada_mobil_polisi": 8824,
      "akademi_polisi": 32,
      "indeks_korupsi": 72,
      "indeks_keamanan": 68
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 17,
      "sirkuit_balap": 19,
      "stadion": 28,
      "stadion_internasional": 9
  },
  "un_vote": 157,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 19,
      "kepuasan": 67,
      "pendapatan": 52
    },
    "korporasi": {
      "tarif": 23,
      "kepuasan": 52,
      "pendapatan": 58
    },
    "penghasilan": {
      "tarif": 21,
      "kepuasan": 61,
      "pendapatan": 70
    },
    "bea_cukai": {
      "tarif": 13,
      "kepuasan": 86,
      "pendapatan": 55
    },
    "lingkungan": {
      "tarif": 26,
      "kepuasan": 88,
      "pendapatan": 44
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 8 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 23 },
    "lainnya": {
      "tarif": 6,
      "kepuasan": 93,
      "pendapatan": 24
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 50,
    "gaji_guru": 70,
    "gaji_medis": 80,
    "gaji_militer": 60
  },
  "subsidi": {
    "subsidi_energi": 75,
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
    "harga_daging_sapi": 145740,
    "harga_ayam": 57400,
    "harga_minyak_goreng": 12320,
    "harga_gula": 11520,
    "harga_telur": 31100,
    "harga_bbm": 10700,
    "harga_listrik": 1600,
    "harga_air": 5200,
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
      "kekuatan_lunak": 36,
      "kekuatan_keras": 6,
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
    "kesehatan": 21,
    "pendidikan": 17,
    "keamanan": 24,
    "keuangan": 25,
    "lingkungan": 60
  }
};
