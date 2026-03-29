import { CountryData } from "@/app/database/data/types";
import { ekuador_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/sa/199_ekuador";
import { ekuador_armada } from "../../modules/2_militer/2_armada_militer/sa/199_ekuador";
import { ekuador_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/sa/199_ekuador";
import { ekuador_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/sa/199_ekuador";
import { ekuador_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/sa/199_ekuador";
import { ekuador_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/sa/199_ekuador";
import { ekuador_listrik } from "../../modules/1_ekonomi/2_kelistrikan/sa/199_ekuador";
import { ekuador_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/sa/199_ekuador";
import { ekuador_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/sa/199_ekuador";
import { ekuador_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/sa/199_ekuador";
import { ekuador_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/sa/199_ekuador";
import { ekuador_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/sa/199_ekuador";
import { ekuador_profile } from "../../modules/0_profiles/sa/199_ekuador";
import { ekuador_strategis } from "../../modules/2_militer/3_militer_strategis/sa/199_ekuador";

export const ekuador: CountryData = {
  ...ekuador_profile,
  "sektor_listrik": ekuador_listrik,
  "infrastruktur": ekuador_infrastruktur,
  "sektor_ekstraksi": ekuador_ekstraksi,
  "sektor_manufaktur": ekuador_manufaktur,
  "sektor_peternakan": ekuador_peternakan,
  "sektor_agrikultur": ekuador_agrikultur,
  "sektor_perikanan": ekuador_perikanan,
  "sektor_olahan_pangan": ekuador_olahan_pangan,
  "sektor_farmasi": ekuador_farmasi,
  "sektor_pertahanan": ekuador_pertahanan,
  "armada_militer": ekuador_armada,
  "militer_strategis": ekuador_strategis,
  "armada_kepolisian": ekuador_kepolisian,
  "pabrik_militer": {
    "pabrik_drone_kamikaze": 0,
    "pabrik_amunisi": 0,
    "pabrik_kendaraan_tempur": 0,
    "pabrik_senjata_berat": 0
  },
  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 12,
      "dasar": 5,
      "menengah": 37,
      "lanjutan": 14,
      "universitas": 30,
      "lembaga_pendidikan": 13,
      "laboratorium": 27,
      "observatorium": 9,
      "pusat_penelitian": 12,
      "pusat_pengembangan": 26,
      "literasi": 60
    },
    "kesehatan": {
      "rumah_sakit_besar": 33,
      "rumah_sakit_kecil": 1,
      "pusat_diagnostik": 34,
      "harapan_hidup": 2,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 12,
      "pengadilan": 2,
      "kejaksaan": 6,
      "pos_polisi": 29,
      "armada_mobil_polisi": 4812,
      "akademi_polisi": 24,
      "indeks_korupsi": 90,
      "indeks_keamanan": 59
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 14,
      "sirkuit_balap": 14,
      "stadion": 9,
      "stadion_internasional": 27
  },
  "un_vote": 32,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 25,
      "kepuasan": 67,
      "pendapatan": 28
    },
    "korporasi": {
      "tarif": 30,
      "kepuasan": 52,
      "pendapatan": 56
    },
    "penghasilan": {
      "tarif": 40,
      "kepuasan": 61,
      "pendapatan": 61
    },
    "bea_cukai": {
      "tarif": 28,
      "kepuasan": 86,
      "pendapatan": 91
    },
    "lingkungan": {
      "tarif": 28,
      "kepuasan": 88,
      "pendapatan": 34
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 6 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 17 },
    "lainnya": {
      "tarif": 28,
      "kepuasan": 93,
      "pendapatan": 83
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 60,
    "gaji_guru": 60,
    "gaji_medis": 70,
    "gaji_militer": 50
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 145740,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 12320,
    "harga_gula": 7200,
    "harga_telur": 24880,
    "harga_bbm": 10700,
    "harga_listrik": 2240,
    "harga_air": 7280,
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
      "kekuatan_lunak": 3,
      "kekuatan_keras": 4,
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
    "kesehatan": 17,
    "pendidikan": 40,
    "keamanan": 3,
    "keuangan": 22,
    "lingkungan": 60
  }
};
