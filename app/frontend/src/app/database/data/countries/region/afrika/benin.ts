import { CountryData } from "../../../types";

export const benin: CountryData = {
  "name_en": "Benin",
  "capital": "Porto-Novo",
  "name_id": "Benin",
  "lon": 2.25,
  "lat": 9.5,
  "flag": "🇧🇯",
  "jumlah_penduduk": 11485048,
  "anggaran": 185,
  "pendapatan_nasional": "528",
  "religion": "Katolik",
  "ideology": "Demokrasi",
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
    "bandara": 38,
    "jalur_sepeda": 10,
    "terminal_bus": 15,
    "helipad": 6,
    "jalan_tol": 1,
    "jalur_kereta": 29,
    "pelabuhan_laut": 6,
    "kereta_bawah_tanah": 32
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 0,
    "uranium": 0,
    "batu_bara": 89,
    "minyak_bumi": 0,
    "gas_alam": 0,
    "garam": 80,
    "nikel": 0,
    "litium": 68,
    "tembaga": 52,
    "aluminium": 69,
    "logam_tanah_jarang": 0,
    "bijih_besi": 1
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {    "mobil": 31,
    "semen_beton": 10,
    "sepeda_motor": 2,    "semikonduktor": 23,
    "smelter": 14,    "kayu": 23
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_peternakan": { 
    "ayam_unggas": 18,
    "sapi_perah": 12,
    "sapi_potong": 31,
    "domba_kambing": 27
  },
  "sektor_agrikultur": {
    "padi": 17,
    "gandum_jagung": 6,
    "sayur_umbi": 20,
    "kedelai": 39,
    "kelapa_sawit": 35,
    "kopi_teh_kakao": 12
  },
  "sektor_perikanan": {
    "udang_kerang": 31,
    "ikan": 11
  },
  "sektor_olahan_pangan": {
    "air_mineral": 32,
    "gula": 9,
    "roti": 32,
    "pengolahan_daging": 21,
    "mie_instan": 5
  },

  // =============================================================
  // 6. 💊 LAYANAN MEDIS & FARMASI
  // =============================================================

  "sektor_farmasi": {
    "farmasi": 1
  },

  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================
"sektor_pertahanan": {
    "penjara": 30,
    "gudang_senjata": 27,
    "hangar_tank": 12,
    "akademi_militer": 5,
    "pusat_komando": 33,
    "pangkalan_udara": 16,
    "pangkalan_laut": 5,
    "program_luar_angkasa": 36,
    "pertahanan_siber": 32
    },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 27,
    "darat": {
        "tank_tempur_utama": 1,
        "apc_ifv": 10,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
  },
      "laut": {
        "kapal_induk": 16,
        "kapal_destroyer": 16,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
  },
      "udara": {
        "jet_tempur_siluman": 6,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 3,
        "pesawat_pengintai": 2,
        "drone_intai_uav": 0,
        "drone_kamikaze": 0,
        "pesawat_angkut": 0
  }
  ,
    "personel": {
        "infanteri_reguler": 270000,
        "pasukan_khusus": 0,
        "pasukan_cadangan": 0
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "militer_strategis": {
    "waktu_respon": 5,
    "intelijen": 16,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 30,
      "misi_mata_mata": 20,
      "misi_sabotase": 18,
      "manajemen_wilayah": 12,
      "program_nuklir": 0
  }
  },
    "armada_kepolisian": {
    "armada_polisi": {
      "patroli_lantas": {
        "mobil_patroli_interceptor": 37,
        "unit_interceptor_r2": 8,
        "unit_k9": 23
  },
        "taktis_khusus": {
          "swat": 27,
          "helikopter_polisi": 7,
          "anti_huru_hara": 62
  },
        "pusat_komando": {
          "kantor_polisi": 32,
          "kamera_pengawas": 30,
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
      "prasekolah": 18,
      "dasar": 28,
      "menengah": 25,
      "lanjutan": 21,
      "universitas": 38,
      "lembaga_pendidikan": 27,
      "laboratorium": 8,
      "observatorium": 33,
      "pusat_penelitian": 17,
      "pusat_pengembangan": 36,
      "literasi": 87
  },
    "kesehatan": {
      "rumah_sakit_besar": 17,
      "rumah_sakit_kecil": 19,
      "pusat_diagnostik": 17,
      "harapan_hidup": 6,
      "indeks_kesehatan": 85
  },
    "hukum": {
      "pusat_bantuan_hukum": 13,
      "pengadilan": 20,
      "kejaksaan": 7,
      "pos_polisi": 36,
      "armada_mobil_polisi": 7222,
      "akademi_polisi": 33,
      "indeks_korupsi": 71,
      "indeks_keamanan": 55
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 40,
      "sirkuit_balap": 33,
      "stadion": 9,
      "stadion_internasional": 13
  },

  "un_vote": 62,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 18,
      "kepuasan": 67,
      "pendapatan": 4
    },
    "korporasi": {
      "tarif": 18,
      "kepuasan": 52,
      "pendapatan": 7
    },
    "penghasilan": {
      "tarif": 28,
      "kepuasan": 61,
      "pendapatan": 11
    },
    "bea_cukai": {
      "tarif": 24,
      "kepuasan": 86,
      "pendapatan": 8
    },
    "lingkungan": {
      "tarif": 22,
      "kepuasan": 88,
      "pendapatan": 5
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 3 },
    "lainnya": {
      "tarif": 29,
      "kepuasan": 93,
      "pendapatan": 12
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
    "subsidi_pangan": 25,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 25,
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
    "harga_ayam": 32800,
    "harga_minyak_goreng": 21560,
    "harga_gula": 14400,
    "harga_telur": 43540,
    "harga_bbm": 10700,
    "harga_listrik": 1280,
    "harga_air": 2600,
    "harga_obat": 157900,
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
      "kekuatan_lunak": 1,
      "kekuatan_keras": 31,
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
    "pendidikan": 32,
    "keamanan": 17,
    "keuangan": 7,
    "lingkungan": 60
  }
};

