import { CountryData } from "../../types";

export const peru: CountryData = {
  "name_en": "Peru",
  "capital": "Lima",
  "name_id": "Peru",
  "lon": -76,
  "lat": -10,
  "flag": "🇵🇪",
  "pop": "10M",
  "budget": 2528,
  "income": "7223",
  "religion": "Protestan",
  "ideology": "Kapitalisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 32,
    "hydro_plant": 22,
    "solar_plant": 26,
    "thermal_plant": 38,
    "gas_plant": 5,
    "wind_plant": 30,
    "power_grid": 75,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 5,
    "subway": 26,
    "railway": 15,
    "highway": 11,
    "road_quality": 84,
    "sea_port": 17,
    "airport": 13,
    "bus_terminal": 38,
    "helipad": 33,
    "internet_coverage": 94,
    "tech_stack": 78,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 5,
    "uranium": 13,
    "coal": 28,
    "oil": 10,
    "gas": 7,
    "salt": 26,
    "nickel": 16,
    "lithium": 37,
    "aluminum": 30,
    "copper": 19,
    "rare_earth": 39,
    "iron_ore": 5,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 16,
    "car": 30,
    "motorcycle": 16,
    "smelter": 16,
    "concrete_cement": 17,
    "wood": 5,
    "mineral_water": 23,
    "sugar": 11,
    "bread": 14,
    "pharmacy": 21,
    "fertilizer": 37,
    "meat_processing": 39,
    "instant_noodle": 28,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 16,
    "poultry": 39,
    "dairy_cow": 15,
    "beef_cow": 15,
    "sheep_goat": 15,
    "shrimp": 15,
    "fish": 14,
    "shellfish": 14,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 36,
    "wheat": 2,
    "corn": 14,
    "tubers": 17,
    "soy": 32,
    "palm_oil": 27,
    "tea": 12,
    "coffee": 8,
    "cocoa": 27,
    "sugarcane": 28,
    "vegetables": 16,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 15,
    "barracks": 2,
    "armory": 17,
    "tank_hangar": 34,
    "military_academy": 7,
    "budget": 9886,
    "personnel": 10851,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 178,
        "apc": 14,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 31,
        "kapal_destroyer": 53,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 137,
        "helikopter_serang": 43,
        "pesawat_pengintai": 2
      },
      "total_unit": 28,
      "readiness": 98
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 37,
    "military_air_base": 34,
    "military_naval_base": 16,
    "arms_factory": 33,
    "nuclear_status": false,
    "space_program": 34,
    "cyber_defense": 10,
    "intelligence": 17,
    "strategic_operations": {
      "attack_mission": 2,
      "spy_mission": 32,
      "sabotage_mission": 14,
      "territory_management": 28,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 4,
      "radar_network": 2,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 16,
      "elementary_school": 32,
      "middle_school": 29,
      "high_school": 27,
      "university": 21,
      "education_institute": 15,
      "laboratory": 29,
      "observatory": 16,
      "research_center": 28,
      "development_center": 13,
      "literacy": 59,
      "research_index": 0
    },
    "health": {
      "large_hospital": 17,
      "small_hospital": 32,
      "diagnostic_center": 36,
      "hospital_beds": 883,
      "life_expectancy": 31,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 27,
      "racing_circuit": 30,
      "stadium": 2,
      "international_stadium": 3,
      "olympic_score": 24,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 3,
      "court": 34,
      "prosecution_office": 26,
      "police_station": 20,
      "police_car_fleet": 8042,
      "police_academy": 25,
      "corruption_index": 91,
      "security_index": 89,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 6,
          "sepeda_motor": 37,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 32,
          "helikopter_polisi": 5,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 1,
          "kamera_surveillance": 2,
          "pusat_forensik": 1
        },
        "response_time": 30,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 15,
    "tanks": 14,
    "aircraft": 39,
    "naval": 38,
    "air_base": 20,
    "naval_base": 14,
    "military_base": 6,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 25,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 33,
      "satisfaction": 67,
      "revenue": 196
    },
    "corporate": {
      "rate": 14,
      "satisfaction": 52,
      "revenue": 100
    },
    "income": {
      "rate": 29,
      "satisfaction": 61,
      "revenue": 138
    },
    "customs": {
      "rate": 30,
      "satisfaction": 86,
      "revenue": 218
    },
    "environment": {
      "rate": 24,
      "satisfaction": 88,
      "revenue": 74
    },
    "transit_allied": { "rate": 5, "satisfaction": 85, "revenue": 13 },
    "transit_non_allied": { "rate": 15, "satisfaction": 75, "revenue": 38 },
    "other": {
      "rate": 1,
      "satisfaction": 93,
      "revenue": 6
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  "demand": {
    "satisfaction": 79,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 31,
    "commercial": 18,
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
      "soft_power": 2,
      "hard_power": 11,
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
    "education": 28,
    "security": 11,
    "finance": 11,
    "environment": 60
  }
};
