/**
 * apc.ts
 * Visual Asset Definition for Armoured Personnel Carriers (Land)
 */

export const drawAPC = (ctx: CanvasRenderingContext2D, hexColor: string, baseColor: string) => {
   ctx.save();
   ctx.fillStyle = `rgba(${baseColor}, 0.2)`;
   ctx.strokeStyle = hexColor;
   ctx.lineWidth = 1.5;

   // Main Chassis (More rectangular/boxy than a tank)
   ctx.beginPath();
   ctx.moveTo(-18, -10);
   ctx.lineTo(18, -10);
   ctx.lineTo(20, -6);
   ctx.lineTo(20, 6);
   ctx.lineTo(18, 10);
   ctx.lineTo(-18, 10);
   ctx.closePath();
   ctx.fill();
   ctx.stroke();

   // Internal details (Hatches/Grilles)
   ctx.strokeRect(-12, -6, 8, 12);
   
   // Small Turret (Typically 25mm or Machine Gun)
   ctx.fillStyle = hexColor;
   ctx.beginPath();
   ctx.arc(6, 0, 3.5, 0, Math.PI * 2);
   ctx.fill();
   
   // Small Barrel
   ctx.beginPath();
   ctx.moveTo(6, 0);
   ctx.lineTo(15, 0);
   ctx.stroke();

   ctx.restore();
};
