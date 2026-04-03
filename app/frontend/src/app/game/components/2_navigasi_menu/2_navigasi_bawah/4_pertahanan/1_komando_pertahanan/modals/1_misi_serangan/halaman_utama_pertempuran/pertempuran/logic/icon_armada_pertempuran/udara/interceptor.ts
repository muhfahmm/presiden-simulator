/**
 * interceptor.ts
 * Visual Asset Definition for Interceptor Aircraft (Air)
 * High-speed design with elongated nose and swept-back wings.
 */

export const drawInterceptor = (ctx: CanvasRenderingContext2D, hexColor: string, baseColor: string) => {
   ctx.save();
   ctx.fillStyle = `rgba(${baseColor}, 0.2)`;
   ctx.strokeStyle = hexColor;
   ctx.lineWidth = 1.5;

   // Aerodynamic Needle-like Hull
   ctx.beginPath();
   ctx.moveTo(22, 0); // Pointy nose
   ctx.lineTo(8, -4);
   ctx.lineTo(-4, -16); // High-swept wings
   ctx.lineTo(-12, -16);
   ctx.lineTo(-8, -4);
   ctx.lineTo(-16, -4);
   ctx.lineTo(-22, -12); // Tail fins
   ctx.lineTo(-24, -12);
   ctx.lineTo(-20, 0);
   ctx.lineTo(-24, 12);
   ctx.lineTo(-22, 12);
   ctx.lineTo(-16, 4);
   ctx.lineTo(-8, 4);
   ctx.lineTo(-12, 16);
   ctx.lineTo(-4, 16);
   ctx.lineTo(8, 4);
   ctx.closePath();
   ctx.fill();
   ctx.stroke();

   // Dual Thruster Glow
   ctx.fillStyle = "#38bdf8";
   ctx.beginPath(); ctx.arc(-22, -5, 2.5, 0, Math.PI * 2); ctx.fill();
   ctx.beginPath(); ctx.arc(-22, 5, 2.5, 0, Math.PI * 2); ctx.fill();

   // Cockpit Detail
   ctx.fillStyle = hexColor;
   ctx.beginPath();
   ctx.moveTo(10, 0); ctx.lineTo(4, -1.5); ctx.lineTo(1, 0); ctx.lineTo(4, 1.5);
   ctx.fill();

   ctx.restore();
};
