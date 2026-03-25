import { CountryData } from "../../types";

export const montenegro: CountryData = {
  "name_en": "Montenegro",
  "capital": "Podgorica",
  "name_id": "Montenegro",
  "lon": 19.3,
  "lat": 42.5,
  "flag": "🇲🇪",
  "pop": "10M",
  "budget": 68,
  "income": "194",
  "religion": "Kristen Ortodoks",
  "ideology": "Demokrasi",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 14,
    "hydro_plant": 32,
    "solar_plant": 37,
    "thermal_plant": 10,
    "gas_plant": 32,
    "wind_plant": 5,
    "power_grid": 73,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 15,
    "subway": 6,
    "railway": 26,
    "highway": 1,
    "road_quality": 72,
    "sea_port": 3,
    "airport": 8,
    "bus_terminal": 40,
    "helipad": 7,
    "internet_coverage": 74,
    "tech_stack": 67,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 25,
    "uranium": 13,
    "coal": 6,
    "oil": 7,
    "gas": 15,
    "salt": 10,
    "nickel": 13,
    "lithium": 15,
    "aluminum": 31,
    "copper": 11,
    "rare_earth": 33,
    "iron_ore": 34,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 17,
    "car": 9,
    "motorcycle": 9,
    "smelter": 19,
    "concrete_cement": 27,
    "wood": 19,
    "mineral_water": 29,
    "sugar": 3,
    "bread": 32,
    "pharmacy": 12,
    "fertilizer": 31,
    "meat_processing": 17,
    "instant_noodle": 11,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 37,
    "poultry": 26,
    "dairy_cow": 1,
    "beef_cow": 25,
    "sheep_goat": 1,
    "shrimp": 23,
    "fish": 12,
    "shellfish": 31,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 23,
    "wheat": 32,
    "corn": 12,
    "tubers": 6,
    "soy": 29,
    "palm_oil": 20,
    "tea": 34,
    "coffee": 5,
    "cocoa": 22,
    "sugarcane": 17,
    "vegetables": 24,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 4,
    "barracks": 22,
    "armory": 19,
    "tank_hangar": 30,
    "military_academy": 4,
    "budget": 19,
    "personnel": 12867,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 16,
        "apc": 22,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 26,
        "kapal_destroyer": 99,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 35,
        "helikopter_serang": 177,
        "pesawat_pengintai": 2
      },
      "total_unit": 13,
      "readiness": 98
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 3,
    "military_air_base": 37,
    "military_naval_base": 21,
    "arms_factory": 17,
    "nuclear_status": false,
    "space_program": 38,
    "cyber_defense": 12,
    "intelligence": 13,
    "strategic_operations": {
      "attack_mission": 16,
      "spy_mission": 1,
      "sabotage_mission": 7,
      "territory_management": 15,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 2,
      "radar_network": 4,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 3,
      "elementary_school": 11,
      "middle_school": 7,
      "high_school": 34,
      "university": 20,
      "education_institute": 9,
      "laboratory": 19,
      "observatory": 38,
      "research_center": 29,
      "development_center": 20,
      "literacy": 83,
      "research_index": 0
    },
    "health": {
      "large_hospital": 2,
      "small_hospital": 13,
      "diagnostic_center": 4,
      "hospital_beds": 3768,
      "life_expectancy": 4,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 23,
      "racing_circuit": 1,
      "stadium": 7,
      "international_stadium": 7,
      "olympic_score": 22,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 3,
      "court": 12,
      "prosecution_office": 37,
      "police_station": 3,
      "police_car_fleet": 5087,
      "police_academy": 14,
      "corruption_index": 95,
      "security_index": 72,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 35,
          "sepeda_motor": 27,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 39,
          "helikopter_polisi": 37,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 9,
          "kamera_surveillance": 20,
          "pusat_forensik": 1
        },
        "response_time": 20,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 33,
    "tanks": 10,
    "aircraft": 24,
    "naval": 32,
    "air_base": 22,
    "naval_base": 35,
    "military_base": 30,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 21,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 33,
      "satisfaction": 67,
      "revenue": 5
    },
    "corporate": {
      "rate": 7,
      "satisfaction": 52,
      "revenue": 1
    },
    "income": {
      "rate": 24,
      "satisfaction": 61,
      "revenue": 1
    },
    "customs": {
      "rate": 28,
      "satisfaction": 86,
      "revenue": 2
    },
    "environment": {
      "rate": 37,
      "satisfaction": 88,
      "revenue": 4
    },
    "transit_allied": { "rate": 5, "satisfaction": 85, "revenue": 1 },
    "transit_non_allied": { "rate": 15, "satisfaction": 75, "revenue": 2 },
    "other": {
      "rate": 2,
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
    "salaryGuru": 100,
    "salaryMedis": 90,
    "salaryMiliter": 80
  },
  "subsidies": {
    "subsidyEnergi": 50,
    "subsidyPangan": 50,
    "subsidyKesehatan": 75,
    "subsidyPendidikan": 75,
    "subsidyUmkm": 50,
    "subsidyTransport": 75,
    "subsidyRumah": 50
  },

  "demand": {
    "satisfaction": 84,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 34,
    "commercial": 34,
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
      "soft_power": 21,
      "hard_power": 34,
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
    "health": 4,
    "education": 39,
    "security": 9,
    "finance": 21,
    "environment": 60
  }
};
