/**
 * Artillery Sprite — draws a top-down artillery piece on canvas
 */
export const drawArtillery = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  angle: number,
  color: string = "#f59e0b"
) => {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(angle);

  // Base platform
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.roundRect(-8, -7, 16, 14, 3);
  ctx.fill();

  // Gun barrel (long)
  ctx.strokeStyle = "#92400e";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(4, 0);
  ctx.lineTo(20, 0);
  ctx.stroke();

  // Barrel tip (muzzle brake)
  ctx.strokeStyle = "#78350f";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(19, -2);
  ctx.lineTo(19, 2);
  ctx.stroke();

  // Wheels
  ctx.fillStyle = "#451a03";
  ctx.beginPath();
  ctx.arc(-6, -7, 3, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(-6, 7, 3, 0, Math.PI * 2);
  ctx.fill();

  // Shield plate
  ctx.fillStyle = "rgba(255,255,255,0.15)";
  ctx.beginPath();
  ctx.roundRect(0, -6, 3, 12, 1);
  ctx.fill();

  ctx.restore();
};
