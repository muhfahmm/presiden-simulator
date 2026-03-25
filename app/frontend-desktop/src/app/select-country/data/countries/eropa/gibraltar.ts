import { CountryData } from "../../types/_index";

export const gibraltar: CountryData = {
  "name_en": "Gibraltar",
  "capital": "Gibraltar",
  "name_id": "Gibraltar",
  "lon": -5.35,
  "lat": 36.13333333,
  "flag": "🇬🇮",
  "jumlah_penduduk": 33718,
  "anggaran": 97,
  "pendapatan_nasional": "278",
  "religion": "Katolik",
  "ideology": "Demokrasi",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 5,
    "pembangkit_air": 18,
    "pembangkit_surya": 5,
    "pembangkit_termal": 25,
    "pembangkit_gas": 35,
    "pembangkit_angin": 32,
    "jaringan_listrik": 77
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 28,
    "kereta_bawah_tanah": 31,
    "jalur_kereta": 17,
    "jalan_tol": 18,
    "kualitas_jalan": 84,
    "pelabuhan_laut": 21,
    "bandara": 27,
    "terminal_bus": 13,
    "helipad": 1,
    "cakupan_internet": 87,
    "indeks_teknologi": 59,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 25,
    "uranium": 2,
    "batu_bara": 35,
    "minyak_bumi": 33,
    "gas_alam": 27,
    "garam": 22,
    "nikel": 5,
    "litium": 25,
    "aluminium": 10,
    "tembaga": 10,
    "logam_tanah_jarang": 28,
    "bijih_besi": 10,
    "kekuatan": 29.660809349923973
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 22,
    "mobil": 6,
    "sepeda_motor": 29,
    "smelter": 37,
    "semen_beton": 14,
    "kayu": 16,
    "air_mineral": 5,
    "gula": 2,
    "roti": 40,
    "farmasi": 36,
    "pupuk": 4,
    "pengolahan_daging": 24,
    "mie_instan": 29,
    "kekuatan": 3.076011687404966
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_agri_peternakan": {
    "ayam_unggas": 7.0,
    "sapi_perah": 31,
    "sapi_potong": 30,
    "domba_kambing": 17,
    "udang_kerang": 32.0,
    "ikan": 27,
    "padi": 15,
    "gandum_jagung": 3.0,
    "sayur_umbi": 18.5,
    "kedelai": 6,
    "kelapa_sawit": 9,
    "kopi_teh_kakao": 25.7,
    "kekuatan": 20.0
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 8,
    "gudang_senjata": 16,
    "hangar_tank": 21,
    "akademi_militer": 24,
    "pusat_komando": 28,
    "pangkalan_udara": 7,
    "pangkalan_laut": 15,
    "program_luar_angkasa": 6,
    "pertahanan_siber": 30,
    "anggaran_pertahanan": 27,
    "personel": 14652,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 18,
    "infanteri": 9,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 197,
        "apc": 84,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 14,
        "kapal_destroyer": 61,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_siluman": 33,
        "helikopter_serang": 106,
        "pesawat_pengintai": 2
      },
      "total_unit": 17,
      "kesiapan": 98
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "intel_radar": { "sistem_satelit": 2,
      "jaringan_radar": 1,
      "operasi_siber": 2 },
    "armada_polisi": { "patroli_lantas": {
          "mobil_patroli": 22,
          "sepeda_motor": 14,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 31,
          "helikopter_polisi": 6,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 5,
          "kamera_pengawas": 39,
          "pusat_forensik": 1
        },
        "waktu_respon": 7,
        "kepercayaan_publik": 50 },
    "intelijen": 39,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 25,
      "misi_mata_mata": 27,
      "misi_sabotase": 15,
      "manajemen_wilayah": 39,
      "program_nuklir": 0 }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 21,
      "sd": 37,
      "smp": 9,
      "sma": 33,
      "universitas": 12,
      "lembaga_pendidikan": 32,
      "laboratorium": 14,
      "observatorium": 40,
      "pusat_penelitian": 33,
      "pusat_pengembangan": 11,
      "literasi": 86,
      "indeks_penelitian": 0
    },
    "kesehatan": {
      "rumah_sakit_besar": 4,
      "rumah_sakit_kecil": 38,
      "pusat_diagnostik": 26,
      "tempat_tidur_rs": 6283,
      "harapan_hidup": 15,
      "indeks_kesehatan": 85
    },
    "olahraga": {
      "kolam_renang": 18,
      "sirkuit_balap": 37,
      "stadion": 39,
      "stadion_internasional": 19,
      "skor_olimpiade": 26,
      "popularitas": 44
    },
    "hukum": {
      "pusat_bantuan_hukum": 14,
      "pengadilan": 33,
      "kejaksaan": 19,
      "pos_polisi": 37,
      "armada_mobil_polisi": 6715,
      "akademi_polisi": 31,
      "indeks_korupsi": 74,
      "indeks_keamanan": 79
  }
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 20,
      "kepuasan": 67,
      "pendapatan": 2
    },
    "korporasi": {
      "tarif": 35,
      "kepuasan": 52,
      "pendapatan": 6
    },
    "penghasilan": {
      "tarif": 26,
      "kepuasan": 61,
      "pendapatan": 3
    },
    "bea_cukai": {
      "tarif": 23,
      "kepuasan": 86,
      "pendapatan": 4
    },
    "lingkungan": {
      "tarif": 5,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 17,
      "kepuasan": 93,
      "pendapatan": 1
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 100,
    "gaji_guru": 90,
    "gaji_medis": 90,
    "gaji_militer": 90
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 25,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 75
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 12800,
    "harga_daging_sapi": 145740,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 7200,
    "harga_telur": 24880,
    "harga_bbm": 14980,
    "harga_listrik": 1280,
    "harga_air": 10400,
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
    "musuh": [],
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 13,
      "kekuatan_keras": 16,
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
    "kesehatan": 36,
    "pendidikan": 18,
    "keamanan": 35,
    "keuangan": 39,
    "lingkungan": 60
  }
};
