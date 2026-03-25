import { CountryData } from "../../types";

export const nigeria: CountryData = {
  "name_en": "Nigeria",
  "capital": "Abuja",
  "name_id": "Nigeria",
  "lon": 8,
  "lat": 10,
  "flag": "🇳🇬",
  "jumlah_penduduk": 195874740,
  "anggaran": 4618,
  "pendapatan_nasional": "13196",
  "religion": "Islam",
  "ideology": "Demokrasi",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_gas": 28,
    "pembangkit_air": 40,
    "pembangkit_nuklir": 17,
    "jaringan_listrik": 85,
    "pembangkit_surya": 6,
    "pembangkit_termal": 15,
    "pembangkit_angin": 5
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "bandara": 17,
    "jalur_sepeda": 19,
    "terminal_bus": 29,
    "helipad": 33,
    "jalan_tol": 8,
    "cakupan_internet": 56,
    "jalur_kereta": 32,
    "kualitas_jalan": 95,
    "pelabuhan_laut": 25,
    "kereta_bawah_tanah": 21,
    "indeks_teknologi": 50,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "aluminium": 36,
    "batu_bara": 14,
    "tembaga": 3,
    "gas_alam": 85,
    "emas": 34,
    "bijih_besi": 24,
    "litium": 35,
    "nikel": 35,
    "minyak_bumi": 90,
    "logam_tanah_jarang": 39,
    "garam": 21,
    "kekuatan": 29.660809349923973,
    "uranium": 3
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "roti": 6,
    "mobil": 31,
    "semen_beton": 31,
    "pupuk": 29,
    "mie_instan": 35,
    "pengolahan_daging": 26,
    "air_mineral": 26,
    "sepeda_motor": 21,
    "farmasi": 28,
    "semikonduktor": 6,
    "smelter": 30,
    "kekuatan": 3.076011687404966,
    "gula": 15,
    "kayu": 39
  },
  // =============================================================
  // 5. 🐄 PETERNAKAN & PERIKANAN
  // =============================================================

  "sektor_peternakan": {
    "sapi_potong": 13,
    "ayam": 33,
    "sapi_perah": 13,
    "ikan": 24,
    "unggas": 33,
    "domba_kambing": 27,
    "kerang": 2,
    "udang": 36,
    "kekuatan": 18.24560701244298
  },
  // =============================================================
  // 6. 🌾 PERTANIAN & PERKEBUNAN
  // =============================================================

  "sektor_pertanian": {
    "cokelat": 24,
    "kopi": 7,
    "jagung": 50,
    "kelapa_sawit": 5,
    "beras": 60,
    "kedelai": 13,
    "kekuatan": 20.660809349923973,
    "tebu": 35,
    "teh": 1,
    "umbi_umbian": 14,
    "sayur_sayuran": 14,
    "gandum": 27
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 28,
    "gudang_senjata": 1,
    "hangar_tank": 1,
    "akademi_militer": 39,
    "pusat_komando": 16,
    "pangkalan_udara": 27,
    "pangkalan_laut": 17,
    "program_luar_angkasa": 15,
    "pertahanan_siber": 5,
    "anggaran_pertahanan": 1319,
    "personel": 21640,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 12,
    "infanteri": 16,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 47,
        "apc": 162,
        "artileri_berat": 26
  },
      "laut": {
        "kapal_induk": 20,
        "kapal_destroyer": 80,
        "kapal_selam_nuklir": 0
  },
      "udara": {
        "jet_tempur_siluman": 82,
        "helikopter_serang": 128,
        "pesawat_pengintai": 2
  },
      "total_unit": 21,
      "kesiapan": 98
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "intel_radar": { "sistem_satelit": 4,
      "jaringan_radar": 4,
      "operasi_siber": 2
  },
    "armada_polisi": { "patroli_lantas": {
          "mobil_patroli": 40,
          "sepeda_motor": 8,
          "unit_k9": 23
  },
        "taktis_khusus": {
          "swat": 32,
          "helikopter_polisi": 11,
          "anti_huru_hara": 62
  },
        "pusat_komando": {
          "kantor_polisi": 23,
          "kamera_pengawas": 7,
          "pusat_forensik": 1
  },
        "waktu_respon": 12,
        "kepercayaan_publik": 50
  },
    "intelijen": 12,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 5,
      "misi_mata_mata": 15,
      "misi_sabotase": 35,
      "manajemen_wilayah": 4,
      "program_nuklir": 0
  }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 34,
      "sd": 11,
      "smp": 14,
      "sma": 3,
      "universitas": 10,
      "lembaga_pendidikan": 24,
      "laboratorium": 33,
      "observatorium": 29,
      "pusat_penelitian": 22,
      "pusat_pengembangan": 16,
      "literasi": 66,
      "indeks_penelitian": 0
  },
    "kesehatan": {
      "rumah_sakit_besar": 39,
      "rumah_sakit_kecil": 13,
      "pusat_diagnostik": 8,
      "tempat_tidur_rs": 7705,
      "harapan_hidup": 1,
      "indeks_kesehatan": 85
  },
    "olahraga": {
      "kolam_renang": 17,
      "sirkuit_balap": 8,
      "stadion": 25,
      "stadion_internasional": 32,
      "skor_olimpiade": 22,
      "popularitas": 44
  },
    "hukum": {
      "pusat_bantuan_hukum": 6,
      "pengadilan": 2,
      "kejaksaan": 17,
      "pos_polisi": 34,
      "armada_mobil_polisi": 8695,
      "akademi_polisi": 14,
      "indeks_korupsi": 73,
      "indeks_keamanan": 56
  }
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 10,
      "kepuasan": 67,
      "pendapatan": 99
    },
    "korporasi": {
      "tarif": 40,
      "kepuasan": 52,
      "pendapatan": 255
    },
    "penghasilan": {
      "tarif": 30,
      "kepuasan": 61,
      "pendapatan": 323
    },
    "bea_cukai": {
      "tarif": 17,
      "kepuasan": 86,
      "pendapatan": 131
    },
    "lingkungan": {
      "tarif": 10,
      "kepuasan": 88,
      "pendapatan": 58
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 24 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 70 },
    "lainnya": {
      "tarif": 21,
      "kepuasan": 93,
      "pendapatan": 236
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 40,
    "gaji_guru": 40,
    "gaji_medis": 40,
    "gaji_militer": 60
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 25,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 52050,
    "harga_ayam": 32800,
    "harga_minyak_goreng": 30800,
    "harga_gula": 7200,
    "harga_telur": 43540,
    "harga_bbm": 14980,
    "harga_listrik": 2240,
    "harga_air": 10400,
    "harga_obat": 78950,
    "harga_pendidikan": 483900
  },
  // =============================================================
  // 14. 📊 PERMINTAAN & KEBUTUHAN RAKYAT
  // =============================================================

  "permintaan": {
    "kepuasan": 79,
    "permintaan_utama": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "perumahan": 13,
    "komersial": 8,
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
      "kekuatan_lunak": 37,
      "kekuatan_keras": 1,
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
    "kesehatan": 34,
    "pendidikan": 15,
    "keamanan": 26,
    "keuangan": 21,
    "lingkungan": 60
  }
};
