/**
 * MapPathCache Utility
 * Singleton to store and reuse Path2D objects for GeoJSON country boundaries.
 * Prevents redundant CPU-heavy path generation when switching map tabs.
 */

type ProjectFunction = (lon: number, lat: number) => { x: number; y: number };

class PathCache {
    private cache: Map<string, { name: string; path: Path2D; id: string }> = new Map();
    private isInitialized = false;

    /**
     * getPaths
     * Returns cached paths or generates them if not present.
     */
    public getPaths(geoData: any, project: ProjectFunction) {
        if (this.isInitialized && this.cache.size > 0) {
            return Array.from(this.cache.values());
        }

        if (!geoData) return [];

        console.log("[MapPathCache] Initializing Global Path Cache...");
        const start = performance.now();

        geoData.features.forEach((feature: any) => {
            const path = new Path2D();
            const drawCoords = (coordinates: any) => {
                coordinates.forEach((polyline: any) => {
                    polyline.forEach((coord: any, i: number) => {
                        const { x, y } = project(coord[0], coord[1]);
                        if (i === 0) path.moveTo(x, y); else path.lineTo(x, y);
                    });
                });
            };

            if (feature.geometry.type === "Polygon") {
                drawCoords(feature.geometry.coordinates);
            } else if (feature.geometry.type === "MultiPolygon") {
                feature.geometry.coordinates.forEach((poly: any) => drawCoords(poly));
            }

            const name = feature.properties.name;
            const id = feature.id || name;
            this.cache.set(id, { name, path, id });
        });

        this.isInitialized = true;
        const end = performance.now();
        console.log(`[MapPathCache] Cache generated in ${(end - start).toFixed(2)}ms for ${this.cache.size} features.`);
        
        return Array.from(this.cache.values());
    }

    public clear() {
        this.cache.clear();
        this.isInitialized = false;
    }
}

export const mapPathCache = new PathCache();
