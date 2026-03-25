import { CountryData } from "../../types";

export const kongo: CountryData = {
  "name_en": "Republic of the Congo",
  "capital": "Brazzaville",
  "name_id": "Kongo",
  "lon": 15,
  "lat": -1,
  "flag": "🇨🇬",
  "jumlah_penduduk": 5244363,
  "anggaran": 146,
  "pendapatan_nasional": "417",
  "religion": "Katolik",
  "ideology": "Sosialisme",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_gas": 18,
    "pembangkit_air": 26,
    "pembangkit_nuklir": 32,
    "jaringan_listrik": 53,
    "pembangkit_surya": 12,
    "pembangkit_termal": 8,
    "pembangkit_angin": 29
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "bandara": 3,
    "jalur_sepeda": 35,
    "terminal_bus": 40,
    "helipad": 18,
    "jalan_tol": 21,
    "cakupan_internet": 62,
    "jalur_kereta": 32,
    "kualitas_jalan": 52,
    "pelabuhan_laut": 38,
    "kereta_bawah_tanah": 12,
    "indeks_teknologi": 90,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "aluminium": 20,
    "batu_bara": 31,
    "tembaga": 36,
    "gas_alam": 9,
    "emas": 16,
    "bijih_besi": 16,
    "litium": 24,
    "nikel": 31,
    "minyak_bumi": 34,
    "logam_tanah_jarang": 4,
    "garam": 11,
    "kekuatan": 29.660809349923973,
    "uranium": 32
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "roti": 25,
    "mobil": 24,
    "semen_beton": 9,
    "pupuk": 25,
    "mie_instan": 35,
    "pengolahan_daging": 18,
    "air_mineral": 26,
    "sepeda_motor": 34,
    "farmasi": 23,
    "semikonduktor": 25,
    "smelter": 10,
    "kekuatan": 3.076011687404966,
    "gula": 8,
    "kayu": 20
  },
  // =============================================================
  // 5. 🐄 PETERNAKAN & PERIKANAN
  // =============================================================

  "sektor_peternakan": {
    "sapi_potong": 29,
    "ayam": 38,
    "sapi_perah": 34,
    "ikan": 20,
    "unggas": 23,
    "domba_kambing": 18,
    "kerang": 23,
    "udang": 34,
    "kekuatan": 18.24560701244298
  },
  // =============================================================
  // 6. 🌾 PERTANIAN & PERKEBUNAN
  // =============================================================

  "sektor_pertanian": {
    "cokelat": 35,
    "kopi": 40,
    "jagung": 19,
    "kelapa_sawit": 16,
    "beras": 13,
    "kedelai": 28,
    "kekuatan": 20.660809349923973,
    "tebu": 20,
    "teh": 36,
    "umbi_umbian": 18,
    "sayur_sayuran": 23,
    "gandum": 24
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 28,
    "gudang_senjata": 3,
    "hangar_tank": 19,
    "akademi_militer": 40,
    "pusat_komando": 5,
    "pangkalan_udara": 27,
    "pangkalan_laut": 17,
    "program_luar_angkasa": 38,
    "pertahanan_siber": 1,
    "anggaran_pertahanan": 41,
    "personel": 7783,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 36,
    "infanteri": 23,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 24,
        "apc": 26,
        "artileri_berat": 26
  },
      "laut": {
        "kapal_induk": 38,
        "kapal_destroyer": 9,
        "kapal_selam_nuklir": 0
  },
      "udara": {
        "jet_tempur_siluman": 1,
        "helikopter_serang": 19,
        "pesawat_pengintai": 2
  },
      "total_unit": 16,
      "kesiapan": 98
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "intel_radar": { "sistem_satelit": 14,
      "jaringan_radar": 38,
      "operasi_siber": 2
  },
    "armada_polisi": { "patroli_lantas": {
          "mobil_patroli": 2,
          "sepeda_motor": 31,
          "unit_k9": 23
  },
        "taktis_khusus": {
          "swat": 5,
          "helikopter_polisi": 6,
          "anti_huru_hara": 62
  },
        "pusat_komando": {
          "kantor_polisi": 12,
          "kamera_pengawas": 31,
          "pusat_forensik": 1
  },
        "waktu_respon": 19,
        "kepercayaan_publik": 50
  },
    "intelijen": 26,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 17,
      "misi_mata_mata": 35,
      "misi_sabotase": 21,
      "manajemen_wilayah": 3,
      "program_nuklir": 0
  }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 17,
      "sd": 12,
      "smp": 7,
      "sma": 19,
      "universitas": 23,
      "lembaga_pendidikan": 13,
      "laboratorium": 26,
      "observatorium": 1,
      "pusat_penelitian": 38,
      "pusat_pengembangan": 33,
      "literasi": 64,
      "indeks_penelitian": 0
  },
    "kesehatan": {
      "rumah_sakit_besar": 13,
      "rumah_sakit_kecil": 23,
      "pusat_diagnostik": 6,
      "tempat_tidur_rs": 2277,
      "harapan_hidup": 4,
      "indeks_kesehatan": 85
  },
    "olahraga": {
      "kolam_renang": 22,
      "sirkuit_balap": 6,
      "stadion": 19,
      "stadion_internasional": 4,
      "skor_olimpiade": 32,
      "popularitas": 44
  },
    "hukum": {
      "pusat_bantuan_hukum": 33,
      "pengadilan": 11,
      "kejaksaan": 28,
      "pos_polisi": 29,
      "armada_mobil_polisi": 6616,
      "akademi_polisi": 16,
      "indeks_korupsi": 88,
      "indeks_keamanan": 86
  }
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 6,
      "kepuasan": 67,
      "pendapatan": 1
    },
    "korporasi": {
      "tarif": 7,
      "kepuasan": 52,
      "pendapatan": 2
    },
    "penghasilan": {
      "tarif": 39,
      "kepuasan": 61,
      "pendapatan": 12
    },
    "bea_cukai": {
      "tarif": 26,
      "kepuasan": 86,
      "pendapatan": 5
    },
    "lingkungan": {
      "tarif": 34,
      "kepuasan": 88,
      "pendapatan": 11
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 3 },
    "lainnya": {
      "tarif": 10,
      "kepuasan": 93,
      "pendapatan": 3
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 50,
    "gaji_guru": 50,
    "gaji_medis": 50,
    "gaji_militer": 50
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 25,
    "subsidi_kesehatan": 25,
    "subsidi_pendidikan": 25,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 25,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 8000,
    "harga_daging_sapi": 208200,
    "harga_ayam": 32800,
    "harga_minyak_goreng": 15400,
    "harga_gula": 20160,
    "harga_telur": 31100,
    "harga_bbm": 21400,
    "harga_listrik": 2240,
    "harga_air": 5200,
    "harga_obat": 221060,
    "harga_pendidikan": 387120
  },
  // =============================================================
  // 14. 📊 PERMINTAAN & KEBUTUHAN RAKYAT
  // =============================================================

  "permintaan": {
    "kepuasan": 71,
    "permintaan_utama": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "perumahan": 10,
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
      "kekuatan_lunak": 15,
      "kekuatan_keras": 11,
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
    "kesehatan": 3,
    "pendidikan": 17,
    "keamanan": 3,
    "keuangan": 37,
    "lingkungan": 60
  }
};
