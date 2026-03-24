import { CountryData } from "../../types";

export const mongolia: CountryData = {
  "name_en": "Mongolia",
  "capital": "Ulan Bator",
  "name_id": "Mongolia",
  "lon": 105,
  "lat": 46,
  "flag": "🇲🇳",
  "pop": "10M",
  "budget": 175,
  "income": "500",
  "religion": "Buddha",
  "ideology": "Demokrasi",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 33,
    "hydro_plant": 3,
    "solar_plant": 1,
    "thermal_plant": 24,
    "gas_plant": 40,
    "wind_plant": 38,
    "power_grid": 52,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 12,
    "subway": 17,
    "railway": 37,
    "highway": 33,
    "road_quality": 80,
    "sea_port": 40,
    "airport": 32,
    "bus_terminal": 12,
    "helipad": 23,
    "internet_coverage": 86,
    "tech_stack": 62,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 30,
    "uranium": 39,
    "coal": 33,
    "oil": 4,
    "gas": 31,
    "salt": 7,
    "nickel": 15,
    "lithium": 20,
    "aluminum": 35,
    "copper": 17,
    "rare_earth": 9,
    "iron_ore": 15,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 26,
    "car": 16,
    "motorcycle": 32,
    "smelter": 16,
    "concrete_cement": 28,
    "wood": 22,
    "mineral_water": 22,
    "sugar": 4,
    "bread": 34,
    "pharmacy": 21,
    "fertilizer": 20,
    "meat_processing": 28,
    "instant_noodle": 14,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 32,
    "poultry": 7,
    "dairy_cow": 4,
    "beef_cow": 20,
    "sheep_goat": 30,
    "shrimp": 33,
    "fish": 33,
    "shellfish": 23,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 20,
    "wheat": 21,
    "corn": 12,
    "tubers": 35,
    "soy": 23,
    "palm_oil": 18,
    "tea": 26,
    "coffee": 27,
    "cocoa": 37,
    "sugarcane": 17,
    "vegetables": 40,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 30,
    "barracks": 39,
    "armory": 16,
    "tank_hangar": 38,
    "military_academy": 34,
    "budget": 28,
    "personnel": 20325,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 50,
        "apc": 148,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 4,
        "kapal_destroyer": 80,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 139,
        "helikopter_serang": 94,
        "pesawat_pengintai": 2
      },
      "total_unit": 9,
      "readiness": 98
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 29,
    "military_air_base": 21,
    "military_naval_base": 13,
    "arms_factory": 7,
    "nuclear_status": false,
    "space_program": 31,
    "cyber_defense": 16,
    "intelligence": 33,
    "strategic_operations": {
      "attack_mission": 4,
      "spy_mission": 35,
      "sabotage_mission": 33,
      "territory_management": 4,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 0,
      "radar_network": 3,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 11,
      "elementary_school": 22,
      "middle_school": 1,
      "high_school": 3,
      "university": 40,
      "education_institute": 31,
      "laboratory": 25,
      "observatory": 28,
      "research_center": 3,
      "development_center": 28,
      "literacy": 57,
      "research_index": 0
    },
    "health": {
      "large_hospital": 3,
      "small_hospital": 1,
      "diagnostic_center": 28,
      "hospital_beds": 4807,
      "life_expectancy": 37,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 5,
      "racing_circuit": 11,
      "stadium": 40,
      "international_stadium": 37,
      "olympic_score": 31,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 26,
      "court": 39,
      "prosecution_office": 3,
      "police_station": 1,
      "police_car_fleet": 5711,
      "police_academy": 14,
      "corruption_index": 87,
      "security_index": 78,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 14,
          "sepeda_motor": 30,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 17,
          "helikopter_polisi": 22,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 12,
          "kamera_surveillance": 40,
          "pusat_forensik": 1
        },
        "response_time": 31,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 23,
    "tanks": 2,
    "aircraft": 6,
    "naval": 38,
    "air_base": 28,
    "naval_base": 23,
    "military_base": 9,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 6,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 25,
      "satisfaction": 67,
      "revenue": 10
    },
    "corporate": {
      "rate": 40,
      "satisfaction": 52,
      "revenue": 13
    },
    "income": {
      "rate": 23,
      "satisfaction": 61,
      "revenue": 11
    },
    "customs": {
      "rate": 26,
      "satisfaction": 86,
      "revenue": 7
    },
    "environment": {
      "rate": 37,
      "satisfaction": 88,
      "revenue": 16
    },
    "transit_allied": { "rate": 5, "satisfaction": 85, "revenue": 1 },
    "transit_non_allied": { "rate": 15, "satisfaction": 75, "revenue": 3 },
    "other": {
      "rate": 7,
      "satisfaction": 93,
      "revenue": 1
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  "demand": {
    "satisfaction": 54,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 24,
    "commercial": 3,
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
      "soft_power": 34,
      "hard_power": 15,
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
    "health": 31,
    "education": 6,
    "security": 23,
    "finance": 32,
    "environment": 60
  }
};
