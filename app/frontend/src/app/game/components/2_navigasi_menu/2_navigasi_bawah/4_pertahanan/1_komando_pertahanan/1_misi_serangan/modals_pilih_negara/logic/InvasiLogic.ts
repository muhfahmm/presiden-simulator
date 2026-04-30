import { CountryData } from "@/app/database/data/semua_fitur_negara/index";

// List of landlocked countries (tidak memiliki laut)
const landlockedCountries = [
  "Afghanistan", "Andorra", "Armenia", "Austria", "Azerbaijan", "Belarus", 
  "Bhutan", "Bolivia", "Botswana", "Burkina Faso", "Burundi", "Central African Republic", 
  "Chad", "Czech Republic", "Eswatini", "Ethiopia", "Hungary", "Kazakhstan", 
  "Kyrgyzstan", "Laos", "Lesotho", "Liechtenstein", "Luxembourg", "Malawi", 
  "Mali", "Moldova", "Mongolia", "Nepal", "Niger", "North Macedonia", 
  "Paraguay", "Rwanda", "San Marino", "Serbia", "Slovakia", "South Sudan", 
  "Switzerland", "Tajikistan", "Turkmenistan", "Uganda", "Uzbekistan", 
  "Vatican City", "Zambia", "Zimbabwe",
  // Indonesian names fallback
  "Afganistan", "Republik Afrika Tengah", "Republik Ceko", "Makedonia Utara", "Vatikan"
];

import { hitungJalurInvasi, JalurResult } from "./visual_dan_jalur/JalurInvasiLogic";

export interface InvasiUnit {
  type: 'pesawat' | 'kapal' | 'tank';
  modelUrl: string; // URL model 3D realistis
  count: number;
}

export const luncurkanInvasi = (playerCountry: CountryData, targetCountry: CountryData, deployments: Record<string, number>): { units: InvasiUnit[], path: JalurResult | null } => {
  const units: InvasiUnit[] = [];

  // Peta tipe unit berdasar kategori
  const unitTypeMap: Record<string, { type: 'pesawat' | 'kapal' | 'tank', modelUrl: string }> = {
    // Darat
    tank_tempur_utama: { type: 'tank', modelUrl: '/models/realistic_tank.glb' },
    apc_ifv: { type: 'tank', modelUrl: '/models/realistic_apc.glb' },
    artileri_berat: { type: 'tank', modelUrl: '/models/realistic_artillery.glb' },
    sistem_peluncur_roket: { type: 'tank', modelUrl: '/models/realistic_mlrs.glb' },
    pertahanan_udara_mobile: { type: 'tank', modelUrl: '/models/realistic_sam.glb' },
    kendaraan_taktis: { type: 'tank', modelUrl: '/models/realistic_tactical.glb' },
    
    // Udara
    jet_tempur_siluman: { type: 'pesawat', modelUrl: '/models/realistic_stealth_jet.glb' },
    jet_tempur_interceptor: { type: 'pesawat', modelUrl: '/models/realistic_fighter_jet.glb' },
    pesawat_pengebom: { type: 'pesawat', modelUrl: '/models/realistic_bomber.glb' },
    helikopter_serang: { type: 'pesawat', modelUrl: '/models/realistic_attack_heli.glb' },
    pesawat_pengintai: { type: 'pesawat', modelUrl: '/models/realistic_awacs.glb' },
    drone_intai_uav: { type: 'pesawat', modelUrl: '/models/realistic_drone.glb' },
    drone_kamikaze: { type: 'pesawat', modelUrl: '/models/realistic_kamikaze.glb' },
    pesawat_angkut: { type: 'pesawat', modelUrl: '/models/realistic_transport_plane.glb' },

    // Laut
    kapal_induk: { type: 'kapal', modelUrl: '/models/realistic_carrier.glb' },
    kapal_induk_nuklir: { type: 'kapal', modelUrl: '/models/realistic_nuclear_carrier.glb' },
    kapal_destroyer: { type: 'kapal', modelUrl: '/models/realistic_battleship.glb' },
    kapal_korvet: { type: 'kapal', modelUrl: '/models/realistic_corvette.glb' },
    kapal_selam_nuklir: { type: 'kapal', modelUrl: '/models/realistic_nuclear_sub.glb' },
    kapal_selam_regular: { type: 'kapal', modelUrl: '/models/realistic_sub.glb' },
    kapal_ranjau: { type: 'kapal', modelUrl: '/models/realistic_mine_sweeper.glb' },
    kapal_logistik: { type: 'kapal', modelUrl: '/models/realistic_logistics_ship.glb' },
  };

  const isLandlocked = landlockedCountries.some(
    country => targetCountry.name_en.toLowerCase() === country.toLowerCase() || 
               targetCountry.name_id.toLowerCase() === country.toLowerCase()
  );

  for (const [key, count] of Object.entries(deployments)) {
      if (count > 0 && unitTypeMap[key]) {
          const unitData = unitTypeMap[key];
          
          // Anulir armada laut jika negara landlocked
          if (unitData.type === 'kapal' && isLandlocked) {
              continue;
          }

          units.push({
              type: unitData.type,
              modelUrl: unitData.modelUrl,
              count: count
          });
      }
  }
  
  let path: JalurResult | null = null;
  
  if (playerCountry.lat !== undefined && playerCountry.lon !== undefined && 
      targetCountry.lat !== undefined && targetCountry.lon !== undefined) {
      path = hitungJalurInvasi(
          { lat: Number(playerCountry.lat), lon: Number(playerCountry.lon) },
          { lat: Number(targetCountry.lat), lon: Number(targetCountry.lon) }
      );
  }

  // Trigger event ke Main Map (Canvas/Three.js/Mapbox)
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('SPAWN_INVASION_UNITS', { 
        detail: { targetCountry, units, path } 
    }));
  }

  return { units, path };
};
