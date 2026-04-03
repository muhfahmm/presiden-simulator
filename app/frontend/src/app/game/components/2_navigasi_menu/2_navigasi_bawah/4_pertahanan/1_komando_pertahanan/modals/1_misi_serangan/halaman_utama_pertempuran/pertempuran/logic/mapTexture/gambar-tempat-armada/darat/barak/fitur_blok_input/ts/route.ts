import { UnitState } from "../../../../../../polyglot/ts/polyglot-router";

/**
 * Tactical Area Deployment Logic - Block Input Feature
 * Handles distributing a high volume of infantry units within a rectangular zone.
 */
export class BlockDeploymentLogic {
    /**
     * Calculates grid positions for a specified number of units within a rectangle.
     * Ensures units are visually organized and within the bounds.
     */
    static calculateGridPositions(
        rect: { x1: number, y1: number, x2: number, y2: number },
        count: number
    ): { x: number, y: number }[] {
        const positions: { x: number, y: number }[] = [];
        if (count <= 0) return positions;

        const startX = Math.min(rect.x1, rect.x2);
        const endX = Math.max(rect.x1, rect.x2);
        const startY = Math.min(rect.y1, rect.y2);
        const endY = Math.max(rect.y1, rect.y2);

        const width = endX - startX;
        const height = endY - startY;

        // Determine aspect ratio to decide rows and columns
        const area = width * height;
        if (area === 0) return positions;

        // Calculate a grid that fits the count
        // sqrt(count) * aspect_ratio approx
        const aspectRatio = width / height;
        let cols = Math.max(1, Math.floor(Math.sqrt(count * aspectRatio)));
        let rows = Math.ceil(count / cols);

        // Adjust spacing to fit within the box
        const spacingX = cols > 1 ? width / (cols - 1) : 0;
        const spacingY = rows > 1 ? height / (rows - 1) : 0;

        for (let i = 0; i < count; i++) {
            const r = Math.floor(i / cols);
            const c = i % cols;

            positions.push({
                x: startX + c * spacingX,
                y: startY + r * spacingY
            });
        }

        return positions;
    }
}
