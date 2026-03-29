import { CountryData } from "@/app/database/data/types";
import { republik_zambia_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/afrika/42_republik_zambia";
import { republik_zambia_armada } from "../../modules/2_militer/2_armada_militer/afrika/42_republik_zambia";
import { republik_zambia_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/afrika/42_republik_zambia";
import { republik_zambia_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/afrika/42_republik_zambia";
import { republik_zambia_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/afrika/42_republik_zambia";
import { republik_zambia_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/afrika/42_republik_zambia";
import { republik_zambia_listrik } from "../../modules/1_ekonomi/2_kelistrikan/afrika/42_republik_zambia";
import { republik_zambia_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/afrika/42_republik_zambia";
import { republik_zambia_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/afrika/42_republik_zambia";
import { republik_zambia_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/afrika/42_republik_zambia";
import { republik_zambia_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/afrika/42_republik_zambia";
import { republik_zambia_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/afrika/42_republik_zambia";
import { republik_zambia_profile } from "../../modules/0_profiles/afrika/42_republik_zambia";
import { republik_zambia_strategis } from "../../modules/2_militer/3_militer_strategis/afrika/42_republik_zambia";

export const republik_zambia: CountryData = {
  ...republik_zambia_profile,
  "sektor_listrik": republik_zambia_listrik,
  "infrastruktur": republik_zambia_infrastruktur,
  "sektor_ekstraksi": republik_zambia_ekstraksi,
  "sektor_manufaktur": republik_zambia_manufaktur,
  "sektor_peternakan": republik_zambia_peternakan,
  "sektor_agrikultur": republik_zambia_agrikultur,
  "sektor_perikanan": republik_zambia_perikanan,
  "sektor_olahan_pangan": republik_zambia_olahan_pangan,
  "sektor_farmasi": republik_zambia_farmasi,
  "sektor_pertahanan": republik_zambia_pertahanan,
  "armada_militer": republik_zambia_armada,
  "militer_strategis": republik_zambia_strategis,
  "armada_kepolisian": republik_zambia_kepolisian,
  "pabrik_militer": {
    "pabrik_drone_kamikaze": 0,
    "pabrik_amunisi": 0,
    "pabrik_kendaraan_tempur": 0,
    "pabrik_senjata_berat": 0
  },
  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 23,
      "dasar": 18,
      "menengah": 17,
      "lanjutan": 3,
      "universitas": 23,
      "lembaga_pendidikan": 1,
      "laboratorium": 18,
      "observatorium": 24,
      "pusat_penelitian": 38,
      "pusat_pengembangan": 36,
      "literasi": 69
  },
    "kesehatan": {
      "rumah_sakit_besar": 36,
      "rumah_sakit_kecil": 9,
      "pusat_diagnostik": 18,
      "harapan_hidup": 24,
      "indeks_kesehatan": 85
  },
    "hukum": {
      "pusat_bantuan_hukum": 40,
      "pengadilan": 17,
      "kejaksaan": 33,
      "pos_polisi": 12,
      "armada_mobil_polisi": 6474,
      "akademi_polisi": 31,
      "indeks_korupsi": 70,
      "indeks_keamanan": 88
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 12,
      "sirkuit_balap": 15,
      "stadion": 23,
      "stadion_internasional": 24
  },
  "un_vote": 25,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 20,
      "kepuasan": 67,
      "pendapatan": 12
    },
    "korporasi": {
      "tarif": 32,
      "kepuasan": 52,
      "pendapatan": 15
    },
    "penghasilan": {
      "tarif": 11,
      "kepuasan": 61,
      "pendapatan": 3
    },
    "bea_cukai": {
      "tarif": 24,
      "kepuasan": 86,
      "pendapatan": 10
    },
    "lingkungan": {
      "tarif": 22,
      "kepuasan": 88,
      "pendapatan": 10
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 2 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 5 },
    "lainnya": {
      "tarif": 19,
      "kepuasan": 93,
      "pendapatan": 8
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 50,
    "gaji_guru": 40,
    "gaji_medis": 40,
    "gaji_militer": 50
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 25,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 25,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12800,
    "harga_daging_sapi": 208200,
    "harga_ayam": 82000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 28800,
    "harga_telur": 24880,
    "harga_bbm": 14980,
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
      "kekuatan_lunak": 1,
      "kekuatan_keras": 13,
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
    "kesehatan": 38,
    "pendidikan": 14,
    "keamanan": 32,
    "keuangan": 31,
    "lingkungan": 60
  }
};
