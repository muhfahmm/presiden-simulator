const fs = require('fs');
const path = require('path');

const dir = __dirname;
const usaPath = path.join(dir, 'usa.ts');
const usaContent = fs.readFileSync(usaPath, 'utf-8');

const usaRoutesMatch = usaContent.match(/export const UsaRoutes = (\{[\s\S]*?\});/);
const UsaRoutes = eval(`(${usaRoutesMatch[1]})`);

// Setup basic internal links securely
UsaRoutes["Canada"] = [ "United States", "Canada" ];
UsaRoutes["Kanada"] = [ "United States", "Canada" ];
UsaRoutes["Mexico"] = [ "United States", "Mexico" ];
UsaRoutes["Meksiko"] = [ "United States", "Mexico" ];
UsaRoutes["Cuba"] = [ "United States", "Cuba" ];
UsaRoutes["Kuba"] = [ "United States", "Cuba" ];

// Rewrite UsaRoutes inside file first
const usaWp = usaContent.match(/export const UsaWaypoints = (\{[\s\S]*?\});/);
fs.writeFileSync(usaPath, `export const UsaRoutes = ${JSON.stringify(UsaRoutes, null, 2)};\n\nexport const UsaWaypoints = ${usaWp[1]};\n`);
console.log("Updated usa.ts with internal links.");

function reversePath(arr) {
  if (!arr) return [];
  return [...arr].reverse();
}

function mergePaths(pathA_to_Hub, Hub_to_pathB) {
  if (!pathA_to_Hub || !Hub_to_pathB) return [];
  for (let i = pathA_to_Hub.length - 1; i >= 0; i--) {
    const node = pathA_to_Hub[i];
    const indexInB = Hub_to_pathB.indexOf(node);
    if (indexInB !== -1) {
      const trimmedA = pathA_to_Hub.slice(0, i);
      const trimmedB = Hub_to_pathB.slice(indexInB);
      return [...trimmedA, ...trimmedB];
    }
  }
  return [...pathA_to_Hub, ...Hub_to_pathB];
}

const nameMap = {
  'usa': 'United States',
  'kanada': 'Canada',
  'meksiko': 'Mexico',
  'kuba': 'Cuba'
};

const files = fs.readdirSync(dir);
files.forEach(file => {
  if (!file.endsWith('.ts') || file === '_index.ts' || file === '_steering.ts' || file === 'usa.ts') return;

  const filePath = path.join(dir, file);
  const content = fs.readFileSync(filePath, 'utf-8');
  const countryKey = file.replace('.ts', '');

  let standardName = countryKey.charAt(0).toUpperCase() + countryKey.slice(1);
  if (nameMap[countryKey]) standardName = nameMap[countryKey];

  let XRoutes = {};
  const X_to_Hub = reversePath(UsaRoutes[standardName]);

  if (!X_to_Hub || X_to_Hub.length === 0) {
    console.warn(`WARNING: Missing UsaRoutes for [${standardName}]`);
    return;
  }

  for (const Y in UsaRoutes) {
    if (Y === standardName) continue;
    const Hub_to_Y = UsaRoutes[Y];
    if (Hub_to_Y) {
      XRoutes[Y] = mergePaths(X_to_Hub, Hub_to_Y);
    }
  }

  const outputObj = JSON.stringify(XRoutes, null, 2);
  const className = standardName.replace(/ /g, '').replace('(', '').replace(')', '');

  const wpMatch = content.match(/export const \w+Waypoints = (\{[\s\S]*?\});/);
  const wpText = wpMatch 
    ? `export const ${className}Waypoints = ${wpMatch[1]};` 
    : `export const ${className}Waypoints = {};`;

  const finalContent = `export const ${className}Routes = ${outputObj};\n\n${wpText}\n`;
  fs.writeFileSync(filePath, finalContent);
  console.log(`Successfully unified ${file}`);
});
