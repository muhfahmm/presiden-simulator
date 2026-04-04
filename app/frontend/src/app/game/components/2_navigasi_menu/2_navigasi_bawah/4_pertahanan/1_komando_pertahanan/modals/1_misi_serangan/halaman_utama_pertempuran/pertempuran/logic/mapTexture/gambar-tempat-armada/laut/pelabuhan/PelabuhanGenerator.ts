import { HarborData } from "../../../../polyglot/ts/port-router";

/**
 * Pelabuhan Generator (SVG HD Style)
 * Renders high-detail tactical harbors with piers, cranes, and containers.
 */
export class PelabuhanEngine {
   /**
    * Main drawing function for the Tactical Harbor
    */
   static drawHarbor(
      ctx: CanvasRenderingContext2D, 
      harbor: HarborData, 
      zoom: number,
      mousePos?: { x: number, y: number },
      portShipsState: any[] = [],
      units: any[] = [],
      targetArmada: any = null,
      selectedBuildingId?: string | null
   ): void {
      ctx.save();

      // NEW: Draw Tactical HUD (Port Capacity)
      const shoreY = -6000;
      const centerX = 0;
      const isHovered = mousePos && Math.abs(mousePos.x - centerX) < 2000 && Math.abs(mousePos.y - shoreY) < 1500;
      const isActive = selectedBuildingId === "user_harbor";

      if (isHovered && portShipsState.length > 0) {
         this.drawTacticalInventory(ctx, centerX, shoreY - 1800, zoom, portShipsState, targetArmada, isActive);
      }

      // 1. Draw Concrete Piers (Dermaga - RED IF ACTIVE)
      ctx.lineCap = 'butt';
      ctx.lineJoin = 'miter';
      harbor.piers.forEach(pier => {
         // Industrial Concrete (Dark neutral greys) OR Tactical RED
         ctx.strokeStyle = isActive ? '#450a0a' : '#1e293b'; ctx.lineWidth = pier.width + 4;
         ctx.beginPath(); ctx.moveTo(pier.startX, pier.startY); ctx.lineTo(pier.endX, pier.endY); ctx.stroke();

         ctx.strokeStyle = isActive ? '#991b1b' : '#475569'; ctx.lineWidth = pier.width;
         ctx.beginPath(); ctx.moveTo(pier.startX, pier.startY); ctx.lineTo(pier.endX, pier.endY); ctx.stroke();

         // Bollards (small tactical dots at the edge)
         ctx.fillStyle = isActive ? '#ef4444' : '#1e293b';
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

      // 2. Draw Warehouses (Gudang - RED if active)
      harbor.warehouses.forEach(w => {
         // Main building body
         ctx.fillStyle = isActive ? '#7f1d1d' : '#111827';
         ctx.fillRect(w.x, w.y, w.w, w.h);
         // Roof highlight
         ctx.strokeStyle = isActive ? '#ef4444' : '#374151'; ctx.lineWidth = 2;
         ctx.strokeRect(w.x, w.y, w.w, w.h);
         // Loading bays
         ctx.fillStyle = isActive ? '#450a0a' : '#475569';
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
               ctx.fillStyle = isActive ? '#450a0a' : stack.colors[colorIndex];
               ctx.fillRect(stack.x + ix, stack.y - iy, colW, colH);
               // Container detail stroke
               ctx.strokeStyle = isActive ? 'rgba(239, 68, 68, 0.4)' : 'rgba(0,0,0,0.4)'; ctx.lineWidth = 1;
               ctx.strokeRect(stack.x + ix, stack.y - iy, colW, colH);
            }
         }
      });

      // 4. Draw Gantry Cranes (SVG HD Detail)
      harbor.cranes.forEach(crane => {
         this.drawGantryCrane(ctx, crane.x, crane.y, zoom, isActive);
      });

      ctx.restore();
   }

