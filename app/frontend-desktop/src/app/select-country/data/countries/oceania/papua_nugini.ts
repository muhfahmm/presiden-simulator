import { CountryData } from "../../types/_index";

export const papua_nugini: CountryData = {
  "name_en": "Papua New Guinea",
  "capital": "Port Moresby",
  "name_id": "Papua nugini",
  "lon": 147,
  "lat": -6,
  "flag": "🇵🇬",
  "jumlah_penduduk": 8606316,
  "anggaran": 292,
  "pendapatan_nasional": "833",
  "religion": "Protestan",
  "ideology": "Demokrasi",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 4,
    "pembangkit_air": 10,
    "pembangkit_surya": 15,
    "pembangkit_termal": 28,
    "pembangkit_gas": 15,
    "pembangkit_angin": 26,
    "jaringan_listrik": 68
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 20,
    "kereta_bawah_tanah": 1,
    "jalur_kereta": 4,
    "jalan_tol": 17,
    "kualitas_jalan": 67,
    "pelabuhan_laut": 13,
    "bandara": 13,
    "terminal_bus": 30,
    "helipad": 13,
    "cakupan_internet": 85
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 24,
    "uranium": 19,
    "batu_bara": 17,
    "minyak_bumi": 11,
    "gas_alam": 16,
    "garam": 21,
    "nikel": 25,
    "litium": 34,
    "aluminium": 9,
    "tembaga": 22,
    "logam_tanah_jarang": 2,
    "bijih_besi": 39
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 16,
    "mobil": 11,
    "sepeda_motor": 23,
    "smelter": 25,
    "semen_beton": 22,
    "kayu": 4,
    "air_mineral": 10,
    "gula": 24,
    "roti": 3,
    "farmasi": 39,
    "pupuk": 8,
    "pengolahan_daging": 2,
    "mie_instan": 23
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_agri_peternakan": {
    "ayam_unggas": 20.5,
    "sapi_perah": 34,
    "sapi_potong": 3,
    "domba_kambing": 22,
    "udang_kerang": 14.0,
    "ikan": 1,
    "padi": 12,
    "gandum_jagung": 21.5,
    "sayur_umbi": 36.0,
    "kedelai": 9,
    "kelapa_sawit": 23,
    "kopi_teh_kakao": 11.3
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 25,
    "gudang_senjata": 30,
    "hangar_tank": 13,
    "akademi_militer": 19,
    "pusat_komando": 35,
    "pangkalan_udara": 33,
    "pangkalan_laut": 21,
    "program_luar_angkasa": 13,
    "pertahanan_siber": 34,
    "anggaran_pertahanan": 83
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 39,
    "darat": {
        "tank_tempur_utama": 174,
        "apc": 109,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 23,
        "kapal_destroyer": 38,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_siluman": 38,
        "helikopter_serang": 17,
        "pesawat_pengintai": 2
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "armada_polisi": {
    "patroli_lantas": {
          "mobil_patroli": 29,
          "sepeda_motor": 12,
          "unit_k9": 23
        
  },
        "taktis_khusus": {
          "swat": 20,
          "helikopter_polisi": 29,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 7,
          "kamera_pengawas": 21,
          "pusat_forensik": 1
        },
    "kepercayaan_publik": 50
  },
  "waktu_respon": 8,
    "intelijen": 5,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 29,
      "misi_mata_mata": 37,
      "misi_sabotase": 28,
      "manajemen_wilayah": 39,
      "program_nuklir": 0 }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 30,
      "dasar": 29,
      "menengah": 17,
      "lanjutan": 1,
      "universitas": 20,
      "lembaga_pendidikan": 24,
      "laboratorium": 29,
      "observatorium": 22,
      "pusat_penelitian": 7,
      "pusat_pengembangan": 15,
      "literasi": 74
    },
    "kesehatan": {
      "rumah_sakit_besar": 32,
      "rumah_sakit_kecil": 40,
      "pusat_diagnostik": 5,
      "harapan_hidup": 35,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 20,
      "pengadilan": 16,
      "kejaksaan": 6,
      "pos_polisi": 34,
      "armada_mobil_polisi": 2579,
      "akademi_polisi": 36,
      "indeks_korupsi": 87,
      "indeks_keamanan": 88
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 35,
      "sirkuit_balap": 24,
      "stadion": 29,
      "stadion_internasional": 11
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 5,
      "kepuasan": 67,
      "pendapatan": 3
    },
    "korporasi": {
      "tarif": 5,
      "kepuasan": 52,
      "pendapatan": 3
    },
    "penghasilan": {
      "tarif": 26,
      "kepuasan": 61,
      "pendapatan": 9
    },
    "bea_cukai": {
      "tarif": 3,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 16,
      "kepuasan": 88,
      "pendapatan": 13
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 2 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 5 },
    "lainnya": {
      "tarif": 31,
      "kepuasan": 93,
      "pendapatan": 23
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
    "subsidi_energi": 50,
    "subsidi_pangan": 50,
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
    "harga_beras": 12800,
    "harga_daging_sapi": 104100,
    "harga_ayam": 20500,
    "harga_minyak_goreng": 15400,
    "harga_gula": 11520,
    "harga_telur": 43540,
    "harga_bbm": 8560,
    "harga_listrik": 1280,
    "harga_air": 5200,
    "harga_obat": 157900,
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
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 36,
      "kekuatan_keras": 6,
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
    "kesehatan": 10,
    "pendidikan": 21,
    "keamanan": 37,
    "keuangan": 23,
    "lingkungan": 60
  }
};



