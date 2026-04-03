// Tactical Map Renderer with Coastline/Sea indicators
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

   // 2. Tactical Clipping
   ctx.beginPath();
   ctx.rect(-THEATER_LIMIT, -THEATER_LIMIT, THEATER_LIMIT * 2, THEATER_LIMIT * 2);
   ctx.clip();

   // Base Land Color (Dark Slate)
   ctx.fillStyle = "#020617";
   ctx.fillRect(-THEATER_LIMIT, -THEATER_LIMIT, THEATER_LIMIT * 2, THEATER_LIMIT * 2);

   // 2.2 Tactical Boundary (Red Area Lines)
   ctx.strokeStyle = "rgba(220, 38, 38, 0.8)"; // Red-600
   ctx.lineWidth = 5 / camera.zoom;
   ctx.strokeRect(-THEATER_LIMIT, -THEATER_LIMIT, THEATER_LIMIT * 2, THEATER_LIMIT * 2);

   // 2.3 Tactical Frontline (X=0)
   ctx.setLineDash([50 / camera.zoom, 30 / camera.zoom]);
   ctx.strokeStyle = "rgba(239, 68, 68, 0.5)"; // Red-500 semi-transparent
   ctx.lineWidth = 2 / camera.zoom;
   ctx.beginPath();
   ctx.moveTo(0, -THEATER_LIMIT);
   ctx.lineTo(0, THEATER_LIMIT);
   ctx.stroke();
   ctx.setLineDash([]); // Reset dash for subsequent drawing

   // --- SEA VISUALS (DENGAN LAUT) ---
   // Draw water area at the very top (beyond enemy lines)
   const seaLevel = -6000; // Above enemy deployment zone
   ctx.fillStyle = "#075985"; // Ocean Blue
   ctx.fillRect(-THEATER_LIMIT, -THEATER_LIMIT, THEATER_LIMIT * 2, THEATER_LIMIT - (Math.abs(seaLevel)));
   
   // Coastline Shore/Wave effect
   ctx.strokeStyle = "rgba(56, 189, 248, 0.3)";
   ctx.lineWidth = 20 / camera.zoom;
   ctx.beginPath();
   ctx.moveTo(-THEATER_LIMIT, seaLevel);
   ctx.lineTo(THEATER_LIMIT, seaLevel);
   ctx.stroke();

   // 3. Structured Tactical Grid
   const gridSize = 500;
   const subGridSize = 100;

   // Sub-grid
   ctx.strokeStyle = "rgba(16, 185, 129, 0.03)";
   ctx.lineWidth = 1 / camera.zoom;
   for (let x = Math.floor(worldStartX / subGridSize) * subGridSize; x <= worldEndX; x += subGridSize) {
      ctx.beginPath(); ctx.moveTo(x, worldStartY); ctx.lineTo(x, worldEndY); ctx.stroke();
   }
   for (let y = Math.floor(worldStartY / subGridSize) * subGridSize; y <= worldEndY; y += subGridSize) {
      ctx.beginPath(); ctx.moveTo(worldStartX, y); ctx.lineTo(worldEndX, y); ctx.stroke();
   }

   // Main Grid with Labels
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

   ctx.restore();

   // 4. Post-Process Overlay
   const vignette = ctx.createRadialGradient(width / 2, height / 2, width * 0.2, width / 2, height / 2, width * 0.7);
   vignette.addColorStop(0, "rgba(0,0,0,0)");
   vignette.addColorStop(1, "rgba(0,0,0,0.6)");
   ctx.fillStyle = vignette;
   ctx.fillRect(0, 0, width, height);

   ctx.restore();
}
