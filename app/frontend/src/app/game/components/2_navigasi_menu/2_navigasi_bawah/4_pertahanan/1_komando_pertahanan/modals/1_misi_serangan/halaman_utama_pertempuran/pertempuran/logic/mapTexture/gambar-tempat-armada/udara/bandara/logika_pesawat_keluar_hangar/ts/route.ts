import { UnitState } from "../../../../../../polyglot/ts/polyglot-router";

/**
 * Aircraft Deployment Logic - Airfield/Hangar Management
 * Defines long-range radar detection for aircraft launch.
 */
export class AircraftDeploymentLogic {
    /**
     * Checks if any player unit is within radar detection range of the airfield.
     * @param airfieldPos The center position of the airfield
     * @param units All active units on the battlefield
     * @param threshold Strategic detection radius (default 6000 for air-intercept)
     */
    static isEnemyNearby(
        airfieldPos: { x: number, y: number }, 
        units: UnitState[], 
        threshold: number = 6000
    ): boolean {
        // RADAR DETECTION: Airfields have wider detection range
        return units.some(unit => {
            if (unit.side !== 'user') return false;
            
            const dx = unit.pos.x - airfieldPos.x;
            const dy = unit.pos.y - airfieldPos.y;
            const distanceSq = dx * dx + dy * dy;
            
            return distanceSq < (threshold * threshold);
        });
    }
}
