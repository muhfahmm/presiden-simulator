/**
 * Jet Sprite — draws a top-down fighter jet on canvas
 */
export const drawJet = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  angle: number,
  color: string = "#ef4444"
) => {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(angle);

  // Fuselage
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(16, 0);          // Nose
  ctx.lineTo(4, -2);          // Body upper forward
  ctx.lineTo(-2, -2);         // Body mid upper
  ctx.lineTo(-4, -10);        // Wing tip (port)
  ctx.lineTo(-8, -10);        // Wing trailing (port)
  ctx.lineTo(-4, -2);         // Wing root (port)
  ctx.lineTo(-12, -2);        // Tail section upper
  ctx.lineTo(-14, -6);        // Tail fin (port)
  ctx.lineTo(-16, -6);        // Tail trailing (port)
  ctx.lineTo(-14, 0);         // Tail center
  ctx.lineTo(-16, 6);         // Tail trailing (starboard)
  ctx.lineTo(-14, 6);         // Tail fin (starboard)
  ctx.lineTo(-12, 2);         // Tail section lower
  ctx.lineTo(-4, 2);          // Wing root (starboard)
  ctx.lineTo(-8, 10);         // Wing trailing (starboard)
  ctx.lineTo(-4, 10);         // Wing tip (starboard)
  ctx.lineTo(-2, 2);          // Body mid lower
  ctx.lineTo(4, 2);           // Body lower forward
  ctx.closePath();
  ctx.fill();

  // Cockpit highlight
  ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
  ctx.beginPath();
  ctx.moveTo(16, 0);
  ctx.lineTo(8, -1.5);
  ctx.lineTo(8, 1.5);
  ctx.closePath();
  ctx.fill();

  // Engine glow (afterburner)
  ctx.fillStyle = "rgba(251, 146, 60, 0.7)";
  ctx.beginPath();
  ctx.ellipse(-16, 0, 4, 2, 0, 0, Math.PI * 2);
  ctx.fill();

  ctx.restore();
};
