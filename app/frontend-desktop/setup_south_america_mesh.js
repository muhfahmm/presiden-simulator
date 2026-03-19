const fs = require('fs');
const path = require('path');

const dir = 'c:/fhm/EM4/app/frontend-desktop/src/app/game/trades/regions/amerika_selatan';

if (!fs.existsSync(dir)) fs.mkdirSync(dir);

const paraPath = path.join(dir, 'paraguay.ts');
if (fs.existsSync(paraPath)) fs.unlinkSync(paraPath);

const countryNodes = [
  { file: 'kolombia.ts', en: 'Colombia', id: 'Kolombia', var: 'Kolombia', coords: { lon: -75.5, lat: 10.4 }, route: { 'Venezuela': ['Colombia', 'Venezuela'] } },
  { file: 'venezuela.ts', en: 'Venezuela', id: 'Venezuela', var: 'Venezuela', coords: { lon: -66.88, lat: 10.48 }, route: { 'Guyana': ['Venezuela', 'Guyana'] } },
  { file: 'guyana.ts', en: 'Guyana', id: 'Guyana', var: 'Guyana', coords: { lon: -58.15, lat: 6.80 }, route: { 'Suriname': ['Guyana', 'Suriname'] } },
  { file: 'suriname.ts', en: 'Suriname', id: 'Suriname', var: 'Suriname', coords: { lon: -55.17, lat: 5.82 }, route: { 'French Guiana': ['Suriname', 'French Guiana'] } },
  { file: 'guyana_perancis.ts', en: 'French Guiana', id: 'Guyana Perancis', var: 'GuyanaPerancis', coords: { lon: -52.33, lat: 4.93 }, route: { 'Brazil': ['French Guiana', 'Steer Amazon Delta', 'Brazil'] } },
  { file: 'brasil.ts', en: 'Brazil', id: 'Brasil', var: 'Brasil', coords: { lon: -43.1, lat: -22.9 }, route: { 'Uruguay': ['Brazil', 'Steer Brazil East', 'Steer Brazil South', 'Uruguay'] } },
  { file: 'uruguay.ts', en: 'Uruguay', id: 'Uruguay', var: 'Uruguay', coords: { lon: -56.16, lat: -34.90 }, route: { 'Argentina': ['Uruguay', 'Argentina'] } },
  { file: 'argentina.ts', en: 'Argentina', id: 'Argentina', var: 'Argentina', coords: { lon: -58.38, lat: -34.60 }, route: { 'Chile': ['Argentina', 'Steer Argentina East', 'Steer Falklands', 'Steer Drake Passage', 'Steer Chile Central', 'Chile'] } },
  { file: 'chile.ts', en: 'Chile', id: 'Chile', var: 'Chile', coords: { lon: -72.0, lat: -33.45 }, route: { 'Peru': ['Chile', 'Peru'] } },
  { file: 'peru.ts', en: 'Peru', id: 'Peru', var: 'Peru', coords: { lon: -77.04, lat: -12.04 }, route: { 'Ecuador': ['Peru', 'Ecuador'] } },
  { file: 'ekuador.ts', en: 'Ecuador', id: 'Ekuador', var: 'Ekuador', coords: { lon: -80.5, lat: -2.18 }, route: { 'Colombia': ['Ecuador', 'Steer Ecuador West', 'Steer Colombia West', 'Colombia'] } },
  { file: 'bolivia.ts', en: 'Bolivia', id: 'Bolivia', var: 'Bolivia', coords: { lon: -68.12, lat: -16.50 }, route: {} } 
];

countryNodes.forEach(c => {
  const filePath = path.join(dir, c.file);
  const fContent = `export const ${c.var}Routes = ${JSON.stringify(c.route, null, 2)};

export const ${c.var}Waypoints = {
  "${c.en}": { "lon": ${c.coords.lon}, "lat": ${c.coords.lat} }${c.id !== c.en ? `,\n  "${c.id}": { "lon": ${c.coords.lon}, "lat": ${c.coords.lat} }` : ''}
};
`;
  fs.writeFileSync(filePath, fContent);
  console.log(`Updated ${c.file}`);
});

let indexImports = '';
let indexExports = 'export const amerikaSelatanRoutes = {\n';
let indexWaypoints = 'export const amerikaSelatanCoastal = {\n';

countryNodes.forEach(tc => {
  indexImports += `import { ${tc.var}Routes, ${tc.var}Waypoints } from "./${tc.file.replace('.ts', '')}";\n`;
  indexExports += `  "${tc.en}": ${tc.var}Routes,\n  "${tc.id}": ${tc.var}Routes,\n`;
  indexWaypoints += `  ...${tc.var}Waypoints,\n`;
});

indexExports += '};\n';
indexWaypoints += '  ...amerikaSelatanWaypoints\n};\n';

const indexFileContent = `import { amerikaSelatanWaypoints, hiddenWaypoints } from "./_steering";
${indexImports}
${indexExports}
${indexWaypoints}
export const amerikaSelatanHidden = hiddenWaypoints;
`;

fs.writeFileSync(path.join(dir, '_index.ts'), indexFileContent);
console.log("Updated mesh index!");
LinePlaceholder: true
