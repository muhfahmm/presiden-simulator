import { CountryData } from "../../types";

export const greenland: CountryData = {
  "name_en": "Greenland",
  "capital": "Nuuk",
  "name_id": "Greenland",
  "lon": -40,
  "lat": 72,
  "flag": "🇬🇱",
  "pop": "10M",
  "budget": 97,
  "income": "278",
  "religion": "Protestan",
  "ideology": "Demokrasi",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 27,
    "hydro_plant": 9,
    "solar_plant": 21,
    "thermal_plant": 4,
    "gas_plant": 40,
    "wind_plant": 25,
    "power_grid": 89,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 35,
    "subway": 20,
    "railway": 33,
    "highway": 1,
    "road_quality": 69,
    "sea_port": 6,
    "airport": 6,
    "bus_terminal": 25,
    "helipad": 27,
    "internet_coverage": 94,
    "tech_stack": 71,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 24,
    "uranium": 29,
    "coal": 24,
    "oil": 39,
    "gas": 16,
    "salt": 25,
    "nickel": 3,
    "lithium": 26,
    "aluminum": 32,
    "copper": 12,
    "rare_earth": 10,
    "iron_ore": 17,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 21,
    "car": 30,
    "motorcycle": 20,
    "smelter": 21,
    "concrete_cement": 25,
    "wood": 39,
    "mineral_water": 23,
    "sugar": 10,
    "bread": 24,
    "pharmacy": 1,
    "fertilizer": 7,
    "meat_processing": 24,
    "instant_noodle": 11,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 8,
    "poultry": 3,
    "dairy_cow": 29,
    "beef_cow": 33,
    "sheep_goat": 3,
    "shrimp": 6,
    "fish": 14,
    "shellfish": 23,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 32,
    "wheat": 17,
    "corn": 31,
    "tubers": 28,
    "soy": 13,
    "palm_oil": 27,
    "tea": 28,
    "coffee": 29,
    "cocoa": 22,
    "sugarcane": 4,
    "vegetables": 31,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 2,
    "barracks": 31,
    "armory": 6,
    "tank_hangar": 11,
    "military_academy": 30,
    "budget": 27,
    "personnel": 5611,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 164,
        "apc": 78,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 11,
        "kapal_destroyer": 195,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 60,
        "helikopter_serang": 48,
        "pesawat_pengintai": 2
      },
      "total_unit": 39,
      "readiness": 98
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 23,
    "military_air_base": 40,
    "military_naval_base": 31,
    "arms_factory": 1,
    "nuclear_status": false,
    "space_program": 26,
    "cyber_defense": 19,
    "intelligence": 3,
    "strategic_operations": {
      "attack_mission": 28,
      "spy_mission": 36,
      "sabotage_mission": 4,
      "territory_management": 20,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 4,
      "radar_network": 5,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 5,
      "elementary_school": 22,
      "middle_school": 27,
      "high_school": 1,
      "university": 29,
      "education_institute": 21,
      "laboratory": 11,
      "observatory": 14,
      "research_center": 4,
      "development_center": 10,
      "literacy": 81,
      "research_index": 0
    },
    "health": {
      "large_hospital": 20,
      "small_hospital": 10,
      "diagnostic_center": 22,
      "hospital_beds": 7955,
      "life_expectancy": 11,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 30,
      "racing_circuit": 16,
      "stadium": 2,
      "international_stadium": 17,
      "olympic_score": 4,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 40,
      "court": 8,
      "prosecution_office": 16,
      "police_station": 32,
      "police_car_fleet": 8496,
      "police_academy": 24,
      "corruption_index": 66,
      "security_index": 50,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 35,
          "sepeda_motor": 3,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 37,
          "helikopter_polisi": 34,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 5,
          "kamera_surveillance": 32,
          "pusat_forensik": 1
        },
        "response_time": 18,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 19,
    "tanks": 26,
    "aircraft": 36,
    "naval": 8,
    "air_base": 28,
    "naval_base": 17,
    "military_base": 25,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 3,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 36,
      "satisfaction": 67,
      "revenue": 8
    },
    "corporate": {
      "rate": 37,
      "satisfaction": 52,
      "revenue": 8
    },
    "income": {
      "rate": 26,
      "satisfaction": 61,
      "revenue": 5
    },
    "customs": {
      "rate": 1,
      "satisfaction": 86,
      "revenue": 0
    },
    "environment": {
      "rate": 23,
      "satisfaction": 88,
      "revenue": 3
    },
    "transit_allied": { "rate": 5, "satisfaction": 85, "revenue": 1 },
    "transit_non_allied": { "rate": 15, "satisfaction": 75, "revenue": 2 },
    "other": {
      "rate": 35,
      "satisfaction": 93,
      "revenue": 5
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  "demand": {
    "satisfaction": 60,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 16,
    "commercial": 17,
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
      "soft_power": 6,
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
    "health": 40,
    "education": 18,
    "security": 38,
    "finance": 32,
    "environment": 60
  }
};
