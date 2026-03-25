import { CountryData } from "../../types";

export const yunani: CountryData = {
  "name_en": "Greece",
  "capital": "Athens",
  "name_id": "Yunani",
  "lon": 22,
  "lat": 39,
  "flag": "🇬🇷",
  "jumlah_penduduk": 10731726,
  "anggaran": 2236,
  "pendapatan_nasional": "6389",
  "religion": "Kristen Ortodoks",
  "ideology": "Demokrasi",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 38,
    "pembangkit_air": 29,
    "pembangkit_surya": 7,
    "pembangkit_termal": 38,
    "pembangkit_gas": 13,
    "pembangkit_angin": 25,
    "jaringan_listrik": 79
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 28,
    "kereta_bawah_tanah": 35,
    "jalur_kereta": 4,
    "jalan_tol": 8,
    "kualitas_jalan": 67,
    "pelabuhan_laut": 38,
    "bandara": 18,
    "terminal_bus": 15,
    "helipad": 28,
    "cakupan_internet": 91,
    "indeks_teknologi": 74,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 18,
    "uranium": 10,
    "batu_bara": 34,
    "minyak_bumi": 30,
    "gas_alam": 33,
    "garam": 4,
    "nikel": 38,
    "litium": 22,
    "aluminium": 25,
    "tembaga": 15,
    "logam_tanah_jarang": 5,
    "bijih_besi": 22,
    "kekuatan": 29.660809349923973
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 3,
    "mobil": 29,
    "sepeda_motor": 25,
    "smelter": 8,
    "semen_beton": 18,
    "kayu": 14,
    "air_mineral": 18,
    "gula": 27,
    "roti": 38,
    "farmasi": 37,
    "pupuk": 4,
    "pengolahan_daging": 20,
    "mie_instan": 20,
    "kekuatan": 3.076011687404966
  },
  // =============================================================
  // 5. 🐄 PETERNAKAN & PERIKANAN
  // =============================================================

  "sektor_peternakan": {
    "ayam": 8,
    "unggas": 11,
    "sapi_perah": 15,
    "sapi_potong": 27,
    "domba_kambing": 12,
    "udang": 14,
    "ikan": 19,
    "kerang": 12,
    "kekuatan": 18.24560701244298
  },
  // =============================================================
  // 6. 🌾 PERTANIAN & PERKEBUNAN
  // =============================================================

  "sektor_pertanian": {
    "beras": 18,
    "gandum": 13,
    "jagung": 40,
    "umbi_umbian": 34,
    "kedelai": 25,
    "kelapa_sawit": 18,
    "teh": 10,
    "kopi": 12,
    "cokelat": 19,
    "tebu": 36,
    "sayur_sayuran": 19,
    "kekuatan": 20.660809349923973
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 36,
    "gudang_senjata": 11,
    "hangar_tank": 25,
    "akademi_militer": 10,
    "pusat_komando": 4,
    "pangkalan_udara": 20,
    "pangkalan_laut": 10,
    "program_luar_angkasa": 6,
    "pertahanan_siber": 28,
    "anggaran_pertahanan": 638,
    "personel": 24523,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 14,
    "infanteri": 27,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 161,
        "apc": 126,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 19,
        "kapal_destroyer": 151,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_siluman": 60,
        "helikopter_serang": 126,
        "pesawat_pengintai": 2
      },
      "total_unit": 27,
      "kesiapan": 98
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "intel_radar": { "sistem_satelit": 0,
      "jaringan_radar": 1,
      "operasi_siber": 2 },
    "armada_polisi": { "patroli_lantas": {
          "mobil_patroli": 28,
          "sepeda_motor": 5,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 32,
          "helikopter_polisi": 21,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 26,
          "kamera_pengawas": 32,
          "pusat_forensik": 1
        },
        "waktu_respon": 8,
        "kepercayaan_publik": 50 },
    "intelijen": 33,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 16,
      "misi_mata_mata": 25,
      "misi_sabotase": 29,
      "manajemen_wilayah": 29,
      "program_nuklir": 0 }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 17,
      "sd": 30,
      "smp": 11,
      "sma": 32,
      "universitas": 38,
      "lembaga_pendidikan": 40,
      "laboratorium": 35,
      "observatorium": 15,
      "pusat_penelitian": 17,
      "pusat_pengembangan": 17,
      "literasi": 50,
      "indeks_penelitian": 0
    },
    "kesehatan": {
      "rumah_sakit_besar": 40,
      "rumah_sakit_kecil": 18,
      "pusat_diagnostik": 25,
      "tempat_tidur_rs": 5656,
      "harapan_hidup": 2,
      "indeks_kesehatan": 85
    },
    "olahraga": {
      "kolam_renang": 38,
      "sirkuit_balap": 24,
      "stadion": 27,
      "stadion_internasional": 37,
      "skor_olimpiade": 26,
      "popularitas": 44
    },
    "hukum": {
      "pusat_bantuan_hukum": 11,
      "pengadilan": 4,
      "kejaksaan": 5,
      "pos_polisi": 22,
      "armada_mobil_polisi": 651,
      "akademi_polisi": 25,
      "indeks_korupsi": 74,
      "indeks_keamanan": 75
  }
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 34,
      "kepuasan": 67,
      "pendapatan": 90
    },
    "korporasi": {
      "tarif": 15,
      "kepuasan": 52,
      "pendapatan": 85
    },
    "penghasilan": {
      "tarif": 15,
      "kepuasan": 61,
      "pendapatan": 48
    },
    "bea_cukai": {
      "tarif": 40,
      "kepuasan": 86,
      "pendapatan": 202
    },
    "lingkungan": {
      "tarif": 36,
      "kepuasan": 88,
      "pendapatan": 125
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 12 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 34 },
    "lainnya": {
      "tarif": 38,
      "kepuasan": 93,
      "pendapatan": 127
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 80,
    "gaji_guru": 90,
    "gaji_medis": 100,
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
    "harga_beras": 12800,
    "harga_daging_sapi": 83280,
    "harga_ayam": 20500,
    "harga_minyak_goreng": 21560,
    "harga_gula": 14400,
    "harga_telur": 24880,
    "harga_bbm": 5350,
    "harga_listrik": 1280,
    "harga_air": 4160,
    "harga_obat": 315800,
    "harga_pendidikan": 483900
  },
  // =============================================================
  // 14. 📊 PERMINTAAN & KEBUTUHAN RAKYAT
  // =============================================================

  "permintaan": {
    "kepuasan": 58,
    "permintaan_utama": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "perumahan": 27,
    "komersial": 27,
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
      "kekuatan_keras": 28,
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
    "kesehatan": 29,
    "pendidikan": 18,
    "keamanan": 12,
    "keuangan": 25,
    "lingkungan": 60
  }
};
