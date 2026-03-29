import { CountryData } from "@/app/database/data/types";
import { samoa_amerika_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/oceania/189_samoa_amerika";
import { samoa_amerika_armada } from "../../modules/2_militer/2_armada_militer/oceania/189_samoa_amerika";
import { samoa_amerika_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/oceania/189_samoa_amerika";
import { samoa_amerika_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/oceania/189_samoa_amerika";
import { samoa_amerika_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/oceania/189_samoa_amerika";
import { samoa_amerika_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/oceania/189_samoa_amerika";
import { samoa_amerika_listrik } from "../../modules/1_ekonomi/2_kelistrikan/oceania/189_samoa_amerika";
import { samoa_amerika_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/oceania/189_samoa_amerika";
import { samoa_amerika_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/oceania/189_samoa_amerika";
import { samoa_amerika_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/oceania/189_samoa_amerika";
import { samoa_amerika_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/oceania/189_samoa_amerika";
import { samoa_amerika_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/oceania/189_samoa_amerika";
import { samoa_amerika_profile } from "../../modules/0_profiles/oceania/189_samoa_amerika";
import { samoa_amerika_strategis } from "../../modules/2_militer/3_militer_strategis/oceania/189_samoa_amerika";

export const samoa_amerika: CountryData = {
  ...samoa_amerika_profile,
  "sektor_listrik": samoa_amerika_listrik,
  "infrastruktur": samoa_amerika_infrastruktur,
  "sektor_ekstraksi": samoa_amerika_ekstraksi,
  "sektor_manufaktur": samoa_amerika_manufaktur,
  "sektor_peternakan": samoa_amerika_peternakan,
  "sektor_agrikultur": samoa_amerika_agrikultur,
  "sektor_perikanan": samoa_amerika_perikanan,
  "sektor_olahan_pangan": samoa_amerika_olahan_pangan,
  "sektor_farmasi": samoa_amerika_farmasi,
  "sektor_pertahanan": samoa_amerika_pertahanan,
  "armada_militer": samoa_amerika_armada,
  "militer_strategis": samoa_amerika_strategis,
  "armada_kepolisian": samoa_amerika_kepolisian,
  "pabrik_militer": {
    "pabrik_drone_kamikaze": 0,
    "pabrik_amunisi": 0,
    "pabrik_kendaraan_tempur": 0,
    "pabrik_senjata_berat": 0
  },
  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 11,
      "dasar": 28,
      "menengah": 19,
      "lanjutan": 37,
      "universitas": 19,
      "lembaga_pendidikan": 16,
      "laboratorium": 2,
      "observatorium": 12,
      "pusat_penelitian": 8,
      "pusat_pengembangan": 15,
      "literasi": 51
    },
    "kesehatan": {
      "rumah_sakit_besar": 22,
      "rumah_sakit_kecil": 33,
      "pusat_diagnostik": 40,
      "harapan_hidup": 29,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 16,
      "pengadilan": 28,
      "kejaksaan": 14,
      "pos_polisi": 29,
      "armada_mobil_polisi": 3317,
      "akademi_polisi": 20,
      "indeks_korupsi": 69,
      "indeks_keamanan": 79
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 21,
      "sirkuit_balap": 9,
      "stadion": 24,
      "stadion_internasional": 30
  },
  "un_vote": 24,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 38,
      "kepuasan": 67,
      "pendapatan": 9
    },
    "korporasi": {
      "tarif": 31,
      "kepuasan": 52,
      "pendapatan": 8
    },
    "penghasilan": {
      "tarif": 36,
      "kepuasan": 61,
      "pendapatan": 10
    },
    "bea_cukai": {
      "tarif": 4,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 2,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 8,
      "kepuasan": 93,
      "pendapatan": 2
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 80,
    "gaji_guru": 90,
    "gaji_medis": 80,
    "gaji_militer": 80
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 75
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 22400,
    "harga_daging_sapi": 104100,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 11520,
    "harga_telur": 31100,
    "harga_bbm": 8560,
    "harga_listrik": 2240,
    "harga_air": 7280,
    "harga_obat": 221060,
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
      "kekuatan_lunak": 21,
      "kekuatan_keras": 3,
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
    "kesehatan": 37,
    "pendidikan": 27,
    "keamanan": 18,
    "keuangan": 40,
    "lingkungan": 60
  }
};
