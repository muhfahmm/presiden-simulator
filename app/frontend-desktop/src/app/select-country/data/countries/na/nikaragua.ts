import { CountryData } from "../../types/_index";

export const nikaragua: CountryData = {
  "name_en": "Nicaragua",
  "capital": "Managua",
  "name_id": "Nikaragua",
  "lon": -85,
  "lat": 13,
  "flag": "🇳🇮",
  "jumlah_penduduk": 6465513,
  "anggaran": 165,
  "pendapatan_nasional": "472",
  "religion": "Katolik",
  "ideology": "Sosialisme",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 33,
    "pembangkit_air": 29,
    "pembangkit_surya": 32,
    "pembangkit_termal": 10,
    "pembangkit_gas": 23,
    "pembangkit_angin": 11,
    "jaringan_listrik": 63
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 3,
    "kereta_bawah_tanah": 18,
    "jalur_kereta": 5,
    "jalan_tol": 20,
    "kualitas_jalan": 51,
    "pelabuhan_laut": 17,
    "bandara": 5,
    "terminal_bus": 27,
    "helipad": 11,
    "cakupan_internet": 68,
    "indeks_teknologi": 78,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 38,
    "uranium": 28,
    "batu_bara": 35,
    "minyak_bumi": 19,
    "gas_alam": 15,
    "garam": 18,
    "nikel": 36,
    "litium": 19,
    "aluminium": 1,
    "tembaga": 36,
    "logam_tanah_jarang": 28,
    "bijih_besi": 26,
    "kekuatan": 29.660809349923973
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 9,
    "mobil": 1,
    "sepeda_motor": 32,
    "smelter": 18,
    "semen_beton": 39,
    "kayu": 36,
    "air_mineral": 1,
    "gula": 39,
    "roti": 6,
    "farmasi": 2,
    "pupuk": 25,
    "pengolahan_daging": 10,
    "mie_instan": 33,
    "kekuatan": 3.076011687404966
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_agri_peternakan": {
    "ayam_unggas": 37.5,
    "sapi_perah": 33,
    "sapi_potong": 12,
    "domba_kambing": 40,
    "udang_kerang": 13.5,
    "ikan": 13,
    "padi": 2,
    "gandum_jagung": 25.5,
    "sayur_umbi": 20.5,
    "kedelai": 22,
    "kelapa_sawit": 13,
    "kopi_teh_kakao": 24.3,
    "kekuatan": 20.0
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 32,
    "gudang_senjata": 27,
    "hangar_tank": 20,
    "akademi_militer": 5,
    "pusat_komando": 25,
    "pangkalan_udara": 10,
    "pangkalan_laut": 5,
    "program_luar_angkasa": 33,
    "pertahanan_siber": 14,
    "anggaran_pertahanan": 47,
    "personel": 26563,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 37,
    "infanteri": 22,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 92,
        "apc": 40,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 9,
        "kapal_destroyer": 69,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_siluman": 63,
        "helikopter_serang": 92,
        "pesawat_pengintai": 2
      },
      "total_unit": 24,
      "kesiapan": 98
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "intel_radar": { "sistem_satelit": 4,
      "jaringan_radar": 5,
      "operasi_siber": 2 },
    "armada_polisi": { "patroli_lantas": {
          "mobil_patroli": 8,
          "sepeda_motor": 7,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 36,
          "helikopter_polisi": 32,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 19,
          "kamera_pengawas": 22,
          "pusat_forensik": 1
        },
        "waktu_respon": 36,
        "kepercayaan_publik": 50 },
    "intelijen": 24,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 4,
      "misi_mata_mata": 26,
      "misi_sabotase": 15,
      "manajemen_wilayah": 40,
      "program_nuklir": 0 }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 25,
      "sd": 21,
      "smp": 22,
      "sma": 19,
      "universitas": 9,
      "lembaga_pendidikan": 9,
      "laboratorium": 26,
      "observatorium": 34,
      "pusat_penelitian": 9,
      "pusat_pengembangan": 27,
      "literasi": 75,
      "indeks_penelitian": 0
    },
    "kesehatan": {
      "rumah_sakit_besar": 40,
      "rumah_sakit_kecil": 2,
      "pusat_diagnostik": 16,
      "tempat_tidur_rs": 4276,
      "harapan_hidup": 29,
      "indeks_kesehatan": 85
    },
    "olahraga": {
      "kolam_renang": 37,
      "sirkuit_balap": 7,
      "stadion": 13,
      "stadion_internasional": 31,
      "skor_olimpiade": 35,
      "popularitas": 44
    },
    "hukum": {
      "pusat_bantuan_hukum": 13,
      "pengadilan": 39,
      "kejaksaan": 11,
      "pos_polisi": 32,
      "armada_mobil_polisi": 2804,
      "akademi_polisi": 12,
      "indeks_korupsi": 88,
      "indeks_keamanan": 85
  }
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 16,
      "kepuasan": 67,
      "pendapatan": 4
    },
    "korporasi": {
      "tarif": 20,
      "kepuasan": 52,
      "pendapatan": 3
    },
    "penghasilan": {
      "tarif": 31,
      "kepuasan": 61,
      "pendapatan": 14
    },
    "bea_cukai": {
      "tarif": 29,
      "kepuasan": 86,
      "pendapatan": 6
    },
    "lingkungan": {
      "tarif": 38,
      "kepuasan": 88,
      "pendapatan": 8
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 3 },
    "lainnya": {
      "tarif": 11,
      "kepuasan": 93,
      "pendapatan": 1
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 80,
    "gaji_guru": 100,
    "gaji_medis": 90,
    "gaji_militer": 80
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 75
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 104100,
    "harga_ayam": 32800,
    "harga_minyak_goreng": 15400,
    "harga_gula": 11520,
    "harga_telur": 31100,
    "harga_bbm": 21400,
    "harga_listrik": 1600,
    "harga_air": 5200,
    "harga_obat": 126320,
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
    "musuh": [],
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 38,
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
    "kesehatan": 39,
    "pendidikan": 37,
    "keamanan": 9,
    "keuangan": 30,
    "lingkungan": 60
  }
};
