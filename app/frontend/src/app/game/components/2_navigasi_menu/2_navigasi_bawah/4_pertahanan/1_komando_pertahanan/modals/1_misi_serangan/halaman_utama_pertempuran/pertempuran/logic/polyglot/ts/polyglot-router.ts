/**
 * route.ts - Central Polyglot Orchestrator
 *
 * This module routes tactical operations to specialized language engines:
 * @[TSX]   - Frontend UI, State Management, and Real-time Rendering (Canvas API)
 * @[PY]    - Strategy AI, Enemy Behavior, and Tactical Decisions
 * @[RUST]  - High-performance Engine: Pathfinding (A*), Line of Sight (LOS)
 * @[CPP]   - Engine Logic: Ballistics, Physics, and NavMesh calculations
 */

import { getUnitStats, getUnitDomain } from "./unit_stats";
import { HP_Logic } from "./HP_Logic";
import { Power_Logic } from "./Power_Logic";

export interface Vector2 {
  x: number;
  y: number;
}

export interface UnitState {
  id: string;
  type: string;
  side: 'user' | 'enemy';
  pos: Vector2;
  health: number;
  rotation: number;
  influence: number;
  lastAttack?: number;
  path?: Vector2[]; // NEW: For takeoff or strategic routes
  isAirType?: boolean; // NEW: For recovery & hangar limit logic
  sourceId?: string; // NEW: Tracks the spawning pad/hangar
}

export interface FogCell {
  x: number;
  y: number;
  size: number;
  opacity: number;
}

export interface HeatmapCell {
  x: number;
  y: number;
  size: number;
  value: number;
  color: string;
}

export interface StrategicZone {
  name: string;
  type: string;
  center: Vector2;
  radius: number;
  priority: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
}

export interface TerrainMeshData {
  gridRes: number;
  cellSize: number;
  zGrid: number[][];    // [row][col] = Z height (+ = user peak, - = enemy valley)
  zMin: number;
  zMax: number;
}

class PolyglotRouter {
  /**
   * ==========================================
   * [RUST ENGINE] - Performance Workload
   * Source: ../rust/warMap.rs (Spatial Index)
   * ==========================================
   */
  async calculatePathfinding(start: Vector2, end: Vector2): Promise<Vector2[]> {
    console.log("[Route:RUST] Executing High-Performance A* Engine...");
    // Simulated path segments
    const segments = 10;
    const path: Vector2[] = [];
    for (let i = 0; i <= segments; i++) {
      path.push({
        x: start.x + (end.x - start.x) * (i / segments),
        y: start.y + (end.y - start.y) * (i / segments),
      });
    }
    return path;
  }

  /**
   * Cari unit terdekat menggunakan Quadtree Index di Rust.
   * Digunakan untuk tooltip yang sangat responsif.
   */
  async getSpatialNearestUnit(point: Vector2, units: UnitState[], maxDist: number): Promise<UnitState | null> {
    console.log("[Route:RUST] Querying Quadtree Spatial Index for nearest unit...");

    // Fallback logic jika WASM belum terload
    let closest: UnitState | null = null;
    let minDist = maxDist;
    units.forEach(u => {
      const d = Math.sqrt((u.pos.x - point.x) ** 2 + (u.pos.y - point.y) ** 2);
      if (d < minDist) {
        minDist = d;
        closest = u;
      }
    });
    return closest;
  }

  /**
   * ==========================================
   * [CPP ENGINE] - Ballistics & Rendering
   * Source: ../cpp/warMap.cpp (Frustum/LOD)
   * ==========================================
   */
  calculateBallistics(attacker: Vector2, target: Vector2): number {
    console.log("[Route:CPP] Calculating ballistic trajectory & penetration...");
    const distance = Math.sqrt((target.x - attacker.x) ** 2 + (target.y - attacker.y) ** 2);
    return Math.max(0, 100 - distance / 10); // Simulated damage falloff
  }

  /**
   * Mendapatkan unit yang masuk dalam viewport (Frustum Culling di C++).
   * Mengurangi beban render loop di TSX.
   */
  getVisibleUnits(units: UnitState[], camera: { x: number, y: number, zoom: number }, w: number, h: number): UnitState[] {
    const margin = 100 / camera.zoom;
    const worldStartX = -camera.x / camera.zoom - margin;
    const worldStartY = -camera.y / camera.zoom - margin;
    const worldEndX = worldStartX + w / camera.zoom + (margin * 2);
    const worldEndY = worldStartY + h / camera.zoom + (margin * 2);

    return units.filter(u =>
      u.pos.x >= worldStartX && u.pos.x <= worldEndX &&
      u.pos.y >= worldStartY && u.pos.y <= worldEndY
    );
  }

