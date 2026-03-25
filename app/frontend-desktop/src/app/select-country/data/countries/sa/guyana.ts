import { CountryData } from "../../types";

export const guyana: CountryData = {
  "name_en": "Guyana",
  "capital": "Georgetown",
  "name_id": "Guyana",
  "lon": -59,
  "lat": 5,
  "flag": "🇬🇾",
  "jumlah_penduduk": 779004,
  "anggaran": 146,
  "pendapatan_nasional": "417",
  "religion": "Protestan",
  "ideology": "Demokrasi",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 11,
    "pembangkit_air": 15,
    "pembangkit_surya": 6,
    "pembangkit_termal": 1,
    "pembangkit_gas": 14,
    "pembangkit_angin": 24,
    "jaringan_listrik": 55
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 27,
    "kereta_bawah_tanah": 11,
    "jalur_kereta": 10,
    "jalan_tol": 14,
    "kualitas_jalan": 75,
    "pelabuhan_laut": 14,
    "bandara": 23,
    "terminal_bus": 3,
    "helipad": 16,
    "cakupan_internet": 74,
    "indeks_teknologi": 79,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 15,
    "uranium": 19,
    "batu_bara": 28,
    "minyak_bumi": 30,
    "gas_alam": 32,
    "garam": 36,
    "nikel": 31,
    "litium": 12,
    "aluminium": 36,
    "tembaga": 27,
    "logam_tanah_jarang": 29,
    "bijih_besi": 15,
    "kekuatan": 29.660809349923973
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 34,
    "mobil": 5,
    "sepeda_motor": 4,
    "smelter": 24,
    "semen_beton": 6,
    "kayu": 25,
    "air_mineral": 15,
    "gula": 3,
    "roti": 4,
    "farmasi": 13,
    "pupuk": 29,
    "pengolahan_daging": 17,
    "mie_instan": 7,
    "kekuatan": 3.076011687404966
  },
  // =============================================================
  // 5. 🐄 PETERNAKAN & PERIKANAN
  // =============================================================

  "sektor_peternakan": {
    "ayam": 4,
    "unggas": 13,
    "sapi_perah": 35,
    "sapi_potong": 15,
    "domba_kambing": 17,
    "udang": 5,
    "ikan": 22,
    "kerang": 16,
    "kekuatan": 18.24560701244298
  },
  // =============================================================
  // 6. 🌾 PERTANIAN & PERKEBUNAN
  // =============================================================

  "sektor_pertanian": {
    "beras": 6,
    "gandum": 37,
    "jagung": 20,
    "umbi_umbian": 24,
    "kedelai": 23,
    "kelapa_sawit": 34,
    "teh": 16,
    "kopi": 18,
    "cokelat": 18,
    "tebu": 8,
    "sayur_sayuran": 37,
    "kekuatan": 20.660809349923973
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 1,
    "gudang_senjata": 22,
    "hangar_tank": 7,
    "akademi_militer": 18,
    "pusat_komando": 4,
    "pangkalan_udara": 35,
    "pangkalan_laut": 9,
    "program_luar_angkasa": 30,
    "pertahanan_siber": 19,
    "anggaran_pertahanan": 41,
    "personel": 23186,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 24,
    "infanteri": 39,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 1,
        "apc": 38,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 40,
        "kapal_destroyer": 32,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_siluman": 38,
        "helikopter_serang": 12,
        "pesawat_pengintai": 2
      },
      "total_unit": 11,
      "kesiapan": 98
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "intel_radar": { "sistem_satelit": 32,
      "jaringan_radar": 25,
      "operasi_siber": 2 },
    "armada_polisi": { "patroli_lantas": {
          "mobil_patroli": 14,
          "sepeda_motor": 15,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 28,
          "helikopter_polisi": 22,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 21,
          "kamera_pengawas": 15,
          "pusat_forensik": 1
        },
        "waktu_respon": 6,
        "kepercayaan_publik": 50 },
    "intelijen": 14,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 38,
      "misi_mata_mata": 3,
      "misi_sabotase": 31,
      "manajemen_wilayah": 9,
      "program_nuklir": 0 }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 14,
      "sd": 24,
      "smp": 34,
      "sma": 14,
      "universitas": 29,
      "lembaga_pendidikan": 21,
      "laboratorium": 36,
      "observatorium": 6,
      "pusat_penelitian": 34,
      "pusat_pengembangan": 16,
      "literasi": 91,
      "indeks_penelitian": 0
    },
    "kesehatan": {
      "rumah_sakit_besar": 15,
      "rumah_sakit_kecil": 15,
      "pusat_diagnostik": 19,
      "tempat_tidur_rs": 1223,
      "harapan_hidup": 14,
      "indeks_kesehatan": 85
    },
    "olahraga": {
      "kolam_renang": 35,
      "sirkuit_balap": 27,
      "stadion": 2,
      "stadion_internasional": 7,
      "skor_olimpiade": 11,
      "popularitas": 44
    },
    "hukum": {
      "pusat_bantuan_hukum": 31,
      "pengadilan": 38,
      "kejaksaan": 5,
      "pos_polisi": 30,
      "armada_mobil_polisi": 1553,
      "akademi_polisi": 32,
      "indeks_korupsi": 66,
      "indeks_keamanan": 53
  }
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 11,
      "kepuasan": 67,
      "pendapatan": 2
    },
    "korporasi": {
      "tarif": 10,
      "kepuasan": 52,
      "pendapatan": 2
    },
    "penghasilan": {
      "tarif": 1,
      "kepuasan": 61,
      "pendapatan": 0
    },
    "bea_cukai": {
      "tarif": 18,
      "kepuasan": 86,
      "pendapatan": 3
    },
    "lingkungan": {
      "tarif": 26,
      "kepuasan": 88,
      "pendapatan": 6
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 3 },
    "lainnya": {
      "tarif": 36,
      "kepuasan": 93,
      "pendapatan": 13
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 60,
    "gaji_guru": 70,
    "gaji_medis": 70,
    "gaji_militer": 80
  },
  "subsidi": {
    "subsidi_energi": 50,
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
    "harga_beras": 22400,
    "harga_daging_sapi": 104100,
    "harga_ayam": 32800,
    "harga_minyak_goreng": 30800,
    "harga_gula": 14400,
    "harga_telur": 43540,
    "harga_bbm": 10700,
    "harga_listrik": 2240,
    "harga_air": 4160,
    "harga_obat": 78950,
    "harga_pendidikan": 483900
  },
  // =============================================================
  // 14. 📊 PERMINTAAN & KEBUTUHAN RAKYAT
  // =============================================================

  "permintaan": {
    "kepuasan": 67,
    "permintaan_utama": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "perumahan": 15,
    "komersial": 30,
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
      "kekuatan_keras": 39,
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
    "pendidikan": 26,
    "keamanan": 10,
    "keuangan": 13,
    "lingkungan": 60
  }
};
