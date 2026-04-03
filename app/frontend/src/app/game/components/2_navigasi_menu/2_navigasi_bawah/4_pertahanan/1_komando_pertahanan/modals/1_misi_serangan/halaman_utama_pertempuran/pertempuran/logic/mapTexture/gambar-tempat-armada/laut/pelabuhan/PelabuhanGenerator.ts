import { HarborData } from "../../../../polyglot/ts/port-router";

/**
 * Pelabuhan Generator (SVG HD Style)
 * Renders high-detail tactical harbors with piers, cranes, and containers.
 */
export class PelabuhanEngine {
   /**
    * Main drawing function for the Tactical Harbor
    */
   static drawHarbor(ctx: CanvasRenderingContext2D, harbor: HarborData, zoom: number): void {
      ctx.save();

      // 1. Draw Concrete Piers (Dermaga)
      ctx.lineCap = 'butt';
      ctx.lineJoin = 'miter';
      harbor.piers.forEach(pier => {
         // Concrete structure (light gray with tactical stroke)
         ctx.strokeStyle = '#334155'; ctx.lineWidth = pier.width + 4;
         ctx.beginPath(); ctx.moveTo(pier.startX, pier.startY); ctx.lineTo(pier.endX, pier.endY); ctx.stroke();

         ctx.strokeStyle = '#64748b'; ctx.lineWidth = pier.width;
         ctx.beginPath(); ctx.moveTo(pier.startX, pier.startY); ctx.lineTo(pier.endX, pier.endY); ctx.stroke();

         // Bollards (small tactical dots at the edge)
         ctx.fillStyle = '#1e293b';
         const len = Math.abs(pier.endY - pier.startY);
         for (let i = 0; i <= len; i += 100) {
            ctx.beginPath(); 
            ctx.arc(pier.startX - pier.width/2, pier.startY - i, 4, 0, Math.PI * 2); 
            ctx.fill();
            ctx.beginPath(); 
            ctx.arc(pier.startX + pier.width/2, pier.startY - i, 4, 0, Math.PI * 2); 
            ctx.fill();
         }
      });

      // 2. Draw Warehouses (Gudang)
      harbor.warehouses.forEach(w => {
         // Main building body
         ctx.fillStyle = '#0f172a';
         ctx.fillRect(w.x, w.y, w.w, w.h);
         // Roof highlight (Tactical industrial look)
         ctx.strokeStyle = '#334155'; ctx.lineWidth = 2;
         ctx.strokeRect(w.x, w.y, w.w, w.h);
         // Loading bays
         ctx.fillStyle = '#475569';
         const bays = 4;
         const bayW = w.w / (bays * 2);
         for (let i = 0; i < bays; i++) {
            ctx.fillRect(w.x + bayW/2 + (i * bayW * 2), w.y + w.h - 10, bayW, 10);
         }
      });

      // 3. Draw Containers (Detail)
      harbor.containers.forEach(stack => {
         const colW = 30; const colH = 20;
         for (let ix = 0; ix < stack.width; ix += colW + 5) {
            for (let iy = 0; iy < stack.height; iy += colH + 5) {
               const colorIndex = Math.floor((ix + iy) / 10) % stack.colors.length;
               ctx.fillStyle = stack.colors[colorIndex];
               ctx.fillRect(stack.x + ix, stack.y - iy, colW, colH);
               // Container detail stroke
               ctx.strokeStyle = 'rgba(0,0,0,0.4)'; ctx.lineWidth = 1;
               ctx.strokeRect(stack.x + ix, stack.y - iy, colW, colH);
            }
         }
      });

      // 4. Draw Gantry Cranes (SVG HD Detail)
      harbor.cranes.forEach(crane => {
         this.drawGantryCrane(ctx, crane.x, crane.y, zoom);
      });

      ctx.restore();
   }

   /**
    * Draws a high-detail Gantry Crane silhouette
    */
   private static drawGantryCrane(ctx: CanvasRenderingContext2D, x: number, y: number, zoom: number): void {
      ctx.save();
      ctx.translate(x, y);
      
      const scale = 1.0;
      ctx.lineWidth = 2;
      ctx.strokeStyle = '#020617';
      ctx.fillStyle = '#334155';

      // 1. Legs (A-frame)
      ctx.beginPath();
      ctx.moveTo(-20 * scale, 0); ctx.lineTo(-10 * scale, -40 * scale);
      ctx.lineTo(10 * scale, -40 * scale); ctx.lineTo(20 * scale, 0);
      ctx.stroke();

      // 2. Main horizontal boom (Lengan derek)
      ctx.lineWidth = 6;
      ctx.beginPath();
      ctx.moveTo(-10 * scale, -40 * scale);
      ctx.lineTo(60 * scale, -40 * scale); // Extends over the water
      ctx.stroke();

      // 3. Counterweight & Cabin
      ctx.fillStyle = '#ef4444'; // Tactical Red
      ctx.fillRect(-15 * scale, -45 * scale, 15 * scale, 10 * scale);

      // 4. Cable & Hook (Detail)
      ctx.lineWidth = 1;
      ctx.strokeStyle = '#facc15'; // Yellow cable
      ctx.beginPath();
      ctx.moveTo(40 * scale, -40 * scale);
      ctx.lineTo(40 * scale, -10 * scale);
      ctx.stroke();

      ctx.restore();
   }
}
