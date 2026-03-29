import { CountryData } from "@/app/database/data/types";
import { komoro_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/afrika/20_komoro";
import { komoro_armada } from "../../modules/2_militer/2_armada_militer/afrika/20_komoro";
import { komoro_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/afrika/20_komoro";
import { komoro_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/afrika/20_komoro";
import { komoro_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/afrika/20_komoro";
import { komoro_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/afrika/20_komoro";
import { komoro_listrik } from "../../modules/1_ekonomi/2_kelistrikan/afrika/20_komoro";
import { komoro_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/afrika/20_komoro";
import { komoro_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/afrika/20_komoro";
import { komoro_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/afrika/20_komoro";
import { komoro_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/afrika/20_komoro";
import { komoro_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/afrika/20_komoro";
import { komoro_profile } from "../../modules/0_profiles/afrika/20_komoro";
import { komoro_strategis } from "../../modules/2_militer/3_militer_strategis/afrika/20_komoro";

export const komoro: CountryData = {
  ...komoro_profile,
  "sektor_listrik": komoro_listrik,
  "infrastruktur": komoro_infrastruktur,
  "sektor_ekstraksi": komoro_ekstraksi,
  "sektor_manufaktur": komoro_manufaktur,
  "sektor_peternakan": komoro_peternakan,
  "sektor_agrikultur": komoro_agrikultur,
  "sektor_perikanan": komoro_perikanan,
  "sektor_olahan_pangan": komoro_olahan_pangan,
  "sektor_farmasi": komoro_farmasi,
  "sektor_pertahanan": komoro_pertahanan,
  "armada_militer": komoro_armada,
  "militer_strategis": komoro_strategis,
  "armada_kepolisian": komoro_kepolisian,
  "pabrik_militer": {
    "pabrik_drone_kamikaze": 0,
    "pabrik_amunisi": 0,
    "pabrik_kendaraan_tempur": 0,
    "pabrik_senjata_berat": 0
  },
  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 14,
      "dasar": 36,
      "menengah": 35,
      "lanjutan": 30,
      "universitas": 4,
      "lembaga_pendidikan": 2,
      "laboratorium": 23,
      "observatorium": 10,
      "pusat_penelitian": 6,
      "pusat_pengembangan": 13,
      "literasi": 56
  },
    "kesehatan": {
      "rumah_sakit_besar": 3,
      "rumah_sakit_kecil": 38,
      "pusat_diagnostik": 33,
      "harapan_hidup": 35,
      "indeks_kesehatan": 85
  },
    "hukum": {
      "pusat_bantuan_hukum": 11,
      "pengadilan": 5,
      "kejaksaan": 25,
      "pos_polisi": 4,
      "armada_mobil_polisi": 3539,
      "akademi_polisi": 1,
      "indeks_korupsi": 71,
      "indeks_keamanan": 64
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 35,
      "sirkuit_balap": 35,
      "stadion": 20,
      "stadion_internasional": 1
  },
  "un_vote": 61,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 16,
      "kepuasan": 67,
      "pendapatan": 0
    },
    "korporasi": {
      "tarif": 16,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 29,
      "kepuasan": 61,
      "pendapatan": 0
    },
    "bea_cukai": {
      "tarif": 40,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 7,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 6,
      "kepuasan": 93,
      "pendapatan": 0
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 40,
    "gaji_guru": 60,
    "gaji_medis": 40,
    "gaji_militer": 50
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 25,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 25,
    "subsidi_umkm": 25,
    "subsidi_transportasi": 25,
    "subsidi_perumahan": 0
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 145740,
    "harga_ayam": 82000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 7200,
    "harga_telur": 31100,
    "harga_bbm": 21400,
    "harga_listrik": 1600,
    "harga_air": 5200,
    "harga_obat": 126320,
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
      "kekuatan_lunak": 24,
      "kekuatan_keras": 27,
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
    "kesehatan": 7,
    "pendidikan": 6,
    "keamanan": 31,
    "keuangan": 37,
    "lingkungan": 60
  }
};
