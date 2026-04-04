import { Vector2, UnitState } from "../../../../../polyglot/ts/polyglot-router";
import { getUnitStats } from "../../../../../polyglot/ts/unit_stats";
import { HelipadState } from "../../AirfieldUtils";
import { HelicopterPhysicsRouter } from "./route";

/**
 * HelicopterDeploymentLogic - Helipad Automation & Launch Authorization
 */
export class HelicopterDeploymentLogic {
    /**
     * Detection radius for helipads (~20,000 for local defensive response)
     */
    static readonly RADAR_THRESHOLD = 20000;

    /**
     * Maximum units allowed per helipad in the air.
     */
    static readonly MAX_ACTIVE_PER_PAD = 1;

    /**
     * Checks if enemy is nearby the helipad complex.
     */
    static isEnemyNearby(pos: { x: number, y: number }, units: UnitState[]): boolean {
        return units.some(u => {
            if (u.side !== 'user') return false;
            const dx = u.pos.x - pos.x;
            const dy = u.pos.y - pos.y;
            return (dx * dx + dy * dy) < (this.RADAR_THRESHOLD * this.RADAR_THRESHOLD);
        });
    }

    /**
     * Process helipad tactical loop.
     * Enforces limit of 1 active helicopter per helipad source.
     * Also enforces global sequential launch (one-by-one across all helipads).
     */
    static processHelipadTick(
        helipads: HelipadState[],
        units: UnitState[],
        now: number,
        isActivated: boolean = true
    ): { nextHelipads: HelipadState[], newSpawned: UnitState[] } {
        const newSpawned: UnitState[] = [];
        if (!isActivated) return { nextHelipads: helipads, newSpawned: [] };
        const spawnCooldown = 15000; // 15s between launches from SAME pad (Retaining stock)
        const globalCooldown = 3500; // 4s between ANY helipad launch

        // Find if ANY helipad recently spawned
        const lastGlobalSpawn = Math.max(...helipads.map(h => h.lastSpawned || 0));
        let hasSpawnedThisTick = (now - lastGlobalSpawn) < globalCooldown;

        const nextHelipads = helipads.map(h => {
            const timeSinceLast = now - (h.lastSpawned || 0);
            
            // 1. SEQUENTIAL CHECK (Wait for other helipads)
            if (hasSpawnedThisTick) return h;

            // 2. LAUNCH AUTHORIZATION PROTOCOL (Limit 1 active / Global Count)
            const isAuthorized = HelicopterPhysicsRouter.canAuthorizeHeliLaunch(
                units, h.id, this.MAX_ACTIVE_PER_PAD
            );

            if (h.currentCount > 0 && 
                timeSinceLast > spawnCooldown && 
                this.isEnemyNearby(h.pos, units) &&
                isAuthorized) {
                
                const stats = getUnitStats("helikopter_serang");
                console.log(`[Heli:POLYGLOT] Launching Unit from ${h.id}. Global cooldown active.`);

                newSpawned.push({
                    id: `heli_${h.id}_${now}`,
                    type: "helikopter_serang",
                    side: "enemy",
                    pos: { ...h.pos },
                    health: stats.maxHealth,
                    rotation: 0,
                    sourceId: h.id, 
                    path: HelicopterPhysicsRouter.generateTakeoff(h.pos)
                } as any);

                hasSpawnedThisTick = true; // Lock global spawn for this tick
                return { ...h, currentCount: h.currentCount - 1, lastSpawned: now };
            }
            return h;
        });

        return { nextHelipads, newSpawned };
    }
}
