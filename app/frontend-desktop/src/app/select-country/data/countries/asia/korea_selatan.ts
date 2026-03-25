import { CountryData } from "../../types/_index";

export const korea_selatan: CountryData = {
  "name_en": "South Korea",
  "capital": "Seoul",
  "name_id": "Korea Selatan",
  "lon": 127.5,
  "lat": 37,
  "flag": "🇰🇷",
  "jumlah_penduduk": "10M",
  "anggaran": 17112,
  "pendapatan_nasional": "48893",
  "religion": "Ateisme",
  "ideology": "Kapitalisme",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 30,
    "pembangkit_air": 25,
    "pembangkit_surya": 30,
    "pembangkit_termal": 33,
    "pembangkit_gas": 20,
    "pembangkit_angin": 2,
    "jaringan_listrik": 74
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 6,
    "kereta_bawah_tanah": 10,
    "jalur_kereta": 18,
    "jalan_tol": 34,
    "kualitas_jalan": 92,
    "pelabuhan_laut": 14,
    "bandara": 16,
    "terminal_bus": 25,
    "helipad": 34,
    "cakupan_internet": 93,
    "indeks_teknologi": 89,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 6,
    "uranium": 19,
    "batu_bara": 5,
    "minyak_bumi": 30,
    "gas_alam": 23,
    "garam": 12,
    "nikel": 33,
    "litium": 28,
    "aluminium": 15,
    "tembaga": 13,
    "logam_tanah_jarang": 9,
    "bijih_besi": 4,
    "kekuatan": 29.660809349923973
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 36,
    "mobil": 39,
    "sepeda_motor": 18,
    "smelter": 26,
    "semen_beton": 37,
    "kayu": 32,
    "air_mineral": 30,
    "gula": 33,
    "roti": 19,
    "farmasi": 27,
    "pupuk": 20,
    "pengolahan_daging": 11,
    "mie_instan": 18,
    "kekuatan": 3.076011687404966
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_agri_peternakan": {
    "ayam_unggas": 18.5,
    "sapi_perah": 23,
    "sapi_potong": 1,
    "domba_kambing": 27,
    "udang_kerang": 6.0,
    "ikan": 19,
    "padi": 39,
    "gandum_jagung": 25.0,
    "sayur_umbi": 29.5,
    "kedelai": 33,
    "kelapa_sawit": 13,
    "kopi_teh_kakao": 8.3,
    "kekuatan": 20.0
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 27,
    "gudang_senjata": 7,
    "hangar_tank": 14,
    "akademi_militer": 38,
    "pusat_komando": 11,
    "pangkalan_udara": 2,
    "pangkalan_laut": 33,
    "program_luar_angkasa": 13,
    "pertahanan_siber": 26,
    "anggaran_pertahanan": 4889,
    "personel": 10626,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 22,
    "infanteri": 17,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 5,
        "apc": 5,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 12,
        "kapal_destroyer": 27,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_siluman": 7,
        "helikopter_serang": 34,
        "pesawat_pengintai": 2
      },
      "total_unit": 5,
      "kesiapan": 98
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "intel_radar": { "sistem_satelit": 8,
      "jaringan_radar": 34,
      "operasi_siber": 2 },
    "armada_polisi": { "patroli_lantas": {
          "mobil_patroli": 17,
          "sepeda_motor": 28,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 26,
          "helikopter_polisi": 10,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 38,
          "kamera_pengawas": 40,
          "pusat_forensik": 1
        },
        "waktu_respon": 6,
        "kepercayaan_publik": 50 },
    "intelijen": 35,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 10,
      "misi_mata_mata": 29,
      "misi_sabotase": 37,
      "manajemen_wilayah": 35,
      "program_nuklir": 0 }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 31,
      "sd": 28,
      "smp": 3,
      "sma": 18,
      "universitas": 26,
      "lembaga_pendidikan": 9,
      "laboratorium": 12,
      "observatorium": 1,
      "pusat_penelitian": 1,
      "pusat_pengembangan": 39,
      "literasi": 94,
      "indeks_penelitian": 0
    },
    "kesehatan": {
      "rumah_sakit_besar": 14,
      "rumah_sakit_kecil": 2,
      "pusat_diagnostik": 17,
      "tempat_tidur_rs": 1058,
      "harapan_hidup": 39,
      "indeks_kesehatan": 85
    },
    "olahraga": {
      "kolam_renang": 30,
      "sirkuit_balap": 18,
      "stadion": 14,
      "stadion_internasional": 3,
      "skor_olimpiade": 11,
      "popularitas": 44
    },
    "hukum": {
      "pusat_bantuan_hukum": 40,
      "pengadilan": 23,
      "kejaksaan": 27,
      "pos_polisi": 35,
      "armada_mobil_polisi": 8927,
      "akademi_polisi": 35,
      "indeks_korupsi": 74,
      "indeks_keamanan": 83
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
      "pendapatan": 1153
    },
    "korporasi": {
      "tarif": 1,
      "kepuasan": 52,
      "pendapatan": 50
    },
    "penghasilan": {
      "tarif": 1,
      "kepuasan": 61,
      "pendapatan": 17
    },
    "bea_cukai": {
      "tarif": 38,
      "kepuasan": 86,
      "pendapatan": 1632
    },
    "lingkungan": {
      "tarif": 26,
      "kepuasan": 88,
      "pendapatan": 1078
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 86 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 257 },
    "lainnya": {
      "tarif": 20,
      "kepuasan": 93,
      "pendapatan": 375
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 60,
    "gaji_guru": 60,
    "gaji_medis": 70,
    "gaji_militer": 70
  },
  "subsidi": {
    "subsidi_energi": 75,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 8000,
    "harga_daging_sapi": 83280,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 21560,
    "harga_gula": 11520,
    "harga_telur": 24880,
    "harga_bbm": 10700,
    "harga_listrik": 1600,
    "harga_air": 4160,
    "harga_obat": 157900,
    "harga_pendidikan": 677460
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
      "kekuatan_lunak": 33,
      "kekuatan_keras": 29,
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
    "kesehatan": 7,
    "pendidikan": 34,
    "keamanan": 9,
    "keuangan": 12,
    "lingkungan": 60
  }
};
