import { CountryData } from "../../types/_index";

export const namibia: CountryData = {
  "name_en": "Namibia",
  "capital": "Windhoek",
  "name_id": "Namibia",
  "lon": 17,
  "lat": -22,
  "flag": "🇳🇦",
  "jumlah_penduduk": 2448255,
  "anggaran": 126,
  "pendapatan_nasional": "361",
  "religion": "Protestan",
  "ideology": "Sosialisme",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_gas": 26,
    "pembangkit_air": 19,
    "pembangkit_nuklir": 40,
    "jaringan_listrik": 85,
    "pembangkit_surya": 7,
    "pembangkit_termal": 1,
    "pembangkit_angin": 25
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "bandara": 16,
    "jalur_sepeda": 24,
    "terminal_bus": 2,
    "helipad": 15,
    "jalan_tol": 4,
    "cakupan_internet": 53,
    "jalur_kereta": 16,
    "kualitas_jalan": 80,
    "pelabuhan_laut": 34,
    "kereta_bawah_tanah": 1
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "aluminium": 37,
    "batu_bara": 17,
    "tembaga": 18,
    "gas_alam": 15,
    "emas": 21,
    "bijih_besi": 10,
    "litium": 38,
    "nikel": 30,
    "minyak_bumi": 29,
    "logam_tanah_jarang": 7,
    "garam": 12,
    "uranium": 22
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "roti": 31,
    "mobil": 13,
    "semen_beton": 27,
    "pupuk": 18,
    "mie_instan": 3,
    "pengolahan_daging": 39,
    "air_mineral": 26,
    "sepeda_motor": 36,
    "farmasi": 20,
    "semikonduktor": 38,
    "smelter": 7,
    "gula": 11,
    "kayu": 10
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_agri_peternakan": {
    "ayam_unggas": 38.0,
    "sapi_perah": 35,
    "sapi_potong": 9,
    "domba_kambing": 3,
    "udang_kerang": 23.0,
    "ikan": 28,
    "padi": 30,
    "gandum_jagung": 25.5,
    "sayur_umbi": 12.5,
    "kedelai": 36,
    "kelapa_sawit": 22,
    "kopi_teh_kakao": 9.7
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 34,
    "gudang_senjata": 22,
    "hangar_tank": 4,
    "akademi_militer": 30,
    "pusat_komando": 34,
    "pangkalan_udara": 40,
    "pangkalan_laut": 12,
    "program_luar_angkasa": 30,
    "pertahanan_siber": 4,
    "anggaran_pertahanan": 36
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 1,
    "darat": {
        "tank_tempur_utama": 176,
        "apc_ifv": 186,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
  },
      "laut": {
        "kapal_induk": 39,
        "kapal_destroyer": 43,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
  },
      "udara": {
        "jet_tempur_siluman": 153,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 150,
        "pesawat_pengintai": 2,
        "drone_intai_uav": 0,
        "drone_kamikaze": 0,
        "pesawat_angkut": 0
  }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  
  "militer_strategis": {
    "waktu_respon": 25,
    "intelijen": 11,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 31,
      "misi_mata_mata": 31,
      "misi_sabotase": 29,
      "manajemen_wilayah": 31,
      "program_nuklir": 0
  }
  },
  "armada_kepolisian": {
    "armada_polisi": {
    "patroli_lantas": {
          "mobil_patroli": 23,
          "sepeda_motor": 13,
          "unit_k9": 23
  
  },
        "taktis_khusus": {
          "swat": 2,
          "helikopter_polisi": 26,
          "anti_huru_hara": 62
  },
        "pusat_komando": {
          "kantor_polisi": 4,
          "kamera_pengawas": 13,
          "pusat_forensik": 1
  },
    "kepercayaan_publik": 50
  }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 15,
      "dasar": 29,
      "menengah": 36,
      "lanjutan": 39,
      "universitas": 40,
      "lembaga_pendidikan": 29,
      "laboratorium": 28,
      "observatorium": 10,
      "pusat_penelitian": 28,
      "pusat_pengembangan": 27,
      "literasi": 69
  },
    "kesehatan": {
      "rumah_sakit_besar": 37,
      "rumah_sakit_kecil": 19,
      "pusat_diagnostik": 19,
      "harapan_hidup": 15,
      "indeks_kesehatan": 85
  },
    "hukum": {
      "pusat_bantuan_hukum": 22,
      "pengadilan": 28,
      "kejaksaan": 4,
      "pos_polisi": 6,
      "armada_mobil_polisi": 4201,
      "akademi_polisi": 29,
      "indeks_korupsi": 51,
      "indeks_keamanan": 64
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 6,
      "sirkuit_balap": 4,
      "stadion": 34,
      "stadion_internasional": 31
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 17,
      "kepuasan": 67,
      "pendapatan": 3
    },
    "korporasi": {
      "tarif": 18,
      "kepuasan": 52,
      "pendapatan": 5
    },
    "penghasilan": {
      "tarif": 6,
      "kepuasan": 61,
      "pendapatan": 2
    },
    "bea_cukai": {
      "tarif": 2,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 6,
      "kepuasan": 88,
      "pendapatan": 1
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
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
    "gaji_asn": 40,
    "gaji_guru": 40,
    "gaji_medis": 50,
    "gaji_militer": 40
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 25,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 0
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 12800,
    "harga_daging_sapi": 104100,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 11520,
    "harga_telur": 31100,
    "harga_bbm": 21400,
    "harga_listrik": 1600,
    "harga_air": 7280,
    "harga_obat": 126320,
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
      "kekuatan_lunak": 7,
      "kekuatan_keras": 25,
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
    "kesehatan": 1,
    "pendidikan": 22,
    "keamanan": 39,
    "keuangan": 24,
    "lingkungan": 60
  }
};



