import { CountryData } from "../../../types";

export const republik_demokratik_kongo: CountryData = {
  "name_en": "DR Congo",
  "capital": "Kinshasa",
  "name_id": "Republik demokratik kongo",
  "lon": 25,
  "lat": 0,
  "flag": "🇨🇩",
  "jumlah_penduduk": 5244363,
  "anggaran": 603,
  "pendapatan_nasional": "1722",
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
    "bandara": 29,
    "jalur_sepeda": 20,
    "terminal_bus": 30,
    "helipad": 3,
    "jalan_tol": 4,
    "jalur_kereta": 29,
    "pelabuhan_laut": 34,
    "kereta_bawah_tanah": 21
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 100,
    "uranium": 0,
    "batu_bara": 0,
    "minyak_bumi": 0,
    "gas_alam": 0,
    "garam": 34,
    "nikel": 0,
    "litium": 48,
    "tembaga": 0,
    "aluminium": 0,
    "logam_tanah_jarang": 0,
    "bijih_besi": 49
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {    "mobil": 20,
    "semen_beton": 25,
    "sepeda_motor": 39,    "semikonduktor": 1,
    "smelter": 13,    "kayu": 37
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_peternakan": { 
    "ayam_unggas": 6,
    "sapi_perah": 13,
    "sapi_potong": 37,
    "domba_kambing": 25
  },
  "sektor_agrikultur": {
    "padi": 11,
    "gandum_jagung": 26,
    "sayur_umbi": 33,
    "kedelai": 32,
    "kelapa_sawit": 32,
    "kopi_teh_kakao": 27
  },
  "sektor_perikanan": {
    "udang_kerang": 36,
    "ikan": 34
  },
  "sektor_olahan_pangan": {
    "air_mineral": 6,
    "gula": 38,
    "roti": 38,
    "pengolahan_daging": 21,
    "mie_instan": 9
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
    "penjara": 21,
    "gudang_senjata": 21,
    "hangar_tank": 22,
    "akademi_militer": 20,
    "pusat_komando": 11,
    "pangkalan_udara": 2,
    "pangkalan_laut": 15,
    "program_luar_angkasa": 32,
    "pertahanan_siber": 5
    },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 24,
    "darat": {
        "tank_tempur_utama": 54,
        "apc_ifv": 82,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
  },
      "laut": {
        "kapal_induk": 33,
        "kapal_destroyer": 55,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
  },
      "udara": {
        "jet_tempur_siluman": 64,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 188,
        "pesawat_pengintai": 2,
        "drone_intai_uav": 0,
        "drone_kamikaze": 0,
        "pesawat_angkut": 0
  }
  ,
    "personel": {
        "infanteri_reguler": 240000,
        "pasukan_khusus": 0,
        "pasukan_cadangan": 0
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "militer_strategis": {
    "waktu_respon": 32,
    "intelijen": 26,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 16,
      "misi_mata_mata": 26,
      "misi_sabotase": 15,
      "manajemen_wilayah": 17,
      "program_nuklir": 0
  }
  },
    "armada_kepolisian": {
    "armada_polisi": {
      "patroli_lantas": {
        "mobil_patroli_interceptor": 11,
        "unit_interceptor_r2": 32,
        "unit_k9": 23
  },
        "taktis_khusus": {
          "swat": 36,
          "helikopter_polisi": 31,
          "anti_huru_hara": 62
  },
        "pusat_komando": {
          "kantor_polisi": 16,
          "kamera_pengawas": 37,
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
      "prasekolah": 35,
      "dasar": 34,
      "menengah": 40,
      "lanjutan": 8,
      "universitas": 19,
      "lembaga_pendidikan": 38,
      "laboratorium": 12,
      "observatorium": 27,
      "pusat_penelitian": 13,
      "pusat_pengembangan": 40,
      "literasi": 84
  },
    "kesehatan": {
      "rumah_sakit_besar": 16,
      "rumah_sakit_kecil": 40,
      "pusat_diagnostik": 22,
      "harapan_hidup": 30,
      "indeks_kesehatan": 85
  },
    "hukum": {
      "pusat_bantuan_hukum": 8,
      "pengadilan": 1,
      "kejaksaan": 40,
      "pos_polisi": 23,
      "armada_mobil_polisi": 7514,
      "akademi_polisi": 31,
      "indeks_korupsi": 76,
      "indeks_keamanan": 70
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 38,
      "sirkuit_balap": 26,
      "stadion": 16,
      "stadion_internasional": 26
  },

  "un_vote": 136,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 29,
      "kepuasan": 67,
      "pendapatan": 50
    },
    "korporasi": {
      "tarif": 30,
      "kepuasan": 52,
      "pendapatan": 49
    },
    "penghasilan": {
      "tarif": 26,
      "kepuasan": 61,
      "pendapatan": 23
    },
    "bea_cukai": {
      "tarif": 32,
      "kepuasan": 86,
      "pendapatan": 54
    },
    "lingkungan": {
      "tarif": 4,
      "kepuasan": 88,
      "pendapatan": 6
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 4 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 10 },
    "lainnya": {
      "tarif": 9,
      "kepuasan": 93,
      "pendapatan": 9
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 50,
    "gaji_guru": 60,
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
    "harga_beras": 16000,
    "harga_daging_sapi": 145740,
    "harga_ayam": 32800,
    "harga_minyak_goreng": 15400,
    "harga_gula": 7200,
    "harga_telur": 15550,
    "harga_bbm": 10700,
    "harga_listrik": 3200,
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
      "kekuatan_lunak": 25,
      "kekuatan_keras": 19,
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
    "kesehatan": 28,
    "pendidikan": 24,
    "keamanan": 9,
    "keuangan": 34,
    "lingkungan": 60
  }
};

