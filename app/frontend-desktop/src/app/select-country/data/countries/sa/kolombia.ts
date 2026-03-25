import { CountryData } from "../../types";

export const kolombia: CountryData = {
  "name_en": "Colombia",
  "capital": "Bogotá",
  "name_id": "Kolombia",
  "lon": -72,
  "lat": 4,
  "flag": "🇨🇴",
  "jumlah_penduduk": 49648685,
  "anggaran": 3306,
  "pendapatan_nasional": "9445",
  "religion": "Katolik",
  "ideology": "Sosialisme",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 5,
    "pembangkit_air": 4,
    "pembangkit_surya": 7,
    "pembangkit_termal": 23,
    "pembangkit_gas": 1,
    "pembangkit_angin": 4,
    "jaringan_listrik": 62
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 30,
    "kereta_bawah_tanah": 15,
    "jalur_kereta": 19,
    "jalan_tol": 40,
    "kualitas_jalan": 75,
    "pelabuhan_laut": 26,
    "bandara": 33,
    "terminal_bus": 39,
    "helipad": 3,
    "cakupan_internet": 78,
    "indeks_teknologi": 66,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 24,
    "uranium": 2,
    "batu_bara": 23,
    "minyak_bumi": 1,
    "gas_alam": 24,
    "garam": 7,
    "nikel": 21,
    "litium": 4,
    "aluminium": 20,
    "tembaga": 16,
    "logam_tanah_jarang": 26,
    "bijih_besi": 1,
    "kekuatan": 29.660809349923973
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 1,
    "mobil": 27,
    "sepeda_motor": 10,
    "smelter": 13,
    "semen_beton": 32,
    "kayu": 12,
    "air_mineral": 40,
    "gula": 34,
    "roti": 18,
    "farmasi": 19,
    "pupuk": 38,
    "pengolahan_daging": 40,
    "mie_instan": 19,
    "kekuatan": 3.076011687404966
  },
  // =============================================================
  // 5. 🐄 PETERNAKAN & PERIKANAN
  // =============================================================

  "sektor_peternakan": {
    "ayam": 9,
    "unggas": 30,
    "sapi_perah": 1,
    "sapi_potong": 4,
    "domba_kambing": 36,
    "udang": 15,
    "ikan": 15,
    "kerang": 32,
    "kekuatan": 18.24560701244298
  },
  // =============================================================
  // 6. 🌾 PERTANIAN & PERKEBUNAN
  // =============================================================

  "sektor_pertanian": {
    "beras": 13,
    "gandum": 4,
    "jagung": 11,
    "umbi_umbian": 7,
    "kedelai": 27,
    "kelapa_sawit": 22,
    "teh": 9,
    "kopi": 2,
    "cokelat": 25,
    "tebu": 16,
    "sayur_sayuran": 39,
    "kekuatan": 20.660809349923973
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 20,
    "gudang_senjata": 12,
    "hangar_tank": 34,
    "akademi_militer": 2,
    "pusat_komando": 10,
    "pangkalan_udara": 11,
    "pangkalan_laut": 32,
    "program_luar_angkasa": 40,
    "pertahanan_siber": 39,
    "anggaran_pertahanan": 944,
    "personel": 13873,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 26,
    "infanteri": 13,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 37,
        "apc": 8,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 31,
        "kapal_destroyer": 12,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_siluman": 25,
        "helikopter_serang": 30,
        "pesawat_pengintai": 2
      },
      "total_unit": 4,
      "kesiapan": 98
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "intel_radar": { "sistem_satelit": 10,
      "jaringan_radar": 4,
      "operasi_siber": 2 },
    "armada_polisi": { "patroli_lantas": {
          "mobil_patroli": 13,
          "sepeda_motor": 4,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 8,
          "helikopter_polisi": 4,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 5,
          "kamera_pengawas": 17,
          "pusat_forensik": 1
        },
        "waktu_respon": 17,
        "kepercayaan_publik": 50 },
    "intelijen": 39,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 2,
      "misi_mata_mata": 17,
      "misi_sabotase": 2,
      "manajemen_wilayah": 22,
      "program_nuklir": 0 }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 27,
      "sd": 18,
      "smp": 2,
      "sma": 2,
      "universitas": 38,
      "lembaga_pendidikan": 2,
      "laboratorium": 18,
      "observatorium": 37,
      "pusat_penelitian": 32,
      "pusat_pengembangan": 11,
      "literasi": 73,
      "indeks_penelitian": 0
    },
    "kesehatan": {
      "rumah_sakit_besar": 37,
      "rumah_sakit_kecil": 3,
      "pusat_diagnostik": 28,
      "tempat_tidur_rs": 581,
      "harapan_hidup": 32,
      "indeks_kesehatan": 85
    },
    "olahraga": {
      "kolam_renang": 9,
      "sirkuit_balap": 29,
      "stadion": 25,
      "stadion_internasional": 33,
      "skor_olimpiade": 18,
      "popularitas": 44
    },
    "hukum": {
      "pusat_bantuan_hukum": 10,
      "pengadilan": 19,
      "kejaksaan": 33,
      "pos_polisi": 17,
      "armada_mobil_polisi": 6668,
      "akademi_polisi": 26,
      "indeks_korupsi": 52,
      "indeks_keamanan": 94
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
  // 12. 💰 GAJI & SUBSIDI (Default)
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
  // 13. 🛒 HARGA PASAR DOMESTIK
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
  // 14. 📊 PERMINTAAN & KEBUTUHAN RAKYAT
  // =============================================================

  "permintaan": {
    "kepuasan": 52,
    "permintaan_utama": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "perumahan": 40,
    "komersial": 19,
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
      "kekuatan_lunak": 27,
      "kekuatan_keras": 15,
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
    "pendidikan": 21,
    "keamanan": 5,
    "keuangan": 26,
    "lingkungan": 60
  }
};
