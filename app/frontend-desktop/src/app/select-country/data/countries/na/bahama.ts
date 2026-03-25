import { CountryData } from "../../types/_index";

export const bahama: CountryData = {
  "name_en": "Bahamas",
  "capital": "Nassau",
  "name_id": "Bahama",
  "lon": -76,
  "lat": 24.25,
  "flag": "🇧🇸",
  "jumlah_penduduk": 385640,
  "anggaran": 136,
  "pendapatan_nasional": "389",
  "religion": "Protestan",
  "ideology": "Demokrasi",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 10,
    "pembangkit_air": 36,
    "pembangkit_surya": 28,
    "pembangkit_termal": 30,
    "pembangkit_gas": 1,
    "pembangkit_angin": 13,
    "jaringan_listrik": 69
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 14,
    "kereta_bawah_tanah": 40,
    "jalur_kereta": 29,
    "jalan_tol": 7,
    "kualitas_jalan": 61,
    "pelabuhan_laut": 13,
    "bandara": 17,
    "terminal_bus": 21,
    "helipad": 14,
    "cakupan_internet": 65,
    "indeks_teknologi": 76,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 21,
    "uranium": 15,
    "batu_bara": 40,
    "minyak_bumi": 8,
    "gas_alam": 20,
    "garam": 10,
    "nikel": 31,
    "litium": 35,
    "aluminium": 15,
    "tembaga": 39,
    "logam_tanah_jarang": 12,
    "bijih_besi": 3,
    "kekuatan": 29.660809349923973
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 20,
    "mobil": 12,
    "sepeda_motor": 4,
    "smelter": 32,
    "semen_beton": 15,
    "kayu": 24,
    "air_mineral": 13,
    "gula": 26,
    "roti": 33,
    "farmasi": 11,
    "pupuk": 29,
    "pengolahan_daging": 19,
    "mie_instan": 23,
    "kekuatan": 3.076011687404966
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_agri_peternakan": {
    "ayam_unggas": 10.5,
    "sapi_perah": 13,
    "sapi_potong": 17,
    "domba_kambing": 13,
    "udang_kerang": 14.5,
    "ikan": 40,
    "padi": 14,
    "gandum_jagung": 10.0,
    "sayur_umbi": 9.5,
    "kedelai": 23,
    "kelapa_sawit": 9,
    "kopi_teh_kakao": 21.0,
    "kekuatan": 20.0
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 7,
    "gudang_senjata": 5,
    "hangar_tank": 27,
    "akademi_militer": 13,
    "pusat_komando": 16,
    "pangkalan_udara": 17,
    "pangkalan_laut": 10,
    "program_luar_angkasa": 36,
    "pertahanan_siber": 34,
    "anggaran_pertahanan": 38,
    "personel": 20085,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 12,
    "infanteri": 15,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 36,
        "apc": 18,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 15,
        "kapal_destroyer": 14,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_siluman": 16,
        "helikopter_serang": 5,
        "pesawat_pengintai": 2
      },
      "total_unit": 34,
      "kesiapan": 98
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "intel_radar": { "sistem_satelit": 30,
      "jaringan_radar": 24,
      "operasi_siber": 2 },
    "armada_polisi": { "patroli_lantas": {
          "mobil_patroli": 21,
          "sepeda_motor": 4,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 39,
          "helikopter_polisi": 16,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 4,
          "kamera_pengawas": 6,
          "pusat_forensik": 1
        },
        "waktu_respon": 10,
        "kepercayaan_publik": 50 },
    "intelijen": 34,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 8,
      "misi_mata_mata": 36,
      "misi_sabotase": 16,
      "manajemen_wilayah": 7,
      "program_nuklir": 0 }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 24,
      "sd": 1,
      "smp": 4,
      "sma": 18,
      "universitas": 23,
      "lembaga_pendidikan": 17,
      "laboratorium": 25,
      "observatorium": 24,
      "pusat_penelitian": 33,
      "pusat_pengembangan": 2,
      "literasi": 94,
      "indeks_penelitian": 0
    },
    "kesehatan": {
      "rumah_sakit_besar": 29,
      "rumah_sakit_kecil": 6,
      "pusat_diagnostik": 40,
      "tempat_tidur_rs": 8792,
      "harapan_hidup": 3,
      "indeks_kesehatan": 85
    },
    "olahraga": {
      "kolam_renang": 34,
      "sirkuit_balap": 26,
      "stadion": 28,
      "stadion_internasional": 28,
      "skor_olimpiade": 18,
      "popularitas": 44
    },
    "hukum": {
      "pusat_bantuan_hukum": 25,
      "pengadilan": 3,
      "kejaksaan": 38,
      "pos_polisi": 9,
      "armada_mobil_polisi": 927,
      "akademi_polisi": 18,
      "indeks_korupsi": 70,
      "indeks_keamanan": 78
  }
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 39,
      "kepuasan": 67,
      "pendapatan": 5
    },
    "korporasi": {
      "tarif": 28,
      "kepuasan": 52,
      "pendapatan": 3
    },
    "penghasilan": {
      "tarif": 39,
      "kepuasan": 61,
      "pendapatan": 11
    },
    "bea_cukai": {
      "tarif": 32,
      "kepuasan": 86,
      "pendapatan": 8
    },
    "lingkungan": {
      "tarif": 38,
      "kepuasan": 88,
      "pendapatan": 14
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 3 },
    "lainnya": {
      "tarif": 32,
      "kepuasan": 93,
      "pendapatan": 11
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 90,
    "gaji_guru": 90,
    "gaji_medis": 90,
    "gaji_militer": 90
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 100,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 32000,
    "harga_daging_sapi": 104100,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 11520,
    "harga_telur": 31100,
    "harga_bbm": 14980,
    "harga_listrik": 800,
    "harga_air": 5200,
    "harga_obat": 157900,
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
    "musuh": [],
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 37,
      "kekuatan_keras": 36,
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
    "kesehatan": 19,
    "pendidikan": 22,
    "keamanan": 8,
    "keuangan": 13,
    "lingkungan": 60
  }
};
