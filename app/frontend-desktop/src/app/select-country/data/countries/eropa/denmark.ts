import { CountryData } from "../../types/_index";

export const denmark: CountryData = {
  "name_en": "Denmark",
  "capital": "Copenhagen",
  "name_id": "Denmark",
  "lon": 10,
  "lat": 56,
  "flag": "🇩🇰",
  "jumlah_penduduk": 5793636,
  "anggaran": 3986,
  "pendapatan_nasional": "11390",
  "religion": "Protestan",
  "ideology": "Sosialisme",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 31,
    "pembangkit_air": 28,
    "pembangkit_surya": 20,
    "pembangkit_termal": 27,
    "pembangkit_gas": 4,
    "pembangkit_angin": 33,
    "jaringan_listrik": 80
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 2,
    "kereta_bawah_tanah": 4,
    "jalur_kereta": 14,
    "jalan_tol": 1,
    "kualitas_jalan": 74,
    "pelabuhan_laut": 25,
    "bandara": 15,
    "terminal_bus": 32,
    "helipad": 16,
    "cakupan_internet": 64,
    "indeks_teknologi": 63,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 9,
    "uranium": 30,
    "batu_bara": 14,
    "minyak_bumi": 6,
    "gas_alam": 32,
    "garam": 2,
    "nikel": 31,
    "litium": 31,
    "aluminium": 11,
    "tembaga": 29,
    "logam_tanah_jarang": 16,
    "bijih_besi": 27,
    "kekuatan": 29.660809349923973
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 18,
    "mobil": 30,
    "sepeda_motor": 19,
    "smelter": 24,
    "semen_beton": 34,
    "kayu": 33,
    "air_mineral": 25,
    "gula": 14,
    "roti": 30,
    "farmasi": 25,
    "pupuk": 31,
    "pengolahan_daging": 10,
    "mie_instan": 26,
    "kekuatan": 3.076011687404966
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_agri_peternakan": {
    "ayam_unggas": 27.5,
    "sapi_perah": 15,
    "sapi_potong": 16,
    "domba_kambing": 16,
    "udang_kerang": 3.5,
    "ikan": 27,
    "padi": 31,
    "gandum_jagung": 15.5,
    "sayur_umbi": 15.5,
    "kedelai": 30,
    "kelapa_sawit": 6,
    "kopi_teh_kakao": 23.0,
    "kekuatan": 20.0
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 11,
    "gudang_senjata": 3,
    "hangar_tank": 25,
    "akademi_militer": 40,
    "pusat_komando": 9,
    "pangkalan_udara": 9,
    "pangkalan_laut": 11,
    "program_luar_angkasa": 14,
    "pertahanan_siber": 1,
    "anggaran_pertahanan": 1139,
    "personel": 15749,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 37,
    "infanteri": 14,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 1,
        "apc": 13,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 37,
        "kapal_destroyer": 6,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_siluman": 36,
        "helikopter_serang": 5,
        "pesawat_pengintai": 2
      },
      "total_unit": 37,
      "kesiapan": 98
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "intel_radar": { "sistem_satelit": 22,
      "jaringan_radar": 7,
      "operasi_siber": 2 },
    "armada_polisi": { "patroli_lantas": {
          "mobil_patroli": 14,
          "sepeda_motor": 27,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 31,
          "helikopter_polisi": 30,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 20,
          "kamera_pengawas": 34,
          "pusat_forensik": 1
        },
        "waktu_respon": 22,
        "kepercayaan_publik": 50 },
    "intelijen": 24,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 1,
      "misi_mata_mata": 11,
      "misi_sabotase": 38,
      "manajemen_wilayah": 31,
      "program_nuklir": 0 }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 9,
      "sd": 3,
      "smp": 37,
      "sma": 28,
      "universitas": 20,
      "lembaga_pendidikan": 39,
      "laboratorium": 40,
      "observatorium": 2,
      "pusat_penelitian": 29,
      "pusat_pengembangan": 18,
      "literasi": 78,
      "indeks_penelitian": 0
    },
    "kesehatan": {
      "rumah_sakit_besar": 28,
      "rumah_sakit_kecil": 7,
      "pusat_diagnostik": 5,
      "tempat_tidur_rs": 7134,
      "harapan_hidup": 24,
      "indeks_kesehatan": 85
    },
    "olahraga": {
      "kolam_renang": 17,
      "sirkuit_balap": 25,
      "stadion": 38,
      "stadion_internasional": 26,
      "skor_olimpiade": 13,
      "popularitas": 44
    },
    "hukum": {
      "pusat_bantuan_hukum": 32,
      "pengadilan": 26,
      "kejaksaan": 17,
      "pos_polisi": 24,
      "armada_mobil_polisi": 2831,
      "akademi_polisi": 17,
      "indeks_korupsi": 66,
      "indeks_keamanan": 75
  }
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 10,
      "kepuasan": 67,
      "pendapatan": 72
    },
    "korporasi": {
      "tarif": 9,
      "kepuasan": 52,
      "pendapatan": 56
    },
    "penghasilan": {
      "tarif": 21,
      "kepuasan": 61,
      "pendapatan": 107
    },
    "bea_cukai": {
      "tarif": 38,
      "kepuasan": 86,
      "pendapatan": 272
    },
    "lingkungan": {
      "tarif": 29,
      "kepuasan": 88,
      "pendapatan": 273
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 20 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 60 },
    "lainnya": {
      "tarif": 26,
      "kepuasan": 93,
      "pendapatan": 180
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 100,
    "gaji_guru": 90,
    "gaji_medis": 90,
    "gaji_militer": 80
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 75
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 208200,
    "harga_ayam": 32800,
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 24880,
    "harga_bbm": 5350,
    "harga_listrik": 1280,
    "harga_air": 5200,
    "harga_obat": 78950,
    "harga_pendidikan": 483900
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
      "kekuatan_lunak": 32,
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
    "kesehatan": 33,
    "pendidikan": 32,
    "keamanan": 28,
    "keuangan": 36,
    "lingkungan": 60
  }
};
