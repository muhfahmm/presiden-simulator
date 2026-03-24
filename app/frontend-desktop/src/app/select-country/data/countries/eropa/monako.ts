import { CountryData } from "../../types";

export const monako: CountryData = {
  "name_en": "Monaco",
  "capital": "Monaco",
  "name_id": "Monako",
  "lon": 7.4,
  "lat": 43.73333333,
  "flag": "🇲🇨",
  "pop": "10M",
  "budget": 97,
  "income": "278",
  "religion": "Katolik",
  "ideology": "Monarki",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 6,
    "hydro_plant": 8,
    "solar_plant": 21,
    "thermal_plant": 20,
    "gas_plant": 33,
    "wind_plant": 34,
    "power_grid": 80,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 13,
    "subway": 9,
    "railway": 25,
    "highway": 15,
    "road_quality": 81,
    "sea_port": 36,
    "airport": 13,
    "bus_terminal": 33,
    "helipad": 31,
    "internet_coverage": 57,
    "tech_stack": 82,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 34,
    "uranium": 24,
    "coal": 28,
    "oil": 33,
    "gas": 17,
    "salt": 13,
    "nickel": 32,
    "lithium": 32,
    "aluminum": 9,
    "copper": 18,
    "rare_earth": 29,
    "iron_ore": 24,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 10,
    "car": 17,
    "motorcycle": 16,
    "smelter": 13,
    "concrete_cement": 5,
    "wood": 8,
    "mineral_water": 13,
    "sugar": 37,
    "bread": 7,
    "pharmacy": 36,
    "fertilizer": 37,
    "meat_processing": 32,
    "instant_noodle": 32,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 38,
    "poultry": 25,
    "dairy_cow": 5,
    "beef_cow": 38,
    "sheep_goat": 17,
    "shrimp": 14,
    "fish": 26,
    "shellfish": 21,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 14,
    "wheat": 31,
    "corn": 34,
    "tubers": 34,
    "soy": 37,
    "palm_oil": 12,
    "tea": 4,
    "coffee": 21,
    "cocoa": 2,
    "sugarcane": 40,
    "vegetables": 27,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 13,
    "barracks": 13,
    "armory": 21,
    "tank_hangar": 4,
    "military_academy": 6,
    "budget": 27,
    "personnel": 5709,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 183,
        "apc": 61,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 38,
        "kapal_destroyer": 179,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 32,
        "helikopter_serang": 183,
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
    "command_center": 30,
    "military_air_base": 22,
    "military_naval_base": 15,
    "arms_factory": 33,
    "nuclear_status": false,
    "space_program": 24,
    "cyber_defense": 28,
    "intelligence": 28,
    "strategic_operations": {
      "attack_mission": 8,
      "spy_mission": 23,
      "sabotage_mission": 38,
      "territory_management": 11,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 2,
      "radar_network": 5,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 4,
      "elementary_school": 22,
      "middle_school": 32,
      "high_school": 16,
      "university": 1,
      "education_institute": 30,
      "laboratory": 18,
      "observatory": 9,
      "research_center": 23,
      "development_center": 37,
      "literacy": 68,
      "research_index": 0
    },
    "health": {
      "large_hospital": 33,
      "small_hospital": 1,
      "diagnostic_center": 34,
      "hospital_beds": 7403,
      "life_expectancy": 3,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 10,
      "racing_circuit": 19,
      "stadium": 3,
      "international_stadium": 25,
      "olympic_score": 25,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 33,
      "court": 34,
      "prosecution_office": 13,
      "police_station": 24,
      "police_car_fleet": 4137,
      "police_academy": 22,
      "corruption_index": 67,
      "security_index": 81,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 32,
          "sepeda_motor": 29,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 8,
          "helikopter_polisi": 20,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 37,
          "kamera_surveillance": 24,
          "pusat_forensik": 1
        },
        "response_time": 2,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 9,
    "tanks": 32,
    "aircraft": 35,
    "naval": 39,
    "air_base": 27,
    "naval_base": 12,
    "military_base": 38,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 37,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 40,
      "satisfaction": 67,
      "revenue": 4
    },
    "corporate": {
      "rate": 10,
      "satisfaction": 52,
      "revenue": 2
    },
    "income": {
      "rate": 28,
      "satisfaction": 61,
      "revenue": 6
    },
    "customs": {
      "rate": 29,
      "satisfaction": 86,
      "revenue": 3
    },
    "environment": {
      "rate": 28,
      "satisfaction": 88,
      "revenue": 3
    },
    "transit_allied": { "rate": 5, "satisfaction": 85, "revenue": 1 },
    "transit_non_allied": { "rate": 15, "satisfaction": 75, "revenue": 2 },
    "other": {
      "rate": 7,
      "satisfaction": 93,
      "revenue": 0
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  "demand": {
    "satisfaction": 52,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 1,
    "commercial": 16,
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
      "soft_power": 29,
      "hard_power": 24,
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
    "education": 25,
    "security": 30,
    "finance": 5,
    "environment": 60
  }
};