   /**
    * Draws a tactical list of ship inventories inside the port
    */
   private static drawTacticalInventory(
      ctx: CanvasRenderingContext2D, 
      x: number, 
      y: number, 
      zoom: number, 
      portState: any[],
      targetArmada: any,
      isActive: boolean = false
   ): void {
      ctx.save();
      ctx.translate(x, y);
      const s = 1.2 / Math.sqrt(zoom);
      ctx.scale(s, s);

      const items = portState.filter(p => p.maxCapacity > 0);
      if (items.length === 0) {
         ctx.restore();
         return;
      }

      const rowH = 25;
      const boxW = 280;
      const boxH = (items.length * rowH) + 40;

      // Glow effect
      ctx.shadowBlur = 20;
      ctx.shadowColor = isActive ? "rgba(220, 38, 38, 0.5)" : "rgba(59, 130, 246, 0.5)";

      // Backdrop
      ctx.fillStyle = "rgba(9, 9, 11, 0.95)";
      ctx.strokeStyle = isActive ? "#ef4444" : "#3b82f6";
      ctx.lineWidth = 2;
      ctx.fillRect(-boxW/2, 0, boxW, boxH);
      ctx.strokeRect(-boxW/2, 0, boxW, boxH);
      ctx.shadowBlur = 0;

      // Header
      ctx.fillStyle = isActive ? "#ef4444" : "#3b82f6";
      ctx.font = "black 10px Inter, sans-serif";
      ctx.textAlign = "center";
      ctx.fillText("TANJUNG TACTICAL HUB - NAVAL INVENTORY", 0, 25);

      // Divider
      ctx.strokeStyle = isActive ? "rgba(220, 38, 38, 0.3)" : "rgba(59, 130, 246, 0.3)";
      ctx.beginPath(); ctx.moveTo(-boxW/2 + 20, 35); ctx.lineTo(boxW/2 - 20, 35); ctx.stroke();

      // List Items
      items.forEach((p, i) => {
         const yy = 60 + (i * rowH);
         const label = p.type.replace(/_/g, ' ').toUpperCase();
         
         ctx.textAlign = "left";
         ctx.fillStyle = p.currentCount > 0 ? "#ffffff" : "#475569";
         ctx.font = "bold 11px Inter, sans-serif";
         ctx.fillText(label, -boxW/2 + 25, yy);

         ctx.textAlign = "right";
         ctx.fillStyle = p.currentCount > 0 ? (isActive ? "#f87171" : "#60a5fa") : "#ef4444";
         ctx.font = "black 12px 'JetBrains Mono', monospace";
         ctx.fillText(`${p.currentCount}/${p.maxCapacity}`, boxW/2 - 25, yy);
      });

      ctx.restore();
   }

   /**
    * Draws a high-detail Gantry Crane silhouette
    */
   private static drawGantryCrane(ctx: CanvasRenderingContext2D, x: number, y: number, zoom: number, isActive: boolean = false): void {
      ctx.save();
      ctx.translate(x, y);
      
      const scale = 1.0;
      ctx.lineWidth = 2;
      ctx.strokeStyle = isActive ? '#450a0a' : '#020617';
      ctx.fillStyle = isActive ? '#991b1b' : '#334155';

      // 1. Legs (A-frame)
      ctx.beginPath();
      ctx.moveTo(-20 * scale, 0); ctx.lineTo(-10 * scale, -40 * scale);
      ctx.lineTo(10 * scale, -40 * scale); ctx.lineTo(20 * scale, 0);
      ctx.stroke();

      // 2. Main horizontal boom
      ctx.lineWidth = 6;
      ctx.beginPath();
      ctx.moveTo(-10 * scale, -40 * scale);
      ctx.lineTo(60 * scale, -40 * scale); 
      ctx.stroke();

      // 3. Counterweight & Cabin (RED if active)
      ctx.fillStyle = isActive ? '#ef4444' : '#ef4444'; // Red anyway as it's a hazard color, but maybe brighter
      if (isActive) {
         ctx.shadowBlur = 10;
         ctx.shadowColor = "#ef4444";
      }
      ctx.fillRect(-15 * scale, -45 * scale, 15 * scale, 10 * scale);
      ctx.shadowBlur = 0;

      // 4. Cable & Hook
      ctx.lineWidth = 1;
      ctx.strokeStyle = isActive ? '#ffffff' : '#facc15'; 
      ctx.beginPath();
      ctx.moveTo(40 * scale, -40 * scale);
      ctx.lineTo(40 * scale, -10 * scale);
      ctx.stroke();

      ctx.restore();
   }
}
