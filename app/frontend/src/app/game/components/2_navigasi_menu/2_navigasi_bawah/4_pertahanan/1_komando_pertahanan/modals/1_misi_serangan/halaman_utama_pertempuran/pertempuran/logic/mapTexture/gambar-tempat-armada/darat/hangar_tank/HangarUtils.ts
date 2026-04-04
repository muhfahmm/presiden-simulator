
export interface HangarState {
    id: string;
    pos: { x: number, y: number };
    currentCount: number;
    maxCapacity: number;
    lastSpawned?: number;
}

export class HangarUtils {
    static readonly WIDTH = 700;
    static readonly HEIGHT = 450;
    static readonly GAP_X = 150;
    static readonly GAP_Y = 150;

    /**
     * Calculate position and capacity for tank hangars.
     * Each hangar holds 50 tanks.
     */
    static calculateHangarPositions(centerX: number, topY: number, totalTanks: number, hangarCount: number, cols: number = 5): HangarState[] {
        if (hangarCount <= 0) return [];

        const tanksPerHangar = 50;
        const count = hangarCount;
        
        const actualCols = Math.min(count, cols);
        const totalWidth = actualCols * this.WIDTH + (actualCols - 1) * this.GAP_X;
        const startX = centerX - totalWidth / 2 + this.WIDTH / 2;

        const hangars: HangarState[] = [];
        let remainingTanks = totalTanks;

        for (let i = 0; i < count; i++) {
            const row = Math.floor(i / cols);
            const col = i % cols;

            const capacityForThisHangar = Math.min(remainingTanks, tanksPerHangar);
            remainingTanks -= capacityForThisHangar;

            hangars.push({
                id: `hangar_${i}`,
                pos: {
                    x: startX + col * (this.WIDTH + this.GAP_X),
                    y: topY + row * (this.HEIGHT + this.GAP_Y)
                },
                currentCount: capacityForThisHangar, // Initial count matches capacity in database
                maxCapacity: tanksPerHangar
            });
        }
        return hangars;
    }
}
