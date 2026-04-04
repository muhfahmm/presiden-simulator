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
        side: 'user' | 'enemy',
        threshold: number = this.ENGAGEMENT_THRESHOLD
    ): boolean {
        const targetSide = side === 'user' ? 'enemy' : 'user';
        return units.some(unit => {
            if (unit.side !== targetSide) return false;
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
        now: number,
        side: 'user' | 'enemy' = 'enemy'
    ): { nextHangars: HangarState[], newSpawned: UnitState[] } {
        const newSpawned: UnitState[] = [];
        const cooldown = 2000;

        // Step 1: Find the ACTIVE hangar per vehicleType
        const activeIndices: Record<string, number> = {};
        const types = ['tank_tempur_utama', 'apc_ifv', 'kendaraan_taktis'];

        types.forEach(vType => {
            let activeIdxForType = -1;
            
            for (let i = 0; i < hangars.length; i++) {
                const h = hangars[i];
                if ((h.vehicleType || 'tank_tempur_utama') !== vType) continue;

                if (h.currentCount > 0) {
                    activeIdxForType = i;
                    break;
                }

                const hasLivingVehicles = units.some(u =>
                    u.side === side &&
                    u.id.includes(h.id) &&
                    u.health > 0
                );

                if (hasLivingVehicles) {
                    activeIdxForType = -1;
                    break;
                }
            }
            activeIndices[vType] = activeIdxForType;
        });

        // Step 2: Only spawn from the active hangar (IMMUTABLE)
        const nextHangars = hangars.map((h, i) => {
            const vType = h.vehicleType || 'tank_tempur_utama';
            if (i !== activeIndices[vType]) return { ...h };

            const activeCount = units.filter(u => 
                u.side === side && 
                u.id.includes(`dep_vehicle_${h.id}_`) && 
                u.health > 0
            ).length;

            const waveSize = 10;
            const canSpawnWave = activeCount === 0 && h.currentCount > 0;

            if (canSpawnWave && 
                (now - (h.lastSpawned || 0)) > cooldown &&
                this.isEnemyNearby(h.pos, units, side, this.ENGAGEMENT_THRESHOLD)) {
                
                const stats = getUnitStats(vType);
                const spawnAmount = Math.min(h.currentCount, waveSize);
                
                for (let j = 0; j < spawnAmount; j++) {
                    const rotation = side === 'enemy' ? Math.PI : 0;
                    const offsetX = side === 'user' ? 200 : -200;

                    newSpawned.push({
                        id: `dep_vehicle_${h.id}_w${now}_${j}`,
                        type: vType, side: side,
                        pos: { 
                            x: h.pos.x + (j % 5) * 60 + offsetX, 
                            y: h.pos.y + Math.floor(j/5) * 60 
                        },
                        health: stats.maxHealth, rotation: rotation, influence: 300
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
