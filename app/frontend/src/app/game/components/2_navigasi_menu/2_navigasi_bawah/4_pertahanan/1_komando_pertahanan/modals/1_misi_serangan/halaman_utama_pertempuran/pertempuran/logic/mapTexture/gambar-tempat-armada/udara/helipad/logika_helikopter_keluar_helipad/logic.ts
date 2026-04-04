import { Vector2, UnitState } from "../../../../../polyglot/ts/polyglot-router";
import { getUnitStats } from "../../../../../polyglot/ts/unit_stats";
import { HelipadState } from "../../AirfieldUtils";
import { HelicopterPhysicsRouter } from "./route";

/**
 * HelicopterDeploymentLogic - Helipad Automation & Launch Authorization
 * 
 * SEQUENTIAL DOCTRINE:
 * Only 1 helipad is active at a time.
 * The next helipad activates only when:
 *   1. The current helipad is empty (currentCount === 0)
 *   2. The helicopter spawned from that helipad is destroyed on the battlefield
 */
export class HelicopterDeploymentLogic {
    static readonly RADAR_THRESHOLD = 20000;
    static readonly MAX_ACTIVE_PER_PAD = 1;

    static isEnemyNearby(pos: { x: number, y: number }, units: UnitState[], side: 'user' | 'enemy'): boolean {
        const targetSide = side === 'user' ? 'enemy' : 'user';
        return units.some(u => {
            if (u.side !== targetSide) return false;
            const dx = u.pos.x - pos.x;
            const dy = u.pos.y - pos.y;
            return (dx * dx + dy * dy) < (this.RADAR_THRESHOLD * this.RADAR_THRESHOLD);
        });
    }

    /**
     * Process helipad tactical loop with SEQUENTIAL execution.
     */
    static processHelipadTick(
        helipads: HelipadState[],
        units: UnitState[],
        now: number,
        isActivated: boolean = true,
        side: 'user' | 'enemy' = 'enemy'
    ): { nextHelipads: HelipadState[], newSpawned: UnitState[] } {
        const newSpawned: UnitState[] = [];
        if (!isActivated) return { nextHelipads: helipads, newSpawned: [] };
        
        const spawnCooldown = 15000; 
        const globalCooldown = 3500;

        // Step 1: Find the ACTIVE helipad index
        let activeIdx = -1;
        for (let i = 0; i < helipads.length; i++) {
            const h = helipads[i];

            if (h.currentCount > 0) {
                activeIdx = i;
                break;
            }

            const hasLivingHeli = units.some(u => 
                u.side === side && 
                u.type === 'helikopter_serang' && 
                u.id.includes(h.id) && 
                u.health > 0
            );

            if (hasLivingHeli) {
                activeIdx = -1;
                break;
            }
        }

        const lastGlobalSpawn = Math.max(...helipads.map(h => h.lastSpawned || 0));
        let hasSpawnedRecently = (now - lastGlobalSpawn) < globalCooldown;

        const nextHelipads = helipads.map((h, i) => {
            if (i !== activeIdx || hasSpawnedRecently) return { ...h };

            const timeSinceLast = now - (h.lastSpawned || 0);
            const isAuthorized = HelicopterPhysicsRouter.canAuthorizeHeliLaunch(
                units, h.id, this.MAX_ACTIVE_PER_PAD
            );

            if (h.currentCount > 0 && 
                timeSinceLast > spawnCooldown && 
                this.isEnemyNearby(h.pos, units, side) &&
                isAuthorized) {
                
                const stats = getUnitStats("helikopter_serang");
                const rotation = side === 'enemy' ? Math.PI : 0;

                newSpawned.push({
                    id: `heli_${h.id}_${now}`,
                    type: "helikopter_serang",
                    side: side,
                    pos: { ...h.pos },
                    health: stats.maxHealth,
                    rotation: rotation,
                    sourceId: h.id, 
                    path: HelicopterPhysicsRouter.generateTakeoff(h.pos)
                } as any);

                return { ...h, currentCount: h.currentCount - 1, lastSpawned: now };
            }
            return { ...h };
        });

        return { nextHelipads, newSpawned };
    }
}
