
export interface ArmoryState {
    id: string;
    weaponType: string; // artileri_berat, sistem_peluncur_roket, pertahanan_udara_mobile
    pos: { x: number, y: number };
    currentCount: number;
    maxCapacity: number;
    lastSpawned?: number;
    rallyPoint?: { x: number, y: number };
    trainingQueue?: { type: string, progress: number, totalTime: number }[];
}

export class ArmoryUtils {
    static readonly WIDTH = 800;  // Slightly larger than tanks
    static readonly HEIGHT = 500;
    static readonly GAP_X = 200;
    static readonly GAP_Y = 200;
    static readonly MAX_PER_BUILDING = 50;

    /**
     * Calculate positions for Armory buildings (Gudang Senjata).
     * Grouped by weapon type.
     */
    static calculateArmoryPositions(centerX: number, topY: number, armada: any, cols: number = 8): ArmoryState[] {
        const categories = [
            { type: 'artileri_berat', count: armada.darat?.artileri_berat || 0 },
            { type: 'sistem_peluncur_roket', count: armada.darat?.sistem_peluncur_roket || 0 },
            { type: 'pertahanan_udara_mobile', count: armada.darat?.pertahanan_udara_mobile || 0 },
        ];

        let allArmories: ArmoryState[] = [];
        let currentY = topY;

        for (const cat of categories) {
            if (cat.count <= 0) continue;

            const buildingCount = Math.ceil(cat.count / this.MAX_PER_BUILDING);
            const actualCols = Math.min(buildingCount, cols);
            const totalWidth = actualCols * this.WIDTH + (actualCols - 1) * this.GAP_X;
            const startX = centerX - totalWidth / 2 + this.WIDTH / 2;

            let remaining = cat.count;

            for (let i = 0; i < buildingCount; i++) {
                const row = Math.floor(i / cols);
                const col = i % cols;

                const capacity = Math.min(remaining, this.MAX_PER_BUILDING);
                remaining -= capacity;

                allArmories.push({
                    id: `armory_${cat.type}_${i}`,
                    weaponType: cat.type,
                    pos: {
                        x: startX + col * (this.WIDTH + this.GAP_X),
                        y: currentY + row * (this.HEIGHT + this.GAP_Y)
                    },
                    currentCount: capacity,
                    maxCapacity: this.MAX_PER_BUILDING
                });
            }

            // Advance Y for the next category
            const rowsUsed = Math.ceil(buildingCount / cols);
            currentY += rowsUsed * (this.HEIGHT + this.GAP_Y) + 250;
        }

        return allArmories;
    }
}
