/**
 * selam_nuklir.ts
 * Visual Asset Definition for Nuclear Submarines (Sea)
 * Features a massive hull and Vertical Launch System (VLS) deck.
 */

export const drawKapalSelamNuklir = (ctx: CanvasRenderingContext2D, hexColor: string, baseColor: string) => {
   ctx.save();
   ctx.fillStyle = `rgba(${baseColor}, 0.25)`;
   ctx.strokeStyle = hexColor;
   ctx.lineWidth = 2;

   // Large, Powerful Hull
   ctx.beginPath();
   ctx.ellipse(0, 0, 28, 6.5, 0, 0, Math.PI * 2);
   ctx.fill();
   ctx.stroke();

   // Large Conning Tower (Bridge)
   ctx.fillStyle = hexColor;
   ctx.fillRect(-6, -10, 10, 6);
   ctx.strokeRect(-6, -10, 10, 6);
   
   // VLS Deck Markings (Missile Hatches on rear)
   ctx.strokeStyle = `rgba(${baseColor}, 0.8)`;
   ctx.lineWidth = 1;
   for (let x = 0; x < 3; x++) {
      ctx.strokeRect(-18 + x * 4, -3, 2.5, 6);
   }

   // Large Dive Planes
   ctx.lineWidth = 2;
   ctx.beginPath();
   ctx.moveTo(15, -6); ctx.lineTo(15, -10);
   ctx.moveTo(15, 6); ctx.lineTo(15, 10);
   ctx.stroke();

   ctx.restore();
};
