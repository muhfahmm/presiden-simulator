import { CountryData } from "../../types";

export const jamaika: CountryData = {
  "name_en": "Jamaica",
  "capital": "Kingston",
  "name_id": "Jamaika",
  "lon": -77.5,
  "lat": 18.25,
  "flag": "🇯🇲",
  "pop": "10M",
  "budget": 175,
  "income": "500",
  "religion": "Protestan",
  "ideology": "Demokrasi",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 5,
    "hydro_plant": 15,
    "solar_plant": 30,
    "thermal_plant": 18,
    "gas_plant": 40,
    "wind_plant": 33,
    "power_grid": 67,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 31,
    "subway": 3,
    "railway": 20,
    "highway": 21,
    "road_quality": 52,
    "sea_port": 24,
    "airport": 11,
    "bus_terminal": 22,
    "helipad": 30,
    "internet_coverage": 52,
    "tech_stack": 51,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 24,
    "uranium": 21,
    "coal": 23,
    "oil": 20,
    "gas": 40,
    "salt": 26,
    "nickel": 4,
    "lithium": 40,
    "aluminum": 24,
    "copper": 34,
    "rare_earth": 17,
    "iron_ore": 10,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 19,
    "car": 31,
    "motorcycle": 30,
    "smelter": 36,
    "concrete_cement": 5,
    "wood": 21,
    "mineral_water": 21,
    "sugar": 30,
    "bread": 36,
    "pharmacy": 32,
    "fertilizer": 19,
    "meat_processing": 9,
    "instant_noodle": 26,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 29,
    "poultry": 37,
    "dairy_cow": 39,
    "beef_cow": 5,
    "sheep_goat": 12,
    "shrimp": 27,
    "fish": 10,
    "shellfish": 7,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 35,
    "wheat": 4,
    "corn": 32,
    "tubers": 20,
    "soy": 14,
    "palm_oil": 12,
    "tea": 11,
    "coffee": 13,
    "cocoa": 4,
    "sugarcane": 8,
    "vegetables": 24,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 37,
    "barracks": 36,
    "armory": 19,
    "tank_hangar": 30,
    "military_academy": 10,
    "budget": 707,
    "personnel": 5600,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 10,
        "apc": 21,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 5,
        "kapal_destroyer": 31,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 20,
        "helikopter_serang": 23,
        "pesawat_pengintai": 2
      },
      "total_unit": 16,
      "readiness": 98
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 26,
    "military_air_base": 39,
    "military_naval_base": 33,
    "arms_factory": 21,
    "nuclear_status": false,
    "space_program": 2,
    "cyber_defense": 10,
    "intelligence": 39,
    "strategic_operations": {
      "attack_mission": 14,
      "spy_mission": 31,
      "sabotage_mission": 26,
      "territory_management": 20,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 17,
      "radar_network": 37,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 39,
      "elementary_school": 20,
      "middle_school": 17,
      "high_school": 7,
      "university": 2,
      "education_institute": 21,
      "laboratory": 1,
      "observatory": 7,
      "research_center": 20,
      "development_center": 35,
      "literacy": 58,
      "research_index": 0
    },
    "health": {
      "large_hospital": 28,
      "small_hospital": 9,
      "diagnostic_center": 2,
      "hospital_beds": 9096,
      "life_expectancy": 38,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 24,
      "racing_circuit": 18,
      "stadium": 39,
      "international_stadium": 34,
      "olympic_score": 1,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 11,
      "court": 23,
      "prosecution_office": 1,
      "police_station": 20,
      "police_car_fleet": 9778,
      "police_academy": 39,
      "corruption_index": 77,
      "security_index": 79,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 40,
          "sepeda_motor": 18,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 19,
          "helikopter_polisi": 37,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 16,
          "kamera_surveillance": 19,
          "pusat_forensik": 1
        },
        "response_time": 32,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 3,
    "tanks": 6,
    "aircraft": 10,
    "naval": 17,
    "air_base": 18,
    "naval_base": 32,
    "military_base": 14,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 8,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 34,
      "satisfaction": 67,
      "revenue": 15
    },
    "corporate": {
      "rate": 23,
      "satisfaction": 52,
      "revenue": 6
    },
    "income": {
      "rate": 31,
      "satisfaction": 61,
      "revenue": 6
    },
    "customs": {
      "rate": 36,
      "satisfaction": 86,
      "revenue": 10
    },
    "environment": {
      "rate": 8,
      "satisfaction": 88,
      "revenue": 1
    },
    "transit_allied": { "rate": 5, "satisfaction": 85, "revenue": 1 },
    "transit_non_allied": { "rate": 15, "satisfaction": 75, "revenue": 3 },
    "other": {
      "rate": 9,
      "satisfaction": 93,
      "revenue": 2
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  "demand": {
    "satisfaction": 55,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 10,
    "commercial": 29,
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
      "soft_power": 4,
      "hard_power": 27,
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
    "health": 16,
    "education": 34,
    "security": 35,
    "finance": 14,
    "environment": 60
  }
};
