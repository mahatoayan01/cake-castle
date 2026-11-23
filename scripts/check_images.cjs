const fs = require('fs');
const path = require('path');

const menuPath = path.join(__dirname, '../src/data/menu.js');
const content = fs.readFileSync(menuPath, 'utf8');

const matches = [...content.matchAll(/image:\s*['"]([^'"]+)['"]/g)].map(m => m[1]);
console.log('Total menu images referenced:', matches.length);

const publicDir = path.join(__dirname, '../public');
let allExist = true;

matches.forEach(imgPath => {
  const fullPath = path.join(publicDir, imgPath);
  const exists = fs.existsSync(fullPath);
  const size = exists ? (fs.statSync(fullPath).size / 1024).toFixed(1) + ' KB' : 'MISSING';
  console.log(` - ${imgPath.padEnd(30)}: exists=${exists} (${size})`);
  if (!exists) allExist = false;
});

console.log('\nAll menu images exist locally:', allExist);
if (!allExist) process.exit(1);
