/**
 * roket.ts
 * Visual Asset Definition for MLRS Rocket Systems (Land)
 */

export const drawRoket = (ctx: CanvasRenderingContext2D, hexColor: string, baseColor: string) => {
   ctx.save();
   ctx.fillStyle = `rgba(${baseColor}, 0.2)`;
   ctx.strokeStyle = hexColor;

   // Main Chassis
   ctx.strokeRect(-18, -11, 36, 6);
   ctx.strokeRect(-18, 5, 36, 6);
   
   // Rocket Launcher Platform (Rectangular block with grid)
   ctx.strokeRect(-14, -8, 20, 16);
   ctx.fillRect(-14, -8, 20, 16);

   // MLRS Grid Visual (3x2 or 4x2 tubes)
   ctx.strokeStyle = hexColor;
   const padding = 2;
   const tubeW = 4;
   const tubeH = 4;
   
   for (let x = 0; x < 2; x++) {
      for (let y = 0; y < 2; y++) {
         ctx.strokeRect(
            -10 + x * (tubeW + padding), 
            -5 + y * (tubeH + padding), 
            tubeW, tubeH
         );
      }
   }

   // Launcher Arm (Small hydraulics on side)
   ctx.lineWidth = 1;
   ctx.moveTo(-14, -4); ctx.lineTo(-18, -4); ctx.stroke();
   ctx.moveTo(-14, 4); ctx.lineTo(-18, 4); ctx.stroke();
   
   ctx.restore();
};
