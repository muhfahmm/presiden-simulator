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

export interface RoadSegment {
    startX: number;
    startY: number;
    endX: number;
    endY: number;
    width: number;
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
     * Membangkitkan rute jalan untuk map dengan laut (coastal roads)
     */
    static generateHighways(): RoadSegment[] {
        const coastalRoadY = -5800;  // Jalan pesisir, sedikit di atas laut
        
        return [
            // Jalan pesisir horizontal (parallel dengan laut)
            { startX: -15000, startY: coastalRoadY, endX: 15000, endY: coastalRoadY, width: 40 },
            
            // Jalan horizontal tengah
            { startX: -15000, startY: 0, endX: 15000, endY: 0, width: 40 },
            
            // Jalan horizontal tambahan (biru muda)
            { startX: -15000, startY: 3500, endX: 15000, endY: 3500, width: 30 },
            { startX: -15000, startY: 7500, endX: 15000, endY: 7500, width: 30 },
            
            // Jalan vertikal tengah (hanya di area daratan)
            { startX: 0, startY: coastalRoadY, endX: 0, endY: 15000, width: 40 },
            { startX: -5000, startY: coastalRoadY, endX: -5000, endY: 15000, width: 25 },
            { startX: 5000, startY: coastalRoadY, endX: 5000, endY: 15000, width: 25 },
            
            // Jalan vertikal pinggir (biru muda - border roads)
            { startX: -15000, startY: coastalRoadY, endX: -15000, endY: 15000, width: 35 },
            { startX: 15000, startY: coastalRoadY, endX: 15000, endY: 15000, width: 35 },
        ];
    }

    /**
     * Membangkitkan rute jalan untuk map tanpa laut (landlocked)
     */
    static generateHighwaysLandlocked(): RoadSegment[] {
        return [
            // Jalan horizontal utama
            { startX: -15000, startY: 0, endX: 15000, endY: 0, width: 40 },
            { startX: -15000, startY: -7000, endX: 15000, endY: -7000, width: 40 },
            
            // Jalan horizontal tambahan (biru muda)
            { startX: -15000, startY: 3500, endX: 15000, endY: 3500, width: 30 },
            { startX: -15000, startY: 7500, endX: 15000, endY: 7500, width: 30 },
            
            // Jalan vertikal tengah (full map)
            { startX: 0, startY: -15000, endX: 0, endY: 15000, width: 40 },
            { startX: -5000, startY: -15000, endX: -5000, endY: 15000, width: 25 },
            { startX: 5000, startY: -15000, endX: 5000, endY: 15000, width: 25 },
            
            // Jalan vertikal pinggir (biru muda - border roads)
            { startX: -15000, startY: -15000, endX: -15000, endY: 15000, width: 35 },
            { startX: 15000, startY: -15000, endX: 15000, endY: 15000, width: 35 },
        ];
    }

    /**
     * Menggambar jalan dengan garis putus-putus di tengah
     */
    static drawRoads(
        ctx: CanvasRenderingContext2D,
        roads: RoadSegment[],
        zoom: number
    ): void {
        ctx.save();
        
        roads.forEach(road => {
            const { startX, startY, endX, endY, width } = road;
            
            // Gambar border jalan (lebih gelap) - dirender dulu
            ctx.strokeStyle = '#1a1a1a';
            ctx.lineWidth = width + 2;  // Border tipis
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
            ctx.setLineDash([]);
            
            ctx.beginPath();
            ctx.moveTo(startX, startY);
            ctx.lineTo(endX, endY);
            ctx.stroke();
            
            // Gambar jalan abu-abu gelap (aspal) - di atas border
            ctx.strokeStyle = '#2a2a2a';
            ctx.lineWidth = width;
            
            ctx.beginPath();
            ctx.moveTo(startX, startY);
            ctx.lineTo(endX, endY);
            ctx.stroke();
            
            // Gambar garis putus-putus kuning terang di tengah
            const dashLength = 200;
            const gapLength = 150;
            
            ctx.strokeStyle = '#ffff00';
            ctx.lineWidth = Math.max(2, width * 0.1);
            ctx.lineCap = 'butt';
            ctx.setLineDash([dashLength, gapLength]);
            ctx.shadowColor = '#ffff00';
            ctx.shadowBlur = 3;
            
            ctx.beginPath();
            ctx.moveTo(startX, startY);
            ctx.lineTo(endX, endY);
            ctx.stroke();
            
            // Reset
            ctx.setLineDash([]);
            ctx.shadowBlur = 0;
        });
        
        ctx.restore();
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
