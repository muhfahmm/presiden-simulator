"use client"

/**
 * Territory Grid System
 * =====================
 * Membagi wilayah negara target menjadi grid/tile untuk
 * visualisasi okupasi dan penempatan unit.
 *
 * Grid mencover bounding box negara target, lalu setiap tile
 * dicek apakah center-nya berada di dalam polygon negara.
 */

import { TileData, TileStatus, BattlefieldState, DeployedUnit } from "../warTypes";
import { countries as centersData } from "@/app/database/data/negara/benua/index";

// === Konstanta ===
const DEFAULT_GRID_COLS = 40;
const DEFAULT_GRID_ROWS = 30;
const TILE_SIZE = 20; // pixel per tile di TacticalBattleCanvas
const OCCUPATION_RADIUS = 2; // tile radius okopasi per unit
const CONQUEST_THRESHOLD = 0.75; // 75% = negara menyerah

/**
 * Mendapatkan center (lon/lat) dari negara berdasarkan nama.
 */
export function getCountryCenter(countryName: string): { lon: number; lat: number } | null {
  const entry = centersData.find(
    c => c.name_id?.toLowerCase() === countryName.toLowerCase() ||
      c.name_en?.toLowerCase() === countryName.toLowerCase()
  );
  if (!entry) return null;
  return { lon: entry.lon, lat: entry.lat };
}

/**
 * Mendapatkan bounding box estimasi negara berdasarkan center + spread.
 * Karena kita tidak memiliki akses langsung ke GeoJSON path boundaries per negara,
 * kita estimasi berdasarkan ukuran negara.
 */
export function estimateCountryBounds(
  center: { lon: number; lat: number },
  spreadLon = 8,
  spreadLat = 6
): { minLon: number; maxLon: number; minLat: number; maxLat: number } {
  return {
    minLon: center.lon - spreadLon,
    maxLon: center.lon + spreadLon,
    minLat: center.lat - spreadLat,
    maxLat: center.lat + spreadLat,
  };
}

/**
 * Mengonversi lon/lat ke pixel pada canvas peta (projection Mercator sederhana).
 */
export function projectToPixel(
  lon: number, lat: number,
  mapWidth: number, mapHeight: number
): { x: number; y: number } {
  return {
    x: ((lon + 180) / 360) * mapWidth,
    y: ((90 - lat) / 180) * mapHeight,
  };
}

/**
 * Membuat grid tiles untuk medan perang di negara tertentu.
 * Grid ini mencover area negara target, setiap tile dicek
 * apakah di dalam polygon negara (simplified: semua tile di bounding box aktif).
 */
export function generateBattlefieldGrid(
  countryName: string,
  geoData?: any,
  cols = DEFAULT_GRID_COLS,
  rows = DEFAULT_GRID_ROWS
): BattlefieldState | null {
  const center = getCountryCenter(countryName);
  if (!center) return null;

  const bounds = estimateCountryBounds(center);
  const mapWidth = 6000;
  const mapHeight = 2400;

  const topLeft = projectToPixel(bounds.minLon, bounds.maxLat, mapWidth, mapHeight);
  const bottomRight = projectToPixel(bounds.maxLon, bounds.minLat, mapWidth, mapHeight);

  const pixelBounds = {
    minX: topLeft.x,
    minY: topLeft.y,
    maxX: bottomRight.x,
    maxY: bottomRight.y,
  };

  const bboxW = pixelBounds.maxX - pixelBounds.minX;
  const bboxH = pixelBounds.maxY - pixelBounds.minY;
  const tileSizeX = bboxW / cols;
  const tileSizeY = bboxH / rows;

  // Cek apakah titik di dalam polygon negara (GeoJSON)
  const isPointInCountry = createPointInCountryChecker(countryName, geoData, mapWidth, mapHeight);

  const tiles: TileData[][] = [];
  for (let row = 0; row < rows; row++) {
    tiles[row] = [];
    for (let col = 0; col < cols; col++) {
      const pixelX = pixelBounds.minX + col * tileSizeX + tileSizeX / 2;
      const pixelY = pixelBounds.minY + row * tileSizeY + tileSizeY / 2;

      const terrainType = determineTerrain(col, row, cols, rows);

      tiles[row][col] = {
        gridX: col,
        gridY: row,
        pixelX,
        pixelY,
        status: 'empty' as TileStatus,
        terrainType,
        isInsideCountry: isPointInCountry(pixelX, pixelY),
      };
    }
  }

  // Set tile di border terdekat center sebagai enemy awal
  setInitialEnemyTerritory(tiles, rows, cols);

  return {
    warId: '',
    defenderCountry: countryName,
    gridCols: cols,
    gridRows: rows,
    tileSize: Math.min(tileSizeX, tileSizeY),
    tiles,
    userUnits: [],
    enemyUnits: [],
    subPhase: 'planning',
    occupationPercent: 0,
    tick: 0,
    bounds: pixelBounds,
    center,
  };
}

