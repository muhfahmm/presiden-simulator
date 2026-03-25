import { CountryData } from "../../types";

export const ceko: CountryData = {
  "name_en": "Czechia",
  "capital": "Prague",
  "name_id": "Ceko",
  "lon": 15.5,
  "lat": 49.75,
  "flag": "🇨🇿",
  "jumlah_penduduk": "10M",
  "anggaran": 3209,
  "pendapatan_nasional": "9167",
  "religion": "Ateisme",
  "ideology": "Demokrasi",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 32,
    "pembangkit_air": 39,
    "pembangkit_surya": 30,
    "pembangkit_termal": 34,
    "pembangkit_gas": 35,
    "pembangkit_angin": 13,
    "jaringan_listrik": 84
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 12,
    "kereta_bawah_tanah": 5,
    "jalur_kereta": 36,
    "jalan_tol": 40,
    "kualitas_jalan": 87,
    "pelabuhan_laut": 38,
    "bandara": 38,
    "terminal_bus": 25,
    "helipad": 28,
    "cakupan_internet": 59,
    "indeks_teknologi": 65,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 18,
    "uranium": 5,
    "batu_bara": 29,
    "minyak_bumi": 36,
    "gas_alam": 37,
    "garam": 6,
    "nikel": 15,
    "litium": 11,
    "aluminium": 24,
    "tembaga": 30,
    "logam_tanah_jarang": 33,
    "bijih_besi": 33,
    "kekuatan": 29.660809349923973
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 31,
    "mobil": 32,
    "sepeda_motor": 20,
    "smelter": 23,
    "semen_beton": 16,
    "kayu": 26,
    "air_mineral": 1,
    "gula": 24,
    "roti": 3,
    "farmasi": 11,
    "pupuk": 16,
    "pengolahan_daging": 5,
    "mie_instan": 1,
    "kekuatan": 3.076011687404966
  },
  // =============================================================
  // 5. 🐄 PETERNAKAN & PERIKANAN
  // =============================================================

  "sektor_peternakan": {
    "ayam": 37,
    "unggas": 33,
    "sapi_perah": 4,
    "sapi_potong": 15,
    "domba_kambing": 12,
    "udang": 3,
    "ikan": 30,
    "kerang": 6,
    "kekuatan": 18.24560701244298
  },
  // =============================================================
  // 6. 🌾 PERTANIAN & PERKEBUNAN
  // =============================================================

  "sektor_pertanian": {
    "beras": 5,
    "gandum": 23,
    "jagung": 18,
    "umbi_umbian": 39,
    "kedelai": 25,
    "kelapa_sawit": 36,
    "teh": 33,
    "kopi": 13,
    "cokelat": 37,
    "tebu": 6,
    "sayur_sayuran": 5,
    "kekuatan": 20.660809349923973
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 6,
    "gudang_senjata": 2,
    "hangar_tank": 6,
    "akademi_militer": 6,
    "pusat_komando": 23,
    "pangkalan_udara": 1,
    "pangkalan_laut": 34,
    "program_luar_angkasa": 15,
    "pertahanan_siber": 29,
    "anggaran_pertahanan": 916,
    "personel": 16863,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 9,
    "infanteri": 21,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 33,
        "apc": 15,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 7,
        "kapal_destroyer": 4,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_siluman": 10,
        "helikopter_serang": 5,
        "pesawat_pengintai": 2
      },
      "total_unit": 14,
      "kesiapan": 98
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "intel_radar": { "sistem_satelit": 18,
      "jaringan_radar": 14,
      "operasi_siber": 2 },
    "armada_polisi": { "patroli_lantas": {
          "mobil_patroli": 9,
          "sepeda_motor": 27,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 24,
          "helikopter_polisi": 21,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 21,
          "kamera_pengawas": 18,
          "pusat_forensik": 1
        },
        "waktu_respon": 21,
        "kepercayaan_publik": 50 },
    "intelijen": 28,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 8,
      "misi_mata_mata": 24,
      "misi_sabotase": 29,
      "manajemen_wilayah": 5,
      "program_nuklir": 0 }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 36,
      "sd": 30,
      "smp": 6,
      "sma": 26,
      "universitas": 12,
      "lembaga_pendidikan": 24,
      "laboratorium": 9,
      "observatorium": 13,
      "pusat_penelitian": 27,
      "pusat_pengembangan": 37,
      "literasi": 87,
      "indeks_penelitian": 0
    },
    "kesehatan": {
      "rumah_sakit_besar": 21,
      "rumah_sakit_kecil": 9,
      "pusat_diagnostik": 31,
      "tempat_tidur_rs": 1217,
      "harapan_hidup": 19,
      "indeks_kesehatan": 85
    },
    "olahraga": {
      "kolam_renang": 3,
      "sirkuit_balap": 14,
      "stadion": 29,
      "stadion_internasional": 10,
      "skor_olimpiade": 17,
      "popularitas": 44
    },
    "hukum": {
      "pusat_bantuan_hukum": 34,
      "pengadilan": 29,
      "kejaksaan": 29,
      "pos_polisi": 28,
      "armada_mobil_polisi": 1808,
      "akademi_polisi": 7,
      "indeks_korupsi": 66,
      "indeks_keamanan": 92
  }
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 9,
      "kepuasan": 67,
      "pendapatan": 66
    },
    "korporasi": {
      "tarif": 22,
      "kepuasan": 52,
      "pendapatan": 171
    },
    "penghasilan": {
      "tarif": 25,
      "kepuasan": 61,
      "pendapatan": 98
    },
    "bea_cukai": {
      "tarif": 9,
      "kepuasan": 86,
      "pendapatan": 43
    },
    "lingkungan": {
      "tarif": 13,
      "kepuasan": 88,
      "pendapatan": 72
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 17 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 49 },
    "lainnya": {
      "tarif": 25,
      "kepuasan": 93,
      "pendapatan": 131
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 90,
    "gaji_guru": 100,
    "gaji_medis": 90,
    "gaji_militer": 80
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 83280,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 12320,
    "harga_gula": 28800,
    "harga_telur": 43540,
    "harga_bbm": 8560,
    "harga_listrik": 1600,
    "harga_air": 4160,
    "harga_obat": 221060,
    "harga_pendidikan": 387120
  },
  // =============================================================
  // 14. 📊 PERMINTAAN & KEBUTUHAN RAKYAT
  // =============================================================

  "permintaan": {
    "kepuasan": 75,
    "permintaan_utama": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "perumahan": 16,
    "komersial": 8,
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
      "kekuatan_lunak": 2,
      "kekuatan_keras": 26,
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
    "kesehatan": 15,
    "pendidikan": 8,
    "keamanan": 39,
    "keuangan": 23,
    "lingkungan": 60
  }
};
