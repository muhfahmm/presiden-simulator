import { CountryData } from "../../types";

export const bolivia: CountryData = {
  "name_en": "Bolivia",
  "capital": "Sucre",
  "name_id": "Bolivia",
  "lon": -65,
  "lat": -17,
  "flag": "🇧🇴",
  "pop": "10M",
  "budget": 428,
  "income": "1222",
  "religion": "Katolik",
  "ideology": "Sosialisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 9,
    "hydro_plant": 23,
    "solar_plant": 29,
    "thermal_plant": 11,
    "gas_plant": 29,
    "wind_plant": 27,
    "power_grid": 66,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 7,
    "subway": 33,
    "railway": 17,
    "highway": 34,
    "road_quality": 59,
    "sea_port": 31,
    "airport": 10,
    "bus_terminal": 21,
    "helipad": 19,
    "internet_coverage": 89,
    "tech_stack": 78,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 33,
    "uranium": 27,
    "coal": 13,
    "oil": 23,
    "gas": 21,
    "salt": 1,
    "nickel": 39,
    "lithium": 21,
    "aluminum": 37,
    "copper": 30,
    "rare_earth": 28,
    "iron_ore": 29,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 15,
    "car": 14,
    "motorcycle": 1,
    "smelter": 32,
    "concrete_cement": 33,
    "wood": 23,
    "mineral_water": 35,
    "sugar": 15,
    "bread": 22,
    "pharmacy": 8,
    "fertilizer": 8,
    "meat_processing": 2,
    "instant_noodle": 9,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 33,
    "poultry": 6,
    "dairy_cow": 20,
    "beef_cow": 21,
    "sheep_goat": 13,
    "shrimp": 14,
    "fish": 17,
    "shellfish": 24,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 17,
    "wheat": 32,
    "corn": 6,
    "tubers": 18,
    "soy": 13,
    "palm_oil": 31,
    "tea": 11,
    "coffee": 22,
    "cocoa": 38,
    "sugarcane": 13,
    "vegetables": 30,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 26,
    "barracks": 15,
    "armory": 25,
    "tank_hangar": 7,
    "military_academy": 36,
    "budget": 122,
    "personnel": 22740,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 8,
        "apc": 4,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 39,
        "kapal_destroyer": 20,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 26,
        "helikopter_serang": 12,
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
    "command_center": 24,
    "military_air_base": 21,
    "military_naval_base": 26,
    "arms_factory": 19,
    "nuclear_status": false,
    "space_program": 4,
    "cyber_defense": 26,
    "intelligence": 35,
    "strategic_operations": {
      "attack_mission": 9,
      "spy_mission": 33,
      "sabotage_mission": 6,
      "territory_management": 33,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 12,
      "radar_network": 20,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 17,
      "elementary_school": 7,
      "middle_school": 38,
      "high_school": 26,
      "university": 27,
      "education_institute": 21,
      "laboratory": 15,
      "observatory": 7,
      "research_center": 26,
      "development_center": 9,
      "literacy": 92,
      "research_index": 0
    },
    "health": {
      "large_hospital": 8,
      "small_hospital": 9,
      "diagnostic_center": 38,
      "hospital_beds": 1678,
      "life_expectancy": 11,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 15,
      "racing_circuit": 19,
      "stadium": 30,
      "international_stadium": 24,
      "olympic_score": 38,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 27,
      "court": 10,
      "prosecution_office": 5,
      "police_station": 25,
      "police_car_fleet": 9720,
      "police_academy": 5,
      "corruption_index": 52,
      "security_index": 58,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 17,
          "sepeda_motor": 11,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 11,
          "helikopter_polisi": 13,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 33,
          "kamera_surveillance": 28,
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
    "infantry": 23,
    "tanks": 32,
    "aircraft": 3,
    "naval": 20,
    "air_base": 23,
    "naval_base": 34,
    "military_base": 12,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 13,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 27,
      "satisfaction": 67,
      "revenue": 21
    },
    "corporate": {
      "rate": 10,
      "satisfaction": 52,
      "revenue": 9
    },
    "income": {
      "rate": 22,
      "satisfaction": 61,
      "revenue": 25
    },
    "customs": {
      "rate": 40,
      "satisfaction": 86,
      "revenue": 32
    },
    "environment": {
      "rate": 8,
      "satisfaction": 88,
      "revenue": 7
    },
    "transit_allied": { "rate": 5, "satisfaction": 85, "revenue": 3 },
    "transit_non_allied": { "rate": 15, "satisfaction": 75, "revenue": 7 },
    "other": {
      "rate": 26,
      "satisfaction": 93,
      "revenue": 24
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  
  // =============================================================
  // 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "salaries": {
    "salaryAsn": 60,
    "salaryGuru": 60,
    "salaryMedis": 70,
    "salaryMiliter": 50
  },
  "subsidies": {
    "subsidyEnergi": 75,
    "subsidyPangan": 75,
    "subsidyKesehatan": 50,
    "subsidyPendidikan": 50,
    "subsidyUmkm": 75,
    "subsidyTransport": 75,
    "subsidyRumah": 25
  },

  "demand": {
    "satisfaction": 65,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 8,
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
      "soft_power": 16,
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
    "health": 31,
    "education": 8,
    "security": 14,
    "finance": 33,
    "environment": 60
  }
};
