import { CountryData } from "../../types";

export const saint_vincent_dan_grenadine: CountryData = {
  "name_en": "Saint Vincent and the Grenadines",
  "capital": "Kingstown",
  "name_id": "Saint vincent dan grenadine",
  "lon": -61.2,
  "lat": 13.25,
  "flag": "🇻🇨",
  "pop": 110210,
  "budget": 97,
  "income": "278",
  "religion": "Katolik",
  "ideology": "Demokrasi",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 1,
    "hydro_plant": 7,
    "solar_plant": 2,
    "thermal_plant": 23,
    "gas_plant": 4,
    "wind_plant": 8,
    "power_grid": 67,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 1,
    "subway": 24,
    "railway": 33,
    "highway": 16,
    "road_quality": 79,
    "sea_port": 27,
    "airport": 26,
    "bus_terminal": 7,
    "helipad": 7,
    "internet_coverage": 50,
    "tech_stack": 95,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 19,
    "uranium": 19,
    "coal": 5,
    "oil": 10,
    "gas": 2,
    "salt": 20,
    "nickel": 23,
    "lithium": 11,
    "aluminum": 24,
    "copper": 33,
    "rare_earth": 34,
    "iron_ore": 28,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 30,
    "car": 9,
    "motorcycle": 15,
    "smelter": 17,
    "concrete_cement": 12,
    "wood": 13,
    "mineral_water": 16,
    "sugar": 24,
    "bread": 20,
    "pharmacy": 11,
    "fertilizer": 37,
    "meat_processing": 23,
    "instant_noodle": 40,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 25,
    "poultry": 35,
    "dairy_cow": 19,
    "beef_cow": 26,
    "sheep_goat": 29,
    "shrimp": 28,
    "fish": 22,
    "shellfish": 3,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 35,
    "wheat": 10,
    "corn": 31,
    "tubers": 1,
    "soy": 36,
    "palm_oil": 29,
    "tea": 12,
    "coffee": 21,
    "cocoa": 29,
    "sugarcane": 26,
    "vegetables": 18,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 25,
    "barracks": 6,
    "armory": 21,
    "tank_hangar": 23,
    "military_academy": 40,
    "budget": 27,
    "personnel": 19964,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 63,
        "apc": 32,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 33,
        "kapal_destroyer": 126,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 88,
        "helikopter_serang": 105,
        "pesawat_pengintai": 2
      },
      "total_unit": 9,
      "readiness": 98
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 8,
    "military_air_base": 39,
    "military_naval_base": 40,
    "nuclear_status": false,
    "space_program": 14,
    "cyber_defense": 14,
    "intelligence": 22,
    "strategic_operations": {
      "attack_mission": 34,
      "spy_mission": 15,
      "sabotage_mission": 35,
      "territory_management": 27,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 1,
      "radar_network": 5,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 21,
      "elementary_school": 9,
      "middle_school": 19,
      "high_school": 16,
      "university": 10,
      "education_institute": 40,
      "laboratory": 1,
      "observatory": 10,
      "research_center": 2,
      "development_center": 15,
      "literacy": 66,
      "research_index": 0
    },
    "health": {
      "large_hospital": 23,
      "small_hospital": 2,
      "diagnostic_center": 8,
      "hospital_beds": 4947,
      "life_expectancy": 20,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 10,
      "racing_circuit": 25,
      "stadium": 25,
      "international_stadium": 10,
      "olympic_score": 9,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 32,
      "court": 18,
      "prosecution_office": 5,
      "police_station": 5,
      "police_car_fleet": 5603,
      "police_academy": 31,
      "corruption_index": 73,
      "security_index": 87,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 39,
          "sepeda_motor": 20,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 39,
          "helikopter_polisi": 21,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 29,
          "kamera_surveillance": 1,
          "pusat_forensik": 1
        },
        "response_time": 3,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 9,
    "tanks": 23,
    "aircraft": 21,
    "naval": 14,
    "air_base": 6,
    "naval_base": 16,
    "military_base": 7,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 4,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 10,
      "satisfaction": 67,
      "revenue": 1
    },
    "corporate": {
      "rate": 36,
      "satisfaction": 52,
      "revenue": 9
    },
    "income": {
      "rate": 37,
      "satisfaction": 61,
      "revenue": 6
    },
    "customs": {
      "rate": 2,
      "satisfaction": 86,
      "revenue": 0
    },
    "environment": {
      "rate": 16,
      "satisfaction": 88,
      "revenue": 2
    },
    "transit_allied": { "rate": 5, "satisfaction": 85, "revenue": 1 },
    "transit_non_allied": { "rate": 15, "satisfaction": 75, "revenue": 2 },
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
    "subsidyUmkm": 50,
    "subsidyTransport": 75,
    "subsidyRumah": 50
  },

  // =============================================================
  // 🛒 HARGA PASAR DOMESTIK (11 Jenis)
  // =============================================================

  "prices": {
    "priceRice": 32000,
    "priceBeef": 208200,
    "priceChicken": 32800,
    "priceOil": 12320,
    "priceSugar": 20160,
    "priceEgg": 24880,
    "priceFuel": 10700,
    "priceElectric": 2240,
    "priceWater": 5200,
    "priceMedicine": 78950,
    "priceEducation": 967800
  },

  "demand": {
    "satisfaction": 66,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 32,
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
      "soft_power": 23,
      "hard_power": 39,
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
    "health": 22,
    "education": 23,
    "security": 31,
    "finance": 3,
    "environment": 60
  }
};
