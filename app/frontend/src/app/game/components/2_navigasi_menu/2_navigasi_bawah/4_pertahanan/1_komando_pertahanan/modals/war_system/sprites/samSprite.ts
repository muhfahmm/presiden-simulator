/**
 * SAM (Surface-to-Air Missile) Sprite — draws a mobile SAM system on canvas
 */
export const drawSAM = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  angle: number,
  color: string = "#06b6d4"
) => {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(angle);

  // Truck body
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.roundRect(-12, -6, 24, 12, 2);
  ctx.fill();

  // Missile tubes (4 tubes)
  ctx.strokeStyle = "#164e63";
  ctx.lineWidth = 2;
  for (let i = -3; i <= 3; i += 2) {
    ctx.beginPath();
    ctx.moveTo(0, i);
    ctx.lineTo(14, i);
    ctx.stroke();
  }

  // Radar dish
  ctx.fillStyle = "#0e7490";
  ctx.beginPath();
  ctx.arc(-8, 0, 3, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = "#67e8f9";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.arc(-8, 0, 3, -0.5, 0.5);
  ctx.stroke();

  // Wheels
  ctx.fillStyle = "#0c4a6e";
  ctx.beginPath();
  ctx.arc(-10, -6, 2.5, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(-10, 6, 2.5, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(8, -6, 2.5, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(8, 6, 2.5, 0, Math.PI * 2);
  ctx.fill();

  ctx.restore();
};
