/**
 * APC/IFV Sprite — draws a top-down APC on canvas
 */
export const drawAPC = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  angle: number,
  color: string = "#22c55e"
) => {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(angle);

  // Hull (box shape, slightly tapered front)
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(12, -5);       // Front right
  ctx.lineTo(14, 0);        // Front center (pointed)
  ctx.lineTo(12, 5);        // Front left
  ctx.lineTo(-12, 5);       // Rear left
  ctx.lineTo(-12, -5);      // Rear right
  ctx.closePath();
  ctx.fill();

  // Turret (small)
  ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
  ctx.beginPath();
  ctx.arc(2, 0, 4, 0, Math.PI * 2);
  ctx.fill();

  // Small gun
  ctx.strokeStyle = "rgba(255, 255, 255, 0.4)";
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(5, 0);
  ctx.lineTo(14, 0);
  ctx.stroke();

  // Tracks
  ctx.strokeStyle = "rgba(0, 0, 0, 0.4)";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(-12, -5);
  ctx.lineTo(12, -5);
  ctx.moveTo(-12, 5);
  ctx.lineTo(12, 5);
  ctx.stroke();

  // Wheels (6 wheels)
  ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
  for (let i = -8; i <= 8; i += 8) {
    ctx.beginPath();
    ctx.arc(i, -5, 2, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(i, 5, 2, 0, Math.PI * 2);
    ctx.fill();
  }

  ctx.restore();
};
