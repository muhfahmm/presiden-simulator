import { CountryData } from "../../types";

export const kirgizstan: CountryData = {
  "name_en": "Kyrgyzstan",
  "capital": "Bishkek",
  "name_id": "Kirgizstan",
  "lon": 75,
  "lat": 41,
  "flag": "🇰🇬",
  "jumlah_penduduk": 6322800,
  "anggaran": 117,
  "pendapatan_nasional": "333",
  "religion": "Islam",
  "ideology": "Demokrasi",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 17,
    "pembangkit_air": 34,
    "pembangkit_surya": 9,
    "pembangkit_termal": 2,
    "pembangkit_gas": 1,
    "pembangkit_angin": 27,
    "jaringan_listrik": 67
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 33,
    "kereta_bawah_tanah": 23,
    "jalur_kereta": 1,
    "jalan_tol": 30,
    "kualitas_jalan": 86,
    "pelabuhan_laut": 7,
    "bandara": 23,
    "terminal_bus": 23,
    "helipad": 27,
    "cakupan_internet": 53,
    "indeks_teknologi": 91,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 14,
    "uranium": 38,
    "batu_bara": 14,
    "minyak_bumi": 39,
    "gas_alam": 38,
    "garam": 17,
    "nikel": 19,
    "litium": 15,
    "aluminium": 24,
    "tembaga": 32,
    "logam_tanah_jarang": 18,
    "bijih_besi": 11,
    "kekuatan": 29.660809349923973
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 18,
    "mobil": 30,
    "sepeda_motor": 14,
    "smelter": 23,
    "semen_beton": 34,
    "kayu": 21,
    "air_mineral": 20,
    "gula": 14,
    "roti": 36,
    "farmasi": 34,
    "pupuk": 8,
    "pengolahan_daging": 38,
    "mie_instan": 13,
    "kekuatan": 3.076011687404966
  },
  // =============================================================
  // 5. 🐄 PETERNAKAN & PERIKANAN
  // =============================================================

  "sektor_peternakan": {
    "ayam": 33,
    "unggas": 17,
    "sapi_perah": 17,
    "sapi_potong": 31,
    "domba_kambing": 39,
    "udang": 27,
    "ikan": 19,
    "kerang": 26,
    "kekuatan": 18.24560701244298
  },
  // =============================================================
  // 6. 🌾 PERTANIAN & PERKEBUNAN
  // =============================================================

  "sektor_pertanian": {
    "beras": 37,
    "gandum": 12,
    "jagung": 5,
    "umbi_umbian": 9,
    "kedelai": 36,
    "kelapa_sawit": 2,
    "teh": 28,
    "kopi": 26,
    "cokelat": 31,
    "tebu": 38,
    "sayur_sayuran": 5,
    "kekuatan": 20.660809349923973
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 34,
    "gudang_senjata": 18,
    "hangar_tank": 30,
    "akademi_militer": 25,
    "pusat_komando": 8,
    "pangkalan_udara": 15,
    "pangkalan_laut": 9,
    "program_luar_angkasa": 29,
    "pertahanan_siber": 29,
    "anggaran_pertahanan": 33,
    "personel": 13635,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 5,
    "infanteri": 9,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 20,
        "apc": 13,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 21,
        "kapal_destroyer": 6,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_siluman": 19,
        "helikopter_serang": 13,
        "pesawat_pengintai": 2
      },
      "total_unit": 39,
      "kesiapan": 98
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "intel_radar": { "sistem_satelit": 21,
      "jaringan_radar": 25,
      "operasi_siber": 2 },
    "armada_polisi": { "patroli_lantas": {
          "mobil_patroli": 12,
          "sepeda_motor": 29,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 9,
          "helikopter_polisi": 21,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 24,
          "kamera_pengawas": 17,
          "pusat_forensik": 1
        },
        "waktu_respon": 36,
        "kepercayaan_publik": 50 },
    "intelijen": 24,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 29,
      "misi_mata_mata": 28,
      "misi_sabotase": 40,
      "manajemen_wilayah": 21,
      "program_nuklir": 0 }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 6,
      "sd": 5,
      "smp": 21,
      "sma": 18,
      "universitas": 40,
      "lembaga_pendidikan": 28,
      "laboratorium": 17,
      "observatorium": 20,
      "pusat_penelitian": 22,
      "pusat_pengembangan": 14,
      "literasi": 69,
      "indeks_penelitian": 0
    },
    "kesehatan": {
      "rumah_sakit_besar": 22,
      "rumah_sakit_kecil": 22,
      "pusat_diagnostik": 28,
      "tempat_tidur_rs": 6414,
      "harapan_hidup": 15,
      "indeks_kesehatan": 85
    },
    "olahraga": {
      "kolam_renang": 16,
      "sirkuit_balap": 25,
      "stadion": 23,
      "stadion_internasional": 35,
      "skor_olimpiade": 8,
      "popularitas": 44
    },
    "hukum": {
      "pusat_bantuan_hukum": 38,
      "pengadilan": 15,
      "kejaksaan": 37,
      "pos_polisi": 9,
      "armada_mobil_polisi": 5304,
      "akademi_polisi": 33,
      "indeks_korupsi": 90,
      "indeks_keamanan": 77
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
      "pendapatan": 6
    },
    "korporasi": {
      "tarif": 6,
      "kepuasan": 52,
      "pendapatan": 1
    },
    "penghasilan": {
      "tarif": 38,
      "kepuasan": 61,
      "pendapatan": 9
    },
    "bea_cukai": {
      "tarif": 9,
      "kepuasan": 86,
      "pendapatan": 2
    },
    "lingkungan": {
      "tarif": 19,
      "kepuasan": 88,
      "pendapatan": 2
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 5,
      "kepuasan": 93,
      "pendapatan": 0
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 50,
    "gaji_guru": 60,
    "gaji_medis": 80,
    "gaji_militer": 60
  },
  "subsidi": {
    "subsidi_energi": 75,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 52050,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 43540,
    "harga_bbm": 10700,
    "harga_listrik": 800,
    "harga_air": 5200,
    "harga_obat": 315800,
    "harga_pendidikan": 387120
  },
  // =============================================================
  // 14. 📊 PERMINTAAN & KEBUTUHAN RAKYAT
  // =============================================================

  "permintaan": {
    "kepuasan": 94,
    "permintaan_utama": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "perumahan": 14,
    "komersial": 1,
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
      "kekuatan_lunak": 15,
      "kekuatan_keras": 2,
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
    "kesehatan": 16,
    "pendidikan": 1,
    "keamanan": 37,
    "keuangan": 26,
    "lingkungan": 60
  }
};
