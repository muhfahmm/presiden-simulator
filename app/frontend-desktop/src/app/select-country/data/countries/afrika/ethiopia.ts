import { CountryData } from "../../types/_index";

export const ethiopia: CountryData = {
  "name_en": "Ethiopia",
  "capital": "Addis Ababa",
  "name_id": "Ethiopia",
  "lon": 38,
  "lat": 8,
  "flag": "🇪🇹",
  "jumlah_penduduk": 109224559,
  "anggaran": 1507,
  "pendapatan_nasional": "4306",
  "religion": "Kristen Ortodoks",
  "ideology": "Nasionalisme",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_gas": 40,
    "pembangkit_air": 27,
    "pembangkit_nuklir": 19,
    "jaringan_listrik": 78,
    "pembangkit_surya": 1,
    "pembangkit_termal": 3,
    "pembangkit_angin": 38
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "bandara": 16,
    "jalur_sepeda": 8,
    "terminal_bus": 29,
    "helipad": 3,
    "jalan_tol": 29,
    "cakupan_internet": 70,
    "jalur_kereta": 24,
    "kualitas_jalan": 67,
    "pelabuhan_laut": 20,
    "kereta_bawah_tanah": 28
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "aluminium": 1,
    "batu_bara": 3,
    "tembaga": 25,
    "gas_alam": 33,
    "emas": 36,
    "bijih_besi": 31,
    "litium": 39,
    "nikel": 40,
    "minyak_bumi": 19,
    "logam_tanah_jarang": 40,
    "garam": 20,
    "uranium": 7
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "roti": 25,
    "mobil": 33,
    "semen_beton": 20,
    "pupuk": 23,
    "mie_instan": 5,
    "pengolahan_daging": 15,
    "air_mineral": 30,
    "sepeda_motor": 15,
    "farmasi": 6,
    "semikonduktor": 22,
    "smelter": 22,
    "gula": 7,
    "kayu": 22
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_agri_peternakan": {
    "ayam_unggas": 16.0,
    "sapi_perah": 7,
    "sapi_potong": 11,
    "domba_kambing": 10,
    "udang_kerang": 11.5,
    "ikan": 7,
    "padi": 38,
    "gandum_jagung": 47.0,
    "sayur_umbi": 17.5,
    "kedelai": 27,
    "kelapa_sawit": 26,
    "kopi_teh_kakao": 48.0
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 28,
    "gudang_senjata": 4,
    "hangar_tank": 8,
    "akademi_militer": 37,
    "pusat_komando": 40,
    "pangkalan_udara": 10,
    "pangkalan_laut": 33,
    "program_luar_angkasa": 22,
    "pertahanan_siber": 26,
    "anggaran_pertahanan": 430
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 25,
    "darat": {
        "tank_tempur_utama": 38,
        "apc_ifv": 14,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
  },
      "laut": {
        "kapal_induk": 25,
        "kapal_destroyer": 36,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
  },
      "udara": {
        "jet_tempur_siluman": 9,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 11,
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
    "waktu_respon": 5,
    "intelijen": 34,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 11,
      "misi_mata_mata": 9,
      "misi_sabotase": 2,
      "manajemen_wilayah": 22,
      "program_nuklir": 0
  }
  },
  "armada_kepolisian": {
    "armada_polisi": {
    "patroli_lantas": {
          "mobil_patroli": 1,
          "sepeda_motor": 20,
          "unit_k9": 23
  
  },
        "taktis_khusus": {
          "swat": 31,
          "helikopter_polisi": 37,
          "anti_huru_hara": 62
  },
        "pusat_komando": {
          "kantor_polisi": 35,
          "kamera_pengawas": 28,
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
      "prasekolah": 6,
      "dasar": 2,
      "menengah": 32,
      "lanjutan": 7,
      "universitas": 9,
      "lembaga_pendidikan": 16,
      "laboratorium": 38,
      "observatorium": 24,
      "pusat_penelitian": 28,
      "pusat_pengembangan": 33,
      "literasi": 54
  },
    "kesehatan": {
      "rumah_sakit_besar": 39,
      "rumah_sakit_kecil": 15,
      "pusat_diagnostik": 7,
      "harapan_hidup": 2,
      "indeks_kesehatan": 85
  },
    "hukum": {
      "pusat_bantuan_hukum": 14,
      "pengadilan": 24,
      "kejaksaan": 10,
      "pos_polisi": 21,
      "armada_mobil_polisi": 9104,
      "akademi_polisi": 17,
      "indeks_korupsi": 82,
      "indeks_keamanan": 82
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 35,
      "sirkuit_balap": 26,
      "stadion": 14,
      "stadion_internasional": 40
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 17,
      "kepuasan": 67,
      "pendapatan": 59
    },
    "korporasi": {
      "tarif": 25,
      "kepuasan": 52,
      "pendapatan": 82
    },
    "penghasilan": {
      "tarif": 30,
      "kepuasan": 61,
      "pendapatan": 63
    },
    "bea_cukai": {
      "tarif": 38,
      "kepuasan": 86,
      "pendapatan": 81
    },
    "lingkungan": {
      "tarif": 30,
      "kepuasan": 88,
      "pendapatan": 50
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 8 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 23 },
    "lainnya": {
      "tarif": 11,
      "kepuasan": 93,
      "pendapatan": 18
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 40,
    "gaji_guru": 60,
    "gaji_medis": 50,
    "gaji_militer": 40
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 25,
    "subsidi_transportasi": 25,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 104100,
    "harga_ayam": 32800,
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 24880,
    "harga_bbm": 10700,
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
      "kekuatan_lunak": 1,
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
    "kesehatan": 19,
    "pendidikan": 4,
    "keamanan": 5,
    "keuangan": 33,
    "lingkungan": 60
  }
};



