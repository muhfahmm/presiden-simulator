import { CountryData } from "../../types";

export const bermuda: CountryData = {
  "name_en": "Bermuda",
  "capital": "Hamilton",
  "name_id": "Bermuda",
  "lon": -64.75,
  "lat": 32.33333333,
  "flag": "🇧🇲",
  "pop": "10M",
  "budget": 97,
  "income": "278",
  "religion": "Protestan",
  "ideology": "Kapitalisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 19,
    "hydro_plant": 29,
    "solar_plant": 25,
    "thermal_plant": 9,
    "gas_plant": 15,
    "wind_plant": 4,
    "power_grid": 79,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 24,
    "subway": 31,
    "railway": 21,
    "highway": 39,
    "road_quality": 67,
    "sea_port": 1,
    "airport": 37,
    "bus_terminal": 39,
    "helipad": 29,
    "internet_coverage": 67,
    "tech_stack": 52,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 15,
    "uranium": 11,
    "coal": 11,
    "oil": 16,
    "gas": 28,
    "salt": 32,
    "nickel": 20,
    "lithium": 25,
    "aluminum": 21,
    "copper": 21,
    "rare_earth": 36,
    "iron_ore": 8,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 22,
    "car": 15,
    "motorcycle": 13,
    "smelter": 4,
    "concrete_cement": 34,
    "wood": 38,
    "mineral_water": 20,
    "sugar": 22,
    "bread": 28,
    "pharmacy": 17,
    "fertilizer": 31,
    "meat_processing": 40,
    "instant_noodle": 3,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 10,
    "poultry": 31,
    "dairy_cow": 10,
    "beef_cow": 33,
    "sheep_goat": 13,
    "shrimp": 17,
    "fish": 15,
    "shellfish": 40,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 33,
    "wheat": 35,
    "corn": 37,
    "tubers": 26,
    "soy": 22,
    "palm_oil": 33,
    "tea": 13,
    "coffee": 20,
    "cocoa": 38,
    "sugarcane": 23,
    "vegetables": 2,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 12,
    "barracks": 39,
    "armory": 21,
    "tank_hangar": 15,
    "military_academy": 37,
    "budget": 11,
    "personnel": 9667,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 89,
        "apc": 153,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 3,
        "kapal_destroyer": 158,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 79,
        "helikopter_serang": 80,
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
    "command_center": 28,
    "military_air_base": 10,
    "military_naval_base": 39,
    "arms_factory": 14,
    "nuclear_status": false,
    "space_program": 39,
    "cyber_defense": 37,
    "intelligence": 39,
    "strategic_operations": {
      "attack_mission": 15,
      "spy_mission": 32,
      "sabotage_mission": 28,
      "territory_management": 30,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 0,
      "radar_network": 1,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 28,
      "elementary_school": 35,
      "middle_school": 3,
      "high_school": 21,
      "university": 6,
      "education_institute": 29,
      "laboratory": 40,
      "observatory": 23,
      "research_center": 20,
      "development_center": 6,
      "literacy": 94,
      "research_index": 0
    },
    "health": {
      "large_hospital": 16,
      "small_hospital": 31,
      "diagnostic_center": 40,
      "hospital_beds": 5996,
      "life_expectancy": 31,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 39,
      "racing_circuit": 40,
      "stadium": 19,
      "international_stadium": 22,
      "olympic_score": 28,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 30,
      "court": 12,
      "prosecution_office": 14,
      "police_station": 4,
      "police_car_fleet": 6328,
      "police_academy": 24,
      "corruption_index": 56,
      "security_index": 85,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 5,
          "sepeda_motor": 32,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 9,
          "helikopter_polisi": 12,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 8,
          "kamera_surveillance": 12,
          "pusat_forensik": 1
        },
        "response_time": 5,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 6,
    "tanks": 12,
    "aircraft": 23,
    "naval": 37,
    "air_base": 17,
    "naval_base": 10,
    "military_base": 29,
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
      "rate": 26,
      "satisfaction": 67,
      "revenue": 7
    },
    "corporate": {
      "rate": 21,
      "satisfaction": 52,
      "revenue": 5
    },
    "income": {
      "rate": 20,
      "satisfaction": 61,
      "revenue": 3
    },
    "customs": {
      "rate": 16,
      "satisfaction": 86,
      "revenue": 4
    },
    "environment": {
      "rate": 26,
      "satisfaction": 88,
      "revenue": 5
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

  "demand": {
    "satisfaction": 63,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 25,
    "commercial": 12,
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
      "soft_power": 5,
      "hard_power": 22,
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
    "agreements": [
      { "partner": "Amerika Serikat", "type": "Trade", "status": "Active" },
      { "partner": "India", "type": "Trade", "status": "Active" },
      { "partner": "Uni Eropa", "type": "Trade", "status": "Active" },
      { "partner": "China", "type": "Trade", "status": "Active" },
      { "partner": "Jepang", "type": "Trade", "status": "Active" },
      { "partner": "Inggris", "type": "Trade", "status": "Active" },
      { "partner": "Kanada", "type": "Trade", "status": "Active" },
      { "partner": "Prancis", "type": "Trade", "status": "Active" },
      { "partner": "Korea Selatan", "type": "Trade", "status": "Active" },
      { "partner": "Uni Emirat Arab", "type": "Trade", "status": "Active" },
      { "partner": "Singapura", "type": "Trade", "status": "Active" },
      { "partner": "Kuba", "type": "Trade", "status": "Active" },
      { "partner": "Jerman", "type": "Trade", "status": "Active" },
      { "partner": "Meksiko", "type": "Trade", "status": "Active" }
    ]
  },

  // =============================================================
  // 🏛️ KEMENTERIAN NEGARA (6 Jenis)
  // =============================================================

  "ministries": {
    "health": 33,
    "education": 35,
    "security": 27,
    "finance": 38,
    "environment": 60
  }
};
