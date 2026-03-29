import { CountryData } from "@/app/database/data/types";
import { ethiopia_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/afrika/12_ethiopia";
import { ethiopia_armada } from "../../modules/2_militer/2_armada_militer/afrika/12_ethiopia";
import { ethiopia_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/afrika/12_ethiopia";
import { ethiopia_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/afrika/12_ethiopia";
import { ethiopia_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/afrika/12_ethiopia";
import { ethiopia_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/afrika/12_ethiopia";
import { ethiopia_listrik } from "../../modules/1_ekonomi/2_kelistrikan/afrika/12_ethiopia";
import { ethiopia_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/afrika/12_ethiopia";
import { ethiopia_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/afrika/12_ethiopia";
import { ethiopia_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/afrika/12_ethiopia";
import { ethiopia_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/afrika/12_ethiopia";
import { ethiopia_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/afrika/12_ethiopia";
import { ethiopia_profile } from "../../modules/0_profiles/afrika/12_ethiopia";
import { ethiopia_strategis } from "../../modules/2_militer/3_militer_strategis/afrika/12_ethiopia";

export const ethiopia: CountryData = {
  ...ethiopia_profile,
  "sektor_listrik": ethiopia_listrik,
  "infrastruktur": ethiopia_infrastruktur,
  "sektor_ekstraksi": ethiopia_ekstraksi,
  "sektor_manufaktur": ethiopia_manufaktur,
  "sektor_peternakan": ethiopia_peternakan,
  "sektor_agrikultur": ethiopia_agrikultur,
  "sektor_perikanan": ethiopia_perikanan,
  "sektor_olahan_pangan": ethiopia_olahan_pangan,
  "sektor_farmasi": ethiopia_farmasi,
  "sektor_pertahanan": ethiopia_pertahanan,
  "armada_militer": ethiopia_armada,
  "militer_strategis": ethiopia_strategis,
  "armada_kepolisian": ethiopia_kepolisian,
  "pabrik_militer": {
    "pabrik_drone_kamikaze": 0,
    "pabrik_amunisi": 0,
    "pabrik_kendaraan_tempur": 0,
    "pabrik_senjata_berat": 0
  },
  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 6,
      "dasar": 2,
      "menengah": 32,
      "lanjutan": 7,
      "universitas": 9,
      "lembaga_pendidikan": 16,
      "laboratorium": 38,
      "observatorium": 24,
      "pusat_penelitian": 28,
      "pusat_pengembangan": 33,
      "literasi": 54
  },
    "kesehatan": {
      "rumah_sakit_besar": 39,
      "rumah_sakit_kecil": 15,
      "pusat_diagnostik": 7,
      "harapan_hidup": 2,
      "indeks_kesehatan": 85
  },
    "hukum": {
      "pusat_bantuan_hukum": 14,
      "pengadilan": 24,
      "kejaksaan": 10,
      "pos_polisi": 21,
      "armada_mobil_polisi": 9104,
      "akademi_polisi": 17,
      "indeks_korupsi": 82,
      "indeks_keamanan": 82
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 35,
      "sirkuit_balap": 26,
      "stadion": 14,
      "stadion_internasional": 40
  },
  "un_vote": 70,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 17,
      "kepuasan": 67,
      "pendapatan": 59
    },
    "korporasi": {
      "tarif": 25,
      "kepuasan": 52,
      "pendapatan": 82
    },
    "penghasilan": {
      "tarif": 30,
      "kepuasan": 61,
      "pendapatan": 63
    },
    "bea_cukai": {
      "tarif": 38,
      "kepuasan": 86,
      "pendapatan": 81
    },
    "lingkungan": {
      "tarif": 30,
      "kepuasan": 88,
      "pendapatan": 50
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 8 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 23 },
    "lainnya": {
      "tarif": 11,
      "kepuasan": 93,
      "pendapatan": 18
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 40,
    "gaji_guru": 60,
    "gaji_medis": 50,
    "gaji_militer": 40
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 25,
    "subsidi_transportasi": 25,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 104100,
    "harga_ayam": 32800,
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 24880,
    "harga_bbm": 10700,
    "harga_listrik": 2240,
    "harga_air": 7280,
    "harga_obat": 157900,
    "harga_pendidikan": 677460
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
      "kekuatan_keras": 14,
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
    "kesehatan": 19,
    "pendidikan": 4,
    "keamanan": 5,
    "keuangan": 33,
    "lingkungan": 60
  }
};
