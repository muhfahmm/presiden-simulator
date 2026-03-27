import { CountryData } from "../../../types";

export const afrika_selatan: CountryData = {
  "name_en": "South Africa",
  "capital": "Pretoria",
  "name_id": "Afrika Selatan",
  "lon": 24,
  "lat": -29,
  "flag": "🇿🇦",
  "jumlah_penduduk": 57779622,
  "anggaran": 3938,
  "pendapatan_nasional": "11251",
  "religion": "Protestan",
  "ideology": "Demokrasi",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_listrik_tenaga_gas": 30,
    "pembangkit_listrik_tenaga_air": 20,
    "pembangkit_listrik_tenaga_nuklir": 2,
    "pembangkit_listrik_tenaga_surya": 5,
    "pembangkit_listrik_tenaga_uap": 40,
    "pembangkit_listrik_tenaga_angin": 4
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "bandara": 3,
    "jalur_sepeda": 6,
    "terminal_bus": 6,
    "helipad": 4,
    "jalan_tol": 12,
    "jalur_kereta": 18,
    "pelabuhan_laut": 35,
    "kereta_bawah_tanah": 15
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {    "mobil": 6,
    "semen_beton": 40,
    "pengolahan_daging": 12,    "sepeda_motor": 39,    "semikonduktor": 37,
    "smelter": 4,    "kayu": 9
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_peternakan": { 
    "ayam_unggas": 22,
    "sapi_perah": 35,
    "sapi_potong": 36,
    "domba_kambing": 37
  },
  "sektor_agrikultur": {
    "padi": 5,
    "gandum_jagung": 28,
    "sayur_umbi": 16,
    "kedelai": 8,
    "kelapa_sawit": 18,
    "kopi_teh_kakao": 12
  },
  "sektor_perikanan": {
    "udang_kerang": 28,
    "ikan": 39
  },
  "sektor_olahan_pangan": {
    "air_mineral": 19,
    "gula": 23,
    "roti": 26,
    "pengolahan_daging": 12,
    "mie_instan": 10
  },

  // =============================================================
  // 6. 💊 LAYANAN MEDIS & FARMASI
  // =============================================================

  "sektor_farmasi": {
    "farmasi": 38
  },

  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================
"sektor_pertahanan": {
    "penjara": 27,
    "gudang_senjata": 16,
    "hangar_tank": 17,
    "akademi_militer": 22,
    "pusat_komando": 15,
    "pangkalan_udara": 38,
    "pangkalan_laut": 9,
    "program_luar_angkasa": 13,
    "pertahanan_siber": 23
    },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 25,
    "darat": {
        "tank_tempur_utama": 21,
        "apc_ifv": 26,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
  },
      "laut": {
        "kapal_induk": 4,
        "kapal_destroyer": 22,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
  },
      "udara": {
        "jet_tempur_siluman": 26,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 36,
        "pesawat_pengintai": 2,
        "drone_intai_uav": 0,
        "drone_kamikaze": 0,
        "pesawat_angkut": 0
  }
  ,
    "personel": {
        "infanteri_reguler": 250000,
        "pasukan_khusus": 0,
        "pasukan_cadangan": 0
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "militer_strategis": {
    "waktu_respon": 36,
    "intelijen": 23,
    "status_nuklir": true,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 15,
      "misi_mata_mata": 11,
      "misi_sabotase": 26,
      "manajemen_wilayah": 10,
      "program_nuklir": 80
  }
  },
    "armada_kepolisian": {
    "armada_polisi": {
      "patroli_lantas": {
        "mobil_patroli": 16,
        "sepeda_motor": 15,
        "unit_k9": 23
  },
        "taktis_khusus": {
          "swat": 33,
          "helikopter_polisi": 19,
          "anti_huru_hara": 62
  },
        "pusat_komando": {
          "kantor_polisi": 40,
          "kamera_pengawas": 21,
          "pusat_forensik": 1
  }
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
      "prasekolah": 32,
      "dasar": 3,
      "menengah": 34,
      "lanjutan": 15,
      "universitas": 2,
      "lembaga_pendidikan": 20,
      "laboratorium": 28,
      "observatorium": 20,
      "pusat_penelitian": 40,
      "pusat_pengembangan": 10,
      "literasi": 85
  },
    "kesehatan": {
      "rumah_sakit_besar": 20,
      "rumah_sakit_kecil": 22,
      "pusat_diagnostik": 36,
      "harapan_hidup": 15,
      "indeks_kesehatan": 85
  },
    "hukum": {
      "pusat_bantuan_hukum": 21,
      "pengadilan": 20,
      "kejaksaan": 20,
      "pos_polisi": 6,
      "armada_mobil_polisi": 2079,
      "akademi_polisi": 26,
      "indeks_korupsi": 58,
      "indeks_keamanan": 52
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 16,
      "sirkuit_balap": 21,
      "stadion": 18,
      "stadion_internasional": 32
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 1,
      "kepuasan": 67,
      "pendapatan": 9
    },
    "korporasi": {
      "tarif": 18,
      "kepuasan": 52,
      "pendapatan": 157
    },
    "penghasilan": {
      "tarif": 39,
      "kepuasan": 61,
      "pendapatan": 367
    },
    "bea_cukai": {
      "tarif": 6,
      "kepuasan": 86,
      "pendapatan": 64
    },
    "lingkungan": {
      "tarif": 12,
      "kepuasan": 88,
      "pendapatan": 83
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 20 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 60 },
    "lainnya": {
      "tarif": 13,
      "kepuasan": 93,
      "pendapatan": 134
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 30,
    "gaji_guru": 50,
    "gaji_medis": 60,
    "gaji_militer": 50
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 25,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 25,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 52050,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 7700,
    "harga_gula": 11520,
    "harga_telur": 31100,
    "harga_bbm": 14980,
    "harga_listrik": 1280,
    "harga_air": 5200,
    "harga_obat": 221060,
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
      "kekuatan_lunak": 34,
      "kekuatan_keras": 7,
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
    "kesehatan": 13,
    "pendidikan": 24,
    "keamanan": 40,
    "keuangan": 37,
    "lingkungan": 60
  }
};

