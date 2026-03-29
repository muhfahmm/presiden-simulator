import { CountryData } from "@/app/database/data/types";
import { swiss_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/eropa/147_swiss";
import { swiss_armada } from "../../modules/2_militer/2_armada_militer/eropa/147_swiss";
import { swiss_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/eropa/147_swiss";
import { swiss_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/eropa/147_swiss";
import { swiss_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/eropa/147_swiss";
import { swiss_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/eropa/147_swiss";
import { swiss_listrik } from "../../modules/1_ekonomi/2_kelistrikan/eropa/147_swiss";
import { swiss_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/eropa/147_swiss";
import { swiss_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/eropa/147_swiss";
import { swiss_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/eropa/147_swiss";
import { swiss_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/eropa/147_swiss";
import { swiss_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/eropa/147_swiss";
import { swiss_profile } from "../../modules/0_profiles/eropa/147_swiss";
import { swiss_strategis } from "../../modules/2_militer/3_militer_strategis/eropa/147_swiss";

export const swiss: CountryData = {
  ...swiss_profile,
  "sektor_listrik": swiss_listrik,
  "infrastruktur": swiss_infrastruktur,
  "sektor_ekstraksi": swiss_ekstraksi,
  "sektor_manufaktur": swiss_manufaktur,
  "sektor_peternakan": swiss_peternakan,
  "sektor_agrikultur": swiss_agrikultur,
  "sektor_perikanan": swiss_perikanan,
  "sektor_olahan_pangan": swiss_olahan_pangan,
  "sektor_farmasi": swiss_farmasi,
  "sektor_pertahanan": swiss_pertahanan,
  "armada_militer": swiss_armada,
  "militer_strategis": swiss_strategis,
  "armada_kepolisian": swiss_kepolisian,
  "pabrik_militer": {
    "pabrik_drone_kamikaze": 0,
    "pabrik_amunisi": 0,
    "pabrik_kendaraan_tempur": 0,
    "pabrik_senjata_berat": 0
  },
  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 30,
      "dasar": 1,
      "menengah": 26,
      "lanjutan": 36,
      "universitas": 33,
      "lembaga_pendidikan": 12,
      "laboratorium": 16,
      "observatorium": 10,
      "pusat_penelitian": 4,
      "pusat_pengembangan": 13,
      "literasi": 64
    },
    "kesehatan": {
      "rumah_sakit_besar": 16,
      "rumah_sakit_kecil": 11,
      "pusat_diagnostik": 4,
      "harapan_hidup": 7,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 24,
      "pengadilan": 5,
      "kejaksaan": 16,
      "pos_polisi": 18,
      "armada_mobil_polisi": 2129,
      "akademi_polisi": 5,
      "indeks_korupsi": 84,
      "indeks_keamanan": 57
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 3,
      "sirkuit_balap": 34,
      "stadion": 24,
      "stadion_internasional": 13
  },
  "un_vote": 198,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 36,
      "kepuasan": 67,
      "pendapatan": 540
    },
    "korporasi": {
      "tarif": 30,
      "kepuasan": 52,
      "pendapatan": 672
    },
    "penghasilan": {
      "tarif": 39,
      "kepuasan": 61,
      "pendapatan": 446
    },
    "bea_cukai": {
      "tarif": 10,
      "kepuasan": 86,
      "pendapatan": 90
    },
    "lingkungan": {
      "tarif": 32,
      "kepuasan": 88,
      "pendapatan": 786
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 45 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 133 },
    "lainnya": {
      "tarif": 34,
      "kepuasan": 93,
      "pendapatan": 502
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 90,
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
    "harga_daging_sapi": 83280,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 31100,
    "harga_bbm": 14980,
    "harga_listrik": 1600,
    "harga_air": 10400,
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
      "kekuatan_lunak": 25,
      "kekuatan_keras": 30,
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
    "kesehatan": 34,
    "pendidikan": 3,
    "keamanan": 40,
    "keuangan": 36,
    "lingkungan": 60
  }
};
