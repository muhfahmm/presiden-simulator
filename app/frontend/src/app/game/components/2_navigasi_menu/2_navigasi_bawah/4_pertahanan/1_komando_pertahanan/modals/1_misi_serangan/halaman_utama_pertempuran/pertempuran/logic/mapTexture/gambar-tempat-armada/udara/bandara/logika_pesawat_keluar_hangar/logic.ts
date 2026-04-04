import { UnitState, Vector2 } from "../../../../../polyglot/ts/polyglot-router";
import { getUnitStats } from "../../../../../polyglot/ts/unit_stats";
import { AirfieldHangarState } from "../../AirfieldUtils";
import { AircraftPhysicsRouter } from "./route";
import { AircraftReturnLogic } from "../logika_pesawat_masuk_hangar/logic";

/**
 * Aircraft Deployment Logic - Airfield/Hangar Management
 * 
 * Handles long-range radar detection, sequential takeoff queues, 
 * and waypoint generation for aircraft launching from pangkalan udara.
 */
export class AircraftDeploymentLogic {
    /**
     * Strategic detection radius (default 30000 for early air-intercept response)
     */
    static readonly RADAR_THRESHOLD = 30000;

    /**
     * Maximum units of the same type allowed in the air simultaneously.
     */
    static readonly MAX_ACTIVE_AIRBORNE = 2;

    /**
     * Checks if any player unit is within radar detection range of the airfield.
     */
    static isEnemyNearby(
        airfieldPos: Vector2, 
        units: UnitState[], 
        threshold: number = this.RADAR_THRESHOLD
    ): boolean {
        return units.some(unit => {
            if (unit.side !== 'user') return false;
            
            const dx = unit.pos.x - airfieldPos.x;
            const dy = unit.pos.y - airfieldPos.y;
            const distanceSq = dx * dx + dy * dy;
            
            return distanceSq < (threshold * threshold);
        });
    }

    /**
     * Process airbase tactical tick for all hangars.
     * Manages sequential global takeoff roll logic (one-by-one for the whole base).
     */
    static processAirfieldTick(
        hangars: AirfieldHangarState[],
        units: UnitState[],
        now: number,
        isActivated: boolean = true
    ): { nextHangars: AirfieldHangarState[], newSpawned: UnitState[] } {
        const newSpawned: UnitState[] = [];
        if (!isActivated) return { nextHangars: hangars, newSpawned: [] };
        const globalCooldown = 4500; // 4.5 seconds between any plane takeoff

        // Find if ANY hangar recently spawned
        const lastGlobalSpawn = Math.max(...hangars.map(h => h.lastSpawned || 0));
        
        let hasSpawnedThisTick = (now - lastGlobalSpawn) < globalCooldown;

        const nextHangars = hangars.map(h => {
            if (!hasSpawnedThisTick && 
                h.currentCount > 0 && 
                this.isEnemyNearby(h.pos, units, this.RADAR_THRESHOLD) &&
                AircraftPhysicsRouter.canAuthorizeLaunch(units, this.MAX_ACTIVE_AIRBORNE)) { // <--- UPDATED GLOBAL LIMIT
                
                const stats = getUnitStats(h.type);
                
                // LANDASAN COORDINATES (Base configuration)
                const runwayCenterX = 12000;
                const runwayLen = 5000;
                const runwayStartX = runwayCenterX + runwayLen / 2; // Right end
                const runwayEndX = runwayCenterX - runwayLen / 2;   // Left end

                // 3. [POLYGLOT ROUTING] - Generate trajectory via AircraftPhysicsRouter (C++/Rust/Python)
                const trajectory = AircraftPhysicsRouter.generateTrajectory(
                    h.pos,
                    { x: runwayStartX, y: h.pos.y },  // Runway Entrance
                    { x: runwayEndX, y: h.pos.y },    // Runway Threshold
                    now
                );

                newSpawned.push({
                    id: `dep_air_${h.id}_${now}_${Math.random()}`,
                    type: h.type, side: "enemy",
                    pos: { x: h.pos.x, y: h.pos.y },
                    health: stats.maxHealth, rotation: Math.PI, influence: 300,
                    path: trajectory,
                    isAirType: true // IDENTIFIER FOR RECOVERY
                });

                hasSpawnedThisTick = true; // Block others for this tick and global cooldown
                return {
                    ...h,
                    currentCount: h.currentCount - 1,
                    lastSpawned: now
                };
            }
            return { ...h };
        });

        return { nextHangars, newSpawned };
    }

