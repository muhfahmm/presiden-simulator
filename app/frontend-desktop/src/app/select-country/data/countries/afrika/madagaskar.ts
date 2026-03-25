import { CountryData } from "../../types/_index";

export const madagaskar: CountryData = {
  "name_en": "Madagascar",
  "capital": "Antananarivo",
  "name_id": "Madagaskar",
  "lon": 47.31,
  "lat": -18.55,
  "flag": "🇲🇬",
  "jumlah_penduduk": 26262368,
  "anggaran": 146,
  "pendapatan_nasional": "417",
  "religion": "Protestan",
  "ideology": "Demokrasi",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_gas": 20,
    "pembangkit_air": 10,
    "pembangkit_nuklir": 24,
    "jaringan_listrik": 79,
    "pembangkit_surya": 7,
    "pembangkit_termal": 6,
    "pembangkit_angin": 17
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "bandara": 40,
    "jalur_sepeda": 33,
    "terminal_bus": 24,
    "helipad": 38,
    "jalan_tol": 12,
    "cakupan_internet": 53,
    "jalur_kereta": 39,
    "kualitas_jalan": 69,
    "pelabuhan_laut": 1,
    "kereta_bawah_tanah": 32,
    "indeks_teknologi": 65,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "aluminium": 22,
    "batu_bara": 23,
    "tembaga": 34,
    "gas_alam": 5,
    "emas": 24,
    "bijih_besi": 35,
    "litium": 12,
    "nikel": 21,
    "minyak_bumi": 31,
    "logam_tanah_jarang": 7,
    "garam": 35,
    "kekuatan": 29.660809349923973,
    "uranium": 12
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "roti": 22,
    "mobil": 30,
    "semen_beton": 25,
    "pupuk": 33,
    "mie_instan": 3,
    "pengolahan_daging": 19,
    "air_mineral": 27,
    "sepeda_motor": 39,
    "farmasi": 9,
    "semikonduktor": 13,
    "smelter": 39,
    "kekuatan": 3.076011687404966,
    "gula": 40,
    "kayu": 28
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_agri_peternakan": {
    "ayam_unggas": 10.5,
    "sapi_perah": 13,
    "sapi_potong": 32,
    "domba_kambing": 2,
    "udang_kerang": 11.5,
    "ikan": 26,
    "padi": 37,
    "gandum_jagung": 17.5,
    "sayur_umbi": 14.5,
    "kedelai": 32,
    "kelapa_sawit": 23,
    "kopi_teh_kakao": 18.7,
    "kekuatan": 20.0
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 15,
    "gudang_senjata": 5,
    "hangar_tank": 16,
    "akademi_militer": 5,
    "pusat_komando": 3,
    "pangkalan_udara": 26,
    "pangkalan_laut": 17,
    "program_luar_angkasa": 8,
    "pertahanan_siber": 31,
    "anggaran_pertahanan": 41,
    "personel": 13106,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 39,
    "infanteri": 34,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 10,
        "apc": 38,
        "artileri_berat": 26
  },
      "laut": {
        "kapal_induk": 35,
        "kapal_destroyer": 8,
        "kapal_selam_nuklir": 0
  },
      "udara": {
        "jet_tempur_siluman": 3,
        "helikopter_serang": 7,
        "pesawat_pengintai": 2
  },
      "total_unit": 37,
      "kesiapan": 98
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "intel_radar": { "sistem_satelit": 7,
      "jaringan_radar": 29,
      "operasi_siber": 2
  },
    "armada_polisi": { "patroli_lantas": {
          "mobil_patroli": 33,
          "sepeda_motor": 21,
          "unit_k9": 23
  },
        "taktis_khusus": {
          "swat": 12,
          "helikopter_polisi": 38,
          "anti_huru_hara": 62
  },
        "pusat_komando": {
          "kantor_polisi": 37,
          "kamera_pengawas": 20,
          "pusat_forensik": 1
  },
        "waktu_respon": 15,
        "kepercayaan_publik": 50
  },
    "intelijen": 34,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 33,
      "misi_mata_mata": 9,
      "misi_sabotase": 1,
      "manajemen_wilayah": 1,
      "program_nuklir": 0
  }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 27,
      "sd": 21,
      "smp": 35,
      "sma": 27,
      "universitas": 8,
      "lembaga_pendidikan": 7,
      "laboratorium": 21,
      "observatorium": 28,
      "pusat_penelitian": 38,
      "pusat_pengembangan": 18,
      "literasi": 68,
      "indeks_penelitian": 0
  },
    "kesehatan": {
      "rumah_sakit_besar": 35,
      "rumah_sakit_kecil": 5,
      "pusat_diagnostik": 4,
      "tempat_tidur_rs": 7328,
      "harapan_hidup": 1,
      "indeks_kesehatan": 85
  },
    "olahraga": {
      "kolam_renang": 16,
      "sirkuit_balap": 12,
      "stadion": 36,
      "stadion_internasional": 17,
      "skor_olimpiade": 35,
      "popularitas": 44
  },
    "hukum": {
      "pusat_bantuan_hukum": 29,
      "pengadilan": 28,
      "kejaksaan": 14,
      "pos_polisi": 23,
      "armada_mobil_polisi": 5100,
      "akademi_polisi": 38,
      "indeks_korupsi": 77,
      "indeks_keamanan": 50
  }
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 15,
      "kepuasan": 67,
      "pendapatan": 4
    },
    "korporasi": {
      "tarif": 30,
      "kepuasan": 52,
      "pendapatan": 7
    },
    "penghasilan": {
      "tarif": 6,
      "kepuasan": 61,
      "pendapatan": 1
    },
    "bea_cukai": {
      "tarif": 6,
      "kepuasan": 86,
      "pendapatan": 1
    },
    "lingkungan": {
      "tarif": 2,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 3 },
    "lainnya": {
      "tarif": 14,
      "kepuasan": 93,
      "pendapatan": 4
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 50,
    "gaji_guru": 40,
    "gaji_medis": 40,
    "gaji_militer": 50
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 25,
    "subsidi_umkm": 25,
    "subsidi_transportasi": 25,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 22400,
    "harga_daging_sapi": 208200,
    "harga_ayam": 57400,
    "harga_minyak_goreng": 21560,
    "harga_gula": 20160,
    "harga_telur": 31100,
    "harga_bbm": 10700,
    "harga_listrik": 800,
    "harga_air": 5200,
    "harga_obat": 221060,
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
      "kekuatan_lunak": 29,
      "kekuatan_keras": 3,
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
    "kesehatan": 18,
    "pendidikan": 23,
    "keamanan": 22,
    "keuangan": 30,
    "lingkungan": 60
  }
};
