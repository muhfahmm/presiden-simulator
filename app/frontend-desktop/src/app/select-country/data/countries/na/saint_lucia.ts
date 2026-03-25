import { CountryData } from "../../types";

export const saint_lucia: CountryData = {
  "name_en": "Saint Lucia",
  "capital": "Castries",
  "name_id": "Saint lucia",
  "lon": -60.96666666,
  "lat": 13.88333333,
  "flag": "🇱🇨",
  "jumlah_penduduk": 181889,
  "anggaran": 97,
  "pendapatan_nasional": "278",
  "religion": "Katolik",
  "ideology": "Demokrasi",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 2,
    "pembangkit_air": 39,
    "pembangkit_surya": 28,
    "pembangkit_termal": 34,
    "pembangkit_gas": 5,
    "pembangkit_angin": 13,
    "jaringan_listrik": 56
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 3,
    "kereta_bawah_tanah": 11,
    "jalur_kereta": 25,
    "jalan_tol": 23,
    "kualitas_jalan": 85,
    "pelabuhan_laut": 35,
    "bandara": 39,
    "terminal_bus": 9,
    "helipad": 9,
    "cakupan_internet": 91,
    "indeks_teknologi": 92,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 24,
    "uranium": 28,
    "batu_bara": 8,
    "minyak_bumi": 10,
    "gas_alam": 11,
    "garam": 35,
    "nikel": 19,
    "litium": 39,
    "aluminium": 33,
    "tembaga": 40,
    "logam_tanah_jarang": 2,
    "bijih_besi": 7,
    "kekuatan": 29.660809349923973
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 33,
    "mobil": 2,
    "sepeda_motor": 22,
    "smelter": 27,
    "semen_beton": 15,
    "kayu": 1,
    "air_mineral": 2,
    "gula": 24,
    "roti": 40,
    "farmasi": 20,
    "pupuk": 25,
    "pengolahan_daging": 30,
    "mie_instan": 33,
    "kekuatan": 3.076011687404966
  },
  // =============================================================
  // 5. 🐄 PETERNAKAN & PERIKANAN
  // =============================================================

  "sektor_peternakan": {
    "ayam": 6,
    "unggas": 17,
    "sapi_perah": 31,
    "sapi_potong": 8,
    "domba_kambing": 9,
    "udang": 21,
    "ikan": 40,
    "kerang": 22,
    "kekuatan": 18.24560701244298
  },
  // =============================================================
  // 6. 🌾 PERTANIAN & PERKEBUNAN
  // =============================================================

  "sektor_pertanian": {
    "beras": 22,
    "gandum": 26,
    "jagung": 35,
    "umbi_umbian": 9,
    "kedelai": 32,
    "kelapa_sawit": 31,
    "teh": 10,
    "kopi": 34,
    "cokelat": 38,
    "tebu": 1,
    "sayur_sayuran": 22,
    "kekuatan": 20.660809349923973
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 10,
    "gudang_senjata": 19,
    "hangar_tank": 34,
    "akademi_militer": 23,
    "pusat_komando": 11,
    "pangkalan_udara": 37,
    "pangkalan_laut": 12,
    "program_luar_angkasa": 2,
    "pertahanan_siber": 33,
    "anggaran_pertahanan": 27,
    "personel": 29084,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 22,
    "infanteri": 36,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 15,
        "apc": 98,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 8,
        "kapal_destroyer": 195,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_siluman": 66,
        "helikopter_serang": 185,
        "pesawat_pengintai": 2
      },
      "total_unit": 30,
      "kesiapan": 98
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "intel_radar": { "sistem_satelit": 1,
      "jaringan_radar": 1,
      "operasi_siber": 2 },
    "armada_polisi": { "patroli_lantas": {
          "mobil_patroli": 21,
          "sepeda_motor": 2,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 19,
          "helikopter_polisi": 30,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 33,
          "kamera_pengawas": 15,
          "pusat_forensik": 1
        },
        "waktu_respon": 16,
        "kepercayaan_publik": 50 },
    "intelijen": 24,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 1,
      "misi_mata_mata": 11,
      "misi_sabotase": 30,
      "manajemen_wilayah": 11,
      "program_nuklir": 0 }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 13,
      "sd": 27,
      "smp": 26,
      "sma": 36,
      "universitas": 5,
      "lembaga_pendidikan": 3,
      "laboratorium": 28,
      "observatorium": 11,
      "pusat_penelitian": 3,
      "pusat_pengembangan": 27,
      "literasi": 66,
      "indeks_penelitian": 0
    },
    "kesehatan": {
      "rumah_sakit_besar": 15,
      "rumah_sakit_kecil": 13,
      "pusat_diagnostik": 36,
      "tempat_tidur_rs": 4975,
      "harapan_hidup": 17,
      "indeks_kesehatan": 85
    },
    "olahraga": {
      "kolam_renang": 19,
      "sirkuit_balap": 39,
      "stadion": 20,
      "stadion_internasional": 3,
      "skor_olimpiade": 11,
      "popularitas": 44
    },
    "hukum": {
      "pusat_bantuan_hukum": 39,
      "pengadilan": 17,
      "kejaksaan": 13,
      "pos_polisi": 38,
      "armada_mobil_polisi": 5540,
      "akademi_polisi": 6,
      "indeks_korupsi": 71,
      "indeks_keamanan": 60
  }
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 12,
      "kepuasan": 67,
      "pendapatan": 2
    },
    "korporasi": {
      "tarif": 6,
      "kepuasan": 52,
      "pendapatan": 1
    },
    "penghasilan": {
      "tarif": 29,
      "kepuasan": 61,
      "pendapatan": 7
    },
    "bea_cukai": {
      "tarif": 11,
      "kepuasan": 86,
      "pendapatan": 2
    },
    "lingkungan": {
      "tarif": 5,
      "kepuasan": 88,
      "pendapatan": 1
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 16,
      "kepuasan": 93,
      "pendapatan": 3
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 80,
    "gaji_guru": 90,
    "gaji_medis": 90,
    "gaji_militer": 80
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 100,
    "subsidi_pendidikan": 100,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 75
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 145740,
    "harga_ayam": 57400,
    "harga_minyak_goreng": 21560,
    "harga_gula": 28800,
    "harga_telur": 15550,
    "harga_bbm": 14980,
    "harga_listrik": 1280,
    "harga_air": 7280,
    "harga_obat": 126320,
    "harga_pendidikan": 387120
  },
  // =============================================================
  // 14. 📊 PERMINTAAN & KEBUTUHAN RAKYAT
  // =============================================================

  "permintaan": {
    "kepuasan": 91,
    "permintaan_utama": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "perumahan": 40,
    "komersial": 9,
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
      "kekuatan_lunak": 2,
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
    "kesehatan": 35,
    "pendidikan": 21,
    "keamanan": 16,
    "keuangan": 28,
    "lingkungan": 60
  }
};
