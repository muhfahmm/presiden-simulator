import { CountryData } from "@/app/database/data/types";
import { luksemburg_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/eropa/128_luksemburg";
import { luksemburg_armada } from "../../modules/2_militer/2_armada_militer/eropa/128_luksemburg";
import { luksemburg_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/eropa/128_luksemburg";
import { luksemburg_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/eropa/128_luksemburg";
import { luksemburg_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/eropa/128_luksemburg";
import { luksemburg_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/eropa/128_luksemburg";
import { luksemburg_listrik } from "../../modules/1_ekonomi/2_kelistrikan/eropa/128_luksemburg";
import { luksemburg_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/eropa/128_luksemburg";
import { luksemburg_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/eropa/128_luksemburg";
import { luksemburg_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/eropa/128_luksemburg";
import { luksemburg_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/eropa/128_luksemburg";
import { luksemburg_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/eropa/128_luksemburg";
import { luksemburg_profile } from "../../modules/0_profiles/eropa/128_luksemburg";
import { luksemburg_strategis } from "../../modules/2_militer/3_militer_strategis/eropa/128_luksemburg";

export const luksemburg: CountryData = {
  ...luksemburg_profile,
  "sektor_listrik": luksemburg_listrik,
  "infrastruktur": luksemburg_infrastruktur,
  "sektor_ekstraksi": luksemburg_ekstraksi,
  "sektor_manufaktur": luksemburg_manufaktur,
  "sektor_peternakan": luksemburg_peternakan,
  "sektor_agrikultur": luksemburg_agrikultur,
  "sektor_perikanan": luksemburg_perikanan,
  "sektor_olahan_pangan": luksemburg_olahan_pangan,
  "sektor_farmasi": luksemburg_farmasi,
  "sektor_pertahanan": luksemburg_pertahanan,
  "armada_militer": luksemburg_armada,
  "militer_strategis": luksemburg_strategis,
  "armada_kepolisian": luksemburg_kepolisian,
  "pabrik_militer": {
    "pabrik_drone_kamikaze": 0,
    "pabrik_amunisi": 0,
    "pabrik_kendaraan_tempur": 0,
    "pabrik_senjata_berat": 0
  },
  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 39,
      "dasar": 32,
      "menengah": 30,
      "lanjutan": 6,
      "universitas": 20,
      "lembaga_pendidikan": 39,
      "laboratorium": 17,
      "observatorium": 8,
      "pusat_penelitian": 39,
      "pusat_pengembangan": 38,
      "literasi": 91
    },
    "kesehatan": {
      "rumah_sakit_besar": 18,
      "rumah_sakit_kecil": 27,
      "pusat_diagnostik": 14,
      "harapan_hidup": 24,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 19,
      "pengadilan": 40,
      "kejaksaan": 34,
      "pos_polisi": 18,
      "armada_mobil_polisi": 3747,
      "akademi_polisi": 40,
      "indeks_korupsi": 67,
      "indeks_keamanan": 64
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 25,
      "sirkuit_balap": 23,
      "stadion": 39,
      "stadion_internasional": 34
  },
  "un_vote": 67,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 9,
      "kepuasan": 67,
      "pendapatan": 17
    },
    "korporasi": {
      "tarif": 16,
      "kepuasan": 52,
      "pendapatan": 31
    },
    "penghasilan": {
      "tarif": 22,
      "kepuasan": 61,
      "pendapatan": 38
    },
    "bea_cukai": {
      "tarif": 32,
      "kepuasan": 86,
      "pendapatan": 34
    },
    "lingkungan": {
      "tarif": 29,
      "kepuasan": 88,
      "pendapatan": 31
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 5 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 13 },
    "lainnya": {
      "tarif": 10,
      "kepuasan": 93,
      "pendapatan": 25
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 90,
    "gaji_guru": 90,
    "gaji_medis": 100,
    "gaji_militer": 80
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 100,
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
    "harga_ayam": 57400,
    "harga_minyak_goreng": 12320,
    "harga_gula": 11520,
    "harga_telur": 62200,
    "harga_bbm": 5350,
    "harga_listrik": 1600,
    "harga_air": 10400,
    "harga_obat": 157900,
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
      "kekuatan_lunak": 20,
      "kekuatan_keras": 2,
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
    "kesehatan": 16,
    "pendidikan": 39,
    "keamanan": 39,
    "keuangan": 6,
    "lingkungan": 60
  }
};
