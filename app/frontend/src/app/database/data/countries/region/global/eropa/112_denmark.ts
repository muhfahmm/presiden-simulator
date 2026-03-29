import { CountryData } from "@/app/database/data/types";
import { denmark_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/eropa/112_denmark";
import { denmark_armada } from "../../modules/2_militer/2_armada_militer/eropa/112_denmark";
import { denmark_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/eropa/112_denmark";
import { denmark_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/eropa/112_denmark";
import { denmark_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/eropa/112_denmark";
import { denmark_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/eropa/112_denmark";
import { denmark_listrik } from "../../modules/1_ekonomi/2_kelistrikan/eropa/112_denmark";
import { denmark_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/eropa/112_denmark";
import { denmark_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/eropa/112_denmark";
import { denmark_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/eropa/112_denmark";
import { denmark_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/eropa/112_denmark";
import { denmark_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/eropa/112_denmark";
import { denmark_profile } from "../../modules/0_profiles/eropa/112_denmark";
import { denmark_strategis } from "../../modules/2_militer/3_militer_strategis/eropa/112_denmark";

export const denmark: CountryData = {
  ...denmark_profile,
  "sektor_listrik": denmark_listrik,
  "infrastruktur": denmark_infrastruktur,
  "sektor_ekstraksi": denmark_ekstraksi,
  "sektor_manufaktur": denmark_manufaktur,
  "sektor_peternakan": denmark_peternakan,
  "sektor_agrikultur": denmark_agrikultur,
  "sektor_perikanan": denmark_perikanan,
  "sektor_olahan_pangan": denmark_olahan_pangan,
  "sektor_farmasi": denmark_farmasi,
  "sektor_pertahanan": denmark_pertahanan,
  "armada_militer": denmark_armada,
  "militer_strategis": denmark_strategis,
  "armada_kepolisian": denmark_kepolisian,
  "pabrik_militer": {
    "pabrik_drone_kamikaze": 0,
    "pabrik_amunisi": 0,
    "pabrik_kendaraan_tempur": 0,
    "pabrik_senjata_berat": 0
  },
  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 9,
      "dasar": 3,
      "menengah": 37,
      "lanjutan": 28,
      "universitas": 20,
      "lembaga_pendidikan": 39,
      "laboratorium": 40,
      "observatorium": 2,
      "pusat_penelitian": 29,
      "pusat_pengembangan": 18,
      "literasi": 78
    },
    "kesehatan": {
      "rumah_sakit_besar": 28,
      "rumah_sakit_kecil": 7,
      "pusat_diagnostik": 5,
      "harapan_hidup": 24,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 32,
      "pengadilan": 26,
      "kejaksaan": 17,
      "pos_polisi": 24,
      "armada_mobil_polisi": 2831,
      "akademi_polisi": 17,
      "indeks_korupsi": 66,
      "indeks_keamanan": 75
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 17,
      "sirkuit_balap": 25,
      "stadion": 38,
      "stadion_internasional": 26
  },
  "un_vote": 184,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 10,
      "kepuasan": 67,
      "pendapatan": 72
    },
    "korporasi": {
      "tarif": 9,
      "kepuasan": 52,
      "pendapatan": 56
    },
    "penghasilan": {
      "tarif": 21,
      "kepuasan": 61,
      "pendapatan": 107
    },
    "bea_cukai": {
      "tarif": 38,
      "kepuasan": 86,
      "pendapatan": 272
    },
    "lingkungan": {
      "tarif": 29,
      "kepuasan": 88,
      "pendapatan": 273
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 20 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 60 },
    "lainnya": {
      "tarif": 26,
      "kepuasan": 93,
      "pendapatan": 180
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 100,
    "gaji_guru": 90,
    "gaji_medis": 90,
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
    "harga_beras": 16000,
    "harga_daging_sapi": 208200,
    "harga_ayam": 32800,
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 24880,
    "harga_bbm": 5350,
    "harga_listrik": 1280,
    "harga_air": 5200,
    "harga_obat": 78950,
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
      "kekuatan_lunak": 32,
      "kekuatan_keras": 20,
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
    "kesehatan": 33,
    "pendidikan": 32,
    "keamanan": 28,
    "keuangan": 36,
    "lingkungan": 60
  }
};
