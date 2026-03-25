import { CountryData } from "../../types/_index";

export const belanda: CountryData = {
  "name_en": "Netherlands",
  "capital": "Amsterdam",
  "name_id": "Belanda",
  "lon": 5.75,
  "lat": 52.5,
  "flag": "🇳🇱",
  "jumlah_penduduk": 17231624,
  "anggaran": 10598,
  "pendapatan_nasional": "30280",
  "religion": "Protestan",
  "ideology": "Kapitalisme",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 11,
    "pembangkit_air": 5,
    "pembangkit_surya": 11,
    "pembangkit_termal": 30,
    "pembangkit_gas": 14,
    "pembangkit_angin": 30,
    "jaringan_listrik": 77
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 36,
    "kereta_bawah_tanah": 37,
    "jalur_kereta": 7,
    "jalan_tol": 4,
    "kualitas_jalan": 92,
    "pelabuhan_laut": 17,
    "bandara": 20,
    "terminal_bus": 2,
    "helipad": 33,
    "cakupan_internet": 54,
    "indeks_teknologi": 73,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 25,
    "uranium": 12,
    "batu_bara": 29,
    "minyak_bumi": 16,
    "gas_alam": 8,
    "garam": 2,
    "nikel": 35,
    "litium": 29,
    "aluminium": 14,
    "tembaga": 36,
    "logam_tanah_jarang": 2,
    "bijih_besi": 25,
    "kekuatan": 29.660809349923973
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 22,
    "mobil": 15,
    "sepeda_motor": 12,
    "smelter": 22,
    "semen_beton": 20,
    "kayu": 32,
    "air_mineral": 23,
    "gula": 38,
    "roti": 38,
    "farmasi": 38,
    "pupuk": 5,
    "pengolahan_daging": 30,
    "mie_instan": 39,
    "kekuatan": 3.076011687404966
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_agri_peternakan": {
    "ayam_unggas": 25.0,
    "sapi_perah": 38,
    "sapi_potong": 31,
    "domba_kambing": 12,
    "udang_kerang": 13.0,
    "ikan": 37,
    "padi": 32,
    "gandum_jagung": 19.5,
    "sayur_umbi": 31.0,
    "kedelai": 14,
    "kelapa_sawit": 38,
    "kopi_teh_kakao": 31.0,
    "kekuatan": 20.0
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 27,
    "gudang_senjata": 24,
    "hangar_tank": 10,
    "akademi_militer": 17,
    "pusat_komando": 4,
    "pangkalan_udara": 23,
    "pangkalan_laut": 18,
    "program_luar_angkasa": 19,
    "pertahanan_siber": 16,
    "anggaran_pertahanan": 3028,
    "personel": 25162,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 32,
    "infanteri": 11,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 28,
        "apc": 26,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 32,
        "kapal_destroyer": 36,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_siluman": 35,
        "helikopter_serang": 27,
        "pesawat_pengintai": 2
      },
      "total_unit": 11,
      "kesiapan": 98
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "intel_radar": { "sistem_satelit": 9,
      "jaringan_radar": 15,
      "operasi_siber": 2 },
    "armada_polisi": { "patroli_lantas": {
          "mobil_patroli": 40,
          "sepeda_motor": 35,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 28,
          "helikopter_polisi": 24,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 4,
          "kamera_pengawas": 1,
          "pusat_forensik": 1
        },
        "waktu_respon": 7,
        "kepercayaan_publik": 50 },
    "intelijen": 22,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 25,
      "misi_mata_mata": 26,
      "misi_sabotase": 4,
      "manajemen_wilayah": 20,
      "program_nuklir": 0 }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 34,
      "sd": 15,
      "smp": 28,
      "sma": 27,
      "universitas": 33,
      "lembaga_pendidikan": 11,
      "laboratorium": 1,
      "observatorium": 40,
      "pusat_penelitian": 34,
      "pusat_pengembangan": 25,
      "literasi": 74,
      "indeks_penelitian": 0
    },
    "kesehatan": {
      "rumah_sakit_besar": 12,
      "rumah_sakit_kecil": 26,
      "pusat_diagnostik": 28,
      "tempat_tidur_rs": 9546,
      "harapan_hidup": 27,
      "indeks_kesehatan": 85
    },
    "olahraga": {
      "kolam_renang": 38,
      "sirkuit_balap": 21,
      "stadion": 35,
      "stadion_internasional": 13,
      "skor_olimpiade": 17,
      "popularitas": 44
    },
    "hukum": {
      "pusat_bantuan_hukum": 34,
      "pengadilan": 30,
      "kejaksaan": 2,
      "pos_polisi": 6,
      "armada_mobil_polisi": 6595,
      "akademi_polisi": 28,
      "indeks_korupsi": 73,
      "indeks_keamanan": 95
  }
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 12,
      "kepuasan": 67,
      "pendapatan": 271
    },
    "korporasi": {
      "tarif": 37,
      "kepuasan": 52,
      "pendapatan": 1015
    },
    "penghasilan": {
      "tarif": 35,
      "kepuasan": 61,
      "pendapatan": 489
    },
    "bea_cukai": {
      "tarif": 31,
      "kepuasan": 86,
      "pendapatan": 610
    },
    "lingkungan": {
      "tarif": 31,
      "kepuasan": 88,
      "pendapatan": 731
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 53 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 159 },
    "lainnya": {
      "tarif": 5,
      "kepuasan": 93,
      "pendapatan": 129
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
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 75
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 104100,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 12320,
    "harga_gula": 7200,
    "harga_telur": 24880,
    "harga_bbm": 10700,
    "harga_listrik": 1600,
    "harga_air": 5200,
    "harga_obat": 315800,
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
      "kekuatan_lunak": 36,
      "kekuatan_keras": 22,
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
    "kesehatan": 23,
    "pendidikan": 25,
    "keamanan": 26,
    "keuangan": 30,
    "lingkungan": 60
  }
};
