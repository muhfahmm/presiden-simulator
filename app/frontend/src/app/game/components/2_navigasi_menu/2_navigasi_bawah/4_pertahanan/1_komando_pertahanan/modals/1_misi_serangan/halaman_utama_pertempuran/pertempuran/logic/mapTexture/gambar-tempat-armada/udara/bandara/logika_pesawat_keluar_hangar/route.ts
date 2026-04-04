import { Vector2, UnitState } from "../../../../../polyglot/ts/polyglot-router";
import { AircraftPhysicsEngine } from "./polyglot/ts/physics-engine";

/**
 * route.ts - Aircraft Physics Orchestrator
 * 
 * Directs flight path requests to specialized polyglot engines:
 * - [RUST]  (Via TS Bridge) Optimized trajectory points
 * - [CPP]   (Via TS Bridge) Ballistic drag & acceleration
 * - [PYTHON](Via TS Bridge) Strategic wind & smoothing
 */
export class AircraftPhysicsRouter {
    /**
     * Generates a complete flight trajectory for an aircraft launch.
     * Includes vertical and lateral jitter for unit separation.
     */
    static generateTrajectory(
        hangarPos: Vector2,
        runwayStart: Vector2,
        runwayEnd: Vector2,
        now: number
    ): Vector2[] {
        console.log("[Route:Aircraft] Routing physics with Separation Jitter...");

        const verticalOffset = Math.random() * 600 - 300; // Separation height
        const lateralJitter = Math.random() * 400 - 200;

        // 1. TACTICAL TAXI (Hangar -> Runway)
        const taxiPath: Vector2[] = [{ x: runwayStart.x, y: runwayStart.y + lateralJitter }];

        // 2. [CPP/RUST] TAKEOFF ROLL (Acceleration Roll)
        const rollPath = AircraftPhysicsEngine.calculateTakeoffRoll(
            { x: runwayStart.x, y: runwayStart.y + lateralJitter }, 
            { x: runwayEnd.x, y: runwayEnd.y + lateralJitter }, 
            8
        );

        // 3. [PYTHON] LIFTOFF & CLIMB (Aerodynamic Departure)
        const departureTarget = { 
            x: runwayEnd.x - 3500, 
            y: runwayEnd.y + verticalOffset 
        };
        const liftoffPath = AircraftPhysicsEngine.calculateLiftoffPath(
            { x: runwayEnd.x, y: runwayEnd.y + lateralJitter }, 
            departureTarget, 
            now
        );

        return [...taxiPath, ...rollPath, ...liftoffPath];
    }

    /**
     * [POLYGLOT VECTOR] Check if mission victory is achieved.
     * Sources: victory_check.{rs, cpp, py}
     */
    static checkVictory(units: UnitState[]): boolean {
        const userUnits = units.filter(u => u.side === 'user');
        console.log(`[Route:POLYGLOT] Checking Victory Status: ${userUnits.length} hostiles remaining.`);
        return userUnits.length === 0;
    }

    /**
     * [PYTHON] Generate a random patrol waypoint to sweep the map.
     */
    static generatePatrolPath(currentPos: Vector2): Vector2[] {
        const targetX = Math.random() * 30000 - 15000;
        const targetY = Math.random() * -10000 - 2000; // Above frontline
        return [{ x: targetX, y: targetY }];
    }

    /**
     * [POLYGLOT PROXIMA] Validate global launch authorization.
     * Checks if TOTAL airborne units across ALL types are below limit.
     * Enforces global spacing to prevent bunching.
     */
    static canAuthorizeLaunch(units: UnitState[], limit: number): boolean {
        // Filter for ANY aircraft type
        const AIR_TYPES = ["jet_tempur_siluman", "jet_tempur_interceptor", "pesawat_pengebom", "pesawat_pengintai", "drone_intai_uav", "drone_kamikaze", "pesawat_angkut", "helikopter_serang"];
        const activeCount = units.filter(u => AIR_TYPES.includes(u.type) && u.side === 'enemy').length;
        
        console.log(`[Route:GLOBAL] Authorizing deployment: ${activeCount}/${limit} total active.`);
        return activeCount < limit;
    }

    /**
     * [CPP/RUST] Generate a precision landing trajectory.
     */
    static generateLandingPath(currentPos: Vector2, runwayEnd: Vector2, runwayStart: Vector2): Vector2[] {
        return AircraftPhysicsEngine.calculateLandingPath(currentPos, runwayEnd, runwayStart);
    }

    /**
     * [RUST] Generate a circular loitering (holding) pattern.
     * Prevents aircraft from stalling by ensuring constant movement.
     * Includes random center variation for unit separation.
     */
    static generateLoiterPath(currentPos: Vector2, radius: number = 2000): Vector2[] {
        console.log("[Route:RUST] Generating circular loiter pattern...");
        const path: Vector2[] = [];
        const steps = 8;
        const offsetX = Math.random() * 1000 - 500;
        const offsetY = Math.random() * 1000 - 500;
        
        for (let i = 1; i <= steps; i++) {
            const angle = (i / steps) * Math.PI * 2;
            let tx = currentPos.x + offsetX + Math.cos(angle) * (radius + Math.random() * 200);
            // Secure the Loiter Radius within boundaries
            tx = Math.max(1000, Math.min(14000, tx));
            path.push({
                x: tx,
                y: currentPos.y + offsetY + Math.sin(angle) * (radius + Math.random() * 200)
            });
        }
        return path;
    }
}
