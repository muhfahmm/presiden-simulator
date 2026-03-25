import { CountryData } from "../../types";

export const aljazair: CountryData = {
  "name_en": "Algeria",
  "capital": "Algiers",
  "name_id": "Aljazair",
  "lon": 3.08,
  "lat": 36.73,
  "flag": "🇩🇿",
  "jumlah_penduduk": 42228429,
  "anggaran": 2334,
  "pendapatan_nasional": "6667",
  "religion": "Islam",
  "ideology": "Nasionalisme",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_gas": 7,
    "pembangkit_air": 3,
    "pembangkit_nuklir": 35,
    "jaringan_listrik": 95,
    "pembangkit_surya": 21,
    "pembangkit_termal": 8,
    "pembangkit_angin": 22
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "bandara": 12,
    "jalur_sepeda": 32,
    "terminal_bus": 17,
    "helipad": 2,
    "jalan_tol": 30,
    "cakupan_internet": 78,
    "jalur_kereta": 12,
    "kualitas_jalan": 90,
    "pelabuhan_laut": 15,
    "kereta_bawah_tanah": 34,
    "indeks_teknologi": 69,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "aluminium": 15,
    "batu_bara": 39,
    "tembaga": 3,
    "gas_alam": 80,
    "emas": 27,
    "bijih_besi": 21,
    "litium": 38,
    "nikel": 3,
    "minyak_bumi": 75,
    "logam_tanah_jarang": 12,
    "garam": 12,
    "kekuatan": 29.660809349923973,
    "uranium": 15
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "roti": 3,
    "mobil": 2,
    "semen_beton": 21,
    "pupuk": 11,
    "mie_instan": 21,
    "pengolahan_daging": 36,
    "air_mineral": 19,
    "sepeda_motor": 2,
    "farmasi": 36,
    "semikonduktor": 29,
    "smelter": 12,
    "kekuatan": 3.076011687404966,
    "gula": 2,
    "kayu": 13
  },
  // =============================================================
  // 5. 🐄 PETERNAKAN & PERIKANAN
  // =============================================================

  "sektor_peternakan": {
    "sapi_potong": 16,
    "ayam": 38,
    "sapi_perah": 2,
    "ikan": 36,
    "unggas": 2,
    "domba_kambing": 26,
    "kerang": 15,
    "udang": 16,
    "kekuatan": 18.24560701244298
  },
  // =============================================================
  // 6. 🌾 PERTANIAN & PERKEBUNAN
  // =============================================================

  "sektor_pertanian": {
    "cokelat": 8,
    "kopi": 38,
    "jagung": 8,
    "kelapa_sawit": 18,
    "beras": 2,
    "kedelai": 28,
    "kekuatan": 20.660809349923973,
    "tebu": 33,
    "teh": 37,
    "umbi_umbian": 24,
    "sayur_sayuran": 34,
    "gandum": 10
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 3,
    "gudang_senjata": 16,
    "hangar_tank": 20,
    "akademi_militer": 14,
    "pusat_komando": 31,
    "pangkalan_udara": 23,
    "pangkalan_laut": 18,
    "program_luar_angkasa": 21,
    "pertahanan_siber": 11,
    "anggaran_pertahanan": 666,
    "personel": 29427,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 32,
    "infanteri": 17,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 25,
        "apc": 29,
        "artileri_berat": 26
  },
      "laut": {
        "kapal_induk": 34,
        "kapal_destroyer": 39,
        "kapal_selam_nuklir": 0
  },
      "udara": {
        "jet_tempur_siluman": 40,
        "helikopter_serang": 33,
        "pesawat_pengintai": 2
  },
      "total_unit": 25,
      "kesiapan": 98
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "intel_radar": { "sistem_satelit": 30,
      "jaringan_radar": 38,
      "operasi_siber": 2
  },
    "armada_polisi": { "patroli_lantas": {
          "mobil_patroli": 26,
          "sepeda_motor": 33,
          "unit_k9": 23
  },
        "taktis_khusus": {
          "swat": 38,
          "helikopter_polisi": 28,
          "anti_huru_hara": 62
  },
        "pusat_komando": {
          "kantor_polisi": 1,
          "kamera_pengawas": 25,
          "pusat_forensik": 1
  },
        "waktu_respon": 15,
        "kepercayaan_publik": 50
  },
    "intelijen": 1,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 32,
      "misi_mata_mata": 8,
      "misi_sabotase": 14,
      "manajemen_wilayah": 9,
      "program_nuklir": 0
  }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 23,
      "sd": 35,
      "smp": 5,
      "sma": 7,
      "universitas": 5,
      "lembaga_pendidikan": 16,
      "laboratorium": 6,
      "observatorium": 2,
      "pusat_penelitian": 24,
      "pusat_pengembangan": 19,
      "literasi": 60,
      "indeks_penelitian": 0
  },
    "kesehatan": {
      "rumah_sakit_besar": 35,
      "rumah_sakit_kecil": 4,
      "pusat_diagnostik": 33,
      "tempat_tidur_rs": 8595,
      "harapan_hidup": 39,
      "indeks_kesehatan": 85
  },
    "olahraga": {
      "kolam_renang": 20,
      "sirkuit_balap": 36,
      "stadion": 12,
      "stadion_internasional": 26,
      "skor_olimpiade": 36,
      "popularitas": 44
  },
    "hukum": {
      "pusat_bantuan_hukum": 10,
      "pengadilan": 2,
      "kejaksaan": 31,
      "pos_polisi": 24,
      "armada_mobil_polisi": 1704,
      "akademi_polisi": 34,
      "indeks_korupsi": 58,
      "indeks_keamanan": 61
  }
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 36,
      "kepuasan": 67,
      "pendapatan": 214
    },
    "korporasi": {
      "tarif": 13,
      "kepuasan": 52,
      "pendapatan": 49
    },
    "penghasilan": {
      "tarif": 33,
      "kepuasan": 61,
      "pendapatan": 196
    },
    "bea_cukai": {
      "tarif": 15,
      "kepuasan": 86,
      "pendapatan": 104
    },
    "lingkungan": {
      "tarif": 36,
      "kepuasan": 88,
      "pendapatan": 249
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 12 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 36 },
    "lainnya": {
      "tarif": 21,
      "kepuasan": 93,
      "pendapatan": 126
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 30,
    "gaji_guru": 40,
    "gaji_medis": 50,
    "gaji_militer": 60
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 25,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 208200,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 20160,
    "harga_telur": 31100,
    "harga_bbm": 5350,
    "harga_listrik": 1280,
    "harga_air": 5200,
    "harga_obat": 157900,
    "harga_pendidikan": 387120
  },
  // =============================================================
  // 14. 📊 PERMINTAAN & KEBUTUHAN RAKYAT
  // =============================================================

  "permintaan": {
    "kepuasan": 72,
    "permintaan_utama": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "perumahan": 3,
    "komersial": 36,
    "industri": 53
  },
  // =============================================================
  // 15. 🌍 GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================

  "geopolitik": {
    "sekutu": [
      "Amerika Serikat",
      "Uni Eropa"
    ],
    "musuh": [],
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 5,
      "kekuatan_keras": 14,
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
    "kesehatan": 21,
    "pendidikan": 5,
    "keamanan": 10,
    "keuangan": 12,
    "lingkungan": 60
  }
};
