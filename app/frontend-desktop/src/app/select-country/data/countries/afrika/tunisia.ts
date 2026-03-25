import { CountryData } from "../../types";

export const tunisia: CountryData = {
  "name_en": "Tunisia",
  "capital": "Tunis",
  "name_id": "Tunisia",
  "lon": 9,
  "lat": 34,
  "flag": "🇹🇳",
  "jumlah_penduduk": 11565204,
  "anggaran": 457,
  "pendapatan_nasional": "1306",
  "religion": "Islam",
  "ideology": "Nasionalisme",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_gas": 29,
    "pembangkit_air": 32,
    "pembangkit_nuklir": 21,
    "jaringan_listrik": 88,
    "pembangkit_surya": 32,
    "pembangkit_termal": 14,
    "pembangkit_angin": 8
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "bandara": 12,
    "jalur_sepeda": 40,
    "terminal_bus": 1,
    "helipad": 36,
    "jalan_tol": 37,
    "cakupan_internet": 68,
    "jalur_kereta": 35,
    "kualitas_jalan": 87,
    "pelabuhan_laut": 3,
    "kereta_bawah_tanah": 39,
    "indeks_teknologi": 60,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "aluminium": 8,
    "batu_bara": 27,
    "tembaga": 7,
    "gas_alam": 9,
    "emas": 40,
    "bijih_besi": 2,
    "litium": 1,
    "nikel": 22,
    "minyak_bumi": 29,
    "logam_tanah_jarang": 24,
    "garam": 31,
    "kekuatan": 29.660809349923973,
    "uranium": 3
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "roti": 9,
    "mobil": 39,
    "semen_beton": 37,
    "pupuk": 18,
    "mie_instan": 11,
    "pengolahan_daging": 37,
    "air_mineral": 35,
    "sepeda_motor": 23,
    "farmasi": 11,
    "semikonduktor": 14,
    "smelter": 22,
    "kekuatan": 3.076011687404966,
    "gula": 20,
    "kayu": 12
  },
  // =============================================================
  // 5. 🐄 PETERNAKAN & PERIKANAN
  // =============================================================

  "sektor_peternakan": {
    "sapi_potong": 8,
    "ayam": 23,
    "sapi_perah": 35,
    "ikan": 7,
    "unggas": 13,
    "domba_kambing": 20,
    "kerang": 2,
    "udang": 26,
    "kekuatan": 18.24560701244298
  },
  // =============================================================
  // 6. 🌾 PERTANIAN & PERKEBUNAN
  // =============================================================

  "sektor_pertanian": {
    "cokelat": 34,
    "kopi": 27,
    "jagung": 4,
    "kelapa_sawit": 33,
    "beras": 4,
    "kedelai": 15,
    "kekuatan": 20.660809349923973,
    "tebu": 30,
    "teh": 11,
    "umbi_umbian": 15,
    "sayur_sayuran": 18,
    "gandum": 38
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 6,
    "gudang_senjata": 2,
    "hangar_tank": 1,
    "akademi_militer": 22,
    "pusat_komando": 24,
    "pangkalan_udara": 10,
    "pangkalan_laut": 36,
    "program_luar_angkasa": 1,
    "pertahanan_siber": 26,
    "anggaran_pertahanan": 130,
    "personel": 17828,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 12,
    "infanteri": 39,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 94,
        "apc": 116,
        "artileri_berat": 26
  },
      "laut": {
        "kapal_induk": 28,
        "kapal_destroyer": 80,
        "kapal_selam_nuklir": 0
  },
      "udara": {
        "jet_tempur_siluman": 19,
        "helikopter_serang": 107,
        "pesawat_pengintai": 2
  },
      "total_unit": 22,
      "kesiapan": 98
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "intel_radar": { "sistem_satelit": 0,
      "jaringan_radar": 0,
      "operasi_siber": 2
  },
    "armada_polisi": { "patroli_lantas": {
          "mobil_patroli": 8,
          "sepeda_motor": 2,
          "unit_k9": 23
  },
        "taktis_khusus": {
          "swat": 24,
          "helikopter_polisi": 32,
          "anti_huru_hara": 62
  },
        "pusat_komando": {
          "kantor_polisi": 28,
          "kamera_pengawas": 32,
          "pusat_forensik": 1
  },
        "waktu_respon": 31,
        "kepercayaan_publik": 50
  },
    "intelijen": 32,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 32,
      "misi_mata_mata": 27,
      "misi_sabotase": 15,
      "manajemen_wilayah": 11,
      "program_nuklir": 0
  }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 22,
      "sd": 40,
      "smp": 36,
      "sma": 33,
      "universitas": 33,
      "lembaga_pendidikan": 33,
      "laboratorium": 20,
      "observatorium": 10,
      "pusat_penelitian": 10,
      "pusat_pengembangan": 38,
      "literasi": 64,
      "indeks_penelitian": 0
  },
    "kesehatan": {
      "rumah_sakit_besar": 13,
      "rumah_sakit_kecil": 5,
      "pusat_diagnostik": 9,
      "tempat_tidur_rs": 1361,
      "harapan_hidup": 19,
      "indeks_kesehatan": 85
  },
    "olahraga": {
      "kolam_renang": 4,
      "sirkuit_balap": 18,
      "stadion": 12,
      "stadion_internasional": 21,
      "skor_olimpiade": 16,
      "popularitas": 44
  },
    "hukum": {
      "pusat_bantuan_hukum": 36,
      "pengadilan": 16,
      "kejaksaan": 16,
      "pos_polisi": 21,
      "armada_mobil_polisi": 2086,
      "akademi_polisi": 19,
      "indeks_korupsi": 87,
      "indeks_keamanan": 83
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
      "pendapatan": 24
    },
    "korporasi": {
      "tarif": 3,
      "kepuasan": 52,
      "pendapatan": 2
    },
    "penghasilan": {
      "tarif": 2,
      "kepuasan": 61,
      "pendapatan": 2
    },
    "bea_cukai": {
      "tarif": 15,
      "kepuasan": 86,
      "pendapatan": 11
    },
    "lingkungan": {
      "tarif": 8,
      "kepuasan": 88,
      "pendapatan": 8
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 3 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 7 },
    "lainnya": {
      "tarif": 10,
      "kepuasan": 93,
      "pendapatan": 4
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 40,
    "gaji_guru": 50,
    "gaji_medis": 50,
    "gaji_militer": 40
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
    "harga_daging_sapi": 208200,
    "harga_ayam": 20500,
    "harga_minyak_goreng": 15400,
    "harga_gula": 7200,
    "harga_telur": 43540,
    "harga_bbm": 8560,
    "harga_listrik": 2240,
    "harga_air": 5200,
    "harga_obat": 221060,
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
    "komersial": 31,
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
      "kekuatan_keras": 26,
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
    "pendidikan": 39,
    "keamanan": 14,
    "keuangan": 16,
    "lingkungan": 60
  }
};
