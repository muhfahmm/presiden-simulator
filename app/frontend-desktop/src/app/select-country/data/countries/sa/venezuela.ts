import { CountryData } from "../../types";

export const venezuela: CountryData = {
  "name_en": "Venezuela",
  "capital": "Caracas",
  "name_id": "Venezuela",
  "lon": -66,
  "lat": 8,
  "flag": "🇻🇪",
  "jumlah_penduduk": 28870195,
  "anggaran": 924,
  "pendapatan_nasional": "2639",
  "religion": "Katolik",
  "ideology": "Sosialisme",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 9,
    "pembangkit_air": 3,
    "pembangkit_surya": 24,
    "pembangkit_termal": 3,
    "pembangkit_gas": 18,
    "pembangkit_angin": 38,
    "jaringan_listrik": 93
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 2,
    "kereta_bawah_tanah": 18,
    "jalur_kereta": 39,
    "jalan_tol": 30,
    "kualitas_jalan": 74,
    "pelabuhan_laut": 30,
    "bandara": 21,
    "terminal_bus": 25,
    "helipad": 37,
    "cakupan_internet": 51,
    "indeks_teknologi": 87,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 33,
    "uranium": 26,
    "batu_bara": 13,
    "minyak_bumi": 23,
    "gas_alam": 10,
    "garam": 27,
    "nikel": 24,
    "litium": 34,
    "aluminium": 17,
    "tembaga": 37,
    "logam_tanah_jarang": 23,
    "bijih_besi": 2,
    "kekuatan": 29.660809349923973
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 25,
    "mobil": 2,
    "sepeda_motor": 33,
    "smelter": 39,
    "semen_beton": 40,
    "kayu": 32,
    "air_mineral": 5,
    "gula": 34,
    "roti": 39,
    "farmasi": 21,
    "pupuk": 25,
    "pengolahan_daging": 19,
    "mie_instan": 11,
    "kekuatan": 3.076011687404966
  },
  // =============================================================
  // 5. 🐄 PETERNAKAN & PERIKANAN
  // =============================================================

  "sektor_peternakan": {
    "ayam": 14,
    "unggas": 7,
    "sapi_perah": 6,
    "sapi_potong": 11,
    "domba_kambing": 33,
    "udang": 36,
    "ikan": 22,
    "kerang": 31,
    "kekuatan": 18.24560701244298
  },
  // =============================================================
  // 6. 🌾 PERTANIAN & PERKEBUNAN
  // =============================================================

  "sektor_pertanian": {
    "beras": 22,
    "gandum": 21,
    "jagung": 4,
    "umbi_umbian": 2,
    "kedelai": 18,
    "kelapa_sawit": 10,
    "teh": 12,
    "kopi": 23,
    "cokelat": 28,
    "tebu": 4,
    "sayur_sayuran": 20,
    "kekuatan": 20.660809349923973
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 5,
    "gudang_senjata": 6,
    "hangar_tank": 7,
    "akademi_militer": 7,
    "pusat_komando": 13,
    "pangkalan_udara": 10,
    "pangkalan_laut": 16,
    "program_luar_angkasa": 32,
    "pertahanan_siber": 11,
    "anggaran_pertahanan": 263,
    "personel": 23710,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 17,
    "infanteri": 9,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 28,
        "apc": 85,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 2,
        "kapal_destroyer": 149,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_siluman": 198,
        "helikopter_serang": 192,
        "pesawat_pengintai": 2
      },
      "total_unit": 2,
      "kesiapan": 98
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "intel_radar": { "sistem_satelit": 0,
      "jaringan_radar": 0,
      "operasi_siber": 2 },
    "armada_polisi": { "patroli_lantas": {
          "mobil_patroli": 14,
          "sepeda_motor": 25,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 20,
          "helikopter_polisi": 2,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 21,
          "kamera_pengawas": 27,
          "pusat_forensik": 1
        },
        "waktu_respon": 28,
        "kepercayaan_publik": 50 },
    "intelijen": 11,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 34,
      "misi_mata_mata": 27,
      "misi_sabotase": 30,
      "manajemen_wilayah": 34,
      "program_nuklir": 0 }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 12,
      "sd": 25,
      "smp": 6,
      "sma": 20,
      "universitas": 40,
      "lembaga_pendidikan": 38,
      "laboratorium": 40,
      "observatorium": 3,
      "pusat_penelitian": 25,
      "pusat_pengembangan": 10,
      "literasi": 69,
      "indeks_penelitian": 0
    },
    "kesehatan": {
      "rumah_sakit_besar": 20,
      "rumah_sakit_kecil": 38,
      "pusat_diagnostik": 8,
      "tempat_tidur_rs": 2219,
      "harapan_hidup": 31,
      "indeks_kesehatan": 85
    },
    "olahraga": {
      "kolam_renang": 12,
      "sirkuit_balap": 3,
      "stadion": 23,
      "stadion_internasional": 20,
      "skor_olimpiade": 12,
      "popularitas": 44
    },
    "hukum": {
      "pusat_bantuan_hukum": 6,
      "pengadilan": 1,
      "kejaksaan": 13,
      "pos_polisi": 39,
      "armada_mobil_polisi": 922,
      "akademi_polisi": 32,
      "indeks_korupsi": 87,
      "indeks_keamanan": 86
  }
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 37,
      "kepuasan": 67,
      "pendapatan": 75
    },
    "korporasi": {
      "tarif": 8,
      "kepuasan": 52,
      "pendapatan": 19
    },
    "penghasilan": {
      "tarif": 4,
      "kepuasan": 61,
      "pendapatan": 10
    },
    "bea_cukai": {
      "tarif": 40,
      "kepuasan": 86,
      "pendapatan": 85
    },
    "lingkungan": {
      "tarif": 28,
      "kepuasan": 88,
      "pendapatan": 41
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 5 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 14 },
    "lainnya": {
      "tarif": 4,
      "kepuasan": 93,
      "pendapatan": 7
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 70,
    "gaji_guru": 70,
    "gaji_medis": 70,
    "gaji_militer": 60
  },
  "subsidi": {
    "subsidi_energi": 75,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 104100,
    "harga_ayam": 20500,
    "harga_minyak_goreng": 21560,
    "harga_gula": 20160,
    "harga_telur": 15550,
    "harga_bbm": 8560,
    "harga_listrik": 3200,
    "harga_air": 5200,
    "harga_obat": 157900,
    "harga_pendidikan": 241950
  },
  // =============================================================
  // 14. 📊 PERMINTAAN & KEBUTUHAN RAKYAT
  // =============================================================

  "permintaan": {
    "kepuasan": 65,
    "permintaan_utama": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "perumahan": 13,
    "komersial": 15,
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
      "kekuatan_lunak": 40,
      "kekuatan_keras": 34,
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
    "kesehatan": 28,
    "pendidikan": 26,
    "keamanan": 11,
    "keuangan": 8,
    "lingkungan": 60
  }
};
