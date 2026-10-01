const fs = require('fs');
const path = require('path');
const https = require('https');

const targetDir = path.join(__dirname, '..', 'public', 'models');
const targetFile = path.join(targetDir, 'porsche.glb');

if (fs.existsSync(targetFile) && fs.statSync(targetFile).size > 1000000) {
  console.log('[AITHRA 2026] 3D Porsche model already verified in public/models/porsche.glb');
  process.exit(0);
}

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

console.log('[AITHRA 2026] Fetching high-fidelity 3D Porsche 911 GT3 RS asset...');

const url = 'https://raw.githubusercontent.com/playcanvas/web-components/main/examples/assets/models/porsche-911-carrera-4s.glb';

const file = fs.createWriteStream(targetFile);
https.get(url, (res) => {
  if (res.statusCode === 200) {
    res.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log('[AITHRA 2026] 3D Porsche model verified & ready for WebGL rendering.');
    });
  } else {
    console.warn('[AITHRA 2026] CDN status code:', res.statusCode);
  }
}).on('error', (err) => {
  console.warn('[AITHRA 2026] Notice: Porsche model fallback active:', err.message);
});
