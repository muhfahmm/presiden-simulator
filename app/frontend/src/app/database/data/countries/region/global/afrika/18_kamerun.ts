import { CountryData } from "@/app/database/data/types";
import { kamerun_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/afrika/18_kamerun";
import { kamerun_armada } from "../../modules/2_militer/2_armada_militer/afrika/18_kamerun";
import { kamerun_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/afrika/18_kamerun";
import { kamerun_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/afrika/18_kamerun";
import { kamerun_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/afrika/18_kamerun";
import { kamerun_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/afrika/18_kamerun";
import { kamerun_listrik } from "../../modules/1_ekonomi/2_kelistrikan/afrika/18_kamerun";
import { kamerun_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/afrika/18_kamerun";
import { kamerun_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/afrika/18_kamerun";
import { kamerun_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/afrika/18_kamerun";
import { kamerun_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/afrika/18_kamerun";
import { kamerun_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/afrika/18_kamerun";
import { kamerun_profile } from "../../modules/0_profiles/afrika/18_kamerun";
import { kamerun_strategis } from "../../modules/2_militer/3_militer_strategis/afrika/18_kamerun";

export const kamerun: CountryData = {
  ...kamerun_profile,
  "sektor_listrik": kamerun_listrik,
  "infrastruktur": kamerun_infrastruktur,
  "sektor_ekstraksi": kamerun_ekstraksi,
  "sektor_manufaktur": kamerun_manufaktur,
  "sektor_peternakan": kamerun_peternakan,
  "sektor_agrikultur": kamerun_agrikultur,
  "sektor_perikanan": kamerun_perikanan,
  "sektor_olahan_pangan": kamerun_olahan_pangan,
  "sektor_farmasi": kamerun_farmasi,
  "sektor_pertahanan": kamerun_pertahanan,
  "armada_militer": kamerun_armada,
  "militer_strategis": kamerun_strategis,
  "armada_kepolisian": kamerun_kepolisian,
  "pabrik_militer": {
    "pabrik_drone_kamikaze": 0,
    "pabrik_amunisi": 0,
    "pabrik_kendaraan_tempur": 0,
    "pabrik_senjata_berat": 0
  },
  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 31,
      "dasar": 32,
      "menengah": 23,
      "lanjutan": 34,
      "universitas": 38,
      "lembaga_pendidikan": 2,
      "laboratorium": 9,
      "observatorium": 10,
      "pusat_penelitian": 37,
      "pusat_pengembangan": 40,
      "literasi": 50
  },
    "kesehatan": {
      "rumah_sakit_besar": 37,
      "rumah_sakit_kecil": 37,
      "pusat_diagnostik": 3,
      "harapan_hidup": 32,
      "indeks_kesehatan": 85
  },
    "hukum": {
      "pusat_bantuan_hukum": 19,
      "pengadilan": 2,
      "kejaksaan": 2,
      "pos_polisi": 4,
      "armada_mobil_polisi": 886,
      "akademi_polisi": 25,
      "indeks_korupsi": 65,
      "indeks_keamanan": 75
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 30,
      "sirkuit_balap": 32,
      "stadion": 6,
      "stadion_internasional": 3
  },
  "un_vote": 138,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 7,
      "kepuasan": 67,
      "pendapatan": 5
    },
    "korporasi": {
      "tarif": 8,
      "kepuasan": 52,
      "pendapatan": 9
    },
    "penghasilan": {
      "tarif": 11,
      "kepuasan": 61,
      "pendapatan": 8
    },
    "bea_cukai": {
      "tarif": 33,
      "kepuasan": 86,
      "pendapatan": 29
    },
    "lingkungan": {
      "tarif": 27,
      "kepuasan": 88,
      "pendapatan": 30
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 3 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 7 },
    "lainnya": {
      "tarif": 3,
      "kepuasan": 93,
      "pendapatan": 3
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 50,
    "gaji_guru": 50,
    "gaji_medis": 50,
    "gaji_militer": 60
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 25,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 25,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 0
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 52050,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 7200,
    "harga_telur": 43540,
    "harga_bbm": 8560,
    "harga_listrik": 2240,
    "harga_air": 7280,
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
      "kekuatan_lunak": 26,
      "kekuatan_keras": 19,
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
    "kesehatan": 15,
    "pendidikan": 38,
    "keamanan": 9,
    "keuangan": 3,
    "lingkungan": 60
  }
};