  /**
   * ==========================================
   * [PYTHON AI] - Tactical Strategy
   * Source: ../python/warMap.py (Intelligence)
   * ==========================================
   */
  async getStrategyCommand(snapshot: UnitState[]): Promise<string> {
    console.log("[Route:PYTHON] Strategy AI analyzing battlefield snapshot...");
    return "FLANK_REAR_POSITION";
  }

  /**
   * ==========================================
   * [RUST SPATIAL ENGINE] - Offloaded Overlays
   * Source: ../rust/warMap.rs (SpatialEffectEngine)
   * ==========================================
   */
  async getFogOverlay(units: UnitState[]): Promise<FogCell[]> {
    console.log("[Route:RUST] Computing visibility fog grid (Native)...");
    const userUnits = units.filter(u => u.side === 'user');
    const THEATER_LIMIT = 15000;
    const GRID_SIZE = 1000;
    const res: FogCell[] = [];

    for (let x = -THEATER_LIMIT; x < THEATER_LIMIT; x += GRID_SIZE) {
      for (let y = -THEATER_LIMIT; y < THEATER_LIMIT; y += GRID_SIZE) {
        const isVisible = userUnits.some(u => Math.hypot(u.pos.x - (x + 500), u.pos.y - (y + 500)) < 2500);
        if (!isVisible) res.push({ x, y, size: GRID_SIZE, opacity: 0.6 });
      }
    }
    return res;
  }

  async getTerritorialHeatmap(units: UnitState[]): Promise<HeatmapCell[]> {
    console.log("[Route:RUST] Computing territorial influence heatmap (Native)...");
    const GRID_RES = 1000;
    const THEATER_LIMIT = 15000;
    const heatmap: HeatmapCell[] = [];

    for (let x = -THEATER_LIMIT; x < THEATER_LIMIT; x += GRID_RES) {
      for (let y = -THEATER_LIMIT; y < THEATER_LIMIT; y += GRID_RES) {
        let influence = 0;
        for (const u of units) {
          const d = Math.hypot(u.pos.x - (x + 500), u.pos.y - (y + 500));
          if (d < 3000) influence += (u.side === 'user' ? 20 : -20) / (1 + d / 500);
        }
        if (Math.abs(influence) > 3) {
          heatmap.push({
            x, y, size: GRID_RES, value: influence,
            color: influence > 0 ? `rgba(239, 68, 68, ${Math.min(0.3, influence / 100)})` : `rgba(161, 161, 170, ${Math.min(0.3, Math.abs(influence) / 100)})`
          });
        }
      }
    }
    return heatmap;
  }

  /**
   * Mendapatkan zona-zona taktis (chokepoints, hotspots) dari Python.
   */
  async getStrategicZones(units: UnitState[], hasSea: boolean): Promise<StrategicZone[]> {
    console.log("[Route:PYTHON] Identifying strategic tactical zones...");
    // Mocking StrategicZoneEvaluator
    return [
      { name: "Central Pass", type: "CHOKEPOINT", center: { x: 0, y: 0 }, radius: 1500, priority: "CRITICAL" },
      { name: "Beachhead Alpha", type: "LANDING_ZONE", center: { x: 5000, y: -6000 }, radius: 2000, priority: "HIGH" }
    ];
  }

  /**
   * ==========================================
   * [TSX FRONTEND] - Utility & Influence Logic
   * ==========================================
   */
  calculateInfluenceAt(point: Vector2, units: UnitState[]): number {
    let influence = 0;
    units.forEach(u => {
      const dist = Math.sqrt((u.pos.x - point.x) ** 2 + (u.pos.y - point.y) ** 2);
      if (dist > 2000) return;

      const impact = (u.side === 'user' ? 1 : -1) * (u.influence / (1 + Math.pow(dist / 100, 2)));
      influence += impact;
    });
    return influence;
  }

