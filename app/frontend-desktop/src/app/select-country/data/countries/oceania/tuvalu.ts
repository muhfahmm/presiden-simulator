import { CountryData } from "../../types";

export const tuvalu: CountryData = {
  "name_en": "Tuvalu",
  "capital": "Funafuti",
  "name_id": "Tuvalu",
  "lon": 178,
  "lat": -8,
  "flag": "🇹🇻",
  "pop": "10M",
  "budget": 10,
  "income": "15",
  "religion": "Protestan",
  "ideology": "Demokrasi",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 33,
    "hydro_plant": 27,
    "solar_plant": 28,
    "thermal_plant": 12,
    "gas_plant": 32,
    "wind_plant": 36,
    "power_grid": 66,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 1,
    "subway": 14,
    "railway": 31,
    "highway": 8,
    "road_quality": 65,
    "sea_port": 3,
    "airport": 4,
    "bus_terminal": 1,
    "helipad": 20,
    "internet_coverage": 78,
    "tech_stack": 94,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 18,
    "uranium": 32,
    "coal": 30,
    "oil": 1,
    "gas": 7,
    "salt": 19,
    "nickel": 19,
    "lithium": 1,
    "aluminum": 27,
    "copper": 21,
    "rare_earth": 30,
    "iron_ore": 24,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 12,
    "car": 28,
    "motorcycle": 36,
    "smelter": 7,
    "concrete_cement": 25,
    "wood": 33,
    "mineral_water": 39,
    "sugar": 17,
    "bread": 26,
    "pharmacy": 8,
    "fertilizer": 18,
    "meat_processing": 3,
    "instant_noodle": 5,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 7,
    "poultry": 4,
    "dairy_cow": 24,
    "beef_cow": 22,
    "sheep_goat": 38,
    "shrimp": 9,
    "fish": 22,
    "shellfish": 2,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 8,
    "wheat": 38,
    "corn": 9,
    "tubers": 25,
    "soy": 35,
    "palm_oil": 30,
    "tea": 18,
    "coffee": 34,
    "cocoa": 31,
    "sugarcane": 22,
    "vegetables": 22,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 38,
    "barracks": 8,
    "armory": 26,
    "tank_hangar": 1,
    "military_academy": 23,
    "budget": 1,
    "personnel": 8409,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 197,
        "apc": 173,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 31,
        "kapal_destroyer": 166,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 195,
        "helikopter_serang": 62,
        "pesawat_pengintai": 2
      },
      "total_unit": 4,
      "readiness": 98
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 32,
    "military_air_base": 25,
    "military_naval_base": 4,
    "arms_factory": 25,
    "nuclear_status": false,
    "space_program": 5,
    "cyber_defense": 31,
    "intelligence": 13,
    "strategic_operations": {
      "attack_mission": 27,
      "spy_mission": 19,
      "sabotage_mission": 5,
      "territory_management": 12,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 0,
      "radar_network": 4,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 17,
      "elementary_school": 24,
      "middle_school": 21,
      "high_school": 22,
      "university": 13,
      "education_institute": 25,
      "laboratory": 39,
      "observatory": 39,
      "research_center": 29,
      "development_center": 30,
      "literacy": 81,
      "research_index": 0
    },
    "health": {
      "large_hospital": 19,
      "small_hospital": 19,
      "diagnostic_center": 13,
      "hospital_beds": 8311,
      "life_expectancy": 39,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 10,
      "racing_circuit": 19,
      "stadium": 29,
      "international_stadium": 5,
      "olympic_score": 38,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 39,
      "court": 9,
      "prosecution_office": 20,
      "police_station": 40,
      "police_car_fleet": 8650,
      "police_academy": 39,
      "corruption_index": 94,
      "security_index": 52,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 31,
          "sepeda_motor": 2,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 24,
          "helikopter_polisi": 26,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 12,
          "kamera_surveillance": 33,
          "pusat_forensik": 1
        },
        "response_time": 36,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 33,
    "tanks": 21,
    "aircraft": 15,
    "naval": 34,
    "air_base": 18,
    "naval_base": 32,
    "military_base": 36,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 32,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 2,
      "satisfaction": 67,
      "revenue": 0
    },
    "corporate": {
      "rate": 22,
      "satisfaction": 52,
      "revenue": 0
    },
    "income": {
      "rate": 3,
      "satisfaction": 61,
      "revenue": 0
    },
    "customs": {
      "rate": 36,
      "satisfaction": 86,
      "revenue": 0
    },
    "environment": {
      "rate": 14,
      "satisfaction": 88,
      "revenue": 0
    },
    "transit_allied": { "rate": 5, "satisfaction": 85, "revenue": 1 },
    "transit_non_allied": { "rate": 15, "satisfaction": 75, "revenue": 1 },
    "other": {
      "rate": 4,
      "satisfaction": 93,
      "revenue": 0
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  
  // =============================================================
  // 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "salaries": {
    "salaryAsn": 80,
    "salaryGuru": 80,
    "salaryMedis": 90,
    "salaryMiliter": 80
  },
  "subsidies": {
    "subsidyEnergi": 25,
    "subsidyPangan": 50,
    "subsidyKesehatan": 75,
    "subsidyPendidikan": 75,
    "subsidyUmkm": 50,
    "subsidyTransport": 75,
    "subsidyRumah": 50
  },

  "demand": {
    "satisfaction": 62,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 35,
    "commercial": 15,
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
      "soft_power": 27,
      "hard_power": 27,
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
    "education": 22,
    "security": 16,
    "finance": 21,
    "environment": 60
  }
};
