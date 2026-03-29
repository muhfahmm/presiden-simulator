import { CountryData } from "@/app/database/data/types";
import { andorra_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/eropa/104_andorra";
import { andorra_armada } from "../../modules/2_militer/2_armada_militer/eropa/104_andorra";
import { andorra_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/eropa/104_andorra";
import { andorra_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/eropa/104_andorra";
import { andorra_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/eropa/104_andorra";
import { andorra_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/eropa/104_andorra";
import { andorra_listrik } from "../../modules/1_ekonomi/2_kelistrikan/eropa/104_andorra";
import { andorra_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/eropa/104_andorra";
import { andorra_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/eropa/104_andorra";
import { andorra_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/eropa/104_andorra";
import { andorra_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/eropa/104_andorra";
import { andorra_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/eropa/104_andorra";
import { andorra_profile } from "../../modules/0_profiles/eropa/104_andorra";
import { andorra_strategis } from "../../modules/2_militer/3_militer_strategis/eropa/104_andorra";

export const andorra: CountryData = {
  ...andorra_profile,
  "sektor_listrik": andorra_listrik,
  "infrastruktur": andorra_infrastruktur,
  "sektor_ekstraksi": andorra_ekstraksi,
  "sektor_manufaktur": andorra_manufaktur,
  "sektor_peternakan": andorra_peternakan,
  "sektor_agrikultur": andorra_agrikultur,
  "sektor_perikanan": andorra_perikanan,
  "sektor_olahan_pangan": andorra_olahan_pangan,
  "sektor_farmasi": andorra_farmasi,
  "sektor_pertahanan": andorra_pertahanan,
  "armada_militer": andorra_armada,
  "militer_strategis": andorra_strategis,
  "armada_kepolisian": andorra_kepolisian,
  "pabrik_militer": {
    "pabrik_drone_kamikaze": 0,
    "pabrik_amunisi": 0,
    "pabrik_kendaraan_tempur": 0,
    "pabrik_senjata_berat": 0
  },
  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 17,
      "dasar": 30,
      "menengah": 14,
      "lanjutan": 15,
      "universitas": 17,
      "lembaga_pendidikan": 22,
      "laboratorium": 38,
      "observatorium": 40,
      "pusat_penelitian": 16,
      "pusat_pengembangan": 4,
      "literasi": 50
    },
    "kesehatan": {
      "rumah_sakit_besar": 16,
      "rumah_sakit_kecil": 10,
      "pusat_diagnostik": 3,
      "harapan_hidup": 10,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 35,
      "pengadilan": 37,
      "kejaksaan": 21,
      "pos_polisi": 2,
      "armada_mobil_polisi": 6456,
      "akademi_polisi": 26,
      "indeks_korupsi": 69,
      "indeks_keamanan": 61
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 32,
      "sirkuit_balap": 24,
      "stadion": 1,
      "stadion_internasional": 22
  },
  "un_vote": 11,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 11,
      "kepuasan": 67,
      "pendapatan": 1
    },
    "korporasi": {
      "tarif": 40,
      "kepuasan": 52,
      "pendapatan": 6
    },
    "penghasilan": {
      "tarif": 22,
      "kepuasan": 61,
      "pendapatan": 5
    },
    "bea_cukai": {
      "tarif": 9,
      "kepuasan": 86,
      "pendapatan": 1
    },
    "lingkungan": {
      "tarif": 16,
      "kepuasan": 88,
      "pendapatan": 4
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 10,
      "kepuasan": 93,
      "pendapatan": 1
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
    "subsidi_energi": 50,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 100,
    "subsidi_pendidikan": 100,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 75
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 104100,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 11520,
    "harga_telur": 43540,
    "harga_bbm": 14980,
    "harga_listrik": 800,
    "harga_air": 5200,
    "harga_obat": 157900,
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
      "kekuatan_lunak": 4,
      "kekuatan_keras": 12,
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
    "kesehatan": 4,
    "pendidikan": 20,
    "keamanan": 33,
    "keuangan": 6,
    "lingkungan": 60
  }
};
