import { CountryData } from "../../types/_index";

export const mauritius: CountryData = {
  "name_en": "Mauritius",
  "capital": "Port Louis",
  "name_id": "Mauritius",
  "lon": 57.55,
  "lat": -20.28333333,
  "flag": "🇲🇺",
  "jumlah_penduduk": 1265303,
  "anggaran": 136,
  "pendapatan_nasional": "389",
  "religion": "Hindu",
  "ideology": "Demokrasi",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_gas": 13,
    "pembangkit_air": 22,
    "pembangkit_nuklir": 28,
    "jaringan_listrik": 86,
    "pembangkit_surya": 3,
    "pembangkit_termal": 13,
    "pembangkit_angin": 11
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "bandara": 32,
    "jalur_sepeda": 21,
    "terminal_bus": 24,
    "helipad": 32,
    "jalan_tol": 4,
    "cakupan_internet": 75,
    "jalur_kereta": 2,
    "kualitas_jalan": 68,
    "pelabuhan_laut": 36,
    "kereta_bawah_tanah": 11
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "aluminium": 23,
    "batu_bara": 5,
    "tembaga": 4,
    "gas_alam": 7,
    "emas": 27,
    "bijih_besi": 18,
    "litium": 37,
    "nikel": 36,
    "minyak_bumi": 26,
    "logam_tanah_jarang": 15,
    "garam": 5,
    "uranium": 35
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "roti": 22,
    "mobil": 40,
    "semen_beton": 26,
    "pupuk": 40,
    "mie_instan": 1,
    "pengolahan_daging": 16,
    "air_mineral": 5,
    "sepeda_motor": 26,
    "farmasi": 33,
    "semikonduktor": 39,
    "smelter": 38,
    "gula": 24,
    "kayu": 14
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_agri_peternakan": {
    "ayam_unggas": 16.5,
    "sapi_perah": 16,
    "sapi_potong": 30,
    "domba_kambing": 15,
    "udang_kerang": 32.0,
    "ikan": 10,
    "padi": 8,
    "gandum_jagung": 11.0,
    "sayur_umbi": 2.5,
    "kedelai": 35,
    "kelapa_sawit": 15,
    "kopi_teh_kakao": 15.7
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 29,
    "gudang_senjata": 6,
    "hangar_tank": 10,
    "akademi_militer": 5,
    "pusat_komando": 17,
    "pangkalan_udara": 28,
    "pangkalan_laut": 15,
    "program_luar_angkasa": 5,
    "pertahanan_siber": 40,
    "anggaran_pertahanan": 38
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 2,
    "darat": {
        "tank_tempur_utama": 164,
        "apc": 69,
        "artileri_berat": 26
  },
      "laut": {
        "kapal_induk": 7,
        "kapal_destroyer": 116,
        "kapal_selam_nuklir": 0
  },
      "udara": {
        "jet_tempur_siluman": 172,
        "helikopter_serang": 181,
        "pesawat_pengintai": 2
  }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "armada_polisi": {
    "patroli_lantas": {
          "mobil_patroli": 10,
          "sepeda_motor": 1,
          "unit_k9": 23
  
  },
        "taktis_khusus": {
          "swat": 32,
          "helikopter_polisi": 34,
          "anti_huru_hara": 62
  },
        "pusat_komando": {
          "kantor_polisi": 36,
          "kamera_pengawas": 20,
          "pusat_forensik": 1
  },
    "kepercayaan_publik": 50
  },
  "waktu_respon": 39,
    "intelijen": 21,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 38,
      "misi_mata_mata": 17,
      "misi_sabotase": 6,
      "manajemen_wilayah": 39,
      "program_nuklir": 0
  }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 22,
      "dasar": 14,
      "menengah": 17,
      "lanjutan": 38,
      "universitas": 2,
      "lembaga_pendidikan": 13,
      "laboratorium": 1,
      "observatorium": 25,
      "pusat_penelitian": 16,
      "pusat_pengembangan": 36,
      "literasi": 95
  },
    "kesehatan": {
      "rumah_sakit_besar": 26,
      "rumah_sakit_kecil": 17,
      "pusat_diagnostik": 10,
      "harapan_hidup": 11,
      "indeks_kesehatan": 85
  },
    "hukum": {
      "pusat_bantuan_hukum": 35,
      "pengadilan": 27,
      "kejaksaan": 23,
      "pos_polisi": 22,
      "armada_mobil_polisi": 1046,
      "akademi_polisi": 37,
      "indeks_korupsi": 72,
      "indeks_keamanan": 83
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 14,
      "sirkuit_balap": 3,
      "stadion": 33,
      "stadion_internasional": 15
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 22,
      "kepuasan": 67,
      "pendapatan": 5
    },
    "korporasi": {
      "tarif": 8,
      "kepuasan": 52,
      "pendapatan": 2
    },
    "penghasilan": {
      "tarif": 22,
      "kepuasan": 61,
      "pendapatan": 3
    },
    "bea_cukai": {
      "tarif": 14,
      "kepuasan": 86,
      "pendapatan": 2
    },
    "lingkungan": {
      "tarif": 38,
      "kepuasan": 88,
      "pendapatan": 10
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 3 },
    "lainnya": {
      "tarif": 22,
      "kepuasan": 93,
      "pendapatan": 7
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 30,
    "gaji_guru": 50,
    "gaji_medis": 40,
    "gaji_militer": 50
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 50,
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
    "harga_beras": 32000,
    "harga_daging_sapi": 208200,
    "harga_ayam": 32800,
    "harga_minyak_goreng": 30800,
    "harga_gula": 28800,
    "harga_telur": 62200,
    "harga_bbm": 14980,
    "harga_listrik": 1600,
    "harga_air": 5200,
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
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 13,
      "kekuatan_keras": 33,
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
    "kesehatan": 14,
    "pendidikan": 39,
    "keamanan": 11,
    "keuangan": 37,
    "lingkungan": 60
  }
};



