/**
 * Tank Sprite — draws a top-down tank on canvas
 */
export const drawTank = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  angle: number,
  color: string = "#ef4444"
) => {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(angle);

  // Tank body (rectangle)
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.roundRect(-10, -6, 20, 12, 2);
  ctx.fill();

  // Turret (smaller centered)
  ctx.fillStyle = "#b91c1c";
  ctx.beginPath();
  ctx.roundRect(-5, -4, 10, 8, 2);
  ctx.fill();

  // Gun barrel
  ctx.strokeStyle = "#fca5a5";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(5, 0);
  ctx.lineTo(16, 0);
  ctx.stroke();

  // Tracks (two thin lines)
  ctx.strokeStyle = "#7f1d1d";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(-10, -6);
  ctx.lineTo(10, -6);
  ctx.moveTo(-10, 6);
  ctx.lineTo(10, 6);
  ctx.stroke();

  ctx.restore();
};
