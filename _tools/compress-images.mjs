import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const IMAGE_DIR = path.resolve(__dirname, '../public/Image');
const SUPPORTED_EXTS = ['.jpg', '.jpeg', '.JPG', '.JPEG', '.png', '.PNG'];

const CONFIG = {
  hero:     { width: 1920, quality: 82 },
  card:     { width: 1200, quality: 80 },
  portrait: { width: 800,  quality: 82 },
};

async function compressImage(inputPath, outputPath, config) {
  try {
    await sharp(inputPath)
      .rotate()                                                    // auto-apply EXIF orientation
      .resize({ width: config.width, withoutEnlargement: true })
      .webp({ quality: config.quality })
      .toFile(outputPath);

    const inputSize  = fs.statSync(inputPath).size;
    const outputSize = fs.statSync(outputPath).size;
    const savings    = (((inputSize - outputSize) / inputSize) * 100).toFixed(1);
    console.log(
      `✅ ${path.basename(inputPath).padEnd(50)} ` +
      `${(inputSize / 1024).toFixed(0).padStart(6)}KB → ` +
      `${(outputSize / 1024).toFixed(0).padStart(6)}KB  (hemat ${savings}%)`
    );
  } catch (err) {
    console.error(`❌ Gagal: ${inputPath}\n   ${err.message}`);
  }
}

async function walkDir(dir, config = CONFIG.card) {
  let entries;
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true });
  } catch {
    console.warn(`⚠️  Tidak bisa baca folder: ${dir}`);
    return;
  }

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await walkDir(fullPath, config);
    } else if (SUPPORTED_EXTS.includes(path.extname(entry.name))) {
      const outputPath = fullPath.replace(/\.[^.]+$/, '.webp');
      if (fs.existsSync(outputPath)) {
        console.log(`⏭️  Skip (sudah ada): ${path.basename(outputPath)}`);
        continue;
      }
      await compressImage(fullPath, outputPath, config);
    }
  }
}

// ── Hero image (prioritas 1920px) ──────────────────────────────────────────
const heroInput  = path.join(IMAGE_DIR, 'heroSection.png');
const heroOutput = path.join(IMAGE_DIR, 'heroSection.webp');
if (fs.existsSync(heroInput)) {
  if (!fs.existsSync(heroOutput)) {
    console.log('\n📸 Mengompresi hero image...');
    await compressImage(heroInput, heroOutput, CONFIG.hero);
  } else {
    console.log('⏭️  Skip: heroSection.webp sudah ada');
  }
}

// ── Foto kepala dusun (portrait) ────────────────────────────────────────────
const portraitInput  = path.join(IMAGE_DIR, 'Pak Dukuh dan peta_', 'IMG_9474.jpg');
const portraitOutput = path.join(IMAGE_DIR, 'Pak Dukuh dan peta_', 'IMG_9474.webp');
if (fs.existsSync(portraitInput)) {
  if (!fs.existsSync(portraitOutput)) {
    console.log('\n👤 Mengompresi foto kepala dusun...');
    await compressImage(portraitInput, portraitOutput, CONFIG.portrait);
  } else {
    console.log('⏭️  Skip: IMG_9474.webp sudah ada');
  }
}

// ── Semua subfolder lainnya ─────────────────────────────────────────────────
console.log('\n🗂️  Mengompresi semua gambar di subfolder...\n');
await walkDir(IMAGE_DIR, CONFIG.card);

console.log('\n🎉 Selesai! Semua gambar sudah dikompresi ke WebP.\n');
