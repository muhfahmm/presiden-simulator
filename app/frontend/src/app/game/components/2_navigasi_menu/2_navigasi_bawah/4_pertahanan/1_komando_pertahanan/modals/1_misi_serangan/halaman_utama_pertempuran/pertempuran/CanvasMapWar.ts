import { MapTextureEngine } from "./logic/mapTextture/MapTextureGenerator";

// Simple deterministic pseudo-random function for WASM Chunk mocking
function seedRandom(x: number, y: number) {
   const sin = Math.sin(x * 12.9898 + y * 78.233) * 43758.5453123;
   return sin - Math.floor(sin);
}

export function drawWarMapBackground(
   ctx: CanvasRenderingContext2D,
   camera: { x: number; y: number; zoom: number },
   width: number,
   height: number
) {
   ctx.save();

   // 1. Black Background (The Void)
   ctx.fillStyle = "#000000";
   ctx.fillRect(0, 0, width, height);

   ctx.save();
   ctx.translate(camera.x, camera.y);
   ctx.scale(camera.zoom, camera.zoom);

   const worldStartX = -camera.x / camera.zoom;
   const worldStartY = -camera.y / camera.zoom;
   const worldEndX = worldStartX + width / camera.zoom;
   const worldEndY = worldStartY + height / camera.zoom;

   const THEATER_LIMIT = 15000;

   // 2. Tactical Clipping & Background
   ctx.beginPath();
   ctx.rect(-THEATER_LIMIT, -THEATER_LIMIT, THEATER_LIMIT * 2, THEATER_LIMIT * 2);
   ctx.clip(); // Everything outside this box will be black (The Void)

   // Draw the tactical gradient inside the box
   ctx.fillStyle = "#020617";
   ctx.fillRect(-THEATER_LIMIT, -THEATER_LIMIT, THEATER_LIMIT * 2, THEATER_LIMIT * 2);

   // 3. Structured Tactical Grid & HUD Labels
   const gridSize = 500;
   const subGridSize = 100;

   // Sub-grid (Faint)
   ctx.strokeStyle = "rgba(16, 185, 129, 0.03)";
   ctx.lineWidth = 1 / camera.zoom;
   for (let x = Math.floor(worldStartX / subGridSize) * subGridSize; x <= worldEndX; x += subGridSize) {
      ctx.beginPath(); ctx.moveTo(x, worldStartY); ctx.lineTo(x, worldEndY); ctx.stroke();
   }
   for (let y = Math.floor(worldStartY / subGridSize) * subGridSize; y <= worldEndY; y += subGridSize) {
      ctx.beginPath(); ctx.moveTo(worldStartX, y); ctx.lineTo(worldEndX, y); ctx.stroke();
   }

   // Main Grid with Coordinate Labels
   ctx.strokeStyle = "rgba(16, 185, 129, 0.1)";
   ctx.fillStyle = "rgba(16, 185, 129, 0.4)";
   ctx.font = `${12 / camera.zoom}px 'Inter', monospace`;

   for (let x = Math.floor(worldStartX / gridSize) * gridSize; x <= worldEndX; x += gridSize) {
      ctx.beginPath(); ctx.moveTo(x, worldStartY); ctx.lineTo(x, worldEndY); ctx.stroke();
      ctx.fillText(x.toString(), x + 5 / camera.zoom, worldStartY + 40 / camera.zoom);
   }
   for (let y = Math.floor(worldStartY / gridSize) * gridSize; y <= worldEndY; y += gridSize) {
      ctx.beginPath(); ctx.moveTo(worldStartX, y); ctx.lineTo(worldEndX, y); ctx.stroke();
      ctx.fillText(y.toString(), worldStartX + 95 / camera.zoom, y - 5 / camera.zoom);
   }

   // 3. (Map Geometry Placeholder - Mountains removed by user request)

   ctx.restore();

   // 4. Post-Process Overlay (Vignette & Scanlines)
   // Vignette
   const vignette = ctx.createRadialGradient(width / 2, height / 2, width * 0.2, width / 2, height / 2, width * 0.7);
   vignette.addColorStop(0, "rgba(0,0,0,0)");
   vignette.addColorStop(1, "rgba(0,0,0,0.6)");
   ctx.fillStyle = vignette;
   ctx.fillRect(0, 0, width, height);

   // Scanlines (Semi-transparent pattern)
   ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
   for (let i = 0; i < height; i += 4) {
      ctx.fillRect(0, i, width, 1);
   }

   ctx.restore();
}
