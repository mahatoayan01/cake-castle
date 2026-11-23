const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');
const sharp = require('../node_modules/sharp');

const targetDir = path.join(__dirname, '../public/images');
fs.mkdirSync(targetDir, { recursive: true });

// 1. Convert Google Maps photos
const gmapsSrcDir = 'C:\\Users\\ayanm\\.vscode\\extensions\\google.google-antigravity-1.13.0\\scratch\\photos';
const gmapsMap = [
  { src: 'gmaps_photo_1.jpg', dest: 'gmaps-storefront-1.webp' },
  { src: 'gmaps_photo_2.jpg', dest: 'gmaps-cake-display-2.webp' },
  { src: 'gmaps_photo_3.jpg', dest: 'gmaps-counter-3.webp' },
  { src: 'gmaps_photo_4.jpg', dest: 'gmaps-baked-goods-4.webp' },
];

async function convertGmaps() {
  for (const item of gmapsMap) {
    const srcPath = path.join(gmapsSrcDir, item.src);
    const destPath = path.join(targetDir, item.dest);
    if (fs.existsSync(srcPath)) {
      await sharp(srcPath)
        .resize({ width: 1000, withoutEnlargement: true })
        .webp({ quality: 82 })
        .toFile(destPath);
      const stat = fs.statSync(destPath);
      console.log(`[Google Maps] Processed ${item.dest}: ${(stat.size / 1024).toFixed(1)} KB`);
    } else {
      console.warn(`Source not found: ${srcPath}`);
    }
  }
}

// 2. Download and convert Web-Sample item photos
const webSamples = [
  { name: 'white-forest-cake.webp', url: 'https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=800&q=80' },
  { name: 'chocolate-mawa-cake.webp', url: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80' },
  { name: 'plum-cake.webp', url: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80' },
  { name: 'black-forest-pastry.webp', url: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&w=800&q=80' },
  { name: 'cupcakes-assorted.webp', url: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&w=800&q=80' },
  { name: 'chocolate-truffle-cake.webp', url: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80' },
  { name: 'butterscotch-cake.webp', url: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=80' },
  { name: 'pineapple-pastry.webp', url: 'https://images.unsplash.com/photo-1550617931-e17a7b70dce2?auto=format&fit=crop&w=800&q=80' },
  { name: 'red-velvet-pastry.webp', url: 'https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?auto=format&fit=crop&w=800&q=80' },
  { name: 'traditional-cookies.webp', url: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800&q=80' },
  { name: 'artisan-bread.webp', url: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80' },
  { name: 'custom-celebration-cake.webp', url: 'https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?auto=format&fit=crop&w=800&q=80' },
  { name: 'bakery-rusks.webp', url: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=800&q=80' },
  { name: 'bakery-hero.webp', url: 'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=1200&q=80' },
];

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

async function convertWebSamples() {
  for (const sample of webSamples) {
    try {
      const destPath = path.join(targetDir, sample.name);
      const buffer = await downloadFile(sample.url);
      await sharp(buffer)
        .resize({ width: 800, withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(destPath);
      const stat = fs.statSync(destPath);
      console.log(`[Web Sample] Processed ${sample.name}: ${(stat.size / 1024).toFixed(1)} KB`);
    } catch (e) {
      console.error(`Error processing ${sample.name}:`, e.message);
    }
  }
}

async function main() {
  console.log('Starting image conversion and download...');
  await convertGmaps();
  await convertWebSamples();
  console.log('All images processed successfully.');
}

main().catch(err => {
  console.error('Fatal:', err);
  process.exit(1);
});
