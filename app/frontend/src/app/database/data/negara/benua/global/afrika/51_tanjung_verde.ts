import { CountryData } from "@/app/database/data/types";
import { tanjung_verde_agrikultur } from "@/app/database/data/semua_fitur_negara/1_produksi/7_sektor_agrikultur/afrika/51_tanjung_verde";
import { tanjung_verde_armada } from "@/app/database/data/semua_fitur_negara/2_militer/2_armada_militer/afrika/51_tanjung_verde";
import { tanjung_verde_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_produksi/4_sektor_ekstraksi/afrika/51_tanjung_verde";
import { tanjung_verde_farmasi } from "@/app/database/data/semua_fitur_negara/1_produksi/10_sektor_farmasi/afrika/51_tanjung_verde";
import { tanjung_verde_hukum } from "@/app/database/data/semua_fitur_negara/3_sosial/3_hukum/afrika/51_tanjung_verde";
import { tanjung_verde_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_produksi/3_infrastruktur/afrika/51_tanjung_verde";
import { tanjung_verde_kepolisian } from "@/app/database/data/semua_fitur_negara/2_militer/4_armada_kepolisian/afrika/51_tanjung_verde";
import { tanjung_verde_kesehatan } from "@/app/database/data/semua_fitur_negara/3_sosial/2_kesehatan/afrika/51_tanjung_verde";
import { tanjung_verde_listrik } from "@/app/database/data/semua_fitur_negara/1_produksi/2_kelistrikan/afrika/51_tanjung_verde";
import { tanjung_verde_manufaktur } from "@/app/database/data/semua_fitur_negara/1_produksi/5_sektor_manufaktur/afrika/51_tanjung_verde";
import { tanjung_verde_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_produksi/9_sektor_olahan_pangan/afrika/51_tanjung_verde";
import { tanjung_verde_olahraga } from "@/app/database/data/semua_fitur_negara/3_sosial/4_olahraga/afrika/51_tanjung_verde";
import { tanjung_verde_pabrik } from "@/app/database/data/semua_fitur_negara/2_militer/5_pabrik_militer/afrika/51_tanjung_verde";
import { tanjung_verde_pendidikan } from "@/app/database/data/semua_fitur_negara/3_sosial/1_pendidikan/afrika/51_tanjung_verde";
import { tanjung_verde_perikanan } from "@/app/database/data/semua_fitur_negara/1_produksi/8_sektor_perikanan/afrika/51_tanjung_verde";
import { tanjung_verde_pertahanan } from "@/app/database/data/semua_fitur_negara/2_militer/1_sektor_pertahanan/afrika/51_tanjung_verde";
import { tanjung_verde_peternakan } from "@/app/database/data/semua_fitur_negara/1_produksi/6_sektor_peternakan/afrika/51_tanjung_verde";
import { tanjung_verde_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/afrika/51_tanjung_verde";
import { tanjung_verde_strategis } from "@/app/database/data/semua_fitur_negara/2_militer/3_militer_strategis/afrika/51_tanjung_verde";
import { tanjung_verde_geopolitik } from "@/app/database/data/semua_fitur_negara/4_geopolitik/afrika/51_tanjung_verde";

export const tanjung_verde: CountryData = {
  ...tanjung_verde_profile,
  "sektor_listrik": tanjung_verde_listrik,
  "infrastruktur": tanjung_verde_infrastruktur,
  "sektor_ekstraksi": tanjung_verde_ekstraksi,
  "sektor_manufaktur": tanjung_verde_manufaktur,
  "sektor_peternakan": tanjung_verde_peternakan,
  "sektor_agrikultur": tanjung_verde_agrikultur,
  "sektor_perikanan": tanjung_verde_perikanan,
  "sektor_olahan_pangan": tanjung_verde_olahan_pangan,
  "sektor_farmasi": tanjung_verde_farmasi,
  "sektor_pertahanan": tanjung_verde_pertahanan,
  "armada_militer": tanjung_verde_armada,
  "militer_strategis": tanjung_verde_strategis,
  "armada_kepolisian": tanjung_verde_kepolisian,
  "pabrik_militer": tanjung_verde_pabrik,
    "pendidikan": tanjung_verde_pendidikan,
  "kesehatan": tanjung_verde_kesehatan,
  "hukum": tanjung_verde_hukum,
  "sektor_olahraga": tanjung_verde_olahraga,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 40,
      "kepuasan": 67,
      "pendapatan": 7
    },
    "korporasi": {
      "tarif": 31,
      "kepuasan": 52,
      "pendapatan": 6
    },
    "penghasilan": {
      "tarif": 15,
      "kepuasan": 61,
      "pendapatan": 3
    },
    "bea_cukai": {
      "tarif": 27,
      "kepuasan": 86,
      "pendapatan": 6
    },
    "lingkungan": {
      "tarif": 18,
      "kepuasan": 88,
      "pendapatan": 4
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 20,
      "kepuasan": 93,
      "pendapatan": 2
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 40,
    "gaji_guru": 40,
    "gaji_medis": 50,
    "gaji_militer": 40
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 25,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 25,
    "subsidi_transportasi": 25,
    "subsidi_perumahan": 0
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12800,
    "harga_daging_sapi": 52050,
    "harga_ayam": 32800,
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 31100,
    "harga_bbm": 8560,
    "harga_listrik": 3200,
    "harga_air": 4160,
    "harga_obat": 157900,
    "harga_pendidikan": 483900
  },
    // =============================================================
  // 15. 🌍 GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": tanjung_verde_geopolitik,
  // =============================================================
  // 16. 🏛️ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 17,
    "pendidikan": 4,
    "keamanan": 39,
    "keuangan": 13,
    "lingkungan": 60
  }
};
