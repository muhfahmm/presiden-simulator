import { UnitState } from "../../../../../polyglot/ts/polyglot-router";
import { AirfieldHangarState } from "../../AirfieldUtils";
import { LandingPhysicsRouter } from "./route";

/**
 * AircraftReturnLogic - Landing Phase & Hangar Restocking
 */
export class AircraftReturnLogic {
    /**
     * Process existing airborne units for landing transitions.
     */
    static processLandingTick(
        units: UnitState[],
        hangars: AirfieldHangarState[]
    ): { nextUnits: UnitState[], nextHangars: AirfieldHangarState[] } {
        let updatedHangars = [...hangars];

        const nextUnits = units.map(u => {
            if (u.side !== 'enemy' || !(u as any).isAirType) return u;

            // Logic to check if landing unit reached the end of the runway (Hangar entrance)
            if ((u as any).aiState === 'landing' && (!u.path || u.path.length <= 1)) {
                const hangarIndex = updatedHangars.findIndex(h => h.type === u.type);
                if (hangarIndex !== -1) {
                    console.log(`[Hangar:RECOVERY] Unit ${u.type} recovered to hangar ${hangarIndex}. Restocking...`);
                    updatedHangars = updatedHangars.map((h, idx) => 
                        idx === hangarIndex ? { ...h, currentCount: Math.min(h.maxCapacity, h.currentCount + 1) } : h
                    );
                    return null; // MARK FOR REMOVAL
                }
            }
            return u;
        }).filter(u => u !== null) as UnitState[];

        return { nextUnits, nextHangars: updatedHangars };
    }

    /**
     * Orders a unit to initiate landing procedure.
     */
    static commandLanding(u: UnitState, hangarPos: {x: number, y: number}): UnitState {
        const runwayStartX = 12000 + 5000 / 2;
        const runwayEndX = 12000 - 5000 / 2;

        const trajectory = LandingPhysicsRouter.generateLandingTrajectory(
            u.pos, 
            { x: runwayEndX, y: hangarPos.y }, 
            { x: runwayStartX, y: hangarPos.y }
        );

        return {
            ...u,
            path: trajectory,
            aiState: 'landing'
        } as any;
    }
}
