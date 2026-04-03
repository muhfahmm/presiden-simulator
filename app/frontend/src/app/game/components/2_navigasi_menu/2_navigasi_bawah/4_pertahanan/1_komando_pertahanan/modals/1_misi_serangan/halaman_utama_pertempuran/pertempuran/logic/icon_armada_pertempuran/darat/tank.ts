/**
 * tank.ts
 * Visual Asset Definition for Armored Units (Land)
 */

export const drawTank = (ctx: CanvasRenderingContext2D, hexColor: string, baseColor: string) => {
   ctx.save();
   ctx.fillStyle = `rgba(${baseColor}, 0.2)`;
   ctx.strokeStyle = hexColor;

   // Main Body & Tracks
   ctx.strokeRect(-16, -11, 32, 5);
   ctx.strokeRect(-16, 6, 32, 5);
   ctx.fillRect(-12, -7, 24, 14);
   ctx.strokeRect(-12, -7, 24, 14);

   // Turret & Barrel
   ctx.fillStyle = hexColor;
   ctx.beginPath();
   ctx.arc(0, 0, 5, 0, Math.PI * 2);
   ctx.fill();
   
   ctx.beginPath();
   ctx.moveTo(0, 0);
   ctx.lineTo(20, 0);
   ctx.stroke();
   
   ctx.restore();
};
