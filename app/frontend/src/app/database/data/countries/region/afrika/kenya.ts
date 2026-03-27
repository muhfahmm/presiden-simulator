import { CountryData } from "../../../types";

export const kenya: CountryData = {
  "name_en": "Kenya",
  "capital": "Nairobi",
  "name_id": "Kenya",
  "lon": 38,
  "lat": 1,
  "flag": "🇰🇪",
  "jumlah_penduduk": 51393010,
  "anggaran": 1070,
  "pendapatan_nasional": "3056",
  "religion": "Protestan",
  "ideology": "Kapitalisme",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_listrik_tenaga_gas": 30,
    "pembangkit_listrik_tenaga_air": 20,
    "pembangkit_listrik_tenaga_nuklir": 0,
    "pembangkit_listrik_tenaga_surya": 5,
    "pembangkit_listrik_tenaga_uap": 40,
    "pembangkit_listrik_tenaga_angin": 4
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "bandara": 6,
    "jalur_sepeda": 36,
    "terminal_bus": 9,
    "helipad": 3,
    "jalan_tol": 17,
    "jalur_kereta": 39,
    "pelabuhan_laut": 1,
    "kereta_bawah_tanah": 13
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {    "mobil": 30,
    "semen_beton": 9,
    "pengolahan_daging": 34,    "sepeda_motor": 17,    "semikonduktor": 14,
    "smelter": 29,    "kayu": 40
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_peternakan": { 
    "ayam_unggas": 20,
    "sapi_perah": 33,
    "sapi_potong": 16,
    "domba_kambing": 36
  },
  "sektor_agrikultur": {
    "padi": 26,
    "gandum_jagung": 10,
    "sayur_umbi": 23,
    "kedelai": 35,
    "kelapa_sawit": 4,
    "kopi_teh_kakao": 53
  },
  "sektor_perikanan": {
    "udang_kerang": 28,
    "ikan": 7
  },
  "sektor_olahan_pangan": {
    "air_mineral": 36,
    "gula": 2,
    "roti": 25,
    "pengolahan_daging": 34,
    "mie_instan": 15
  },

  // =============================================================
  // 6. 💊 LAYANAN MEDIS & FARMASI
  // =============================================================

  "sektor_farmasi": {
    "farmasi": 12
  },

  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================
"sektor_pertahanan": {
    "penjara": 33,
    "gudang_senjata": 7,
    "hangar_tank": 13,
    "akademi_militer": 33,
    "pusat_komando": 9,
    "pangkalan_udara": 17,
    "pangkalan_laut": 10,
    "program_luar_angkasa": 30,
    "pertahanan_siber": 19
    },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 15,
    "darat": {
        "tank_tempur_utama": 15,
        "apc_ifv": 26,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
  },
      "laut": {
        "kapal_induk": 18,
        "kapal_destroyer": 16,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
  },
      "udara": {
        "jet_tempur_siluman": 34,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 18,
        "pesawat_pengintai": 2,
        "drone_intai_uav": 0,
        "drone_kamikaze": 0,
        "pesawat_angkut": 0
  }
  ,
    "personel": {
        "infanteri_reguler": 150000,
        "pasukan_khusus": 0,
        "pasukan_cadangan": 0
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "militer_strategis": {
    "waktu_respon": 16,
    "intelijen": 32,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 39,
      "misi_mata_mata": 34,
      "misi_sabotase": 39,
      "manajemen_wilayah": 24,
      "program_nuklir": 0
  }
  },
    "armada_kepolisian": {
    "armada_polisi": {
      "patroli_lantas": {
        "mobil_patroli_interceptor": 17,
        "unit_interceptor_r2": 24,
        "unit_k9": 23
  },
        "taktis_khusus": {
          "swat": 11,
          "helikopter_polisi": 39,
          "anti_huru_hara": 62
  },
        "pusat_komando": {
          "kantor_polisi": 27,
          "kamera_pengawas": 9,
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
      "prasekolah": 17,
      "dasar": 17,
      "menengah": 16,
      "lanjutan": 12,
      "universitas": 40,
      "lembaga_pendidikan": 35,
      "laboratorium": 27,
      "observatorium": 20,
      "pusat_penelitian": 34,
      "pusat_pengembangan": 18,
      "literasi": 57
  },
    "kesehatan": {
      "rumah_sakit_besar": 36,
      "rumah_sakit_kecil": 6,
      "pusat_diagnostik": 20,
      "harapan_hidup": 37,
      "indeks_kesehatan": 85
  },
    "hukum": {
      "pusat_bantuan_hukum": 9,
      "pengadilan": 14,
      "kejaksaan": 40,
      "pos_polisi": 31,
      "armada_mobil_polisi": 7884,
      "akademi_polisi": 8,
      "indeks_korupsi": 69,
      "indeks_keamanan": 93
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 4,
      "sirkuit_balap": 35,
      "stadion": 26,
      "stadion_internasional": 5
  },

  "un_vote": 169,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 31,
      "kepuasan": 67,
      "pendapatan": 55
    },
    "korporasi": {
      "tarif": 30,
      "kepuasan": 52,
      "pendapatan": 95
    },
    "penghasilan": {
      "tarif": 24,
      "kepuasan": 61,
      "pendapatan": 49
    },
    "bea_cukai": {
      "tarif": 35,
      "kepuasan": 86,
      "pendapatan": 78
    },
    "lingkungan": {
      "tarif": 6,
      "kepuasan": 88,
      "pendapatan": 15
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 6 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 17 },
    "lainnya": {
      "tarif": 3,
      "kepuasan": 93,
      "pendapatan": 8
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 50,
    "gaji_guru": 50,
    "gaji_medis": 40,
    "gaji_militer": 60
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 25,
    "subsidi_umkm": 25,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 52050,
    "harga_ayam": 57400,
    "harga_minyak_goreng": 30800,
    "harga_gula": 28800,
    "harga_telur": 43540,
    "harga_bbm": 14980,
    "harga_listrik": 1600,
    "harga_air": 4160,
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
      "kekuatan_lunak": 31,
      "kekuatan_keras": 18,
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
    "kesehatan": 27,
    "pendidikan": 5,
    "keamanan": 40,
    "keuangan": 23,
    "lingkungan": 60
  }
};

