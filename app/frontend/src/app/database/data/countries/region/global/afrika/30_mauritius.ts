import { CountryData } from "@/app/database/data/types";
import { mauritius_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/afrika/30_mauritius";
import { mauritius_armada } from "../../modules/2_militer/2_armada_militer/afrika/30_mauritius";
import { mauritius_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/afrika/30_mauritius";
import { mauritius_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/afrika/30_mauritius";
import { mauritius_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/afrika/30_mauritius";
import { mauritius_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/afrika/30_mauritius";
import { mauritius_listrik } from "../../modules/1_ekonomi/2_kelistrikan/afrika/30_mauritius";
import { mauritius_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/afrika/30_mauritius";
import { mauritius_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/afrika/30_mauritius";
import { mauritius_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/afrika/30_mauritius";
import { mauritius_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/afrika/30_mauritius";
import { mauritius_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/afrika/30_mauritius";
import { mauritius_profile } from "../../modules/0_profiles/afrika/30_mauritius";
import { mauritius_strategis } from "../../modules/2_militer/3_militer_strategis/afrika/30_mauritius";

export const mauritius: CountryData = {
  ...mauritius_profile,
  "sektor_listrik": mauritius_listrik,
  "infrastruktur": mauritius_infrastruktur,
  "sektor_ekstraksi": mauritius_ekstraksi,
  "sektor_manufaktur": mauritius_manufaktur,
  "sektor_peternakan": mauritius_peternakan,
  "sektor_agrikultur": mauritius_agrikultur,
  "sektor_perikanan": mauritius_perikanan,
  "sektor_olahan_pangan": mauritius_olahan_pangan,
  "sektor_farmasi": mauritius_farmasi,
  "sektor_pertahanan": mauritius_pertahanan,
  "armada_militer": mauritius_armada,
  "militer_strategis": mauritius_strategis,
  "armada_kepolisian": mauritius_kepolisian,
  "pabrik_militer": {
    "pabrik_drone_kamikaze": 0,
    "pabrik_amunisi": 0,
    "pabrik_kendaraan_tempur": 0,
    "pabrik_senjata_berat": 0
  },
  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 22,
      "dasar": 14,
      "menengah": 17,
      "lanjutan": 38,
      "universitas": 2,
      "lembaga_pendidikan": 13,
      "laboratorium": 1,
      "observatorium": 25,
      "pusat_penelitian": 16,
      "pusat_pengembangan": 36,
      "literasi": 95
  },
    "kesehatan": {
      "rumah_sakit_besar": 26,
      "rumah_sakit_kecil": 17,
      "pusat_diagnostik": 10,
      "harapan_hidup": 11,
      "indeks_kesehatan": 85
  },
    "hukum": {
      "pusat_bantuan_hukum": 35,
      "pengadilan": 27,
      "kejaksaan": 23,
      "pos_polisi": 22,
      "armada_mobil_polisi": 1046,
      "akademi_polisi": 37,
      "indeks_korupsi": 72,
      "indeks_keamanan": 83
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 14,
      "sirkuit_balap": 3,
      "stadion": 33,
      "stadion_internasional": 15
  },
  "un_vote": 69,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 22,
      "kepuasan": 67,
      "pendapatan": 5
    },
    "korporasi": {
      "tarif": 8,
      "kepuasan": 52,
      "pendapatan": 2
    },
    "penghasilan": {
      "tarif": 22,
      "kepuasan": 61,
      "pendapatan": 3
    },
    "bea_cukai": {
      "tarif": 14,
      "kepuasan": 86,
      "pendapatan": 2
    },
    "lingkungan": {
      "tarif": 38,
      "kepuasan": 88,
      "pendapatan": 10
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 3 },
    "lainnya": {
      "tarif": 22,
      "kepuasan": 93,
      "pendapatan": 7
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 30,
    "gaji_guru": 50,
    "gaji_medis": 40,
    "gaji_militer": 50
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 32000,
    "harga_daging_sapi": 208200,
    "harga_ayam": 32800,
    "harga_minyak_goreng": 30800,
    "harga_gula": 28800,
    "harga_telur": 62200,
    "harga_bbm": 14980,
    "harga_listrik": 1600,
    "harga_air": 5200,
    "harga_obat": 315800,
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
      "kekuatan_lunak": 13,
      "kekuatan_keras": 33,
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
    "kesehatan": 14,
    "pendidikan": 39,
    "keamanan": 11,
    "keuangan": 37,
    "lingkungan": 60
  }
};
