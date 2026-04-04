import { UnitState, Vector2 } from "../../../../../polyglot/ts/polyglot-router";
import { getUnitStats } from "../../../../../polyglot/ts/unit_stats";
import { BarrackState } from "../BarakUtils";

/**
 * Infantry Deployment Logic - Barracks Management
 * 
 * SEQUENTIAL DOCTRINE:
 * Only 1 barrack deploys at a time (in order: 1→2→3→...→20).
 * The next barrack activates only when:
 *   1. The current barrack has no more personnel inside (currentPersonnel === 0)
 *   2. All infantry spawned from that barrack have been killed on the battlefield
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
            return (dx * dx + dy * dy) < (threshold * threshold);
        });
    }

    /**
     * Process barracks tactical tick for SEQUENTIAL squad deployment.
     * Only the active barrack (first non-empty) spawns troops.
     * Next barrack activates only when current barrack is empty AND
     * all its troops on the battlefield have been eliminated.
     */
    static processBarracksTick(
        barracks: BarrackState[],
        units: UnitState[],
        now: number
    ): { nextBarracks: BarrackState[], newSpawned: UnitState[] } {
        const newSpawned: UnitState[] = [];
        const cooldown = 1500;

        // Step 1: Find the ACTIVE barrack index (sequential order: 0→1→2→...)
        let activeIndex = -1;

        for (let i = 0; i < barracks.length; i++) {
            const b = barracks[i];
            
            if (b.currentPersonnel > 0) {
                // This barrack still has troops inside → it's the active one
                activeIndex = i;
                break;
            }
            
            // Barrack is empty — check if its troops are still fighting
            const hasLivingTroops = units.some(u => 
                u.side === 'enemy' && 
                u.type === 'pasukan_infanteri' && 
                u.id.includes(b.id) && 
                u.health > 0
            );
            
            if (hasLivingTroops) {
                // Troops from this barrack are still alive → WAIT, don't advance
                activeIndex = -1;
                break;
            }
            // All troops from this barrack are dead → check next barrack
        }

        // Step 2: Only spawn from the active barrack (IMMUTABLE updates)
        const nextBarracks = barracks.map((b, i) => {
            if (i !== activeIndex) return { ...b }; // Return copy, no changes

            // WAVE CHECK: Count active infantry from THIS specific barrack
            const activeCount = units.filter(u => 
                u.side === 'enemy' && 
                u.type === 'pasukan_infanteri' && 
                u.id.includes(`dep_inf_${b.id}_`) && 
                u.health > 0
            ).length;

            const waveSize = 10;
            const canSpawnWave = activeCount === 0 && b.currentPersonnel > 0;

            if (canSpawnWave && 
                (now - (b.lastSpawned || 0)) > cooldown &&
                this.isEnemyNearby(b.pos, units, this.ENGAGEMENT_THRESHOLD)) {
                
                const stats = getUnitStats("pasukan_infanteri");
                const spawnAmount = Math.min(Math.floor(b.currentPersonnel / 1000), waveSize);
                
                for (let j = 0; j < spawnAmount; j++) {
                    newSpawned.push({
                        id: `dep_inf_${b.id}_w${now}_${j}`,
                        type: "pasukan_infanteri", side: "enemy",
                        pos: { x: b.pos.x + (j % 5) * 30, y: b.pos.y + 100 + Math.floor(j/5) * 30 },
                        health: stats.maxHealth, rotation: Math.PI, influence: 100
                    });
                }

                // IMMUTABLE: Return new object with reduced personnel
                return {
                    ...b,
                    currentPersonnel: b.currentPersonnel - (spawnAmount * 1000),
                    lastSpawned: now
                };
            }
            return { ...b };
        });

        return { nextBarracks, newSpawned };
    }
}
