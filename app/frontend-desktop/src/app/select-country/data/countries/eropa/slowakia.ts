import { CountryData } from "../../types";

export const slowakia: CountryData = {
  "name_en": "Slovakia",
  "capital": "Bratislava",
  "name_id": "Slowakia",
  "lon": 19.5,
  "lat": 48.66666666,
  "flag": "🇸🇰",
  "jumlah_penduduk": 5446771,
  "anggaran": 1264,
  "pendapatan_nasional": "3611",
  "religion": "Katolik",
  "ideology": "Demokrasi",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 14,
    "pembangkit_air": 22,
    "pembangkit_surya": 8,
    "pembangkit_termal": 30,
    "pembangkit_gas": 8,
    "pembangkit_angin": 39,
    "jaringan_listrik": 93
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 24,
    "kereta_bawah_tanah": 3,
    "jalur_kereta": 1,
    "jalan_tol": 40,
    "kualitas_jalan": 74,
    "pelabuhan_laut": 4,
    "bandara": 39,
    "terminal_bus": 8,
    "helipad": 33,
    "cakupan_internet": 56,
    "indeks_teknologi": 89,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 7,
    "uranium": 38,
    "batu_bara": 27,
    "minyak_bumi": 30,
    "gas_alam": 4,
    "garam": 23,
    "nikel": 5,
    "litium": 38,
    "aluminium": 22,
    "tembaga": 1,
    "logam_tanah_jarang": 21,
    "bijih_besi": 7,
    "kekuatan": 29.660809349923973
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 7,
    "mobil": 33,
    "sepeda_motor": 18,
    "smelter": 1,
    "semen_beton": 11,
    "kayu": 20,
    "air_mineral": 33,
    "gula": 26,
    "roti": 15,
    "farmasi": 34,
    "pupuk": 6,
    "pengolahan_daging": 12,
    "mie_instan": 38,
    "kekuatan": 3.076011687404966
  },
  // =============================================================
  // 5. 🐄 PETERNAKAN & PERIKANAN
  // =============================================================

  "sektor_peternakan": {
    "ayam": 13,
    "unggas": 20,
    "sapi_perah": 14,
    "sapi_potong": 33,
    "domba_kambing": 14,
    "udang": 34,
    "ikan": 5,
    "kerang": 14,
    "kekuatan": 18.24560701244298
  },
  // =============================================================
  // 6. 🌾 PERTANIAN & PERKEBUNAN
  // =============================================================

  "sektor_pertanian": {
    "beras": 7,
    "gandum": 36,
    "jagung": 18,
    "umbi_umbian": 28,
    "kedelai": 16,
    "kelapa_sawit": 39,
    "teh": 12,
    "kopi": 32,
    "cokelat": 36,
    "tebu": 25,
    "sayur_sayuran": 20,
    "kekuatan": 20.660809349923973
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 12,
    "gudang_senjata": 19,
    "hangar_tank": 36,
    "akademi_militer": 19,
    "pusat_komando": 15,
    "pangkalan_udara": 5,
    "pangkalan_laut": 27,
    "program_luar_angkasa": 24,
    "pertahanan_siber": 34,
    "anggaran_pertahanan": 361,
    "personel": 9966,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 10,
    "infanteri": 40,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 11,
        "apc": 35,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 39,
        "kapal_destroyer": 23,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_siluman": 72,
        "helikopter_serang": 59,
        "pesawat_pengintai": 2
      },
      "total_unit": 36,
      "kesiapan": 98
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "intel_radar": { "sistem_satelit": 4,
      "jaringan_radar": 0,
      "operasi_siber": 2 },
    "armada_polisi": { "patroli_lantas": {
          "mobil_patroli": 8,
          "sepeda_motor": 2,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 1,
          "helikopter_polisi": 7,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 30,
          "kamera_pengawas": 36,
          "pusat_forensik": 1
        },
        "waktu_respon": 4,
        "kepercayaan_publik": 50 },
    "intelijen": 39,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 23,
      "misi_mata_mata": 38,
      "misi_sabotase": 26,
      "manajemen_wilayah": 23,
      "program_nuklir": 0 }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 24,
      "sd": 26,
      "smp": 4,
      "sma": 23,
      "universitas": 30,
      "lembaga_pendidikan": 18,
      "laboratorium": 1,
      "observatorium": 20,
      "pusat_penelitian": 36,
      "pusat_pengembangan": 4,
      "literasi": 56,
      "indeks_penelitian": 0
    },
    "kesehatan": {
      "rumah_sakit_besar": 6,
      "rumah_sakit_kecil": 18,
      "pusat_diagnostik": 21,
      "tempat_tidur_rs": 5409,
      "harapan_hidup": 15,
      "indeks_kesehatan": 85
    },
    "olahraga": {
      "kolam_renang": 24,
      "sirkuit_balap": 22,
      "stadion": 20,
      "stadion_internasional": 20,
      "skor_olimpiade": 33,
      "popularitas": 44
    },
    "hukum": {
      "pusat_bantuan_hukum": 22,
      "pengadilan": 25,
      "kejaksaan": 14,
      "pos_polisi": 3,
      "armada_mobil_polisi": 1466,
      "akademi_polisi": 18,
      "indeks_korupsi": 65,
      "indeks_keamanan": 68
  }
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 13,
      "kepuasan": 67,
      "pendapatan": 25
    },
    "korporasi": {
      "tarif": 13,
      "kepuasan": 52,
      "pendapatan": 39
    },
    "penghasilan": {
      "tarif": 38,
      "kepuasan": 61,
      "pendapatan": 89
    },
    "bea_cukai": {
      "tarif": 27,
      "kepuasan": 86,
      "pendapatan": 56
    },
    "lingkungan": {
      "tarif": 1,
      "kepuasan": 88,
      "pendapatan": 3
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 7 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 19 },
    "lainnya": {
      "tarif": 32,
      "kepuasan": 93,
      "pendapatan": 94
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 100,
    "gaji_guru": 90,
    "gaji_medis": 90,
    "gaji_militer": 80
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 100,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 12800,
    "harga_daging_sapi": 145740,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 12320,
    "harga_gula": 20160,
    "harga_telur": 43540,
    "harga_bbm": 14980,
    "harga_listrik": 2240,
    "harga_air": 5200,
    "harga_obat": 126320,
    "harga_pendidikan": 387120
  },
  // =============================================================
  // 14. 📊 PERMINTAAN & KEBUTUHAN RAKYAT
  // =============================================================

  "permintaan": {
    "kepuasan": 77,
    "permintaan_utama": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "perumahan": 6,
    "komersial": 29,
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
      "kekuatan_lunak": 13,
      "kekuatan_keras": 38,
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
    "kesehatan": 22,
    "pendidikan": 30,
    "keamanan": 14,
    "keuangan": 28,
    "lingkungan": 60
  }
};
