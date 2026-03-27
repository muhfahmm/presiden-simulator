import { CountryData } from "../../../types";

export const mozambik: CountryData = {
  "name_en": "Mozambique",
  "capital": "Maputo",
  "name_id": "Mozambik",
  "lon": 35,
  "lat": -18.25,
  "flag": "🇲🇿",
  "jumlah_penduduk": 29495962,
  "anggaran": 175,
  "pendapatan_nasional": "500",
  "religion": "Katolik",
  "ideology": "Sosialisme",
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
    "bandara": 37,
    "jalur_sepeda": 37,
    "terminal_bus": 13,
    "helipad": 11,
    "jalan_tol": 5,
    "jalur_kereta": 8,
    "pelabuhan_laut": 14,
    "kereta_bawah_tanah": 18
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {    "mobil": 31,
    "semen_beton": 11,
    "pengolahan_daging": 5,    "sepeda_motor": 5,    "semikonduktor": 13,
    "smelter": 29,    "kayu": 28
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_peternakan": { 
    "ayam_unggas": 18,
    "sapi_perah": 2,
    "sapi_potong": 11,
    "domba_kambing": 7
  },
  "sektor_agrikultur": {
    "padi": 2,
    "gandum_jagung": 26,
    "sayur_umbi": 4,
    "kedelai": 16,
    "kelapa_sawit": 27,
    "kopi_teh_kakao": 13
  },
  "sektor_perikanan": {
    "udang_kerang": 12,
    "ikan": 9
  },
  "sektor_olahan_pangan": {
    "air_mineral": 25,
    "gula": 27,
    "roti": 22,
    "pengolahan_daging": 5,
    "mie_instan": 33
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
    "penjara": 17,
    "gudang_senjata": 16,
    "hangar_tank": 25,
    "akademi_militer": 27,
    "pusat_komando": 12,
    "pangkalan_udara": 11,
    "pangkalan_laut": 27,
    "program_luar_angkasa": 1,
    "pertahanan_siber": 40
    },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 12,
    "darat": {
        "tank_tempur_utama": 31,
        "apc_ifv": 164,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
  },
      "laut": {
        "kapal_induk": 14,
        "kapal_destroyer": 37,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
  },
      "udara": {
        "jet_tempur_siluman": 77,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 63,
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
    "waktu_respon": 12,
    "intelijen": 33,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 24,
      "misi_mata_mata": 3,
      "misi_sabotase": 30,
      "manajemen_wilayah": 5,
      "program_nuklir": 0
  }
  },
    "armada_kepolisian": {
    "armada_polisi": {
      "patroli_lantas": {
        "mobil_patroli_interceptor": 26,
        "unit_interceptor_r2": 23,
        "unit_k9": 23
  },
        "taktis_khusus": {
          "swat": 40,
          "helikopter_polisi": 40,
          "anti_huru_hara": 62
  },
        "pusat_komando": {
          "kantor_polisi": 16,
          "kamera_pengawas": 2,
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
      "prasekolah": 38,
      "dasar": 12,
      "menengah": 22,
      "lanjutan": 16,
      "universitas": 17,
      "lembaga_pendidikan": 12,
      "laboratorium": 17,
      "observatorium": 33,
      "pusat_penelitian": 25,
      "pusat_pengembangan": 4,
      "literasi": 83
  },
    "kesehatan": {
      "rumah_sakit_besar": 34,
      "rumah_sakit_kecil": 7,
      "pusat_diagnostik": 40,
      "harapan_hidup": 23,
      "indeks_kesehatan": 85
  },
    "hukum": {
      "pusat_bantuan_hukum": 34,
      "pengadilan": 38,
      "kejaksaan": 7,
      "pos_polisi": 9,
      "armada_mobil_polisi": 4434,
      "akademi_polisi": 35,
      "indeks_korupsi": 78,
      "indeks_keamanan": 84
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 25,
      "sirkuit_balap": 26,
      "stadion": 9,
      "stadion_internasional": 3
  },

  "un_vote": 85,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 35,
      "kepuasan": 67,
      "pendapatan": 10
    },
    "korporasi": {
      "tarif": 19,
      "kepuasan": 52,
      "pendapatan": 9
    },
    "penghasilan": {
      "tarif": 4,
      "kepuasan": 61,
      "pendapatan": 1
    },
    "bea_cukai": {
      "tarif": 8,
      "kepuasan": 86,
      "pendapatan": 2
    },
    "lingkungan": {
      "tarif": 38,
      "kepuasan": 88,
      "pendapatan": 7
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 3 },
    "lainnya": {
      "tarif": 6,
      "kepuasan": 93,
      "pendapatan": 2
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 50,
    "gaji_guru": 50,
    "gaji_medis": 50,
    "gaji_militer": 60
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 25,
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
    "harga_beras": 22400,
    "harga_daging_sapi": 104100,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 7700,
    "harga_gula": 14400,
    "harga_telur": 24880,
    "harga_bbm": 14980,
    "harga_listrik": 2240,
    "harga_air": 7280,
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
      "kekuatan_lunak": 12,
      "kekuatan_keras": 28,
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
    "kesehatan": 6,
    "pendidikan": 25,
    "keamanan": 1,
    "keuangan": 35,
    "lingkungan": 60
  }
};

