import { CountryData } from "@/app/database/data/types";
import { palau_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/oceania/186_palau";
import { palau_armada } from "../../modules/2_militer/2_armada_militer/oceania/186_palau";
import { palau_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/oceania/186_palau";
import { palau_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/oceania/186_palau";
import { palau_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/oceania/186_palau";
import { palau_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/oceania/186_palau";
import { palau_listrik } from "../../modules/1_ekonomi/2_kelistrikan/oceania/186_palau";
import { palau_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/oceania/186_palau";
import { palau_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/oceania/186_palau";
import { palau_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/oceania/186_palau";
import { palau_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/oceania/186_palau";
import { palau_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/oceania/186_palau";
import { palau_profile } from "../../modules/0_profiles/oceania/186_palau";
import { palau_strategis } from "../../modules/2_militer/3_militer_strategis/oceania/186_palau";

export const palau: CountryData = {
  ...palau_profile,
  "sektor_listrik": palau_listrik,
  "infrastruktur": palau_infrastruktur,
  "sektor_ekstraksi": palau_ekstraksi,
  "sektor_manufaktur": palau_manufaktur,
  "sektor_peternakan": palau_peternakan,
  "sektor_agrikultur": palau_agrikultur,
  "sektor_perikanan": palau_perikanan,
  "sektor_olahan_pangan": palau_olahan_pangan,
  "sektor_farmasi": palau_farmasi,
  "sektor_pertahanan": palau_pertahanan,
  "armada_militer": palau_armada,
  "militer_strategis": palau_strategis,
  "armada_kepolisian": palau_kepolisian,
  "pabrik_militer": {
    "pabrik_drone_kamikaze": 0,
    "pabrik_amunisi": 0,
    "pabrik_kendaraan_tempur": 0,
    "pabrik_senjata_berat": 0
  },
  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 34,
      "dasar": 30,
      "menengah": 29,
      "lanjutan": 9,
      "universitas": 4,
      "lembaga_pendidikan": 17,
      "laboratorium": 24,
      "observatorium": 14,
      "pusat_penelitian": 24,
      "pusat_pengembangan": 21,
      "literasi": 88
    },
    "kesehatan": {
      "rumah_sakit_besar": 4,
      "rumah_sakit_kecil": 15,
      "pusat_diagnostik": 13,
      "harapan_hidup": 8,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 16,
      "pengadilan": 10,
      "kejaksaan": 14,
      "pos_polisi": 3,
      "armada_mobil_polisi": 9244,
      "akademi_polisi": 23,
      "indeks_korupsi": 69,
      "indeks_keamanan": 58
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 18,
      "sirkuit_balap": 4,
      "stadion": 19,
      "stadion_internasional": 24
  },
  "un_vote": 44,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 15,
      "kepuasan": 67,
      "pendapatan": 0
    },
    "korporasi": {
      "tarif": 5,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 33,
      "kepuasan": 61,
      "pendapatan": 0
    },
    "bea_cukai": {
      "tarif": 32,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 28,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 26,
      "kepuasan": 93,
      "pendapatan": 0
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 80,
    "gaji_guru": 80,
    "gaji_medis": 90,
    "gaji_militer": 80
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12800,
    "harga_daging_sapi": 104100,
    "harga_ayam": 82000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 43540,
    "harga_bbm": 8560,
    "harga_listrik": 2240,
    "harga_air": 5200,
    "harga_obat": 315800,
    "harga_pendidikan": 387120
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
      "kekuatan_lunak": 34,
      "kekuatan_keras": 21,
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
    "kesehatan": 35,
    "pendidikan": 27,
    "keamanan": 34,
    "keuangan": 8,
    "lingkungan": 60
  }
};
