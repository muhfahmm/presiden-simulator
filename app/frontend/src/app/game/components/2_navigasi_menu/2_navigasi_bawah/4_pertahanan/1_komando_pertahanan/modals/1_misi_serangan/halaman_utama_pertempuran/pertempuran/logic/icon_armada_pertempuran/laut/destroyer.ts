/**
 * destroyer.ts
 * Visual Asset Definition for Destroyers (Sea)
 * High-speed combatant with multiple gun turrets and radar masts.
 */

export const drawDestroyer = (ctx: CanvasRenderingContext2D, hexColor: string, baseColor: string) => {
   ctx.save();
   ctx.fillStyle = `rgba(${baseColor}, 0.2)`;
   ctx.strokeStyle = hexColor;
   ctx.lineWidth = 1.5;

   // Sleek Warship Hull
   ctx.beginPath();
   ctx.moveTo(35, 0);
   ctx.lineTo(15, 6);
   ctx.lineTo(-25, 6);
   ctx.lineTo(-28, 0);
   ctx.lineTo(-25, -6);
   ctx.lineTo(15, -6);
   ctx.closePath();
   ctx.fill();
   ctx.stroke();

   // Superstructure (Bridge & Radar)
   ctx.fillStyle = hexColor;
   ctx.fillRect(-8, -4, 18, 8);
   ctx.strokeRect(-8, -4, 18, 8);

   // Front Turret
   ctx.beginPath();
   ctx.arc(20, 0, 3, 0, Math.PI * 2);
   ctx.fill();
   ctx.beginPath();
   ctx.moveTo(20, 0);
   ctx.lineTo(32, 0);
   ctx.stroke();

   // Rear Turret
   ctx.beginPath();
   ctx.arc(-18, 0, 3, 0, Math.PI * 2);
   ctx.fill();
   ctx.beginPath();
   ctx.moveTo(-18, 0);
   ctx.lineTo(-30, 0);
   ctx.stroke();

   // Radar Mast
   ctx.beginPath();
   ctx.moveTo(0, 0);
   ctx.lineTo(0, -10);
   ctx.stroke();

   ctx.restore();
};
