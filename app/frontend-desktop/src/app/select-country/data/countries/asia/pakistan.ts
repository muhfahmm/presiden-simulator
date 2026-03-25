import { CountryData } from "../../types";

export const pakistan: CountryData = {
  "name_en": "Pakistan",
  "capital": "Islamabad",
  "name_id": "Pakistan",
  "lon": 70,
  "lat": 30,
  "flag": "🇵🇰",
  "pop": "10M",
  "budget": 3306,
  "income": "9445",
  "religion": "Islam",
  "ideology": "Konservatisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 8,
    "hydro_plant": 37,
    "solar_plant": 32,
    "thermal_plant": 29,
    "gas_plant": 36,
    "wind_plant": 33,
    "power_grid": 95,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 40,
    "subway": 39,
    "railway": 29,
    "highway": 17,
    "road_quality": 76,
    "sea_port": 15,
    "airport": 36,
    "bus_terminal": 38,
    "helipad": 26,
    "internet_coverage": 79,
    "tech_stack": 50,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 13,
    "uranium": 27,
    "coal": 30,
    "oil": 36,
    "gas": 25,
    "salt": 4,
    "nickel": 23,
    "lithium": 4,
    "aluminum": 33,
    "copper": 29,
    "rare_earth": 38,
    "iron_ore": 8,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 2,
    "car": 36,
    "motorcycle": 13,
    "smelter": 8,
    "concrete_cement": 2,
    "wood": 35,
    "mineral_water": 17,
    "sugar": 3,
    "bread": 33,
    "pharmacy": 35,
    "fertilizer": 5,
    "meat_processing": 32,
    "instant_noodle": 25,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 9,
    "poultry": 19,
    "dairy_cow": 20,
    "beef_cow": 37,
    "sheep_goat": 11,
    "shrimp": 5,
    "fish": 29,
    "shellfish": 8,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 30,
    "wheat": 3,
    "corn": 18,
    "tubers": 8,
    "soy": 37,
    "palm_oil": 10,
    "tea": 18,
    "coffee": 22,
    "cocoa": 26,
    "sugarcane": 25,
    "vegetables": 33,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 21,
    "barracks": 10,
    "armory": 25,
    "tank_hangar": 19,
    "military_academy": 14,
    "budget": 944,
    "personnel": 10292,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 133,
        "apc": 109,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 3,
        "kapal_destroyer": 95,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 137,
        "helikopter_serang": 200,
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
    "command_center": 11,
    "military_air_base": 28,
    "military_naval_base": 21,
    "arms_factory": 36,
    "nuclear_status": false,
    "space_program": 2,
    "cyber_defense": 18,
    "intelligence": 10,
    "strategic_operations": {
      "attack_mission": 4,
      "spy_mission": 8,
      "sabotage_mission": 4,
      "territory_management": 5,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 3,
      "radar_network": 0,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 10,
      "elementary_school": 21,
      "middle_school": 40,
      "high_school": 3,
      "university": 22,
      "education_institute": 17,
      "laboratory": 11,
      "observatory": 8,
      "research_center": 16,
      "development_center": 31,
      "literacy": 71,
      "research_index": 0
    },
    "health": {
      "large_hospital": 35,
      "small_hospital": 7,
      "diagnostic_center": 5,
      "hospital_beds": 5308,
      "life_expectancy": 8,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 3,
      "racing_circuit": 13,
      "stadium": 8,
      "international_stadium": 23,
      "olympic_score": 9,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 9,
      "court": 32,
      "prosecution_office": 23,
      "police_station": 12,
      "police_car_fleet": 6016,
      "police_academy": 27,
      "corruption_index": 61,
      "security_index": 59,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 12,
          "sepeda_motor": 27,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 22,
          "helikopter_polisi": 10,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 40,
          "kamera_surveillance": 27,
          "pusat_forensik": 1
        },
        "response_time": 33,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 30,
    "tanks": 21,
    "aircraft": 19,
    "naval": 7,
    "air_base": 34,
    "naval_base": 2,
    "military_base": 8,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 22,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 36,
      "satisfaction": 67,
      "revenue": 126
    },
    "corporate": {
      "rate": 32,
      "satisfaction": 52,
      "revenue": 205
    },
    "income": {
      "rate": 14,
      "satisfaction": 61,
      "revenue": 59
    },
    "customs": {
      "rate": 35,
      "satisfaction": 86,
      "revenue": 300
    },
    "environment": {
      "rate": 17,
      "satisfaction": 88,
      "revenue": 100
    },
    "transit_allied": { "rate": 5, "satisfaction": 85, "revenue": 17 },
    "transit_non_allied": { "rate": 15, "satisfaction": 75, "revenue": 50 },
    "other": {
      "rate": 13,
      "satisfaction": 93,
      "revenue": 124
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  
  // =============================================================
  // 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "salaries": {
    "salaryAsn": 70,
    "salaryGuru": 70,
    "salaryMedis": 70,
    "salaryMiliter": 70
  },
  "subsidies": {
    "subsidyEnergi": 50,
    "subsidyPangan": 75,
    "subsidyKesehatan": 75,
    "subsidyPendidikan": 75,
    "subsidyUmkm": 50,
    "subsidyTransport": 75,
    "subsidyRumah": 25
  },

  "demand": {
    "satisfaction": 65,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 36,
    "commercial": 30,
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
      "soft_power": 30,
      "hard_power": 4,
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
    "health": 36,
    "education": 1,
    "security": 8,
    "finance": 38,
    "environment": 60
  }
};
