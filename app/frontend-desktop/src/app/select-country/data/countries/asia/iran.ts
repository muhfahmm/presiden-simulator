import { CountryData } from "../../types";

export const iran: CountryData = {
  "name_en": "Iran",
  "capital": "Tehran",
  "name_id": "Iran",
  "lon": 53,
  "lat": 32,
  "flag": "🇮🇷",
  "jumlah_penduduk": 81800269,
  "anggaran": 3598,
  "pendapatan_nasional": "10279",
  "religion": "Islam",
  "ideology": "Konservatisme",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 22,
    "pembangkit_air": 14,
    "pembangkit_surya": 36,
    "pembangkit_termal": 30,
    "pembangkit_gas": 22,
    "pembangkit_angin": 7,
    "jaringan_listrik": 80
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 8,
    "kereta_bawah_tanah": 27,
    "jalur_kereta": 20,
    "jalan_tol": 35,
    "kualitas_jalan": 67,
    "pelabuhan_laut": 22,
    "bandara": 30,
    "terminal_bus": 21,
    "helipad": 33,
    "cakupan_internet": 83,
    "indeks_teknologi": 68,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 37,
    "uranium": 16,
    "batu_bara": 31,
    "minyak_bumi": 15,
    "gas_alam": 18,
    "garam": 2,
    "nikel": 26,
    "litium": 7,
    "aluminium": 27,
    "tembaga": 14,
    "logam_tanah_jarang": 27,
    "bijih_besi": 15,
    "kekuatan": 29.660809349923973
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 6,
    "mobil": 20,
    "sepeda_motor": 9,
    "smelter": 17,
    "semen_beton": 11,
    "kayu": 4,
    "air_mineral": 13,
    "gula": 28,
    "roti": 30,
    "farmasi": 27,
    "pupuk": 30,
    "pengolahan_daging": 7,
    "mie_instan": 39,
    "kekuatan": 3.076011687404966
  },
  // =============================================================
  // 5. 🐄 PETERNAKAN & PERIKANAN
  // =============================================================

  "sektor_peternakan": {
    "ayam": 23,
    "unggas": 36,
    "sapi_perah": 20,
    "sapi_potong": 9,
    "domba_kambing": 10,
    "udang": 21,
    "ikan": 29,
    "kerang": 14,
    "kekuatan": 18.24560701244298
  },
  // =============================================================
  // 6. 🌾 PERTANIAN & PERKEBUNAN
  // =============================================================

  "sektor_pertanian": {
    "beras": 21,
    "gandum": 1,
    "jagung": 18,
    "umbi_umbian": 31,
    "kedelai": 7,
    "kelapa_sawit": 16,
    "teh": 4,
    "kopi": 39,
    "cokelat": 40,
    "tebu": 1,
    "sayur_sayuran": 8,
    "kekuatan": 20.660809349923973
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 18,
    "gudang_senjata": 17,
    "hangar_tank": 4,
    "akademi_militer": 5,
    "pusat_komando": 15,
    "pangkalan_udara": 16,
    "pangkalan_laut": 5,
    "program_luar_angkasa": 1,
    "pertahanan_siber": 13,
    "anggaran_pertahanan": 1027,
    "personel": 23614,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 26,
    "infanteri": 31,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 12,
        "apc": 16,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 8,
        "kapal_destroyer": 1,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_siluman": 13,
        "helikopter_serang": 35,
        "pesawat_pengintai": 2
      },
      "total_unit": 13,
      "kesiapan": 98
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "intel_radar": { "sistem_satelit": 39,
      "jaringan_radar": 26,
      "operasi_siber": 2 },
    "armada_polisi": { "patroli_lantas": {
          "mobil_patroli": 5,
          "sepeda_motor": 8,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 18,
          "helikopter_polisi": 22,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 29,
          "kamera_pengawas": 12,
          "pusat_forensik": 1
        },
        "waktu_respon": 39,
        "kepercayaan_publik": 50 },
    "intelijen": 13,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 28,
      "misi_mata_mata": 19,
      "misi_sabotase": 6,
      "manajemen_wilayah": 24,
      "program_nuklir": 0 }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 33,
      "sd": 2,
      "smp": 13,
      "sma": 25,
      "universitas": 5,
      "lembaga_pendidikan": 16,
      "laboratorium": 17,
      "observatorium": 6,
      "pusat_penelitian": 12,
      "pusat_pengembangan": 35,
      "literasi": 71,
      "indeks_penelitian": 0
    },
    "kesehatan": {
      "rumah_sakit_besar": 16,
      "rumah_sakit_kecil": 1,
      "pusat_diagnostik": 30,
      "tempat_tidur_rs": 8403,
      "harapan_hidup": 11,
      "indeks_kesehatan": 85
    },
    "olahraga": {
      "kolam_renang": 39,
      "sirkuit_balap": 34,
      "stadion": 33,
      "stadion_internasional": 36,
      "skor_olimpiade": 23,
      "popularitas": 44
    },
    "hukum": {
      "pusat_bantuan_hukum": 14,
      "pengadilan": 16,
      "kejaksaan": 35,
      "pos_polisi": 3,
      "armada_mobil_polisi": 9271,
      "akademi_polisi": 17,
      "indeks_korupsi": 74,
      "indeks_keamanan": 86
  }
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 30,
      "kepuasan": 67,
      "pendapatan": 267
    },
    "korporasi": {
      "tarif": 40,
      "kepuasan": 52,
      "pendapatan": 395
    },
    "penghasilan": {
      "tarif": 7,
      "kepuasan": 61,
      "pendapatan": 60
    },
    "bea_cukai": {
      "tarif": 11,
      "kepuasan": 86,
      "pendapatan": 74
    },
    "lingkungan": {
      "tarif": 13,
      "kepuasan": 88,
      "pendapatan": 137
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 18 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 54 },
    "lainnya": {
      "tarif": 18,
      "kepuasan": 93,
      "pendapatan": 131
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 50,
    "gaji_guru": 60,
    "gaji_medis": 80,
    "gaji_militer": 70
  },
  "subsidi": {
    "subsidi_energi": 75,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 32000,
    "harga_daging_sapi": 104100,
    "harga_ayam": 82000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 20160,
    "harga_telur": 43540,
    "harga_bbm": 21400,
    "harga_listrik": 1600,
    "harga_air": 5200,
    "harga_obat": 126320,
    "harga_pendidikan": 241950
  },
  // =============================================================
  // 14. 📊 PERMINTAAN & KEBUTUHAN RAKYAT
  // =============================================================

  "permintaan": {
    "kepuasan": 55,
    "permintaan_utama": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "perumahan": 7,
    "komersial": 7,
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
      "kekuatan_lunak": 14,
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
    "kesehatan": 5,
    "pendidikan": 16,
    "keamanan": 24,
    "keuangan": 4,
    "lingkungan": 60
  }
};
