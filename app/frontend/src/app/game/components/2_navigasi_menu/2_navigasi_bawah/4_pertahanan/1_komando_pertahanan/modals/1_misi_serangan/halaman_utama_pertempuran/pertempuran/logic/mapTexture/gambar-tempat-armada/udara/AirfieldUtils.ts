
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
     * Calculate positions for helipads dynamically.
     * 1 helipad = max 10 helicopters.
     * Pads are placed in two groups flanking the airfield center, 
     * expanding outward as more pads are needed.
     */
    static calculateHelipadPositions(centerX: number, topY: number, count: number, totalHelis: number): HelipadState[] {
        if (count <= 0 || totalHelis <= 0) return [];
        
        const MAX_PER_PAD = 10;
        const padSpacing = 400; // Spacing between pads in the same group
        const groupGap = 600;   // Half-gap between left group and right group

        const helipads: HelipadState[] = [];
        let remainingHelis = totalHelis;

        for (let i = 0; i < count; i++) {
            const hCount = Math.min(remainingHelis, MAX_PER_PAD);
            remainingHelis -= hCount;

            // Position: alternate left-right groups, expanding outward
            // i=0 → left close, i=1 → right close, i=2 → left far, i=3 → right far, etc.
            const side = i % 2 === 0 ? -1 : 1; // left or right
            const rank = Math.floor(i / 2);     // how far out
            const offsetX = side * (groupGap + rank * padSpacing);

            helipads.push({
                id: `helipad_${i}`,
                pos: { x: centerX + offsetX, y: topY },
                currentCount: hCount,
                maxCapacity: MAX_PER_PAD
            });
        }
        return helipads;
    }
}
