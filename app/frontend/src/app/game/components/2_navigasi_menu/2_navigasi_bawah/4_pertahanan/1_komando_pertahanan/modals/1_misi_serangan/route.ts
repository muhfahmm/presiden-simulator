/**
 * route.ts - Orchestrates the war mission initialization.
 * Connects the UI selection with logic scripts (Python/C++).
 */

import { WarMission, warMissionStorage } from "./logic_jalur/warMissionStorage";

export async function initializeWarMission(
  source: string, 
  target: string, 
  selectedUnits: Record<string, number>
): Promise<WarMission | null> {
  
  const sourceCoords = warMissionStorage.getCountryCoords(source);
  const targetCoords = warMissionStorage.getCountryCoords(target);

  if (!sourceCoords || !targetCoords) return null;

  // Determine unit types for visualization
  const unitTypes: ("air" | "sea" | "land")[] = [];
  const airUnits = ["jet_tempur_siluman", "jet_tempur_interceptor", "pesawat_pengebom", "helikopter_serang", "pesawat_pengintai", "drone_intai_uav", "drone_kamikaze", "pesawat_angkut"];
  const seaUnits = ["kapal_induk", "kapal_destroyer", "kapal_korvet", "kapal_selam_nuklir", "kapal_selam_regular", "kapal_ranjau", "kapal_logistik"];
  const landUnits = ["pasukan_infanteri", "tank_tempur_utama", "apc_ifv", "artileri_berat", "sistem_peluncur_roket", "pertahanan_udara_mobile", "kendaraan_taktis"];

  Object.entries(selectedUnits).forEach(([id, count]) => {
    if (count > 0) {
      if (airUnits.includes(id) && !unitTypes.includes("air")) unitTypes.push("air");
      if (seaUnits.includes(id) && !unitTypes.includes("sea")) unitTypes.push("sea");
      if (landUnits.includes(id) && !unitTypes.includes("land")) unitTypes.push("land");
    }
  });

  // Calculate path using "Python script logic" (simulated here for browser compatibility)
  // In a real server environment, we would use child_process.spawn('python', ...)
  const path = calculateSimulatedPath(sourceCoords, targetCoords);

  const mission: WarMission = {
    id: `mission_${Date.now()}_${Math.floor(Math.random() * 1000)}`,
    source,
    target,
    unitTypes,
    startTime: Date.now(),
    duration: 60000, // 60 seconds travel time for presentation
    path,
    status: "active"
  };

  warMissionStorage.addMission(mission);
  return mission;
}

/**
 * Generates a curved path for visualization.
 * This simulates the output of the path_realistic.py script.
 */
function calculateSimulatedPath(start: { lon: number, lat: number }, end: { lon: number, lat: number }) {
  const segments = 50;
  const path = [];
  
  for (let i = 0; i <= segments; i++) {
    const f = i / segments;
    // Simple Great-circle approximation for visual paths
    const lon = start.lon + (end.lon - start.lon) * f;
    const lat = start.lat + (end.lat - start.lat) * f;
    
    // Add a slight arc for "realism"
    const arcHeight = Math.sin(f * Math.PI) * 10; 
    path.push({ lon, lat: lat + arcHeight });
  }
  
  return path;
}
