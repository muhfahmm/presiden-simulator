import { CountryData } from "@/app/database/data/types";
import { samoa_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/oceania/188_samoa";
import { samoa_armada } from "../../modules/2_militer/2_armada_militer/oceania/188_samoa";
import { samoa_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/oceania/188_samoa";
import { samoa_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/oceania/188_samoa";
import { samoa_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/oceania/188_samoa";
import { samoa_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/oceania/188_samoa";
import { samoa_listrik } from "../../modules/1_ekonomi/2_kelistrikan/oceania/188_samoa";
import { samoa_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/oceania/188_samoa";
import { samoa_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/oceania/188_samoa";
import { samoa_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/oceania/188_samoa";
import { samoa_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/oceania/188_samoa";
import { samoa_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/oceania/188_samoa";
import { samoa_profile } from "../../modules/0_profiles/oceania/188_samoa";
import { samoa_strategis } from "../../modules/2_militer/3_militer_strategis/oceania/188_samoa";

export const samoa: CountryData = {
  ...samoa_profile,
  "sektor_listrik": samoa_listrik,
  "infrastruktur": samoa_infrastruktur,
  "sektor_ekstraksi": samoa_ekstraksi,
  "sektor_manufaktur": samoa_manufaktur,
  "sektor_peternakan": samoa_peternakan,
  "sektor_agrikultur": samoa_agrikultur,
  "sektor_perikanan": samoa_perikanan,
  "sektor_olahan_pangan": samoa_olahan_pangan,
  "sektor_farmasi": samoa_farmasi,
  "sektor_pertahanan": samoa_pertahanan,
  "armada_militer": samoa_armada,
  "militer_strategis": samoa_strategis,
  "armada_kepolisian": samoa_kepolisian,
  "pabrik_militer": {
    "pabrik_drone_kamikaze": 0,
    "pabrik_amunisi": 0,
    "pabrik_kendaraan_tempur": 0,
    "pabrik_senjata_berat": 0
  },
  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 22,
      "dasar": 12,
      "menengah": 2,
      "lanjutan": 34,
      "universitas": 31,
      "lembaga_pendidikan": 7,
      "laboratorium": 6,
      "observatorium": 18,
      "pusat_penelitian": 5,
      "pusat_pengembangan": 40,
      "literasi": 75
    },
    "kesehatan": {
      "rumah_sakit_besar": 32,
      "rumah_sakit_kecil": 25,
      "pusat_diagnostik": 36,
      "harapan_hidup": 27,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 33,
      "pengadilan": 2,
      "kejaksaan": 9,
      "pos_polisi": 36,
      "armada_mobil_polisi": 5070,
      "akademi_polisi": 20,
      "indeks_korupsi": 83,
      "indeks_keamanan": 71
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 39,
      "sirkuit_balap": 14,
      "stadion": 29,
      "stadion_internasional": 14
  },
  "un_vote": 9,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 3,
      "kepuasan": 67,
      "pendapatan": 0
    },
    "korporasi": {
      "tarif": 29,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 1,
      "kepuasan": 61,
      "pendapatan": 0
    },
    "bea_cukai": {
      "tarif": 27,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 24,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 19,
      "kepuasan": 93,
      "pendapatan": 0
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
    "subsidi_energi": 50,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 8000,
    "harga_daging_sapi": 104100,
    "harga_ayam": 57400,
    "harga_minyak_goreng": 7700,
    "harga_gula": 28800,
    "harga_telur": 24880,
    "harga_bbm": 10700,
    "harga_listrik": 1280,
    "harga_air": 4160,
    "harga_obat": 126320,
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
      "kekuatan_lunak": 2,
      "kekuatan_keras": 35,
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
    "pendidikan": 27,
    "keamanan": 33,
    "keuangan": 8,
    "lingkungan": 60
  }
};
