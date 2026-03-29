import { CountryData } from "@/app/database/data/types";
import { republik_sudan_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/afrika/39_republik_sudan";
import { republik_sudan_armada } from "../../modules/2_militer/2_armada_militer/afrika/39_republik_sudan";
import { republik_sudan_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/afrika/39_republik_sudan";
import { republik_sudan_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/afrika/39_republik_sudan";
import { republik_sudan_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/afrika/39_republik_sudan";
import { republik_sudan_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/afrika/39_republik_sudan";
import { republik_sudan_listrik } from "../../modules/1_ekonomi/2_kelistrikan/afrika/39_republik_sudan";
import { republik_sudan_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/afrika/39_republik_sudan";
import { republik_sudan_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/afrika/39_republik_sudan";
import { republik_sudan_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/afrika/39_republik_sudan";
import { republik_sudan_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/afrika/39_republik_sudan";
import { republik_sudan_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/afrika/39_republik_sudan";
import { republik_sudan_profile } from "../../modules/0_profiles/afrika/39_republik_sudan";
import { republik_sudan_strategis } from "../../modules/2_militer/3_militer_strategis/afrika/39_republik_sudan";

export const republik_sudan: CountryData = {
  ...republik_sudan_profile,
  "sektor_listrik": republik_sudan_listrik,
  "infrastruktur": republik_sudan_infrastruktur,
  "sektor_ekstraksi": republik_sudan_ekstraksi,
  "sektor_manufaktur": republik_sudan_manufaktur,
  "sektor_peternakan": republik_sudan_peternakan,
  "sektor_agrikultur": republik_sudan_agrikultur,
  "sektor_perikanan": republik_sudan_perikanan,
  "sektor_olahan_pangan": republik_sudan_olahan_pangan,
  "sektor_farmasi": republik_sudan_farmasi,
  "sektor_pertahanan": republik_sudan_pertahanan,
  "armada_militer": republik_sudan_armada,
  "militer_strategis": republik_sudan_strategis,
  "armada_kepolisian": republik_sudan_kepolisian,
  "pabrik_militer": {
    "pabrik_drone_kamikaze": 0,
    "pabrik_amunisi": 0,
    "pabrik_kendaraan_tempur": 0,
    "pabrik_senjata_berat": 0
  },
  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 36,
      "dasar": 33,
      "menengah": 12,
      "lanjutan": 27,
      "universitas": 25,
      "lembaga_pendidikan": 1,
      "laboratorium": 14,
      "observatorium": 4,
      "pusat_penelitian": 25,
      "pusat_pengembangan": 32,
      "literasi": 90
  },
    "kesehatan": {
      "rumah_sakit_besar": 3,
      "rumah_sakit_kecil": 11,
      "pusat_diagnostik": 21,
      "harapan_hidup": 8,
      "indeks_kesehatan": 85
  },
    "hukum": {
      "pusat_bantuan_hukum": 14,
      "pengadilan": 22,
      "kejaksaan": 34,
      "pos_polisi": 14,
      "armada_mobil_polisi": 5216,
      "akademi_polisi": 31,
      "indeks_korupsi": 92,
      "indeks_keamanan": 68
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 2,
      "sirkuit_balap": 15,
      "stadion": 26,
      "stadion_internasional": 39
  },
  "un_vote": 95,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 21,
      "kepuasan": 67,
      "pendapatan": 5
    },
    "korporasi": {
      "tarif": 13,
      "kepuasan": 52,
      "pendapatan": 5
    },
    "penghasilan": {
      "tarif": 5,
      "kepuasan": 61,
      "pendapatan": 1
    },
    "bea_cukai": {
      "tarif": 38,
      "kepuasan": 86,
      "pendapatan": 22
    },
    "lingkungan": {
      "tarif": 2,
      "kepuasan": 88,
      "pendapatan": 1
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 2 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 4 },
    "lainnya": {
      "tarif": 29,
      "kepuasan": 93,
      "pendapatan": 8
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 30,
    "gaji_guru": 50,
    "gaji_medis": 50,
    "gaji_militer": 50
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 25,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 8000,
    "harga_daging_sapi": 104100,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 24880,
    "harga_bbm": 10700,
    "harga_listrik": 2240,
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
      "kekuatan_keras": 34,
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
    "kesehatan": 30,
    "pendidikan": 4,
    "keamanan": 9,
    "keuangan": 20,
    "lingkungan": 60
  }
};
