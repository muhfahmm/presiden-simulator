import { Vector2, UnitState } from "../../../../../polyglot/ts/polyglot-router";
import { HelicopterPhysicsEngine } from "./polyglot/ts/physics-engine";

/**
 * HelicopterPhysicsRouter - Tactical Orchestrator for Helipads
 * 
 * Directs VTOL launch requests to specialized polyglot engines.
 */
export class HelicopterPhysicsRouter {
    /**
     * Generates a VTOL (Vertical Take-Off) takeoff for a helicopter.
     * Includes lateral jitter for unit separation.
     */
    static generateTakeoff(helipadPos: Vector2): Vector2[] {
        console.log("[Route:Heli] Routing VTOL physics with Separation...");
        const jitterX = Math.random() * 400 - 200;
        const jitterY = Math.random() * 400 - 200;
        return HelicopterPhysicsEngine.calculateVerticalTakeoff({
            x: helipadPos.x + jitterX,
            y: helipadPos.y + jitterY
        });
    }

    /**
     * [RUST] Authorization engine for Helicopter Deployment.
     * Enforces GLOBAL_LIMIT = 2 and PER_PAD_LIMIT = 1.
     */
    static canAuthorizeHeliLaunch(units: UnitState[], helipadId: string, padLimit: number): boolean {
        const AIR_TYPES = ["jet_tempur_siluman", "jet_tempur_interceptor", "pesawat_pengebom", "helikopter_serang", "pesawat_pengintai", "drone_intai_uav", "drone_kamikaze", "pesawat_angkut"];
        
        // 1. GLOBAL CHECK
        const totalActive = units.filter(u => AIR_TYPES.includes(u.type) && u.side === 'enemy').length;
        if (totalActive >= 2) {
            console.log(`[Route:GLOBAL] Denied: Already 2 airborne units active.`);
            return false;
        }

        // 2. PER-PAD CHECK
        const activeUnitsFromSource = units.filter(u => 
            u.type === 'helikopter_serang' && 
            u.side === 'enemy' && 
            (u as any).sourceId === helipadId
        );

        console.log(`[Route:RUST] Pad ${helipadId}: ${activeUnitsFromSource.length}/${padLimit} active. Global: ${totalActive}/2.`);
        return activeUnitsFromSource.length < padLimit;
    }
}
