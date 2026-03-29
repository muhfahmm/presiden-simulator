import { CountryData } from "@/app/database/data/types";
import { senegal_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/afrika/46_senegal";
import { senegal_armada } from "../../modules/2_militer/2_armada_militer/afrika/46_senegal";
import { senegal_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/afrika/46_senegal";
import { senegal_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/afrika/46_senegal";
import { senegal_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/afrika/46_senegal";
import { senegal_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/afrika/46_senegal";
import { senegal_listrik } from "../../modules/1_ekonomi/2_kelistrikan/afrika/46_senegal";
import { senegal_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/afrika/46_senegal";
import { senegal_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/afrika/46_senegal";
import { senegal_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/afrika/46_senegal";
import { senegal_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/afrika/46_senegal";
import { senegal_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/afrika/46_senegal";
import { senegal_profile } from "../../modules/0_profiles/afrika/46_senegal";
import { senegal_strategis } from "../../modules/2_militer/3_militer_strategis/afrika/46_senegal";

export const senegal: CountryData = {
  ...senegal_profile,
  "sektor_listrik": senegal_listrik,
  "infrastruktur": senegal_infrastruktur,
  "sektor_ekstraksi": senegal_ekstraksi,
  "sektor_manufaktur": senegal_manufaktur,
  "sektor_peternakan": senegal_peternakan,
  "sektor_agrikultur": senegal_agrikultur,
  "sektor_perikanan": senegal_perikanan,
  "sektor_olahan_pangan": senegal_olahan_pangan,
  "sektor_farmasi": senegal_farmasi,
  "sektor_pertahanan": senegal_pertahanan,
  "armada_militer": senegal_armada,
  "militer_strategis": senegal_strategis,
  "armada_kepolisian": senegal_kepolisian,
  "pabrik_militer": {
    "pabrik_drone_kamikaze": 0,
    "pabrik_amunisi": 0,
    "pabrik_kendaraan_tempur": 0,
    "pabrik_senjata_berat": 0
  },
  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 29,
      "dasar": 17,
      "menengah": 11,
      "lanjutan": 32,
      "universitas": 35,
      "lembaga_pendidikan": 28,
      "laboratorium": 4,
      "observatorium": 22,
      "pusat_penelitian": 1,
      "pusat_pengembangan": 29,
      "literasi": 89
  },
    "kesehatan": {
      "rumah_sakit_besar": 9,
      "rumah_sakit_kecil": 5,
      "pusat_diagnostik": 40,
      "harapan_hidup": 5,
      "indeks_kesehatan": 85
  },
    "hukum": {
      "pusat_bantuan_hukum": 25,
      "pengadilan": 30,
      "kejaksaan": 27,
      "pos_polisi": 10,
      "armada_mobil_polisi": 1640,
      "akademi_polisi": 1,
      "indeks_korupsi": 87,
      "indeks_keamanan": 66
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 15,
      "sirkuit_balap": 27,
      "stadion": 40,
      "stadion_internasional": 23
  },
  "un_vote": 119,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 17,
      "kepuasan": 67,
      "pendapatan": 11
    },
    "korporasi": {
      "tarif": 19,
      "kepuasan": 52,
      "pendapatan": 10
    },
    "penghasilan": {
      "tarif": 11,
      "kepuasan": 61,
      "pendapatan": 4
    },
    "bea_cukai": {
      "tarif": 16,
      "kepuasan": 86,
      "pendapatan": 9
    },
    "lingkungan": {
      "tarif": 17,
      "kepuasan": 88,
      "pendapatan": 10
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 2 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 5 },
    "lainnya": {
      "tarif": 27,
      "kepuasan": 93,
      "pendapatan": 10
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 40,
    "gaji_guru": 40,
    "gaji_medis": 40,
    "gaji_militer": 60
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 25,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 104100,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 43540,
    "harga_bbm": 14980,
    "harga_listrik": 2240,
    "harga_air": 10400,
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
      "kekuatan_lunak": 34,
      "kekuatan_keras": 5,
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
    "kesehatan": 31,
    "pendidikan": 35,
    "keamanan": 4,
    "keuangan": 23,
    "lingkungan": 60
  }
};
