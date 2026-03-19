const fs = require('fs');
const path = require('path');

const baseDir = __dirname;
const asiaDir = path.join(baseDir, 'regions', 'asia');
const eropaDir = path.join(baseDir, 'regions', 'eropa');
const namDir = path.join(baseDir, 'regions', 'amerika_utara');

const indonesiaPath = path.join(asiaDir, 'indonesia.ts');
const islandiaPath = path.join(eropaDir, 'islandia.ts');
const usaPath = path.join(namDir, 'usa.ts');

const indonesiaContent = fs.readFileSync(indonesiaPath, 'utf-8');
const islandiaContent = fs.readFileSync(islandiaPath, 'utf-8');
const usaContent = fs.readFileSync(usaPath, 'utf-8');

const indoMatch = indonesiaContent.match(/export const IndonesiaRoutes = (\{[\s\S]*?\});/);
const IndonesiaRoutes = eval(`(${indoMatch[1]})`);
IndonesiaRoutes["United States"] = [
  "Jakarta", "Singapore", "Selat Malaka", "Aceh", "Steer SCS South", 
  "Steer SCS East", "Approach Japan", "Steer Japan 2", "Steer West Coast", "United States"
];
IndonesiaRoutes["Amerika Serikat"] = IndonesiaRoutes["United States"];

const islandiaMatch = islandiaContent.match(/export const IslandiaRoutes = (\{[\s\S]*?\});/);
const IslandiaRoutes = eval(`(${islandiaMatch[1]})`);
IslandiaRoutes["United States"] = [
  "Islandia", "Steer North Atlantic", "Steer East Coast", "United States"
];
IslandiaRoutes["Amerika Serikat"] = IslandiaRoutes["United States"];

const usaRoutesMatch = usaContent.match(/export const UsaRoutes = (\{[\s\S]*?\});/);
const UsaRoutes = eval(`(${usaRoutesMatch[1]})`);

UsaRoutes["Indonesia"] = [
  "United States", "Steer West Coast", "Steer Japan 2", "Approach Japan", 
  "Steer SCS East", "Steer SCS South", "Aceh", "Selat Malaka", "Singapore", "Jakarta"
];
UsaRoutes["Islandia"] = [
  "United States", "Steer East Coast", "Steer North Atlantic", "Islandia"
];

const indoWp = indonesiaContent.match(/export const IndonesiaWaypoints = (\{[\s\S]*?\});/);
fs.writeFileSync(indonesiaPath, `export const IndonesiaRoutes = ${JSON.stringify(IndonesiaRoutes, null, 2)};\n\nexport const IndonesiaWaypoints = ${indoWp[1]};\n`);

const islWp = islandiaContent.match(/export const IslandiaWaypoints = (\{[\s\S]*?\});/);
fs.writeFileSync(islandiaPath, `export const IslandiaRoutes = ${JSON.stringify(IslandiaRoutes, null, 2)};\n\nexport const IslandiaWaypoints = ${islWp[1]};\n`);

const usaWp = usaContent.match(/export const UsaWaypoints = (\{[\s\S]*?\});/);
fs.writeFileSync(usaPath, `export const UsaRoutes = ${JSON.stringify(UsaRoutes, null, 2)};\n\nexport const UsaWaypoints = ${usaWp[1]};\n`);

console.log("Global mesh bridges established between Indo, Islandia, and USA.");
