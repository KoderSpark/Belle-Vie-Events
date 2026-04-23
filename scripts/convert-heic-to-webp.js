#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const SRC = path.resolve(__dirname, '..', 'src', 'assets');
const OUT = path.resolve(__dirname, '..', 'public', 'assets');

if (!fs.existsSync(OUT)) fs.mkdirSync(OUT, { recursive: true });

const files = fs.readdirSync(SRC).filter((f) => /\.heic$/i.test(f));
if (files.length === 0) {
  console.log('No HEIC files found in', SRC);
  process.exit(0);
}

(async () => {
  for (const f of files) {
    const inPath = path.join(SRC, f);
    const base = path.parse(f).name.replace(/\s+/g, '-').toLowerCase();
    const outName = `${base}.webp`;
    const outPath = path.join(OUT, outName);
    try {
      console.log(`Converting ${f} -> ${outName}`);
      await sharp(inPath)
        .webp({ quality: 85 })
        .toFile(outPath);
    } catch (err) {
      console.error('Failed converting', f, err);
    }
  }
  console.log('Done. WebP files written to', OUT);
})();
