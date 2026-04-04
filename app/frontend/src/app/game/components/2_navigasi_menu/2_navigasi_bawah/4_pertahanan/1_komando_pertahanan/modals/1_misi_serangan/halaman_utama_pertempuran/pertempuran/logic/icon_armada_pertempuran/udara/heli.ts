/**
 * heli.ts
 * Visual Asset Definition for Attack Helicopters (Air)
 * Features a distinct rotor blade circle and thin tail boom.
 */

export const drawHeli = (ctx: CanvasRenderingContext2D, hexColor: string, baseColor: string) => {
   ctx.save();
   ctx.fillStyle = `rgba(${baseColor}, 0.2)`;
   ctx.strokeStyle = hexColor;
   ctx.lineWidth = 1.5;

   // 1. Main Fuselage - Bulbous Cockpit / Body
   ctx.beginPath();
   ctx.moveTo(14, 0);       // Nose
   ctx.bezierCurveTo(12, -8, 0, -8, -6, -4); // Top rounded hood
   ctx.lineTo(-26, -1);     // Top of tail boom
   ctx.lineTo(-28, -6);     // Tail vertical fin top
   ctx.lineTo(-29, 0);      // Tail tip
   ctx.lineTo(-26, 1);      // Bottom of tail boom
   ctx.lineTo(-6, 4);       // Rear body
   ctx.bezierCurveTo(0, 8, 12, 8, 14, 0);    // Bottom rounded belly
   ctx.closePath();
   ctx.fill();
   ctx.stroke();

   // 2. Landing Skids (DISTINCTIVE HELI FEATURE)
   ctx.lineWidth = 1.2;
   ctx.beginPath();
   // Struts
   ctx.moveTo(4, 6); ctx.lineTo(4, 10);
   ctx.moveTo(-2, 5); ctx.lineTo(-2, 10);
   // Horizontal Skid
   ctx.moveTo(10, 10); ctx.lineTo(-8, 10);
   ctx.stroke();

   // 3. Main Rotor (Large tactical circle + blades)
   ctx.lineWidth = 0.8;
   ctx.setLineDash([4, 2]); // Spinning effect
   ctx.beginPath();
   ctx.arc(0, -2, 22, 0, Math.PI * 2);
   ctx.stroke();
   ctx.setLineDash([]); // Reset
   
   // Blades (4-blade cross)
   ctx.lineWidth = 1.2;
   ctx.strokeStyle = `rgba(${baseColor}, 0.8)`;
   ctx.beginPath();
   ctx.moveTo(-20, -2); ctx.lineTo(20, -2);
   ctx.moveTo(0, -22); ctx.lineTo(0, 18);
   ctx.stroke();

   // 4. Tail Rotor
   ctx.beginPath();
   ctx.arc(-26, -2, 5, 0, Math.PI * 2);
   ctx.stroke();

   // 5. Weapon pods (Center-aligned)
   ctx.fillStyle = hexColor;
   ctx.fillRect(-2, -6, 4, 2);
   ctx.fillRect(-2, 4, 4, 2);

   ctx.restore();
};
