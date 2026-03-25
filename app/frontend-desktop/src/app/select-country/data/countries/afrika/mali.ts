import { CountryData } from "../../types/_index";

export const mali: CountryData = {
  "name_en": "Mali",
  "capital": "Bamako",
  "name_id": "Mali",
  "lon": -8,
  "lat": 12.39,
  "flag": "🇲🇱",
  "jumlah_penduduk": 19077690,
  "anggaran": 175,
  "pendapatan_nasional": "500",
  "religion": "Islam",
  "ideology": "Nasionalisme",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_gas": 13,
    "pembangkit_air": 21,
    "pembangkit_nuklir": 25,
    "jaringan_listrik": 50,
    "pembangkit_surya": 16,
    "pembangkit_termal": 20,
    "pembangkit_angin": 4
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "bandara": 12,
    "jalur_sepeda": 25,
    "terminal_bus": 39,
    "helipad": 15,
    "jalan_tol": 21,
    "cakupan_internet": 63,
    "jalur_kereta": 22,
    "kualitas_jalan": 70,
    "pelabuhan_laut": 3,
    "kereta_bawah_tanah": 14
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "aluminium": 10,
    "batu_bara": 34,
    "tembaga": 3,
    "gas_alam": 24,
    "emas": 19,
    "bijih_besi": 1,
    "litium": 40,
    "nikel": 23,
    "minyak_bumi": 29,
    "logam_tanah_jarang": 31,
    "garam": 36,
    "uranium": 4
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "roti": 24,
    "mobil": 24,
    "semen_beton": 27,
    "pupuk": 10,
    "mie_instan": 12,
    "pengolahan_daging": 5,
    "air_mineral": 29,
    "sepeda_motor": 2,
    "farmasi": 32,
    "semikonduktor": 20,
    "smelter": 1,
    "gula": 16,
    "kayu": 1
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_agri_peternakan": {
    "ayam_unggas": 19.0,
    "sapi_perah": 14,
    "sapi_potong": 40,
    "domba_kambing": 17,
    "udang_kerang": 16.0,
    "ikan": 11,
    "padi": 1,
    "gandum_jagung": 10.5,
    "sayur_umbi": 32.0,
    "kedelai": 5,
    "kelapa_sawit": 8,
    "kopi_teh_kakao": 31.0
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 20,
    "gudang_senjata": 17,
    "hangar_tank": 18,
    "akademi_militer": 17,
    "pusat_komando": 4,
    "pangkalan_udara": 2,
    "pangkalan_laut": 37,
    "program_luar_angkasa": 4,
    "pertahanan_siber": 37,
    "anggaran_pertahanan": 50
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 36,
    "darat": {
        "tank_tempur_utama": 18,
        "apc_ifv": 39,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
  },
      "laut": {
        "kapal_induk": 10,
        "kapal_destroyer": 40,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
  },
      "udara": {
        "jet_tempur_siluman": 36,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 28,
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
    "waktu_respon": 26,
    "intelijen": 14,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 5,
      "misi_mata_mata": 30,
      "misi_sabotase": 1,
      "manajemen_wilayah": 3,
      "program_nuklir": 0
  }
  },
  "armada_kepolisian": {
    "armada_polisi": {
    "patroli_lantas": {
          "mobil_patroli": 8,
          "sepeda_motor": 8,
          "unit_k9": 23
  
  },
        "taktis_khusus": {
          "swat": 30,
          "helikopter_polisi": 23,
          "anti_huru_hara": 62
  },
        "pusat_komando": {
          "kantor_polisi": 11,
          "kamera_pengawas": 18,
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
      "prasekolah": 25,
      "dasar": 22,
      "menengah": 5,
      "lanjutan": 36,
      "universitas": 15,
      "lembaga_pendidikan": 19,
      "laboratorium": 33,
      "observatorium": 17,
      "pusat_penelitian": 20,
      "pusat_pengembangan": 17,
      "literasi": 80
  },
    "kesehatan": {
      "rumah_sakit_besar": 9,
      "rumah_sakit_kecil": 11,
      "pusat_diagnostik": 5,
      "harapan_hidup": 27,
      "indeks_kesehatan": 85
  },
    "hukum": {
      "pusat_bantuan_hukum": 34,
      "pengadilan": 13,
      "kejaksaan": 27,
      "pos_polisi": 31,
      "armada_mobil_polisi": 2788,
      "akademi_polisi": 5,
      "indeks_korupsi": 53,
      "indeks_keamanan": 93
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 21,
      "sirkuit_balap": 3,
      "stadion": 7,
      "stadion_internasional": 40
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 38,
      "kepuasan": 67,
      "pendapatan": 10
    },
    "korporasi": {
      "tarif": 11,
      "kepuasan": 52,
      "pendapatan": 4
    },
    "penghasilan": {
      "tarif": 12,
      "kepuasan": 61,
      "pendapatan": 2
    },
    "bea_cukai": {
      "tarif": 21,
      "kepuasan": 86,
      "pendapatan": 10
    },
    "lingkungan": {
      "tarif": 14,
      "kepuasan": 88,
      "pendapatan": 6
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 3 },
    "lainnya": {
      "tarif": 17,
      "kepuasan": 93,
      "pendapatan": 7
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 40,
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
    "harga_beras": 32000,
    "harga_daging_sapi": 104100,
    "harga_ayam": 32800,
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 31100,
    "harga_bbm": 14980,
    "harga_listrik": 1280,
    "harga_air": 10400,
    "harga_obat": 78950,
    "harga_pendidikan": 387120
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
      "kekuatan_lunak": 17,
      "kekuatan_keras": 24,
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
    "kesehatan": 9,
    "pendidikan": 20,
    "keamanan": 21,
    "keuangan": 32,
    "lingkungan": 60
  }
};



