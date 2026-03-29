import { CountryData } from "@/app/database/data/types";
import { belarus_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/eropa/107_belarus";
import { belarus_armada } from "../../modules/2_militer/2_armada_militer/eropa/107_belarus";
import { belarus_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/eropa/107_belarus";
import { belarus_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/eropa/107_belarus";
import { belarus_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/eropa/107_belarus";
import { belarus_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/eropa/107_belarus";
import { belarus_listrik } from "../../modules/1_ekonomi/2_kelistrikan/eropa/107_belarus";
import { belarus_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/eropa/107_belarus";
import { belarus_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/eropa/107_belarus";
import { belarus_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/eropa/107_belarus";
import { belarus_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/eropa/107_belarus";
import { belarus_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/eropa/107_belarus";
import { belarus_profile } from "../../modules/0_profiles/eropa/107_belarus";
import { belarus_strategis } from "../../modules/2_militer/3_militer_strategis/eropa/107_belarus";

export const belarus: CountryData = {
  ...belarus_profile,
  "sektor_listrik": belarus_listrik,
  "infrastruktur": belarus_infrastruktur,
  "sektor_ekstraksi": belarus_ekstraksi,
  "sektor_manufaktur": belarus_manufaktur,
  "sektor_peternakan": belarus_peternakan,
  "sektor_agrikultur": belarus_agrikultur,
  "sektor_perikanan": belarus_perikanan,
  "sektor_olahan_pangan": belarus_olahan_pangan,
  "sektor_farmasi": belarus_farmasi,
  "sektor_pertahanan": belarus_pertahanan,
  "armada_militer": belarus_armada,
  "militer_strategis": belarus_strategis,
  "armada_kepolisian": belarus_kepolisian,
  "pabrik_militer": {
    "pabrik_drone_kamikaze": 0,
    "pabrik_amunisi": 0,
    "pabrik_kendaraan_tempur": 0,
    "pabrik_senjata_berat": 0
  },
  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 36,
      "dasar": 16,
      "menengah": 11,
      "lanjutan": 6,
      "universitas": 16,
      "lembaga_pendidikan": 13,
      "laboratorium": 23,
      "observatorium": 33,
      "pusat_penelitian": 12,
      "pusat_pengembangan": 13,
      "literasi": 90
    },
    "kesehatan": {
      "rumah_sakit_besar": 29,
      "rumah_sakit_kecil": 10,
      "pusat_diagnostik": 33,
      "harapan_hidup": 11,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 14,
      "pengadilan": 1,
      "kejaksaan": 17,
      "pos_polisi": 22,
      "armada_mobil_polisi": 1365,
      "akademi_polisi": 37,
      "indeks_korupsi": 62,
      "indeks_keamanan": 81
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 16,
      "sirkuit_balap": 37,
      "stadion": 30,
      "stadion_internasional": 11
  },
  "un_vote": 102,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 19,
      "kepuasan": 67,
      "pendapatan": 18
    },
    "korporasi": {
      "tarif": 35,
      "kepuasan": 52,
      "pendapatan": 48
    },
    "penghasilan": {
      "tarif": 36,
      "kepuasan": 61,
      "pendapatan": 64
    },
    "bea_cukai": {
      "tarif": 4,
      "kepuasan": 86,
      "pendapatan": 7
    },
    "lingkungan": {
      "tarif": 38,
      "kepuasan": 88,
      "pendapatan": 53
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 4 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 11 },
    "lainnya": {
      "tarif": 11,
      "kepuasan": 93,
      "pendapatan": 9
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 80,
    "gaji_guru": 100,
    "gaji_medis": 90,
    "gaji_militer": 90
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 25,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 100,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 75
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 8000,
    "harga_daging_sapi": 208200,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 20160,
    "harga_telur": 43540,
    "harga_bbm": 10700,
    "harga_listrik": 1600,
    "harga_air": 5200,
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
      "kekuatan_lunak": 1,
      "kekuatan_keras": 39,
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
    "kesehatan": 21,
    "pendidikan": 1,
    "keamanan": 15,
    "keuangan": 39,
    "lingkungan": 60
  }
};
