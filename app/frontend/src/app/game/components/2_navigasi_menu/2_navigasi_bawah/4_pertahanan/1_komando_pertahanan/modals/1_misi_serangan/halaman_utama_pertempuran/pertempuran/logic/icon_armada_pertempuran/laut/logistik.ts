/**
 * logistik.ts
 * Visual Asset Definition for Logistics Ships (Sea)
 * Large-capacity transport vessel for tactical replenishment.
 */

export const drawKapalLogistik = (ctx: CanvasRenderingContext2D, hexColor: string, baseColor: string) => {
   ctx.save();
   ctx.fillStyle = `rgba(${baseColor}, 0.2)`;
   ctx.strokeStyle = hexColor;
   ctx.lineWidth = 1.5;

   // Large, Wide Hull (Bulkier than combatants)
   ctx.beginPath();
   ctx.moveTo(30, -10);
   ctx.lineTo(35, -5);
   ctx.lineTo(35, 5);
   ctx.lineTo(30, 10);
   ctx.lineTo(-30, 10);
   ctx.lineTo(-30, -10);
   ctx.closePath();
   ctx.fill();
   ctx.stroke();

   // Superstructure (Bridge at the rear)
   ctx.fillStyle = hexColor;
   ctx.fillRect(-20, -7, 12, 14);
   ctx.strokeRect(-20, -7, 12, 14);

   // Cargo Deck (Visual representation of containers or equipment)
   ctx.strokeStyle = `rgba(${baseColor}, 0.6)`;
   ctx.beginPath();
   ctx.moveTo(5, -6); ctx.lineTo(5, 6);
   ctx.moveTo(15, -6); ctx.lineTo(15, 6);
   ctx.moveTo(25, -6); ctx.lineTo(25, 6);
   ctx.stroke();

   // Crane detail (Simplified tactical icon)
   ctx.beginPath();
   ctx.moveTo(-4, 0);
   ctx.lineTo(4, 0);
   ctx.stroke();

   ctx.restore();
};
