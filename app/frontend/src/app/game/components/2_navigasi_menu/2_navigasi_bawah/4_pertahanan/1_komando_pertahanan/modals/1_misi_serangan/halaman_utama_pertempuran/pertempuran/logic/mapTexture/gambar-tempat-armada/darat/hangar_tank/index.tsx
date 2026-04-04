
import { drawTank, drawAPC, drawTactical } from "../../../../icon_armada_pertempuran/index";

/**
 * HangarTankEngine.tsx
 * Engine for rendering tactical vehicle hangars (Tank, APC/IFV, Kendaraan Taktis).
 */
export class HangarTankEngine {

   static getVehicleConfig(vehicleType: string): { label: string, color: string, drawFn: (ctx: CanvasRenderingContext2D, hex: string, base: string) => void } {
      switch (vehicleType) {
         case 'apc_ifv':
            return { label: 'APC / IFV', color: '#3b82f6', drawFn: drawAPC };
         case 'kendaraan_taktis':
            return { label: 'KENDARAAN TAKTIS', color: '#22c55e', drawFn: drawTactical };
         default:
            return { label: 'MAIN BATTLE TANK', color: '#ef4444', drawFn: drawTank };
      }
   }

   /**
    * Draws a tactical perimeter fence around the entire complex
    */
   private static drawPerimeter(ctx: CanvasRenderingContext2D, hangars: any[]): void {
      if (hangars.length === 0) return;

      const hangarW = 700;
      const hangarH = 450;
      const padding = 200;

      // 1. Calculate Bounding Box
      const minX = Math.min(...hangars.map(h => h.pos.x)) - hangarW / 2 - padding;
      const maxX = Math.max(...hangars.map(h => h.pos.x)) + hangarW / 2 + padding;
      const minY = Math.min(...hangars.map(h => h.pos.y)) - hangarH / 2 - padding;
      const maxY = Math.max(...hangars.map(h => h.pos.y)) + hangarH / 2 + padding;

      const width = maxX - minX;
      const height = maxY - minY;

      ctx.save();

      // 2. MAIN BORDER (Dashed Tactical Line)
      ctx.strokeStyle = "rgba(100, 116, 139, 0.3)";
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

         ctx.shadowColor = "#3b82f6";
         ctx.shadowBlur = 10;
         ctx.strokeStyle = "#3b82f6";
         ctx.lineWidth = 12;
         ctx.lineCap = "square";

         ctx.beginPath();
         ctx.moveTo(0, cornerSize);
         ctx.lineTo(0, 0);
         ctx.lineTo(cornerSize, 0);
         ctx.stroke();
         ctx.restore();
      };

      drawCorner(minX, minY, 1, 1);     // Top-Left
      drawCorner(maxX, minY, -1, 1);    // Top-Right
      drawCorner(minX, maxY, 1, -1);    // Bottom-Left
      drawCorner(maxX, maxY, -1, -1);   // Bottom-Right

      // 4. TACTICAL LABEL
      ctx.font = "bold 60px Inter, sans-serif";
      ctx.fillStyle = "rgba(148, 163, 184, 0.4)";
      ctx.textAlign = "left";
      ctx.textBaseline = "bottom";
      ctx.fillText("SEKTOR OPS DARAT // HANGAR COMPLEX", minX + 20, minY - 30);

