/**
 * ranjau.ts
 * Visual Asset Definition for Minelayers (Sea)
 * Dedicated vessel for deployment of naval mines.
 */

export const drawKapalRanjau = (ctx: CanvasRenderingContext2D, hexColor: string, baseColor: string) => {
   ctx.save();
   ctx.fillStyle = `rgba(${baseColor}, 0.2)`;
   ctx.strokeStyle = hexColor;
   ctx.lineWidth = 1.2;

   // Boxier hull, wider at the back for mine deployment
   ctx.beginPath();
   ctx.moveTo(20, 0);
   ctx.lineTo(10, 6);
   ctx.lineTo(-20, 8); // Wider rear
   ctx.lineTo(-20, -8);
   ctx.lineTo(10, -6);
   ctx.closePath();
   ctx.fill();
   ctx.stroke();

   // Superstructure (Bridge)
   ctx.fillStyle = hexColor;
   ctx.fillRect(0, -4, 10, 8);

   // Mine Racks (Visual indicators on deck)
   ctx.strokeStyle = `rgba(${baseColor}, 0.8)`;
   ctx.beginPath();
   ctx.moveTo(-4, -6); ctx.lineTo(-18, -6);
   ctx.moveTo(-4, 6); ctx.lineTo(-18, 6);
   ctx.stroke();

   // Small crane for mine handling
   ctx.beginPath();
   ctx.moveTo(-10, 0);
   ctx.lineTo(-18, 0);
   ctx.stroke();

   ctx.restore();
};
