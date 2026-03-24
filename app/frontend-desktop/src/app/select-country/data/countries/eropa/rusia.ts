import { CountryData } from "../../types";

export const rusia: CountryData = {
  "name_en": "Russia",
  "capital": "Moscow",
  "name_id": "Rusia",
  "lon": 100,
  "lat": 60,
  "flag": "🇷🇺",
  "pop": "10M",
  "budget": 19640,
  "income": "56116",
  "religion": "Kristen Ortodoks",
  "ideology": "Nasionalisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 33,
    "hydro_plant": 32,
    "solar_plant": 25,
    "thermal_plant": 7,
    "gas_plant": 9,
    "wind_plant": 16,
    "power_grid": 90,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 4,
    "subway": 1,
    "railway": 21,
    "highway": 36,
    "road_quality": 87,
    "sea_port": 32,
    "airport": 31,
    "bus_terminal": 23,
    "helipad": 37,
    "internet_coverage": 81,
    "tech_stack": 60,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 17,
    "uranium": 9,
    "coal": 23,
    "oil": 35,
    "gas": 7,
    "salt": 26,
    "nickel": 6,
    "lithium": 32,
    "aluminum": 15,
    "copper": 27,
    "rare_earth": 35,
    "iron_ore": 24,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 16,
    "car": 11,
    "motorcycle": 28,
    "smelter": 36,
    "concrete_cement": 35,
    "wood": 20,
    "mineral_water": 22,
    "sugar": 27,
    "bread": 33,
    "pharmacy": 32,
    "fertilizer": 12,
    "meat_processing": 22,
    "instant_noodle": 5,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 33,
    "poultry": 39,
    "dairy_cow": 39,
    "beef_cow": 8,
    "sheep_goat": 12,
    "shrimp": 27,
    "fish": 28,
    "shellfish": 1,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 35,
    "wheat": 26,
    "corn": 2,
    "tubers": 34,
    "soy": 37,
    "palm_oil": 10,
    "tea": 10,
    "coffee": 3,
    "cocoa": 28,
    "sugarcane": 17,
    "vegetables": 20,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 15,
    "barracks": 11,
    "armory": 27,
    "tank_hangar": 22,
    "military_academy": 31,
    "budget": 5611,
    "personnel": 10237,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 17,
        "apc": 142,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 33,
        "kapal_destroyer": 19,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 189,
        "helikopter_serang": 33,
        "pesawat_pengintai": 2
      },
      "total_unit": 2,
      "readiness": 98
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 22,
    "military_air_base": 22,
    "military_naval_base": 18,
    "arms_factory": 13,
    "nuclear_status": false,
    "space_program": 32,
    "cyber_defense": 20,
    "intelligence": 15,
    "strategic_operations": {
      "attack_mission": 10,
      "spy_mission": 36,
      "sabotage_mission": 7,
      "territory_management": 37,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 3,
      "radar_network": 0,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 12,
      "elementary_school": 37,
      "middle_school": 12,
      "high_school": 2,
      "university": 15,
      "education_institute": 37,
      "laboratory": 26,
      "observatory": 34,
      "research_center": 29,
      "development_center": 8,
      "literacy": 87,
      "research_index": 0
    },
    "health": {
      "large_hospital": 12,
      "small_hospital": 29,
      "diagnostic_center": 29,
      "hospital_beds": 7697,
      "life_expectancy": 35,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 24,
      "racing_circuit": 2,
      "stadium": 14,
      "international_stadium": 17,
      "olympic_score": 1,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 26,
      "court": 27,
      "prosecution_office": 3,
      "police_station": 11,
      "police_car_fleet": 6612,
      "police_academy": 24,
      "corruption_index": 75,
      "security_index": 72,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 21,
          "sepeda_motor": 35,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 17,
          "helikopter_polisi": 31,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 23,
          "kamera_surveillance": 13,
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
    "infantry": 30,
    "tanks": 14,
    "aircraft": 21,
    "naval": 17,
    "air_base": 20,
    "naval_base": 31,
    "military_base": 10,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 29,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 40,
      "satisfaction": 67,
      "revenue": 1161
    },
    "corporate": {
      "rate": 10,
      "satisfaction": 52,
      "revenue": 241
    },
    "income": {
      "rate": 24,
      "satisfaction": 61,
      "revenue": 1042
    },
    "customs": {
      "rate": 25,
      "satisfaction": 86,
      "revenue": 983
    },
    "environment": {
      "rate": 33,
      "satisfaction": 88,
      "revenue": 1412
    },
    "transit_allied": { "rate": 5, "satisfaction": 85, "revenue": 99 },
    "transit_non_allied": { "rate": 15, "satisfaction": 75, "revenue": 295 },
    "other": {
      "rate": 26,
      "satisfaction": 93,
      "revenue": 1274
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  "demand": {
    "satisfaction": 62,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 6,
    "commercial": 4,
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
      "hard_power": 12,
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
    "health": 7,
    "education": 14,
    "security": 20,
    "finance": 1,
    "environment": 60
  }
};
