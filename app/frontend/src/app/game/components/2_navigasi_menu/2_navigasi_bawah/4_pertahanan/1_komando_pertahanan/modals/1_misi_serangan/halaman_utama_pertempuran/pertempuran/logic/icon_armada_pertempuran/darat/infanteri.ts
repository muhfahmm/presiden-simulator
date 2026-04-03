/**
 * infanteri.ts
 * Visual Asset Definition for Infantry Units (Land)
 */

export const INFANTERI_SVG_PATH = "M-10,-5 C-10,-10 10,-10 10,-5 L10,5 C10,10 -10,10 -10,5 Z M-4,0 A4,4 0 1,1 4,0 A4,4 0 1,1 -4,0";

export const drawInfanteri = (ctx: CanvasRenderingContext2D, hexColor: string, baseColor: string) => {
   ctx.save();
   ctx.fillStyle = `rgba(${baseColor}, 0.25)`;
   ctx.strokeStyle = hexColor;
   ctx.lineWidth = 1.5;

   ctx.beginPath();
   ctx.ellipse(0, 0, 11, 6, 0, 0, Math.PI * 2);
   ctx.fill();
   ctx.stroke();

   ctx.fillStyle = hexColor;
   ctx.shadowBlur = 8;
   ctx.shadowColor = hexColor;
   ctx.beginPath();
   ctx.arc(0, 0, 4.2, 0, Math.PI * 2);
   ctx.fill();
   ctx.shadowBlur = 0;

   ctx.beginPath();
   ctx.moveTo(8, 0);
   ctx.lineTo(20, 0);
   ctx.lineWidth = 2.5;
   ctx.lineCap = "round";
   ctx.stroke();

   ctx.fillStyle = `rgba(${baseColor}, 0.5)`;
   ctx.fillRect(-8, -3, 3, 6);
   ctx.restore();
};
