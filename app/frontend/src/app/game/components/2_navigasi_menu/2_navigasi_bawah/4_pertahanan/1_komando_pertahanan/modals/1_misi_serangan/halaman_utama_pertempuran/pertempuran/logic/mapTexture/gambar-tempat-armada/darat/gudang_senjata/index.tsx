
import React from "react";
import { drawArtilleryIcon, drawMLRS_Icon, drawSAM_Icon } from "./ArmoryIcons";

/**
 * ArmoryEngine.tsx (Gudang Senjata)
 * High-fidelity tactical renderer for advanced weapon warehouses.
 */
export class ArmoryEngine {

   static getWeaponConfig(type: string): { label: string, color: string, drawFn: (ctx: CanvasRenderingContext2D, hex: string, base: string) => void } {
      switch (type) {
         case 'artileri_berat':
            return { label: 'ARTILERI BERAT', color: '#f59e0b', drawFn: drawArtilleryIcon };
         case 'sistem_peluncur_roket':
            return { label: 'SISTEM ROKET (MLRS)', color: '#ec4899', drawFn: drawMLRS_Icon };
         case 'pertahanan_udara_mobile':
            return { label: 'PERTAHANAN UDARA (SAM)', color: '#6366f1', drawFn: drawSAM_Icon };
         default:
            return { label: 'GUDANG SENJATA', color: '#94a3b8', drawFn: drawArtilleryIcon };
      }
   }

   /**
    * Draws a tactical perimeter fence around the entire Armory complex
    */
   private static drawPerimeter(ctx: CanvasRenderingContext2D, armories: any[]): void {
      if (armories.length === 0) return;

      const buildW = 800;
      const buildH = 500;
      const padding = 250;

      // 1. Calculate Bounding Box
      const minX = Math.min(...armories.map(a => a.pos.x)) - buildW / 2 - padding;
      const maxX = Math.max(...armories.map(a => a.pos.x)) + buildW / 2 + padding;
      const minY = Math.min(...armories.map(a => a.pos.y)) - buildH / 2 - padding;
      const maxY = Math.max(...armories.map(a => a.pos.y)) + buildH / 2 + padding;

      const width = maxX - minX;
      const height = maxY - minY;

      ctx.save();

      // 2. MAIN BORDER (Dashed Tactical Line)
      ctx.strokeStyle = "rgba(100, 116, 139, 0.4)";
      ctx.lineWidth = 4;
      ctx.setLineDash([40, 20]);
      ctx.strokeRect(minX, minY, width, height);
      ctx.setLineDash([]);

      // 3. GLOWING CORNER MARKERS
      const cornerSize = 100;
      const drawCorner = (cx: number, cy: number, flipX: number, flipY: number) => {
         ctx.save();
         ctx.translate(cx, cy);
         ctx.scale(flipX, flipY);

         ctx.shadowColor = "#f59e0b"; // Golden/Amber for ordnance
         ctx.shadowBlur = 10;
         ctx.strokeStyle = "#f59e0b";
         ctx.lineWidth = 12;
         ctx.lineCap = "square";

         ctx.beginPath();
         ctx.moveTo(0, cornerSize);
         ctx.lineTo(0, 0);
         ctx.lineTo(cornerSize, 0);
         ctx.stroke();
         ctx.restore();
      };

      drawCorner(minX, minY, 1, 1);     // Top Left
      drawCorner(maxX, minY, -1, 1);    // Top Right
      drawCorner(minX, maxY, 1, -1);    // Bottom Left
      drawCorner(maxX, maxY, -1, -1);   // Bottom Right

      // 4. COMPLEX LABEL
      ctx.font = "black 24px Inter, sans-serif";
      ctx.fillStyle = "rgba(245, 158, 11, 0.6)";
      ctx.textAlign = "left";
      ctx.fillText("SEKTOR ARTILERI & ROKET STRATEGIS", minX + 20, minY - 20);

      ctx.restore();
   }