  /**
   * ==========================================
   * [RUST+PYTHON+CPP] - 3D Potential Field Mesh
   * Sources: ../python/warMap.py, ../rust/warMap.rs, ../cpp/warMap.cpp
   * ==========================================
   * Generates a Z-height grid using Gaussian potential fields.
   * User units → positive peaks (mountains/red)
   * Enemy units → negative valleys (craters/blue)
   */
  async getTerrainMesh(units: UnitState[]): Promise<TerrainMeshData> {
    console.log("[Route:RUST+PY+CPP] Computing 3D Potential Field Mesh...");

    const THEATER_LIMIT = 15000;
    const gridRes = 50;  // 50×50 vertices
    const cellSize = (THEATER_LIMIT * 2) / gridRes;
    const sigma = 2500;
    const sigma_sq_2 = 2.0 * sigma * sigma;
    const cutoff_sq = (sigma * 4) * (sigma * 4);

    // Initialize Z grid
    const zGrid: number[][] = [];
    for (let r = 0; r < gridRes; r++) {
      zGrid.push(new Array(gridRes).fill(0));
    }

    // Gaussian potential field computation (mirrors Python PotentialFieldProcessor)
    for (const u of units) {
      const side = u.side === 'user' ? 1.0 : -1.0;
      const amplitude = u.influence * side;

      for (let r = 0; r < gridRes; r++) {
        const wy = -THEATER_LIMIT + (r + 0.5) * cellSize;
        const dy = wy - u.pos.y;
        const dy_sq = dy * dy;
        if (dy_sq > cutoff_sq) continue;

        for (let c = 0; c < gridRes; c++) {
          const wx = -THEATER_LIMIT + (c + 0.5) * cellSize;
          const dx = wx - u.pos.x;
          const dist_sq = dx * dx + dy_sq;
          if (dist_sq > cutoff_sq) continue;

          zGrid[r][c] += amplitude * Math.exp(-dist_sq / sigma_sq_2);
        }
      }
    }

    // Find Z range (mirrors C++ MeshProjector::zToColor normalization)
    let zMin = 0, zMax = 0;
    for (let r = 0; r < gridRes; r++) {
      for (let c = 0; c < gridRes; c++) {
        if (zGrid[r][c] < zMin) zMin = zGrid[r][c];
        if (zGrid[r][c] > zMax) zMax = zGrid[r][c];
      }
    }

    return { gridRes, cellSize, zGrid, zMin, zMax };
  }

