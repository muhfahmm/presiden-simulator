const fs = require('fs');

function quadBezier(t, p0, p1, p2) {
  const x = (1 - t) * (1 - t) * p0[0] + 2 * (1 - t) * t * p1[0] + t * t * p2[0];
  const y = (1 - t) * (1 - t) * p0[1] + 2 * (1 - t) * t * p1[1] + t * t * p2[1];
  return { lon: parseFloat(x.toFixed(2)), lat: parseFloat(y.toFixed(2)) };
}

function cubicBezier(t, p0, p1, p2, p3) {
  const x = Math.pow(1 - t, 3) * p0[0] + 3 * Math.pow(1 - t, 2) * t * p1[0] + 3 * (1 - t) * t * t * p2[0] + Math.pow(t, 3) * p3[0];
  const y = Math.pow(1 - t, 3) * p0[1] + 3 * Math.pow(1 - t, 2) * t * p1[1] + 3 * (1 - t) * t * t * p2[1] + Math.pow(t, 3) * p3[1];
  return { lon: parseFloat(x.toFixed(2)), lat: parseFloat(y.toFixed(2)) };
}

// 1. Bangladesh -> Myanmar (Utara)
const b_p0 = [91.80, 22.33];
const b_p1 = [91.80, 21.00]; // control in water
const b_p2 = [92.90, 20.15];
const bangla_path = [];
for (let t = 0; t <= 1.05; t += 0.05) {
  bangla_path.push(quadBezier(t > 1 ? 1 : t, b_p0, b_p1, b_p2));
}

// 2. Myanmar (Utara) -> Myanmar (Selatan)
const m_p0 = [92.90, 20.15];
const m_p1 = [91.50, 18.50]; // Control 1 (Pulled Westward into sea)
const m_p2 = [93.50, 15.20]; // Control 2 (South of Cape)
const m_p3 = [96.20, 16.75];
const myanmar_path = [];
for (let t = 0; t <= 1.04; t += 0.04) {
  myanmar_path.push(cubicBezier(t > 1 ? 1 : t, m_p0, m_p1, m_p2, m_p3));
}

const output = {
  bangla: bangla_path,
  myanmar: myanmar_path
};

fs.writeFileSync('coords_utf8.json', JSON.stringify(output, null, 2), 'utf8');
console.log("Saved to coords_utf8.json");
