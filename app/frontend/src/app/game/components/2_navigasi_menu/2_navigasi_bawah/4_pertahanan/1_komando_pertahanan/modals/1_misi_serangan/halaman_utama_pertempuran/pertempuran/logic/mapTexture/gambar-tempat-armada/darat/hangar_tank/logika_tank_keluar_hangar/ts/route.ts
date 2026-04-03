import { UnitState } from "../../../../../../polyglot/ts/polyglot-router";

/**
 * Tank Deployment Logic - Hangar Management
 * Handles spawning enemy tank units when player units approach the hangars.
 */
export class TankDeploymentLogic {
    /**
     * Checks if any player unit is within tactical engagement range of the hangar.
     * @param hangarPos The center position of the hangar
     * @param units All active units on the battlefield
     * @param threshold Strategic detection radius (default 4000 for tanks)
     */
    static isEnemyNearby(
        hangarPos: { x: number, y: number }, 
        units: UnitState[], 
        threshold: number = 4000
    ): boolean {
        // Find if any user unit is within the threshold distance
        return units.some(unit => {
            if (unit.side !== 'user') return false;
            
            const dx = unit.pos.x - hangarPos.x;
            const dy = unit.pos.y - hangarPos.y;
            const distanceSq = dx * dx + dy * dy;
            
            return distanceSq < (threshold * threshold);
        });
    }
}
