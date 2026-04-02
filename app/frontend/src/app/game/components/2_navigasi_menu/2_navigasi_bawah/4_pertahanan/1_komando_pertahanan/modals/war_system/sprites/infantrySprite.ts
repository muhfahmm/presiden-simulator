/**
 * Infantry Sprite — draws a top-down infantry squad on canvas
 */
export const drawInfantry = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  angle: number,
  color: string = "#22c55e"
) => {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(angle);

  // Soldier body
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(0, 0, 5, 0, Math.PI * 2);
  ctx.fill();

  // Helmet highlight
  ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
  ctx.beginPath();
  ctx.arc(-1, -1, 2, 0, Math.PI * 2);
  ctx.fill();

  // Rifle
  ctx.strokeStyle = color;
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(3, 0);
  ctx.lineTo(12, 0);
  ctx.stroke();

  // Second soldier (behind)
  ctx.fillStyle = color;
  ctx.globalAlpha = 0.7;
  ctx.beginPath();
  ctx.arc(-7, -4, 4, 0, Math.PI * 2);
  ctx.fill();

  // Third soldier
  ctx.beginPath();
  ctx.arc(-7, 4, 4, 0, Math.PI * 2);
  ctx.fill();

  ctx.globalAlpha = 1;
  ctx.restore();
};
