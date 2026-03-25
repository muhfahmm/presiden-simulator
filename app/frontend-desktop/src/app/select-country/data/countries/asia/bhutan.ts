import { CountryData } from "../../types";

export const bhutan: CountryData = {
  "name_en": "Bhutan",
  "capital": "Thimphu",
  "name_id": "Bhutan",
  "lon": 90.5,
  "lat": 27.5,
  "flag": "🇧🇹",
  "pop": 754394,
  "budget": 27,
  "income": "78",
  "religion": "Buddha",
  "ideology": "Monarki",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 21,
    "hydro_plant": 12,
    "solar_plant": 21,
    "thermal_plant": 35,
    "gas_plant": 37,
    "wind_plant": 33,
    "power_grid": 77,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 22,
    "subway": 15,
    "railway": 2,
    "highway": 34,
    "road_quality": 55,
    "sea_port": 25,
    "airport": 14,
    "bus_terminal": 29,
    "helipad": 26,
    "internet_coverage": 58,
    "tech_stack": 66,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 18,
    "uranium": 3,
    "coal": 9,
    "oil": 8,
    "gas": 31,
    "salt": 26,
    "nickel": 17,
    "lithium": 17,
    "aluminum": 6,
    "copper": 19,
    "rare_earth": 2,
    "iron_ore": 29,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 32,
    "car": 26,
    "motorcycle": 8,
    "smelter": 14,
    "concrete_cement": 30,
    "wood": 40,
    "mineral_water": 26,
    "sugar": 4,
    "bread": 37,
    "pharmacy": 1,
    "fertilizer": 29,
    "meat_processing": 16,
    "instant_noodle": 23,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 32,
    "poultry": 9,
    "dairy_cow": 23,
    "beef_cow": 25,
    "sheep_goat": 12,
    "shrimp": 6,
    "fish": 25,
    "shellfish": 38,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 30,
    "wheat": 24,
    "corn": 31,
    "tubers": 29,
    "soy": 7,
    "palm_oil": 18,
    "tea": 32,
    "coffee": 33,
    "cocoa": 4,
    "sugarcane": 35,
    "vegetables": 31,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 30,
    "barracks": 24,
    "armory": 36,
    "tank_hangar": 38,
    "military_academy": 40,
    "budget": 7,
    "personnel": 22464,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 8,
        "apc": 22,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 36,
        "kapal_destroyer": 12,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 9,
        "helikopter_serang": 21,
        "pesawat_pengintai": 2
      },
      "total_unit": 30,
      "readiness": 98
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 20,
    "military_air_base": 33,
    "military_naval_base": 32,
    "arms_factory": 9,
    "nuclear_status": false,
    "space_program": 8,
    "cyber_defense": 1,
    "intelligence": 40,
    "strategic_operations": {
      "attack_mission": 12,
      "spy_mission": 32,
      "sabotage_mission": 28,
      "territory_management": 9,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 27,
      "radar_network": 28,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 35,
      "elementary_school": 31,
      "middle_school": 30,
      "high_school": 39,
      "university": 22,
      "education_institute": 16,
      "laboratory": 21,
      "observatory": 16,
      "research_center": 11,
      "development_center": 11,
      "literacy": 54,
      "research_index": 0
    },
    "health": {
      "large_hospital": 35,
      "small_hospital": 17,
      "diagnostic_center": 39,
      "hospital_beds": 9290,
      "life_expectancy": 31,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 20,
      "racing_circuit": 8,
      "stadium": 16,
      "international_stadium": 28,
      "olympic_score": 35,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 40,
      "court": 3,
      "prosecution_office": 9,
      "police_station": 5,
      "police_car_fleet": 865,
      "police_academy": 1,
      "corruption_index": 71,
      "security_index": 73,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 23,
          "sepeda_motor": 29,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 12,
          "helikopter_polisi": 26,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 26,
          "kamera_surveillance": 31,
          "pusat_forensik": 1
        },
        "response_time": 6,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 7,
    "tanks": 21,
    "aircraft": 21,
    "naval": 34,
    "air_base": 28,
    "naval_base": 40,
    "military_base": 9,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 2,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 19,
      "satisfaction": 67,
      "revenue": 1
    },
    "corporate": {
      "rate": 28,
      "satisfaction": 52,
      "revenue": 0
    },
    "income": {
      "rate": 10,
      "satisfaction": 61,
      "revenue": 0
    },
    "customs": {
      "rate": 24,
      "satisfaction": 86,
      "revenue": 1
    },
    "environment": {
      "rate": 2,
      "satisfaction": 88,
      "revenue": 0
    },
    "transit_allied": { "rate": 5, "satisfaction": 85, "revenue": 1 },
    "transit_non_allied": { "rate": 15, "satisfaction": 75, "revenue": 1 },
    "other": {
      "rate": 17,
      "satisfaction": 93,
      "revenue": 0
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  
  // =============================================================
  // 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "salaries": {
    "salaryAsn": 50,
    "salaryGuru": 70,
    "salaryMedis": 80,
    "salaryMiliter": 70
  },
  "subsidies": {
    "subsidyEnergi": 75,
    "subsidyPangan": 75,
    "subsidyKesehatan": 75,
    "subsidyPendidikan": 75,
    "subsidyUmkm": 50,
    "subsidyTransport": 75,
    "subsidyRumah": 50
  },

  "demand": {
    "satisfaction": 64,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 20,
    "commercial": 31,
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
      "soft_power": 37,
      "hard_power": 33,
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
    "health": 35,
    "education": 29,
    "security": 10,
    "finance": 7,
    "environment": 60
  }
};
