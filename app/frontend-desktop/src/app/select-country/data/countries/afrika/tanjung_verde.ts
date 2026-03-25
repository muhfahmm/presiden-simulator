import { CountryData } from "../../types/_index";

export const tanjung_verde: CountryData = {
  "name_en": "Cape Verde",
  "capital": "Praia",
  "name_id": "Tanjung verde",
  "lon": -24,
  "lat": 16,
  "flag": "🇨🇻",
  "jumlah_penduduk": "10M",
  "anggaran": 97,
  "pendapatan_nasional": "278",
  "religion": "Katolik",
  "ideology": "Liberalisme",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_gas": 16,
    "pembangkit_air": 5,
    "pembangkit_nuklir": 36,
    "jaringan_listrik": 76,
    "pembangkit_surya": 4,
    "pembangkit_termal": 10,
    "pembangkit_angin": 36
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "bandara": 12,
    "jalur_sepeda": 36,
    "terminal_bus": 10,
    "helipad": 18,
    "jalan_tol": 5,
    "cakupan_internet": 83,
    "jalur_kereta": 23,
    "kualitas_jalan": 84,
    "pelabuhan_laut": 5,
    "kereta_bawah_tanah": 20,
    "indeks_teknologi": 62,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "aluminium": 22,
    "batu_bara": 3,
    "tembaga": 13,
    "gas_alam": 12,
    "emas": 29,
    "bijih_besi": 20,
    "litium": 33,
    "nikel": 22,
    "minyak_bumi": 36,
    "logam_tanah_jarang": 20,
    "garam": 10,
    "kekuatan": 29.660809349923973,
    "uranium": 30
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "roti": 16,
    "mobil": 33,
    "semen_beton": 12,
    "pupuk": 27,
    "mie_instan": 30,
    "pengolahan_daging": 26,
    "air_mineral": 9,
    "sepeda_motor": 20,
    "farmasi": 5,
    "semikonduktor": 17,
    "smelter": 15,
    "kekuatan": 3.076011687404966,
    "gula": 29,
    "kayu": 15
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_agri_peternakan": {
    "ayam_unggas": 17.5,
    "sapi_perah": 37,
    "sapi_potong": 18,
    "domba_kambing": 33,
    "udang_kerang": 27.5,
    "ikan": 27,
    "padi": 19,
    "gandum_jagung": 24.5,
    "sayur_umbi": 31.0,
    "kedelai": 11,
    "kelapa_sawit": 9,
    "kopi_teh_kakao": 19.0,
    "kekuatan": 20.0
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 28,
    "gudang_senjata": 21,
    "hangar_tank": 15,
    "akademi_militer": 31,
    "pusat_komando": 2,
    "pangkalan_udara": 2,
    "pangkalan_laut": 30,
    "program_luar_angkasa": 14,
    "pertahanan_siber": 4,
    "anggaran_pertahanan": 27,
    "personel": 29185,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 24,
    "infanteri": 13,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 188,
        "apc": 23,
        "artileri_berat": 26
  },
      "laut": {
        "kapal_induk": 9,
        "kapal_destroyer": 54,
        "kapal_selam_nuklir": 0
  },
      "udara": {
        "jet_tempur_siluman": 10,
        "helikopter_serang": 81,
        "pesawat_pengintai": 2
  },
      "total_unit": 6,
      "kesiapan": 98
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "intel_radar": { "sistem_satelit": 1,
      "jaringan_radar": 3,
      "operasi_siber": 2
  },
    "armada_polisi": { "patroli_lantas": {
          "mobil_patroli": 39,
          "sepeda_motor": 24,
          "unit_k9": 23
  },
        "taktis_khusus": {
          "swat": 23,
          "helikopter_polisi": 7,
          "anti_huru_hara": 62
  },
        "pusat_komando": {
          "kantor_polisi": 31,
          "kamera_pengawas": 12,
          "pusat_forensik": 1
  },
        "waktu_respon": 23,
        "kepercayaan_publik": 50
  },
    "intelijen": 28,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 32,
      "misi_mata_mata": 25,
      "misi_sabotase": 18,
      "manajemen_wilayah": 20,
      "program_nuklir": 0
  }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 1,
      "sd": 8,
      "smp": 15,
      "sma": 3,
      "universitas": 7,
      "lembaga_pendidikan": 13,
      "laboratorium": 31,
      "observatorium": 12,
      "pusat_penelitian": 36,
      "pusat_pengembangan": 11,
      "literasi": 95,
      "indeks_penelitian": 0
  },
    "kesehatan": {
      "rumah_sakit_besar": 39,
      "rumah_sakit_kecil": 16,
      "pusat_diagnostik": 20,
      "tempat_tidur_rs": 4031,
      "harapan_hidup": 37,
      "indeks_kesehatan": 85
  },
    "olahraga": {
      "kolam_renang": 12,
      "sirkuit_balap": 5,
      "stadion": 24,
      "stadion_internasional": 39,
      "skor_olimpiade": 19,
      "popularitas": 44
  },
    "hukum": {
      "pusat_bantuan_hukum": 39,
      "pengadilan": 19,
      "kejaksaan": 23,
      "pos_polisi": 18,
      "armada_mobil_polisi": 5017,
      "akademi_polisi": 37,
      "indeks_korupsi": 79,
      "indeks_keamanan": 51
  }
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 40,
      "kepuasan": 67,
      "pendapatan": 7
    },
    "korporasi": {
      "tarif": 31,
      "kepuasan": 52,
      "pendapatan": 6
    },
    "penghasilan": {
      "tarif": 15,
      "kepuasan": 61,
      "pendapatan": 3
    },
    "bea_cukai": {
      "tarif": 27,
      "kepuasan": 86,
      "pendapatan": 6
    },
    "lingkungan": {
      "tarif": 18,
      "kepuasan": 88,
      "pendapatan": 4
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 20,
      "kepuasan": 93,
      "pendapatan": 2
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 40,
    "gaji_guru": 40,
    "gaji_medis": 50,
    "gaji_militer": 40
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 25,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 25,
    "subsidi_transportasi": 25,
    "subsidi_perumahan": 0
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 12800,
    "harga_daging_sapi": 52050,
    "harga_ayam": 32800,
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 31100,
    "harga_bbm": 8560,
    "harga_listrik": 3200,
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
      "kekuatan_lunak": 38,
      "kekuatan_keras": 30,
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
    "kesehatan": 17,
    "pendidikan": 4,
    "keamanan": 39,
    "keuangan": 13,
    "lingkungan": 60
  }
};
