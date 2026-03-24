import { CountryData } from "../../types";

export const antigua_dan_barbuda: CountryData = {
  "name_en": "Antigua and Barbuda",
  "capital": "Saint John's",
  "name_id": "Antigua dan Barbuda",
  "lon": -61.84,
  "lat": 17.11,
  "flag": "🇦🇬",
  "pop": "6M",
  "budget": 97,
  "income": "278",
  "religion": "Katolik",
  "ideology": "Demokrasi",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 14,
    "hydro_plant": 38,
    "solar_plant": 2,
    "thermal_plant": 39,
    "gas_plant": 4,
    "wind_plant": 32,
    "power_grid": 83,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 13,
    "subway": 32,
    "railway": 3,
    "highway": 6,
    "road_quality": 76,
    "sea_port": 12,
    "airport": 29,
    "bus_terminal": 12,
    "helipad": 19,
    "internet_coverage": 86,
    "tech_stack": 72,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 11,
    "uranium": 33,
    "coal": 16,
    "oil": 21,
    "gas": 7,
    "salt": 15,
    "nickel": 38,
    "lithium": 26,
    "aluminum": 14,
    "copper": 4,
    "rare_earth": 25,
    "iron_ore": 2,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 33,
    "car": 1,
    "motorcycle": 16,
    "smelter": 16,
    "concrete_cement": 2,
    "wood": 25,
    "mineral_water": 6,
    "sugar": 7,
    "bread": 32,
    "pharmacy": 8,
    "fertilizer": 22,
    "meat_processing": 27,
    "instant_noodle": 19,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 19,
    "poultry": 36,
    "dairy_cow": 7,
    "beef_cow": 40,
    "sheep_goat": 3,
    "shrimp": 24,
    "fish": 4,
    "shellfish": 23,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 36,
    "wheat": 5,
    "corn": 35,
    "tubers": 7,
    "soy": 29,
    "palm_oil": 34,
    "tea": 22,
    "coffee": 13,
    "cocoa": 13,
    "sugarcane": 24,
    "vegetables": 16,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 13,
    "barracks": 4,
    "armory": 8,
    "tank_hangar": 7,
    "military_academy": 13,
    "budget": 27,
    "personnel": 16148,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 25,
        "apc": 20,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 18,
        "kapal_destroyer": 18,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 6,
        "helikopter_serang": 34,
        "pesawat_pengintai": 2
      },
      "total_unit": 7,
      "readiness": 98
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 40,
    "military_air_base": 21,
    "military_naval_base": 33,
    "arms_factory": 4,
    "nuclear_status": false,
    "space_program": 31,
    "cyber_defense": 22,
    "intelligence": 9,
    "strategic_operations": {
      "attack_mission": 17,
      "spy_mission": 11,
      "sabotage_mission": 25,
      "territory_management": 29,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 21,
      "radar_network": 40,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 12,
      "elementary_school": 40,
      "middle_school": 2,
      "high_school": 13,
      "university": 3,
      "education_institute": 30,
      "laboratory": 33,
      "observatory": 39,
      "research_center": 2,
      "development_center": 38,
      "literacy": 95,
      "research_index": 0
    },
    "health": {
      "large_hospital": 1,
      "small_hospital": 34,
      "diagnostic_center": 19,
      "hospital_beds": 500,
      "life_expectancy": 14,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 5,
      "racing_circuit": 40,
      "stadium": 23,
      "international_stadium": 32,
      "olympic_score": 36,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 3,
      "court": 15,
      "prosecution_office": 39,
      "police_station": 20,
      "police_car_fleet": 1019,
      "police_academy": 32,
      "corruption_index": 52,
      "security_index": 83,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 39,
          "sepeda_motor": 6,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 20,
          "helikopter_polisi": 35,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 4,
          "kamera_surveillance": 40,
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
    "infantry": 36,
    "tanks": 1,
    "aircraft": 38,
    "naval": 28,
    "air_base": 30,
    "naval_base": 29,
    "military_base": 8,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 36,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 21,
      "satisfaction": 67,
      "revenue": 3
    },
    "corporate": {
      "rate": 37,
      "satisfaction": 52,
      "revenue": 5
    },
    "income": {
      "rate": 15,
      "satisfaction": 61,
      "revenue": 2
    },
    "customs": {
      "rate": 25,
      "satisfaction": 86,
      "revenue": 5
    },
    "environment": {
      "rate": 32,
      "satisfaction": 88,
      "revenue": 6
    },
    "transit_allied": { "rate": 5, "satisfaction": 85, "revenue": 1 },
    "transit_non_allied": { "rate": 15, "satisfaction": 75, "revenue": 2 },
    "other": {
      "rate": 40,
      "satisfaction": 93,
      "revenue": 9
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  "demand": {
    "satisfaction": 71,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 37,
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
      "soft_power": 14,
      "hard_power": 3,
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
    "health": 30,
    "education": 7,
    "security": 11,
    "finance": 27,
    "environment": 60
  }
};
