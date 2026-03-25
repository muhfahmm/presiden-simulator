import { CountryData } from "../../types/_index";

export const el_salvador: CountryData = {
  "name_en": "El Salvador",
  "capital": "San Salvador",
  "name_id": "El salvador",
  "lon": -88.91666666,
  "lat": 13.83333333,
  "flag": "🇸🇻",
  "jumlah_penduduk": 6420744,
  "anggaran": 311,
  "pendapatan_nasional": "889",
  "religion": "Katolik",
  "ideology": "Nasionalisme",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 6,
    "pembangkit_air": 4,
    "pembangkit_surya": 7,
    "pembangkit_termal": 13,
    "pembangkit_gas": 4,
    "pembangkit_angin": 15,
    "jaringan_listrik": 65
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 38,
    "kereta_bawah_tanah": 1,
    "jalur_kereta": 12,
    "jalan_tol": 19,
    "kualitas_jalan": 52,
    "pelabuhan_laut": 26,
    "bandara": 30,
    "terminal_bus": 27,
    "helipad": 39,
    "cakupan_internet": 59,
    "indeks_teknologi": 60,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 20,
    "uranium": 16,
    "batu_bara": 1,
    "minyak_bumi": 30,
    "gas_alam": 27,
    "garam": 32,
    "nikel": 38,
    "litium": 11,
    "aluminium": 16,
    "tembaga": 39,
    "logam_tanah_jarang": 10,
    "bijih_besi": 23,
    "kekuatan": 29.660809349923973
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 6,
    "mobil": 34,
    "sepeda_motor": 35,
    "smelter": 3,
    "semen_beton": 33,
    "kayu": 36,
    "air_mineral": 16,
    "gula": 34,
    "roti": 22,
    "farmasi": 21,
    "pupuk": 19,
    "pengolahan_daging": 15,
    "mie_instan": 20,
    "kekuatan": 3.076011687404966
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_agri_peternakan": {
    "ayam_unggas": 18.5,
    "sapi_perah": 33,
    "sapi_potong": 7,
    "domba_kambing": 6,
    "udang_kerang": 23.0,
    "ikan": 28,
    "padi": 25,
    "gandum_jagung": 26.5,
    "sayur_umbi": 28.0,
    "kedelai": 18,
    "kelapa_sawit": 6,
    "kopi_teh_kakao": 21.0,
    "kekuatan": 20.0
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 18,
    "gudang_senjata": 7,
    "hangar_tank": 3,
    "akademi_militer": 5,
    "pusat_komando": 13,
    "pangkalan_udara": 22,
    "pangkalan_laut": 11,
    "program_luar_angkasa": 29,
    "pertahanan_siber": 18,
    "anggaran_pertahanan": 88,
    "personel": 19334,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 19,
    "infanteri": 5,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 32,
        "apc": 9,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 33,
        "kapal_destroyer": 30,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_siluman": 23,
        "helikopter_serang": 8,
        "pesawat_pengintai": 2
      },
      "total_unit": 14,
      "kesiapan": 98
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "intel_radar": { "sistem_satelit": 16,
      "jaringan_radar": 29,
      "operasi_siber": 2 },
    "armada_polisi": { "patroli_lantas": {
          "mobil_patroli": 28,
          "sepeda_motor": 28,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 21,
          "helikopter_polisi": 1,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 11,
          "kamera_pengawas": 13,
          "pusat_forensik": 1
        },
        "waktu_respon": 3,
        "kepercayaan_publik": 50 },
    "intelijen": 22,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 22,
      "misi_mata_mata": 32,
      "misi_sabotase": 21,
      "manajemen_wilayah": 2,
      "program_nuklir": 0 }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 22,
      "sd": 11,
      "smp": 26,
      "sma": 25,
      "universitas": 24,
      "lembaga_pendidikan": 24,
      "laboratorium": 16,
      "observatorium": 17,
      "pusat_penelitian": 36,
      "pusat_pengembangan": 34,
      "literasi": 68,
      "indeks_penelitian": 0
    },
    "kesehatan": {
      "rumah_sakit_besar": 31,
      "rumah_sakit_kecil": 19,
      "pusat_diagnostik": 32,
      "tempat_tidur_rs": 9449,
      "harapan_hidup": 36,
      "indeks_kesehatan": 85
    },
    "olahraga": {
      "kolam_renang": 27,
      "sirkuit_balap": 8,
      "stadion": 1,
      "stadion_internasional": 38,
      "skor_olimpiade": 4,
      "popularitas": 44
    },
    "hukum": {
      "pusat_bantuan_hukum": 17,
      "pengadilan": 27,
      "kejaksaan": 31,
      "pos_polisi": 17,
      "armada_mobil_polisi": 9033,
      "akademi_polisi": 20,
      "indeks_korupsi": 77,
      "indeks_keamanan": 78
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
      "pendapatan": 9
    },
    "korporasi": {
      "tarif": 19,
      "kepuasan": 52,
      "pendapatan": 15
    },
    "penghasilan": {
      "tarif": 28,
      "kepuasan": 61,
      "pendapatan": 26
    },
    "bea_cukai": {
      "tarif": 39,
      "kepuasan": 86,
      "pendapatan": 20
    },
    "lingkungan": {
      "tarif": 5,
      "kepuasan": 88,
      "pendapatan": 2
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 2 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 5 },
    "lainnya": {
      "tarif": 1,
      "kepuasan": 93,
      "pendapatan": 0
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 80,
    "gaji_guru": 90,
    "gaji_medis": 100,
    "gaji_militer": 90
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 25,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 100,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 22400,
    "harga_daging_sapi": 52050,
    "harga_ayam": 82000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 43540,
    "harga_bbm": 14980,
    "harga_listrik": 2240,
    "harga_air": 4160,
    "harga_obat": 126320,
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
      "kekuatan_lunak": 26,
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
    "kesehatan": 34,
    "pendidikan": 24,
    "keamanan": 16,
    "keuangan": 26,
    "lingkungan": 60
  }
};
