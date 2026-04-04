import { Vector2 } from "../../../../../../../polyglot/ts/polyglot-router";

/**
 * LandingPhysicsEngine - TS Bridge for Aircraft Return Logic.
 */
export class LandingPhysicsEngine {
    /**
     * [PYTHON] Instrument Landing System Approach (ILS).
     */
    static calculateApproach(currentPos: Vector2, runwayEnd: Vector2): Vector2[] {
        const midX = (currentPos.x + runwayEnd.x) / 2;
        const midY = (currentPos.y + runwayEnd.y) / 2;
        return [{ x: midX, y: midY }, runwayEnd];
    }

    /**
     * [RUST] Landing Deceleration on Runway.
     */
    static calculateRollout(runwayEnd: Vector2, runwayStart: Vector2, steps: number = 4): Vector2[] {
        const path: Vector2[] = [];
        for (let i = 1; i <= steps; i++) {
            const t = i / steps;
            path.push({
                x: runwayEnd.x + (runwayStart.x - runwayEnd.x) * t,
                y: runwayEnd.y + (runwayStart.y - runwayEnd.y) * t
            });
        }
        return path;
    }
}
