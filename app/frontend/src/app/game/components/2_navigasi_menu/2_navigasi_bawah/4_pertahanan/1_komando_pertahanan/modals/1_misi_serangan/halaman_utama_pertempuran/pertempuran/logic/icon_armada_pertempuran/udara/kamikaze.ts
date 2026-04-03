/**
 * kamikaze.ts
 * Visual Asset Definition for Kamikaze Drones (Air)
 * Small, expendable delta-wing profile with high maneuverability.
 */

export const drawKamikaze = (ctx: CanvasRenderingContext2D, hexColor: string, baseColor: string) => {
   ctx.save();
   ctx.fillStyle = hexColor; // More solid color for importance
   ctx.strokeStyle = hexColor;
   ctx.lineWidth = 1;

   // Simple Delta Wing (Triangle)
   ctx.beginPath();
   ctx.moveTo(8, 0); // Nose
   ctx.lineTo(-6, -10); // Left wing
   ctx.lineTo(-4, 0); // Rear notch
   ctx.lineTo(-6, 10); // Right wing
   ctx.closePath();
   ctx.fill();
   ctx.stroke();

   // Red "Armed" Indicator (Tactical)
   ctx.fillStyle = "#ef4444";
   ctx.beginPath();
   ctx.arc(0, 0, 2, 0, Math.PI * 2);
   ctx.fill();

   ctx.restore();
};
