// Tactical Map Renderer - Landlocked (No Sea)
export function drawWarMapBackground(
   ctx: CanvasRenderingContext2D,
   camera: { x: number; y: number; zoom: number },
   width: number,
   height: number
) {
   ctx.save();

   // 1. Dark Slate Background (Seamless base)
   ctx.fillStyle = "#020617";
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

   // Base Land Color (Premium Dark Slate)
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

   ctx.restore();


   ctx.restore();
}
