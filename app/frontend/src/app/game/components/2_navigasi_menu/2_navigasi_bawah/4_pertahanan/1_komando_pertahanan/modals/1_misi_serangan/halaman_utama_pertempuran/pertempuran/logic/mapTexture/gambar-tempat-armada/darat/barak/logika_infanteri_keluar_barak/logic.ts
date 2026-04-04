import { UnitState, Vector2 } from "../../../../../polyglot/ts/polyglot-router";
import { getUnitStats } from "../../../../../polyglot/ts/unit_stats";
import { BarrackState } from "../BarakUtils";

/**
 * Infantry Deployment Logic - Barracks Management
 * Handles sequential spawning when player units approach.
 */
export class InfantryDeploymentLogic {
    static readonly ENGAGEMENT_THRESHOLD = 3000;

    static isEnemyNearby(
        barrackPos: Vector2, 
        units: UnitState[], 
        threshold: number = this.ENGAGEMENT_THRESHOLD
    ): boolean {
        return units.some(unit => {
            if (unit.side !== 'user') return false;
            
            const dx = unit.pos.x - barrackPos.x;
            const dy = unit.pos.y - barrackPos.y;
            const distanceSq = dx * dx + dy * dy;
            
            return distanceSq < (threshold * threshold);
        });
    }

    /**
     * Process barracks tactical tick for sequential squad deployment.
     */
    static processBarracksTick(
        barracks: BarrackState[],
        units: UnitState[],
        now: number
    ): { nextBarracks: BarrackState[], newSpawned: UnitState[] } {
        const newSpawned: UnitState[] = [];
        const cooldown = 1500; // 1.5s between squad deployments

        const nextBarracks = barracks.map(b => {
            if (b.currentPersonnel > 0 && 
                (now - (b.lastSpawned || 0)) > cooldown &&
                this.isEnemyNearby(b.pos, units, this.ENGAGEMENT_THRESHOLD)) {
                
                b.currentPersonnel -= 1000;
                b.lastSpawned = now;
                const stats = getUnitStats("pasukan_infanteri");
                
                newSpawned.push({
                    id: `dep_inf_${b.id}_${now}_${Math.random()}`,
                    type: "pasukan_infanteri", side: "enemy",
                    pos: { x: b.pos.x, y: b.pos.y + 100 },
                    health: stats.maxHealth * 10, rotation: Math.PI, influence: 100
                });
            }
            return b;
        });

        return { nextBarracks, newSpawned };
    }
}
