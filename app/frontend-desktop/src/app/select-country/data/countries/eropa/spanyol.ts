import { CountryData } from "../../types";

export const spanyol: CountryData = {
  "name_en": "Spain",
  "capital": "Madrid",
  "name_id": "Spanyol",
  "lon": -4,
  "lat": 40,
  "flag": "🇪🇸",
  "pop": "10M",
  "budget": 15362,
  "income": "43892",
  "religion": "Katolik",
  "ideology": "Demokrasi",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 29,
    "hydro_plant": 31,
    "solar_plant": 19,
    "thermal_plant": 15,
    "gas_plant": 19,
    "wind_plant": 29,
    "power_grid": 90,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 3,
    "subway": 36,
    "railway": 18,
    "highway": 17,
    "road_quality": 87,
    "sea_port": 39,
    "airport": 23,
    "bus_terminal": 6,
    "helipad": 16,
    "internet_coverage": 80,
    "tech_stack": 59,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 9,
    "uranium": 39,
    "coal": 23,
    "oil": 40,
    "gas": 21,
    "salt": 37,
    "nickel": 4,
    "lithium": 21,
    "aluminum": 40,
    "copper": 33,
    "rare_earth": 36,
    "iron_ore": 33,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 14,
    "car": 3,
    "motorcycle": 8,
    "smelter": 35,
    "concrete_cement": 1,
    "wood": 13,
    "mineral_water": 16,
    "sugar": 32,
    "bread": 23,
    "pharmacy": 4,
    "fertilizer": 14,
    "meat_processing": 29,
    "instant_noodle": 16,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 13,
    "poultry": 40,
    "dairy_cow": 31,
    "beef_cow": 12,
    "sheep_goat": 12,
    "shrimp": 7,
    "fish": 5,
    "shellfish": 2,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 29,
    "wheat": 8,
    "corn": 11,
    "tubers": 9,
    "soy": 23,
    "palm_oil": 18,
    "tea": 20,
    "coffee": 13,
    "cocoa": 33,
    "sugarcane": 10,
    "vegetables": 20,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 4,
    "barracks": 16,
    "armory": 31,
    "tank_hangar": 30,
    "military_academy": 19,
    "budget": 4389,
    "personnel": 6338,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 146,
        "apc": 38,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 15,
        "kapal_destroyer": 25,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 128,
        "helikopter_serang": 133,
        "pesawat_pengintai": 2
      },
      "total_unit": 5,
      "readiness": 98
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 21,
    "military_air_base": 39,
    "military_naval_base": 37,
    "arms_factory": 24,
    "nuclear_status": false,
    "space_program": 4,
    "cyber_defense": 35,
    "intelligence": 8,
    "strategic_operations": {
      "attack_mission": 18,
      "spy_mission": 30,
      "sabotage_mission": 6,
      "territory_management": 15,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 5,
      "radar_network": 5,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 15,
      "elementary_school": 7,
      "middle_school": 3,
      "high_school": 40,
      "university": 4,
      "education_institute": 7,
      "laboratory": 40,
      "observatory": 39,
      "research_center": 32,
      "development_center": 32,
      "literacy": 60,
      "research_index": 0
    },
    "health": {
      "large_hospital": 11,
      "small_hospital": 16,
      "diagnostic_center": 16,
      "hospital_beds": 2962,
      "life_expectancy": 8,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 1,
      "racing_circuit": 11,
      "stadium": 17,
      "international_stadium": 4,
      "olympic_score": 27,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 4,
      "court": 28,
      "prosecution_office": 10,
      "police_station": 26,
      "police_car_fleet": 9910,
      "police_academy": 28,
      "corruption_index": 92,
      "security_index": 86,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 28,
          "sepeda_motor": 8,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 6,
          "helikopter_polisi": 8,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 33,
          "kamera_surveillance": 7,
          "pusat_forensik": 1
        },
        "response_time": 40,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 13,
    "tanks": 5,
    "aircraft": 31,
    "naval": 27,
    "air_base": 20,
    "naval_base": 32,
    "military_base": 18,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 9,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 30,
      "satisfaction": 67,
      "revenue": 1365
    },
    "corporate": {
      "rate": 11,
      "satisfaction": 52,
      "revenue": 370
    },
    "income": {
      "rate": 28,
      "satisfaction": 61,
      "revenue": 1029
    },
    "customs": {
      "rate": 26,
      "satisfaction": 86,
      "revenue": 950
    },
    "environment": {
      "rate": 19,
      "satisfaction": 88,
      "revenue": 445
    },
    "transit_allied": { "rate": 5, "satisfaction": 85, "revenue": 77 },
    "transit_non_allied": { "rate": 15, "satisfaction": 75, "revenue": 231 },
    "other": {
      "rate": 39,
      "satisfaction": 93,
      "revenue": 742
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
    "salaryMiliter": 80
  },
  "subsidies": {
    "subsidyEnergi": 25,
    "subsidyPangan": 50,
    "subsidyKesehatan": 75,
    "subsidyPendidikan": 100,
    "subsidyUmkm": 75,
    "subsidyTransport": 50,
    "subsidyRumah": 50
  },

  "demand": {
    "satisfaction": 83,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 11,
    "commercial": 28,
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
      "soft_power": 8,
      "hard_power": 2,
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
    "health": 19,
    "education": 24,
    "security": 7,
    "finance": 27,
    "environment": 60
  }
};
