import { CountryData } from "@/app/database/data/types";
import { seychelles_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/afrika/47_seychelles";
import { seychelles_armada } from "../../modules/2_militer/2_armada_militer/afrika/47_seychelles";
import { seychelles_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/afrika/47_seychelles";
import { seychelles_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/afrika/47_seychelles";
import { seychelles_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/afrika/47_seychelles";
import { seychelles_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/afrika/47_seychelles";
import { seychelles_listrik } from "../../modules/1_ekonomi/2_kelistrikan/afrika/47_seychelles";
import { seychelles_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/afrika/47_seychelles";
import { seychelles_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/afrika/47_seychelles";
import { seychelles_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/afrika/47_seychelles";
import { seychelles_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/afrika/47_seychelles";
import { seychelles_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/afrika/47_seychelles";
import { seychelles_profile } from "../../modules/0_profiles/afrika/47_seychelles";
import { seychelles_strategis } from "../../modules/2_militer/3_militer_strategis/afrika/47_seychelles";

export const seychelles: CountryData = {
  ...seychelles_profile,
  "sektor_listrik": seychelles_listrik,
  "infrastruktur": seychelles_infrastruktur,
  "sektor_ekstraksi": seychelles_ekstraksi,
  "sektor_manufaktur": seychelles_manufaktur,
  "sektor_peternakan": seychelles_peternakan,
  "sektor_agrikultur": seychelles_agrikultur,
  "sektor_perikanan": seychelles_perikanan,
  "sektor_olahan_pangan": seychelles_olahan_pangan,
  "sektor_farmasi": seychelles_farmasi,
  "sektor_pertahanan": seychelles_pertahanan,
  "armada_militer": seychelles_armada,
  "militer_strategis": seychelles_strategis,
  "armada_kepolisian": seychelles_kepolisian,
  "pabrik_militer": {
    "pabrik_drone_kamikaze": 0,
    "pabrik_amunisi": 0,
    "pabrik_kendaraan_tempur": 0,
    "pabrik_senjata_berat": 0
  },
  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 9,
      "dasar": 8,
      "menengah": 29,
      "lanjutan": 36,
      "universitas": 7,
      "lembaga_pendidikan": 28,
      "laboratorium": 27,
      "observatorium": 27,
      "pusat_penelitian": 39,
      "pusat_pengembangan": 25,
      "literasi": 84
  },
    "kesehatan": {
      "rumah_sakit_besar": 26,
      "rumah_sakit_kecil": 31,
      "pusat_diagnostik": 23,
      "harapan_hidup": 31,
      "indeks_kesehatan": 85
  },
    "hukum": {
      "pusat_bantuan_hukum": 12,
      "pengadilan": 4,
      "kejaksaan": 36,
      "pos_polisi": 33,
      "armada_mobil_polisi": 7433,
      "akademi_polisi": 12,
      "indeks_korupsi": 87,
      "indeks_keamanan": 73
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 13,
      "sirkuit_balap": 22,
      "stadion": 39,
      "stadion_internasional": 19
  },
  "un_vote": 6,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 9,
      "kepuasan": 67,
      "pendapatan": 0
    },
    "korporasi": {
      "tarif": 6,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 27,
      "kepuasan": 61,
      "pendapatan": 0
    },
    "bea_cukai": {
      "tarif": 31,
      "kepuasan": 86,
      "pendapatan": 1
    },
    "lingkungan": {
      "tarif": 36,
      "kepuasan": 88,
      "pendapatan": 1
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 17,
      "kepuasan": 93,
      "pendapatan": 0
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 50,
    "gaji_guru": 50,
    "gaji_medis": 50,
    "gaji_militer": 40
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 25,
    "subsidi_perumahan": 0
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 22400,
    "harga_daging_sapi": 104100,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 30800,
    "harga_gula": 20160,
    "harga_telur": 31100,
    "harga_bbm": 10700,
    "harga_listrik": 1600,
    "harga_air": 5200,
    "harga_obat": 126320,
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
      "kekuatan_lunak": 2,
      "kekuatan_keras": 27,
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
    "pendidikan": 23,
    "keamanan": 10,
    "keuangan": 27,
    "lingkungan": 60
  }
};
