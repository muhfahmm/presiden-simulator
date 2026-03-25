import { CountryData } from "../../types";

export const irlandia: CountryData = {
  "name_en": "Ireland",
  "capital": "Dublin",
  "name_id": "Irlandia",
  "lon": -8,
  "lat": 53,
  "flag": "🇮🇪",
  "jumlah_penduduk": 4867309,
  "anggaran": 5153,
  "pendapatan_nasional": "14723",
  "religion": "Katolik",
  "ideology": "Kapitalisme",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 27,
    "pembangkit_air": 30,
    "pembangkit_surya": 30,
    "pembangkit_termal": 3,
    "pembangkit_gas": 16,
    "pembangkit_angin": 32,
    "jaringan_listrik": 64
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 33,
    "kereta_bawah_tanah": 32,
    "jalur_kereta": 20,
    "jalan_tol": 28,
    "kualitas_jalan": 91,
    "pelabuhan_laut": 11,
    "bandara": 23,
    "terminal_bus": 10,
    "helipad": 1,
    "cakupan_internet": 86,
    "indeks_teknologi": 57,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 39,
    "uranium": 20,
    "batu_bara": 9,
    "minyak_bumi": 17,
    "gas_alam": 3,
    "garam": 4,
    "nikel": 14,
    "litium": 20,
    "aluminium": 1,
    "tembaga": 37,
    "logam_tanah_jarang": 19,
    "bijih_besi": 4,
    "kekuatan": 29.660809349923973
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 15,
    "mobil": 38,
    "sepeda_motor": 24,
    "smelter": 12,
    "semen_beton": 34,
    "kayu": 35,
    "air_mineral": 27,
    "gula": 39,
    "roti": 15,
    "farmasi": 12,
    "pupuk": 24,
    "pengolahan_daging": 23,
    "mie_instan": 29,
    "kekuatan": 3.076011687404966
  },
  // =============================================================
  // 5. 🐄 PETERNAKAN & PERIKANAN
  // =============================================================

  "sektor_peternakan": {
    "ayam": 32,
    "unggas": 17,
    "sapi_perah": 2,
    "sapi_potong": 22,
    "domba_kambing": 21,
    "udang": 32,
    "ikan": 31,
    "kerang": 1,
    "kekuatan": 18.24560701244298
  },
  // =============================================================
  // 6. 🌾 PERTANIAN & PERKEBUNAN
  // =============================================================

  "sektor_pertanian": {
    "beras": 37,
    "gandum": 31,
    "jagung": 8,
    "umbi_umbian": 29,
    "kedelai": 16,
    "kelapa_sawit": 4,
    "teh": 3,
    "kopi": 10,
    "cokelat": 17,
    "tebu": 19,
    "sayur_sayuran": 16,
    "kekuatan": 20.660809349923973
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 34,
    "gudang_senjata": 15,
    "hangar_tank": 3,
    "akademi_militer": 28,
    "pusat_komando": 6,
    "pangkalan_udara": 19,
    "pangkalan_laut": 26,
    "program_luar_angkasa": 17,
    "pertahanan_siber": 13,
    "anggaran_pertahanan": 1472,
    "personel": 17072,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 16,
    "infanteri": 35,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 34,
        "apc": 17,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 26,
        "kapal_destroyer": 22,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_siluman": 32,
        "helikopter_serang": 20,
        "pesawat_pengintai": 2
      },
      "total_unit": 31,
      "kesiapan": 98
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "intel_radar": { "sistem_satelit": 7,
      "jaringan_radar": 17,
      "operasi_siber": 2 },
    "armada_polisi": { "patroli_lantas": {
          "mobil_patroli": 28,
          "sepeda_motor": 24,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 21,
          "helikopter_polisi": 4,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 22,
          "kamera_pengawas": 12,
          "pusat_forensik": 1
        },
        "waktu_respon": 36,
        "kepercayaan_publik": 50 },
    "intelijen": 27,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 9,
      "misi_mata_mata": 19,
      "misi_sabotase": 35,
      "manajemen_wilayah": 19,
      "program_nuklir": 0 }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 23,
      "sd": 22,
      "smp": 37,
      "sma": 24,
      "universitas": 35,
      "lembaga_pendidikan": 1,
      "laboratorium": 10,
      "observatorium": 37,
      "pusat_penelitian": 10,
      "pusat_pengembangan": 25,
      "literasi": 92,
      "indeks_penelitian": 0
    },
    "kesehatan": {
      "rumah_sakit_besar": 34,
      "rumah_sakit_kecil": 1,
      "pusat_diagnostik": 12,
      "tempat_tidur_rs": 3299,
      "harapan_hidup": 24,
      "indeks_kesehatan": 85
    },
    "olahraga": {
      "kolam_renang": 17,
      "sirkuit_balap": 3,
      "stadion": 3,
      "stadion_internasional": 17,
      "skor_olimpiade": 15,
      "popularitas": 44
    },
    "hukum": {
      "pusat_bantuan_hukum": 37,
      "pengadilan": 24,
      "kejaksaan": 29,
      "pos_polisi": 13,
      "armada_mobil_polisi": 4069,
      "akademi_polisi": 11,
      "indeks_korupsi": 93,
      "indeks_keamanan": 79
  }
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 2,
      "kepuasan": 67,
      "pendapatan": 19
    },
    "korporasi": {
      "tarif": 35,
      "kepuasan": 52,
      "pendapatan": 365
    },
    "penghasilan": {
      "tarif": 3,
      "kepuasan": 61,
      "pendapatan": 45
    },
    "bea_cukai": {
      "tarif": 37,
      "kepuasan": 86,
      "pendapatan": 471
    },
    "lingkungan": {
      "tarif": 39,
      "kepuasan": 88,
      "pendapatan": 364
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 26 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 78 },
    "lainnya": {
      "tarif": 40,
      "kepuasan": 93,
      "pendapatan": 343
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 90,
    "gaji_guru": 90,
    "gaji_medis": 90,
    "gaji_militer": 90
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 100,
    "subsidi_pendidikan": 100,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 22400,
    "harga_daging_sapi": 145740,
    "harga_ayam": 20500,
    "harga_minyak_goreng": 12320,
    "harga_gula": 20160,
    "harga_telur": 31100,
    "harga_bbm": 8560,
    "harga_listrik": 3200,
    "harga_air": 10400,
    "harga_obat": 157900,
    "harga_pendidikan": 387120
  },
  // =============================================================
  // 14. 📊 PERMINTAAN & KEBUTUHAN RAKYAT
  // =============================================================

  "permintaan": {
    "kepuasan": 66,
    "permintaan_utama": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "perumahan": 39,
    "komersial": 21,
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
      "kekuatan_lunak": 29,
      "kekuatan_keras": 5,
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
    "kesehatan": 27,
    "pendidikan": 10,
    "keamanan": 18,
    "keuangan": 4,
    "lingkungan": 60
  }
};
