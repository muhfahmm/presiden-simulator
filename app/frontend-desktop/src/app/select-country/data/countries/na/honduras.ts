import { CountryData } from "../../types";

export const honduras: CountryData = {
  "name_en": "Honduras",
  "capital": "Tegucigalpa",
  "name_id": "Honduras",
  "lon": -86.5,
  "lat": 15,
  "flag": "🇭🇳",
  "pop": "10M",
  "budget": 311,
  "income": "889",
  "religion": "Katolik",
  "ideology": "Demokrasi",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 13,
    "hydro_plant": 5,
    "solar_plant": 33,
    "thermal_plant": 2,
    "gas_plant": 16,
    "wind_plant": 36,
    "power_grid": 92,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 16,
    "subway": 36,
    "railway": 7,
    "highway": 13,
    "road_quality": 91,
    "sea_port": 17,
    "airport": 1,
    "bus_terminal": 21,
    "helipad": 18,
    "internet_coverage": 78,
    "tech_stack": 54,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 31,
    "uranium": 25,
    "coal": 23,
    "oil": 29,
    "gas": 5,
    "salt": 32,
    "nickel": 11,
    "lithium": 33,
    "aluminum": 21,
    "copper": 6,
    "rare_earth": 39,
    "iron_ore": 31,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 14,
    "car": 33,
    "motorcycle": 27,
    "smelter": 20,
    "concrete_cement": 23,
    "wood": 27,
    "mineral_water": 27,
    "sugar": 38,
    "bread": 23,
    "pharmacy": 19,
    "fertilizer": 13,
    "meat_processing": 19,
    "instant_noodle": 22,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 24,
    "poultry": 20,
    "dairy_cow": 13,
    "beef_cow": 11,
    "sheep_goat": 10,
    "shrimp": 2,
    "fish": 6,
    "shellfish": 19,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 9,
    "wheat": 25,
    "corn": 38,
    "tubers": 34,
    "soy": 32,
    "palm_oil": 26,
    "tea": 12,
    "coffee": 11,
    "cocoa": 27,
    "sugarcane": 34,
    "vegetables": 6,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 4,
    "barracks": 11,
    "armory": 37,
    "tank_hangar": 12,
    "military_academy": 35,
    "budget": 88,
    "personnel": 10512,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 39,
        "apc": 1,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 35,
        "kapal_destroyer": 17,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 4,
        "helikopter_serang": 28,
        "pesawat_pengintai": 2
      },
      "total_unit": 27,
      "readiness": 98
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 30,
    "military_air_base": 26,
    "military_naval_base": 21,
    "arms_factory": 1,
    "nuclear_status": false,
    "space_program": 29,
    "cyber_defense": 4,
    "intelligence": 19,
    "strategic_operations": {
      "attack_mission": 16,
      "spy_mission": 19,
      "sabotage_mission": 33,
      "territory_management": 38,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 16,
      "radar_network": 39,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 18,
      "elementary_school": 35,
      "middle_school": 7,
      "high_school": 7,
      "university": 6,
      "education_institute": 14,
      "laboratory": 24,
      "observatory": 29,
      "research_center": 39,
      "development_center": 22,
      "literacy": 90,
      "research_index": 0
    },
    "health": {
      "large_hospital": 6,
      "small_hospital": 8,
      "diagnostic_center": 24,
      "hospital_beds": 8854,
      "life_expectancy": 38,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 19,
      "racing_circuit": 9,
      "stadium": 11,
      "international_stadium": 13,
      "olympic_score": 2,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 34,
      "court": 29,
      "prosecution_office": 20,
      "police_station": 26,
      "police_car_fleet": 8337,
      "police_academy": 39,
      "corruption_index": 75,
      "security_index": 82,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 38,
          "sepeda_motor": 6,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 26,
          "helikopter_polisi": 22,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 27,
          "kamera_surveillance": 17,
          "pusat_forensik": 1
        },
        "response_time": 19,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 3,
    "tanks": 16,
    "aircraft": 5,
    "naval": 29,
    "air_base": 1,
    "naval_base": 31,
    "military_base": 8,
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
      "rate": 38,
      "satisfaction": 67,
      "revenue": 17
    },
    "corporate": {
      "rate": 25,
      "satisfaction": 52,
      "revenue": 18
    },
    "income": {
      "rate": 16,
      "satisfaction": 61,
      "revenue": 7
    },
    "customs": {
      "rate": 25,
      "satisfaction": 86,
      "revenue": 16
    },
    "environment": {
      "rate": 8,
      "satisfaction": 88,
      "revenue": 7
    },
    "transit_allied": { "rate": 5, "satisfaction": 85, "revenue": 2 },
    "transit_non_allied": { "rate": 15, "satisfaction": 75, "revenue": 5 },
    "other": {
      "rate": 16,
      "satisfaction": 93,
      "revenue": 13
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
    "residential": 13,
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
      "soft_power": 35,
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
    "health": 21,
    "education": 4,
    "security": 14,
    "finance": 21,
    "environment": 60
  }
};
