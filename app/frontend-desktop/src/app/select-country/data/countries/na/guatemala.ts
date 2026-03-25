import { CountryData } from "../../types";

export const guatemala: CountryData = {
  "name_en": "Guatemala",
  "capital": "Guatemala City",
  "name_id": "Guatemala",
  "lon": -90.25,
  "lat": 15.5,
  "flag": "🇬🇹",
  "jumlah_penduduk": 17247807,
  "anggaran": 924,
  "pendapatan_nasional": "2639",
  "religion": "Katolik",
  "ideology": "Demokrasi",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 15,
    "pembangkit_air": 17,
    "pembangkit_surya": 29,
    "pembangkit_termal": 21,
    "pembangkit_gas": 1,
    "pembangkit_angin": 36,
    "jaringan_listrik": 56
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 29,
    "kereta_bawah_tanah": 22,
    "jalur_kereta": 11,
    "jalan_tol": 16,
    "kualitas_jalan": 78,
    "pelabuhan_laut": 3,
    "bandara": 21,
    "terminal_bus": 26,
    "helipad": 25,
    "cakupan_internet": 55,
    "indeks_teknologi": 72,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 20,
    "uranium": 29,
    "batu_bara": 35,
    "minyak_bumi": 39,
    "gas_alam": 1,
    "garam": 15,
    "nikel": 1,
    "litium": 15,
    "aluminium": 37,
    "tembaga": 34,
    "logam_tanah_jarang": 33,
    "bijih_besi": 6,
    "kekuatan": 29.660809349923973
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 6,
    "mobil": 12,
    "sepeda_motor": 39,
    "smelter": 34,
    "semen_beton": 25,
    "kayu": 38,
    "air_mineral": 33,
    "gula": 28,
    "roti": 35,
    "farmasi": 6,
    "pupuk": 18,
    "pengolahan_daging": 38,
    "mie_instan": 28,
    "kekuatan": 3.076011687404966
  },
  // =============================================================
  // 5. 🐄 PETERNAKAN & PERIKANAN
  // =============================================================

  "sektor_peternakan": {
    "ayam": 4,
    "unggas": 33,
    "sapi_perah": 7,
    "sapi_potong": 9,
    "domba_kambing": 11,
    "udang": 2,
    "ikan": 22,
    "kerang": 12,
    "kekuatan": 18.24560701244298
  },
  // =============================================================
  // 6. 🌾 PERTANIAN & PERKEBUNAN
  // =============================================================

  "sektor_pertanian": {
    "beras": 27,
    "gandum": 30,
    "jagung": 15,
    "umbi_umbian": 17,
    "kedelai": 25,
    "kelapa_sawit": 30,
    "teh": 14,
    "kopi": 18,
    "cokelat": 25,
    "tebu": 24,
    "sayur_sayuran": 28,
    "kekuatan": 20.660809349923973
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 4,
    "gudang_senjata": 5,
    "hangar_tank": 9,
    "akademi_militer": 33,
    "pusat_komando": 8,
    "pangkalan_udara": 38,
    "pangkalan_laut": 12,
    "program_luar_angkasa": 32,
    "pertahanan_siber": 39,
    "anggaran_pertahanan": 263,
    "personel": 18243,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 39,
    "infanteri": 21,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 30,
        "apc": 7,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 14,
        "kapal_destroyer": 4,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_siluman": 11,
        "helikopter_serang": 26,
        "pesawat_pengintai": 2
      },
      "total_unit": 29,
      "kesiapan": 98
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "intel_radar": { "sistem_satelit": 25,
      "jaringan_radar": 32,
      "operasi_siber": 2 },
    "armada_polisi": { "patroli_lantas": {
          "mobil_patroli": 32,
          "sepeda_motor": 15,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 13,
          "helikopter_polisi": 26,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 21,
          "kamera_pengawas": 37,
          "pusat_forensik": 1
        },
        "waktu_respon": 5,
        "kepercayaan_publik": 50 },
    "intelijen": 11,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 38,
      "misi_mata_mata": 22,
      "misi_sabotase": 23,
      "manajemen_wilayah": 30,
      "program_nuklir": 0 }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 8,
      "sd": 13,
      "smp": 28,
      "sma": 37,
      "universitas": 14,
      "lembaga_pendidikan": 34,
      "laboratorium": 21,
      "observatorium": 19,
      "pusat_penelitian": 11,
      "pusat_pengembangan": 22,
      "literasi": 91,
      "indeks_penelitian": 0
    },
    "kesehatan": {
      "rumah_sakit_besar": 28,
      "rumah_sakit_kecil": 36,
      "pusat_diagnostik": 7,
      "tempat_tidur_rs": 7066,
      "harapan_hidup": 6,
      "indeks_kesehatan": 85
    },
    "olahraga": {
      "kolam_renang": 22,
      "sirkuit_balap": 13,
      "stadion": 21,
      "stadion_internasional": 27,
      "skor_olimpiade": 14,
      "popularitas": 44
    },
    "hukum": {
      "pusat_bantuan_hukum": 40,
      "pengadilan": 10,
      "kejaksaan": 40,
      "pos_polisi": 25,
      "armada_mobil_polisi": 7558,
      "akademi_polisi": 23,
      "indeks_korupsi": 77,
      "indeks_keamanan": 51
  }
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 21,
      "kepuasan": 67,
      "pendapatan": 31
    },
    "korporasi": {
      "tarif": 27,
      "kepuasan": 52,
      "pendapatan": 61
    },
    "penghasilan": {
      "tarif": 3,
      "kepuasan": 61,
      "pendapatan": 8
    },
    "bea_cukai": {
      "tarif": 18,
      "kepuasan": 86,
      "pendapatan": 26
    },
    "lingkungan": {
      "tarif": 22,
      "kepuasan": 88,
      "pendapatan": 39
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 5 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 14 },
    "lainnya": {
      "tarif": 26,
      "kepuasan": 93,
      "pendapatan": 61
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
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 75
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 12800,
    "harga_daging_sapi": 104100,
    "harga_ayam": 32800,
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 24880,
    "harga_bbm": 10700,
    "harga_listrik": 800,
    "harga_air": 5200,
    "harga_obat": 221060,
    "harga_pendidikan": 387120
  },
  // =============================================================
  // 14. 📊 PERMINTAAN & KEBUTUHAN RAKYAT
  // =============================================================

  "permintaan": {
    "kepuasan": 63,
    "permintaan_utama": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "perumahan": 15,
    "komersial": 23,
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
      "kekuatan_lunak": 31,
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
    "kesehatan": 15,
    "pendidikan": 20,
    "keamanan": 37,
    "keuangan": 1,
    "lingkungan": 60
  }
};
