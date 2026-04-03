/**
 * sam.ts
 * Visual Asset Definition for Surface-to-Air Missile Systems (Land)
 */

export const drawSAM = (ctx: CanvasRenderingContext2D, hexColor: string, baseColor: string) => {
   ctx.save();
   ctx.fillStyle = `rgba(${baseColor}, 0.2)`;
   ctx.strokeStyle = hexColor;

   // Chassis
   ctx.strokeRect(-18, -10, 36, 6);
   ctx.strokeRect(-18, 4, 36, 6);
   
   // Central Radar Dish (Circle detail)
   ctx.beginPath();
   ctx.arc(-8, 0, 4, 0, Math.PI * 2);
   ctx.stroke();

   // Missile Tubes (4 large tubes, forward-facing angles)
   ctx.fillStyle = hexColor;
   const missileLength = 16;
   const missileWidth = 2.5;
   
   // Missile 1-4
   [ -6, -2, 2, 6 ].forEach(y => {
      ctx.fillRect(0, y - missileWidth/2, missileLength, missileWidth);
      ctx.strokeRect(0, y - missileWidth/2, missileLength, missileWidth);
      
      // Pointy tip (Tactical)
      ctx.beginPath();
      ctx.moveTo(missileLength, y - missileWidth/2);
      ctx.lineTo(missileLength + 3, y);
      ctx.lineTo(missileLength, y + missileWidth/2);
      ctx.fill();
   });
   
   ctx.restore();
};
