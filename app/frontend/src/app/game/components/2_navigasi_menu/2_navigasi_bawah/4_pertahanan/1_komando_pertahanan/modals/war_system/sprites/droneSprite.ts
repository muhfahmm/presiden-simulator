/**
 * Drone Sprite — draws a top-down drone on canvas
 */
export const drawDrone = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  angle: number,
  color: string = "#a855f7"
) => {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(angle);

  // Body
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(10, 0);        // Nose
  ctx.lineTo(3, -2);
  ctx.lineTo(-2, -8);       // Wing port
  ctx.lineTo(-5, -7);       // Wing tip port
  ctx.lineTo(-3, -2);
  ctx.lineTo(-8, -1);       // Tail port
  ctx.lineTo(-10, -4);      // Tail fin port
  ctx.lineTo(-10, 0);
  ctx.lineTo(-10, 4);       // Tail fin starboard
  ctx.lineTo(-8, 1);        // Tail starboard
  ctx.lineTo(-3, 2);
  ctx.lineTo(-5, 7);        // Wing tip starboard
  ctx.lineTo(-2, 8);        // Wing starboard
  ctx.lineTo(3, 2);
  ctx.closePath();
  ctx.fill();

  // Camera/sensor (nose)
  ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
  ctx.beginPath();
  ctx.arc(8, 0, 2, 0, Math.PI * 2);
  ctx.fill();

  // Propeller blur
  ctx.fillStyle = "rgba(255, 255, 255, 0.15)";
  ctx.beginPath();
  ctx.arc(-10, 0, 3, 0, Math.PI * 2);
  ctx.fill();

  ctx.restore();
};
