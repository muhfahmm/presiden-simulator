/**
 * Bandara (Airport) Drawing Utility
 * Renders high-detail runways, taxiways, and terminal buildings.
 */

export class BandaraEngine {
   /**
    * Draws the main tactical airfield with hover interactions and capacity details
    */
   static drawAirfield(
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

      const runwayLen = 5000;
      const runwayWidth = 250;
      const spacingY = 450; // Spacing between parallel runways
      const numRunways = 7;
      const totalSpan = (numRunways - 1) * spacingY;

      const runwayConfigs = [
         { name: "Jet Stealth", key: "jet_tempur_siluman" },
         { name: "Jet Interceptor", key: "jet_tempur_interceptor" },
         { name: "Pesawat Pengebom", key: "pesawat_pengebom" },
         { name: "Pesawat Intai", key: "pesawat_pengintai" },
         { name: "Drone UAV", key: "drone_intai_uav" },
         { name: "Drone Kamikaze", key: "drone_kamikaze" },
         { name: "Pesawat Angkut", key: "pesawat_angkut" }
      ];

      let hoveredRunway: { y: number, name: string, used: number, total: number } | null = null;

      for (let rIdx = 0; rIdx < numRunways; rIdx++) {
         const yOff = rIdx * spacingY - totalSpan / 2;
         const config = runwayConfigs[rIdx] || { name: `P${rIdx + 1}`, key: "unknown" };

         // Hover Detection (AABB)
         if (mousePos) {
            const isHovered = (
               mousePos.x >= x - runwayLen / 2 &&
               mousePos.x <= x + runwayLen / 2 &&
               mousePos.y >= y + yOff - runwayWidth / 2 &&
               mousePos.y <= y + yOff + runwayWidth / 2
            );
            if (isHovered) {
               const total = targetArmada?.udara?.[config.key] || 0;
               const used = units.filter(u => u.side === 'enemy' && u.type === config.key).length;
               hoveredRunway = { y: yOff, name: config.name, used, total };
            }
         }

         ctx.save();
         ctx.translate(0, yOff);

         // 1. MAIN RUNWAY (Dark Asphalt)
         ctx.fillStyle = '#1e293b';
         ctx.fillRect(-runwayLen / 2, -runwayWidth / 2, runwayLen, runwayWidth);

         // Runway Outline
         ctx.strokeStyle = '#334155'; ctx.lineWidth = 6;
         ctx.strokeRect(-runwayLen / 2, -runwayWidth / 2, runwayLen, runwayWidth);

         // 2. RUNWAY THRESHOLDS ("Piano Keys") - Both ends
         ctx.fillStyle = '#ffffff';
         const drawThreshold = (tx: number) => {
            const keyW = 15; const keyH = 100;
            for (let i = 0; i < 8; i++) {
               ctx.fillRect(tx + (i * 25), -keyH / 2, keyW, keyH);
            }
         };
         drawThreshold(-runwayLen / 2 + 30); // Left
         drawThreshold(runwayLen / 2 - 230); // Right

         // 3. CENTER LINE (Dashed Yellow)
         ctx.strokeStyle = '#facc15'; ctx.lineWidth = 8;
         ctx.setLineDash([150, 100]);
         ctx.beginPath();
         ctx.moveTo(-runwayLen / 2 + 300, 0); ctx.lineTo(runwayLen / 2 - 300, 0);
         ctx.stroke();
         ctx.setLineDash([]);

         // 3.1 TAXIWAY TO HANGAR
         const hangarX = runwayLen / 2 + 250;
         const hangarW = 500; const hangarH = 400;

         ctx.strokeStyle = '#1e293b'; ctx.lineWidth = 20;
         ctx.beginPath();
         ctx.moveTo(runwayLen / 2, 0);
         ctx.lineTo(hangarX - hangarW / 2, 0);
         ctx.stroke();

         // 3.2 HANGAR BOX (Dark Tactical Box)
         ctx.fillStyle = '#0f172a';
         ctx.fillRect(hangarX - hangarW / 2, -hangarH / 2, hangarW, hangarH);
         ctx.strokeStyle = '#1e293b'; ctx.lineWidth = 3;
         ctx.strokeRect(hangarX - hangarW / 2, -hangarH / 2, hangarW, hangarH);

         ctx.restore();
      }

      // Draw Tooltip if hovered
      if (hoveredRunway) {
         ctx.save();
         ctx.translate(0, hoveredRunway.y - 180);
         
         const text = `${hoveredRunway.name} - (${hoveredRunway.used}/${hoveredRunway.total})`;
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
