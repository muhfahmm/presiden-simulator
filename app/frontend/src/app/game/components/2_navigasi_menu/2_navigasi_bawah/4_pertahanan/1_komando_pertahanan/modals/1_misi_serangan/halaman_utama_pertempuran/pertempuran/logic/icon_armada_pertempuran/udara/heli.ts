/**
 * heli.ts
 * Visual Asset Definition for Attack Helicopters (Air)
 * Features a distinct rotor blade circle and thin tail boom.
 */

export const drawHeli = (ctx: CanvasRenderingContext2D, hexColor: string, baseColor: string) => {
   ctx.save();
   ctx.fillStyle = `rgba(${baseColor}, 0.2)`;
   ctx.strokeStyle = hexColor;
   ctx.lineWidth = 1.2;

   // Main Fuselage (Cocking forward)
   ctx.beginPath();
   ctx.moveTo(12, 0);
   ctx.lineTo(4, -4);
   ctx.lineTo(-6, -4);
   ctx.lineTo(-24, -1); // Tail boom
   ctx.lineTo(-24, 1);
   ctx.lineTo(-6, 4);
   ctx.lineTo(4, 4);
   ctx.closePath();
   ctx.fill();
   ctx.stroke();

   // Main Rotor Blade (Tactical cross/circle)
   ctx.lineWidth = 1;
   ctx.strokeStyle = `rgba(${baseColor}, 0.6)`;
   ctx.beginPath();
   ctx.arc(0, 0, 18, 0, Math.PI * 2);
   ctx.stroke();
   
   // Blades (X shape)
   ctx.beginPath();
   ctx.moveTo(-16, -16); ctx.lineTo(16, 16);
   ctx.moveTo(-16, 16); ctx.lineTo(16, -16);
   ctx.stroke();

   // Weapon Pylons (Side stubs)
   ctx.fillStyle = hexColor;
   ctx.fillRect(-2, -6, 5, 2);
   ctx.fillRect(-2, 4, 5, 2);

   // Tail Rotor
   ctx.beginPath();
   ctx.arc(-24, 0, 4, 0, Math.PI * 2);
   ctx.stroke();

   ctx.restore();
};
