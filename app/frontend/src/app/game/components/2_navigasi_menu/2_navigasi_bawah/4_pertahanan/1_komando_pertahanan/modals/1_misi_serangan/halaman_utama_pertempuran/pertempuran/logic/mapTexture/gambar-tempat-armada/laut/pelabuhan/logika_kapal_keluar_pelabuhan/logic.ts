import { UnitState, Vector2 } from "../../../../../polyglot/ts/polyglot-router";
import { getUnitStats, getUnitDomain } from "../../../../../polyglot/ts/unit_stats";
import { portRouter } from "../../../../../polyglot/ts/port-router";

export interface PortShipState {
   type: string;
   currentCount: number;
   maxCapacity: number;
   lastSpawned?: number;
}

/**
 * Naval Deployment Logic - Port/Ship Management
 */
export class NavalDeploymentLogic {
    static readonly RADAR_THRESHOLD = 7000;

    static isEnemyNearby(
        harborPos: Vector2, 
        units: UnitState[], 
        threshold: number = this.RADAR_THRESHOLD
    ): boolean {
        return units.some(unit => {
            if (unit.side !== 'user') return false;
            
            const dx = unit.pos.x - harborPos.x;
            const dy = unit.pos.y - harborPos.y;
            const distanceSq = dx * dx + dy * dy;
            
            return distanceSq < (threshold * threshold);
        });
    }

    /**
     * Process port tactical tick with SEQUENTIAL & REACTIVE deployment.
     */
    static processNavalPortTick(
        portShips: PortShipState[],
        units: UnitState[],
        now: number
    ): { nextPortShips: PortShipState[], newSpawned: UnitState[] } {
        const newSpawned: UnitState[] = [];
        const cooldown = 3500; // 3.5s

        // REACTIVE LOGIC: AI only spawns ships if user has ships in the sea
        const userHasShips = units.some(u => u.side === 'user' && getUnitDomain(u.type) === 'sea');
        if (!userHasShips) {
            return { nextPortShips: portShips, newSpawned: [] };
        }

        const harbor = portRouter.getTacticalHarbor();
        const harborCenter = { x: 0, y: -6000 };

        // Step 1: Find ACTIVE ship type (sequential)
        let activeIdx = -1;
        for (let i = 0; i < portShips.length; i++) {
            if (portShips[i].currentCount > 0) {
                activeIdx = i;
                break;
            }
        }

        const nextPortShips = portShips.map((p, i) => {
            if (i !== activeIdx) return { ...p };

            // WAVE CHECK: Count active ships of THIS type from enemy side
            const activeCount = units.filter(u => 
                u.side === 'enemy' && 
                u.type === p.type && 
                u.id.includes(`dep_ship_`) && 
                u.health > 0
            ).length;

            const waveSize = 10;
            const canSpawnWave = activeCount === 0 && p.currentCount > 0;

            if (canSpawnWave && 
                (now - (p.lastSpawned || 0)) > cooldown &&
                this.isEnemyNearby(harborCenter, units, this.RADAR_THRESHOLD)) {
                
                const stats = getUnitStats(p.type);
                const spawnAmount = Math.min(p.currentCount, waveSize);
                
                for (let j = 0; j < spawnAmount; j++) {
                    const pier = harbor.piers[j % harbor.piers.length];
                    const startY = pier.endY - 100;
                    
                    newSpawned.push({
                        id: `dep_ship_${p.type}_w${now}_${j}`,
                        type: p.type, side: "enemy",
                        pos: { x: pier.endX + (j * 40), y: startY },
                        health: stats.maxHealth, rotation: -Math.PI / 2, influence: 500,
                        path: [
                            { x: pier.endX, y: startY - 1000 - (j * 100) }, 
                            { x: pier.endX + (Math.random() * 2000 - 1000), y: startY - 2500 }
                        ]
                    });
                }

                return {
                    ...p,
                    currentCount: p.currentCount - spawnAmount,
                    lastSpawned: now
                };
            }
            return { ...p };
        });

        return { nextPortShips, newSpawned };
    }
}
