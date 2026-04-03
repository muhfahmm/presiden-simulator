/**
 * korvet.ts
 * Visual Asset Definition for Corvettes (Sea)
 * Compact warship with high speed and agility.
 */

export const drawKorvet = (ctx: CanvasRenderingContext2D, hexColor: string, baseColor: string) => {
   ctx.save();
   ctx.fillStyle = `rgba(${baseColor}, 0.2)`;
   ctx.strokeStyle = hexColor;
   ctx.lineWidth = 1.2;

   // Compact Warship Hull
   ctx.beginPath();
   ctx.moveTo(25, 0); 
   ctx.lineTo(10, 5); 
   ctx.lineTo(-20, 5); 
   ctx.lineTo(-20, -5); 
   ctx.lineTo(10, -5);
   ctx.closePath(); 
   ctx.fill(); 
   ctx.stroke();

   // Superstructure (Deck structure)
   ctx.fillStyle = hexColor;
   ctx.fillRect(-8, -3, 16, 6);
   ctx.strokeRect(-8, -3, 16, 6);

   // Single Front Turret
   ctx.beginPath(); 
   ctx.arc(8, 0, 2.5, 0, Math.PI * 2); 
   ctx.fill();
   ctx.beginPath(); 
   ctx.moveTo(8, 0); 
   ctx.lineTo(18, 0); 
   ctx.stroke();

   ctx.restore();
};
