import { UnitState } from "../../../../../../polyglot/ts/polyglot-router";

/**
 * Helicopter Deployment Logic - Helipad Management
 * Defines tactical proximity detection for helipad launch.
 */
export class HelicopterDeploymentLogic {
    /**
     * Checks if any player unit is within tactical engagement range of the helipad.
     * @param helipadPos The center position of the helipad
     * @param units All active units on the battlefield
     * @param threshold Strategic detection radius (default 4500)
     */
    static isEnemyNearby(
        helipadPos: { x: number, y: number }, 
        units: UnitState[], 
        threshold: number = 4500
    ): boolean {
        // TACTICAL DETECTION: Helipads have medium range detection
        return units.some(unit => {
            if (unit.side !== 'user') return false;
            
            const dx = unit.pos.x - helipadPos.x;
            const dy = unit.pos.y - helipadPos.y;
            const distanceSq = dx * dx + dy * dy;
            
            return distanceSq < (threshold * threshold);
        });
    }
}
