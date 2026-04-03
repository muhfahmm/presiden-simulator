
/**
 * HangarTankEngine.tsx
 * Engine for rendering tactical tank hangars on the war map.
 */
export class HangarTankEngine {
   /**
    * Draws a high-detail tactical tank hangar facility
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
      // Note: We don't translate to (x,y) globally here because each hangar has its own world pos in state

      tankHangarsState.forEach((hangar) => {
         const hX = hangar.pos.x;
         const hY = hangar.pos.y;

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
         
         // Top Door
         ctx.fillStyle = "#0f172a";
         ctx.fillRect(-doorW / 2, -hangarH / 2 + 40, doorW, doorH);
         ctx.strokeStyle = "#334155"; ctx.lineWidth = 3;
         ctx.strokeRect(-doorW / 2, -hangarH / 2 + 40, doorW, doorH);

         // Bottom Door
         ctx.fillRect(-doorW / 2, hangarH / 2 - 40 - doorH, doorW, doorH);
         ctx.strokeRect(-doorW / 2, hangarH / 2 - 40 - doorH, doorW, doorH);

         // 5. DOOR PANEL LINES
         ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
         ctx.beginPath();
         for(let l = -doorW/2 + 80; l < doorW/2; l += 100) {
            ctx.moveTo(l, -hangarH / 2 + 40); ctx.lineTo(l, -hangarH / 2 + 40 + doorH);
            ctx.moveTo(l, hangarH / 2 - 40 - doorH); ctx.lineTo(l, hangarH / 2 - 40);
         }
         ctx.stroke();

         // Tooltip if hovered
         if (isHovered) {
             ctx.save();
             ctx.translate(0, -hangarH / 2 - 80);
             
             const text = `${hangar.currentCount}/50`;
             ctx.font = "bold 28px Inter, sans-serif";
             const tw = ctx.measureText(text).width;
             const pad = 25;
             
             ctx.shadowColor = "rgba(239, 68, 68, 0.8)";
             ctx.shadowBlur = 15;
             ctx.fillStyle = "rgba(15, 23, 42, 0.95)";
             ctx.strokeStyle = "#ef4444";
             ctx.lineWidth = 2;
             ctx.beginPath();
             ctx.roundRect(-tw/2 - pad, -40, tw + pad*2, 60, 12);
             ctx.fill();
             ctx.stroke();
             
             ctx.shadowBlur = 0;
             ctx.fillStyle = "#ffffff";
             ctx.textAlign = "center";
             ctx.textBaseline = "middle";
             ctx.fillText(text, 0, -10);

             // Label Above "MAIN BATTLE TANK"
             ctx.font = "bold 16px Inter, sans-serif";
             ctx.fillStyle = "#ef4444";
             ctx.fillText("MAIN BATTLE TANK", 0, -55);
             
             ctx.restore();
         }

         ctx.restore();
      });

      ctx.restore();
   }
}
