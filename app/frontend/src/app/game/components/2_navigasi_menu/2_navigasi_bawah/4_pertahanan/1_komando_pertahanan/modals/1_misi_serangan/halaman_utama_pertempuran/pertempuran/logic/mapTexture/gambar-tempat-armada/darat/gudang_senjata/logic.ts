import { UnitState, Vector2 } from "../../../../polyglot/ts/polyglot-router";
import { getUnitStats } from "../../../../polyglot/ts/unit_stats";
import { ArmoryState } from "./ArmoryUtils";

/**
 * ArmoryDeploymentLogic - Weapons Warehouse (Gudang Senjata) 
 * 
 * SEQUENTIAL DOCTRINE:
 * Only 1 Armory building per type (Artillery, MLRS, SAM) deploys at once.
 * The next building in the category only activates when:
 *  1. Current building is empty (currentCount === 0)
 *  2. All units spawned from that building are eliminated (health <= 0)
 */
export class ArmoryDeploymentLogic {
    static readonly ENGAGEMENT_THRESHOLD = 30000; // Long-range detection for heavy weapons

    static isEnemyNearby(pos: Vector2, units: UnitState[], side: 'user' | 'enemy', threshold: number): boolean {
        const targetSide = side === 'user' ? 'enemy' : 'user';
        return units.some(u => {
            if (u.side !== targetSide) return false;
            const dx = u.pos.x - pos.x;
            const dy = u.pos.y - pos.y;
            return (dx * dx + dy * dy) < (threshold * threshold);
        });
    }

    /**
     * Process Armory tactical tick.
     */
    static processArmoryTick(
        armories: ArmoryState[],
        units: UnitState[],
        now: number,
        side: 'user' | 'enemy' = 'enemy'
    ): { nextArmories: ArmoryState[], newSpawned: UnitState[] } {
        const newSpawned: UnitState[] = [];
        const cooldown = 5000;

        // Step 1: Find ACTIVE armory per weaponType
        const activeIndices: Record<string, number> = {};
        const types = ['artileri_berat', 'sistem_peluncur_roket', 'pertahanan_udara_mobile'];

        types.forEach(wType => {
            let activeIdxForType = -1;
            
            for (let i = 0; i < armories.length; i++) {
                const a = armories[i];
                if (a.weaponType !== wType) continue;

                if (a.currentCount > 0) {
                    activeIdxForType = i;
                    break;
                }

                const hasLivingUnits = units.some(u =>
                    u.side === side &&
                    u.id.includes(a.id) &&
                    u.health > 0
                );

                if (hasLivingUnits) {
                    activeIdxForType = -1;
                    break;
                }
            }
            activeIndices[wType] = activeIdxForType;
        });

        // Step 2: Only spawn from the active building (IMMUTABLE)
        const nextArmories = armories.map((a, i) => {
            if (i !== activeIndices[a.weaponType]) return { ...a };

            const activeCount = units.filter(u => 
                u.side === side && 
                u.id.includes(`dep_heavy_${a.id}_`) && 
                u.health > 0
            ).length;

            const waveSize = 10;
            const canSpawnWave = activeCount === 0 && a.currentCount > 0;

            if (canSpawnWave && 
                (now - (a.lastSpawned || 0)) > cooldown &&
                this.isEnemyNearby(a.pos, units, side, this.ENGAGEMENT_THRESHOLD)) {
                
                const stats = getUnitStats(a.weaponType);
                const spawnAmount = Math.min(a.currentCount, waveSize);
                
                for (let j = 0; j < spawnAmount; j++) {
                    const rotation = side === 'enemy' ? Math.PI : 0;
                    const offsetX = side === 'user' ? 300 : -300;

                    newSpawned.push({
                        id: `dep_heavy_${a.id}_w${now}_${j}`,
                        type: a.weaponType, side: side,
                        pos: { 
                            x: a.pos.x + (j % 5) * 80 + offsetX, 
                            y: a.pos.y + Math.floor(j/5) * 80 
                        },
                        health: stats.maxHealth, rotation: rotation, influence: 500
                    });
                }

                return {
                    ...a,
                    currentCount: a.currentCount - spawnAmount,
                    lastSpawned: now
                };
            }
            return { ...a };
        });

        return { nextArmories, newSpawned };
    }
}
