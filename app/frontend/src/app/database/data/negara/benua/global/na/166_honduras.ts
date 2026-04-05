import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { honduras_agrikultur } from "@/app/database/data/semua_fitur_negara/1_produksi/5_sektor_agrikultur/na/166_honduras";
import { honduras_armada } from "@/app/database/data/semua_fitur_negara/2_militer/2_armada_militer/na/166_honduras";
import { honduras_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_produksi/2_sektor_mineral_kritis/na/166_honduras";
import { honduras_farmasi } from "@/app/database/data/semua_fitur_negara/1_produksi/8_sektor_farmasi/na/166_honduras";
import { honduras_hukum } from "@/app/database/data/semua_fitur_negara/3_sosial/3_hukum/na/166_honduras";
import { honduras_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_produksi/9_infrastruktur/na/166_honduras";
import { honduras_kepolisian } from "@/app/database/data/semua_fitur_negara/2_militer/4_armada_kepolisian/na/166_honduras";
import { honduras_kesehatan } from "@/app/database/data/semua_fitur_negara/3_sosial/2_kesehatan/na/166_honduras";
import { honduras_listrik } from "@/app/database/data/semua_fitur_negara/1_produksi/1_sektor_listrik_nasional/na/166_honduras";
import { honduras_manufaktur } from "@/app/database/data/semua_fitur_negara/1_produksi/3_manufaktur/na/166_honduras";
import { honduras_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_produksi/7_sektor_olahan_pangan/na/166_honduras";
import { honduras_olahraga } from "@/app/database/data/semua_fitur_negara/3_sosial/4_olahraga/na/166_honduras";
import { honduras_pabrik } from "@/app/database/data/semua_fitur_negara/2_militer/5_pabrik_militer/na/166_honduras";
import { honduras_pendidikan } from "@/app/database/data/semua_fitur_negara/3_sosial/1_pendidikan/na/166_honduras";
import { honduras_perikanan } from "@/app/database/data/semua_fitur_negara/1_produksi/6_sektor_perikanan/na/166_honduras";
import { honduras_pertahanan } from "@/app/database/data/semua_fitur_negara/2_militer/1_sektor_pertahanan/na/166_honduras";
import { honduras_peternakan } from "@/app/database/data/semua_fitur_negara/1_produksi/4_sektor_peternakan/na/166_honduras";
import { honduras_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/na/166_honduras";
import { honduras_strategis } from "@/app/database/data/semua_fitur_negara/2_militer/3_militer_strategis/na/166_honduras";
import { honduras_geopolitik } from "@/app/database/data/semua_fitur_negara/4_geopolitik/na/166_honduras";

export const honduras: CountryData = {
  ...honduras_profile,
  "sektor_listrik": honduras_listrik,
  "infrastruktur": honduras_infrastruktur,
  "sektor_ekstraksi": honduras_ekstraksi,
  "sektor_manufaktur": honduras_manufaktur,
  "sektor_peternakan": honduras_peternakan,
  "sektor_agrikultur": honduras_agrikultur,
  "sektor_perikanan": honduras_perikanan,
  "sektor_olahan_pangan": honduras_olahan_pangan,
  "sektor_farmasi": honduras_farmasi,
  "sektor_pertahanan": honduras_pertahanan,
  "armada_militer": honduras_armada,
  "militer_strategis": honduras_strategis,
  "armada_kepolisian": honduras_kepolisian,
  "pabrik_militer": honduras_pabrik,
    "pendidikan": honduras_pendidikan,
  "kesehatan": honduras_kesehatan,
  "hukum": honduras_hukum,
  "sektor_olahraga": honduras_olahraga,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 38,
      "kepuasan": 67,
      "pendapatan": 17
    },
    "korporasi": {
      "tarif": 25,
      "kepuasan": 52,
      "pendapatan": 18
    },
    "penghasilan": {
      "tarif": 16,
      "kepuasan": 61,
      "pendapatan": 7
    },
    "bea_cukai": {
      "tarif": 25,
      "kepuasan": 86,
      "pendapatan": 16
    },
    "lingkungan": {
      "tarif": 8,
      "kepuasan": 88,
      "pendapatan": 7
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 2 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 5 },
    "lainnya": {
      "tarif": 16,
      "kepuasan": 93,
      "pendapatan": 13
    }
  },
  // =============================================================
  // 12. ðŸ’° GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 90,
    "gaji_guru": 90,
    "gaji_medis": 100,
    "gaji_militer": 90
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 100,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 145740,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 43540,
    "harga_bbm": 14980,
    "harga_listrik": 3200,
    "harga_air": 5200,
    "harga_obat": 221060,
    "harga_pendidikan": 241950
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": honduras_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 21,
    "pendidikan": 4,
    "keamanan": 14,
    "keuangan": 21,
    "lingkungan": 60
  }
};

