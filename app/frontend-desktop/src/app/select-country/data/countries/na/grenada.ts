import { CountryData } from "../../types";

export const grenada: CountryData = {
  "name_en": "Grenada",
  "capital": "St. George's",
  "name_id": "Grenada",
  "lon": -61.66666666,
  "lat": 12.11666666,
  "flag": "🇬🇩",
  "jumlah_penduduk": 111454,
  "anggaran": 97,
  "pendapatan_nasional": "278",
  "religion": "Katolik",
  "ideology": "Demokrasi",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 21,
    "pembangkit_air": 25,
    "pembangkit_surya": 2,
    "pembangkit_termal": 28,
    "pembangkit_gas": 34,
    "pembangkit_angin": 29,
    "jaringan_listrik": 76
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 12,
    "kereta_bawah_tanah": 25,
    "jalur_kereta": 29,
    "jalan_tol": 20,
    "kualitas_jalan": 87,
    "pelabuhan_laut": 18,
    "bandara": 25,
    "terminal_bus": 7,
    "helipad": 5,
    "cakupan_internet": 85,
    "indeks_teknologi": 81,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 33,
    "uranium": 9,
    "batu_bara": 15,
    "minyak_bumi": 20,
    "gas_alam": 2,
    "garam": 2,
    "nikel": 16,
    "litium": 5,
    "aluminium": 23,
    "tembaga": 10,
    "logam_tanah_jarang": 10,
    "bijih_besi": 16,
    "kekuatan": 29.660809349923973
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 15,
    "mobil": 14,
    "sepeda_motor": 12,
    "smelter": 3,
    "semen_beton": 39,
    "kayu": 32,
    "air_mineral": 10,
    "gula": 29,
    "roti": 34,
    "farmasi": 4,
    "pupuk": 8,
    "pengolahan_daging": 40,
    "mie_instan": 20,
    "kekuatan": 3.076011687404966
  },
  // =============================================================
  // 5. 🐄 PETERNAKAN & PERIKANAN
  // =============================================================

  "sektor_peternakan": {
    "ayam": 31,
    "unggas": 12,
    "sapi_perah": 16,
    "sapi_potong": 29,
    "domba_kambing": 7,
    "udang": 29,
    "ikan": 8,
    "kerang": 39,
    "kekuatan": 18.24560701244298
  },
  // =============================================================
  // 6. 🌾 PERTANIAN & PERKEBUNAN
  // =============================================================

  "sektor_pertanian": {
    "beras": 39,
    "gandum": 11,
    "jagung": 23,
    "umbi_umbian": 4,
    "kedelai": 37,
    "kelapa_sawit": 34,
    "teh": 27,
    "kopi": 35,
    "cokelat": 24,
    "tebu": 21,
    "sayur_sayuran": 9,
    "kekuatan": 20.660809349923973
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 24,
    "gudang_senjata": 20,
    "hangar_tank": 21,
    "akademi_militer": 32,
    "pusat_komando": 14,
    "pangkalan_udara": 25,
    "pangkalan_laut": 11,
    "program_luar_angkasa": 6,
    "pertahanan_siber": 36,
    "anggaran_pertahanan": 27,
    "personel": 18577,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 16,
    "infanteri": 11,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 8,
        "apc": 30,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 38,
        "kapal_destroyer": 13,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_siluman": 34,
        "helikopter_serang": 16,
        "pesawat_pengintai": 2
      },
      "total_unit": 1,
      "kesiapan": 98
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "intel_radar": { "sistem_satelit": 25,
      "jaringan_radar": 2,
      "operasi_siber": 2 },
    "armada_polisi": { "patroli_lantas": {
          "mobil_patroli": 29,
          "sepeda_motor": 29,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 33,
          "helikopter_polisi": 5,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 32,
          "kamera_pengawas": 6,
          "pusat_forensik": 1
        },
        "waktu_respon": 34,
        "kepercayaan_publik": 50 },
    "intelijen": 20,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 17,
      "misi_mata_mata": 34,
      "misi_sabotase": 27,
      "manajemen_wilayah": 18,
      "program_nuklir": 0 }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 8,
      "sd": 24,
      "smp": 11,
      "sma": 6,
      "universitas": 32,
      "lembaga_pendidikan": 38,
      "laboratorium": 33,
      "observatorium": 8,
      "pusat_penelitian": 24,
      "pusat_pengembangan": 11,
      "literasi": 60,
      "indeks_penelitian": 0
    },
    "kesehatan": {
      "rumah_sakit_besar": 3,
      "rumah_sakit_kecil": 34,
      "pusat_diagnostik": 25,
      "tempat_tidur_rs": 3310,
      "harapan_hidup": 32,
      "indeks_kesehatan": 85
    },
    "olahraga": {
      "kolam_renang": 3,
      "sirkuit_balap": 30,
      "stadion": 19,
      "stadion_internasional": 14,
      "skor_olimpiade": 15,
      "popularitas": 44
    },
    "hukum": {
      "pusat_bantuan_hukum": 21,
      "pengadilan": 36,
      "kejaksaan": 28,
      "pos_polisi": 28,
      "armada_mobil_polisi": 948,
      "akademi_polisi": 39,
      "indeks_korupsi": 60,
      "indeks_keamanan": 81
  }
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 6,
      "kepuasan": 67,
      "pendapatan": 1
    },
    "korporasi": {
      "tarif": 22,
      "kepuasan": 52,
      "pendapatan": 5
    },
    "penghasilan": {
      "tarif": 36,
      "kepuasan": 61,
      "pendapatan": 10
    },
    "bea_cukai": {
      "tarif": 12,
      "kepuasan": 86,
      "pendapatan": 1
    },
    "lingkungan": {
      "tarif": 18,
      "kepuasan": 88,
      "pendapatan": 3
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 33,
      "kepuasan": 93,
      "pendapatan": 3
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 80,
    "gaji_guru": 90,
    "gaji_medis": 90,
    "gaji_militer": 80
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 100,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 83280,
    "harga_ayam": 82000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 20160,
    "harga_telur": 43540,
    "harga_bbm": 10700,
    "harga_listrik": 1600,
    "harga_air": 4160,
    "harga_obat": 315800,
    "harga_pendidikan": 387120
  },
  // =============================================================
  // 14. 📊 PERMINTAAN & KEBUTUHAN RAKYAT
  // =============================================================

  "permintaan": {
    "kepuasan": 64,
    "permintaan_utama": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "perumahan": 7,
    "komersial": 24,
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
      "kekuatan_lunak": 23,
      "kekuatan_keras": 18,
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
    "pendidikan": 35,
    "keamanan": 12,
    "keuangan": 9,
    "lingkungan": 60
  }
};
