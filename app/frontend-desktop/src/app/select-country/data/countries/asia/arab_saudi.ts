import { CountryData } from "../../types/_index";

export const arab_saudi: CountryData = {
  "name_en": "Saudi Arabia",
  "capital": "Riyadh",
  "name_id": "Arab Saudi",
  "lon": 46.74,
  "lat": 24.77,
  "flag": "🇸🇦",
  "jumlah_penduduk": 33699947,
  "anggaran": 10793,
  "pendapatan_nasional": "30836",
  "religion": "Islam",
  "ideology": "Monarki",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 38,
    "pembangkit_air": 40,
    "pembangkit_surya": 19,
    "pembangkit_termal": 35,
    "pembangkit_gas": 25,
    "pembangkit_angin": 25,
    "jaringan_listrik": 79
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 28,
    "kereta_bawah_tanah": 28,
    "jalur_kereta": 33,
    "jalan_tol": 37,
    "kualitas_jalan": 93,
    "pelabuhan_laut": 20,
    "bandara": 2,
    "terminal_bus": 16,
    "helipad": 23,
    "cakupan_internet": 85,
    "indeks_teknologi": 82,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 2,
    "uranium": 9,
    "batu_bara": 21,
    "minyak_bumi": 19,
    "gas_alam": 5,
    "garam": 4,
    "nikel": 36,
    "litium": 17,
    "aluminium": 8,
    "tembaga": 10,
    "logam_tanah_jarang": 35,
    "bijih_besi": 19,
    "kekuatan": 29.660809349923973
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 15,
    "mobil": 2,
    "sepeda_motor": 31,
    "smelter": 15,
    "semen_beton": 24,
    "kayu": 6,
    "air_mineral": 31,
    "gula": 33,
    "roti": 38,
    "farmasi": 9,
    "pupuk": 14,
    "pengolahan_daging": 19,
    "mie_instan": 18,
    "kekuatan": 3.076011687404966
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_agri_peternakan": {
    "ayam_unggas": 5.0,
    "sapi_perah": 32,
    "sapi_potong": 38,
    "domba_kambing": 17,
    "udang_kerang": 30.0,
    "ikan": 23,
    "padi": 3,
    "gandum_jagung": 20.0,
    "sayur_umbi": 26.0,
    "kedelai": 39,
    "kelapa_sawit": 32,
    "kopi_teh_kakao": 15.0,
    "kekuatan": 20.0
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 28,
    "gudang_senjata": 27,
    "hangar_tank": 15,
    "akademi_militer": 27,
    "pusat_komando": 13,
    "pangkalan_udara": 10,
    "pangkalan_laut": 14,
    "program_luar_angkasa": 26,
    "pertahanan_siber": 21,
    "anggaran_pertahanan": 3083,
    "personel": 9491,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 13,
    "infanteri": 17,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 2,
        "apc": 17,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 6,
        "kapal_destroyer": 19,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_siluman": 3,
        "helikopter_serang": 13,
        "pesawat_pengintai": 2
      },
      "total_unit": 33,
      "kesiapan": 98
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "intel_radar": { "sistem_satelit": 9,
      "jaringan_radar": 11,
      "operasi_siber": 2 },
    "armada_polisi": { "patroli_lantas": {
          "mobil_patroli": 33,
          "sepeda_motor": 24,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 37,
          "helikopter_polisi": 2,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 27,
          "kamera_pengawas": 16,
          "pusat_forensik": 1
        },
        "waktu_respon": 31,
        "kepercayaan_publik": 50 },
    "intelijen": 15,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 6,
      "misi_mata_mata": 30,
      "misi_sabotase": 7,
      "manajemen_wilayah": 27,
      "program_nuklir": 0 }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 28,
      "sd": 40,
      "smp": 32,
      "sma": 6,
      "universitas": 16,
      "lembaga_pendidikan": 2,
      "laboratorium": 2,
      "observatorium": 11,
      "pusat_penelitian": 5,
      "pusat_pengembangan": 28,
      "literasi": 78,
      "indeks_penelitian": 0
    },
    "kesehatan": {
      "rumah_sakit_besar": 27,
      "rumah_sakit_kecil": 17,
      "pusat_diagnostik": 27,
      "tempat_tidur_rs": 9174,
      "harapan_hidup": 3,
      "indeks_kesehatan": 85
    },
    "olahraga": {
      "kolam_renang": 38,
      "sirkuit_balap": 3,
      "stadion": 1,
      "stadion_internasional": 12,
      "skor_olimpiade": 15,
      "popularitas": 44
    },
    "hukum": {
      "pusat_bantuan_hukum": 27,
      "pengadilan": 36,
      "kejaksaan": 18,
      "pos_polisi": 26,
      "armada_mobil_polisi": 1693,
      "akademi_polisi": 38,
      "indeks_korupsi": 94,
      "indeks_keamanan": 84
  }
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 40,
      "kepuasan": 67,
      "pendapatan": 832
    },
    "korporasi": {
      "tarif": 2,
      "kepuasan": 52,
      "pendapatan": 44
    },
    "penghasilan": {
      "tarif": 35,
      "kepuasan": 61,
      "pendapatan": 982
    },
    "bea_cukai": {
      "tarif": 30,
      "kepuasan": 86,
      "pendapatan": 335
    },
    "lingkungan": {
      "tarif": 16,
      "kepuasan": 88,
      "pendapatan": 265
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 54 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 162 },
    "lainnya": {
      "tarif": 4,
      "kepuasan": 93,
      "pendapatan": 127
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 60,
    "gaji_guru": 60,
    "gaji_medis": 60,
    "gaji_militer": 70
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 32000,
    "harga_daging_sapi": 52050,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 20160,
    "harga_telur": 62200,
    "harga_bbm": 21400,
    "harga_listrik": 2240,
    "harga_air": 10400,
    "harga_obat": 315800,
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
      "kekuatan_lunak": 13,
      "kekuatan_keras": 23,
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
    "pendidikan": 19,
    "keamanan": 21,
    "keuangan": 39,
    "lingkungan": 60
  }
};