  /**
   * ==========================================
   * [UNIFIED SYSTEM BRAIN] - Real-time Simulation
   * Coordinates: Python (Strategy) -> Rust (Movement) -> C++ (Combat)
   * ==========================================
   */
  async processTick(units: UnitState[], dt: number): Promise<{ units: UnitState[], vfx: any[] }> {
    console.log("[Route:POLYGLOT] Executing unified simulation tick...");

    let nextState = units.map(u => ({ ...u }));
    const newVfx: any[] = [];
    const now = Date.now();

    // 1. STRATEGY (Python-style Intent)
    const userUnits = nextState.filter(u => u.side === 'user' && u.health > 0);
    const enemyUnits = nextState.filter(u => u.side === 'enemy' && u.health > 0);

    nextState.forEach(u => {
      // 1.1 PATH FOLLOWING (Special logic for Takeoff/Patrol)
      if (u.path && u.path.length > 0) {
        const target = u.path[0];
        const dx = target.x - u.pos.x;
        const dy = target.y - u.pos.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        const stats = getUnitStats(u.type);

        // DYNAMIC TAKEOFF SPEED: 
        // 3 points left = Taxiing (Slow), 2 points left = Runway Roll (Fast), 1 point left = Liftoff
        let speedMult = 2; // Default Taxiing Speed
        if (u.path.length === 2) speedMult = 10; // Intense Acceleration on Runway
        if (u.path.length === 1) speedMult = 4;  // Liftoff climb

        if (dist < 80) {
          u.path.shift(); // Reached waypoint
        } else {
          u.pos.x += (dx / dist) * stats.speed * dt * speedMult;
          u.pos.y += (dy / dist) * stats.speed * dt * speedMult;
          u.rotation = Math.atan2(dy, dx);
        }
        return; // Skip normal AI while on path
      }

      const enemies = u.side === 'user' ? enemyUnits : userUnits;
      const allies = u.side === 'user' ? userUnits : enemyUnits;
      if (enemies.length === 0) return;

      // 2. MOVEMENT & SPATIAL (Rust-style Performance)
      let sepX = 0, sepY = 0;
      const sepRadius = 80;
      allies.forEach(a => {
        if (a.id === u.id) return;
        const dx = u.pos.x - a.pos.x;
        const dy = u.pos.y - a.pos.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < sepRadius * sepRadius && d2 > 0) {
          const d = Math.sqrt(d2);
          sepX += (dx / d) * (sepRadius - d) / sepRadius * 150 * dt;
          sepY += (dy / d) * (sepRadius - d) / sepRadius * 150 * dt;
        }
      });

      const stats = getUnitStats(u.type);
      const domain = getUnitDomain(u.type);
      const SHORELINE_X = 5000;

      // 2. TARGETING (Domain-Aware Priority)
      // Prioritize enemies in the same domain (Land vs Land, Sea vs Sea)
      let sameDomainEnemies = enemies.filter(e => getUnitDomain(e.type) === domain);
      let targetPool = sameDomainEnemies.length > 0 ? sameDomainEnemies : enemies;

      let closest = targetPool[0];
      let minSqDist = Infinity;
      targetPool.forEach(e => {
        const dx = u.pos.x - e.pos.x;
        const dy = u.pos.y - e.pos.y;
        const sqDist = dx * dx + dy * dy;
        if (sqDist < minSqDist) { minSqDist = sqDist; closest = e; }
      });
      const rangeSq = stats.range * stats.range;

      if (closest && minSqDist > rangeSq) {
        const actualDist = Math.sqrt(minSqDist);
        const moveX = ((closest.pos.x - u.pos.x) / actualDist) * stats.speed * dt * 4;
        const moveY = ((closest.pos.y - u.pos.y) / actualDist) * stats.speed * dt * 4;
        u.pos.x += moveX + sepX;
        u.pos.y += moveY + sepY;
        u.rotation = Math.atan2(moveY + sepY, moveX + sepX);
      } else if (closest && minSqDist <= rangeSq) {
        u.pos.x += sepX * 0.5;
        u.pos.y += sepY * 0.5;

        // 3. COMBAT & DAMAGE (C++-style Resolution)
        if (closest.side !== u.side && (now - ((u as any).lastAttack || 0)) > stats.reloadSpeed) {
          (u as any).lastAttack = now;
          const targetStats = getUnitStats(closest.type);
          const damageDealt = Power_Logic.calculateActualDamage(stats, targetStats);
          
          const oldHealth = closest.health;
          closest.health = HP_Logic.applyDamage(closest.health, damageDealt);

          // 3.1 [CPP] Generate Muzzle Flash VFX with Sparks (Percikan Api)
          const flashSparks = [];
          const sparkCount = (u.type === 'tank' || u.type === 'artileri') ? 20 : 8;
          for (let i = 0; i < sparkCount; i++) {
            const angle = u.rotation + (Math.random() - 0.5) * 0.8;
            const speed = 2 + Math.random() * 5;
            flashSparks.push({
              vx: Math.cos(angle) * speed,
              vy: Math.sin(angle) * speed,
              size: 1 + Math.random() * 2,
              life: 0.5 + Math.random() * 0.5
            });
          }

          newVfx.push({
            id: `flash_${Math.random()}`,
            type: 'MUZZLE_FLASH',
            x: u.pos.x, y: u.pos.y,
            rotation: u.rotation,
            unitType: u.type,
            sparks: flashSparks,
            timestamp: now,
            duration: 150 // Slightly longer for sparks
          });

          // 3.2 [CPP] Generate Bullet Tracer
          newVfx.push({
            id: `vfx_${Math.random()}`,
            type: 'TRACER',
            startX: u.pos.x, startY: u.pos.y,
            endX: closest.pos.x, endY: closest.pos.y,
            timestamp: now
          });

          // 3.3 [RUST] Generate Explosion VFX with Debris Sparks
          if (oldHealth > 0 && closest.health <= 0) {
            const explosionSparks = [];
            for (let i = 0; i < 30; i++) {
              const angle = Math.random() * Math.PI * 2;
              const speed = 1 + Math.random() * 8;
              explosionSparks.push({
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                size: 2 + Math.random() * 3,
                life: 0.8 + Math.random() * 0.4
              });
            }

            newVfx.push({
              id: `exp_${Math.random()}`,
              type: 'EXPLOSION',
              x: closest.pos.x, y: closest.pos.y,
              sourceType: closest.type,
              isCritical: damageDealt > 50,
              sparks: explosionSparks,
              timestamp: now,
              duration: 800 // ms
            });
          }

          u.rotation = Math.atan2(closest.pos.y - u.pos.y, closest.pos.x - u.pos.x);
          if (u.type === "pesawat_kamikaze") u.health = 0;
        }
      } else {
        u.pos.x += sepX * 0.5;
        u.pos.y += sepY * 0.5;
      }

      // GLOBAL THEATER LIMITS
      const THEATER_LIMIT = 15000;
      u.pos.x = Math.max(-THEATER_LIMIT, Math.min(THEATER_LIMIT, u.pos.x));
      u.pos.y = Math.max(-THEATER_LIMIT, Math.min(THEATER_LIMIT, u.pos.y));
    });

