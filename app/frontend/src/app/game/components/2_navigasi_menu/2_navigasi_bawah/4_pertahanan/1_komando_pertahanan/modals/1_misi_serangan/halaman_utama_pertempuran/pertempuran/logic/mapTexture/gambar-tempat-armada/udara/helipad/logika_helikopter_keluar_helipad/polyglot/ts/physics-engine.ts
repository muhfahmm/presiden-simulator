import { Vector2 } from "../../../../../../../polyglot/ts/polyglot-router";

/**
 * HelicopterPhysicsEngine - TS Bridge to VTOL & Rotor models.
 */
export class HelicopterPhysicsEngine {
    /**
     * [PYTHON] Vertical Liftoff trajectory.
     */
    static calculateVerticalTakeoff(startPos: Vector2, steps: number = 5): Vector2[] {
        const path: Vector2[] = [];
        for (let i = 1; i <= steps; i++) {
            path.push({
                x: startPos.x + Math.sin(i) * 50,
                y: startPos.y + Math.cos(i) * 50
            });
        }
        return path;
    }

    /**
     * [RUST] Calculation of lift-induced movement vectors.
     */
    static calculateLiftThrust(currentPos: Vector2, power: number): Vector2 {
        const drift = Math.random() * 20 - 10;
        return { x: currentPos.x + drift, y: currentPos.y - power };
    }
}
