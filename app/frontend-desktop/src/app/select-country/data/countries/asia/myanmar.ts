import { CountryData } from "../../types";

export const myanmar: CountryData = {
  "name_en": "Myanmar",
  "capital": "Naypyidaw",
  "name_id": "Myanmar",
  "lon": 98,
  "lat": 22,
  "flag": "🇲🇲",
  "jumlah_penduduk": 53708395,
  "anggaran": 583,
  "pendapatan_nasional": "1667",
  "religion": "Buddha",
  "ideology": "Nasionalisme",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 2,
    "pembangkit_air": 4,
    "pembangkit_surya": 23,
    "pembangkit_termal": 11,
    "pembangkit_gas": 12,
    "pembangkit_angin": 1,
    "jaringan_listrik": 78
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 8,
    "kereta_bawah_tanah": 35,
    "jalur_kereta": 28,
    "jalan_tol": 15,
    "kualitas_jalan": 52,
    "pelabuhan_laut": 4,
    "bandara": 40,
    "terminal_bus": 36,
    "helipad": 22,
    "cakupan_internet": 58,
    "indeks_teknologi": 89,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 16,
    "uranium": 5,
    "batu_bara": 14,
    "minyak_bumi": 4,
    "gas_alam": 10,
    "garam": 1,
    "nikel": 26,
    "litium": 5,
    "aluminium": 4,
    "tembaga": 21,
    "logam_tanah_jarang": 38,
    "bijih_besi": 39,
    "kekuatan": 29.660809349923973
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 19,
    "mobil": 40,
    "sepeda_motor": 13,
    "smelter": 30,
    "semen_beton": 13,
    "kayu": 3,
    "air_mineral": 20,
    "gula": 4,
    "roti": 30,
    "farmasi": 30,
    "pupuk": 28,
    "pengolahan_daging": 17,
    "mie_instan": 21,
    "kekuatan": 3.076011687404966
  },
  // =============================================================
  // 5. 🐄 PETERNAKAN & PERIKANAN
  // =============================================================

  "sektor_peternakan": {
    "ayam": 32,
    "unggas": 24,
    "sapi_perah": 21,
    "sapi_potong": 7,
    "domba_kambing": 26,
    "udang": 10,
    "ikan": 22,
    "kerang": 27,
    "kekuatan": 18.24560701244298
  },
  // =============================================================
  // 6. 🌾 PERTANIAN & PERKEBUNAN
  // =============================================================

  "sektor_pertanian": {
    "beras": 22,
    "gandum": 3,
    "jagung": 1,
    "umbi_umbian": 14,
    "kedelai": 30,
    "kelapa_sawit": 13,
    "teh": 28,
    "kopi": 8,
    "cokelat": 32,
    "tebu": 22,
    "sayur_sayuran": 10,
    "kekuatan": 20.660809349923973
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 14,
    "gudang_senjata": 28,
    "hangar_tank": 35,
    "akademi_militer": 15,
    "pusat_komando": 19,
    "pangkalan_udara": 31,
    "pangkalan_laut": 23,
    "program_luar_angkasa": 1,
    "pertahanan_siber": 14,
    "anggaran_pertahanan": 166,
    "personel": 26184,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 9,
    "infanteri": 36,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 141,
        "apc": 54,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 3,
        "kapal_destroyer": 173,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_siluman": 155,
        "helikopter_serang": 141,
        "pesawat_pengintai": 2
      },
      "total_unit": 15,
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
          "mobil_patroli": 20,
          "sepeda_motor": 3,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 33,
          "helikopter_polisi": 13,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 4,
          "kamera_pengawas": 28,
          "pusat_forensik": 1
        },
        "waktu_respon": 7,
        "kepercayaan_publik": 50 },
    "intelijen": 33,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 17,
      "misi_mata_mata": 16,
      "misi_sabotase": 37,
      "manajemen_wilayah": 25,
      "program_nuklir": 0 }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 7,
      "sd": 37,
      "smp": 11,
      "sma": 18,
      "universitas": 4,
      "lembaga_pendidikan": 31,
      "laboratorium": 1,
      "observatorium": 25,
      "pusat_penelitian": 22,
      "pusat_pengembangan": 13,
      "literasi": 72,
      "indeks_penelitian": 0
    },
    "kesehatan": {
      "rumah_sakit_besar": 16,
      "rumah_sakit_kecil": 20,
      "pusat_diagnostik": 3,
      "tempat_tidur_rs": 2294,
      "harapan_hidup": 3,
      "indeks_kesehatan": 85
    },
    "olahraga": {
      "kolam_renang": 13,
      "sirkuit_balap": 3,
      "stadion": 29,
      "stadion_internasional": 24,
      "skor_olimpiade": 14,
      "popularitas": 44
    },
    "hukum": {
      "pusat_bantuan_hukum": 12,
      "pengadilan": 23,
      "kejaksaan": 13,
      "pos_polisi": 11,
      "armada_mobil_polisi": 908,
      "akademi_polisi": 13,
      "indeks_korupsi": 51,
      "indeks_keamanan": 91
  }
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 9,
      "kepuasan": 67,
      "pendapatan": 12
    },
    "korporasi": {
      "tarif": 30,
      "kepuasan": 52,
      "pendapatan": 43
    },
    "penghasilan": {
      "tarif": 11,
      "kepuasan": 61,
      "pendapatan": 19
    },
    "bea_cukai": {
      "tarif": 29,
      "kepuasan": 86,
      "pendapatan": 45
    },
    "lingkungan": {
      "tarif": 38,
      "kepuasan": 88,
      "pendapatan": 24
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 3 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 9 },
    "lainnya": {
      "tarif": 12,
      "kepuasan": 93,
      "pendapatan": 17
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 70,
    "gaji_guru": 70,
    "gaji_medis": 70,
    "gaji_militer": 70
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 104100,
    "harga_ayam": 32800,
    "harga_minyak_goreng": 21560,
    "harga_gula": 14400,
    "harga_telur": 31100,
    "harga_bbm": 10700,
    "harga_listrik": 1280,
    "harga_air": 4160,
    "harga_obat": 78950,
    "harga_pendidikan": 483900
  },
  // =============================================================
  // 14. 📊 PERMINTAAN & KEBUTUHAN RAKYAT
  // =============================================================

  "permintaan": {
    "kepuasan": 63,
    "permintaan_utama": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "perumahan": 6,
    "komersial": 28,
    "industri": 53
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
      "kekuatan_lunak": 15,
      "kekuatan_keras": 2,
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
    "kesehatan": 15,
    "pendidikan": 35,
    "keamanan": 2,
    "keuangan": 13,
    "lingkungan": 60
  }
};
