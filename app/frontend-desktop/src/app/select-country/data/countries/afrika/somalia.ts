import { CountryData } from "../../types/_index";

export const somalia: CountryData = {
  "name_en": "Somalia",
  "capital": "Mogadishu",
  "name_id": "Somalia",
  "lon": 49,
  "lat": 10,
  "flag": "🇸🇴",
  "jumlah_penduduk": 15008154,
  "anggaran": 78,
  "pendapatan_nasional": "222",
  "religion": "Islam",
  "ideology": "Konservatisme",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_gas": 22,
    "pembangkit_air": 17,
    "pembangkit_nuklir": 35,
    "jaringan_listrik": 84,
    "pembangkit_surya": 33,
    "pembangkit_termal": 9,
    "pembangkit_angin": 2
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "bandara": 36,
    "jalur_sepeda": 22,
    "terminal_bus": 34,
    "helipad": 40,
    "jalan_tol": 39,
    "cakupan_internet": 93,
    "jalur_kereta": 28,
    "kualitas_jalan": 66,
    "pelabuhan_laut": 2,
    "kereta_bawah_tanah": 17,
    "indeks_teknologi": 80,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "aluminium": 23,
    "batu_bara": 23,
    "tembaga": 6,
    "gas_alam": 28,
    "emas": 2,
    "bijih_besi": 39,
    "litium": 13,
    "nikel": 6,
    "minyak_bumi": 25,
    "logam_tanah_jarang": 20,
    "garam": 10,
    "kekuatan": 29.660809349923973,
    "uranium": 27
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "roti": 9,
    "mobil": 5,
    "semen_beton": 12,
    "pupuk": 8,
    "mie_instan": 8,
    "pengolahan_daging": 34,
    "air_mineral": 9,
    "sepeda_motor": 13,
    "farmasi": 36,
    "semikonduktor": 16,
    "smelter": 39,
    "kekuatan": 3.076011687404966,
    "gula": 28,
    "kayu": 33
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_agri_peternakan": {
    "ayam_unggas": 24.5,
    "sapi_perah": 24,
    "sapi_potong": 9,
    "domba_kambing": 23,
    "udang_kerang": 17.0,
    "ikan": 39,
    "padi": 31,
    "gandum_jagung": 26.0,
    "sayur_umbi": 24.0,
    "kedelai": 15,
    "kelapa_sawit": 22,
    "kopi_teh_kakao": 23.0,
    "kekuatan": 20.0
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 8,
    "gudang_senjata": 25,
    "hangar_tank": 11,
    "akademi_militer": 13,
    "pusat_komando": 33,
    "pangkalan_udara": 30,
    "pangkalan_laut": 13,
    "program_luar_angkasa": 31,
    "pertahanan_siber": 18,
    "anggaran_pertahanan": 22,
    "personel": 26203,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 8,
    "infanteri": 4,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 72,
        "apc": 147,
        "artileri_berat": 26
  },
      "laut": {
        "kapal_induk": 38,
        "kapal_destroyer": 99,
        "kapal_selam_nuklir": 0
  },
      "udara": {
        "jet_tempur_siluman": 166,
        "helikopter_serang": 198,
        "pesawat_pengintai": 2
  },
      "total_unit": 25,
      "kesiapan": 98
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "intel_radar": { "sistem_satelit": 4,
      "jaringan_radar": 0,
      "operasi_siber": 2
  },
    "armada_polisi": { "patroli_lantas": {
          "mobil_patroli": 29,
          "sepeda_motor": 17,
          "unit_k9": 23
  },
        "taktis_khusus": {
          "swat": 22,
          "helikopter_polisi": 8,
          "anti_huru_hara": 62
  },
        "pusat_komando": {
          "kantor_polisi": 10,
          "kamera_pengawas": 38,
          "pusat_forensik": 1
  },
        "waktu_respon": 35,
        "kepercayaan_publik": 50
  },
    "intelijen": 16,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 3,
      "misi_mata_mata": 4,
      "misi_sabotase": 17,
      "manajemen_wilayah": 34,
      "program_nuklir": 0
  }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 38,
      "sd": 19,
      "smp": 20,
      "sma": 24,
      "universitas": 21,
      "lembaga_pendidikan": 35,
      "laboratorium": 1,
      "observatorium": 1,
      "pusat_penelitian": 38,
      "pusat_pengembangan": 3,
      "literasi": 74,
      "indeks_penelitian": 0
  },
    "kesehatan": {
      "rumah_sakit_besar": 40,
      "rumah_sakit_kecil": 23,
      "pusat_diagnostik": 22,
      "tempat_tidur_rs": 7592,
      "harapan_hidup": 40,
      "indeks_kesehatan": 85
  },
    "olahraga": {
      "kolam_renang": 22,
      "sirkuit_balap": 40,
      "stadion": 37,
      "stadion_internasional": 34,
      "skor_olimpiade": 38,
      "popularitas": 44
  },
    "hukum": {
      "pusat_bantuan_hukum": 11,
      "pengadilan": 3,
      "kejaksaan": 22,
      "pos_polisi": 27,
      "armada_mobil_polisi": 9421,
      "akademi_polisi": 17,
      "indeks_korupsi": 78,
      "indeks_keamanan": 74
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
      "pendapatan": 1
    },
    "korporasi": {
      "tarif": 12,
      "kepuasan": 52,
      "pendapatan": 2
    },
    "penghasilan": {
      "tarif": 39,
      "kepuasan": 61,
      "pendapatan": 5
    },
    "bea_cukai": {
      "tarif": 11,
      "kepuasan": 86,
      "pendapatan": 2
    },
    "lingkungan": {
      "tarif": 6,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 40,
      "kepuasan": 93,
      "pendapatan": 5
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 40,
    "gaji_guru": 50,
    "gaji_medis": 40,
    "gaji_militer": 50
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 25,
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
    "harga_minyak_goreng": 21560,
    "harga_gula": 14400,
    "harga_telur": 31100,
    "harga_bbm": 10700,
    "harga_listrik": 2240,
    "harga_air": 5200,
    "harga_obat": 157900,
    "harga_pendidikan": 967800
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
      "kekuatan_lunak": 35,
      "kekuatan_keras": 10,
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
    "kesehatan": 8,
    "pendidikan": 11,
    "keamanan": 24,
    "keuangan": 13,
    "lingkungan": 60
  }
};
