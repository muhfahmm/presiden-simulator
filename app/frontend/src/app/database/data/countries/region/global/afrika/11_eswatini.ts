import { CountryData } from "@/app/database/data/types";
import { eswatini_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/afrika/11_eswatini";
import { eswatini_armada } from "../../modules/2_militer/2_armada_militer/afrika/11_eswatini";
import { eswatini_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/afrika/11_eswatini";
import { eswatini_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/afrika/11_eswatini";
import { eswatini_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/afrika/11_eswatini";
import { eswatini_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/afrika/11_eswatini";
import { eswatini_listrik } from "../../modules/1_ekonomi/2_kelistrikan/afrika/11_eswatini";
import { eswatini_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/afrika/11_eswatini";
import { eswatini_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/afrika/11_eswatini";
import { eswatini_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/afrika/11_eswatini";
import { eswatini_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/afrika/11_eswatini";
import { eswatini_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/afrika/11_eswatini";
import { eswatini_profile } from "../../modules/0_profiles/afrika/11_eswatini";
import { eswatini_strategis } from "../../modules/2_militer/3_militer_strategis/afrika/11_eswatini";

export const eswatini: CountryData = {
  ...eswatini_profile,
  "sektor_listrik": eswatini_listrik,
  "infrastruktur": eswatini_infrastruktur,
  "sektor_ekstraksi": eswatini_ekstraksi,
  "sektor_manufaktur": eswatini_manufaktur,
  "sektor_peternakan": eswatini_peternakan,
  "sektor_agrikultur": eswatini_agrikultur,
  "sektor_perikanan": eswatini_perikanan,
  "sektor_olahan_pangan": eswatini_olahan_pangan,
  "sektor_farmasi": eswatini_farmasi,
  "sektor_pertahanan": eswatini_pertahanan,
  "armada_militer": eswatini_armada,
  "militer_strategis": eswatini_strategis,
  "armada_kepolisian": eswatini_kepolisian,
  "pabrik_militer": {
    "pabrik_drone_kamikaze": 0,
    "pabrik_amunisi": 0,
    "pabrik_kendaraan_tempur": 0,
    "pabrik_senjata_berat": 0
  },
  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 21,
      "dasar": 6,
      "menengah": 39,
      "lanjutan": 6,
      "universitas": 25,
      "lembaga_pendidikan": 30,
      "laboratorium": 18,
      "observatorium": 18,
      "pusat_penelitian": 27,
      "pusat_pengembangan": 35,
      "literasi": 70
  },
    "kesehatan": {
      "rumah_sakit_besar": 29,
      "rumah_sakit_kecil": 2,
      "pusat_diagnostik": 20,
      "harapan_hidup": 7,
      "indeks_kesehatan": 85
  },
    "hukum": {
      "pusat_bantuan_hukum": 40,
      "pengadilan": 28,
      "kejaksaan": 16,
      "pos_polisi": 39,
      "armada_mobil_polisi": 879,
      "akademi_polisi": 33,
      "indeks_korupsi": 51,
      "indeks_keamanan": 81
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 24,
      "sirkuit_balap": 37,
      "stadion": 27,
      "stadion_internasional": 21
  },
  "un_vote": 60,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 37,
      "kepuasan": 67,
      "pendapatan": 4
    },
    "korporasi": {
      "tarif": 2,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 39,
      "kepuasan": 61,
      "pendapatan": 2
    },
    "bea_cukai": {
      "tarif": 17,
      "kepuasan": 86,
      "pendapatan": 2
    },
    "lingkungan": {
      "tarif": 14,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 28,
      "kepuasan": 93,
      "pendapatan": 1
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 40,
    "gaji_guru": 40,
    "gaji_medis": 50,
    "gaji_militer": 60
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 25,
    "subsidi_umkm": 25,
    "subsidi_transportasi": 25,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 22400,
    "harga_daging_sapi": 208200,
    "harga_ayam": 20500,
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 31100,
    "harga_bbm": 8560,
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
      "kekuatan_lunak": 19,
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
    "kesehatan": 29,
    "pendidikan": 40,
    "keamanan": 6,
    "keuangan": 10,
    "lingkungan": 60
  }
};
