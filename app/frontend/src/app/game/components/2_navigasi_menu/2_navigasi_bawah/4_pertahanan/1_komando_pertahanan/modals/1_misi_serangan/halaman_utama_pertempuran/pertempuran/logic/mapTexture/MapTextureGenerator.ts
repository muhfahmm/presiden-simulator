/**
 * Map Texture & Topology Generator
 * Modul ini berfungsi untuk menyuplai generasi geometri taktis:
 * Gunung, Perkotaan (Urban), Jembatan, Jalan Raya, dan Sungai
 * secara prosedural menuju CanvasMapWar.ts
 */

export interface TerrainNode {
    type: 'mountain' | 'urban' | 'water' | 'road';
    x: number;
    y: number;
    size: number;
    rotation?: number;
}

export class MapTextureEngine {
    /**
     * Membangkitkan lokasi gunung / pegunungan secara prosedural
     * menggunakan seed (agar posisinya tetap sama setiap dirender)
     */
    static generateMountains(worldStartX: number, worldStartY: number, worldEndX: number, worldEndY: number): TerrainNode[] {
        const mountains: TerrainNode[] = [];
        const chunkSize = 2000;
        
        for (let cx = worldStartX - chunkSize; cx <= worldEndX + chunkSize; cx += chunkSize) {
            for (let cy = worldStartY - chunkSize; cy <= worldEndY + chunkSize; cy += chunkSize) {
                // Pseudo-random generation logic
                const isMountain = Math.sin(cx * 12.9898 + cy * 78.233) * 43758.5453 > 0.6;
                if (isMountain) {
                    mountains.push({
                        type: 'mountain',
                        x: cx + chunkSize / 2 + (Math.cos(cx) * 500),
                        y: cy + chunkSize / 2 + (Math.sin(cy) * 500),
                        size: 400 + Math.abs(Math.sin(cx * cy)) * 600,
                    });
                }
            }
        }
        return mountains;
    }

    /**
     * Membangkitkan rute jalan tol antar koordinat
     */
    static generateHighways(): {startX: number, startY: number, endX: number, endY: number}[] {
        // Contoh rute jembatan tol horizontal konstan di tengah map
        return [
            { startX: -8000, startY: 0, endX: 8000, endY: 0 }
        ];
    }

    /**
     * Membangkitkan blok perkotaan (Urban Warfare zones)
     */
    static generateUrbanBlocks(cx: number, cy: number): TerrainNode[] {
        return [
            { type: 'urban', x: cx, y: cy, size: 800, rotation: 0.2 }
        ];
    }
}
