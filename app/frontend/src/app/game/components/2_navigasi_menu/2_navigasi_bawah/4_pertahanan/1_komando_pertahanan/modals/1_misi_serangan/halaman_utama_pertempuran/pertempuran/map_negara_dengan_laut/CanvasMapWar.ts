import { FogCell, HeatmapCell, TerrainMeshData } from "../logic/polyglot/ts/polyglot-router";
import { portRouter } from "../logic/polyglot/ts/port-router";
import { MapTextureEngine } from "../logic/mapTexture/MapTextureGenerator";
import { PelabuhanEngine } from "../logic/mapTexture/gambar-tempat-armada/laut/pelabuhan/PelabuhanGenerator";
import { BandaraEngine } from "../logic/mapTexture/gambar-tempat-armada/udara/bandara/bandara";
import { HelipadEngine } from "../logic/mapTexture/gambar-tempat-armada/udara/helipad/index";
import { HangarTankEngine } from "../logic/mapTexture/gambar-tempat-armada/darat/hangar_tank/index";
import { BarakEngine } from "../logic/mapTexture/gambar-tempat-armada/darat/barak/barak";
import { ArmoryEngine } from "../logic/mapTexture/gambar-tempat-armada/darat/gudang_senjata/index";

// ============================================================
// Tactical Map Renderer - 3D Potential Field Mesh (WITH SEA)
// Draws a wireframe surface mesh where:
//   Peaks (+Z) = User force dominance (Red/White)
//   Valleys (-Z) = Enemy force dominance (Blue)
//   Flat (0) = Neutral/Contested (Cyan grid)
// ============================================================

const THEATER_LIMIT = 15000;
const Z_VISUAL_SCALE = 3.0;   // How much Z affects visual Y displacement
const PERSPECTIVE = 0.35;      // Oblique projection factor

/**
 * Convert Z height to RGB color string.
 * Negative → Blue (enemy valley)
 * Zero → Cyan (neutral)
 * Positive → Red/White (user peak)
 */
function zToColor(z: number, zMin: number, zMax: number): string {
   const range = Math.max(0.01, Math.max(Math.abs(zMin), Math.abs(zMax)));
   let t = z / range;
   t = Math.max(-1, Math.min(1, t));

   if (t > 0) {
      const r = 255;
      const g = Math.floor(255 - t * 200);
      const b = Math.floor(255 - t * 230);
      const a = 0.2 + 0.6 * t;
      return `rgba(${r}, ${g}, ${b}, ${a})`;
   } else {
      const nt = -t;
      const r = Math.floor(255 - nt * 230);
      const g = Math.floor(255 - nt * 180);
      const b = 255;
      const a = 0.2 + 0.6 * nt;
      return `rgba(${r}, ${g}, ${b}, ${a})`;
   }
}

/**
 * Project world coordinates + Z height to screen Y with oblique displacement.
 */
function projectY(worldY: number, z: number): number {
   return worldY - z * Z_VISUAL_SCALE * PERSPECTIVE;
}

