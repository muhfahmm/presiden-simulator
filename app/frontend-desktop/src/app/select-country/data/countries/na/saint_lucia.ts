import { CountryData } from "../../types";

export const saint_lucia: CountryData = {
  "name_en": "Saint Lucia",
  "capital": "Castries",
  "name_id": "Saint lucia",
  "lon": -60.96666666,
  "lat": 13.88333333,
  "flag": "🇱🇨",
  "pop": "10M",
  "budget": 226000000000000,
  "income": "268.000.000.000.000 / 268 T",
  "religion": "Protestan",
  "ideology": "Kapitalisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 2,
    "hydro_plant": 39,
    "solar_plant": 28,
    "thermal_plant": 34,
    "gas_plant": 5,
    "wind_plant": 13,
    "power_grid": 56,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 3,
    "subway": 11,
    "railway": 25,
    "highway": 23,
    "road_quality": 85,
    "sea_port": 35,
    "airport": 39,
    "bus_terminal": 9,
    "helipad": 9,
    "internet_coverage": 91,
    "tech_stack": 92,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 24,
    "uranium": 28,
    "coal": 8,
    "oil": 10,
    "gas": 11,
    "salt": 35,
    "nickel": 19,
    "lithium": 39,
    "aluminum": 33,
    "copper": 40,
    "rare_earth": 2,
    "iron_ore": 7,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 33,
    "car": 2,
    "motorcycle": 22,
    "smelter": 27,
    "concrete_cement": 15,
    "wood": 1,
    "mineral_water": 2,
    "sugar": 24,
    "bread": 40,
    "pharmacy": 20,
    "fertilizer": 25,
    "meat_processing": 30,
    "instant_noodle": 33,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 6,
    "poultry": 17,
    "dairy_cow": 31,
    "beef_cow": 8,
    "sheep_goat": 9,
    "shrimp": 21,
    "fish": 40,
    "shellfish": 22,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 22,
    "wheat": 26,
    "corn": 35,
    "tubers": 9,
    "soy": 32,
    "palm_oil": 31,
    "tea": 10,
    "coffee": 34,
    "cocoa": 38,
    "sugarcane": 1,
    "vegetables": 22,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 10,
    "barracks": 22,
    "armory": 19,
    "tank_hangar": 34,
    "military_academy": 23,
    "budget": 8,
    "personnel": 29084,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 15,
        "apc": 98,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 8,
        "kapal_destroyer": 195,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 66,
        "helikopter_serang": 185,
        "pesawat_pengintai": 2
      },
      "total_unit": 30,
      "readiness": 98
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 11,
    "military_air_base": 37,
    "military_naval_base": 12,
    "arms_factory": 40,
    "nuclear_status": false,
    "space_program": 2,
    "cyber_defense": 33,
    "intelligence": 24,
    "strategic_operations": {
      "attack_mission": 1,
      "spy_mission": 11,
      "sabotage_mission": 30,
      "territory_management": 11,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 1,
      "radar_network": 1,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 13,
      "elementary_school": 27,
      "middle_school": 26,
      "high_school": 36,
      "university": 5,
      "education_institute": 3,
      "laboratory": 28,
      "observatory": 11,
      "research_center": 3,
      "development_center": 27,
      "literacy": 66,
      "research_index": 0
    },
    "health": {
      "large_hospital": 15,
      "small_hospital": 13,
      "diagnostic_center": 36,
      "hospital_beds": 4975,
      "life_expectancy": 17,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 19,
      "racing_circuit": 39,
      "stadium": 20,
      "international_stadium": 3,
      "olympic_score": 11,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 39,
      "court": 17,
      "prosecution_office": 13,
      "police_station": 38,
      "police_car_fleet": 5540,
      "police_academy": 6,
      "corruption_index": 71,
      "security_index": 60,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 21,
          "sepeda_motor": 2,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 19,
          "helikopter_polisi": 30,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 33,
          "kamera_surveillance": 15,
          "pusat_forensik": 1
        },
        "response_time": 16,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 36,
    "tanks": 32,
    "aircraft": 26,
    "naval": 16,
    "air_base": 2,
    "naval_base": 28,
    "military_base": 13,
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
      "rate": 12,
      "satisfaction": 67
    },
    "corporate": {
      "rate": 6,
      "satisfaction": 52
    },
    "income": {
      "rate": 29,
      "satisfaction": 61
    },
    "customs": {
      "rate": 11,
      "satisfaction": 86
    },
    "environment": {
      "rate": 5,
      "satisfaction": 88
    },
    "other": {
      "rate": 16,
      "satisfaction": 93
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  "demand": {
    "satisfaction": 91,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 40,
    "commercial": 9,
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
      "soft_power": 2,
      "hard_power": 19,
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
      { "partner": "India", "type": "Trade", "status": "Active" },
      { "partner": "Meksiko", "type": "Trade", "status": "Active" },
      { "partner": "Jerman", "type": "Trade", "status": "Active" },
      { "partner": "Jepang", "type": "Trade", "status": "Active" },
      { "partner": "Uni Emirat Arab", "type": "Trade", "status": "Active" },
      { "partner": "Korea Selatan", "type": "Trade", "status": "Active" },
      { "partner": "Inggris", "type": "Trade", "status": "Active" },
      { "partner": "Amerika Serikat", "type": "Trade", "status": "Active" },
      { "partner": "China", "type": "Trade", "status": "Active" },
      { "partner": "Kuba", "type": "Trade", "status": "Active" },
      { "partner": "Uni Eropa", "type": "Trade", "status": "Active" },
      { "partner": "Prancis", "type": "Trade", "status": "Active" },
      { "partner": "Singapura", "type": "Trade", "status": "Active" }
    ]
  },

  // =============================================================
  // 🏛️ KEMENTERIAN NEGARA (6 Jenis)
  // =============================================================

  "ministries": {
    "health": 35,
    "education": 21,
    "security": 16,
    "finance": 28,
    "environment": 60
  }
};