    /**
     * Process existing airborne units for post-combat behavior (Patrol/Landing).
     * Delegates recovery/restocking to AircraftReturnLogic.
     */
    static processPostCombatTick(
        units: UnitState[],
        hangars: AirfieldHangarState[],
        now: number
    ): { nextUnits: UnitState[], nextHangars: AirfieldHangarState[] } {
        // 1. REPAIR LOGIC: Check units for low HP and command landing
        const unitsWithLandingOrders = units.map(u => {
            // Only process enemy aircraft that are not already landing
            if (u.side !== 'enemy' || !(u as any).isAirType || (u as any).aiState === 'landing') return u;

            const stats = getUnitStats(u.type);
            // TRIGGER: HP < 50%
            if (u.health < stats.maxHealth / 2) {
                // Find corresponding hangar for this type
                const myHangar = hangars.find(h => h.type === u.type);
                if (myHangar) {
                    console.log(`[Hangar:REPAIR] Unit ${u.type} (HP: ${u.health.toFixed(1)}/${stats.maxHealth}) initiated emergency return.`);
                    return AircraftReturnLogic.commandLanding(u, myHangar.pos);
                }
            }
            return u;
        });

        // 2. LANDING LOGIC: Process touchdown and hangar entry
        const { nextUnits, nextHangars } = AircraftReturnLogic.processLandingTick(unitsWithLandingOrders, hangars);
        
        return { nextUnits, nextHangars };
    }

    /**
     * Enforce continuous movement for all airborne units on map.
     * Also applies Geofencing (Stay in Green Map, x > 500).
     */
    static enforceAirborneMovement(units: UnitState[]): UnitState[] {
        return units.map(u => {
            let nextU = { ...u };

            // 1. GEOFENCING: Clamp to map boundaries
            nextU.pos = this.clampToMapBoundaries(nextU.pos, nextU.type);

            // 2. CONTINUOUS FLIGHT: Inject loiter if idle
            if (AIR_TYPES.includes(nextU.type)) {
                if (!nextU.path || nextU.path.length === 0) {
                    if ((nextU as any).aiState !== 'landing') {
                        nextU.path = AircraftPhysicsRouter.generateLoiterPath(nextU.pos);
                    }
                }
            }
            return nextU;
        });
    }

    /**
     * Physical Map Boundary Enforcement (Electronic Fence).
     * Green Map: x > 500. Blue/Black Map: x < 500 (Unauthorized).
     */
    static clampToMapBoundaries(pos: Vector2, type: string): Vector2 {
        const THEATER_LIMIT = 15000;
        let nx = Math.max(-THEATER_LIMIT, Math.min(THEATER_LIMIT, pos.x));
        let ny = Math.max(-THEATER_LIMIT, Math.min(THEATER_LIMIT, pos.y));

        // Aircraft-Specific Geofence: Stay in Green Zone
        if (AIR_TYPES.includes(type)) {
            nx = Math.max(500, nx); // Don't cross the red line (x=0)
        }

        return { x: nx, y: ny };
    }
}

const AIR_TYPES = ["jet_tempur_siluman", "jet_tempur_interceptor", "pesawat_pengebom", "pesawat_pengintai", "drone_intai_uav", "drone_kamikaze", "pesawat_angkut", "helikopter_serang"];
