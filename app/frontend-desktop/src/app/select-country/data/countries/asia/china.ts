import { CountryData } from "../../types/_index";

export const china: CountryData = {
  "name_en": "China",
  "capital": "Beijing",
  "name_id": "China",
  "lon": 105,
  "lat": 35,
  "flag": "🇨🇳",
  "jumlah_penduduk": 1392730000,
  "anggaran": 180167,
  "pendapatan_nasional": "514763",
  "religion": "Katolik",
  "ideology": "Demokrasi",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 10,
    "pembangkit_air": 22,
    "pembangkit_surya": 12,
    "pembangkit_termal": 1,
    "pembangkit_gas": 27,
    "pembangkit_angin": 30,
    "jaringan_listrik": 84
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 15,
    "kereta_bawah_tanah": 33,
    "jalur_kereta": 4,
    "jalan_tol": 5,
    "kualitas_jalan": 59,
    "pelabuhan_laut": 12,
    "bandara": 24,
    "terminal_bus": 38,
    "helipad": 4,
    "cakupan_internet": 60,
    "indeks_teknologi": 86,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 3,
    "uranium": 27,
    "batu_bara": 34,
    "minyak_bumi": 12,
    "gas_alam": 20,
    "garam": 39,
    "nikel": 11,
    "litium": 14,
    "aluminium": 8,
    "tembaga": 27,
    "logam_tanah_jarang": 34,
    "bijih_besi": 22,
    "kekuatan": 29.660809349923973
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 13,
    "mobil": 8,
    "sepeda_motor": 39,
    "smelter": 34,
    "semen_beton": 14,
    "kayu": 30,
    "air_mineral": 17,
    "gula": 29,
    "roti": 7,
    "farmasi": 27,
    "pupuk": 38,
    "pengolahan_daging": 24,
    "mie_instan": 11,
    "kekuatan": 3.076011687404966
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_agri_peternakan": {
    "ayam_unggas": 10.5,
    "sapi_perah": 13,
    "sapi_potong": 37,
    "domba_kambing": 36,
    "udang_kerang": 23.5,
    "ikan": 2,
    "padi": 30,
    "gandum_jagung": 4.0,
    "sayur_umbi": 25.0,
    "kedelai": 24,
    "kelapa_sawit": 38,
    "kopi_teh_kakao": 17.7,
    "kekuatan": 20.0
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 32,
    "gudang_senjata": 37,
    "hangar_tank": 28,
    "akademi_militer": 15,
    "pusat_komando": 19,
    "pangkalan_udara": 1,
    "pangkalan_laut": 9,
    "program_luar_angkasa": 27,
    "pertahanan_siber": 28,
    "anggaran_pertahanan": 51476,
    "personel": 24571,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 33,
    "infanteri": 7,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 27,
        "apc": 38,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 28,
        "kapal_destroyer": 9,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_siluman": 33,
        "helikopter_serang": 32,
        "pesawat_pengintai": 2
      },
      "total_unit": 25,
      "kesiapan": 98
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "intel_radar": { "sistem_satelit": 35,
      "jaringan_radar": 5,
      "operasi_siber": 2 },
    "armada_polisi": { "patroli_lantas": {
          "mobil_patroli": 18,
          "sepeda_motor": 15,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 35,
          "helikopter_polisi": 27,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 19,
          "kamera_pengawas": 40,
          "pusat_forensik": 1
        },
        "waktu_respon": 32,
        "kepercayaan_publik": 50 },
    "intelijen": 5,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 11,
      "misi_mata_mata": 8,
      "misi_sabotase": 3,
      "manajemen_wilayah": 9,
      "program_nuklir": 0 }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 37,
      "sd": 33,
      "smp": 12,
      "sma": 34,
      "universitas": 9,
      "lembaga_pendidikan": 20,
      "laboratorium": 3,
      "observatorium": 28,
      "pusat_penelitian": 20,
      "pusat_pengembangan": 27,
      "literasi": 95,
      "indeks_penelitian": 0
    },
    "kesehatan": {
      "rumah_sakit_besar": 26,
      "rumah_sakit_kecil": 35,
      "pusat_diagnostik": 11,
      "tempat_tidur_rs": 3809,
      "harapan_hidup": 3,
      "indeks_kesehatan": 85
    },
    "olahraga": {
      "kolam_renang": 6,
      "sirkuit_balap": 17,
      "stadion": 31,
      "stadion_internasional": 5,
      "skor_olimpiade": 37,
      "popularitas": 44
    },
    "hukum": {
      "pusat_bantuan_hukum": 30,
      "pengadilan": 23,
      "kejaksaan": 32,
      "pos_polisi": 39,
      "armada_mobil_polisi": 2965,
      "akademi_polisi": 12,
      "indeks_korupsi": 64,
      "indeks_keamanan": 80
  }
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 24,
      "kepuasan": 67,
      "pendapatan": 7003
    },
    "korporasi": {
      "tarif": 1,
      "kepuasan": 52,
      "pendapatan": 367
    },
    "penghasilan": {
      "tarif": 6,
      "kepuasan": 61,
      "pendapatan": 2324
    },
    "bea_cukai": {
      "tarif": 35,
      "kepuasan": 86,
      "pendapatan": 14341
    },
    "lingkungan": {
      "tarif": 23,
      "kepuasan": 88,
      "pendapatan": 5242
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 901 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2703 },
    "lainnya": {
      "tarif": 12,
      "kepuasan": 93,
      "pendapatan": 5219
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
    "subsidi_pangan": 50,
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
    "harga_daging_sapi": 208200,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 11520,
    "harga_telur": 15550,
    "harga_bbm": 10700,
    "harga_listrik": 1600,
    "harga_air": 2600,
    "harga_obat": 315800,
    "harga_pendidikan": 387120
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
      "kekuatan_lunak": 3,
      "kekuatan_keras": 30,
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
    "kesehatan": 6,
    "pendidikan": 24,
    "keamanan": 36,
    "keuangan": 10,
    "lingkungan": 60
  }
};
