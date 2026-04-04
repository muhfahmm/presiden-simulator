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
        side: 'user' | 'enemy',
        threshold: number = this.ENGAGEMENT_THRESHOLD
    ): boolean {
        const targetSide = side === 'user' ? 'enemy' : 'user';
        return units.some(unit => {
            if (unit.side !== targetSide) return false;
            const dx = unit.pos.x - barrackPos.x;
            const dy = unit.pos.y - barrackPos.y;
            return (dx * dx + dy * dy) < (threshold * threshold);
        });
    }

    /**
     * Process barracks tactical tick for SEQUENTIAL squad deployment.
     */
    static processBarracksTick(
        barracks: BarrackState[],
        units: UnitState[],
        now: number,
        side: 'user' | 'enemy' = 'enemy'
    ): { nextBarracks: BarrackState[], newSpawned: UnitState[] } {
        const newSpawned: UnitState[] = [];
        const cooldown = 1500;

        // Step 1: Find the ACTIVE barrack index
        let activeIndex = -1;

        for (let i = 0; i < barracks.length; i++) {
            const b = barracks[i];
            
            if (b.currentPersonnel > 0) {
                activeIndex = i;
                break;
            }
            
            const hasLivingTroops = units.some(u => 
                u.side === side && 
                u.type === 'pasukan_infanteri' && 
                u.id.includes(b.id) && 
                u.health > 0
            );
            
            if (hasLivingTroops) {
                activeIndex = -1;
                break;
            }
        }

        // Step 2: Only spawn from the active barrack
        const nextBarracks = barracks.map((b, i) => {
            if (i !== activeIndex) return { ...b };

            const activeCount = units.filter(u => 
                u.side === side && 
                u.type === 'pasukan_infanteri' && 
                u.id.includes(`dep_inf_${b.id}_`) && 
                u.health > 0
            ).length;

            const waveSize = 10;
            const canSpawnWave = activeCount === 0 && b.currentPersonnel > 0;

            if (canSpawnWave && 
                (now - (b.lastSpawned || 0)) > cooldown &&
                this.isEnemyNearby(b.pos, units, side, this.ENGAGEMENT_THRESHOLD)) {
                
                const stats = getUnitStats("pasukan_infanteri");
                const spawnAmount = Math.min(Math.floor(b.currentPersonnel / 1000), waveSize);
                
                for (let j = 0; j < spawnAmount; j++) {
                    const rotation = side === 'enemy' ? Math.PI : 0;
                    const offsetX = side === 'user' ? 100 : -100;

                    newSpawned.push({
                        id: `dep_inf_${b.id}_w${now}_${j}`,
                        type: "pasukan_infanteri", side: side,
                        pos: { 
                            x: b.pos.x + (j % 5) * 30 + offsetX, 
                            y: b.pos.y + Math.floor(j/5) * 30 
                        },
                        health: stats.maxHealth, rotation: rotation, influence: 100
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
