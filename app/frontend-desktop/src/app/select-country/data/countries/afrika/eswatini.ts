import { CountryData } from "../../types/_index";

export const eswatini: CountryData = {
  "name_en": "Eswatini",
  "capital": "Lobamba",
  "name_id": "Eswatini",
  "lon": 31.5,
  "lat": -26.5,
  "flag": "🇸🇿",
  "jumlah_penduduk": 1136191,
  "anggaran": 44,
  "pendapatan_nasional": "125",
  "religion": "Protestan",
  "ideology": "Monarki",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_gas": 2,
    "pembangkit_air": 13,
    "pembangkit_nuklir": 11,
    "jaringan_listrik": 65,
    "pembangkit_surya": 39,
    "pembangkit_termal": 25,
    "pembangkit_angin": 18
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "bandara": 26,
    "jalur_sepeda": 34,
    "terminal_bus": 12,
    "helipad": 9,
    "jalan_tol": 13,
    "cakupan_internet": 71,
    "jalur_kereta": 20,
    "kualitas_jalan": 65,
    "pelabuhan_laut": 21,
    "kereta_bawah_tanah": 11
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "aluminium": 32,
    "batu_bara": 7,
    "tembaga": 27,
    "gas_alam": 34,
    "emas": 30,
    "bijih_besi": 20,
    "litium": 4,
    "nikel": 1,
    "minyak_bumi": 1,
    "logam_tanah_jarang": 1,
    "garam": 7,
    "uranium": 18
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "roti": 23,
    "mobil": 38,
    "semen_beton": 6,
    "pupuk": 32,
    "mie_instan": 9,
    "pengolahan_daging": 19,
    "air_mineral": 12,
    "sepeda_motor": 31,
    "farmasi": 35,
    "semikonduktor": 25,
    "smelter": 1,
    "gula": 33,
    "kayu": 20
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_agri_peternakan": {
    "ayam_unggas": 28.0,
    "sapi_perah": 2,
    "sapi_potong": 28,
    "domba_kambing": 3,
    "udang_kerang": 7.5,
    "ikan": 6,
    "padi": 28,
    "gandum_jagung": 10.5,
    "sayur_umbi": 5.0,
    "kedelai": 22,
    "kelapa_sawit": 17,
    "kopi_teh_kakao": 25.3
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 20,
    "gudang_senjata": 38,
    "hangar_tank": 29,
    "akademi_militer": 23,
    "pusat_komando": 28,
    "pangkalan_udara": 19,
    "pangkalan_laut": 4,
    "program_luar_angkasa": 16,
    "pertahanan_siber": 6,
    "anggaran_pertahanan": 12
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 15,
    "darat": {
        "tank_tempur_utama": 38,
        "apc_ifv": 138,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
  },
      "laut": {
        "kapal_induk": 23,
        "kapal_destroyer": 50,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
  },
      "udara": {
        "jet_tempur_siluman": 138,
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
    "waktu_respon": 38,
    "intelijen": 23,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 19,
      "misi_mata_mata": 12,
      "misi_sabotase": 24,
      "manajemen_wilayah": 6,
      "program_nuklir": 0
  }
  },
  "armada_kepolisian": {
    "armada_polisi": {
    "patroli_lantas": {
          "mobil_patroli": 26,
          "sepeda_motor": 37,
          "unit_k9": 23
  
  },
        "taktis_khusus": {
          "swat": 28,
          "helikopter_polisi": 35,
          "anti_huru_hara": 62
  },
        "pusat_komando": {
          "kantor_polisi": 27,
          "kamera_pengawas": 31,
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
      "prasekolah": 21,
      "dasar": 6,
      "menengah": 39,
      "lanjutan": 6,
      "universitas": 25,
      "lembaga_pendidikan": 30,
      "laboratorium": 18,
      "observatorium": 18,
      "pusat_penelitian": 27,
      "pusat_pengembangan": 35,
      "literasi": 70
  },
    "kesehatan": {
      "rumah_sakit_besar": 29,
      "rumah_sakit_kecil": 2,
      "pusat_diagnostik": 20,
      "harapan_hidup": 7,
      "indeks_kesehatan": 85
  },
    "hukum": {
      "pusat_bantuan_hukum": 40,
      "pengadilan": 28,
      "kejaksaan": 16,
      "pos_polisi": 39,
      "armada_mobil_polisi": 879,
      "akademi_polisi": 33,
      "indeks_korupsi": 51,
      "indeks_keamanan": 81
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 24,
      "sirkuit_balap": 37,
      "stadion": 27,
      "stadion_internasional": 21
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 37,
      "kepuasan": 67,
      "pendapatan": 4
    },
    "korporasi": {
      "tarif": 2,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 39,
      "kepuasan": 61,
      "pendapatan": 2
    },
    "bea_cukai": {
      "tarif": 17,
      "kepuasan": 86,
      "pendapatan": 2
    },
    "lingkungan": {
      "tarif": 14,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 28,
      "kepuasan": 93,
      "pendapatan": 1
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 40,
    "gaji_guru": 40,
    "gaji_medis": 50,
    "gaji_militer": 60
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 25,
    "subsidi_umkm": 25,
    "subsidi_transportasi": 25,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 22400,
    "harga_daging_sapi": 208200,
    "harga_ayam": 20500,
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 31100,
    "harga_bbm": 8560,
    "harga_listrik": 2240,
    "harga_air": 7280,
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
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 19,
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
    "kesehatan": 29,
    "pendidikan": 40,
    "keamanan": 6,
    "keuangan": 10,
    "lingkungan": 60
  }
};