/**
 * Membuat fungsi checker apakah titik berada di dalam polygon negara.
 * Menggunakan GeoJSON path jika tersedia, fallback ke ellipse estimation.
 */
function createPointInCountryChecker(
  countryName: string,
  geoData: any,
  mapWidth: number,
  mapHeight: number
): (px: number, py: number) => boolean {
  // Jika ada geoData, match feature ke negara
  if (geoData?.features) {
    const geoJsonToIndo: { [key: string]: string } = {
      "The Bahamas": "bahama",
      "Democratic Republic of the Congo": "republik demokratik kongo",
      "Northern Cyprus": "siprus",
      "Czech Republic": "ceko",
      "Guinea Bissau": "guinea-bissau",
      "Equatorial Guinea": "guinea",
      "Macedonia": "makedonia utara",
      "Republic of Serbia": "republik serbia",
      "Swaziland": "eswatini",
      "East Timor": "timor-leste",
      "Turkey": "turki",
      "United Republic of Tanzania": "republik tanzania",
      "United States of America": "amerika serikat",
      "West Bank": "palestina",
      "Falkland Islands": "argentina",
      "Western Sahara": "maroko",
      "Somaliland": "somalia",
      "New Caledonia": "fiji",
      "Solomon Islands": "marshall",
      "United Kingdom": "inggris",
    };

    const feature = geoData.features.find((f: any) => {
      const fName = f.properties?.name || '';
      const mapped = geoJsonToIndo[fName] || fName;
      return mapped.toLowerCase() === countryName.toLowerCase() ||
        fName.toLowerCase() === countryName.toLowerCase();
    });

    if (feature) {
      // Buat OffscreenCanvas untuk point-in-polygon check via Path2D
      const path = new Path2D();
      const project = (lon: number, lat: number) => ({
        x: ((lon + 180) / 360) * mapWidth,
        y: ((90 - lat) / 180) * mapHeight,
      });

      const drawCoords = (coords: any) => {
        coords.forEach((poly: any) => {
          poly.forEach((c: any, i: number) => {
            const { x, y } = project(c[0], c[1]);
            if (i === 0) path.moveTo(x, y);
            else path.lineTo(x, y);
          });
        });
      };

      if (feature.geometry.type === 'Polygon') {
        drawCoords(feature.geometry.coordinates);
      } else if (feature.geometry.type === 'MultiPolygon') {
        feature.geometry.coordinates.forEach((p: any) => drawCoords(p));
      }

      // Gunakan OffscreenCanvas untuk isPointInPath
      if (typeof OffscreenCanvas !== 'undefined') {
        const offscreen = new OffscreenCanvas(1, 1);
        const ctx = offscreen.getContext('2d');
        if (ctx) {
          return (px: number, py: number) => ctx.isPointInPath(path, px, py);
        }
      }

      // Fallback: buat canvas biasa
      const canvas = document.createElement('canvas');
      canvas.width = 1;
      canvas.height = 1;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        return (px: number, py: number) => ctx.isPointInPath(path, px, py);
      }
    }
  }

  // Fallback: ellipse estimation berdasarkan center dan spread
  const center = getCountryCenter(countryName);
  if (!center) return () => true;

  const centerPx = projectToPixel(center.lon, center.lat, mapWidth, mapHeight);
  const bounds = estimateCountryBounds(center);
  const topLeft = projectToPixel(bounds.minLon, bounds.maxLat, mapWidth, mapHeight);
  const bottomRight = projectToPixel(bounds.maxLon, bounds.minLat, mapWidth, mapHeight);
  const radiusX = (bottomRight.x - topLeft.x) / 2 * 0.7;
  const radiusY = (bottomRight.y - topLeft.y) / 2 * 0.7;

  return (px: number, py: number) => {
    const dx = (px - centerPx.x) / radiusX;
    const dy = (py - centerPx.y) / radiusY;
    return (dx * dx + dy * dy) <= 1;
  };
}

/**
 * Set tile di interior negara sebagai enemy territory awal.
 * Musuh menguasai ~60% wilayah di awal, user harus merebut.
 */
function setInitialEnemyTerritory(
  tiles: TileData[][],
  rows: number,
  cols: number
) {
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (tiles[row][col].isInsideCountry) {
        tiles[row][col].status = 'enemy';
      }
    }
  }
}

