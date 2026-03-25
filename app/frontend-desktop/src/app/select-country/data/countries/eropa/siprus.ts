import { CountryData } from "../../types";

export const siprus: CountryData = {
  "name_en": "Cyprus",
  "capital": "Nicosia",
  "name_id": "Siprus",
  "lon": 33,
  "lat": 35,
  "flag": "🇨🇾",
  "pop": 1189265,
  "budget": 292,
  "income": "833",
  "religion": "Kristen Ortodoks",
  "ideology": "Demokrasi",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 12,
    "hydro_plant": 4,
    "solar_plant": 38,
    "thermal_plant": 35,
    "gas_plant": 19,
    "wind_plant": 24,
    "power_grid": 54,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 34,
    "subway": 22,
    "railway": 23,
    "highway": 26,
    "road_quality": 89,
    "sea_port": 8,
    "airport": 24,
    "bus_terminal": 21,
    "helipad": 25,
    "internet_coverage": 59,
    "tech_stack": 52,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 20,
    "uranium": 1,
    "coal": 7,
    "oil": 30,
    "gas": 27,
    "salt": 36,
    "nickel": 25,
    "lithium": 8,
    "aluminum": 1,
    "copper": 40,
    "rare_earth": 31,
    "iron_ore": 5,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 11,
    "car": 2,
    "motorcycle": 26,
    "smelter": 3,
    "concrete_cement": 1,
    "wood": 20,
    "mineral_water": 23,
    "sugar": 2,
    "bread": 34,
    "pharmacy": 5,
    "fertilizer": 31,
    "meat_processing": 19,
    "instant_noodle": 37,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 32,
    "poultry": 36,
    "dairy_cow": 7,
    "beef_cow": 12,
    "sheep_goat": 5,
    "shrimp": 40,
    "fish": 17,
    "shellfish": 27,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 8,
    "wheat": 4,
    "corn": 8,
    "tubers": 22,
    "soy": 32,
    "palm_oil": 3,
    "tea": 7,
    "coffee": 14,
    "cocoa": 14,
    "sugarcane": 7,
    "vegetables": 17,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 13,
    "barracks": 10,
    "armory": 24,
    "tank_hangar": 16,
    "military_academy": 1,
    "budget": 83,
    "personnel": 15798,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 121,
        "apc": 125,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 27,
        "kapal_destroyer": 114,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 19,
        "helikopter_serang": 98,
        "pesawat_pengintai": 2
      },
      "total_unit": 25,
      "readiness": 98
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 32,
    "military_air_base": 19,
    "military_naval_base": 27,
    "nuclear_status": false,
    "space_program": 4,
    "cyber_defense": 32,
    "intelligence": 25,
    "strategic_operations": {
      "attack_mission": 31,
      "spy_mission": 32,
      "sabotage_mission": 35,
      "territory_management": 4,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 0,
      "radar_network": 3,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 11,
      "elementary_school": 33,
      "middle_school": 25,
      "high_school": 24,
      "university": 27,
      "education_institute": 12,
      "laboratory": 7,
      "observatory": 6,
      "research_center": 33,
      "development_center": 20,
      "literacy": 66,
      "research_index": 0
    },
    "health": {
      "large_hospital": 6,
      "small_hospital": 22,
      "diagnostic_center": 23,
      "hospital_beds": 5269,
      "life_expectancy": 17,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 32,
      "racing_circuit": 3,
      "stadium": 14,
      "international_stadium": 24,
      "olympic_score": 29,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 24,
      "court": 28,
      "prosecution_office": 11,
      "police_station": 36,
      "police_car_fleet": 9348,
      "police_academy": 2,
      "corruption_index": 61,
      "security_index": 86,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 29,
          "sepeda_motor": 10,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 27,
          "helikopter_polisi": 34,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 10,
          "kamera_surveillance": 22,
          "pusat_forensik": 1
        },
        "response_time": 2,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 18,
    "tanks": 25,
    "aircraft": 13,
    "naval": 28,
    "air_base": 17,
    "naval_base": 4,
    "military_base": 19,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 8,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 28,
      "satisfaction": 67,
      "revenue": 21
    },
    "corporate": {
      "rate": 39,
      "satisfaction": 52,
      "revenue": 29
    },
    "income": {
      "rate": 15,
      "satisfaction": 61,
      "revenue": 7
    },
    "customs": {
      "rate": 34,
      "satisfaction": 86,
      "revenue": 11
    },
    "environment": {
      "rate": 8,
      "satisfaction": 88,
      "revenue": 3
    },
    "transit_allied": { "rate": 5, "satisfaction": 85, "revenue": 2 },
    "transit_non_allied": { "rate": 15, "satisfaction": 75, "revenue": 5 },
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
    "salaryAsn": 90,
    "salaryGuru": 90,
    "salaryMedis": 90,
    "salaryMiliter": 90
  },
  "subsidies": {
    "subsidyEnergi": 25,
    "subsidyPangan": 50,
    "subsidyKesehatan": 75,
    "subsidyPendidikan": 100,
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
    "priceChicken": 57400,
    "priceOil": 7700,
    "priceSugar": 7200,
    "priceEgg": 31100,
    "priceFuel": 10700,
    "priceElectric": 1600,
    "priceWater": 5200,
    "priceMedicine": 221060,
    "priceEducation": 483900
  },

  "demand": {
    "satisfaction": 81,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 20,
    "commercial": 33,
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
      "soft_power": 36,
      "hard_power": 15,
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
    "health": 24,
    "education": 19,
    "security": 4,
    "finance": 13,
    "environment": 60
  }
};
