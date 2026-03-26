import { CountryData } from "../../../types";

export const gabon: CountryData = {
  "name_en": "Gabon",
  "capital": "Libreville",
  "name_id": "Gabon",
  "lon": 11.75,
  "lat": -1,
  "flag": "🇬🇦",
  "jumlah_penduduk": 2119275,
  "anggaran": 194,
  "pendapatan_nasional": "556",
  "religion": "Katolik",
  "ideology": "Nasionalisme",
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
    "bandara": 21,
    "jalur_sepeda": 15,
    "terminal_bus": 19,
    "helipad": 38,
    "jalan_tol": 11,
    "jalur_kereta": 7,
    "pelabuhan_laut": 31,
    "kereta_bawah_tanah": 16
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
    "semen_beton": 23,
    "pengolahan_daging": 25,    "sepeda_motor": 4,    "semikonduktor": 10,
    "smelter": 1,    "kayu": 31
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_peternakan": { "ayam_unggas": 31.5,
    "sapi_perah": 32,
    "sapi_potong": 1,
    "domba_kambing": 7
  },
  "sektor_agrikultur": {
    "padi": 5,
    "gandum_jagung": 25.0,
    "sayur_umbi": 10.0,
    "kedelai": 15,
    "kelapa_sawit": 29,
    "kopi_teh_kakao": 24.0
  },
  "sektor_perikanan": {
    "udang_kerang": 32.0,
    "ikan": 31
  },
  "sektor_olahan_pangan": {
    "air_mineral": 15,
    "gula": 10,
    "roti": 31,
    "pengolahan_daging": 25,
    "mie_instan": 12
  },

  // =============================================================
  // 6. 💊 LAYANAN MEDIS & FARMASI
  // =============================================================

  "sektor_farmasi": {
    "farmasi": 9
  },

  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================
"sektor_pertahanan": {
    "penjara": 6,
    "gudang_senjata": 30,
    "hangar_tank": 11,
    "akademi_militer": 27,
    "pusat_komando": 6,
    "pangkalan_udara": 30,
    "pangkalan_laut": 5,
    "program_luar_angkasa": 10,
    "pertahanan_siber": 5
    },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 37,
    "darat": {
        "tank_tempur_utama": 30,
        "apc_ifv": 30,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
  },
      "laut": {
        "kapal_induk": 24,
        "kapal_destroyer": 29,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
  },
      "udara": {
        "jet_tempur_siluman": 20,
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
        "infanteri_reguler": 370000,
        "pasukan_khusus": 0,
        "pasukan_cadangan": 0
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "militer_strategis": {
    "waktu_respon": 33,
    "intelijen": 17,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 22,
      "misi_mata_mata": 2,
      "misi_sabotase": 37,
      "manajemen_wilayah": 3,
      "program_nuklir": 0
  }
  },
    "armada_kepolisian": {
    "armada_polisi": {
      "patroli_lantas": {
        "mobil_patroli": 15,
        "sepeda_motor": 33,
        "unit_k9": 23
  },
        "taktis_khusus": {
          "swat": 21,
          "helikopter_polisi": 18,
          "anti_huru_hara": 62
  },
        "pusat_komando": {
          "kantor_polisi": 1,
          "kamera_pengawas": 35,
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
      "prasekolah": 26,
      "dasar": 28,
      "menengah": 15,
      "lanjutan": 40,
      "universitas": 15,
      "lembaga_pendidikan": 14,
      "laboratorium": 12,
      "observatorium": 26,
      "pusat_penelitian": 40,
      "pusat_pengembangan": 12,
      "literasi": 50
  },
    "kesehatan": {
      "rumah_sakit_besar": 9,
      "rumah_sakit_kecil": 3,
      "pusat_diagnostik": 3,
      "harapan_hidup": 35,
      "indeks_kesehatan": 85
  },
    "hukum": {
      "pusat_bantuan_hukum": 12,
      "pengadilan": 18,
      "kejaksaan": 38,
      "pos_polisi": 36,
      "armada_mobil_polisi": 1827,
      "akademi_polisi": 2,
      "indeks_korupsi": 86,
      "indeks_keamanan": 89
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 35,
      "sirkuit_balap": 27,
      "stadion": 25,
      "stadion_internasional": 32
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 28,
      "kepuasan": 67,
      "pendapatan": 16
    },
    "korporasi": {
      "tarif": 37,
      "kepuasan": 52,
      "pendapatan": 19
    },
    "penghasilan": {
      "tarif": 25,
      "kepuasan": 61,
      "pendapatan": 12
    },
    "bea_cukai": {
      "tarif": 39,
      "kepuasan": 86,
      "pendapatan": 14
    },
    "lingkungan": {
      "tarif": 23,
      "kepuasan": 88,
      "pendapatan": 8
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 3 },
    "lainnya": {
      "tarif": 25,
      "kepuasan": 93,
      "pendapatan": 5
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
    "harga_beras": 22400,
    "harga_daging_sapi": 104100,
    "harga_ayam": 57400,
    "harga_minyak_goreng": 15400,
    "harga_gula": 20160,
    "harga_telur": 24880,
    "harga_bbm": 14980,
    "harga_listrik": 800,
    "harga_air": 10400,
    "harga_obat": 78950,
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
      "kekuatan_lunak": 20,
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
    "kesehatan": 27,
    "pendidikan": 26,
    "keamanan": 11,
    "keuangan": 13,
    "lingkungan": 60
  }
};

