
export interface AirfieldHangarState {
    id: string;
    type: string; // jet_tempur_siluman, etc.
    pos: { x: number, y: number };
    currentCount: number;
    maxCapacity: number;
    lastSpawned?: number;
}

export interface HelipadState {
    id: string;
    pos: { x: number, y: number };
    currentCount: number;
    maxCapacity: number;
    lastSpawned?: number;
}

export class AirfieldUtils {
    /**
     * Calculate positions for airfield hangars based on BandaraEngine's runway configs.
     */
    static calculateAirfieldHangars(centerX: number, centerY: number, armada: any): AirfieldHangarState[] {
        const runwayLen = 5000;
        const spacingY = 450;
        const numRunways = 7;
        const totalSpan = (numRunways - 1) * spacingY;
        
        // Match visual hangar position in BandaraEngine
        const hangarX = centerX + runwayLen / 2 + 250;

        const runwayConfigs = [
            { name: "Jet Stealth", key: "jet_tempur_siluman" },
            { name: "Jet Interceptor", key: "jet_tempur_interceptor" },
            { name: "Pesawat Pengebom", key: "pesawat_pengebom" },
            { name: "Pesawat Intai", key: "pesawat_pengintai" },
            { name: "Drone UAV", key: "drone_intai_uav" },
            { name: "Drone Kamikaze", key: "drone_kamikaze" },
            { name: "Pesawat Angkut", key: "pesawat_angkut" }
        ];

        const hangars: AirfieldHangarState[] = [];
        for (let i = 0; i < numRunways; i++) {
            const yOff = i * spacingY - totalSpan / 2;
            const config = runwayConfigs[i];
            const count = armada?.udara?.[config.key] || 0;

            hangars.push({
                id: `air_hangar_${config.key}`,
                type: config.key,
                pos: { x: hangarX, y: centerY + yOff },
                currentCount: count,
                maxCapacity: count
            });
        }
        return hangars;
    }

    /**
     * Calculate positions for helipads aligned with CanvasMapWar offsets.
     */
    static calculateHelipadPositions(centerX: number, topY: number, count: number, totalHelis: number): HelipadState[] {
        if (count <= 0) return [];
        
        // Match the 4 manual offsets from CanvasMapWar.ts
        const offsets = [-1100, -1500, 1100, 1500];
        const helisPerPad = Math.ceil(totalHelis / count);

        const helipads: HelipadState[] = [];
        let remainingHelis = totalHelis;

        for (let i = 0; i < count; i++) {
            const hCount = Math.min(remainingHelis, helisPerPad);
            remainingHelis -= hCount;

            helipads.push({
                id: `helipad_${i}`,
                pos: { x: centerX + (offsets[i] || 0), y: topY },
                currentCount: hCount,
                maxCapacity: helisPerPad
            });
        }
        return helipads;
    }
}
