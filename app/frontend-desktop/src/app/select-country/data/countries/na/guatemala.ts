import { CountryData } from "../../types";

export const guatemala: CountryData = {
  "name_en": "Guatemala",
  "capital": "Guatemala City",
  "name_id": "Guatemala",
  "lon": -90.25,
  "lat": 15.5,
  "flag": "🇬🇹",
  "pop": 17247807,
  "budget": 924,
  "income": "2639",
  "religion": "Katolik",
  "ideology": "Demokrasi",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 15,
    "hydro_plant": 17,
    "solar_plant": 29,
    "thermal_plant": 21,
    "gas_plant": 1,
    "wind_plant": 36,
    "power_grid": 56,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 29,
    "subway": 22,
    "railway": 11,
    "highway": 16,
    "road_quality": 78,
    "sea_port": 3,
    "airport": 21,
    "bus_terminal": 26,
    "helipad": 25,
    "internet_coverage": 55,
    "tech_stack": 72,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 20,
    "uranium": 29,
    "coal": 35,
    "oil": 39,
    "gas": 1,
    "salt": 15,
    "nickel": 1,
    "lithium": 15,
    "aluminum": 37,
    "copper": 34,
    "rare_earth": 33,
    "iron_ore": 6,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 6,
    "car": 12,
    "motorcycle": 39,
    "smelter": 34,
    "concrete_cement": 25,
    "wood": 38,
    "mineral_water": 33,
    "sugar": 28,
    "bread": 35,
    "pharmacy": 6,
    "fertilizer": 18,
    "meat_processing": 38,
    "instant_noodle": 28,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 4,
    "poultry": 33,
    "dairy_cow": 7,
    "beef_cow": 9,
    "sheep_goat": 11,
    "shrimp": 2,
    "fish": 22,
    "shellfish": 12,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 27,
    "wheat": 30,
    "corn": 15,
    "tubers": 17,
    "soy": 25,
    "palm_oil": 30,
    "tea": 14,
    "coffee": 18,
    "cocoa": 25,
    "sugarcane": 24,
    "vegetables": 28,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 4,
    "barracks": 39,
    "armory": 5,
    "tank_hangar": 9,
    "military_academy": 33,
    "budget": 263,
    "personnel": 18243,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 30,
        "apc": 7,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 14,
        "kapal_destroyer": 4,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 11,
        "helikopter_serang": 26,
        "pesawat_pengintai": 2
      },
      "total_unit": 29,
      "readiness": 98
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 8,
    "military_air_base": 38,
    "military_naval_base": 12,
    "arms_factory": 14,
    "nuclear_status": false,
    "space_program": 32,
    "cyber_defense": 39,
    "intelligence": 11,
    "strategic_operations": {
      "attack_mission": 38,
      "spy_mission": 22,
      "sabotage_mission": 23,
      "territory_management": 30,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 25,
      "radar_network": 32,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 8,
      "elementary_school": 13,
      "middle_school": 28,
      "high_school": 37,
      "university": 14,
      "education_institute": 34,
      "laboratory": 21,
      "observatory": 19,
      "research_center": 11,
      "development_center": 22,
      "literacy": 91,
      "research_index": 0
    },
    "health": {
      "large_hospital": 28,
      "small_hospital": 36,
      "diagnostic_center": 7,
      "hospital_beds": 7066,
      "life_expectancy": 6,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 22,
      "racing_circuit": 13,
      "stadium": 21,
      "international_stadium": 27,
      "olympic_score": 14,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 40,
      "court": 10,
      "prosecution_office": 40,
      "police_station": 25,
      "police_car_fleet": 7558,
      "police_academy": 23,
      "corruption_index": 77,
      "security_index": 51,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 32,
          "sepeda_motor": 15,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 13,
          "helikopter_polisi": 26,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 21,
          "kamera_surveillance": 37,
          "pusat_forensik": 1
        },
        "response_time": 5,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 21,
    "tanks": 18,
    "aircraft": 35,
    "naval": 9,
    "air_base": 12,
    "naval_base": 14,
    "military_base": 32,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 20,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 21,
      "satisfaction": 67,
      "revenue": 31
    },
    "corporate": {
      "rate": 27,
      "satisfaction": 52,
      "revenue": 61
    },
    "income": {
      "rate": 3,
      "satisfaction": 61,
      "revenue": 8
    },
    "customs": {
      "rate": 18,
      "satisfaction": 86,
      "revenue": 26
    },
    "environment": {
      "rate": 22,
      "satisfaction": 88,
      "revenue": 39
    },
    "transit_allied": { "rate": 5, "satisfaction": 85, "revenue": 5 },
    "transit_non_allied": { "rate": 15, "satisfaction": 75, "revenue": 14 },
    "other": {
      "rate": 26,
      "satisfaction": 93,
      "revenue": 61
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  
  // =============================================================
  // 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "salaries": {
    "salaryAsn": 90,
    "salaryGuru": 90,
    "salaryMedis": 90,
    "salaryMiliter": 90
  },
  "subsidies": {
    "subsidyEnergi": 25,
    "subsidyPangan": 50,
    "subsidyKesehatan": 75,
    "subsidyPendidikan": 75,
    "subsidyUmkm": 50,
    "subsidyTransport": 75,
    "subsidyRumah": 75
  },

  "demand": {
    "satisfaction": 63,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 15,
    "commercial": 23,
    "industrial": 53
  },

  // =============================================================
  // 6. 🌍 GEOPOLITIK & HUBUNGAN INTERNASIONAL (16 Jenis)
  // =============================================================

  "geopolitics": {
    "allies": [
      "Amerika Serikat",
      "Uni Eropa"
    ],
    "enemies": [],
    "stance": "Neutral",
    "international_influence": {
      "soft_power": 31,
      "hard_power": 5,
      "diplomatic_prestige": 57
    },
    "international_orgs": [
      {
        "name": "PBB (UN)",
        "role": "Member"
      },
      {
        "name": "WHO",
        "role": "Member"
      },
      {
        "name": "WTO",
        "role": "Member"
      }
    ],
    },

  // =============================================================
  // 🏛️ KEMENTERIAN NEGARA (6 Jenis)
  // =============================================================

  "ministries": {
    "health": 15,
    "education": 20,
    "security": 37,
    "finance": 1,
    "environment": 60
  }
};
