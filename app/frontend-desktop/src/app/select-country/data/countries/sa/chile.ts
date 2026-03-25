import { CountryData } from "../../types/_index";

export const chile: CountryData = {
  "name_en": "Chile",
  "capital": "Santiago",
  "name_id": "Chile",
  "lon": -71,
  "lat": -30,
  "flag": "🇨🇱",
  "jumlah_penduduk": 18729160,
  "anggaran": 3257,
  "pendapatan_nasional": "9306",
  "religion": "Katolik",
  "ideology": "Liberalisme",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 19,
    "pembangkit_air": 38,
    "pembangkit_surya": 25,
    "pembangkit_termal": 4,
    "pembangkit_gas": 17,
    "pembangkit_angin": 7,
    "jaringan_listrik": 58
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 16,
    "kereta_bawah_tanah": 24,
    "jalur_kereta": 40,
    "jalan_tol": 40,
    "kualitas_jalan": 95,
    "pelabuhan_laut": 17,
    "bandara": 34,
    "terminal_bus": 9,
    "helipad": 15,
    "cakupan_internet": 51,
    "indeks_teknologi": 62,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 7,
    "uranium": 38,
    "batu_bara": 33,
    "minyak_bumi": 36,
    "gas_alam": 37,
    "garam": 15,
    "nikel": 14,
    "litium": 11,
    "aluminium": 5,
    "tembaga": 36,
    "logam_tanah_jarang": 33,
    "bijih_besi": 8,
    "kekuatan": 29.660809349923973
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 15,
    "mobil": 4,
    "sepeda_motor": 4,
    "smelter": 26,
    "semen_beton": 4,
    "kayu": 20,
    "air_mineral": 35,
    "gula": 24,
    "roti": 17,
    "farmasi": 11,
    "pupuk": 18,
    "pengolahan_daging": 16,
    "mie_instan": 4,
    "kekuatan": 3.076011687404966
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_agri_peternakan": {
    "ayam_unggas": 32.0,
    "sapi_perah": 37,
    "sapi_potong": 30,
    "domba_kambing": 28,
    "udang_kerang": 19.5,
    "ikan": 25,
    "padi": 26,
    "gandum_jagung": 10.0,
    "sayur_umbi": 17.5,
    "kedelai": 21,
    "kelapa_sawit": 14,
    "kopi_teh_kakao": 20.3,
    "kekuatan": 20.0
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 20,
    "gudang_senjata": 5,
    "hangar_tank": 31,
    "akademi_militer": 13,
    "pusat_komando": 14,
    "pangkalan_udara": 37,
    "pangkalan_laut": 25,
    "program_luar_angkasa": 32,
    "pertahanan_siber": 27,
    "anggaran_pertahanan": 930,
    "personel": 28728,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 34,
    "infanteri": 31,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 18,
        "apc": 18,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 29,
        "kapal_destroyer": 8,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_siluman": 33,
        "helikopter_serang": 39,
        "pesawat_pengintai": 2
      },
      "total_unit": 35,
      "kesiapan": 98
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "intel_radar": { "sistem_satelit": 24,
      "jaringan_radar": 32,
      "operasi_siber": 2 },
    "armada_polisi": { "patroli_lantas": {
          "mobil_patroli": 2,
          "sepeda_motor": 21,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 12,
          "helikopter_polisi": 15,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 29,
          "kamera_pengawas": 22,
          "pusat_forensik": 1
        },
        "waktu_respon": 10,
        "kepercayaan_publik": 50 },
    "intelijen": 31,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 37,
      "misi_mata_mata": 39,
      "misi_sabotase": 38,
      "manajemen_wilayah": 9,
      "program_nuklir": 0 }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 32,
      "sd": 16,
      "smp": 22,
      "sma": 5,
      "universitas": 16,
      "lembaga_pendidikan": 35,
      "laboratorium": 10,
      "observatorium": 38,
      "pusat_penelitian": 7,
      "pusat_pengembangan": 20,
      "literasi": 88,
      "indeks_penelitian": 0
    },
    "kesehatan": {
      "rumah_sakit_besar": 14,
      "rumah_sakit_kecil": 32,
      "pusat_diagnostik": 32,
      "tempat_tidur_rs": 8456,
      "harapan_hidup": 12,
      "indeks_kesehatan": 85
    },
    "olahraga": {
      "kolam_renang": 7,
      "sirkuit_balap": 28,
      "stadion": 28,
      "stadion_internasional": 40,
      "skor_olimpiade": 37,
      "popularitas": 44
    },
    "hukum": {
      "pusat_bantuan_hukum": 10,
      "pengadilan": 20,
      "kejaksaan": 25,
      "pos_polisi": 2,
      "armada_mobil_polisi": 2723,
      "akademi_polisi": 34,
      "indeks_korupsi": 58,
      "indeks_keamanan": 56
  }
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 19,
      "kepuasan": 67,
      "pendapatan": 181
    },
    "korporasi": {
      "tarif": 34,
      "kepuasan": 52,
      "pendapatan": 128
    },
    "penghasilan": {
      "tarif": 17,
      "kepuasan": 61,
      "pendapatan": 144
    },
    "bea_cukai": {
      "tarif": 32,
      "kepuasan": 86,
      "pendapatan": 133
    },
    "lingkungan": {
      "tarif": 2,
      "kepuasan": 88,
      "pendapatan": 10
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 17 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 49 },
    "lainnya": {
      "tarif": 11,
      "kepuasan": 93,
      "pendapatan": 68
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 50,
    "gaji_guru": 70,
    "gaji_medis": 80,
    "gaji_militer": 50
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 22400,
    "harga_daging_sapi": 145740,
    "harga_ayam": 32800,
    "harga_minyak_goreng": 12320,
    "harga_gula": 11520,
    "harga_telur": 15550,
    "harga_bbm": 5350,
    "harga_listrik": 1600,
    "harga_air": 5200,
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
      "kekuatan_lunak": 26,
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
    "kesehatan": 20,
    "pendidikan": 37,
    "keamanan": 18,
    "keuangan": 40,
    "lingkungan": 60
  }
};
