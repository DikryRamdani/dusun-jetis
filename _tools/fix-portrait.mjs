import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const files = [
  {
    input:  'public/Image/Bengkel Andong Pak Hono_/DSC03541.JPG',
    output: 'public/Image/Bengkel Andong Pak Hono_/DSC03541.webp',
  },
  {
    input:  'public/Image/Bengkel Andong Pak Hono_/DSC03546.JPG',
    output: 'public/Image/Bengkel Andong Pak Hono_/DSC03546.webp',
  },
];

for (const { input, output } of files) {
  if (fs.existsSync(output)) fs.unlinkSync(output);

  await sharp(input)
    .rotate()
    .resize({ width: 1200, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(output);

  const inSize  = (fs.statSync(input).size  / 1024).toFixed(0);
  const outSize = (fs.statSync(output).size / 1024).toFixed(0);
  console.log(`✅ ${path.basename(output)} — ${inSize}KB → ${outSize}KB`);

  const meta = await sharp(output).metadata();
  console.log(`   Dimensi: ${meta.width} x ${meta.height} px`);
}
