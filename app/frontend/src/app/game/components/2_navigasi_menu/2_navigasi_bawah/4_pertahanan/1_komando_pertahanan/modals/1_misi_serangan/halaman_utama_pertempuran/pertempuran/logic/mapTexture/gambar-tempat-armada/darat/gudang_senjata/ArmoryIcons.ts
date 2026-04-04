
/**
 * ArmoryIcons.ts - Tactical SVG-style drawings for specialized ground weapons.
 */

export const drawArtilleryIcon = (ctx: CanvasRenderingContext2D, color: string, base: string) => {
   ctx.save();
   // 1. CARRIAGE (Base)
   ctx.fillStyle = `rgba(${base}, 0.2)`;
   ctx.fillRect(-8, -4, 16, 8);
   ctx.strokeStyle = color;
   ctx.lineWidth = 1.5;
   ctx.strokeRect(-8, -4, 16, 8);

   // 2. MAIN GUN (Long Barrel)
   ctx.fillStyle = color;
   ctx.fillRect(-2, -15, 4, 15);
   
   // 3. RECUPERATOR (Details)
   ctx.fillStyle = color;
   ctx.fillRect(-3, -6, 6, 4);

   // 4. WHEELS
   ctx.fillStyle = "#020617";
   ctx.fillRect(-10, -2, 4, 4);
   ctx.fillRect(6, -2, 4, 4);
   ctx.restore();
};

export const drawMLRS_Icon = (ctx: CanvasRenderingContext2D, color: string, base: string) => {
   ctx.save();
   // 1. TRUCK CHASSIS
   ctx.fillStyle = `rgba(${base}, 0.2)`;
   ctx.fillRect(-10, -5, 20, 10);
   ctx.strokeStyle = color;
   ctx.strokeRect(-10, -5, 20, 10);

   // 2. ROCKET LAUNCHER PODS
   ctx.fillStyle = color;
   const podW = 4; const podH = 12;
   ctx.fillRect(-7, -10, podW, podH);
   ctx.fillRect(-2, -10, podW, podH);
   ctx.fillRect(3, -10, podW, podH);

   // 3. CABIN
   ctx.fillStyle = "#0f172a";
   ctx.fillRect(6, -3, 6, 6);
   ctx.restore();
};

export const drawSAM_Icon = (ctx: CanvasRenderingContext2D, color: string, base: string) => {
   ctx.save();
   // 1. RADAR BASE
   ctx.fillStyle = `rgba(${base}, 0.2)`;
   ctx.beginPath();
   ctx.arc(0, 0, 10, 0, Math.PI * 2);
   ctx.fill();
   ctx.strokeStyle = color;
   ctx.stroke();

   // 2. MISSILE TUBES (VLS)
   ctx.fillStyle = color;
   const missileH = 12;
   ctx.fillRect(-6, -missileH, 3, missileH);
   ctx.fillRect(-1.5, -missileH, 3, missileH);
   ctx.fillRect(3, -missileH, 3, missileH);

   // 3. RADAR DISH
   ctx.strokeStyle = color; ctx.lineWidth = 1;
   ctx.beginPath();
   ctx.arc(0, 0, 6, -Math.PI/4, Math.PI + Math.PI/4);
   ctx.stroke();
   ctx.restore();
};
