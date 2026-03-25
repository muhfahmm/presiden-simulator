import { CountryData } from "../../types";

export const belarus: CountryData = {
  "name_en": "Belarus",
  "capital": "Minsk",
  "name_id": "Belarus",
  "lon": 28,
  "lat": 53,
  "flag": "🇧🇾",
  "jumlah_penduduk": 9483499,
  "anggaran": 681,
  "pendapatan_nasional": "1945",
  "religion": "Kristen Ortodoks",
  "ideology": "Nasionalisme",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 36,
    "pembangkit_air": 1,
    "pembangkit_surya": 22,
    "pembangkit_termal": 28,
    "pembangkit_gas": 34,
    "pembangkit_angin": 38,
    "jaringan_listrik": 73
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 1,
    "kereta_bawah_tanah": 21,
    "jalur_kereta": 1,
    "jalan_tol": 22,
    "kualitas_jalan": 76,
    "pelabuhan_laut": 13,
    "bandara": 22,
    "terminal_bus": 10,
    "helipad": 31,
    "cakupan_internet": 92,
    "indeks_teknologi": 72,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 7,
    "uranium": 37,
    "batu_bara": 12,
    "minyak_bumi": 3,
    "gas_alam": 14,
    "garam": 32,
    "nikel": 18,
    "litium": 13,
    "aluminium": 33,
    "tembaga": 28,
    "logam_tanah_jarang": 28,
    "bijih_besi": 36,
    "kekuatan": 29.660809349923973
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 26,
    "mobil": 31,
    "sepeda_motor": 18,
    "smelter": 35,
    "semen_beton": 18,
    "kayu": 3,
    "air_mineral": 29,
    "gula": 21,
    "roti": 37,
    "farmasi": 35,
    "pupuk": 36,
    "pengolahan_daging": 20,
    "mie_instan": 20,
    "kekuatan": 3.076011687404966
  },
  // =============================================================
  // 5. 🐄 PETERNAKAN & PERIKANAN
  // =============================================================

  "sektor_peternakan": {
    "ayam": 32,
    "unggas": 13,
    "sapi_perah": 38,
    "sapi_potong": 35,
    "domba_kambing": 37,
    "udang": 15,
    "ikan": 14,
    "kerang": 1,
    "kekuatan": 18.24560701244298
  },
  // =============================================================
  // 6. 🌾 PERTANIAN & PERKEBUNAN
  // =============================================================

  "sektor_pertanian": {
    "beras": 5,
    "gandum": 37,
    "jagung": 7,
    "umbi_umbian": 12,
    "kedelai": 2,
    "kelapa_sawit": 33,
    "teh": 17,
    "kopi": 2,
    "cokelat": 32,
    "tebu": 1,
    "sayur_sayuran": 5,
    "kekuatan": 20.660809349923973
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 28,
    "gudang_senjata": 36,
    "hangar_tank": 1,
    "akademi_militer": 38,
    "pusat_komando": 17,
    "pangkalan_udara": 6,
    "pangkalan_laut": 36,
    "program_luar_angkasa": 13,
    "pertahanan_siber": 10,
    "anggaran_pertahanan": 194,
    "personel": 5950,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 17,
    "infanteri": 40,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 8,
        "apc": 35,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 40,
        "kapal_destroyer": 32,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_siluman": 23,
        "helikopter_serang": 12,
        "pesawat_pengintai": 2
      },
      "total_unit": 7,
      "kesiapan": 98
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "intel_radar": { "sistem_satelit": 8,
      "jaringan_radar": 25,
      "operasi_siber": 2 },
    "armada_polisi": { "patroli_lantas": {
          "mobil_patroli": 34,
          "sepeda_motor": 6,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 26,
          "helikopter_polisi": 21,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 38,
          "kamera_pengawas": 10,
          "pusat_forensik": 1
        },
        "waktu_respon": 1,
        "kepercayaan_publik": 50 },
    "intelijen": 24,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 30,
      "misi_mata_mata": 31,
      "misi_sabotase": 15,
      "manajemen_wilayah": 26,
      "program_nuklir": 0 }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 36,
      "sd": 16,
      "smp": 11,
      "sma": 6,
      "universitas": 16,
      "lembaga_pendidikan": 13,
      "laboratorium": 23,
      "observatorium": 33,
      "pusat_penelitian": 12,
      "pusat_pengembangan": 13,
      "literasi": 90,
      "indeks_penelitian": 0
    },
    "kesehatan": {
      "rumah_sakit_besar": 29,
      "rumah_sakit_kecil": 10,
      "pusat_diagnostik": 33,
      "tempat_tidur_rs": 4629,
      "harapan_hidup": 11,
      "indeks_kesehatan": 85
    },
    "olahraga": {
      "kolam_renang": 16,
      "sirkuit_balap": 37,
      "stadion": 30,
      "stadion_internasional": 11,
      "skor_olimpiade": 36,
      "popularitas": 44
    },
    "hukum": {
      "pusat_bantuan_hukum": 14,
      "pengadilan": 1,
      "kejaksaan": 17,
      "pos_polisi": 22,
      "armada_mobil_polisi": 1365,
      "akademi_polisi": 37,
      "indeks_korupsi": 62,
      "indeks_keamanan": 81
  }
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 19,
      "kepuasan": 67,
      "pendapatan": 18
    },
    "korporasi": {
      "tarif": 35,
      "kepuasan": 52,
      "pendapatan": 48
    },
    "penghasilan": {
      "tarif": 36,
      "kepuasan": 61,
      "pendapatan": 64
    },
    "bea_cukai": {
      "tarif": 4,
      "kepuasan": 86,
      "pendapatan": 7
    },
    "lingkungan": {
      "tarif": 38,
      "kepuasan": 88,
      "pendapatan": 53
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 4 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 11 },
    "lainnya": {
      "tarif": 11,
      "kepuasan": 93,
      "pendapatan": 9
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 80,
    "gaji_guru": 100,
    "gaji_medis": 90,
    "gaji_militer": 90
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 25,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 100,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 75
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 8000,
    "harga_daging_sapi": 208200,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 20160,
    "harga_telur": 43540,
    "harga_bbm": 10700,
    "harga_listrik": 1600,
    "harga_air": 5200,
    "harga_obat": 157900,
    "harga_pendidikan": 483900
  },
  // =============================================================
  // 14. 📊 PERMINTAAN & KEBUTUHAN RAKYAT
  // =============================================================

  "permintaan": {
    "kepuasan": 62,
    "permintaan_utama": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "perumahan": 5,
    "komersial": 11,
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
      "kekuatan_lunak": 1,
      "kekuatan_keras": 39,
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
    "kesehatan": 21,
    "pendidikan": 1,
    "keamanan": 15,
    "keuangan": 39,
    "lingkungan": 60
  }
};
