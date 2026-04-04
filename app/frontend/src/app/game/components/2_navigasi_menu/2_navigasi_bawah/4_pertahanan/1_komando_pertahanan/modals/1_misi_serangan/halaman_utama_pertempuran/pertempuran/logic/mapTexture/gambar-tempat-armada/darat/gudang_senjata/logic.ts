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

    static isEnemyNearby(pos: Vector2, units: UnitState[], threshold: number): boolean {
        return units.some(u => {
            if (u.side !== 'user') return false;
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
        now: number
    ): { nextArmories: ArmoryState[], newSpawned: UnitState[] } {
        const newSpawned: UnitState[] = [];
        const cooldown = 5000; // Heavy weapons have longer cooldown (5s)

        // Step 1: Find ACTIVE armory per weaponType (Sequential Doctrine)
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

                // Building empty — check if its units are still alive
                const hasLivingUnits = units.some(u =>
                    u.side === 'enemy' &&
                    u.id.includes(a.id) &&
                    u.health > 0
                );

                if (hasLivingUnits) {
                    activeIdxForType = -1; // Wait for wave to clear
                    break;
                }
            }
            activeIndices[wType] = activeIdxForType;
        });

        // Step 2: Only spawn from the active building (IMMUTABLE)
        const nextArmories = armories.map((a, i) => {
            if (i !== activeIndices[a.weaponType]) return { ...a };

            if (a.currentCount > 0 && 
                (now - (a.lastSpawned || 0)) > cooldown &&
                this.isEnemyNearby(a.pos, units, this.ENGAGEMENT_THRESHOLD)) {
                
                const stats = getUnitStats(a.weaponType);
                
                newSpawned.push({
                    id: `dep_heavy_${a.id}_${now}_${Math.random()}`,
                    type: a.weaponType, side: "enemy",
                    pos: { x: a.pos.x, y: a.pos.y + 300 },
                    health: stats.maxHealth, rotation: Math.PI, influence: 500
                });

                return {
                    ...a,
                    currentCount: a.currentCount - 1,
                    lastSpawned: now
                };
            }
            return { ...a };
        });

        return { nextArmories, newSpawned };
    }
}
