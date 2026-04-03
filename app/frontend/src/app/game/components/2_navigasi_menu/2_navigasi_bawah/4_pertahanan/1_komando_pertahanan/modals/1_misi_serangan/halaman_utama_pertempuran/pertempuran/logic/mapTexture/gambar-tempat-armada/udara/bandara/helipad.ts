/**
 * Helipad Drawing Utility
 * Renders high-detail tactical helipads with 'H' icons and perimeter lights.
 */

export class HelipadEngine {
   /**
    * Draws a high-detail tactical helipad
    */
   static drawHelipad(ctx: CanvasRenderingContext2D, x: number, y: number, zoom: number): void {
      ctx.save();
      ctx.translate(x, y);

      const radius = 150;

      // 1. CONCRETE BASE (Grid circle)
      ctx.fillStyle = '#475569';
      ctx.beginPath();
      ctx.arc(0, 0, radius, 0, Math.PI * 2);
      ctx.fill();

      // Concrete pattern (Border)
      ctx.strokeStyle = '#1e293b'; ctx.lineWidth = 4;
      ctx.stroke();

      // 2. INNER BORDER (Safety Circle)
      ctx.strokeStyle = '#facc15'; ctx.lineWidth = 6;
      ctx.beginPath();
      ctx.arc(0, 0, radius - 20, 0, Math.PI * 2);
      ctx.stroke();

      // 3. TACTICAL 'H' ICON
      ctx.fillStyle = '#ffffff';
      const hSide = 80;
      const hThickness = 20;

      // Left bar
      ctx.fillRect(-hSide / 2, -hSide / 2, hThickness, hSide);
      // Right bar
      ctx.fillRect(hSide / 2 - hThickness, -hSide / 2, hThickness, hSide);
      // Center bar
      ctx.fillRect(-hSide / 2, -hThickness / 2, hSide, hThickness);

      // 4. PERIMETER LIGHTS (Teal/Green)
      const numLights = 8;
      ctx.shadowBlur = 10;
      ctx.shadowColor = '#10b981';
      ctx.fillStyle = '#10b981';
      
      for (let i = 0; i < numLights; i++) {
         const angle = (i / numLights) * Math.PI * 2;
         const lx = Math.cos(angle) * (radius - 10);
         const ly = Math.sin(angle) * (radius - 10);
         ctx.beginPath();
         ctx.arc(lx, ly, 6, 0, Math.PI * 2);
         ctx.fill();
      }
      ctx.shadowBlur = 0;

      ctx.restore();
   }
}
