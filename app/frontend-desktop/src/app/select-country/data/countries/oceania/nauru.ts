import { CountryData } from "../../types";

export const nauru: CountryData = {
  "name_en": "Nauru",
  "capital": "Yaren",
  "name_id": "Nauru",
  "lon": 166.91666666,
  "lat": -0.53333333,
  "flag": "🇳🇷",
  "pop": "10M",
  "budget": 10,
  "income": "15",
  "religion": "Protestan",
  "ideology": "Demokrasi",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 36,
    "hydro_plant": 4,
    "solar_plant": 25,
    "thermal_plant": 16,
    "gas_plant": 31,
    "wind_plant": 6,
    "power_grid": 73,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 4,
    "subway": 21,
    "railway": 35,
    "highway": 18,
    "road_quality": 63,
    "sea_port": 22,
    "airport": 30,
    "bus_terminal": 40,
    "helipad": 33,
    "internet_coverage": 79,
    "tech_stack": 67,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 15,
    "uranium": 38,
    "coal": 21,
    "oil": 19,
    "gas": 37,
    "salt": 7,
    "nickel": 18,
    "lithium": 39,
    "aluminum": 8,
    "copper": 1,
    "rare_earth": 33,
    "iron_ore": 32,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 30,
    "car": 19,
    "motorcycle": 23,
    "smelter": 16,
    "concrete_cement": 21,
    "wood": 30,
    "mineral_water": 21,
    "sugar": 23,
    "bread": 29,
    "pharmacy": 20,
    "fertilizer": 20,
    "meat_processing": 34,
    "instant_noodle": 5,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 35,
    "poultry": 32,
    "dairy_cow": 31,
    "beef_cow": 22,
    "sheep_goat": 34,
    "shrimp": 32,
    "fish": 18,
    "shellfish": 34,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 1,
    "wheat": 18,
    "corn": 36,
    "tubers": 35,
    "soy": 7,
    "palm_oil": 8,
    "tea": 12,
    "coffee": 10,
    "cocoa": 29,
    "sugarcane": 17,
    "vegetables": 11,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 34,
    "barracks": 40,
    "armory": 37,
    "tank_hangar": 13,
    "military_academy": 25,
    "budget": 1,
    "personnel": 21961,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 146,
        "apc": 99,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 1,
        "kapal_destroyer": 34,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 169,
        "helikopter_serang": 62,
        "pesawat_pengintai": 2
      },
      "total_unit": 31,
      "readiness": 98
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 18,
    "military_air_base": 1,
    "military_naval_base": 5,
    "arms_factory": 11,
    "nuclear_status": false,
    "space_program": 23,
    "cyber_defense": 1,
    "intelligence": 24,
    "strategic_operations": {
      "attack_mission": 25,
      "spy_mission": 34,
      "sabotage_mission": 9,
      "territory_management": 6,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 1,
      "radar_network": 5,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 28,
      "elementary_school": 7,
      "middle_school": 7,
      "high_school": 21,
      "university": 4,
      "education_institute": 3,
      "laboratory": 1,
      "observatory": 30,
      "research_center": 14,
      "development_center": 15,
      "literacy": 61,
      "research_index": 0
    },
    "health": {
      "large_hospital": 36,
      "small_hospital": 9,
      "diagnostic_center": 25,
      "hospital_beds": 6572,
      "life_expectancy": 25,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 27,
      "racing_circuit": 11,
      "stadium": 23,
      "international_stadium": 30,
      "olympic_score": 11,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 37,
      "court": 24,
      "prosecution_office": 2,
      "police_station": 7,
      "police_car_fleet": 1388,
      "police_academy": 29,
      "corruption_index": 73,
      "security_index": 65,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 12,
          "sepeda_motor": 33,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 24,
          "helikopter_polisi": 20,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 33,
          "kamera_surveillance": 7,
          "pusat_forensik": 1
        },
        "response_time": 3,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 37,
    "tanks": 6,
    "aircraft": 9,
    "naval": 30,
    "air_base": 40,
    "naval_base": 18,
    "military_base": 14,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 17,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 18,
      "satisfaction": 67,
      "revenue": 0
    },
    "corporate": {
      "rate": 16,
      "satisfaction": 52,
      "revenue": 0
    },
    "income": {
      "rate": 25,
      "satisfaction": 61,
      "revenue": 0
    },
    "customs": {
      "rate": 34,
      "satisfaction": 86,
      "revenue": 0
    },
    "environment": {
      "rate": 10,
      "satisfaction": 88,
      "revenue": 0
    },
    "transit_allied": { "rate": 5, "satisfaction": 85, "revenue": 1 },
    "transit_non_allied": { "rate": 15, "satisfaction": 75, "revenue": 1 },
    "other": {
      "rate": 32,
      "satisfaction": 93,
      "revenue": 0
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  "demand": {
    "satisfaction": 95,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 33,
    "commercial": 34,
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
      "soft_power": 23,
      "hard_power": 36,
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
    "health": 37,
    "education": 29,
    "security": 5,
    "finance": 9,
    "environment": 60
  }
};
