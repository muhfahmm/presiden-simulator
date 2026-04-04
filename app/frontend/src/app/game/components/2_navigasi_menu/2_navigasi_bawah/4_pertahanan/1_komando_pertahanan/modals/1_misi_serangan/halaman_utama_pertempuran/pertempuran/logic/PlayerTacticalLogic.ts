import { UnitState, Vector2 } from "./polyglot/ts/polyglot-router";
import { getUnitStats } from "./polyglot/ts/unit_stats";
import { BlockDeploymentLogic } from "./mapTexture/gambar-tempat-armada/darat/barak/fitur_blok_input/ts/route";

/**
 * Player Tactical Logic - Unit Deployment & User Interactions
 */
export class PlayerTacticalLogic {
    static readonly SEA_THRESHOLD = -6000;
    static readonly NAVAL_UNITS = ["kapal_induk", "kapal_destroyer", "kapal_korvet", "kapal_selam_nuklir", "kapal_selam_regular", "kapal_ranjau", "kapal_logistik"];
    static readonly AIR_UNITS = ["jet_tempur_siluman", "jet_tempur_interceptor", "pesawat_pengebom", "helikopter_serang", "pesawat_pengintai", "drone_intai_uav", "drone_kamikaze", "pesawat_angkut"];

    /**
     * Validates if a unit type can be deployed at the given Y coordinate.
     */
    static isValidTerrain(unitType: string, y: number, hasSea: boolean): boolean {
        const isNaval = this.NAVAL_UNITS.includes(unitType);
        const isAir = this.AIR_UNITS.includes(unitType);
        
        if (isAir) return true;
        if (!hasSea) return !isNaval;
        
        if (isNaval) return y < this.SEA_THRESHOLD;
        return y >= this.SEA_THRESHOLD;
    }

    /**
     * Processes manual unit deployment.
     */
    static deployManual(
        unitType: string, 
        x: number, 
        y: number, 
        units: UnitState[], 
        selection: Record<string, number>,
        currentPoints: number,
        maxPoints: number,
        hasSea: boolean
    ): UnitState | null {
        if (!this.isValidTerrain(unitType, y, hasSea)) return null;

        const isInfantry = unitType === 'pasukan_infanteri';
        const unitScale = isInfantry ? 10000 : 1;
        
        const deployedQuantity = units.filter(u => u.side === 'user' && u.type === unitType).length * unitScale;
        const available = selection[unitType] || 0;

        const stats = getUnitStats(unitType);
        const unitCost = stats.cost * unitScale;
        if (deployedQuantity + unitScale > available || currentPoints + unitCost > maxPoints) return null;

        return {
            id: `u_${Date.now()}_${Math.random()}`,
            type: unitType,
            side: "user",
            pos: { x, y },
            health: stats.maxHealth,
            rotation: 0,
            influence: unitType.includes('tank') ? 300 : 100
        };
    }

    /**
     * Processes area/block unit deployment.
     */
    static deployBlock(
        unitType: string,
        rect: { x1: number, y1: number, x2: number, y2: number },
        amount: number,
        units: UnitState[],
        selection: Record<string, number>,
        currentPoints: number,
        maxPoints: number,
        hasSea: boolean
    ): UnitState[] {
        const multiplier = 1;
        const deployedQuantity = units.filter(u => u.side === 'user' && u.type === unitType).length * multiplier;
        const available = selection[unitType] || 0;
        const remaining = available - deployedQuantity;

        const actualAmount = Math.min(amount, remaining);
        if (actualAmount <= 0) return [];

        const stats = getUnitStats(unitType);
        const deploymentCost = stats.cost * actualAmount;
        if (currentPoints + deploymentCost > maxPoints) return [];

        const isInfantry = unitType === 'pasukan_infanteri';
        const tacticalUnits = isInfantry ? Math.ceil(actualAmount / 1000) : actualAmount;
        
        const rawPositions = BlockDeploymentLogic.calculateGridPositions(rect, tacticalUnits);
        const positions = rawPositions.filter(pos => this.isValidTerrain(unitType, pos.y, hasSea));

        return positions.map((pos, i) => ({
            id: `u_${unitType}_area_${Date.now()}_${i}`,
            type: unitType,
            side: "user",
            pos,
            health: stats.maxHealth,
            rotation: 0,
            influence: unitType.includes('tank') ? 300 : 100
        }));
    }
}
