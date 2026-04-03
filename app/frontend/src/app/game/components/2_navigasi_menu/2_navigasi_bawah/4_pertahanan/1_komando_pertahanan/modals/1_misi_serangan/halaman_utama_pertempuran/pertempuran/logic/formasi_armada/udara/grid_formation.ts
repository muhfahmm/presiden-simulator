import { UnitState } from "../../../logic/polyglot/ts/polyglot-router";
import { getUnitStats } from "../../../logic/polyglot/ts/unit_stats";

export const calculateUdaraFormation = (udara: any, startY: number): { units: UnitState[], nextY: number } => {
    const enemyInitial: UnitState[] = [];
    const unitsPerRow = 10;
    const spacingX = 250;
    const spacingY = 220;
    const groupGapY = 800;

    let currentY = startY;

    if (!udara) return { units: [], nextY: currentY };

    Object.entries(udara).forEach(([type, count]) => {
        const numToSpawn = Math.min(count as number, 30);
        if (numToSpawn <= 0) return;

        const stats = getUnitStats(type);
        
        for (let i = 0; i < numToSpawn; i++) {
            const row = Math.floor(i / unitsPerRow);
            const col = i % unitsPerRow;

            enemyInitial.push({
                id: `e_${type}_${i}`,
                type: type,
                side: "enemy",
                pos: { 
                    x: -((unitsPerRow * spacingX) / 2) + (col * spacingX) + (spacingX / 2), 
                    y: currentY + (row * spacingY)
                },
                health: stats.maxHealth,
                rotation: Math.PI,
                influence: type.includes('tank') ? 400 : 150
            });
        }
        
        const numRows = Math.ceil(numToSpawn / unitsPerRow);
        currentY += (numRows * spacingY) + groupGapY;
    });

    return { units: enemyInitial, nextY: currentY };
};
