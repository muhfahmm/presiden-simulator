import { CountryData } from "../../types/_index";

export const kazakhstan: CountryData = {
  "name_en": "Kazakhstan",
  "capital": "Astana",
  "name_id": "Kazakhstan",
  "lon": 68,
  "lat": 48,
  "flag": "🇰🇿",
  "jumlah_penduduk": 18272430,
  "anggaran": 2528,
  "pendapatan_nasional": "7223",
  "religion": "Islam",
  "ideology": "Nasionalisme",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 23,
    "pembangkit_air": 13,
    "pembangkit_surya": 10,
    "pembangkit_termal": 36,
    "pembangkit_gas": 5,
    "pembangkit_angin": 16,
    "jaringan_listrik": 55
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 14,
    "kereta_bawah_tanah": 27,
    "jalur_kereta": 14,
    "jalan_tol": 16,
    "kualitas_jalan": 94,
    "pelabuhan_laut": 33,
    "bandara": 20,
    "terminal_bus": 25,
    "helipad": 16,
    "cakupan_internet": 82,
    "indeks_teknologi": 94,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 19,
    "uranium": 32,
    "batu_bara": 33,
    "minyak_bumi": 2,
    "gas_alam": 15,
    "garam": 26,
    "nikel": 14,
    "litium": 19,
    "aluminium": 33,
    "tembaga": 32,
    "logam_tanah_jarang": 28,
    "bijih_besi": 12,
    "kekuatan": 29.660809349923973
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 37,
    "mobil": 40,
    "sepeda_motor": 24,
    "smelter": 8,
    "semen_beton": 21,
    "kayu": 12,
    "air_mineral": 12,
    "gula": 10,
    "roti": 15,
    "farmasi": 16,
    "pupuk": 6,
    "pengolahan_daging": 29,
    "mie_instan": 21,
    "kekuatan": 3.076011687404966
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_agri_peternakan": {
    "ayam_unggas": 23.5,
    "sapi_perah": 25,
    "sapi_potong": 29,
    "domba_kambing": 2,
    "udang_kerang": 25.0,
    "ikan": 4,
    "padi": 33,
    "gandum_jagung": 18.5,
    "sayur_umbi": 24.5,
    "kedelai": 25,
    "kelapa_sawit": 13,
    "kopi_teh_kakao": 9.7,
    "kekuatan": 20.0
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 7,
    "gudang_senjata": 32,
    "hangar_tank": 18,
    "akademi_militer": 32,
    "pusat_komando": 38,
    "pangkalan_udara": 1,
    "pangkalan_laut": 23,
    "program_luar_angkasa": 20,
    "pertahanan_siber": 6,
    "anggaran_pertahanan": 722,
    "personel": 7149,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 24,
    "infanteri": 1,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 13,
        "apc": 39,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 33,
        "kapal_destroyer": 22,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_siluman": 34,
        "helikopter_serang": 12,
        "pesawat_pengintai": 2
      },
      "total_unit": 20,
      "kesiapan": 98
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "intel_radar": { "sistem_satelit": 33,
      "jaringan_radar": 7,
      "operasi_siber": 2 },
    "armada_polisi": { "patroli_lantas": {
          "mobil_patroli": 1,
          "sepeda_motor": 20,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 10,
          "helikopter_polisi": 6,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 24,
          "kamera_pengawas": 30,
          "pusat_forensik": 1
        },
        "waktu_respon": 5,
        "kepercayaan_publik": 50 },
    "intelijen": 30,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 14,
      "misi_mata_mata": 2,
      "misi_sabotase": 40,
      "manajemen_wilayah": 37,
      "program_nuklir": 0 }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 19,
      "sd": 38,
      "smp": 1,
      "sma": 39,
      "universitas": 15,
      "lembaga_pendidikan": 19,
      "laboratorium": 22,
      "observatorium": 40,
      "pusat_penelitian": 8,
      "pusat_pengembangan": 36,
      "literasi": 85,
      "indeks_penelitian": 0
    },
    "kesehatan": {
      "rumah_sakit_besar": 7,
      "rumah_sakit_kecil": 17,
      "pusat_diagnostik": 13,
      "tempat_tidur_rs": 9427,
      "harapan_hidup": 7,
      "indeks_kesehatan": 85
    },
    "olahraga": {
      "kolam_renang": 11,
      "sirkuit_balap": 4,
      "stadion": 23,
      "stadion_internasional": 9,
      "skor_olimpiade": 24,
      "popularitas": 44
    },
    "hukum": {
      "pusat_bantuan_hukum": 9,
      "pengadilan": 37,
      "kejaksaan": 8,
      "pos_polisi": 4,
      "armada_mobil_polisi": 4297,
      "akademi_polisi": 22,
      "indeks_korupsi": 71,
      "indeks_keamanan": 72
  }
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 32,
      "kepuasan": 67,
      "pendapatan": 133
    },
    "korporasi": {
      "tarif": 18,
      "kepuasan": 52,
      "pendapatan": 102
    },
    "penghasilan": {
      "tarif": 13,
      "kepuasan": 61,
      "pendapatan": 90
    },
    "bea_cukai": {
      "tarif": 22,
      "kepuasan": 86,
      "pendapatan": 100
    },
    "lingkungan": {
      "tarif": 13,
      "kepuasan": 88,
      "pendapatan": 65
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 13 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 38 },
    "lainnya": {
      "tarif": 17,
      "kepuasan": 93,
      "pendapatan": 46
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 70,
    "gaji_guru": 60,
    "gaji_medis": 70,
    "gaji_militer": 70
  },
  "subsidi": {
    "subsidi_energi": 75,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 208200,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 7700,
    "harga_gula": 28800,
    "harga_telur": 24880,
    "harga_bbm": 10700,
    "harga_listrik": 2240,
    "harga_air": 5200,
    "harga_obat": 126320,
    "harga_pendidikan": 241950
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
      "kekuatan_lunak": 38,
      "kekuatan_keras": 20,
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
    "pendidikan": 26,
    "keamanan": 11,
    "keuangan": 32,
    "lingkungan": 60
  }
};
