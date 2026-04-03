/**
 * artileri.ts
 * Visual Asset Definition for Heavy Artillery (Land)
 */

export const drawArtileri = (ctx: CanvasRenderingContext2D, hexColor: string, baseColor: string) => {
   ctx.save();
   ctx.fillStyle = `rgba(${baseColor}, 0.2)`;
   ctx.strokeStyle = hexColor;

   // Chassis (Long and heavy)
   ctx.strokeRect(-18, -12, 36, 6);
   ctx.strokeRect(-18, 6, 36, 6);
   
   // Stabilizer units
   ctx.fillRect(-15, -12, 6, 24);
   
   // Main Structure
   ctx.strokeRect(-12, -7, 24, 14);

   // Colossal Barrel (Longer than tank)
   ctx.lineWidth = 4;
   ctx.beginPath();
   ctx.moveTo(0, 0);
   ctx.lineTo(28, 0);
   ctx.stroke();
   
   // Muzzle Brake
   ctx.strokeRect(28, -2, 4, 4);

   // Hydraulic recoil details
   ctx.lineWidth = 1;
   ctx.strokeRect(4, -3, 8, 6);

   ctx.restore();
};
