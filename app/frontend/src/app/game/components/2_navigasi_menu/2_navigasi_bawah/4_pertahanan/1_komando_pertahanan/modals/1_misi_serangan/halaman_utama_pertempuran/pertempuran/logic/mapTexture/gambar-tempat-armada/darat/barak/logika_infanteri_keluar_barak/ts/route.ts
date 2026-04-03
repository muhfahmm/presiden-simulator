import { UnitState } from "../../../../../../polyglot/ts/polyglot-router";

/**
 * Infantry Deployment Logic - Barracks Management
 * Handles spawning enemy infantry units when player units approach the barracks.
 */
export class InfantryDeploymentLogic {
    /**
     * Checks if any player unit is within tactical engagement range of the barracks.
     * @param barrackPos The center position of the barracks
     * @param units All active units on the battlefield
     * @param threshold Strategic detection radius (default 3000)
     */
    static isEnemyNearby(
        barrackPos: { x: number, y: number }, 
        units: UnitState[], 
        threshold: number = 3000
    ): boolean {
        // Find if any user unit is within the threshold distance
        return units.some(unit => {
            if (unit.side !== 'user') return false;
            
            const dx = unit.pos.x - barrackPos.x;
            const dy = unit.pos.y - barrackPos.y;
            const distanceSq = dx * dx + dy * dy;
            
            return distanceSq < (threshold * threshold);
        });
    }
}
