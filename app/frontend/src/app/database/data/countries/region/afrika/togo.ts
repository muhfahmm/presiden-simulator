import { CountryData } from "../../../types";

export const togo: CountryData = {
  "name_en": "Togo",
  "capital": "Lomé",
  "name_id": "Togo",
  "lon": 1.16666666,
  "lat": 8,
  "flag": "🇹🇬",
  "jumlah_penduduk": 7889094,
  "anggaran": 88,
  "pendapatan_nasional": "250",
  "religion": "Katolik",
  "ideology": "Konservatisme",
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
    "bandara": 36,
    "jalur_sepeda": 22,
    "terminal_bus": 9,
    "helipad": 27,
    "jalan_tol": 31,
    "jalur_kereta": 20,
    "pelabuhan_laut": 23,
    "kereta_bawah_tanah": 3
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {    "mobil": 16,
    "semen_beton": 4,
    "pengolahan_daging": 5,    "sepeda_motor": 16,    "semikonduktor": 12,
    "smelter": 16,    "kayu": 4
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_peternakan": { "ayam_unggas": 21.5,
    "sapi_perah": 7,
    "sapi_potong": 18,
    "domba_kambing": 2
  },
  "sektor_agrikultur": {
    "padi": 35,
    "gandum_jagung": 10.0,
    "sayur_umbi": 11.0,
    "kedelai": 32,
    "kelapa_sawit": 27,
    "kopi_teh_kakao": 13.7
  },
  "sektor_perikanan": {
    "udang_kerang": 13.0,
    "ikan": 28
  },
  "sektor_olahan_pangan": {
    "air_mineral": 10,
    "gula": 38,
    "roti": 35,
    "pengolahan_daging": 5,
    "mie_instan": 2
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
    "penjara": 28,
    "gudang_senjata": 16,
    "hangar_tank": 40,
    "akademi_militer": 25,
    "pusat_komando": 9,
    "pangkalan_udara": 34,
    "pangkalan_laut": 39,
    "program_luar_angkasa": 26,
    "pertahanan_siber": 39
    },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 12,
    "darat": {
        "tank_tempur_utama": 21,
        "apc_ifv": 155,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
  },
      "laut": {
        "kapal_induk": 7,
        "kapal_destroyer": 122,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
  },
      "udara": {
        "jet_tempur_siluman": 117,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 129,
        "pesawat_pengintai": 2,
        "drone_intai_uav": 0,
        "drone_kamikaze": 0,
        "pesawat_angkut": 0
  }
  ,
    "personel": {
        "infanteri_reguler": 120000,
        "pasukan_khusus": 0,
        "pasukan_cadangan": 0
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "militer_strategis": {
    "waktu_respon": 11,
    "intelijen": 32,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 19,
      "misi_mata_mata": 23,
      "misi_sabotase": 18,
      "manajemen_wilayah": 35,
      "program_nuklir": 0
  }
  },
    "armada_kepolisian": {
    "armada_polisi": {
      "patroli_lantas": {
        "mobil_patroli": 36,
        "sepeda_motor": 16,
        "unit_k9": 23
  },
        "taktis_khusus": {
          "swat": 8,
          "helikopter_polisi": 21,
          "anti_huru_hara": 62
  },
        "pusat_komando": {
          "kantor_polisi": 28,
          "kamera_pengawas": 18,
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
      "prasekolah": 3,
      "dasar": 19,
      "menengah": 11,
      "lanjutan": 39,
      "universitas": 13,
      "lembaga_pendidikan": 14,
      "laboratorium": 1,
      "observatorium": 5,
      "pusat_penelitian": 39,
      "pusat_pengembangan": 1,
      "literasi": 54
  },
    "kesehatan": {
      "rumah_sakit_besar": 20,
      "rumah_sakit_kecil": 15,
      "pusat_diagnostik": 17,
      "harapan_hidup": 27,
      "indeks_kesehatan": 85
  },
    "hukum": {
      "pusat_bantuan_hukum": 37,
      "pengadilan": 27,
      "kejaksaan": 39,
      "pos_polisi": 8,
      "armada_mobil_polisi": 4480,
      "akademi_polisi": 4,
      "indeks_korupsi": 80,
      "indeks_keamanan": 81
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 9,
      "sirkuit_balap": 19,
      "stadion": 38,
      "stadion_internasional": 2
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 30,
      "kepuasan": 67,
      "pendapatan": 5
    },
    "korporasi": {
      "tarif": 7,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 5,
      "kepuasan": 61,
      "pendapatan": 1
    },
    "bea_cukai": {
      "tarif": 28,
      "kepuasan": 86,
      "pendapatan": 4
    },
    "lingkungan": {
      "tarif": 1,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 35,
      "kepuasan": 93,
      "pendapatan": 8
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 40,
    "gaji_guru": 40,
    "gaji_medis": 50,
    "gaji_militer": 50
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 25,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 25,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 12800,
    "harga_daging_sapi": 52050,
    "harga_ayam": 82000,
    "harga_minyak_goreng": 12320,
    "harga_gula": 20160,
    "harga_telur": 31100,
    "harga_bbm": 8560,
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
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 35,
      "kekuatan_keras": 17,
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
    "kesehatan": 22,
    "pendidikan": 30,
    "keamanan": 2,
    "keuangan": 11,
    "lingkungan": 60
  }
};

