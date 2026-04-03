/**
 * Bandara (Airport) Drawing Utility
 * Renders high-detail runways, taxiways, and terminal buildings.
 */

export class BandaraEngine {
   /**
    * Draws the main tactical airfield
    */
   static drawAirfield(ctx: CanvasRenderingContext2D, x: number, y: number, zoom: number): void {
      ctx.save();
      ctx.translate(x, y);

      const runwayLen = 5000;
      const runwayWidth = 250;
      const spacingY = 400; // Spacing between parallel runways
      const numRunways = 5;

      for (let rIdx = 0; rIdx < numRunways; rIdx++) {
         const yOff = rIdx * spacingY - ((numRunways - 1) * spacingY) / 2;
         ctx.save();
         ctx.translate(0, yOff);

         // 1. MAIN RUNWAY (Dark Asphalt)
         ctx.fillStyle = '#1e293b';
         ctx.fillRect(-runwayLen / 2, -runwayWidth / 2, runwayLen, runwayWidth);
         
         // Runway Outline
         ctx.strokeStyle = '#334155'; ctx.lineWidth = 6;
         ctx.strokeRect(-runwayLen / 2, -runwayWidth / 2, runwayLen, runwayWidth);

         // 2. RUNWAY THRESHOLD ("Piano Keys")
         ctx.fillStyle = '#ffffff';
         const drawThreshold = (tx: number) => {
            const keyW = 20; const keyH = 120;
            for (let i = 0; i < 10; i++) {
               ctx.fillRect(tx + (i * 30), -keyH / 2, keyW, keyH);
            }
         };
         drawThreshold(-runwayLen / 2 + 50); // Left
         drawThreshold(runwayLen / 2 - 350); // Right

         // 3. CENTER LINE (Dashed Yellow)
         ctx.strokeStyle = '#facc15'; ctx.lineWidth = 8;
         ctx.setLineDash([200, 150]);
         ctx.beginPath();
         ctx.moveTo(-runwayLen / 2 + 400, 0); ctx.lineTo(runwayLen / 2 - 400, 0);
         ctx.stroke();
         ctx.setLineDash([]);

         // 3.1 TAXIWAY TO HANGAR (NEW MOD)
         const hangarX = runwayLen / 2 + 300;
         const hangarW = 400; const hangarH = 300;
         
         ctx.strokeStyle = '#1e293b'; ctx.lineWidth = 30;
         ctx.beginPath();
         ctx.moveTo(runwayLen / 2, 0);
         ctx.lineTo(hangarX - hangarW / 2, 0);
         ctx.stroke();

         // 3.2 HANGAR BOX (NEW MOD)
         ctx.fillStyle = '#0f172a';
         ctx.fillRect(hangarX - hangarW / 2, -hangarH / 2, hangarW, hangarH);
         ctx.strokeStyle = '#334155'; ctx.lineWidth = 4;
         ctx.strokeRect(hangarX - hangarW / 2, -hangarH / 2, hangarW, hangarH);
         
         // Hangar Detail (Tactical stripes on roof)
         ctx.strokeStyle = 'rgba(255,255,255,0.05)'; ctx.lineWidth = 2;
         for (let hx = -hangarW/2 + 50; hx < hangarW/2; hx += 100) {
            ctx.beginPath();
            ctx.moveTo(hangarX + hx, -hangarH/2);
            ctx.lineTo(hangarX + hx, hangarH/2);
            ctx.stroke();
         }

         ctx.restore();
      }

      // 4. TAXIWAY & TERMINAL (Placed below the runway stack)
      const stackBottom = ((numRunways - 1) * spacingY) / 2 + runwayWidth / 2;

      // Taxiway
      ctx.fillStyle = '#1e293b';
      ctx.fillRect(-600, stackBottom, 1200, 400);
      ctx.strokeStyle = '#334155'; ctx.strokeRect(-600, stackBottom, 1200, 400);

      // 5. TERMINAL BUILDINGS
      ctx.fillStyle = '#0f172a';
      // Main Terminal (Larger)
      ctx.fillRect(-800, stackBottom + 400, 1600, 400);
      ctx.strokeStyle = '#475569'; ctx.strokeRect(-800, stackBottom + 400, 1600, 400);
      
      // Control Tower (Taller)
      ctx.fillStyle = '#1e293b';
      ctx.fillRect(500, stackBottom + 500, 150, 150);
      ctx.strokeStyle = '#ef4444'; // Red lights on tower
      ctx.strokeRect(500, stackBottom + 500, 150, 150);
      
      // Tower Antennas
      ctx.beginPath();
      ctx.moveTo(575, stackBottom + 500); ctx.lineTo(575, stackBottom + 350);
      ctx.stroke();

      ctx.restore();
   }
}
