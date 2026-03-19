const fs = require('fs');
const path = require('path');

const targetDir = 'c:/fhm/EM4/app/frontend-desktop/src/app/game/trades/regions/amerika_selatan';

const steeringContent = `export const amerikaSelatanWaypoints = {
  "Steer Panama South": { "lon": -79.5, "lat": 7.0 },
  "Steer Colombia West": { "lon": -80.0, "lat": 4.0 },
  "Steer Ecuador West": { "lon": -82.0, "lat": -2.0 },
  "Steer Peru West": { "lon": -80.0, "lat": -10.0 },
  "Steer Chile Central": { "lon": -75.0, "lat": -30.0 },
  "Steer Drake Passage": { "lon": -70.0, "lat": -58.0 },
  "Steer Falklands": { "lon": -55.0, "lat": -52.0 },
  "Steer Argentina East": { "lon": -55.0, "lat": -40.0 },
  "Steer Brazil South": { "lon": -45.0, "lat": -25.0 },
  "Steer Brazil East": { "lon": -33.0, "lat": -10.0 },
  "Steer Amazon Delta": { "lon": -48.0, "lat": 1.0 },
  "Steer Venezuela North": { "lon": -65.0, "lat": 11.0 }
};

export const hiddenWaypoints = ["Steer Panama South", "Steer Colombia West", "Steer Ecuador West", "Steer Peru West", "Steer Chile Central", "Steer Drake Passage", "Steer Falklands", "Steer Argentina East", "Steer Brazil South", "Steer Brazil East", "Steer Amazon Delta", "Steer Venezuela North"];
`;
fs.writeFileSync(path.join(targetDir, '_steering.ts'), steeringContent);

const staticCoords = {
  'Colombia': { lon: -74.08, lat: 4.60 },
  'Venezuela': { lon: -66.88, lat: 10.48 },
  'Guyana': { lon: -58.15, lat: 6.80 },
  'Suriname': { lon: -55.17, lat: 5.82 },
  'Ecuador': { lon: -78.47, lat: -0.18 },
  'Peru': { lon: -77.04, lat: -12.04 },
  'Paraguay': { lon: -57.57, lat: -25.26 },
  'Uruguay': { lon: -56.16, lat: -34.90 },
  'Bolivia': { lon: -68.12, lat: -16.50 },
  'Argentina': { lon: -58.38, lat: -34.60 },
  'Brazil': { lon: -47.88, lat: -15.79 },
  'Chile': { lon: -70.66, lat: -33.45 }
};

const targetCountries = [
  { file: 'brasil.ts', en: 'Brazil', id: 'Brasil', var: 'Brasil' },
  { file: 'argentina.ts', en: 'Argentina', id: 'Argentina', var: 'Argentina' },
  { file: 'kolombia.ts', en: 'Colombia', id: 'Kolombia', var: 'Kolombia' },
  { file: 'venezuela.ts', en: 'Venezuela', id: 'Venezuela', var: 'Venezuela' },
  { file: 'peru.ts', en: 'Peru', id: 'Peru', var: 'Peru' },
  { file: 'chile.ts', en: 'Chile', id: 'Chile', var: 'Chile' },
  { file: 'ekuador.ts', en: 'Ecuador', id: 'Ekuador', var: 'Ekuador' },
  { file: 'bolivia.ts', en: 'Bolivia', id: 'Bolivia', var: 'Bolivia' },
  { file: 'paraguay.ts', en: 'Paraguay', id: 'Paraguay', var: 'Paraguay' },
  { file: 'uruguay.ts', en: 'Uruguay', id: 'Uruguay', var: 'Uruguay' },
  { file: 'guyana.ts', en: 'Guyana', id: 'Guyana', var: 'Guyana' },
  { file: 'suriname.ts', en: 'Suriname', id: 'Suriname', var: 'Suriname' }
];

let indexImports = '';
let indexExports = 'export const amerikaSelatanRoutes = {\n';
let indexWaypoints = 'export const amerikaSelatanCoastal = {\n';

targetCountries.forEach(tc => {
  const defaults = staticCoords[tc.en];
  const lon = defaults ? defaults.lon : 0;
  const lat = defaults ? defaults.lat : 0;

  console.log(`Setting ${tc.en}: ${lon}, ${lat}`);

  const fContent = `export const ${tc.var}Routes = {};

export const ${tc.var}Waypoints = {
  "${tc.en}": { "lon": ${lon}, "lat": ${lat} },
  "${tc.id}": { "lon": ${lon}, "lat": ${lat} }
};
`;
  fs.writeFileSync(path.join(targetDir, tc.file), fContent);

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

fs.writeFileSync(path.join(targetDir, '_index.ts'), indexFileContent);
console.log("Done generating South America with robust static Fallbacks!");
LinePlaceholder: true
