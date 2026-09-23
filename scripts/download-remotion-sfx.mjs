// Downloads the Remotion sound effects listed in sounds/remotion-sfx/catalog.json
// into that folder. Each file must come back as a real WAV (a RIFF/WAVE header),
// otherwise the script exits with an error rather than saving a bad file.
//
// Usage: node scripts/download-remotion-sfx.mjs

import fs from 'fs';
import https from 'https';
import path from 'path';
import {fileURLToPath} from 'url';

const folder = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  '..',
  'sounds',
  'remotion-sfx'
);
const catalog = JSON.parse(
  fs.readFileSync(path.join(folder, 'catalog.json'), 'utf8')
);

const download = (url, redirectsLeft = 5) =>
  new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        if (
          res.statusCode >= 300 &&
          res.statusCode < 400 &&
          res.headers.location &&
          redirectsLeft > 0
        ) {
          res.resume();
          resolve(
            download(new URL(res.headers.location, url).href, redirectsLeft - 1)
          );
          return;
        }
        if (res.statusCode !== 200) {
          res.resume();
          reject(new Error(`HTTP ${res.statusCode} for ${url}`));
          return;
        }
        const chunks = [];
        res.on('data', (chunk) => chunks.push(chunk));
        res.on('end', () => resolve(Buffer.concat(chunks)));
        res.on('error', reject);
      })
      .on('error', reject);
  });

let failed = 0;
for (const sound of catalog) {
  try {
    const data = await download(sound.source);
    const isWav =
      data.length > 44 &&
      data.toString('ascii', 0, 4) === 'RIFF' &&
      data.toString('ascii', 8, 12) === 'WAVE';
    if (!isWav) {
      throw new Error(`${sound.source} did not return a WAV file`);
    }
    fs.writeFileSync(path.join(folder, sound.file), data);
    console.log(`✔ ${sound.file} (${(data.length / 1024).toFixed(0)} KB)`);
  } catch (err) {
    failed++;
    console.error(`✘ ${sound.file}: ${err.message}`);
  }
}

console.log(`\n${catalog.length - failed} of ${catalog.length} downloaded.`);
if (failed > 0) {
  process.exit(1);
}
