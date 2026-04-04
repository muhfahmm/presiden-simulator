import { Vector2 } from "../../../../../../../polyglot/ts/polyglot-router";

/**
 * physics-engine.ts - Browser Runtime (Simulation of Polyglot model)
 * 
 * Provides real-time physics simulation based on the architectural 
 * models defined in Rust/C++/Python.
 */
export class AircraftPhysicsEngine {
    /**
     * Simulation of C++ Drag/Thrust model for takeoff acceleration.
     * Uses an exponential curve to model velocity gain.
     */
    static calculateTakeoffRoll(start: Vector2, runwayEnd: Vector2, segments: number = 10): Vector2[] {
        const path: Vector2[] = [];
        for (let i = 0; i <= segments; i++) {
            const t = i / segments;
            // Quadratic acceleration simulation (faster at the end of the roll)
            const rollFactor = Math.pow(t, 1.8); 
            path.push({
                x: start.x + (runwayEnd.x - start.x) * rollFactor,
                y: start.y + (runwayEnd.y - start.y) * rollFactor
            });
        }
        return path;
    }

    /**
     * Simulation of Python-based strategic smoothing.
     * Adds lift elevation and slight wind-drag jitter.
     */
    static calculateLiftoffPath(start: Vector2, target: Vector2, now: number): Vector2[] {
        const path: Vector2[] = [];
        const segments = 5;
        for (let i = 1; i <= segments; i++) {
            const t = i / segments;
            // Slight noise based on 'now' to simulate per-launch wind variance
            const windJitter = Math.sin(now + i) * 15; 
            path.push({
                x: start.x + (target.x - start.x) * t,
                y: start.y + (target.y - start.y) * t + windJitter
            });
        }
        return path;
    }

    /**
     * Simulation of C++ Landing Physics.
     * Decelerates from air-speed to threshold speed, then rolls to stop.
     */
    static calculateLandingPath(currentPos: Vector2, runwayEnd: Vector2, runwayStart: Vector2): Vector2[] {
        const path: Vector2[] = [];
        
        // 1. Final Approach (Above runway end)
        const approachPoint = { x: runwayEnd.x + 1500, y: runwayEnd.y };
        path.push(approachPoint);
        path.push(runwayEnd);

        // 2. Touchdown & Rollout (Deceleration roll to runway start)
        const rolloutSegments = 10;
        for (let i = 1; i <= rolloutSegments; i++) {
            const t = i / rolloutSegments;
            // Reverse exponential for deceleration roll
            const rollFactor = 1 - Math.pow(1 - t, 2); 
            path.push({
                x: runwayEnd.x + (runwayStart.x - runwayEnd.x) * rollFactor,
                y: runwayEnd.y
            });
        }

        return path;
    }

    /**
     * Simulation of "Banking Turn" logic.
     * Calculates the wing roll angle based on the rate of heading change.
     */
    static calculateBankingTurn(currentHeading: number, targetHeading: number): number {
        const diff = ((targetHeading - currentHeading + Math.PI * 3) % (Math.PI * 2)) - Math.PI;
        // Max bank angle of 45 degrees (PI/4) based on turn sharpness
        return Math.max(-Math.PI / 4, Math.min(Math.PI / 4, diff * 2));
    }
}
