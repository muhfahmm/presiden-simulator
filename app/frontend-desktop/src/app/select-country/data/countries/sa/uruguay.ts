import { CountryData } from "../../types";

export const uruguay: CountryData = {
  "name_en": "Uruguay",
  "capital": "Montevideo",
  "name_id": "Uruguay",
  "lon": -56,
  "lat": -33,
  "flag": "🇺🇾",
  "pop": 3449299,
  "budget": 700,
  "income": "2000",
  "religion": "Katolik",
  "ideology": "Demokrasi",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 18,
    "hydro_plant": 24,
    "solar_plant": 30,
    "thermal_plant": 29,
    "gas_plant": 16,
    "wind_plant": 37,
    "power_grid": 52,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 32,
    "subway": 26,
    "railway": 23,
    "highway": 39,
    "road_quality": 72,
    "sea_port": 33,
    "airport": 2,
    "bus_terminal": 8,
    "helipad": 33,
    "internet_coverage": 66,
    "tech_stack": 95,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 35,
    "uranium": 17,
    "coal": 8,
    "oil": 23,
    "gas": 36,
    "salt": 5,
    "nickel": 26,
    "lithium": 9,
    "aluminum": 36,
    "copper": 2,
    "rare_earth": 15,
    "iron_ore": 32,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 4,
    "car": 6,
    "motorcycle": 33,
    "smelter": 20,
    "concrete_cement": 8,
    "wood": 30,
    "mineral_water": 38,
    "sugar": 12,
    "bread": 35,
    "pharmacy": 26,
    "fertilizer": 6,
    "meat_processing": 1,
    "instant_noodle": 15,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 5,
    "poultry": 7,
    "dairy_cow": 3,
    "beef_cow": 22,
    "sheep_goat": 12,
    "shrimp": 35,
    "fish": 2,
    "shellfish": 28,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 7,
    "wheat": 9,
    "corn": 18,
    "tubers": 12,
    "soy": 28,
    "palm_oil": 33,
    "tea": 26,
    "coffee": 25,
    "cocoa": 24,
    "sugarcane": 27,
    "vegetables": 23,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 39,
    "barracks": 30,
    "armory": 28,
    "tank_hangar": 9,
    "military_academy": 26,
    "budget": 200,
    "personnel": 21800,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 100,
        "apc": 97,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 21,
        "kapal_destroyer": 115,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 120,
        "helikopter_serang": 167,
        "pesawat_pengintai": 2
      },
      "total_unit": 29,
      "readiness": 98
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 25,
    "military_air_base": 24,
    "military_naval_base": 39,
    "arms_factory": 5,
    "nuclear_status": false,
    "space_program": 32,
    "cyber_defense": 32,
    "intelligence": 4,
    "strategic_operations": {
      "attack_mission": 8,
      "spy_mission": 16,
      "sabotage_mission": 15,
      "territory_management": 12,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 0,
      "radar_network": 5,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 9,
      "elementary_school": 27,
      "middle_school": 15,
      "high_school": 14,
      "university": 34,
      "education_institute": 20,
      "laboratory": 15,
      "observatory": 22,
      "research_center": 8,
      "development_center": 32,
      "literacy": 95,
      "research_index": 0
    },
    "health": {
      "large_hospital": 5,
      "small_hospital": 21,
      "diagnostic_center": 6,
      "hospital_beds": 7828,
      "life_expectancy": 6,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 24,
      "racing_circuit": 16,
      "stadium": 34,
      "international_stadium": 9,
      "olympic_score": 11,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 6,
      "court": 17,
      "prosecution_office": 26,
      "police_station": 24,
      "police_car_fleet": 1835,
      "police_academy": 18,
      "corruption_index": 61,
      "security_index": 87,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 25,
          "sepeda_motor": 28,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 34,
          "helikopter_polisi": 21,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 23,
          "kamera_surveillance": 11,
          "pusat_forensik": 1
        },
        "response_time": 1,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 40,
    "tanks": 16,
    "aircraft": 23,
    "naval": 4,
    "air_base": 37,
    "naval_base": 17,
    "military_base": 40,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 30,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 11,
      "satisfaction": 67,
      "revenue": 16
    },
    "corporate": {
      "rate": 1,
      "satisfaction": 52,
      "revenue": 0
    },
    "income": {
      "rate": 23,
      "satisfaction": 61,
      "revenue": 37
    },
    "customs": {
      "rate": 30,
      "satisfaction": 86,
      "revenue": 22
    },
    "environment": {
      "rate": 33,
      "satisfaction": 88,
      "revenue": 66
    },
    "transit_allied": { "rate": 5, "satisfaction": 85, "revenue": 4 },
    "transit_non_allied": { "rate": 15, "satisfaction": 75, "revenue": 11 },
    "other": {
      "rate": 19,
      "satisfaction": 93,
      "revenue": 20
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
    "salaryGuru": 70,
    "salaryMedis": 70,
    "salaryMiliter": 70
  },
  "subsidies": {
    "subsidyEnergi": 75,
    "subsidyPangan": 75,
    "subsidyKesehatan": 75,
    "subsidyPendidikan": 50,
    "subsidyUmkm": 50,
    "subsidyTransport": 75,
    "subsidyRumah": 50
  },

  // =============================================================
  // 🛒 HARGA PASAR DOMESTIK (11 Jenis)
  // =============================================================

  "prices": {
    "priceRice": 22400,
    "priceBeef": 208200,
    "priceChicken": 41000,
    "priceOil": 12320,
    "priceSugar": 14400,
    "priceEgg": 62200,
    "priceFuel": 21400,
    "priceElectric": 3200,
    "priceWater": 4160,
    "priceMedicine": 221060,
    "priceEducation": 483900
  },

  "demand": {
    "satisfaction": 52,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 18,
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
      "soft_power": 8,
      "hard_power": 29,
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
    "health": 6,
    "education": 37,
    "security": 1,
    "finance": 2,
    "environment": 60
  }
};
