import { CountryData } from "@/app/database/data/types";
import { paraguay_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/sa/203_paraguay";
import { paraguay_armada } from "../../modules/2_militer/2_armada_militer/sa/203_paraguay";
import { paraguay_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/sa/203_paraguay";
import { paraguay_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/sa/203_paraguay";
import { paraguay_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/sa/203_paraguay";
import { paraguay_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/sa/203_paraguay";
import { paraguay_listrik } from "../../modules/1_ekonomi/2_kelistrikan/sa/203_paraguay";
import { paraguay_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/sa/203_paraguay";
import { paraguay_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/sa/203_paraguay";
import { paraguay_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/sa/203_paraguay";
import { paraguay_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/sa/203_paraguay";
import { paraguay_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/sa/203_paraguay";
import { paraguay_profile } from "../../modules/0_profiles/sa/203_paraguay";
import { paraguay_strategis } from "../../modules/2_militer/3_militer_strategis/sa/203_paraguay";

export const paraguay: CountryData = {
  ...paraguay_profile,
  "sektor_listrik": paraguay_listrik,
  "infrastruktur": paraguay_infrastruktur,
  "sektor_ekstraksi": paraguay_ekstraksi,
  "sektor_manufaktur": paraguay_manufaktur,
  "sektor_peternakan": paraguay_peternakan,
  "sektor_agrikultur": paraguay_agrikultur,
  "sektor_perikanan": paraguay_perikanan,
  "sektor_olahan_pangan": paraguay_olahan_pangan,
  "sektor_farmasi": paraguay_farmasi,
  "sektor_pertahanan": paraguay_pertahanan,
  "armada_militer": paraguay_armada,
  "militer_strategis": paraguay_strategis,
  "armada_kepolisian": paraguay_kepolisian,
  "pabrik_militer": {
    "pabrik_drone_kamikaze": 0,
    "pabrik_amunisi": 0,
    "pabrik_kendaraan_tempur": 0,
    "pabrik_senjata_berat": 0
  },
  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 1,
      "dasar": 7,
      "menengah": 15,
      "lanjutan": 4,
      "universitas": 26,
      "lembaga_pendidikan": 25,
      "laboratorium": 14,
      "observatorium": 30,
      "pusat_penelitian": 11,
      "pusat_pengembangan": 13,
      "literasi": 81
    },
    "kesehatan": {
      "rumah_sakit_besar": 37,
      "rumah_sakit_kecil": 14,
      "pusat_diagnostik": 23,
      "harapan_hidup": 18,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 6,
      "pengadilan": 24,
      "kejaksaan": 27,
      "pos_polisi": 12,
      "armada_mobil_polisi": 8579,
      "akademi_polisi": 39,
      "indeks_korupsi": 82,
      "indeks_keamanan": 72
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 33,
      "sirkuit_balap": 32,
      "stadion": 24,
      "stadion_internasional": 16
  },
  "un_vote": 71,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 14,
      "kepuasan": 67,
      "pendapatan": 12
    },
    "korporasi": {
      "tarif": 20,
      "kepuasan": 52,
      "pendapatan": 12
    },
    "penghasilan": {
      "tarif": 37,
      "kepuasan": 61,
      "pendapatan": 30
    },
    "bea_cukai": {
      "tarif": 8,
      "kepuasan": 86,
      "pendapatan": 3
    },
    "lingkungan": {
      "tarif": 25,
      "kepuasan": 88,
      "pendapatan": 14
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 3 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 7 },
    "lainnya": {
      "tarif": 36,
      "kepuasan": 93,
      "pendapatan": 29
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 70,
    "gaji_guru": 70,
    "gaji_medis": 70,
    "gaji_militer": 50
  },
  "subsidi": {
    "subsidi_energi": 75,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 75,
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
    "harga_ayam": 82000,
    "harga_minyak_goreng": 12320,
    "harga_gula": 11520,
    "harga_telur": 43540,
    "harga_bbm": 10700,
    "harga_listrik": 2240,
    "harga_air": 4160,
    "harga_obat": 221060,
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
      "kekuatan_lunak": 17,
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
    "kesehatan": 40,
    "pendidikan": 7,
    "keamanan": 27,
    "keuangan": 4,
    "lingkungan": 60
  }
};
