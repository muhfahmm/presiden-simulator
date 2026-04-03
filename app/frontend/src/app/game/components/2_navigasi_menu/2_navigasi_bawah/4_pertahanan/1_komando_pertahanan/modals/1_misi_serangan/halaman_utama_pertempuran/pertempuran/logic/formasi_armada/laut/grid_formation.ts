import { UnitState } from "../../../logic/polyglot/ts/polyglot-router";
import { getUnitStats } from "../../../logic/polyglot/ts/unit_stats";

export const calculateLautFormation = (laut: any, startY: number): { units: UnitState[], nextY: number } => {
    const enemyInitial: UnitState[] = [];
    const unitsPerRow = 10;
    const spacingX = 250;
    const spacingY = 220;
    const groupGapY = 800;

    let unitIndex = 0;
    const shoreY = -6000;
    const pierDepth = 1500;

    Object.entries(laut).forEach(([type, count]) => {
        const numToSpawn = Math.min(count as number, 15); // Limit to 15 per type for harbor fit
        if (numToSpawn <= 0) return;

        const stats = getUnitStats(type);
        
        for (let i = 0; i < numToSpawn; i++) {
            // Alternate between Left Basin (X=-300) and Right Basin (X=300)
            const basinX = (unitIndex % 2 === 0) ? -350 : 350;
            const basinRow = Math.floor(unitIndex / 2);
            
            enemyInitial.push({
                id: `e_${type}_${i}_sea`,
                type: type,
                side: "enemy",
                pos: { 
                    x: basinX + (Math.random() * 80 - 40), // Slight jitter for realism
                    y: (shoreY - 200) - (basinRow * 250) // Stack them outwards into the sea
                },
                health: stats.maxHealth,
                rotation: -Math.PI / 2, // FACE NORTH (Upwards)
                influence: 150
            });
            unitIndex++;
        }
    });

    return { units: enemyInitial, nextY: shoreY + 1000 };
};
