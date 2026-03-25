import { CountryData } from "../../types/_index";

export const republik_zambia: CountryData = {
  "name_en": "Zambia",
  "capital": "Lusaka",
  "name_id": "Republik zambia",
  "lon": 30,
  "lat": -15,
  "flag": "🇿🇲",
  "jumlah_penduduk": 17351822,
  "anggaran": 272,
  "pendapatan_nasional": "778",
  "religion": "Protestan",
  "ideology": "Demokrasi",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_gas": 1,
    "pembangkit_air": 28,
    "pembangkit_nuklir": 25,
    "jaringan_listrik": 69,
    "pembangkit_surya": 27,
    "pembangkit_termal": 37,
    "pembangkit_angin": 32
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "bandara": 15,
    "jalur_sepeda": 5,
    "terminal_bus": 4,
    "helipad": 5,
    "jalan_tol": 40,
    "cakupan_internet": 76,
    "jalur_kereta": 24,
    "kualitas_jalan": 63,
    "pelabuhan_laut": 7,
    "kereta_bawah_tanah": 37
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "aluminium": 3,
    "batu_bara": 39,
    "tembaga": 32,
    "gas_alam": 18,
    "emas": 3,
    "bijih_besi": 5,
    "litium": 21,
    "nikel": 6,
    "minyak_bumi": 12,
    "logam_tanah_jarang": 14,
    "garam": 24,
    "uranium": 16
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "roti": 38,
    "mobil": 32,
    "semen_beton": 37,
    "pupuk": 36,
    "mie_instan": 3,
    "pengolahan_daging": 5,
    "air_mineral": 27,
    "sepeda_motor": 8,
    "farmasi": 25,
    "semikonduktor": 28,
    "smelter": 35,
    "gula": 21,
    "kayu": 39
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_peternakan": {
    "ayam_unggas": 17.5,
    "sapi_perah": 31,
    "sapi_potong": 11,
    "domba_kambing": 2,
    "udang_kerang": 14.5,
    "ikan": 9
  },
  "sektor_agrikultur": {
    "padi": 11,
    "gandum_jagung": 21.5,
    "sayur_umbi": 10.5,
    "kedelai": 34,
    "kelapa_sawit": 2,
    "kopi_teh_kakao": 24.0
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 1,
    "gudang_senjata": 28,
    "hangar_tank": 35,
    "akademi_militer": 15,
    "pusat_komando": 3,
    "pangkalan_udara": 21,
    "pangkalan_laut": 31,
    "program_luar_angkasa": 40,
    "pertahanan_siber": 10,
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 17,
    "darat": {
        "tank_tempur_utama": 189,
        "apc_ifv": 10,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
  },
      "laut": {
        "kapal_induk": 31,
        "kapal_destroyer": 31,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
  },
      "udara": {
        "jet_tempur_siluman": 60,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 40,
        "pesawat_pengintai": 2,
        "drone_intai_uav": 0,
        "drone_kamikaze": 0,
        "pesawat_angkut": 0
  }
  ,
    "personel": {
        "infanteri_reguler": 170000,
        "pasukan_khusus": 0,
        "pasukan_cadangan": 0
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  
  "militer_strategis": {
    "waktu_respon": 16,
    "intelijen": 3,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 23,
      "misi_mata_mata": 34,
      "misi_sabotase": 6,
      "manajemen_wilayah": 28,
      "program_nuklir": 0
  }
  },
  "armada_kepolisian": {
    "armada_polisi": {
    "patroli_lantas": {
          "mobil_patroli": 35,
          "sepeda_motor": 21,
          "unit_k9": 23
  
  },
        "taktis_khusus": {
          "swat": 36,
          "helikopter_polisi": 7,
          "anti_huru_hara": 62
  },
        "pusat_komando": {
          "kantor_polisi": 9,
          "kamera_pengawas": 18,
          "pusat_forensik": 1
  },
    "kepercayaan_publik": 50
  }
  },
  "pabrik_militer": {
    "pabrik_drone_kamikaze": 0,
    "pabrik_amunisi": 0,
    "pabrik_kendaraan_tempur": 0,
    "pabrik_senjata_berat": 0
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 23,
      "dasar": 18,
      "menengah": 17,
      "lanjutan": 3,
      "universitas": 23,
      "lembaga_pendidikan": 1,
      "laboratorium": 18,
      "observatorium": 24,
      "pusat_penelitian": 38,
      "pusat_pengembangan": 36,
      "literasi": 69
  },
    "kesehatan": {
      "rumah_sakit_besar": 36,
      "rumah_sakit_kecil": 9,
      "pusat_diagnostik": 18,
      "harapan_hidup": 24,
      "indeks_kesehatan": 85
  },
    "hukum": {
      "pusat_bantuan_hukum": 40,
      "pengadilan": 17,
      "kejaksaan": 33,
      "pos_polisi": 12,
      "armada_mobil_polisi": 6474,
      "akademi_polisi": 31,
      "indeks_korupsi": 70,
      "indeks_keamanan": 88
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 12,
      "sirkuit_balap": 15,
      "stadion": 23,
      "stadion_internasional": 24
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 20,
      "kepuasan": 67,
      "pendapatan": 12
    },
    "korporasi": {
      "tarif": 32,
      "kepuasan": 52,
      "pendapatan": 15
    },
    "penghasilan": {
      "tarif": 11,
      "kepuasan": 61,
      "pendapatan": 3
    },
    "bea_cukai": {
      "tarif": 24,
      "kepuasan": 86,
      "pendapatan": 10
    },
    "lingkungan": {
      "tarif": 22,
      "kepuasan": 88,
      "pendapatan": 10
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 2 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 5 },
    "lainnya": {
      "tarif": 19,
      "kepuasan": 93,
      "pendapatan": 8
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 50,
    "gaji_guru": 40,
    "gaji_medis": 40,
    "gaji_militer": 50
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 25,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 25,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 12800,
    "harga_daging_sapi": 208200,
    "harga_ayam": 82000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 28800,
    "harga_telur": 24880,
    "harga_bbm": 14980,
    "harga_listrik": 1600,
    "harga_air": 4160,
    "harga_obat": 157900,
    "harga_pendidikan": 967800
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
      "kekuatan_keras": 13,
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
    "kesehatan": 38,
    "pendidikan": 14,
    "keamanan": 32,
    "keuangan": 31,
    "lingkungan": 60
  }
};



