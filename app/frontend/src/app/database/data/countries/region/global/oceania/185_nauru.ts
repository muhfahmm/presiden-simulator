import { CountryData } from "@/app/database/data/types";
import { nauru_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/oceania/185_nauru";
import { nauru_armada } from "../../modules/2_militer/2_armada_militer/oceania/185_nauru";
import { nauru_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/oceania/185_nauru";
import { nauru_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/oceania/185_nauru";
import { nauru_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/oceania/185_nauru";
import { nauru_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/oceania/185_nauru";
import { nauru_listrik } from "../../modules/1_ekonomi/2_kelistrikan/oceania/185_nauru";
import { nauru_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/oceania/185_nauru";
import { nauru_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/oceania/185_nauru";
import { nauru_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/oceania/185_nauru";
import { nauru_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/oceania/185_nauru";
import { nauru_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/oceania/185_nauru";
import { nauru_profile } from "../../modules/0_profiles/oceania/185_nauru";
import { nauru_strategis } from "../../modules/2_militer/3_militer_strategis/oceania/185_nauru";

export const nauru: CountryData = {
  ...nauru_profile,
  "sektor_listrik": nauru_listrik,
  "infrastruktur": nauru_infrastruktur,
  "sektor_ekstraksi": nauru_ekstraksi,
  "sektor_manufaktur": nauru_manufaktur,
  "sektor_peternakan": nauru_peternakan,
  "sektor_agrikultur": nauru_agrikultur,
  "sektor_perikanan": nauru_perikanan,
  "sektor_olahan_pangan": nauru_olahan_pangan,
  "sektor_farmasi": nauru_farmasi,
  "sektor_pertahanan": nauru_pertahanan,
  "armada_militer": nauru_armada,
  "militer_strategis": nauru_strategis,
  "armada_kepolisian": nauru_kepolisian,
  "pabrik_militer": {
    "pabrik_drone_kamikaze": 0,
    "pabrik_amunisi": 0,
    "pabrik_kendaraan_tempur": 0,
    "pabrik_senjata_berat": 0
  },
  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 28,
      "dasar": 7,
      "menengah": 7,
      "lanjutan": 21,
      "universitas": 4,
      "lembaga_pendidikan": 3,
      "laboratorium": 1,
      "observatorium": 30,
      "pusat_penelitian": 14,
      "pusat_pengembangan": 15,
      "literasi": 61
    },
    "kesehatan": {
      "rumah_sakit_besar": 36,
      "rumah_sakit_kecil": 9,
      "pusat_diagnostik": 25,
      "harapan_hidup": 25,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 37,
      "pengadilan": 24,
      "kejaksaan": 2,
      "pos_polisi": 7,
      "armada_mobil_polisi": 1388,
      "akademi_polisi": 29,
      "indeks_korupsi": 73,
      "indeks_keamanan": 65
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 27,
      "sirkuit_balap": 11,
      "stadion": 23,
      "stadion_internasional": 30
  },
  "un_vote": 52,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 18,
      "kepuasan": 67,
      "pendapatan": 0
    },
    "korporasi": {
      "tarif": 16,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 25,
      "kepuasan": 61,
      "pendapatan": 0
    },
    "bea_cukai": {
      "tarif": 34,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 10,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 32,
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
    "subsidi_energi": 25,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 75
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 104100,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 21560,
    "harga_gula": 11520,
    "harga_telur": 43540,
    "harga_bbm": 10700,
    "harga_listrik": 1600,
    "harga_air": 5200,
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
      "kekuatan_lunak": 23,
      "kekuatan_keras": 36,
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
    "pendidikan": 29,
    "keamanan": 5,
    "keuangan": 9,
    "lingkungan": 60
  }
};