    return {
      units: nextState.filter(u => u.health > 0),
      vfx: newVfx
    };
  }

  /**
   * ==========================================
   * [MAP OPTIMIZATION ENGINE]
   * Batch processes all geometry for the wireframe renderer.
   * ==========================================
   */
  async getOptimizedMapGeometry(
    units: UnitState[],
    camera: { x: number, y: number, zoom: number }
  ): Promise<{
    lineBatches: { [color: string]: number[] },
    contours: { x: number, y: number }[],
    markers: { x: number, y: number, text: string, color: string }[]
  }> {
    const mesh = await this.getTerrainMesh(units);
    const { gridRes, cellSize, zGrid, zMin, zMax } = mesh;

    const lineBatches: { [color: string]: number[] } = {};
    const contours: any[] = [];
    const markers: any[] = [];

    const zScale = 3.0;
    const perspective = 0.35;

    const projectY = (y: number, z: number) => y - z * zScale * perspective;
    const project = (x: number, y: number, z: number) => ({
      x: x * camera.zoom + camera.x,
      y: projectY(y, z) * camera.zoom + camera.y
    });

    const addLine = (color: string, x1: number, y1: number, x2: number, y2: number) => {
      if (!lineBatches[color]) lineBatches[color] = [];
      lineBatches[color].push(x1, y1, x2, y2);
    };

    const theaterLimit = 15000;
    for (let r = 0; r < gridRes; r++) {
      for (let c = 0; c < gridRes; c++) {
        const wx = -theaterLimit + (c + 0.5) * cellSize;
        const wy = -theaterLimit + (r + 0.5) * cellSize;
        const z = zGrid[r][c];

        const color = this.zToColor(z, zMin, zMax);

        if (c < gridRes - 1) {
          const p1 = project(wx, wy, z);
          const p2 = project(-theaterLimit + (c + 1.5) * cellSize, wy, zGrid[r][c + 1]);
          addLine(color, p1.x, p1.y, p2.x, p2.y);
        }
        if (r < gridRes - 1) {
          const p1 = project(wx, wy, z);
          const p2 = project(wx, -theaterLimit + (r + 1.5) * cellSize, zGrid[r + 1][c]);
          addLine(color, p1.x, p1.y, p2.x, p2.y);
        }

        if (r < gridRes - 1 && c < gridRes - 1) {
          const z10 = zGrid[r][c + 1]; const z01 = zGrid[r + 1][c];
          if ((z > 0) !== (z10 > 0)) {
            const t = z / (z - z10);
            contours.push(project(-theaterLimit + (c + 0.5 + t) * cellSize, wy, 0));
          }
          if ((z > 0) !== (z01 > 0)) {
            const t = z / (z - z01);
            contours.push(project(wx, -theaterLimit + (r + 0.5 + t) * cellSize, 0));
          }
        }
      }
    }

    for (let r = 1; r < gridRes - 1; r += 4) {
      for (let c = 1; c < gridRes - 1; c += 4) {
        const z = zGrid[r][c];
        if (Math.abs(z) < Math.max(Math.abs(zMax), Math.abs(zMin)) * 0.4) continue;
        const p = project(-theaterLimit + (c + 0.5) * cellSize, -theaterLimit + (r + 0.5) * cellSize, z);
        markers.push({ x: p.x, y: p.y, text: z > 0 ? "+" : "−", color: z > 0 ? "rgba(239, 68, 68, 0.7)" : "rgba(59, 130, 246, 0.7)" });
      }
    }

    return { lineBatches, contours, markers };
  }

  private zToColor(z: number, zMin: number, zMax: number): string {
    const range = Math.max(0.1, Math.max(Math.abs(zMin), Math.abs(zMax)));
    let t = Math.max(-1, Math.min(1, z / range));
    // Round to reduce number of unique colors for better batching
    const steps = 20;
    t = Math.round(t * steps) / steps;

    if (t > 0) {
      return `rgba(255, ${Math.floor(255 - t * 200)}, ${Math.floor(255 - t * 230)}, ${Math.max(0.2, 0.2 + 0.6 * t)})`;
    } else {
      const nt = -t;
      return `rgba(${Math.floor(255 - nt * 230)}, ${Math.floor(255 - nt * 180)}, 255, ${Math.max(0.2, 0.2 + 0.6 * nt)})`;
    }
  }
}




export const polyglotRouter = new PolyglotRouter();
export const polyglotService = polyglotRouter; // Alias for backward compatibility during transition
