import { CountryData } from "../../types/_index";

export const albania: CountryData = {
  "name_en": "Albania",
  "capital": "Tirana",
  "name_id": "Albania",
  "lon": 19.81,
  "lat": 41.32,
  "flag": "🇦🇱",
  "jumlah_penduduk": 2866376,
  "anggaran": 214,
  "pendapatan_nasional": "611",
  "religion": "Islam",
  "ideology": "Demokrasi",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 40,
    "pembangkit_air": 15,
    "pembangkit_surya": 18,
    "pembangkit_termal": 33,
    "pembangkit_gas": 6,
    "pembangkit_angin": 24,
    "jaringan_listrik": 71
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 34,
    "kereta_bawah_tanah": 10,
    "jalur_kereta": 15,
    "jalan_tol": 18,
    "kualitas_jalan": 78,
    "pelabuhan_laut": 21,
    "bandara": 25,
    "terminal_bus": 6,
    "helipad": 6,
    "cakupan_internet": 57,
    "indeks_teknologi": 85,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 31,
    "uranium": 23,
    "batu_bara": 14,
    "minyak_bumi": 8,
    "gas_alam": 29,
    "garam": 14,
    "nikel": 17,
    "litium": 7,
    "aluminium": 34,
    "tembaga": 32,
    "logam_tanah_jarang": 4,
    "bijih_besi": 15,
    "kekuatan": 29.660809349923973
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 7,
    "mobil": 13,
    "sepeda_motor": 36,
    "smelter": 30,
    "semen_beton": 30,
    "kayu": 1,
    "air_mineral": 5,
    "gula": 8,
    "roti": 35,
    "farmasi": 24,
    "pupuk": 8,
    "pengolahan_daging": 35,
    "mie_instan": 8,
    "kekuatan": 3.076011687404966
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_agri_peternakan": {
    "ayam_unggas": 6.5,
    "sapi_perah": 40,
    "sapi_potong": 15,
    "domba_kambing": 28,
    "udang_kerang": 17.5,
    "ikan": 23,
    "padi": 20,
    "gandum_jagung": 23.0,
    "sayur_umbi": 10.0,
    "kedelai": 37,
    "kelapa_sawit": 29,
    "kopi_teh_kakao": 21.0,
    "kekuatan": 20.0
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 6,
    "gudang_senjata": 22,
    "hangar_tank": 22,
    "akademi_militer": 7,
    "pusat_komando": 32,
    "pangkalan_udara": 3,
    "pangkalan_laut": 17,
    "program_luar_angkasa": 35,
    "pertahanan_siber": 35,
    "anggaran_pertahanan": 61,
    "personel": 13779,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 22,
    "infanteri": 18,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 37,
        "apc": 14,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 27,
        "kapal_destroyer": 21,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_siluman": 36,
        "helikopter_serang": 15,
        "pesawat_pengintai": 2
      },
      "total_unit": 38,
      "kesiapan": 98
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "intel_radar": { "sistem_satelit": 39,
      "jaringan_radar": 12,
      "operasi_siber": 2 },
    "armada_polisi": { "patroli_lantas": {
          "mobil_patroli": 9,
          "sepeda_motor": 4,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 23,
          "helikopter_polisi": 1,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 21,
          "kamera_pengawas": 18,
          "pusat_forensik": 1
        },
        "waktu_respon": 28,
        "kepercayaan_publik": 50 },
    "intelijen": 8,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 30,
      "misi_mata_mata": 15,
      "misi_sabotase": 29,
      "manajemen_wilayah": 11,
      "program_nuklir": 0 }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 16,
      "sd": 23,
      "smp": 2,
      "sma": 36,
      "universitas": 30,
      "lembaga_pendidikan": 33,
      "laboratorium": 16,
      "observatorium": 4,
      "pusat_penelitian": 22,
      "pusat_pengembangan": 12,
      "literasi": 77,
      "indeks_penelitian": 0
    },
    "kesehatan": {
      "rumah_sakit_besar": 37,
      "rumah_sakit_kecil": 39,
      "pusat_diagnostik": 39,
      "tempat_tidur_rs": 882,
      "harapan_hidup": 10,
      "indeks_kesehatan": 85
    },
    "olahraga": {
      "kolam_renang": 11,
      "sirkuit_balap": 8,
      "stadion": 32,
      "stadion_internasional": 26,
      "skor_olimpiade": 22,
      "popularitas": 44
    },
    "hukum": {
      "pusat_bantuan_hukum": 16,
      "pengadilan": 15,
      "kejaksaan": 4,
      "pos_polisi": 22,
      "armada_mobil_polisi": 7268,
      "akademi_polisi": 36,
      "indeks_korupsi": 67,
      "indeks_keamanan": 58
  }
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 24,
      "kepuasan": 67,
      "pendapatan": 8
    },
    "korporasi": {
      "tarif": 38,
      "kepuasan": 52,
      "pendapatan": 19
    },
    "penghasilan": {
      "tarif": 37,
      "kepuasan": 61,
      "pendapatan": 15
    },
    "bea_cukai": {
      "tarif": 1,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 18,
      "kepuasan": 88,
      "pendapatan": 6
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 2 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 4 },
    "lainnya": {
      "tarif": 25,
      "kepuasan": 93,
      "pendapatan": 7
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 90,
    "gaji_guru": 90,
    "gaji_medis": 90,
    "gaji_militer": 80
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 145740,
    "harga_ayam": 32800,
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 24880,
    "harga_bbm": 14980,
    "harga_listrik": 1600,
    "harga_air": 4160,
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
    "musuh": [],
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 25,
      "kekuatan_keras": 9,
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
    "kesehatan": 1,
    "pendidikan": 4,
    "keamanan": 2,
    "keuangan": 33,
    "lingkungan": 60
  }
};
