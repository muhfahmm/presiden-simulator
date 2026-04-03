/**
 * bomber.ts
 * Visual Asset Definition for Strategic Bomber Aircraft (Air)
 * Massive wingspan and high-volume hull for heavy payloads.
 */

export const drawBomber = (ctx: CanvasRenderingContext2D, hexColor: string, baseColor: string) => {
   ctx.save();
   ctx.fillStyle = `rgba(${baseColor}, 0.2)`;
   ctx.strokeStyle = hexColor;
   ctx.lineWidth = 2;

   // Thick, Massive Wingspan
   ctx.beginPath();
   ctx.moveTo(15, 0); // Nose
   ctx.lineTo(8, -4);
   ctx.lineTo(2, -25); // Wide wing tip
   ctx.lineTo(-8, -25);
   ctx.lineTo(-6, -4);
   ctx.lineTo(-20, -4); // Rear body
   ctx.lineTo(-24, -10); // Large Tail
   ctx.lineTo(-26, -10);
   ctx.lineTo(-22, 0);
   ctx.lineTo(-26, 10);
   ctx.lineTo(-24, 10);
   ctx.lineTo(-20, 4);
   ctx.lineTo(-6, 4);
   ctx.lineTo(-8, 25);
   ctx.lineTo(2, 25);
   ctx.lineTo(8, 4);
   ctx.closePath();
   ctx.fill();
   ctx.stroke();

   // Bomb Bay Hatch Detail
   ctx.strokeStyle = `rgba(${baseColor}, 0.4)`;
   ctx.strokeRect(-12, -4, 10, 8);

   // Triple Engine Wash (Each wing)
   ctx.fillStyle = "#38bdf8";
   [ [-12, -12], [-14, -18], [-14, 18], [-12, 12] ].forEach(pos => {
      ctx.beginPath();
      ctx.arc(pos[0], pos[1], 2, 0, Math.PI * 2);
      ctx.fill();
   });

   ctx.restore();
};
