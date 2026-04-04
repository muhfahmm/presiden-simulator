import { UnitState, Vector2 } from "../../../../../polyglot/ts/polyglot-router";
import { getUnitStats } from "../../../../../polyglot/ts/unit_stats";
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
     * Process port tactical tick.
     */
    static processNavalPortTick(
        portShips: PortShipState[],
        units: UnitState[],
        now: number
    ): { nextPortShips: PortShipState[], newSpawned: UnitState[] } {
        const newSpawned: UnitState[] = [];
        const cooldown = 3500; // 3.5s

        const harbor = portRouter.getTacticalHarbor();
        const harborCenter = { x: 0, y: -6000 };

        const nextPortShips = portShips.map(p => {
            if (p.currentCount > 0 && 
                (now - (p.lastSpawned || 0)) > cooldown &&
                this.isEnemyNearby(harborCenter, units, this.RADAR_THRESHOLD)) {
                
                p.currentCount -= 1;
                p.lastSpawned = now;
                const stats = getUnitStats(p.type);
                
                const pier = harbor.piers[Math.floor(Math.random() * harbor.piers.length)];
                const startY = pier.endY - 100;
                
                newSpawned.push({
                    id: `dep_ship_${p.type}_${now}_${Math.random()}`,
                    type: p.type, side: "enemy",
                    pos: { x: pier.endX, y: startY },
                    health: stats.maxHealth, rotation: -Math.PI / 2, influence: 500,
                    path: [
                        { x: pier.endX, y: startY - 1000 }, 
                        { x: pier.endX + (Math.random() * 2000 - 1000), y: startY - 2500 }
                    ]
                });
            }
            return p;
        });

        return { nextPortShips, newSpawned };
    }
}
