
export interface HangarState {
    id: string;
    vehicleType: string; // tank_tempur_utama, apc_ifv, kendaraan_taktis
    pos: { x: number, y: number };
    currentCount: number;
    maxCapacity: number;
    lastSpawned?: number;
    rallyPoint?: { x: number, y: number };
    trainingQueue?: { type: string, progress: number, totalTime: number }[];
}

export class HangarUtils {
    static readonly WIDTH = 700;
    static readonly HEIGHT = 450;
    static readonly GAP_X = 150;
    static readonly GAP_Y = 150;
    static readonly MAX_PER_HANGAR = 50;

    /**
     * Calculate position and capacity for hangars of a single vehicle type.
     */
    static calculateHangarPositions(centerX: number, topY: number, totalVehicles: number, hangarCount: number, cols: number = 5, vehicleType: string = 'tank_tempur_utama'): HangarState[] {
        if (hangarCount <= 0 || totalVehicles <= 0) return [];

        const actualCols = Math.min(hangarCount, cols);
        const totalWidth = actualCols * this.WIDTH + (actualCols - 1) * this.GAP_X;
        const startX = centerX - totalWidth / 2 + this.WIDTH / 2;

        const hangars: HangarState[] = [];
        let remaining = totalVehicles;

        for (let i = 0; i < hangarCount; i++) {
            const row = Math.floor(i / cols);
            const col = i % cols;

            const capacity = Math.min(remaining, this.MAX_PER_HANGAR);
            remaining -= capacity;

            hangars.push({
                id: `hangar_${vehicleType}_${i}`,
                vehicleType,
                pos: {
                    x: startX + col * (this.WIDTH + this.GAP_X),
                    y: topY + row * (this.HEIGHT + this.GAP_Y)
                },
                currentCount: capacity,
                maxCapacity: this.MAX_PER_HANGAR
            });
        }
        return hangars;
    }

    /**
     * Create hangars for all 3 ground vehicle categories, stacked vertically.
     * 1. Tank (tank_tempur_utama)
     * 2. APC / IFV (apc_ifv)
     * 3. Kendaraan Taktis (kendaraan_taktis)
     */
    static calculateMultiCategoryHangars(centerX: number, topY: number, armada: any, cols: number = 10): HangarState[] {
        const categories = [
            { type: 'tank_tempur_utama', count: armada.darat?.tank_tempur_utama || 0 },
            { type: 'apc_ifv', count: armada.darat?.apc_ifv || 0 },
            { type: 'kendaraan_taktis', count: armada.darat?.kendaraan_taktis || 0 },
        ];

        let allHangars: HangarState[] = [];
        let currentY = topY;

        for (const cat of categories) {
            if (cat.count <= 0) continue;

            const hangarCount = Math.ceil(cat.count / this.MAX_PER_HANGAR);
            const hangars = this.calculateHangarPositions(centerX, currentY, cat.count, hangarCount, cols, cat.type);
            allHangars = [...allHangars, ...hangars];

            // Advance Y for the next category (rows used + gap)
            const rowsUsed = Math.ceil(hangarCount / cols);
            currentY += rowsUsed * (this.HEIGHT + this.GAP_Y) + 200; // 200px gap between categories
        }

        return allHangars;
    }
}
