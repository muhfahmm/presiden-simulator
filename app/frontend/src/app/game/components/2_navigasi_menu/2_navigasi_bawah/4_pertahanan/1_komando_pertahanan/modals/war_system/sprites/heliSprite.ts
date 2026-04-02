/**
 * Helicopter Sprite — draws a top-down attack helicopter on canvas
 */
export const drawHeli = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  angle: number,
  color: string = "#22c55e"
) => {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(angle);

  // Body
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(12, 0);         // Nose
  ctx.lineTo(4, -3);
  ctx.lineTo(-6, -3);
  ctx.lineTo(-10, -2);       // Tail boom
  ctx.lineTo(-14, 0);        // Tail end
  ctx.lineTo(-10, 2);
  ctx.lineTo(-6, 3);
  ctx.lineTo(4, 3);
  ctx.closePath();
  ctx.fill();

  // Main rotor disc (spinning blur)
  ctx.fillStyle = "rgba(255, 255, 255, 0.12)";
  ctx.beginPath();
  ctx.arc(0, 0, 12, 0, Math.PI * 2);
  ctx.fill();

  // Rotor blade hints
  ctx.strokeStyle = "rgba(255, 255, 255, 0.25)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(-12, 0);
  ctx.lineTo(12, 0);
  ctx.moveTo(0, -12);
  ctx.lineTo(0, 12);
  ctx.stroke();

  // Cockpit
  ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
  ctx.beginPath();
  ctx.moveTo(12, 0);
  ctx.lineTo(6, -2);
  ctx.lineTo(6, 2);
  ctx.closePath();
  ctx.fill();

  // Tail rotor
  ctx.fillStyle = "rgba(255, 255, 255, 0.2)";
  ctx.beginPath();
  ctx.arc(-14, 0, 3, 0, Math.PI * 2);
  ctx.fill();

  // Stub wings (for weapons)
  ctx.fillStyle = color;
  ctx.globalAlpha = 0.7;
  ctx.beginPath();
  ctx.roundRect(-2, -7, 6, 2, 1);
  ctx.fill();
  ctx.beginPath();
  ctx.roundRect(-2, 5, 6, 2, 1);
  ctx.fill();
  ctx.globalAlpha = 1;

  ctx.restore();
};
