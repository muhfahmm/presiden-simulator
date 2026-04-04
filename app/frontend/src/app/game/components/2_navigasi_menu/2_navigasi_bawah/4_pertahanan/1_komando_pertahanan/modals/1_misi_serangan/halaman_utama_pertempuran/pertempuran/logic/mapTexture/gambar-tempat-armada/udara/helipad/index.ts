/**
 * Helipad Drawing Utility
 * Renders high-detail tactical helipads with 'H' icons and perimeter lights.
 */

export class HelipadEngine {
   /**
    * Draws a high-detail tactical helipad with hover interaction and capacity details
    */
   static drawHelipad(
      ctx: CanvasRenderingContext2D, 
      x: number, 
      y: number, 
      zoom: number,
      mousePos?: { x: number, y: number },
      name: string = "Heli Serang",
      units: any[] = [],
      targetArmada: any = null,
      helipadState: any = null
   ): void {
      ctx.save();
      ctx.translate(x, y);

      const radius = 150;
      
      // Hover Detection (Circular)
      let isHovered = false;
      if (mousePos) {
         const dx = mousePos.x - x;
         const dy = mousePos.y - y;
         isHovered = (Math.sqrt(dx*dx + dy*dy) <= radius);
      }

      // 1. CONCRETE BASE (Grid circle)
      ctx.fillStyle = isHovered ? '#64748b' : '#475569';
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

      // Draw Tooltip if hovered
      if (isHovered) {
         ctx.save();
         ctx.translate(0, -radius - 40);
         
         const total = helipadState ? helipadState.maxCapacity : (targetArmada?.udara?.helikopter_serang || 0);
         const available = helipadState ? helipadState.currentCount : (targetArmada?.udara?.helikopter_serang || 0);
         const text = `${name} - (${available}/${total})`;
         
         ctx.font = "bold 28px Inter, sans-serif";
         const tw = ctx.measureText(text).width;
         const pad = 25;
         
         // Glow Effect
         ctx.shadowColor = "rgba(239, 68, 68, 0.8)";
         ctx.shadowBlur = 15;
         
         // Tooltip Box
         ctx.fillStyle = "rgba(15, 23, 42, 0.95)";
         ctx.strokeStyle = "#ef4444";
         ctx.lineWidth = 2;
         ctx.fillRect(-tw / 2 - 20, -60, tw + 40, 80);
         ctx.strokeRect(-tw / 2 - 20, -60, tw + 40, 80);
         
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
