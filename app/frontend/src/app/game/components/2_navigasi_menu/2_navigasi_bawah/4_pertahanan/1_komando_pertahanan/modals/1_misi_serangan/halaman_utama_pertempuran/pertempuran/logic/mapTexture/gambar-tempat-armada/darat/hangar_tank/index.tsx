
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
      targetArmada: any = null
   ): void {
      ctx.save();
      ctx.translate(x, y);

      const hangarW = 700;
      const hangarH = 450;
      const spacingX = 850;
      const numHangars = 3;
      const totalWidth = (numHangars - 1) * spacingX;

      let hoveredHangar = false;

      for (let i = 0; i < numHangars; i++) {
         const xOff = (i * spacingX) - (totalWidth / 2);

         // Hover Detection (AABB)
         if (mousePos) {
            const isHovered = (
               mousePos.x >= x + xOff - hangarW / 2 &&
               mousePos.x <= x + xOff + hangarW / 2 &&
               mousePos.y >= y - hangarH / 2 &&
               mousePos.y <= y + hangarH / 2
            );
            if (isHovered) hoveredHangar = true;
         }

         ctx.save();
         ctx.translate(xOff, 0);

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

         ctx.restore();
      }

      // Draw Tooltip if any hangar is hovered
      if (hoveredHangar) {
         ctx.save();
         ctx.translate(0, -hangarH / 2 - 120);
         
         const total = targetArmada?.darat?.tank_tempur_utama || 0;
         const used = units.filter(u => u.side === 'enemy' && (u.type === 'tank_tempur_utama' || u.type === 'tank')).length;
         const text = `Main Battle Tank - (${used}/${total})`;
         
         ctx.font = "bold 32px Inter, sans-serif";
         const tw = ctx.measureText(text).width;
         const pad = 40;
         
         // Glow Effect
         ctx.shadowColor = "rgba(239, 68, 68, 0.8)";
         ctx.shadowBlur = 15;
         
         // Tooltip Box
         ctx.fillStyle = "rgba(15, 23, 42, 0.95)";
         ctx.strokeStyle = "#ef4444";
         ctx.lineWidth = 2;
         ctx.beginPath();
         ctx.roundRect(-tw/2 - pad, -40, tw + pad*2, 70, 12);
         ctx.fill();
         ctx.stroke();
         
         // Text
         ctx.shadowBlur = 0;
         ctx.fillStyle = "#ffffff";
         ctx.textAlign = "center";
         ctx.textBaseline = "middle";
         ctx.fillText(text, 0, -5);
         
         ctx.restore();
      }

      ctx.restore();
   }
}
