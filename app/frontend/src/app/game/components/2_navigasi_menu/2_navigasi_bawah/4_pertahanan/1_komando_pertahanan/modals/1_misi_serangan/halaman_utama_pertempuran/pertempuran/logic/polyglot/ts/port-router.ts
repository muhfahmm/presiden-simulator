/**
 * Port Tactical Router
 * Orchestrates Harbor geometry and strategic location data.
 */

export interface ContainerStack {
    x: number;
    y: number;
    width: number;
    height: number;
    colors: string[];
}

export interface CranePosition {
    x: number;
    y: number;
}

export interface PierSegment {
    startX: number;
    startY: number;
    endX: number;
    endY: number;
    width: number;
}

export interface HarborData {
    id: string;
    name: string;
    piers: PierSegment[];
    warehouses: { x: number; y: number; w: number; h: number }[];
    cranes: CranePosition[];
    containers: ContainerStack[];
}

export const portRouter = {
    /**
     * Get the tactical harbor located at the shoreline center (Tanjung Tactical Hub)
     */
    getTacticalHarbor: (): HarborData => {
        const shoreY = -6000; // Boundary between land and sea
        const centerX = 0;    // Shoreline center (Blue box from screenshot)
        
        return {
            id: 'hub_central',
            name: 'Tanjung Tactical Hub',
            // 3 Piers extending into the sea
            piers: [
                { startX: centerX - 600, startY: shoreY, endX: centerX - 600, endY: shoreY - 1200, width: 120 },
                { startX: centerX, startY: shoreY, endX: centerX, endY: shoreY - 1500, width: 150 },
                { startX: centerX + 600, startY: shoreY, endX: centerX + 600, endY: shoreY - 1200, width: 120 },
            ],
            // Warehouses on the shoreline
            warehouses: [
                { x: centerX - 1200, y: shoreY + 100, w: 400, h: 250 },
                { x: centerX - 700, y: shoreY + 100, w: 400, h: 250 },
                { x: centerX + 300, y: shoreY + 100, w: 400, h: 250 },
                { x: centerX + 800, y: shoreY + 100, w: 400, h: 250 },
            ],
            // Cranes positioned along the main pier
            cranes: [
                { x: centerX - 80, y: shoreY - 400 },
                { x: centerX - 80, y: shoreY - 900 },
                { x: centerX + 80, y: shoreY - 600 },
                { x: centerX + 80, y: shoreY - 1100 },
            ],
            // Container stacks scattered on the hub
            containers: [
                { x: centerX - 1400, y: shoreY - 50, width: 150, height: 100, colors: ['#3b82f6', '#ef4444', '#f59e0b'] },
                { x: centerX - 1200, y: shoreY - 50, width: 150, height: 100, colors: ['#10b981', '#3b82f6', '#f59e0b'] },
                { x: centerX + 1100, y: shoreY - 50, width: 150, height: 100, colors: ['#ef4444', '#10b981', '#3b82f6'] },
            ]
        };
    }
};
