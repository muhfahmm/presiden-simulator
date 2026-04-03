/**
 * Barak (Military Barracks) Drawing Utility
 * Renders tactical barracks with reinforced roofs and military aesthetics.
 */

export class BarakEngine {
   /**
    * Draws a grid of tactical military barracks
    * @param ctx Canvas Context
    * @param x Center X position
    * @param y Top Y position
    * @param zoom Current camera zoom
    * @param cols Number of columns (default 3)
    * @param rows Number of rows (default 3)
    */
   /**
    * Draws a single tactical barrack unit at the translated origin
    */
   private static drawSingleBarrack(ctx: CanvasRenderingContext2D, width: number, height: number): void {
      // 1. MAIN STRUCTURE (Tactical Olive/Drab)
      ctx.fillStyle = '#365314'; 
      ctx.fillRect(-width / 2, 0, width, height);
      
      // Outline
      ctx.strokeStyle = '#1a2e05'; ctx.lineWidth = 3;
      ctx.strokeRect(-width / 2, 0, width, height);

      // 2. REINFORCED ROOF (Slanted)
      ctx.fillStyle = '#1e293b'; 
      const roofPeak = 60;
      ctx.beginPath();
      ctx.moveTo(-width / 2 - 10, 0);
      ctx.lineTo(width / 2 + 10, 0);
      ctx.lineTo(width / 2, -roofPeak); 
      ctx.lineTo(-width / 2, -roofPeak); 
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Roof Details 
      ctx.strokeStyle = 'rgba(255,255,255,0.1)'; ctx.lineWidth = 1;
      for (let rx = -width/2 + 50; rx < width/2; rx += 100) {
         ctx.beginPath();
         ctx.moveTo(rx, 0);
         ctx.lineTo(rx, -roofPeak);
         ctx.stroke();
      }

      // 3. DOORS & WINDOWS
      ctx.fillStyle = '#0f172a'; 
      const entryWidth = 40;
      const entryHeight = 60;
      ctx.fillRect(-entryWidth / 2, height - entryHeight, entryWidth, entryHeight);
      
      ctx.fillStyle = '#facc15'; 
      const winSize = 15;
      for (let wx = -width/2 + 60; wx < width/2; wx += 80) {
         if (Math.abs(wx) > 60) {
            ctx.fillRect(wx - winSize/2, 60, winSize, winSize);
         }
      }

      // 4. SIDE STAIRS/PLATFORMS
      ctx.fillStyle = '#475569';
      ctx.fillRect(-width/2 - 20, height/2, 20, 30);
      ctx.fillRect(width/2, height/2, 20, 30);
   }

   /**
    * Draws an expanded military barracks complex based on user sketch
    */
   static drawBarracksComplex(ctx: CanvasRenderingContext2D, x: number, y: number, zoom: number): void {
      ctx.save();
      
      const bw = 400;   // Barrack width
      const bh = 200;   // Barrack height
      const gx = 150;   // Gap X
      const gy = 150;   // Gap Y
      
      // I. DRAW TACTICAL GROUND LINES (Roads/Markers)
      ctx.strokeStyle = 'rgba(250, 204, 21, 0.2)'; // Faded yellow
      ctx.lineWidth = 10;
      const roadLen = 1200;
      
      const drawRoad = (rx: number, ry: number) => {
         ctx.beginPath();
         ctx.moveTo(rx - roadLen/2, ry);
         ctx.lineTo(rx + roadLen/2, ry);
         ctx.stroke();
      };

      // Lines between rows on the left and right sides
      [y + bh + gy/2, y + 2*(bh+gy) - gy/2].forEach(ry => {
         ctx.save();
         drawRoad(x - 1200, ry); // Left roads
         drawRoad(x + 1200, ry); // Right roads
         ctx.restore();
      });

      // II. DRAW CORE 3x3 GRID
      const coreWidth = 3 * bw + 2 * gx;
      const coreStartX = x - coreWidth / 2 + bw / 2;
      for (let r = 0; r < 3; r++) {
         for (let c = 0; c < 3; c++) {
            const px = coreStartX + c * (bw + gx);
            const py = y + r * (bh + gy);
            ctx.save();
            ctx.translate(px, py);
            this.drawSingleBarrack(ctx, bw, bh);
            ctx.restore();
         }
      }

      // III. DRAW BOTTOM ROW (NEW 7 UNITS)
      const bottomY = y + 3 * (bh + gy);
      
      // LEFT 3 UNITS
      const leftStartX = x - 1500;
      for (let c = 0; c < 3; c++) {
         ctx.save();
         ctx.translate(leftStartX + c * (bw + gx), bottomY);
         this.drawSingleBarrack(ctx, bw, bh);
         ctx.restore();
      }

      // RIGHT 4 UNITS
      const rightStartX = x + 700;
      for (let c = 0; c < 4; c++) {
         ctx.save();
         ctx.translate(rightStartX + c * (bw + gx), bottomY);
         this.drawSingleBarrack(ctx, bw, bh);
         ctx.restore();
      }

      ctx.restore();
   }