   /**
    * Renders all Armory buildings in the tactical theater.
    */
   static drawArmory(
      ctx: CanvasRenderingContext2D,
      x: number,
      y: number,
      zoom: number,
      mousePos?: { x: number, y: number },
      units: any[] = [],
      targetArmada: any = null,
      armoryState: any[] = []
   ): void {
      if (!armoryState || armoryState.length === 0) return;

      const buildW = 800;
      const buildH = 500;

      ctx.save();

      // Draw perimeter first
      this.drawPerimeter(ctx, armoryState);

      armoryState.forEach((armory) => {
         try {
            const aX = armory.pos.x;
            const aY = armory.pos.y;
            const config = this.getWeaponConfig(armory.weaponType);

            // Hover Detection
            let isHovered = false;
            if (mousePos) {
               isHovered = (
                  mousePos.x >= aX - buildW / 2 &&
                  mousePos.x <= aX + buildW / 2 &&
                  mousePos.y >= aY - buildH / 2 &&
                  mousePos.y <= aY + buildH / 2
               );
            }

            ctx.save();
            ctx.translate(aX, aY);

            // 1. REINFORCED CONCRETE PLATFORM
            ctx.shadowBlur = 20;
            ctx.shadowColor = "rgba(0, 0, 0, 0.6)";
            ctx.fillStyle = "#1e293b";
            ctx.fillRect(-buildW / 2 - 30, -buildH / 2 - 30, buildW + 60, buildH + 60);
            ctx.shadowBlur = 0;

            // 2. MAIN WAREHOUSE STRUCTURE
            ctx.fillStyle = "#0f172a";
            ctx.strokeStyle = "#475569"; ctx.lineWidth = 4;
            ctx.fillRect(-buildW / 2, -buildH / 2, buildW, buildH);
            ctx.strokeRect(-buildW / 2, -buildH / 2, buildW, buildH);

            // 3. HAZARD STRIPING (Yellow/Black)
            ctx.save();
            ctx.beginPath();
            ctx.rect(-buildW / 2, -buildH / 2, buildW, buildH);
            ctx.clip();
            ctx.strokeStyle = "#fbbf24"; ctx.lineWidth = 15;
            ctx.setLineDash([20, 20]);
            ctx.strokeRect(-buildW / 2 + 7.5, -buildH / 2 + 7.5, buildW - 15, buildH - 15);
            ctx.restore();

            // 4. BLAST DOORS
            const doorW = buildW - 150;
            const doorH = 350;
            ctx.fillStyle = "#1e293b";
            ctx.fillRect(-doorW / 2, -doorH / 2, doorW, doorH);
            ctx.strokeStyle = "#334155";
            ctx.strokeRect(-doorW / 2, -doorH / 2, doorW, doorH);

            // 4.1 DRAW WEAPON ICON INSIDE
            ctx.save();
            ctx.scale(8, 8);
            config.drawFn(ctx, config.color, "100, 116, 139");
            ctx.restore();

            // 5. STATUS LABEL (Fixed Overlay)
            ctx.font = "bold 20px Inter, sans-serif";
            ctx.fillStyle = "#475569";
            ctx.textAlign = "center";
            ctx.fillText(`STORAGE ID: ${armory.id.split('_').pop()}`, 0, buildH / 2 - 25);

            // Tooltip if hovered
            if (isHovered) {
               this.drawTooltip(ctx, armory, config);
            }

            ctx.restore();
         } catch (e) {
            console.error("Armory Draw Error:", e);
         }
      });

      ctx.restore();
   }

   private static drawTooltip(ctx: CanvasRenderingContext2D, armory: any, config: any): void {
      ctx.save();
      ctx.translate(0, -350);

      const text = `${armory.currentCount}/${armory.maxCapacity}`;
      ctx.font = "bold 32px Inter, sans-serif";
      const tw = ctx.measureText(text).width;
      const pad = 35;

      // GLOW BOX
      ctx.shadowColor = `${config.color}cc`;
      ctx.shadowBlur = 20;
      ctx.fillStyle = "rgba(15, 23, 42, 0.98)";
      ctx.strokeStyle = config.color;
      ctx.lineWidth = 3;
      ctx.strokeRect(-tw / 2 - pad, -45, tw + pad * 2, 75);
      ctx.fillRect(-tw / 2 - pad, -45, tw + pad * 2, 75);

      // QUANTITY
      ctx.shadowBlur = 0;
      ctx.fillStyle = "#ffffff";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(text, 0, -10);

      // CATEGORY LABEL
      ctx.font = "bold 18px Inter, sans-serif";
      ctx.fillStyle = config.color;
      ctx.fillText(config.label, 0, -55);

      ctx.restore();
   }
}
