import { CountryData } from "../../types";

export const venezuela: CountryData = {
  "name_en": "Venezuela",
  "capital": "Caracas",
  "name_id": "Venezuela",
  "lon": -66,
  "lat": 8,
  "flag": "🇻🇪",
  "pop": "10M",
  "budget": 924,
  "income": "2639",
  "religion": "Katolik",
  "ideology": "Sosialisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 9,
    "hydro_plant": 3,
    "solar_plant": 24,
    "thermal_plant": 3,
    "gas_plant": 18,
    "wind_plant": 38,
    "power_grid": 93,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 2,
    "subway": 18,
    "railway": 39,
    "highway": 30,
    "road_quality": 74,
    "sea_port": 30,
    "airport": 21,
    "bus_terminal": 25,
    "helipad": 37,
    "internet_coverage": 51,
    "tech_stack": 87,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 33,
    "uranium": 26,
    "coal": 13,
    "oil": 23,
    "gas": 10,
    "salt": 27,
    "nickel": 24,
    "lithium": 34,
    "aluminum": 17,
    "copper": 37,
    "rare_earth": 23,
    "iron_ore": 2,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 25,
    "car": 2,
    "motorcycle": 33,
    "smelter": 39,
    "concrete_cement": 40,
    "wood": 32,
    "mineral_water": 5,
    "sugar": 34,
    "bread": 39,
    "pharmacy": 21,
    "fertilizer": 25,
    "meat_processing": 19,
    "instant_noodle": 11,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 14,
    "poultry": 7,
    "dairy_cow": 6,
    "beef_cow": 11,
    "sheep_goat": 33,
    "shrimp": 36,
    "fish": 22,
    "shellfish": 31,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 22,
    "wheat": 21,
    "corn": 4,
    "tubers": 2,
    "soy": 18,
    "palm_oil": 10,
    "tea": 12,
    "coffee": 23,
    "cocoa": 28,
    "sugarcane": 4,
    "vegetables": 20,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 5,
    "barracks": 17,
    "armory": 6,
    "tank_hangar": 7,
    "military_academy": 7,
    "budget": 263,
    "personnel": 23710,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 28,
        "apc": 85,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 2,
        "kapal_destroyer": 149,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 198,
        "helikopter_serang": 192,
        "pesawat_pengintai": 2
      },
      "total_unit": 2,
      "readiness": 98
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 13,
    "military_air_base": 10,
    "military_naval_base": 16,
    "arms_factory": 35,
    "nuclear_status": false,
    "space_program": 32,
    "cyber_defense": 11,
    "intelligence": 11,
    "strategic_operations": {
      "attack_mission": 34,
      "spy_mission": 27,
      "sabotage_mission": 30,
      "territory_management": 34,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 0,
      "radar_network": 0,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 12,
      "elementary_school": 25,
      "middle_school": 6,
      "high_school": 20,
      "university": 40,
      "education_institute": 38,
      "laboratory": 40,
      "observatory": 3,
      "research_center": 25,
      "development_center": 10,
      "literacy": 69,
      "research_index": 0
    },
    "health": {
      "large_hospital": 20,
      "small_hospital": 38,
      "diagnostic_center": 8,
      "hospital_beds": 2219,
      "life_expectancy": 31,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 12,
      "racing_circuit": 3,
      "stadium": 23,
      "international_stadium": 20,
      "olympic_score": 12,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 6,
      "court": 1,
      "prosecution_office": 13,
      "police_station": 39,
      "police_car_fleet": 922,
      "police_academy": 32,
      "corruption_index": 87,
      "security_index": 86,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 14,
          "sepeda_motor": 25,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 20,
          "helikopter_polisi": 2,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 21,
          "kamera_surveillance": 27,
          "pusat_forensik": 1
        },
        "response_time": 28,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 9,
    "tanks": 10,
    "aircraft": 11,
    "naval": 22,
    "air_base": 20,
    "naval_base": 12,
    "military_base": 31,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 38,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 37,
      "satisfaction": 67,
      "revenue": 75
    },
    "corporate": {
      "rate": 8,
      "satisfaction": 52,
      "revenue": 19
    },
    "income": {
      "rate": 4,
      "satisfaction": 61,
      "revenue": 10
    },
    "customs": {
      "rate": 40,
      "satisfaction": 86,
      "revenue": 85
    },
    "environment": {
      "rate": 28,
      "satisfaction": 88,
      "revenue": 41
    },
    "transit_allied": { "rate": 5, "satisfaction": 85, "revenue": 5 },
    "transit_non_allied": { "rate": 15, "satisfaction": 75, "revenue": 14 },
    "other": {
      "rate": 4,
      "satisfaction": 93,
      "revenue": 7
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
    "salaryMiliter": 60
  },
  "subsidies": {
    "subsidyEnergi": 75,
    "subsidyPangan": 75,
    "subsidyKesehatan": 75,
    "subsidyPendidikan": 50,
    "subsidyUmkm": 75,
    "subsidyTransport": 50,
    "subsidyRumah": 50
  },

  "demand": {
    "satisfaction": 65,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 13,
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
      "soft_power": 40,
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
    "health": 28,
    "education": 26,
    "security": 11,
    "finance": 8,
    "environment": 60
  }
};
