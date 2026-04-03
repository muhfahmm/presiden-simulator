/**
 * uav.ts
 * Visual Asset Definition for UAV / Reconnaissance Aircraft (Air)
 * Long-wing glider-like profile for persistent surveillance.
 */

export const drawUAV = (ctx: CanvasRenderingContext2D, hexColor: string, baseColor: string) => {
   ctx.save();
   ctx.fillStyle = `rgba(${baseColor}, 0.2)`;
   ctx.strokeStyle = hexColor;
   ctx.lineWidth = 1;

   // Thin, Slender Wingspan
   ctx.beginPath();
   ctx.moveTo(10, 0); // Nose
   ctx.lineTo(2, -15); // Long wing tip
   ctx.lineTo(-4, -15);
   ctx.lineTo(-2, -2);
   ctx.lineTo(-12, -2); // Rear boom
   ctx.lineTo(-15, -6); // V-tail
   ctx.lineTo(-17, -6);
   ctx.lineTo(-14, 0);
   ctx.lineTo(-17, 6);
   ctx.lineTo(-15, 6);
   ctx.lineTo(-12, 2);
   ctx.lineTo(-2, 2);
   ctx.lineTo(-4, 15);
   ctx.lineTo(2, 15);
   ctx.lineTo(10, 0);
   ctx.closePath();
   ctx.fill();
   ctx.stroke();

   // Sensor Pod (Fuselage bottom)
   ctx.beginPath();
   ctx.arc(4, 0, 1.5, 0, Math.PI * 2);
   ctx.fill();

   // Propeller (Rear mounted pusher)
   ctx.beginPath();
   ctx.moveTo(-14, -4); ctx.lineTo(-14, 4);
   ctx.stroke();

   ctx.restore();
};
