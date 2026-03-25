import { CountryData } from "../../types";

export const myanmar: CountryData = {
  "name_en": "Myanmar",
  "capital": "Naypyidaw",
  "name_id": "Myanmar",
  "lon": 98,
  "lat": 22,
  "flag": "🇲🇲",
  "pop": 53708395,
  "budget": 583,
  "income": "1667",
  "religion": "Buddha",
  "ideology": "Nasionalisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 2,
    "hydro_plant": 4,
    "solar_plant": 23,
    "thermal_plant": 11,
    "gas_plant": 12,
    "wind_plant": 1,
    "power_grid": 78,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 8,
    "subway": 35,
    "railway": 28,
    "highway": 15,
    "road_quality": 52,
    "sea_port": 4,
    "airport": 40,
    "bus_terminal": 36,
    "helipad": 22,
    "internet_coverage": 58,
    "tech_stack": 89,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 16,
    "uranium": 5,
    "coal": 14,
    "oil": 4,
    "gas": 10,
    "salt": 1,
    "nickel": 26,
    "lithium": 5,
    "aluminum": 4,
    "copper": 21,
    "rare_earth": 38,
    "iron_ore": 39,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 19,
    "car": 40,
    "motorcycle": 13,
    "smelter": 30,
    "concrete_cement": 13,
    "wood": 3,
    "mineral_water": 20,
    "sugar": 4,
    "bread": 30,
    "pharmacy": 30,
    "fertilizer": 28,
    "meat_processing": 17,
    "instant_noodle": 21,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 32,
    "poultry": 24,
    "dairy_cow": 21,
    "beef_cow": 7,
    "sheep_goat": 26,
    "shrimp": 10,
    "fish": 22,
    "shellfish": 27,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 22,
    "wheat": 3,
    "corn": 1,
    "tubers": 14,
    "soy": 30,
    "palm_oil": 13,
    "tea": 28,
    "coffee": 8,
    "cocoa": 32,
    "sugarcane": 22,
    "vegetables": 10,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 14,
    "barracks": 9,
    "armory": 28,
    "tank_hangar": 35,
    "military_academy": 15,
    "budget": 166,
    "personnel": 26184,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 141,
        "apc": 54,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 3,
        "kapal_destroyer": 173,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 155,
        "helikopter_serang": 141,
        "pesawat_pengintai": 2
      },
      "total_unit": 15,
      "readiness": 98
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 19,
    "military_air_base": 31,
    "military_naval_base": 23,
    "arms_factory": 28,
    "nuclear_status": false,
    "space_program": 1,
    "cyber_defense": 14,
    "intelligence": 33,
    "strategic_operations": {
      "attack_mission": 17,
      "spy_mission": 16,
      "sabotage_mission": 37,
      "territory_management": 25,
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
      "kindergarten": 7,
      "elementary_school": 37,
      "middle_school": 11,
      "high_school": 18,
      "university": 4,
      "education_institute": 31,
      "laboratory": 1,
      "observatory": 25,
      "research_center": 22,
      "development_center": 13,
      "literacy": 72,
      "research_index": 0
    },
    "health": {
      "large_hospital": 16,
      "small_hospital": 20,
      "diagnostic_center": 3,
      "hospital_beds": 2294,
      "life_expectancy": 3,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 13,
      "racing_circuit": 3,
      "stadium": 29,
      "international_stadium": 24,
      "olympic_score": 14,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 12,
      "court": 23,
      "prosecution_office": 13,
      "police_station": 11,
      "police_car_fleet": 908,
      "police_academy": 13,
      "corruption_index": 51,
      "security_index": 91,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 20,
          "sepeda_motor": 3,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 33,
          "helikopter_polisi": 13,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 4,
          "kamera_surveillance": 28,
          "pusat_forensik": 1
        },
        "response_time": 7,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 36,
    "tanks": 29,
    "aircraft": 29,
    "naval": 28,
    "air_base": 13,
    "naval_base": 28,
    "military_base": 1,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 20,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 9,
      "satisfaction": 67,
      "revenue": 12
    },
    "corporate": {
      "rate": 30,
      "satisfaction": 52,
      "revenue": 43
    },
    "income": {
      "rate": 11,
      "satisfaction": 61,
      "revenue": 19
    },
    "customs": {
      "rate": 29,
      "satisfaction": 86,
      "revenue": 45
    },
    "environment": {
      "rate": 38,
      "satisfaction": 88,
      "revenue": 24
    },
    "transit_allied": { "rate": 5, "satisfaction": 85, "revenue": 3 },
    "transit_non_allied": { "rate": 15, "satisfaction": 75, "revenue": 9 },
    "other": {
      "rate": 12,
      "satisfaction": 93,
      "revenue": 17
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
    "subsidyKesehatan": 50,
    "subsidyPendidikan": 75,
    "subsidyUmkm": 75,
    "subsidyTransport": 75,
    "subsidyRumah": 50
  },

  // =============================================================
  // 🛒 HARGA PASAR DOMESTIK (11 Jenis)
  // =============================================================

  "prices": {
    "priceRice": 16000,
    "priceBeef": 104100,
    "priceChicken": 32800,
    "priceOil": 21560,
    "priceSugar": 14400,
    "priceEgg": 31100,
    "priceFuel": 10700,
    "priceElectric": 1280,
    "priceWater": 4160,
    "priceMedicine": 78950,
    "priceEducation": 483900
  },

  "demand": {
    "satisfaction": 63,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 6,
    "commercial": 28,
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
      "soft_power": 15,
      "hard_power": 2,
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
    "health": 15,
    "education": 35,
    "security": 2,
    "finance": 13,
    "environment": 60
  }
};
