const fs = require('fs');
const path = require('path');
const https = require('https');
const sharp = require('../node_modules/sharp');

const targetDir = path.join(__dirname, '../public/images');
const gmapsSrcDir = 'C:\\Users\\ayanm\\.vscode\\extensions\\google.google-antigravity-1.13.0\\scratch\\photos';

function downloadFile(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadFile(res.headers.location).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed to download ${url}: status ${res.statusCode}`));
      }
      const chunks = [];
      res.on('data', chunk => chunks.push(chunk));
      res.on('end', () => resolve(Buffer.concat(chunks)));
      res.on('error', reject);
    }).on('error', reject);
  });
}

async function fixImages() {
  // Fix gmaps-counter-3.webp size to be under 200 KB
  const srcPath = path.join(gmapsSrcDir, 'gmaps_photo_3.jpg');
  const destPath = path.join(targetDir, 'gmaps-counter-3.webp');
  await sharp(srcPath)
    .resize({ width: 850, withoutEnlargement: true })
    .webp({ quality: 75 })
    .toFile(destPath);
  console.log(`Re-compressed gmaps-counter-3.webp: ${(fs.statSync(destPath).size / 1024).toFixed(1)} KB`);

  // Fix white forest cake
  const whiteForestUrl = 'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?auto=format&fit=crop&w=800&q=80';
  const wfBuffer = await downloadFile(whiteForestUrl);
  const wfDest = path.join(targetDir, 'white-forest-cake.webp');
  await sharp(wfBuffer)
    .resize({ width: 800, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(wfDest);
  console.log(`Processed white-forest-cake.webp: ${(fs.statSync(wfDest).size / 1024).toFixed(1)} KB`);
}

fixImages().then(() => console.log('Fixes completed successfully!')).catch(console.error);
