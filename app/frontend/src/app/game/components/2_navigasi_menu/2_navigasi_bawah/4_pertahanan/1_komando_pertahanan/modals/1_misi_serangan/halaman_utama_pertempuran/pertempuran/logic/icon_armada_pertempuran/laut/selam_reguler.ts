/**
 * selam_reguler.ts
 * Visual Asset Definition for Regular Submarines (Sea)
 * Focus on stealth and compact silhouete.
 */

export const drawKapalSelamReguler = (ctx: CanvasRenderingContext2D, hexColor: string, baseColor: string) => {
   ctx.save();
   ctx.fillStyle = `rgba(${baseColor}, 0.2)`;
   ctx.strokeStyle = hexColor;
   ctx.lineWidth = 1.2;

   // Slim cigar-shaped hull
   ctx.beginPath();
   ctx.ellipse(0, 0, 15, 3.5, 0, 0, Math.PI * 2);
   ctx.fill();
   ctx.stroke();

   // Compact Conning Tower
   ctx.fillStyle = hexColor;
   ctx.fillRect(-2, -5.5, 4, 3);
   
   // Small dive planes
   ctx.beginPath();
   ctx.moveTo(8, -3); ctx.lineTo(8, -5);
   ctx.moveTo(8, 3); ctx.lineTo(8, 5);
   ctx.stroke();

   ctx.restore();
};
