/**
 * induk.ts
 * Visual Asset Definition for Aircraft Carriers (Sea)
 * Features a massive flat deck and an offset island structure.
 */

export const drawKapalInduk = (ctx: CanvasRenderingContext2D, hexColor: string, baseColor: string) => {
   ctx.save();
   ctx.fillStyle = `rgba(${baseColor}, 0.2)`;
   ctx.strokeStyle = hexColor;
   ctx.lineWidth = 2;

   // Massive Rectangular Flight Deck
   ctx.beginPath();
   ctx.moveTo(40, -15);
   ctx.lineTo(-30, -15);
   ctx.lineTo(-35, -10);
   ctx.lineTo(-35, 10);
   ctx.lineTo(-30, 15);
   ctx.lineTo(40, 15);
   ctx.closePath();
   ctx.fill();
   ctx.stroke();

   // Deck Markings (Runway lines)
   ctx.strokeStyle = `rgba(${baseColor}, 0.5)`;
   ctx.setLineDash([5, 5]);
   ctx.beginPath();
   ctx.moveTo(35, 0);
   ctx.lineTo(-25, 0);
   ctx.stroke();
   ctx.setLineDash([]);

   // Offset Island (Tower) - Typically on the Starboard (Right) side
   ctx.fillStyle = hexColor;
   ctx.fillRect(0, -18, 12, 6);
   ctx.strokeRect(0, -18, 12, 6);
   
   // Radar Mast on Island
   ctx.beginPath();
   ctx.moveTo(6, -18);
   ctx.lineTo(6, -24);
   ctx.stroke();

   ctx.restore();
};
