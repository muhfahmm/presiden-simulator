/**
 * MapWorker.ts
 * Background worker for map path generation and static layer baking.
 * Offloads heavy GeoJSON processing from the main UI thread.
 */

self.onmessage = (e) => {
    const { geoData, mapWidth, mapHeight, project } = e.data;
    if (!geoData) return;

    console.log("[MapWorker] Processing GeoJSON in background...");
    const start = performance.now();

    // Note: In a worker, we generate serialized path instructions 
    // or render to an OffscreenCanvas if available.
    
    const results = geoData.features.map((feature: any) => {
        // Simple serialization of coordinates for the main thread to build Path2D
        // or we could use OffscreenCanvas here if we want to return an ImageBitmap.
        return {
            name: feature.properties.name,
            id: feature.id || feature.properties.name,
            geometry: feature.geometry
        };
    });

    const end = performance.now();
    console.log(`[MapWorker] Processed ${results.length} features in ${(end - start).toFixed(2)}ms`);
    
    self.postMessage({ type: 'DONE', features: results });
};
