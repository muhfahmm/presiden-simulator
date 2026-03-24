import { CountryData } from "../../types";

export const norwegia: CountryData = {
  "name_en": "Norway",
  "capital": "Oslo",
  "name_id": "Norwegia",
  "lon": 10,
  "lat": 62,
  "flag": "🇳🇴",
  "pop": "10M",
  "budget": 5639,
  "income": "16112",
  "religion": "Protestan",
  "ideology": "Sosialisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 40,
    "hydro_plant": 7,
    "solar_plant": 10,
    "thermal_plant": 24,
    "gas_plant": 8,
    "wind_plant": 5,
    "power_grid": 78,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 31,
    "subway": 31,
    "railway": 7,
    "highway": 9,
    "road_quality": 87,
    "sea_port": 39,
    "airport": 17,
    "bus_terminal": 16,
    "helipad": 23,
    "internet_coverage": 67,
    "tech_stack": 53,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 11,
    "uranium": 11,
    "coal": 12,
    "oil": 24,
    "gas": 6,
    "salt": 8,
    "nickel": 24,
    "lithium": 10,
    "aluminum": 32,
    "copper": 40,
    "rare_earth": 12,
    "iron_ore": 31,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 32,
    "car": 5,
    "motorcycle": 16,
    "smelter": 21,
    "concrete_cement": 5,
    "wood": 30,
    "mineral_water": 33,
    "sugar": 37,
    "bread": 12,
    "pharmacy": 17,
    "fertilizer": 12,
    "meat_processing": 17,
    "instant_noodle": 23,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 37,
    "poultry": 25,
    "dairy_cow": 18,
    "beef_cow": 22,
    "sheep_goat": 7,
    "shrimp": 40,
    "fish": 11,
    "shellfish": 17,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 31,
    "wheat": 11,
    "corn": 33,
    "tubers": 37,
    "soy": 2,
    "palm_oil": 20,
    "tea": 22,
    "coffee": 24,
    "cocoa": 25,
    "sugarcane": 34,
    "vegetables": 17,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 15,
    "barracks": 40,
    "armory": 10,
    "tank_hangar": 9,
    "military_academy": 20,
    "budget": 1611,
    "personnel": 27689,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 122,
        "apc": 72,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 11,
        "kapal_destroyer": 100,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 120,
        "helikopter_serang": 198,
        "pesawat_pengintai": 2
      },
      "total_unit": 33,
      "readiness": 98
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 24,
    "military_air_base": 5,
    "military_naval_base": 7,
    "arms_factory": 12,
    "nuclear_status": false,
    "space_program": 7,
    "cyber_defense": 14,
    "intelligence": 17,
    "strategic_operations": {
      "attack_mission": 4,
      "spy_mission": 7,
      "sabotage_mission": 39,
      "territory_management": 4,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 2,
      "radar_network": 0,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 1,
      "elementary_school": 26,
      "middle_school": 9,
      "high_school": 13,
      "university": 1,
      "education_institute": 20,
      "laboratory": 19,
      "observatory": 36,
      "research_center": 5,
      "development_center": 13,
      "literacy": 82,
      "research_index": 0
    },
    "health": {
      "large_hospital": 14,
      "small_hospital": 37,
      "diagnostic_center": 22,
      "hospital_beds": 2427,
      "life_expectancy": 27,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 24,
      "racing_circuit": 22,
      "stadium": 40,
      "international_stadium": 25,
      "olympic_score": 11,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 16,
      "court": 34,
      "prosecution_office": 29,
      "police_station": 4,
      "police_car_fleet": 1953,
      "police_academy": 32,
      "corruption_index": 76,
      "security_index": 82,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 33,
          "sepeda_motor": 25,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 16,
          "helikopter_polisi": 38,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 8,
          "kamera_surveillance": 30,
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
    "infantry": 34,
    "tanks": 1,
    "aircraft": 37,
    "naval": 26,
    "air_base": 35,
    "naval_base": 37,
    "military_base": 5,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 1,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 15,
      "satisfaction": 67,
      "revenue": 187
    },
    "corporate": {
      "rate": 19,
      "satisfaction": 52,
      "revenue": 146
    },
    "income": {
      "rate": 15,
      "satisfaction": 61,
      "revenue": 125
    },
    "customs": {
      "rate": 19,
      "satisfaction": 86,
      "revenue": 158
    },
    "environment": {
      "rate": 3,
      "satisfaction": 88,
      "revenue": 45
    },
    "transit_allied": { "rate": 5, "satisfaction": 85, "revenue": 29 },
    "transit_non_allied": { "rate": 15, "satisfaction": 75, "revenue": 85 },
    "other": {
      "rate": 1,
      "satisfaction": 93,
      "revenue": 13
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  "demand": {
    "satisfaction": 59,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 21,
    "commercial": 5,
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
      "soft_power": 10,
      "hard_power": 31,
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
    "health": 32,
    "education": 14,
    "security": 25,
    "finance": 21,
    "environment": 60
  }
};
