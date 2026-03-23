import { CountryData } from "../../types";

export const senegal: CountryData = {
  "name_en": "Senegal",
  "capital": "Dakar",
  "name_id": "Senegal",
  "lon": -14,
  "lat": 14,
  "flag": "🇸🇳",
  "pop": "10M",
  "budget": 272,
  "income": "778",
  "religion": "Protestan",
  "ideology": "Kapitalisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "gas_plant": 16,
    "hydro_plant": 40,
    "nuclear_plant": 1,
    "power_grid": 84,
    "solar_plant": 40,
    "thermal_plant": 28,
    "wind_plant": 15,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "airport": 2,
    "bicycle_path": 31,
    "bus_terminal": 33,
    "helipad": 4,
    "highway": 14,
    "internet_coverage": 62,
    "railway": 36,
    "road_quality": 64,
    "sea_port": 11,
    "subway": 12,
    "tech_stack": 60,
    "water_access": 74,
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "aluminum": 33,
    "coal": 18,
    "copper": 8,
    "gas": 26,
    "gold": 13,
    "iron_ore": 33,
    "lithium": 18,
    "nickel": 36,
    "oil": 39,
    "rare_earth": 13,
    "salt": 27,
    "strength": 29.660809349923973,
    "uranium": 14,
  
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "bread": 8,
    "car": 20,
    "concrete_cement": 21,
    "fertilizer": 37,
    "instant_noodle": 4,
    "meat_processing": 14,
    "mineral_water": 34,
    "motorcycle": 31,
    "pharmacy": 20,
    "semiconductor": 26,
    "smelter": 37,
    "strength": 3.076011687404966,
    "sugar": 28,
    "wood": 39,
  
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "beef_cow": 18,
    "chicken": 39,
    "dairy_cow": 23,
    "fish": 15,
    "poultry": 18,
    "sheep_goat": 35,
    "shellfish": 36,
    "shrimp": 23,
    "strength": 18.24560701244298,
  
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "cocoa": 25,
    "coffee": 12,
    "corn": 38,
    "palm_oil": 21,
    "rice": 28,
    "soy": 23,
    "strength": 20.660809349923973,
    "sugarcane": 22,
    "tea": 27,
    "tubers": 10,
    "vegetables": 35,
    "wheat": 12,
  
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 40,
    "barracks": 25,
    "armory": 34,
    "tank_hangar": 22,
    "military_academy": 34,
    "budget": 1178,
    "personnel": 5203,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 172,
        "apc": 116,
        "artileri_berat": 26,
      },
      "laut": {
        "kapal_induk": 27,
        "kapal_destroyer": 37,
        "kapal_selam_nuklir": 0,
      },
      "udara": {
        "jet_tempur_stealth": 133,
        "helikopter_serang": 173,
        "pesawat_pengintai": 2,
      },
      "total_unit": 7,
      "readiness": 98,
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 20,
    "military_air_base": 34,
    "military_naval_base": 33,
    "arms_factory": 30,
    "nuclear_status": false,
    "space_program": 28,
    "cyber_defense": 36,
    "intelligence": 13,
    "strategic_operations": {
      "attack_mission": 16,
      "spy_mission": 21,
      "sabotage_mission": 16,
      "territory_management": 28,
      "nuclear_program": 0,
    },
    "intel_radar": {
      "satellite_system": 3,
      "radar_network": 5,
      "cyber_ops": 2,
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 29,
      "elementary_school": 17,
      "middle_school": 11,
      "high_school": 32,
      "university": 35,
      "education_institute": 28,
      "laboratory": 4,
      "observatory": 22,
      "research_center": 1,
      "development_center": 29,
      "literacy": 89,
      "research_index": 0,
    },
    "health": {
      "large_hospital": 9,
      "small_hospital": 5,
      "diagnostic_center": 40,
      "hospital_beds": 5264,
      "life_expectancy": 5,
      "healthcare_index": 85,
    },
    "sports": {
      "swimming_pool": 15,
      "racing_circuit": 27,
      "stadium": 40,
      "international_stadium": 23,
      "olympic_score": 1,
      "popularity": 44,
    },
    "law": {
      "legal_aid_center": 25,
      "court": 30,
      "prosecution_office": 27,
      "police_station": 10,
      "police_car_fleet": 1640,
      "police_academy": 1,
      "corruption_index": 87,
      "security_index": 66,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 17,
          "sepeda_motor": 3,
          "unit_k9": 23,
        },
        "taktis_khusus": {
          "swat": 27,
          "helikopter_polisi": 15,
          "anti_huru_hara": 62,
        },
        "pusat_komando": {
          "stasiun_polisi": 2,
          "kamera_surveillance": 14,
          "pusat_forensik": 1,
        },
        "response_time": 4,
        "public_trust": 50,
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 25,
    "tanks": 9,
    "aircraft": 19,
    "naval": 11,
    "air_base": 11,
    "naval_base": 15,
    "military_base": 4,
    "nuclear": false,
    "strength": 10,
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 29,
    "sell_commodity": 409,
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 17,
      "satisfaction": 67,
      "revenue": 11
    },
    "corporate": {
      "rate": 19,
      "satisfaction": 52,
      "revenue": 10
    },
    "income": {
      "rate": 11,
      "satisfaction": 61,
      "revenue": 4
    },
    "customs": {
      "rate": 16,
      "satisfaction": 86,
      "revenue": 9
    },
    "environment": {
      "rate": 17,
      "satisfaction": 88,
      "revenue": 10
    },
    "transit_allied": { "rate": 5, "satisfaction": 85, "revenue": 2 },
    "transit_non_allied": { "rate": 15, "satisfaction": 75, "revenue": 5 },
    "other": {
      "rate": 27,
      "satisfaction": 93,
      "revenue": 10
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  "demand": {
    "satisfaction": 78,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 13,
    "commercial": 30,
    "industrial": 53,
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
      "soft_power": 34,
      "hard_power": 5,
      "diplomatic_prestige": 57,
    },
    "international_orgs": [
      {
        "name": "PBB (UN)",
        "role": "Member",
      },
      {
        "name": "WHO",
        "role": "Member",
      },
      {
        "name": "WTO",
        "role": "Member",
      }
    ],
    "agreements": [
      { "partner": "China", "type": "Trade", "status": "Active" },
      { "partner": "Inggris", "type": "Trade", "status": "Active" },
      { "partner": "Maroko", "type": "Trade", "status": "Active" },
      { "partner": "Uni Eropa", "type": "Trade", "status": "Active" },
      { "partner": "Ghana", "type": "Trade", "status": "Active" },
      { "partner": "Uni Emirat Arab", "type": "Trade", "status": "Active" },
      { "partner": "Ethiopia", "type": "Trade", "status": "Active" },
      { "partner": "Nigeria", "type": "Trade", "status": "Active" },
      { "partner": "Korea Selatan", "type": "Trade", "status": "Active" },
      { "partner": "India", "type": "Trade", "status": "Active" },
      { "partner": "Mesir", "type": "Trade", "status": "Active" },
      { "partner": "Amerika Serikat", "type": "Trade", "status": "Active" }
    ]
  },

  // =============================================================
  // 🏛️ KEMENTERIAN NEGARA (6 Jenis)
  // =============================================================

  "ministries": {
    "health": 31,
    "education": 35,
    "security": 4,
    "finance": 23,
    "environment": 60,
  }
};
