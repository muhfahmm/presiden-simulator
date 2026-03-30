import { CountryData } from "@/app/database/data/types";
import { togo_agrikultur } from "@/app/database/data/semua_fitur_negara/1_produksi/7_sektor_agrikultur/afrika/52_togo";
import { togo_armada } from "@/app/database/data/semua_fitur_negara/2_militer/2_armada_militer/afrika/52_togo";
import { togo_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_produksi/4_sektor_ekstraksi/afrika/52_togo";
import { togo_farmasi } from "@/app/database/data/semua_fitur_negara/1_produksi/10_sektor_farmasi/afrika/52_togo";
import { togo_hukum } from "@/app/database/data/semua_fitur_negara/3_sosial/3_hukum/afrika/52_togo";
import { togo_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_produksi/3_infrastruktur/afrika/52_togo";
import { togo_kepolisian } from "@/app/database/data/semua_fitur_negara/2_militer/4_armada_kepolisian/afrika/52_togo";
import { togo_kesehatan } from "@/app/database/data/semua_fitur_negara/3_sosial/2_kesehatan/afrika/52_togo";
import { togo_listrik } from "@/app/database/data/semua_fitur_negara/1_produksi/2_kelistrikan/afrika/52_togo";
import { togo_manufaktur } from "@/app/database/data/semua_fitur_negara/1_produksi/5_sektor_manufaktur/afrika/52_togo";
import { togo_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_produksi/9_sektor_olahan_pangan/afrika/52_togo";
import { togo_olahraga } from "@/app/database/data/semua_fitur_negara/3_sosial/4_olahraga/afrika/52_togo";
import { togo_pabrik } from "@/app/database/data/semua_fitur_negara/2_militer/5_pabrik_militer/afrika/52_togo";
import { togo_pendidikan } from "@/app/database/data/semua_fitur_negara/3_sosial/1_pendidikan/afrika/52_togo";
import { togo_perikanan } from "@/app/database/data/semua_fitur_negara/1_produksi/8_sektor_perikanan/afrika/52_togo";
import { togo_pertahanan } from "@/app/database/data/semua_fitur_negara/2_militer/1_sektor_pertahanan/afrika/52_togo";
import { togo_peternakan } from "@/app/database/data/semua_fitur_negara/1_produksi/6_sektor_peternakan/afrika/52_togo";
import { togo_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/afrika/52_togo";
import { togo_strategis } from "@/app/database/data/semua_fitur_negara/2_militer/3_militer_strategis/afrika/52_togo";
import { togo_geopolitik } from "@/app/database/data/semua_fitur_negara/4_geopolitik/afrika/52_togo";

export const togo: CountryData = {
  ...togo_profile,
  "sektor_listrik": togo_listrik,
  "infrastruktur": togo_infrastruktur,
  "sektor_ekstraksi": togo_ekstraksi,
  "sektor_manufaktur": togo_manufaktur,
  "sektor_peternakan": togo_peternakan,
  "sektor_agrikultur": togo_agrikultur,
  "sektor_perikanan": togo_perikanan,
  "sektor_olahan_pangan": togo_olahan_pangan,
  "sektor_farmasi": togo_farmasi,
  "sektor_pertahanan": togo_pertahanan,
  "armada_militer": togo_armada,
  "militer_strategis": togo_strategis,
  "armada_kepolisian": togo_kepolisian,
  "pabrik_militer": togo_pabrik,
    "pendidikan": togo_pendidikan,
  "kesehatan": togo_kesehatan,
  "hukum": togo_hukum,
  "sektor_olahraga": togo_olahraga,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 30,
      "kepuasan": 67,
      "pendapatan": 5
    },
    "korporasi": {
      "tarif": 7,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 5,
      "kepuasan": 61,
      "pendapatan": 1
    },
    "bea_cukai": {
      "tarif": 28,
      "kepuasan": 86,
      "pendapatan": 4
    },
    "lingkungan": {
      "tarif": 1,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 35,
      "kepuasan": 93,
      "pendapatan": 8
    }
  },
  // =============================================================
  // 12. ðŸ’° GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 40,
    "gaji_guru": 40,
    "gaji_medis": 50,
    "gaji_militer": 50
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 25,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 25,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12800,
    "harga_daging_sapi": 52050,
    "harga_ayam": 82000,
    "harga_minyak_goreng": 12320,
    "harga_gula": 20160,
    "harga_telur": 31100,
    "harga_bbm": 8560,
    "harga_listrik": 1280,
    "harga_air": 5200,
    "harga_obat": 78950,
    "harga_pendidikan": 483900
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": togo_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 22,
    "pendidikan": 30,
    "keamanan": 2,
    "keuangan": 11,
    "lingkungan": 60
  }
};

