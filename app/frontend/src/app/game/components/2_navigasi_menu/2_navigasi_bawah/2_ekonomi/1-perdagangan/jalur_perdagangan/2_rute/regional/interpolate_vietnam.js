const fs = require('fs');

function cubicBezier(t, p0, p1, p2, p3) {
  const x = Math.pow(1 - t, 3) * p0[0] + 3 * Math.pow(1 - t, 2) * t * p1[0] + 3 * (1 - t) * Math.pow(t, 2) * p2[0] + Math.pow(t, 3) * p3[0];
  const y = Math.pow(1 - t, 3) * p0[1] + 3 * Math.pow(1 - t, 2) * t * p1[1] + 3 * (1 - t) * Math.pow(t, 2) * p2[1] + Math.pow(t, 3) * p3[1];
  return { lon: parseFloat(x.toFixed(2)), lat: parseFloat(y.toFixed(2)) };
}

const v_p0 = [107.15, 10.40];
const v_p1 = [111.00, 11.00]; // Pull East immediately 
const v_p2 = [110.00, 16.00]; // Stay East of central bulge
const v_p3 = [106.68, 20.85];

const path = [];
for (let t = 0; t <= 1.05; t += 0.07) {
  path.push(cubicBezier(t > 1 ? 1 : t, v_p0, v_p1, v_p2, v_p3));
}

const output = {
  vietnam_utara: path
};

fs.writeFileSync('coords_vietnam.json', JSON.stringify(output, null, 2), 'utf8');
console.log("Saved to coords_vietnam.json");
