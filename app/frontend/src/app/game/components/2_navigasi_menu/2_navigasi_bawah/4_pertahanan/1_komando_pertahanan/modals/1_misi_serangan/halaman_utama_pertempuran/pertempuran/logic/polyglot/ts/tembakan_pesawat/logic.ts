import { UnitState } from "../polyglot-router";

/**
 * AircraftShootingLogic - Advanced Combat Rules for Airborne Units
 * 
 * Rules:
 * 1. Airborne-Only Engagement: Aircraft cannot shoot while on the ground (Taxi/Takeoff Roll).
 * 2. Ground Protection: Units on the ground (Hangar/Runway) cannot be targeted by AI.
 */
export class AircraftShootingLogic {
    /**
     * Determines if an aircraft is currently in a state where it can engage targets.
     * Must be in 'maneuver' or 'patrol' state (airborne).
     */
    static canEngage(unit: UnitState): boolean {
        const state = (unit as any).airState;
        // Only Maneuvering units can fire shells/missiles
        return state === 'maneuver';
    }

    /**
     * Determines if an aircraft is vulnerable to enemy fire.
     * Protects units that are still taxiing on the runway or in hangar range.
     */
    static isVulnerable(unit: UnitState): boolean {
        const state = (unit as any).airState;
        // Protected states: taxi, takeoff_roll
        if (state === 'taxi' || state === 'takeoff_roll') return false;
        
        // Final fallback: if it has a trajectory path with > 3 points, it's likely still taking off
        if (unit.path && unit.path.length > 5 && unit.pos.x > 11000) return false;
        
        return true;
    }
}
