// map_logic.ts
// Integration layer for the polyglot map system components.

export interface NationalRiskData {
    countryId: string;
    riskLevel: number; // 0-100
}

/**
 * Conceptually bridges to the Rust/C++ logic.
 * In a real-world scenario, this might call a Wasm module or a Tauri Command.
 */
export const getRiskAssessment = (countryId: string): number => {
    // Placeholder for Rust-calculated risk
    // In production: return invoke('get_country_risk', { id: countryId });
    const seed = countryId.length;
    return (seed * 13) % 100; 
};

/**
 * Applies a "Cyber" glow style based on the risk level.
 */
export const getRiskGlowColor = (risk: number): string => {
    if (risk > 80) return "#ef4444"; // Red (Danger)
    if (risk > 50) return "#f59e0b"; // Orange (Warning)
    if (risk > 20) return "#eab308"; // Yellow (Elevated)
    return "#10b981"; // Green (Stable)
};

/**
 * Formats data for the Python-optimized metadata generator.
 */
export const prepareMapMetadata = (countries: any[]) => {
    return countries.map(c => ({
        id: c.name_id,
        center: [c.lon, c.lat],
        stats: {
            economy: c.ekonomi?.gdp || 0,
            military: c.militer?.skor || 0
        }
    }));
};

/**
 * Miller Projection: Centralized polyglot logic for curvature calculation.
 */
export const projectMiller = (lat: number, lon: number, width: number, height: number): { x: number; y: number } => {
    const x = ((lon + 180) / 360) * width;
    const latRad = (lat * Math.PI) / 180;
    const yMiller = 1.25 * Math.log(Math.tan(Math.PI / 4 + 0.4 * latRad));
    const y = height / 2 - yMiller * (height / (2 * 2.3));
    return { x, y };
};
