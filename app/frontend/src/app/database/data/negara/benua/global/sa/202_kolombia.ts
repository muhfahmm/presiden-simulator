import { CountryData } from "@/app/database/data/types";
import { kolombia_agrikultur } from "@/app/database/data/semua_fitur_negara/1_produksi/7_sektor_agrikultur/sa/202_kolombia";
import { kolombia_armada } from "@/app/database/data/semua_fitur_negara/2_militer/2_armada_militer/sa/202_kolombia";
import { kolombia_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_produksi/4_sektor_ekstraksi/sa/202_kolombia";
import { kolombia_farmasi } from "@/app/database/data/semua_fitur_negara/1_produksi/10_sektor_farmasi/sa/202_kolombia";
import { kolombia_hukum } from "@/app/database/data/semua_fitur_negara/3_sosial/3_hukum/sa/202_kolombia";
import { kolombia_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_produksi/3_infrastruktur/sa/202_kolombia";
import { kolombia_kepolisian } from "@/app/database/data/semua_fitur_negara/2_militer/4_armada_kepolisian/sa/202_kolombia";
import { kolombia_kesehatan } from "@/app/database/data/semua_fitur_negara/3_sosial/2_kesehatan/sa/202_kolombia";
import { kolombia_listrik } from "@/app/database/data/semua_fitur_negara/1_produksi/2_kelistrikan/sa/202_kolombia";
import { kolombia_manufaktur } from "@/app/database/data/semua_fitur_negara/1_produksi/5_sektor_manufaktur/sa/202_kolombia";
import { kolombia_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_produksi/9_sektor_olahan_pangan/sa/202_kolombia";
import { kolombia_olahraga } from "@/app/database/data/semua_fitur_negara/3_sosial/4_olahraga/sa/202_kolombia";
import { kolombia_pabrik } from "@/app/database/data/semua_fitur_negara/2_militer/5_pabrik_militer/sa/202_kolombia";
import { kolombia_pendidikan } from "@/app/database/data/semua_fitur_negara/3_sosial/1_pendidikan/sa/202_kolombia";
import { kolombia_perikanan } from "@/app/database/data/semua_fitur_negara/1_produksi/8_sektor_perikanan/sa/202_kolombia";
import { kolombia_pertahanan } from "@/app/database/data/semua_fitur_negara/2_militer/1_sektor_pertahanan/sa/202_kolombia";
import { kolombia_peternakan } from "@/app/database/data/semua_fitur_negara/1_produksi/6_sektor_peternakan/sa/202_kolombia";
import { kolombia_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/sa/202_kolombia";
import { kolombia_strategis } from "@/app/database/data/semua_fitur_negara/2_militer/3_militer_strategis/sa/202_kolombia";
import { kolombia_geopolitik } from "@/app/database/data/semua_fitur_negara/4_geopolitik/sa/202_kolombia";

export const kolombia: CountryData = {
  ...kolombia_profile,
  "sektor_listrik": kolombia_listrik,
  "infrastruktur": kolombia_infrastruktur,
  "sektor_ekstraksi": kolombia_ekstraksi,
  "sektor_manufaktur": kolombia_manufaktur,
  "sektor_peternakan": kolombia_peternakan,
  "sektor_agrikultur": kolombia_agrikultur,
  "sektor_perikanan": kolombia_perikanan,
  "sektor_olahan_pangan": kolombia_olahan_pangan,
  "sektor_farmasi": kolombia_farmasi,
  "sektor_pertahanan": kolombia_pertahanan,
  "armada_militer": kolombia_armada,
  "militer_strategis": kolombia_strategis,
  "armada_kepolisian": kolombia_kepolisian,
  "pabrik_militer": kolombia_pabrik,
    "pendidikan": kolombia_pendidikan,
  "kesehatan": kolombia_kesehatan,
  "hukum": kolombia_hukum,
  "sektor_olahraga": kolombia_olahraga,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 9,
      "kepuasan": 67,
      "pendapatan": 34
    },
    "korporasi": {
      "tarif": 14,
      "kepuasan": 52,
      "pendapatan": 120
    },
    "penghasilan": {
      "tarif": 18,
      "kepuasan": 61,
      "pendapatan": 93
    },
    "bea_cukai": {
      "tarif": 31,
      "kepuasan": 86,
      "pendapatan": 136
    },
    "lingkungan": {
      "tarif": 1,
      "kepuasan": 88,
      "pendapatan": 6
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 17 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 50 },
    "lainnya": {
      "tarif": 8,
      "kepuasan": 93,
      "pendapatan": 60
    }
  },
  // =============================================================
  // 12. ðŸ’° GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 60,
    "gaji_guru": 60,
    "gaji_medis": 60,
    "gaji_militer": 60
  },
  "subsidi": {
    "subsidi_energi": 75,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 32000,
    "harga_daging_sapi": 104100,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 21560,
    "harga_gula": 20160,
    "harga_telur": 24880,
    "harga_bbm": 21400,
    "harga_listrik": 1600,
    "harga_air": 4160,
    "harga_obat": 78950,
    "harga_pendidikan": 387120
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": kolombia_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 22,
    "pendidikan": 21,
    "keamanan": 5,
    "keuangan": 26,
    "lingkungan": 60
  }
};

