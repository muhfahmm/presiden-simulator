import { CountryData } from "@/app/database/data/types";
import { nigeria_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/afrika/35_nigeria";
import { nigeria_armada } from "../../modules/2_militer/2_armada_militer/afrika/35_nigeria";
import { nigeria_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/afrika/35_nigeria";
import { nigeria_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/afrika/35_nigeria";
import { nigeria_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/afrika/35_nigeria";
import { nigeria_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/afrika/35_nigeria";
import { nigeria_listrik } from "../../modules/1_ekonomi/2_kelistrikan/afrika/35_nigeria";
import { nigeria_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/afrika/35_nigeria";
import { nigeria_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/afrika/35_nigeria";
import { nigeria_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/afrika/35_nigeria";
import { nigeria_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/afrika/35_nigeria";
import { nigeria_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/afrika/35_nigeria";
import { nigeria_profile } from "../../modules/0_profiles/afrika/35_nigeria";
import { nigeria_strategis } from "../../modules/2_militer/3_militer_strategis/afrika/35_nigeria";

export const nigeria: CountryData = {
  ...nigeria_profile,
  "sektor_listrik": nigeria_listrik,
  "infrastruktur": nigeria_infrastruktur,
  "sektor_ekstraksi": nigeria_ekstraksi,
  "sektor_manufaktur": nigeria_manufaktur,
  "sektor_peternakan": nigeria_peternakan,
  "sektor_agrikultur": nigeria_agrikultur,
  "sektor_perikanan": nigeria_perikanan,
  "sektor_olahan_pangan": nigeria_olahan_pangan,
  "sektor_farmasi": nigeria_farmasi,
  "sektor_pertahanan": nigeria_pertahanan,
  "armada_militer": nigeria_armada,
  "militer_strategis": nigeria_strategis,
  "armada_kepolisian": nigeria_kepolisian,
  "pabrik_militer": {
    "pabrik_drone_kamikaze": 0,
    "pabrik_amunisi": 0,
    "pabrik_kendaraan_tempur": 0,
    "pabrik_senjata_berat": 0
  },
  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 34,
      "dasar": 11,
      "menengah": 14,
      "lanjutan": 3,
      "universitas": 10,
      "lembaga_pendidikan": 24,
      "laboratorium": 33,
      "observatorium": 29,
      "pusat_penelitian": 22,
      "pusat_pengembangan": 16,
      "literasi": 66
  },
    "kesehatan": {
      "rumah_sakit_besar": 39,
      "rumah_sakit_kecil": 13,
      "pusat_diagnostik": 8,
      "harapan_hidup": 1,
      "indeks_kesehatan": 85
  },
    "hukum": {
      "pusat_bantuan_hukum": 6,
      "pengadilan": 2,
      "kejaksaan": 17,
      "pos_polisi": 34,
      "armada_mobil_polisi": 8695,
      "akademi_polisi": 14,
      "indeks_korupsi": 73,
      "indeks_keamanan": 56
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 17,
      "sirkuit_balap": 8,
      "stadion": 25,
      "stadion_internasional": 32
  },
  "un_vote": 175,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 10,
      "kepuasan": 67,
      "pendapatan": 99
    },
    "korporasi": {
      "tarif": 40,
      "kepuasan": 52,
      "pendapatan": 255
    },
    "penghasilan": {
      "tarif": 30,
      "kepuasan": 61,
      "pendapatan": 323
    },
    "bea_cukai": {
      "tarif": 17,
      "kepuasan": 86,
      "pendapatan": 131
    },
    "lingkungan": {
      "tarif": 10,
      "kepuasan": 88,
      "pendapatan": 58
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 24 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 70 },
    "lainnya": {
      "tarif": 21,
      "kepuasan": 93,
      "pendapatan": 236
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
    "subsidi_energi": 50,
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
    "harga_daging_sapi": 52050,
    "harga_ayam": 32800,
    "harga_minyak_goreng": 30800,
    "harga_gula": 7200,
    "harga_telur": 43540,
    "harga_bbm": 14980,
    "harga_listrik": 2240,
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
      "kekuatan_lunak": 37,
      "kekuatan_keras": 1,
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
    "pendidikan": 15,
    "keamanan": 26,
    "keuangan": 21,
    "lingkungan": 60
  }
};