export function drawWarMapBackground(
   ctx: CanvasRenderingContext2D,
   camera: { x: number; y: number; zoom: number },
   width: number,
   height: number,
   fogCells: FogCell[] = [],
   heatmapCells: HeatmapCell[] = [],
   meshData?: TerrainMeshData,
   mousePos?: { x: number, y: number },
   barakCount: number = 0,
   phase: string = "deployment",
   barracksState?: any[],
   units: any[] = [],
   targetArmada: any = null,
   tankHangarsState: any[] = [],
   airfieldHangarsState: any[] = [],
   helipadsState: any[] = [],
   portShipsState: any[] = [],
   armoryState: any[] = [],
   userBarracksState: any[] = [],
   userTankHangarsState: any[] = [],
   userAirfieldHangarsState: any[] = [],
   userHelipadsState: any[] = [],
   userPortShipsState: any[] = [],
   userArmoryState: any[] = []
) {
   ctx.save();

   // 1. Deep Dark Background
   ctx.fillStyle = "#020617";
   ctx.fillRect(0, 0, width, height);

   ctx.save();
   ctx.translate(camera.x, camera.y);
   ctx.scale(camera.zoom, camera.zoom);

   const worldStartX = -camera.x / camera.zoom;
   const worldStartY = -camera.y / camera.zoom;
   const worldEndX = worldStartX + width / camera.zoom;
   const worldEndY = worldStartY + height / camera.zoom;

   // 2. Tactical Clipping
   ctx.beginPath();
   ctx.rect(-THEATER_LIMIT, -THEATER_LIMIT, THEATER_LIMIT * 2, THEATER_LIMIT * 2);
   ctx.clip();

   const SHORELINE_Y = -6000;

   // 2.1 Battlefield Terrain (Green)
   ctx.fillStyle = "#0a4d0a";
   ctx.fillRect(-THEATER_LIMIT, -THEATER_LIMIT, THEATER_LIMIT * 2, THEATER_LIMIT * 2);

   // // 2.2 Tactical Base Area (Slate - Right Side, LAND ONLY)
   // ctx.fillStyle = "#0f172a";
   // ctx.fillRect(5000, SHORELINE_Y, THEATER_LIMIT - 5000, THEATER_LIMIT - SHORELINE_Y);

   // 2.3 Sea visuals (Sky Blue / Sea Blue) - Drawn BEFORE buildings so they sit on top
   // 2.3.1 Shoreline Sandy Tint (Yellowish Glow)
   ctx.fillStyle = "rgba(253, 224, 71, 0.2)"; // Yellow tint
   ctx.fillRect(-THEATER_LIMIT, SHORELINE_Y, THEATER_LIMIT * 2, 500);

   // 2.3.2 Sea Water (Sky Blue / Sea Blue)
   ctx.fillStyle = "rgba(14, 165, 233, 0.6)";
   ctx.fillRect(-THEATER_LIMIT, -THEATER_LIMIT, THEATER_LIMIT * 2, THEATER_LIMIT + SHORELINE_Y);

   // 2.3.3 Shoreline Border Line (Solid Marker)
   ctx.strokeStyle = "#5d5d5dff";
   ctx.lineWidth = 20 / camera.zoom;
   ctx.beginPath();
   ctx.moveTo(-THEATER_LIMIT, SHORELINE_Y);
   ctx.lineTo(THEATER_LIMIT, SHORELINE_Y);
   ctx.stroke();

   // 3. DRAW ROADS (Jalan dengan garis putus-putus)
   const roads = MapTextureEngine.generateHighways();
   MapTextureEngine.drawRoads(ctx, roads, camera.zoom);

   // 3.1 DRAW TACTICAL HARBOR (PELABUHAN HD) - NEW MOD
   const harborData = portRouter.getTacticalHarbor();
   // AI Harbor (Original Center)
   PelabuhanEngine.drawHarbor(ctx, harborData, camera.zoom, mousePos, portShipsState, units, targetArmada);

   // User Harbor (Mirrored Left -8000)
   ctx.save();
   ctx.translate(-8000, 0); // Shift for mirrored base coast
   PelabuhanEngine.drawHarbor(ctx, harborData, camera.zoom, mousePos ? { x: mousePos.x + 8000, y: mousePos.y } : undefined, userPortShipsState, units, null);
   ctx.restore();

   // 3.2 DRAW TACTICAL AIRBASE (BANDARA & HELIPADS) - NEW MOD
   BandaraEngine.drawAirfield(ctx, 12000, -2350, camera.zoom, mousePos, units, targetArmada, airfieldHangarsState);
   
   // Mirror User Airbase (LEFT)
   BandaraEngine.drawAirfield(ctx, -12000, -2350, camera.zoom, mousePos, units, null, userAirfieldHangarsState);

   // Dynamic Helipad Rendering – Iterates over all helipads in state
   helipadsState.forEach((pad: any, i: number) => {
      if (pad?.pos) {
         HelipadEngine.drawHelipad(ctx, pad.pos.x, pad.pos.y, camera.zoom, mousePos, `Heli Serang ${i + 1}`, units, targetArmada, pad);
      }
   });

   // User Helipads (LEFT)
   userHelipadsState.forEach((pad: any, i: number) => {
      if (pad?.pos) {
         HelipadEngine.drawHelipad(ctx, pad.pos.x, pad.pos.y, camera.zoom, mousePos, `Heli User ${i + 1}`, units, null, pad);
      }
   });

   // 3.2.1 DRAW TACTICAL TANK HANGAR - NEW MOD
   HangarTankEngine.drawTankHangar(ctx, 12000, 3000, camera.zoom, mousePos, units, targetArmada, tankHangarsState);
   
   // Mirror User Hangar (LEFT)
   HangarTankEngine.drawTankHangar(ctx, -12000, 3000, camera.zoom, mousePos, units, null, userTankHangarsState);

   // 3.3 DRAW MILITARY BARRACKS (BARAK) - NEW MOD
   BarakEngine.drawBarracks(ctx, 12000, 850, camera.zoom, 10, barakCount, mousePos, phase, barracksState);
   
   // Mirror User Barracks (LEFT)
   const userBarakCount = userBarracksState.length; 
   BarakEngine.drawBarracks(ctx, -12000, 850, camera.zoom, 10, userBarakCount, mousePos, phase, userBarracksState);

   // 3.4 DRAW ARMORIES (GUDANG SENJATA) - NEW MOD
   ArmoryEngine.drawArmory(ctx, 10400, 8500, camera.zoom, mousePos, units, targetArmada, armoryState);
   
   // Mirror User Armory (LEFT)
   ArmoryEngine.drawArmory(ctx, -10400, 8500, camera.zoom, mousePos, units, null, userArmoryState);

   // 4. POTENTIAL FIELD MESH - REMOVED AS PER USER REQUEST

   // 5. HEATMAP & FOG - REMOVED AS PER USER REQUEST

   // 6. Tactical Boundary (RESTORED)
   ctx.strokeStyle = "rgba(220, 38, 38, 0.8)";
   ctx.lineWidth = 10 / camera.zoom;
   ctx.strokeRect(-THEATER_LIMIT, -THEATER_LIMIT, THEATER_LIMIT * 2, THEATER_LIMIT * 2);

   // 7. Tactical Frontline (X=0) (RESTORED)
   ctx.setLineDash([100 / camera.zoom, 60 / camera.zoom]);
   ctx.strokeStyle = "rgba(239, 68, 68, 0.4)";
   ctx.lineWidth = 4 / camera.zoom;
   ctx.beginPath();
   ctx.moveTo(0, -THEATER_LIMIT);
   ctx.lineTo(0, THEATER_LIMIT);
   ctx.stroke();
   ctx.setLineDash([]);

   ctx.restore();

   ctx.restore();
   ctx.restore();
}
