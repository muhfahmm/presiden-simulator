/**
 * tactical.ts
 * Visual Asset Definition for Tactical Vehicles (Land)
 * Smaller, faster, and more maneuverable appearance.
 */

export const drawTactical = (ctx: CanvasRenderingContext2D, hexColor: string, baseColor: string) => {
   ctx.save();
   ctx.fillStyle = `rgba(${baseColor}, 0.2)`;
   ctx.strokeStyle = hexColor;
   ctx.lineWidth = 1.2;

   // Main Chassis (Sleeker, tapered front)
   ctx.beginPath();
   ctx.moveTo(-12, -8);
   ctx.lineTo(8, -8);
   ctx.lineTo(12, -4);
   ctx.lineTo(12, 4);
   ctx.lineTo(8, 8);
   ctx.lineTo(-12, 8);
   ctx.closePath();
   ctx.fill();
   ctx.stroke();

   // Exposed Wheels (4 corners)
   ctx.fillStyle = "rgba(24, 24, 27, 0.9)";
   [ [-10, -10], [6, -10], [-10, 8], [6, 8] ].forEach(pos => {
      ctx.fillRect(pos[0], pos[1], 4, 3);
      ctx.strokeRect(pos[0], pos[1], 4, 3);
   });

   // Roof Detail (Hatch or Machine Gun mount)
   ctx.strokeRect(-4, -4, 8, 8);
   
   // Small directional antenna/mast
   ctx.beginPath();
   ctx.moveTo(-8, 0);
   ctx.lineTo(-10, -4);
   ctx.stroke();

   ctx.restore();
};
