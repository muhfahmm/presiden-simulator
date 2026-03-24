import { CountryData } from "../../types";

export const estonia: CountryData = {
  "name_en": "Estonia",
  "capital": "Tallinn",
  "name_id": "Estonia",
  "lon": 26,
  "lat": 59,
  "flag": "🇪🇪",
  "pop": "10M",
  "budget": 389,
  "income": "1111",
  "religion": "Protestan",
  "ideology": "Demokrasi",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 32,
    "hydro_plant": 40,
    "solar_plant": 2,
    "thermal_plant": 27,
    "gas_plant": 8,
    "wind_plant": 35,
    "power_grid": 91,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 26,
    "subway": 32,
    "railway": 39,
    "highway": 35,
    "road_quality": 51,
    "sea_port": 18,
    "airport": 14,
    "bus_terminal": 2,
    "helipad": 19,
    "internet_coverage": 59,
    "tech_stack": 78,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 35,
    "uranium": 9,
    "coal": 7,
    "oil": 13,
    "gas": 8,
    "salt": 30,
    "nickel": 21,
    "lithium": 15,
    "aluminum": 33,
    "copper": 40,
    "rare_earth": 27,
    "iron_ore": 14,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 9,
    "car": 15,
    "motorcycle": 6,
    "smelter": 23,
    "concrete_cement": 18,
    "wood": 19,
    "mineral_water": 14,
    "sugar": 3,
    "bread": 25,
    "pharmacy": 12,
    "fertilizer": 11,
    "meat_processing": 27,
    "instant_noodle": 27,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 29,
    "poultry": 26,
    "dairy_cow": 34,
    "beef_cow": 5,
    "sheep_goat": 28,
    "shrimp": 14,
    "fish": 1,
    "shellfish": 9,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 40,
    "wheat": 38,
    "corn": 38,
    "tubers": 34,
    "soy": 14,
    "palm_oil": 29,
    "tea": 19,
    "coffee": 26,
    "cocoa": 1,
    "sugarcane": 34,
    "vegetables": 23,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 40,
    "barracks": 31,
    "armory": 8,
    "tank_hangar": 11,
    "military_academy": 33,
    "budget": 111,
    "personnel": 21911,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 22,
        "apc": 13,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 40,
        "kapal_destroyer": 36,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 4,
        "helikopter_serang": 37,
        "pesawat_pengintai": 2
      },
      "total_unit": 5,
      "readiness": 98
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 33,
    "military_air_base": 18,
    "military_naval_base": 23,
    "arms_factory": 8,
    "nuclear_status": false,
    "space_program": 27,
    "cyber_defense": 7,
    "intelligence": 16,
    "strategic_operations": {
      "attack_mission": 7,
      "spy_mission": 19,
      "sabotage_mission": 8,
      "territory_management": 1,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 9,
      "radar_network": 8,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 20,
      "elementary_school": 1,
      "middle_school": 8,
      "high_school": 19,
      "university": 27,
      "education_institute": 12,
      "laboratory": 8,
      "observatory": 9,
      "research_center": 13,
      "development_center": 20,
      "literacy": 88,
      "research_index": 0
    },
    "health": {
      "large_hospital": 8,
      "small_hospital": 18,
      "diagnostic_center": 10,
      "hospital_beds": 7708,
      "life_expectancy": 32,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 14,
      "racing_circuit": 21,
      "stadium": 20,
      "international_stadium": 30,
      "olympic_score": 10,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 22,
      "court": 12,
      "prosecution_office": 36,
      "police_station": 22,
      "police_car_fleet": 2522,
      "police_academy": 4,
      "corruption_index": 57,
      "security_index": 95,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 25,
          "sepeda_motor": 15,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 25,
          "helikopter_polisi": 18,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 6,
          "kamera_surveillance": 25,
          "pusat_forensik": 1
        },
        "response_time": 17,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 16,
    "tanks": 12,
    "aircraft": 34,
    "naval": 13,
    "air_base": 5,
    "naval_base": 32,
    "military_base": 13,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 18,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 15,
      "satisfaction": 67,
      "revenue": 16
    },
    "corporate": {
      "rate": 40,
      "satisfaction": 52,
      "revenue": 23
    },
    "income": {
      "rate": 1,
      "satisfaction": 61,
      "revenue": 0
    },
    "customs": {
      "rate": 10,
      "satisfaction": 86,
      "revenue": 10
    },
    "environment": {
      "rate": 31,
      "satisfaction": 88,
      "revenue": 31
    },
    "transit_allied": { "rate": 5, "satisfaction": 85, "revenue": 2 },
    "transit_non_allied": { "rate": 15, "satisfaction": 75, "revenue": 6 },
    "other": {
      "rate": 22,
      "satisfaction": 93,
      "revenue": 19
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  "demand": {
    "satisfaction": 67,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 24,
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
      "soft_power": 38,
      "hard_power": 21,
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
    "health": 2,
    "education": 23,
    "security": 14,
    "finance": 12,
    "environment": 60
  }
};
