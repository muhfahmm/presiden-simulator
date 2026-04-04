import { Vector2 } from "../../../../../polyglot/ts/polyglot-router";
import { LandingPhysicsEngine } from "./polyglot/ts/landing-engine";

/**
 * LandingPhysicsRouter - Tactical Orchestrator for Aircraft Return
 */
export class LandingPhysicsRouter {
    /**
     * [POLYGLOT VECTOR] Generate a complete landing trajectory.
     * Paths: Approach (Python) -> Touchdown -> Rollout (Rust)
     */
    static generateLandingTrajectory(
        currentPos: Vector2,
        runwayEnd: Vector2,
        runwayStart: Vector2
    ): Vector2[] {
        console.log("[Route:Landing] Orchestrating ILS Approach via Polyglot Engine...");

        // 1. INSTRUMENT APPROACH (Glide Path) - Still airborne and maneuvering
        const approachPath = LandingPhysicsEngine.calculateApproach(currentPos, runwayEnd)
            .map(p => ({ ...p, airState: 'maneuver' }));

        // 2. ROLLOUT & TAXI (Deceleration on Runway) - Grounded and Protected
        const rolloutPath = LandingPhysicsEngine.calculateRollout(runwayEnd, runwayStart)
            .map(p => ({ ...p, airState: 'taxi' }));

        return [
            ...approachPath,
            ...rolloutPath
        ];
    }
}
