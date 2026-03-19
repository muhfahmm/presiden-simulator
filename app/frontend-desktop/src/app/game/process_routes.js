const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, 'tradeRoutes.ts');
let content = fs.readFileSync(targetFile, 'utf8');

// Match the customTradeRoutes object
const match = content.match(/export const customTradeRoutes: Record<string, Record<string, string\[\]>> = (\{[\s\S]*?\n\});/);

if (!match) {
  console.error("Could not find customTradeRoutes");
  process.exit(1);
}

const customTradeRoutesString = match[1];
// Evaluate to get the object
const customTradeRoutes = eval('(' + customTradeRoutesString + ')');

// Now let's calculate the symmetric routes
const symmetricRoutes = JSON.parse(JSON.stringify(customTradeRoutes));

for (const origin in customTradeRoutes) {
  for (const destination in customTradeRoutes[origin]) {
    const route = customTradeRoutes[origin][destination];
    
    // Create reverse route if it doesn't exist
    if (!symmetricRoutes[destination]) {
      symmetricRoutes[destination] = {};
    }
    
    if (!symmetricRoutes[destination][origin]) {
      const reverseRoute = [...route].reverse();
      symmetricRoutes[destination][origin] = reverseRoute;
    }
  }
}

// Convert back to string
let newString = JSON.stringify(symmetricRoutes, null, 2);

// Pack array outputs into one line
newString = newString.replace(/\[\n([\s\S]*?)\n\s*\]/g, (match, inner) => {
  const elements = inner.split('\n').map(s => s.trim().replace(/,$/, ''));
  return '[' + elements.join(', ') + ']';
});

// Replace the original object with the new string
const newContent = content.replace(match[0], `export const customTradeRoutes: Record<string, Record<string, string[]>> = ${newString};`);

fs.writeFileSync(targetFile, newContent);
console.log("Updated tradeRoutes.ts with symmetric routes");
