const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.ts')) {
      results.push(file);
    }
  });
  return results;
}

const dir = 'c:\\fhm\\EM1\\app\\frontend\\src\\app\\database\\data\\countries\\region';
const files = walk(dir);

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  // Look for sektor_manufaktur block
  const manufakturPattern = /"sektor_manufaktur":\s*\{([\s\S]*?)\}/;
  const match = content.match(manufakturPattern);
  if (match) {
    let block = match[1];
    if (block.includes('"pengolahan_daging"')) {
      console.log(`Fixing ${file}`);
      // Remove pengolahan_daging and following comma/whitespace
      const newBlock = block.replace(/"pengolahan_daging":\s*\d+,?\s*/g, '');
      content = content.replace(block, newBlock);
      fs.writeFileSync(file, content);
    }
  }
});
