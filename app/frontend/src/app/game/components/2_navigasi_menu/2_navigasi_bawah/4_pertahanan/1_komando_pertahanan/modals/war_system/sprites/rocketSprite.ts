/**
 * Rocket Launcher (MLRS) Sprite — draws a top-down MLRS on canvas
 */
export const drawRocket = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  angle: number,
  color: string = "#f97316"
) => {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(angle);

  // Truck bed
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.roundRect(-14, -7, 28, 14, 2);
  ctx.fill();

  // Launcher box (multiple tubes)
  ctx.fillStyle = "#9a3412";
  ctx.beginPath();
  ctx.roundRect(-2, -6, 18, 12, 1);
  ctx.fill();

  // Rocket tubes (6 tubes)
  ctx.strokeStyle = "#fdba74";
  ctx.lineWidth = 1.5;
  for (let row = -2; row <= 2; row += 2) {
    for (let col = 0; col <= 1; col++) {
      ctx.beginPath();
      ctx.moveTo(col * 6 + 2, row);
      ctx.lineTo(col * 6 + 16, row);
      ctx.stroke();
    }
  }

  // Cab
  ctx.fillStyle = "#ea580c";
  ctx.beginPath();
  ctx.roundRect(-14, -5, 10, 10, 2);
  ctx.fill();

  // Wheels
  ctx.fillStyle = "#431407";
  ctx.beginPath();
  ctx.arc(-10, -7, 2.5, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(-10, 7, 2.5, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(8, -7, 2.5, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(8, 7, 2.5, 0, Math.PI * 2);
  ctx.fill();

  ctx.restore();
};
