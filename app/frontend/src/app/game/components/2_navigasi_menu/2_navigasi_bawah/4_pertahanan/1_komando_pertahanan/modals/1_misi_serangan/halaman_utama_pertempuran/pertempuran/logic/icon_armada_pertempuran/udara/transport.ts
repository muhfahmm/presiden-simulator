/**
 * transport.ts
 * Visual Asset Definition for Strategic Transport Aircraft (Air)
 * Large, wide-body profile for tactical logistics.
 */

export const drawTransport = (ctx: CanvasRenderingContext2D, hexColor: string, baseColor: string) => {
   ctx.save();
   ctx.fillStyle = `rgba(${baseColor}, 0.2)`;
   ctx.strokeStyle = hexColor;
   ctx.lineWidth = 2;

   // Fat, Massive Fuselage & Wings
   ctx.beginPath();
   ctx.moveTo(25, 0); // Blunt nose
   ctx.lineTo(15, -6);
   ctx.lineTo(5, -30); // Very wide wing tip
   ctx.lineTo(-5, -30);
   ctx.lineTo(-2, -6);
   ctx.lineTo(-24, -6); // Boxy rear
   ctx.lineTo(-30, -12); // High Tail
   ctx.lineTo(-32, -12);
   ctx.lineTo(-28, 0);
   ctx.lineTo(-32, 12);
   ctx.lineTo(-30, 12);
   ctx.lineTo(-24, 6);
   ctx.lineTo(-2, 6);
   ctx.lineTo(-5, 30);
   ctx.lineTo(5, 30);
   ctx.lineTo(15, 6);
   ctx.lineTo(25, 0);
   ctx.closePath();
   ctx.fill();
   ctx.stroke();

   // Rear Ramp Detail
   ctx.strokeStyle = `rgba(${baseColor}, 0.4)`;
   ctx.strokeRect(-22, -4, 6, 8);

   // Quad Engine Wash
   ctx.fillStyle = "#38bdf8";
   [ [-15, -12], [-18, -20], [-18, 20], [-15, 12] ].forEach(pos => {
      ctx.beginPath();
      ctx.arc(pos[0], pos[1], 2.5, 0, Math.PI * 2);
      ctx.fill();
   });

   ctx.restore();
};
