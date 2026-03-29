import { CountryData } from "@/app/database/data/types";
import { ghana_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/afrika/15_ghana";
import { ghana_armada } from "../../modules/2_militer/2_armada_militer/afrika/15_ghana";
import { ghana_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/afrika/15_ghana";
import { ghana_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/afrika/15_ghana";
import { ghana_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/afrika/15_ghana";
import { ghana_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/afrika/15_ghana";
import { ghana_listrik } from "../../modules/1_ekonomi/2_kelistrikan/afrika/15_ghana";
import { ghana_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/afrika/15_ghana";
import { ghana_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/afrika/15_ghana";
import { ghana_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/afrika/15_ghana";
import { ghana_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/afrika/15_ghana";
import { ghana_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/afrika/15_ghana";
import { ghana_profile } from "../../modules/0_profiles/afrika/15_ghana";
import { ghana_strategis } from "../../modules/2_militer/3_militer_strategis/afrika/15_ghana";

export const ghana: CountryData = {
  ...ghana_profile,
  "sektor_listrik": ghana_listrik,
  "infrastruktur": ghana_infrastruktur,
  "sektor_ekstraksi": ghana_ekstraksi,
  "sektor_manufaktur": ghana_manufaktur,
  "sektor_peternakan": ghana_peternakan,
  "sektor_agrikultur": ghana_agrikultur,
  "sektor_perikanan": ghana_perikanan,
  "sektor_olahan_pangan": ghana_olahan_pangan,
  "sektor_farmasi": ghana_farmasi,
  "sektor_pertahanan": ghana_pertahanan,
  "armada_militer": ghana_armada,
  "militer_strategis": ghana_strategis,
  "armada_kepolisian": ghana_kepolisian,
  "pabrik_militer": {
    "pabrik_drone_kamikaze": 0,
    "pabrik_amunisi": 0,
    "pabrik_kendaraan_tempur": 0,
    "pabrik_senjata_berat": 0
  },
  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 29,
      "dasar": 16,
      "menengah": 24,
      "lanjutan": 3,
      "universitas": 37,
      "lembaga_pendidikan": 39,
      "laboratorium": 6,
      "observatorium": 18,
      "pusat_penelitian": 23,
      "pusat_pengembangan": 18,
      "literasi": 56
  },
    "kesehatan": {
      "rumah_sakit_besar": 23,
      "rumah_sakit_kecil": 9,
      "pusat_diagnostik": 29,
      "harapan_hidup": 18,
      "indeks_kesehatan": 85
  },
    "hukum": {
      "pusat_bantuan_hukum": 33,
      "pengadilan": 25,
      "kejaksaan": 20,
      "pos_polisi": 9,
      "armada_mobil_polisi": 5653,
      "akademi_polisi": 19,
      "indeks_korupsi": 65,
      "indeks_keamanan": 60
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 19,
      "sirkuit_balap": 9,
      "stadion": 13,
      "stadion_internasional": 24
  },
  "un_vote": 125,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 36,
      "kepuasan": 67,
      "pendapatan": 55
    },
    "korporasi": {
      "tarif": 21,
      "kepuasan": 52,
      "pendapatan": 45
    },
    "penghasilan": {
      "tarif": 29,
      "kepuasan": 61,
      "pendapatan": 42
    },
    "bea_cukai": {
      "tarif": 14,
      "kepuasan": 86,
      "pendapatan": 10
    },
    "lingkungan": {
      "tarif": 19,
      "kepuasan": 88,
      "pendapatan": 29
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 4 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 12 },
    "lainnya": {
      "tarif": 17,
      "kepuasan": 93,
      "pendapatan": 24
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 30,
    "gaji_guru": 40,
    "gaji_medis": 50,
    "gaji_militer": 50
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 25,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 25,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 32000,
    "harga_daging_sapi": 83280,
    "harga_ayam": 32800,
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 31100,
    "harga_bbm": 14980,
    "harga_listrik": 1600,
    "harga_air": 7280,
    "harga_obat": 315800,
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
      "kekuatan_lunak": 17,
      "kekuatan_keras": 21,
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
    "kesehatan": 11,
    "pendidikan": 6,
    "keamanan": 22,
    "keuangan": 17,
    "lingkungan": 60
  }
};
