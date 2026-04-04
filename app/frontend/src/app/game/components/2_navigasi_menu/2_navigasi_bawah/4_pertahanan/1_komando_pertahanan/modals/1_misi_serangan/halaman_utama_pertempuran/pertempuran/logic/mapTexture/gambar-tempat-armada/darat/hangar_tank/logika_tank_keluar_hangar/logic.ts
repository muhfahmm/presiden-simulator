import { UnitState, Vector2 } from "../../../../../polyglot/ts/polyglot-router";
import { getUnitStats } from "../../../../../polyglot/ts/unit_stats";
import { HangarState } from "../HangarUtils";

/**
 * Tank Deployment Logic - Hangar Management
 */
export class TankDeploymentLogic {
    static readonly ENGAGEMENT_THRESHOLD = 4000;

    static isEnemyNearby(
        hangarPos: Vector2, 
        units: UnitState[], 
        threshold: number = this.ENGAGEMENT_THRESHOLD
    ): boolean {
        return units.some(unit => {
            if (unit.side !== 'user') return false;
            
            const dx = unit.pos.x - hangarPos.x;
            const dy = unit.pos.y - hangarPos.y;
            const distanceSq = dx * dx + dy * dy;
            
            return distanceSq < (threshold * threshold);
        });
    }

    /**
     * Process tank hangar tactical tick.
     */
    static processTankHangarTick(
        hangars: HangarState[],
        units: UnitState[],
        now: number
    ): { nextHangars: HangarState[], newSpawned: UnitState[] } {
        const newSpawned: UnitState[] = [];
        const cooldown = 2000; // 2s

        const nextHangars = hangars.map(h => {
            if (h.currentCount > 0 && 
                (now - (h.lastSpawned || 0)) > cooldown &&
                this.isEnemyNearby(h.pos, units, this.ENGAGEMENT_THRESHOLD)) {
                
                h.currentCount -= 1;
                h.lastSpawned = now;
                const stats = getUnitStats("tank_tempur_utama");
                
                newSpawned.push({
                    id: `dep_tank_${h.id}_${now}_${Math.random()}`,
                    type: "tank_tempur_utama", side: "enemy",
                    pos: { x: h.pos.x, y: h.pos.y + 200 },
                    health: stats.maxHealth, rotation: Math.PI, influence: 300
                });
            }
            return h;
        });

        return { nextHangars, newSpawned };
    }
}
