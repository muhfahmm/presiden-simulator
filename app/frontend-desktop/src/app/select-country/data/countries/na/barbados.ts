import { CountryData } from "../../types";

export const barbados: CountryData = {
  "name_en": "Barbados",
  "capital": "Bridgetown",
  "name_id": "Barbados",
  "lon": -59.53333333,
  "lat": 13.16666666,
  "flag": "🇧🇧",
  "pop": "10M",
  "budget": 53,
  "income": "153",
  "religion": "Protestan",
  "ideology": "Demokrasi",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 14,
    "hydro_plant": 17,
    "solar_plant": 19,
    "thermal_plant": 3,
    "gas_plant": 34,
    "wind_plant": 26,
    "power_grid": 75,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 23,
    "subway": 35,
    "railway": 23,
    "highway": 11,
    "road_quality": 59,
    "sea_port": 3,
    "airport": 30,
    "bus_terminal": 23,
    "helipad": 31,
    "internet_coverage": 54,
    "tech_stack": 68,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 32,
    "uranium": 4,
    "coal": 19,
    "oil": 26,
    "gas": 32,
    "salt": 13,
    "nickel": 30,
    "lithium": 34,
    "aluminum": 26,
    "copper": 27,
    "rare_earth": 1,
    "iron_ore": 39,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 26,
    "car": 28,
    "motorcycle": 14,
    "smelter": 16,
    "concrete_cement": 3,
    "wood": 17,
    "mineral_water": 3,
    "sugar": 36,
    "bread": 17,
    "pharmacy": 33,
    "fertilizer": 30,
    "meat_processing": 36,
    "instant_noodle": 12,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 31,
    "poultry": 38,
    "dairy_cow": 5,
    "beef_cow": 22,
    "sheep_goat": 37,
    "shrimp": 35,
    "fish": 10,
    "shellfish": 32,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 34,
    "wheat": 5,
    "corn": 38,
    "tubers": 21,
    "soy": 13,
    "palm_oil": 34,
    "tea": 7,
    "coffee": 40,
    "cocoa": 19,
    "sugarcane": 3,
    "vegetables": 15,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 15,
    "barracks": 32,
    "armory": 40,
    "tank_hangar": 11,
    "military_academy": 3,
    "budget": 15,
    "personnel": 18644,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 31,
        "apc": 40,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 33,
        "kapal_destroyer": 13,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 6,
        "helikopter_serang": 24,
        "pesawat_pengintai": 2
      },
      "total_unit": 1,
      "readiness": 98
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 36,
    "military_air_base": 9,
    "military_naval_base": 27,
    "arms_factory": 19,
    "nuclear_status": false,
    "space_program": 12,
    "cyber_defense": 28,
    "intelligence": 39,
    "strategic_operations": {
      "attack_mission": 9,
      "spy_mission": 26,
      "sabotage_mission": 11,
      "territory_management": 15,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 35,
      "radar_network": 15,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 7,
      "elementary_school": 15,
      "middle_school": 12,
      "high_school": 18,
      "university": 24,
      "education_institute": 13,
      "laboratory": 19,
      "observatory": 25,
      "research_center": 14,
      "development_center": 1,
      "literacy": 63,
      "research_index": 0
    },
    "health": {
      "large_hospital": 26,
      "small_hospital": 30,
      "diagnostic_center": 21,
      "hospital_beds": 787,
      "life_expectancy": 7,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 36,
      "racing_circuit": 39,
      "stadium": 8,
      "international_stadium": 26,
      "olympic_score": 39,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 23,
      "court": 4,
      "prosecution_office": 39,
      "police_station": 24,
      "police_car_fleet": 3756,
      "police_academy": 17,
      "corruption_index": 83,
      "security_index": 82,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 11,
          "sepeda_motor": 17,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 23,
          "helikopter_polisi": 36,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 19,
          "kamera_surveillance": 19,
          "pusat_forensik": 1
        },
        "response_time": 15,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 20,
    "tanks": 29,
    "aircraft": 34,
    "naval": 38,
    "air_base": 23,
    "naval_base": 13,
    "military_base": 29,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 40,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 19,
      "satisfaction": 67,
      "revenue": 2
    },
    "corporate": {
      "rate": 9,
      "satisfaction": 52,
      "revenue": 0
    },
    "income": {
      "rate": 22,
      "satisfaction": 61,
      "revenue": 2
    },
    "customs": {
      "rate": 37,
      "satisfaction": 86,
      "revenue": 4
    },
    "environment": {
      "rate": 21,
      "satisfaction": 88,
      "revenue": 1
    },
    "transit_allied": { "rate": 5, "satisfaction": 85, "revenue": 1 },
    "transit_non_allied": { "rate": 15, "satisfaction": 75, "revenue": 1 },
    "other": {
      "rate": 20,
      "satisfaction": 93,
      "revenue": 2
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
    "residential": 24,
    "commercial": 39,
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
      "hard_power": 9,
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
    "education": 4,
    "security": 12,
    "finance": 26,
    "environment": 60
  }
};
