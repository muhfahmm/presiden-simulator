import { FogCell, HeatmapCell, TerrainMeshData } from "../logic/polyglot/ts/polyglot-router";
import { BandaraEngine } from "../logic/mapTexture/gambar-tempat-armada/udara/bandara/bandara";
import { HelipadEngine } from "../logic/mapTexture/gambar-tempat-armada/udara/helipad/index";
import { HangarTankEngine } from "../logic/mapTexture/gambar-tempat-armada/darat/hangar_tank/index";
import { BarakEngine } from "../logic/mapTexture/gambar-tempat-armada/darat/barak/barak";
import { MapTextureEngine } from "../logic/mapTexture/MapTextureGenerator";

// ============================================================
// Tactical Map Renderer - 3D Potential Field Mesh (LANDLOCKED)
// Same mesh tech as Sea version but without maritime zone.
// ============================================================

const THEATER_LIMIT = 15000;
const Z_VISUAL_SCALE = 3.0;
const PERSPECTIVE = 0.35;

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
   targetArmada: any = null
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

   ctx.fillStyle = "#0a4d0a";
   ctx.fillRect(-THEATER_LIMIT, -THEATER_LIMIT, THEATER_LIMIT * 2, THEATER_LIMIT * 2);

   // 3. DRAW ROADS
   const roads = MapTextureEngine.generateHighwaysLandlocked();
   MapTextureEngine.drawRoads(ctx, roads, camera.zoom);

   // 3.2 DRAW TACTICAL AIRBASE (BANDARA & HELIPADS) - NEW MOD
   BandaraEngine.drawAirfield(ctx, 12000, -2350, camera.zoom, mousePos, units, targetArmada);

   // 4-Pad Helibase Complex (Flanking the terminal)
   const baseHeliX = 12000;
   const baseHeliY = -550;
   HelipadEngine.drawHelipad(ctx, baseHeliX - 1100, baseHeliY, camera.zoom, mousePos, "Heli Serang 1", units, targetArmada);
   HelipadEngine.drawHelipad(ctx, baseHeliX - 1500, baseHeliY, camera.zoom, mousePos, "Heli Serang 2", units, targetArmada);
   HelipadEngine.drawHelipad(ctx, baseHeliX + 1100, baseHeliY, camera.zoom, mousePos, "Heli Serang 3", units, targetArmada);
   HelipadEngine.drawHelipad(ctx, baseHeliX + 1500, baseHeliY, camera.zoom, mousePos, "Heli Serang 4", units, targetArmada);

   // 3.2.1 DRAW TACTICAL TANK HANGAR - NEW MOD
   HangarTankEngine.drawTankHangar(ctx, 12000, 650, camera.zoom, mousePos, units, targetArmada);

   // 3.3 DRAW MILITARY BARRACKS (BARAK) - NEW MOD
   BarakEngine.drawBarracks(ctx, 12000, 1850, camera.zoom, 10, barakCount, mousePos, phase, barracksState);

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
}
