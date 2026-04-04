import { UnitState, Vector2 } from "../../../../../polyglot/ts/polyglot-router";
import { getUnitStats } from "../../../../../polyglot/ts/unit_stats";
import { HangarState } from "../HangarUtils";

/**
 * Tank Deployment Logic - Hangar Management
 * 
 * SEQUENTIAL DOCTRINE (same as barracks):
 * Only 1 hangar deploys at a time (in order: 1→2→3→...).
 * The next hangar activates only when:
 *   1. The current hangar is empty (currentCount === 0)
 *   2. All tanks spawned from that hangar have been destroyed
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
            return (dx * dx + dy * dy) < (threshold * threshold);
        });
    }

    /**
     * Process tank hangar tactical tick with SEQUENTIAL deployment.
     */
    static processTankHangarTick(
        hangars: HangarState[],
        units: UnitState[],
        now: number
    ): { nextHangars: HangarState[], newSpawned: UnitState[] } {
        const newSpawned: UnitState[] = [];
        const cooldown = 2000;

        // Step 1: Find the ACTIVE hangar per vehicleType (sequential within each category)
        const activeIndices: Record<string, number> = {};
        const types = ['tank_tempur_utama', 'apc_ifv', 'kendaraan_taktis'];

        types.forEach(vType => {
            let activeIdxForType = -1;
            const typeHangars = hangars.filter(h => (h.vehicleType || 'tank_tempur_utama') === vType);
            
            for (let i = 0; i < hangars.length; i++) {
                const h = hangars[i];
                if ((h.vehicleType || 'tank_tempur_utama') !== vType) continue;

                if (h.currentCount > 0) {
                    activeIdxForType = i;
                    break;
                }

                // Hangar is empty — check if its vehicles are still alive
                const hasLivingVehicles = units.some(u =>
                    u.side === 'enemy' &&
                    u.id.includes(h.id) &&
                    u.health > 0
                );

                if (hasLivingVehicles) {
                    activeIdxForType = -1; // Wait for this hangar's units to die before next hangar
                    break;
                }
            }
            activeIndices[vType] = activeIdxForType;
        });

        // Step 2: Only spawn from the active hangar (IMMUTABLE)
        const nextHangars = hangars.map((h, i) => {
            const vType = h.vehicleType || 'tank_tempur_utama';
            if (i !== activeIndices[vType]) return { ...h };

            // WAVE CHECK: Count active units from THIS specific hangar
            const activeCount = units.filter(u => 
                u.side === 'enemy' && 
                u.id.includes(`dep_vehicle_${h.id}_`) && 
                u.health > 0
            ).length;

            const waveSize = 10;
            const canSpawnWave = activeCount === 0 && h.currentCount > 0;

            if (canSpawnWave && 
                (now - (h.lastSpawned || 0)) > cooldown &&
                this.isEnemyNearby(h.pos, units, this.ENGAGEMENT_THRESHOLD)) {
                
                const stats = getUnitStats(vType);
                const spawnAmount = Math.min(h.currentCount, waveSize);
                
                for (let j = 0; j < spawnAmount; j++) {
                    newSpawned.push({
                        id: `dep_vehicle_${h.id}_w${now}_${j}`,
                        type: vType, side: "enemy",
                        pos: { x: h.pos.x + (j % 5) * 60, y: h.pos.y + 200 + Math.floor(j/5) * 60 },
                        health: stats.maxHealth, rotation: Math.PI, influence: 300
                    });
                }

                return {
                    ...h,
                    currentCount: h.currentCount - spawnAmount,
                    lastSpawned: now
                };
            }
            return { ...h };
        });

        return { nextHangars, newSpawned };
    }
}
