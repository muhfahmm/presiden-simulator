import { CountryData } from "@/app/database/data/types";
import { fiji_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/oceania/180_fiji";
import { fiji_armada } from "../../modules/2_militer/2_armada_militer/oceania/180_fiji";
import { fiji_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/oceania/180_fiji";
import { fiji_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/oceania/180_fiji";
import { fiji_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/oceania/180_fiji";
import { fiji_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/oceania/180_fiji";
import { fiji_listrik } from "../../modules/1_ekonomi/2_kelistrikan/oceania/180_fiji";
import { fiji_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/oceania/180_fiji";
import { fiji_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/oceania/180_fiji";
import { fiji_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/oceania/180_fiji";
import { fiji_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/oceania/180_fiji";
import { fiji_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/oceania/180_fiji";
import { fiji_profile } from "../../modules/0_profiles/oceania/180_fiji";
import { fiji_strategis } from "../../modules/2_militer/3_militer_strategis/oceania/180_fiji";

export const fiji: CountryData = {
  ...fiji_profile,
  "sektor_listrik": fiji_listrik,
  "infrastruktur": fiji_infrastruktur,
  "sektor_ekstraksi": fiji_ekstraksi,
  "sektor_manufaktur": fiji_manufaktur,
  "sektor_peternakan": fiji_peternakan,
  "sektor_agrikultur": fiji_agrikultur,
  "sektor_perikanan": fiji_perikanan,
  "sektor_olahan_pangan": fiji_olahan_pangan,
  "sektor_farmasi": fiji_farmasi,
  "sektor_pertahanan": fiji_pertahanan,
  "armada_militer": fiji_armada,
  "militer_strategis": fiji_strategis,
  "armada_kepolisian": fiji_kepolisian,
  "pabrik_militer": {
    "pabrik_drone_kamikaze": 0,
    "pabrik_amunisi": 0,
    "pabrik_kendaraan_tempur": 0,
    "pabrik_senjata_berat": 0
  },
  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 13,
      "dasar": 36,
      "menengah": 17,
      "lanjutan": 29,
      "universitas": 17,
      "lembaga_pendidikan": 30,
      "laboratorium": 15,
      "observatorium": 24,
      "pusat_penelitian": 36,
      "pusat_pengembangan": 12,
      "literasi": 83
    },
    "kesehatan": {
      "rumah_sakit_besar": 36,
      "rumah_sakit_kecil": 24,
      "pusat_diagnostik": 11,
      "harapan_hidup": 39,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 37,
      "pengadilan": 28,
      "kejaksaan": 25,
      "pos_polisi": 7,
      "armada_mobil_polisi": 6507,
      "akademi_polisi": 23,
      "indeks_korupsi": 68,
      "indeks_keamanan": 67
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 17,
      "sirkuit_balap": 32,
      "stadion": 6,
      "stadion_internasional": 20
  },
  "un_vote": 113,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 31,
      "kepuasan": 67,
      "pendapatan": 4
    },
    "korporasi": {
      "tarif": 4,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 20,
      "kepuasan": 61,
      "pendapatan": 1
    },
    "bea_cukai": {
      "tarif": 1,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 4,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 1,
      "kepuasan": 93,
      "pendapatan": 0
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 90,
    "gaji_guru": 80,
    "gaji_medis": 90,
    "gaji_militer": 80
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 32000,
    "harga_daging_sapi": 52050,
    "harga_ayam": 82000,
    "harga_minyak_goreng": 21560,
    "harga_gula": 14400,
    "harga_telur": 31100,
    "harga_bbm": 8560,
    "harga_listrik": 2240,
    "harga_air": 7280,
    "harga_obat": 157900,
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
      "kekuatan_lunak": 37,
      "kekuatan_keras": 16,
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
    "kesehatan": 8,
    "pendidikan": 4,
    "keamanan": 17,
    "keuangan": 18,
    "lingkungan": 60
  }
};
