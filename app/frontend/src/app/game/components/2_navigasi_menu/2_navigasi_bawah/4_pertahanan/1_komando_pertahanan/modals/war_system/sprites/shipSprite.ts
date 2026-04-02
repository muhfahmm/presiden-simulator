/**
 * Ship Sprite — draws a top-down warship on canvas
 */
export const drawShip = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  angle: number,
  color: string = "#ef4444"
) => {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(angle);

  // Hull (ship body — pointed bow)
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(18, 0);        // Bow (pointed front)
  ctx.lineTo(6, -7);        // Port upper
  ctx.lineTo(-14, -6);      // Stern port
  ctx.lineTo(-16, 0);       // Stern center
  ctx.lineTo(-14, 6);       // Stern starboard
  ctx.lineTo(6, 7);         // Starboard upper
  ctx.closePath();
  ctx.fill();

  // Superstructure (bridge)
  ctx.fillStyle = "#991b1b";
  ctx.beginPath();
  ctx.roundRect(-6, -4, 12, 8, 2);
  ctx.fill();

  // Radar mast
  ctx.strokeStyle = "#fca5a5";
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(-2, 0);
  ctx.lineTo(-2, -10);
  ctx.moveTo(-5, -8);
  ctx.lineTo(1, -8);
  ctx.stroke();

  // Wake trail (behind ship)
  ctx.strokeStyle = "rgba(255, 255, 255, 0.2)";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(-16, 0);
  ctx.lineTo(-28, -2);
  ctx.moveTo(-16, 0);
  ctx.lineTo(-28, 2);
  ctx.stroke();

  ctx.restore();
};
