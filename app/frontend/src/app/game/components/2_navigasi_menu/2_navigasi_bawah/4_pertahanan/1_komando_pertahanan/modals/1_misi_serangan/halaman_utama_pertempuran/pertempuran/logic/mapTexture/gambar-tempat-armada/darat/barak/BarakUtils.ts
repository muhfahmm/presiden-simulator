export interface BarrackState {
    id: string;
    pos: { x: number, y: number };
    currentPersonnel: number;
    maxCapacity: number;
    lastSpawned?: number;
    rallyPoint?: { x: number, y: number };
    trainingQueue?: { type: string, progress: number, totalTime: number }[];
}

export class BarakUtils {
    static readonly WIDTH = 400;
    static readonly HEIGHT = 200;
    static readonly GAP_X = 150;
    static readonly GAP_Y = 150;

    /**
     * Calculate position for all barracks in a grid.
     */
    static calculateBarracksPositions(centerX: number, topY: number, count: number, cols: number = 10): BarrackState[] {
        if (count <= 0) return [];

        const actualCols = Math.min(count, cols);
        const totalWidth = actualCols * this.WIDTH + (actualCols - 1) * this.GAP_X;
        const startX = centerX - totalWidth / 2 + this.WIDTH / 2;

        const barracks: BarrackState[] = [];
        for (let i = 0; i < count; i++) {
            const row = Math.floor(i / cols);
            const col = i % cols;

            barracks.push({
                id: `barack_${i}`,
                pos: {
                    x: startX + col * (this.WIDTH + this.GAP_X),
                    y: topY + row * (this.HEIGHT + this.GAP_Y)
                },
                currentPersonnel: 10000,
                maxCapacity: 10000
            });
        }
        return barracks;
    }
}
