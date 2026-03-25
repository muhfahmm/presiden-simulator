import { CountryData } from "../../types/_index";

export const bahrain: CountryData = {
  "name_en": "Bahrain",
  "capital": "Manama",
  "name_id": "Bahrain",
  "lon": 50.55,
  "lat": 26,
  "flag": "🇧🇭",
  "jumlah_penduduk": 1569439,
  "anggaran": 428,
  "pendapatan_nasional": "1222",
  "religion": "Islam",
  "ideology": "Monarki",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 32,
    "pembangkit_air": 20,
    "pembangkit_surya": 25,
    "pembangkit_termal": 21,
    "pembangkit_gas": 18,
    "pembangkit_angin": 26,
    "jaringan_listrik": 84
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 24,
    "kereta_bawah_tanah": 10,
    "jalur_kereta": 28,
    "jalan_tol": 34,
    "kualitas_jalan": 64,
    "pelabuhan_laut": 20,
    "bandara": 11,
    "terminal_bus": 30,
    "helipad": 16,
    "cakupan_internet": 56,
    "indeks_teknologi": 69,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 12,
    "uranium": 11,
    "batu_bara": 19,
    "minyak_bumi": 19,
    "gas_alam": 31,
    "garam": 14,
    "nikel": 25,
    "litium": 27,
    "aluminium": 18,
    "tembaga": 35,
    "logam_tanah_jarang": 26,
    "bijih_besi": 36,
    "kekuatan": 29.660809349923973
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 18,
    "mobil": 35,
    "sepeda_motor": 33,
    "smelter": 21,
    "semen_beton": 14,
    "kayu": 26,
    "air_mineral": 25,
    "gula": 12,
    "roti": 40,
    "farmasi": 5,
    "pupuk": 24,
    "pengolahan_daging": 8,
    "mie_instan": 34,
    "kekuatan": 3.076011687404966
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_agri_peternakan": {
    "ayam_unggas": 31.5,
    "sapi_perah": 7,
    "sapi_potong": 5,
    "domba_kambing": 33,
    "udang_kerang": 32.0,
    "ikan": 10,
    "padi": 23,
    "gandum_jagung": 16.0,
    "sayur_umbi": 27.5,
    "kedelai": 40,
    "kelapa_sawit": 2,
    "kopi_teh_kakao": 22.0,
    "kekuatan": 20.0
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 19,
    "gudang_senjata": 20,
    "hangar_tank": 38,
    "akademi_militer": 9,
    "pusat_komando": 25,
    "pangkalan_udara": 33,
    "pangkalan_laut": 25,
    "program_luar_angkasa": 1,
    "pertahanan_siber": 17,
    "anggaran_pertahanan": 122,
    "personel": 9786,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 6,
    "infanteri": 28,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 29,
        "apc": 7,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 17,
        "kapal_destroyer": 20,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_siluman": 39,
        "helikopter_serang": 32,
        "pesawat_pengintai": 2
      },
      "total_unit": 6,
      "kesiapan": 98
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "intel_radar": { "sistem_satelit": 14,
      "jaringan_radar": 9,
      "operasi_siber": 2 },
    "armada_polisi": { "patroli_lantas": {
          "mobil_patroli": 19,
          "sepeda_motor": 28,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 23,
          "helikopter_polisi": 39,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 35,
          "kamera_pengawas": 9,
          "pusat_forensik": 1
        },
        "waktu_respon": 36,
        "kepercayaan_publik": 50 },
    "intelijen": 37,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 24,
      "misi_mata_mata": 34,
      "misi_sabotase": 9,
      "manajemen_wilayah": 33,
      "program_nuklir": 0 }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 27,
      "sd": 35,
      "smp": 39,
      "sma": 12,
      "universitas": 24,
      "lembaga_pendidikan": 3,
      "laboratorium": 12,
      "observatorium": 4,
      "pusat_penelitian": 18,
      "pusat_pengembangan": 24,
      "literasi": 61,
      "indeks_penelitian": 0
    },
    "kesehatan": {
      "rumah_sakit_besar": 36,
      "rumah_sakit_kecil": 12,
      "pusat_diagnostik": 7,
      "tempat_tidur_rs": 5560,
      "harapan_hidup": 11,
      "indeks_kesehatan": 85
    },
    "olahraga": {
      "kolam_renang": 5,
      "sirkuit_balap": 13,
      "stadion": 4,
      "stadion_internasional": 27,
      "skor_olimpiade": 24,
      "popularitas": 44
    },
    "hukum": {
      "pusat_bantuan_hukum": 35,
      "pengadilan": 20,
      "kejaksaan": 22,
      "pos_polisi": 24,
      "armada_mobil_polisi": 9975,
      "akademi_polisi": 8,
      "indeks_korupsi": 92,
      "indeks_keamanan": 72
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
      "pendapatan": 6
    },
    "korporasi": {
      "tarif": 27,
      "kepuasan": 52,
      "pendapatan": 27
    },
    "penghasilan": {
      "tarif": 20,
      "kepuasan": 61,
      "pendapatan": 11
    },
    "bea_cukai": {
      "tarif": 4,
      "kepuasan": 86,
      "pendapatan": 2
    },
    "lingkungan": {
      "tarif": 37,
      "kepuasan": 88,
      "pendapatan": 22
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 3 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 7 },
    "lainnya": {
      "tarif": 26,
      "kepuasan": 93,
      "pendapatan": 31
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 60,
    "gaji_guru": 60,
    "gaji_medis": 80,
    "gaji_militer": 80
  },
  "subsidi": {
    "subsidi_energi": 75,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 50,
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
    "harga_gula": 20160,
    "harga_telur": 31100,
    "harga_bbm": 5350,
    "harga_listrik": 3200,
    "harga_air": 10400,
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
      "kekuatan_lunak": 27,
      "kekuatan_keras": 14,
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
    "kesehatan": 32,
    "pendidikan": 35,
    "keamanan": 22,
    "keuangan": 13,
    "lingkungan": 60
  }
};
