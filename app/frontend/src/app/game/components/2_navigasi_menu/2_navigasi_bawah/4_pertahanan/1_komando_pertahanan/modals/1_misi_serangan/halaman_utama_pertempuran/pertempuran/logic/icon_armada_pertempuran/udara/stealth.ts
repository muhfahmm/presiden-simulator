/**
 * stealth.ts
 * Visual Asset Definition for Stealth Fighters (Air)
 * Sharp, diamond-cut geometry for low radar cross-section.
 */

export const drawStealth = (ctx: CanvasRenderingContext2D, hexColor: string, baseColor: string) => {
   ctx.save();
   ctx.fillStyle = `rgba(${baseColor}, 0.25)`;
   ctx.strokeStyle = hexColor;
   ctx.lineWidth = 1.5;

   // Angular, Diamond-shaped hull
   ctx.beginPath();
   ctx.moveTo(18, 0);
   ctx.lineTo(4, -6);
   ctx.lineTo(-12, -18);
   ctx.lineTo(-18, -8);
   ctx.lineTo(-12, 0);
   ctx.lineTo(-18, 8);
   ctx.lineTo(-12, 18);
   ctx.lineTo(4, 6);
   ctx.closePath();
   ctx.fill();
   ctx.stroke();

   // Internal panel lines
   ctx.strokeStyle = `rgba(${baseColor}, 0.4)`;
   ctx.beginPath();
   ctx.moveTo(4, -6); ctx.lineTo(-8, 0); ctx.lineTo(4, 6);
   ctx.stroke();

   // Cockpit Detail
   ctx.fillStyle = hexColor;
   ctx.beginPath();
   ctx.moveTo(8, 0); ctx.lineTo(2, -2); ctx.lineTo(-2, 0); ctx.lineTo(2, 2);
   ctx.fill();

   ctx.restore();
};
