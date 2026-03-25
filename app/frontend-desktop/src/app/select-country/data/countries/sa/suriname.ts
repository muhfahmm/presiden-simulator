import { CountryData } from "../../types";

export const suriname: CountryData = {
  "name_en": "Suriname",
  "capital": "Paramaribo",
  "name_id": "Suriname",
  "lon": -56,
  "lat": 4,
  "flag": "🇸🇷",
  "jumlah_penduduk": 575991,
  "anggaran": 34,
  "pendapatan_nasional": "97",
  "religion": "Protestan",
  "ideology": "Demokrasi",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 12,
    "pembangkit_air": 3,
    "pembangkit_surya": 9,
    "pembangkit_termal": 12,
    "pembangkit_gas": 26,
    "pembangkit_angin": 27,
    "jaringan_listrik": 70
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 26,
    "kereta_bawah_tanah": 31,
    "jalur_kereta": 22,
    "jalan_tol": 22,
    "kualitas_jalan": 81,
    "pelabuhan_laut": 5,
    "bandara": 36,
    "terminal_bus": 39,
    "helipad": 17,
    "cakupan_internet": 52,
    "indeks_teknologi": 89,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 28,
    "uranium": 26,
    "batu_bara": 8,
    "minyak_bumi": 34,
    "gas_alam": 32,
    "garam": 14,
    "nikel": 6,
    "litium": 34,
    "aluminium": 33,
    "tembaga": 19,
    "logam_tanah_jarang": 30,
    "bijih_besi": 5,
    "kekuatan": 29.660809349923973
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 30,
    "mobil": 10,
    "sepeda_motor": 27,
    "smelter": 9,
    "semen_beton": 23,
    "kayu": 38,
    "air_mineral": 17,
    "gula": 37,
    "roti": 36,
    "farmasi": 40,
    "pupuk": 29,
    "pengolahan_daging": 12,
    "mie_instan": 13,
    "kekuatan": 3.076011687404966
  },
  // =============================================================
  // 5. 🐄 PETERNAKAN & PERIKANAN
  // =============================================================

  "sektor_peternakan": {
    "ayam": 18,
    "unggas": 1,
    "sapi_perah": 37,
    "sapi_potong": 4,
    "domba_kambing": 32,
    "udang": 2,
    "ikan": 23,
    "kerang": 29,
    "kekuatan": 18.24560701244298
  },
  // =============================================================
  // 6. 🌾 PERTANIAN & PERKEBUNAN
  // =============================================================

  "sektor_pertanian": {
    "beras": 22,
    "gandum": 36,
    "jagung": 4,
    "umbi_umbian": 8,
    "kedelai": 29,
    "kelapa_sawit": 5,
    "teh": 39,
    "kopi": 20,
    "cokelat": 1,
    "tebu": 6,
    "sayur_sayuran": 21,
    "kekuatan": 20.660809349923973
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 36,
    "gudang_senjata": 18,
    "hangar_tank": 1,
    "akademi_militer": 5,
    "pusat_komando": 27,
    "pangkalan_udara": 14,
    "pangkalan_laut": 3,
    "program_luar_angkasa": 31,
    "pertahanan_siber": 31,
    "anggaran_pertahanan": 9,
    "personel": 26544,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 16,
    "infanteri": 23,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 125,
        "apc": 35,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 23,
        "kapal_destroyer": 17,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_siluman": 188,
        "helikopter_serang": 172,
        "pesawat_pengintai": 2
      },
      "total_unit": 37,
      "kesiapan": 98
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "intel_radar": { "sistem_satelit": 4,
      "jaringan_radar": 4,
      "operasi_siber": 2 },
    "armada_polisi": { "patroli_lantas": {
          "mobil_patroli": 13,
          "sepeda_motor": 16,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 18,
          "helikopter_polisi": 4,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 30,
          "kamera_pengawas": 20,
          "pusat_forensik": 1
        },
        "waktu_respon": 7,
        "kepercayaan_publik": 50 },
    "intelijen": 16,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 24,
      "misi_mata_mata": 18,
      "misi_sabotase": 7,
      "manajemen_wilayah": 17,
      "program_nuklir": 0 }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 36,
      "sd": 4,
      "smp": 9,
      "sma": 21,
      "universitas": 28,
      "lembaga_pendidikan": 29,
      "laboratorium": 1,
      "observatorium": 25,
      "pusat_penelitian": 6,
      "pusat_pengembangan": 40,
      "literasi": 80,
      "indeks_penelitian": 0
    },
    "kesehatan": {
      "rumah_sakit_besar": 33,
      "rumah_sakit_kecil": 15,
      "pusat_diagnostik": 21,
      "tempat_tidur_rs": 5672,
      "harapan_hidup": 7,
      "indeks_kesehatan": 85
    },
    "olahraga": {
      "kolam_renang": 39,
      "sirkuit_balap": 30,
      "stadion": 39,
      "stadion_internasional": 33,
      "skor_olimpiade": 4,
      "popularitas": 44
    },
    "hukum": {
      "pusat_bantuan_hukum": 33,
      "pengadilan": 27,
      "kejaksaan": 9,
      "pos_polisi": 7,
      "armada_mobil_polisi": 9880,
      "akademi_polisi": 21,
      "indeks_korupsi": 89,
      "indeks_keamanan": 82
  }
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 33,
      "kepuasan": 67,
      "pendapatan": 1
    },
    "korporasi": {
      "tarif": 40,
      "kepuasan": 52,
      "pendapatan": 3
    },
    "penghasilan": {
      "tarif": 3,
      "kepuasan": 61,
      "pendapatan": 0
    },
    "bea_cukai": {
      "tarif": 10,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 38,
      "kepuasan": 88,
      "pendapatan": 1
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 22,
      "kepuasan": 93,
      "pendapatan": 1
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 60,
    "gaji_guru": 60,
    "gaji_medis": 70,
    "gaji_militer": 60
  },
  "subsidi": {
    "subsidi_energi": 75,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 22400,
    "harga_daging_sapi": 104100,
    "harga_ayam": 20500,
    "harga_minyak_goreng": 30800,
    "harga_gula": 14400,
    "harga_telur": 24880,
    "harga_bbm": 10700,
    "harga_listrik": 1280,
    "harga_air": 7280,
    "harga_obat": 126320,
    "harga_pendidikan": 483900
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
    "perumahan": 37,
    "komersial": 3,
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
      "kekuatan_lunak": 1,
      "kekuatan_keras": 4,
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
    "kesehatan": 4,
    "pendidikan": 21,
    "keamanan": 23,
    "keuangan": 27,
    "lingkungan": 60
  }
};