   /**
    * Draws a grid of tactical military barracks with hover interactions
    */
   static drawBarracks(
      ctx: CanvasRenderingContext2D, 
      x: number, 
      y: number, 
      zoom: number, 
      cols: number = 10, 
      count: number = 0,
      mousePos?: { x: number, y: number },
      phase: string = "deployment",
      barracksState?: any[] // Optional state for dynamic personnel
   ): void {
      if (count <= 0) return;

      const barracks = barracksState || BarakUtils.calculateBarracksPositions(x, y, count, cols);
      
      ctx.save();
      
      let hoveredUnit: { px: number, py: number, personnel: string } | null = null;

      barracks.forEach((b: any) => {
         const px = b.pos.x;
         const py = b.pos.y;

         // Hover Detection (AABB)
         if (mousePos) {
            const isHovered = (
               mousePos.x >= px - BarakUtils.WIDTH / 2 && 
               mousePos.x <= px + BarakUtils.WIDTH / 2 && 
               mousePos.y >= py && 
               mousePos.y <= py + BarakUtils.HEIGHT
            );
            
            if (isHovered) {
               hoveredUnit = { px, py, personnel: b.currentPersonnel?.toLocaleString('id-ID') || "10.000" };
            }
         }

         ctx.save();
         ctx.translate(px, py);
         this.drawSingleBarrack(ctx, BarakUtils.WIDTH, BarakUtils.HEIGHT);
         ctx.restore();
      });

      // Draw Hover Tooltip (Above all units)
      if (hoveredUnit) {
         const { px, py, personnel } = hoveredUnit;
         ctx.save();
         ctx.translate(px, py - 80);
         
         const text = `${personnel}/10.000`;
         ctx.font = "bold 28px Inter, sans-serif";
         const tw = ctx.measureText(text).width;
         const pad = 30;
         
         // Glow Effect
         ctx.shadowColor = "rgba(239, 68, 68, 0.8)";
         ctx.shadowBlur = 15;
         
         // Tooltip Box
         ctx.fillStyle = "rgba(15, 23, 42, 0.95)";
         ctx.strokeStyle = "#ef4444";
         ctx.lineWidth = 2;
         ctx.beginPath();
         ctx.roundRect(-tw/2 - pad, -40, tw + pad*2, 60, 12);
         ctx.fill();
         ctx.stroke();
         
         // Text
         ctx.shadowBlur = 0;
         ctx.fillStyle = "#ffffff";
         ctx.textAlign = "center";
         ctx.textBaseline = "middle";
         ctx.fillText(text, 0, -10);
         
         ctx.restore();
      }

      ctx.restore();
   }
}

import { BarakUtils } from "./BarakUtils";