      ctx.restore();
   }

   /**
    * Draws all vehicle hangars (multi-category)
    */
   static drawTankHangar(
      ctx: CanvasRenderingContext2D,
      x: number,
      y: number,
      zoom: number,
      mousePos?: { x: number, y: number },
      units: any[] = [],
      targetArmada: any = null,
      tankHangarsState: any[] = []
   ): void {
      if (!tankHangarsState || tankHangarsState.length === 0) return;

      const hangarW = 700;
      const hangarH = 450;

      ctx.save();

      // Draw perimeter first (Background of the complex)
      this.drawPerimeter(ctx, tankHangarsState);

      tankHangarsState.forEach((hangar) => {
         const hX = hangar.pos.x;
         const hY = hangar.pos.y;
         const config = this.getVehicleConfig(hangar.vehicleType || 'tank_tempur_utama');

         // Hover Detection (AABB)
         let isHovered = false;
         if (mousePos) {
            isHovered = (
               mousePos.x >= hX - hangarW / 2 &&
               mousePos.x <= hX + hangarW / 2 &&
               mousePos.y >= hY - hangarH / 2 &&
               mousePos.y <= hY + hangarH / 2
            );
         }

         ctx.save();
         ctx.translate(hX, hY);

         // 1. CONCRETE PAD (Outer Shadow)
         ctx.shadowBlur = 15;
         ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
         ctx.fillStyle = "#334155";
         ctx.fillRect(-hangarW / 2 - 20, -hangarH / 2 - 20, hangarW + 40, hangarH + 40);
         ctx.shadowBlur = 0;

         // 2. MAIN STRUCTURE (Asphalt/Concrete)
         ctx.fillStyle = "#1e293b";
         ctx.fillRect(-hangarW / 2, -hangarH / 2, hangarW, hangarH);

         // 3. TACTICAL MARKINGS (Yellow safety lines)
         ctx.strokeStyle = "#facc15";
         ctx.lineWidth = 6;
         ctx.setLineDash([25, 25]);
         ctx.strokeRect(-hangarW / 2 + 20, -hangarH / 2 + 20, hangarW - 40, hangarH - 40);
         ctx.setLineDash([]);

         // 4. HANGAR DOORS (Sliding Panel Look)
         const doorW = hangarW - 80;
         const doorH = 100;

         ctx.fillStyle = "#0f172a";
         ctx.fillRect(-doorW / 2, -hangarH / 2 + 40, doorW, doorH);
         ctx.strokeStyle = "#334155"; ctx.lineWidth = 3;
         ctx.strokeRect(-doorW / 2, -hangarH / 2 + 40, doorW, doorH);
         ctx.fillRect(-doorW / 2, hangarH / 2 - 40 - doorH, doorW, doorH);
         ctx.strokeRect(-doorW / 2, hangarH / 2 - 40 - doorH, doorW, doorH);

         // 4.1 DRAW VEHICLE ICON INSIDE HANGAR
         ctx.save();
         ctx.scale(8, 8); // Scaled up to 8x for premium visibility
         config.drawFn(ctx, config.color, "71, 85, 105");
         ctx.restore();

         // 5. DOOR PANEL LINES
         ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
         ctx.beginPath();
         for (let l = -doorW / 2 + 80; l < doorW / 2; l += 100) {
            ctx.moveTo(l, -hangarH / 2 + 40); ctx.lineTo(l, -hangarH / 2 + 40 + doorH);
            ctx.moveTo(l, hangarH / 2 - 40 - doorH); ctx.lineTo(l, hangarH / 2 - 40);
         }
         ctx.stroke();

         // Tooltip if hovered
         if (isHovered) {
            ctx.save();
            ctx.translate(0, -hangarH / 2 - 80);

            const text = `${hangar.currentCount}/${hangar.maxCapacity}`;
            ctx.font = "bold 28px Inter, sans-serif";
            const tw = ctx.measureText(text).width;
            const pad = 25;

            ctx.shadowColor = `${config.color}cc`;
            ctx.shadowBlur = 15;
            ctx.fillStyle = "rgba(15, 23, 42, 0.95)";
            ctx.strokeStyle = config.color;
            ctx.lineWidth = 2;

            ctx.fillRect(-tw / 2 - pad, -40, tw + pad * 2, 60);
            ctx.strokeRect(-tw / 2 - pad, -40, tw + pad * 2, 60);

            ctx.shadowBlur = 0;
            ctx.fillStyle = "#ffffff";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText(text, 0, -10);

            // Label
            ctx.font = "bold 16px Inter, sans-serif";
            ctx.fillStyle = config.color;
            ctx.fillText(config.label, 0, -55);

            ctx.restore();
         }

         ctx.restore();
      });

      ctx.restore();
   }
}