/**
 * Menandai tile yang dikuasai user berdasarkan posisi unit.
 * Setiap unit menguasai tile di sekitarnya (OCCUPATION_RADIUS).
 */
export function updateOccupiedTiles(battlefield: BattlefieldState): void {
  // Reset semua tile yang di dalam negara ke enemy
  for (let row = 0; row < battlefield.gridRows; row++) {
    for (let col = 0; col < battlefield.gridCols; col++) {
      if (battlefield.tiles[row][col].isInsideCountry) {
        battlefield.tiles[row][col].status = 'enemy';
      }
    }
  }

  // Mark tiles di sekitar unit user sebagai 'user'
  battlefield.userUnits.filter(u => u.isAlive).forEach(unit => {
    for (let dy = -OCCUPATION_RADIUS; dy <= OCCUPATION_RADIUS; dy++) {
      for (let dx = -OCCUPATION_RADIUS; dx <= OCCUPATION_RADIUS; dx++) {
        const gx = Math.round(unit.gridX) + dx;
        const gy = Math.round(unit.gridY) + dy;
        if (gx >= 0 && gx < battlefield.gridCols && gy >= 0 && gy < battlefield.gridRows) {
          const tile = battlefield.tiles[gy][gx];
          if (tile.isInsideCountry) {
            // Cek jarak euclidean
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist <= OCCUPATION_RADIUS) {
              tile.status = 'user';
            }
          }
        }
      }
    }
  });

  // Hitung persentase okupasi
  let totalCountryTiles = 0;
  let userTiles = 0;
  for (let row = 0; row < battlefield.gridRows; row++) {
    for (let col = 0; col < battlefield.gridCols; col++) {
      if (battlefield.tiles[row][col].isInsideCountry) {
        totalCountryTiles++;
        if (battlefield.tiles[row][col].status === 'user') {
          userTiles++;
        }
      }
    }
  }

  battlefield.occupationPercent = totalCountryTiles > 0
    ? (userTiles / totalCountryTiles) * 100
    : 0;
}

/**
 * Cek apakah negara sudah ditaklukkan (>=75% okupasi).
 */
export function isCountryConquered(battlefield: BattlefieldState): boolean {
  return battlefield.occupationPercent >= CONQUEST_THRESHOLD * 100;
}

/**
 * Mendapatkan zona deployment yang valid untuk user.
 * User bisa deploy di: tile-tile di pinggir/border negara.
 */
/**
 * Menentukan tipe terrain untuk koordinat tertentu.
 * Menggunakan noise sederhana (sine-based) untuk menciptakan area hutan/gunung yang berkumpul.
 */
function determineTerrain(col: number, row: number, cols: number, rows: number): 'plain' | 'forest' | 'mountain' | 'water' {
  // 1. Water: cek pinggiran grid (5% peluang di tepi)
  if (col < 2 || col > cols - 3 || row < 2 || row > rows - 3) {
    if (Math.random() < 0.3) return 'water';
  }

  // 2. Gunakan fungsi trigonometri untuk cluster terrain
  const noise = Math.sin(col * 0.3) * Math.cos(row * 0.3) + 
                Math.sin(col * 0.1 + row * 0.1) * 0.5;
  
  if (noise > 0.8) return 'mountain';
  if (noise > 0.3) return 'forest';
  
  // 3. Water pockets
  const waterNoise = Math.cos(col * 0.15) * Math.sin(row * 0.15);
  if (waterNoise < -0.85) return 'water';

  return 'plain';
}

export function getDeploymentZones(battlefield: BattlefieldState): TileData[] {
  const zones: TileData[] = [];

  for (let row = 0; row < battlefield.gridRows; row++) {
    for (let col = 0; col < battlefield.gridCols; col++) {
      const tile = battlefield.tiles[row][col];
      if (!tile.isInsideCountry) continue;

      // Tile di border: punya neighbor yang bukan isInsideCountry
      const isBorder = [
        [0, -1], [0, 1], [-1, 0], [1, 0]
      ].some(([dx, dy]) => {
        const nx = col + dx;
        const ny = row + dy;
        if (nx < 0 || nx >= battlefield.gridCols || ny < 0 || ny >= battlefield.gridRows) return true;
        return !battlefield.tiles[ny][nx].isInsideCountry;
      });

      if (isBorder) {
        zones.push(tile);
      }
    }
  }

  return zones;
}

export { CONQUEST_THRESHOLD, OCCUPATION_RADIUS, DEFAULT_GRID_COLS, DEFAULT_GRID_ROWS, TILE_SIZE };
