import { CountryData } from "@/app/database/data/types";
import { arab_saudi_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/asia/55_arab_saudi";
import { arab_saudi_armada } from "../../modules/2_militer/2_armada_militer/asia/55_arab_saudi";
import { arab_saudi_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/asia/55_arab_saudi";
import { arab_saudi_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/asia/55_arab_saudi";
import { arab_saudi_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/asia/55_arab_saudi";
import { arab_saudi_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/asia/55_arab_saudi";
import { arab_saudi_listrik } from "../../modules/1_ekonomi/2_kelistrikan/asia/55_arab_saudi";
import { arab_saudi_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/asia/55_arab_saudi";
import { arab_saudi_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/asia/55_arab_saudi";
import { arab_saudi_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/asia/55_arab_saudi";
import { arab_saudi_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/asia/55_arab_saudi";
import { arab_saudi_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/asia/55_arab_saudi";
import { arab_saudi_profile } from "../../modules/0_profiles/asia/55_arab_saudi";
import { arab_saudi_strategis } from "../../modules/2_militer/3_militer_strategis/asia/55_arab_saudi";

export const arab_saudi: CountryData = {
  ...arab_saudi_profile,
  "sektor_listrik": arab_saudi_listrik,
  "infrastruktur": arab_saudi_infrastruktur,
  "sektor_ekstraksi": arab_saudi_ekstraksi,
  "sektor_manufaktur": arab_saudi_manufaktur,
  "sektor_peternakan": arab_saudi_peternakan,
  "sektor_agrikultur": arab_saudi_agrikultur,
  "sektor_perikanan": arab_saudi_perikanan,
  "sektor_olahan_pangan": arab_saudi_olahan_pangan,
  "sektor_farmasi": arab_saudi_farmasi,
  "sektor_pertahanan": arab_saudi_pertahanan,
  "armada_militer": arab_saudi_armada,
  "militer_strategis": arab_saudi_strategis,
  "armada_kepolisian": arab_saudi_kepolisian,
  "pabrik_militer": {
    "pabrik_drone_kamikaze": 0,
    "pabrik_amunisi": 0,
    "pabrik_kendaraan_tempur": 0,
    "pabrik_senjata_berat": 0
  },
  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 28,
      "dasar": 40,
      "menengah": 32,
      "lanjutan": 6,
      "universitas": 16,
      "lembaga_pendidikan": 2,
      "laboratorium": 2,
      "observatorium": 11,
      "pusat_penelitian": 5,
      "pusat_pengembangan": 28,
      "literasi": 78
    },
    "kesehatan": {
      "rumah_sakit_besar": 27,
      "rumah_sakit_kecil": 17,
      "pusat_diagnostik": 27,
      "harapan_hidup": 3,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 27,
      "pengadilan": 36,
      "kejaksaan": 18,
      "pos_polisi": 26,
      "armada_mobil_polisi": 1693,
      "akademi_polisi": 38,
      "indeks_korupsi": 94,
      "indeks_keamanan": 84
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 38,
      "sirkuit_balap": 3,
      "stadion": 1,
      "stadion_internasional": 12
  },
  "un_vote": 163,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 40,
      "kepuasan": 67,
      "pendapatan": 832
    },
    "korporasi": {
      "tarif": 2,
      "kepuasan": 52,
      "pendapatan": 44
    },
    "penghasilan": {
      "tarif": 35,
      "kepuasan": 61,
      "pendapatan": 982
    },
    "bea_cukai": {
      "tarif": 30,
      "kepuasan": 86,
      "pendapatan": 335
    },
    "lingkungan": {
      "tarif": 16,
      "kepuasan": 88,
      "pendapatan": 265
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 54 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 162 },
    "lainnya": {
      "tarif": 4,
      "kepuasan": 93,
      "pendapatan": 127
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 60,
    "gaji_guru": 60,
    "gaji_medis": 60,
    "gaji_militer": 70
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 32000,
    "harga_daging_sapi": 52050,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 20160,
    "harga_telur": 62200,
    "harga_bbm": 21400,
    "harga_listrik": 2240,
    "harga_air": 10400,
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
      "kekuatan_keras": 23,
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
    "pendidikan": 19,
    "keamanan": 21,
    "keuangan": 39,
    "lingkungan": 60
  }
};
