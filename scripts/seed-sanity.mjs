import fs from 'node:fs';
const copy = JSON.parse(fs.readFileSync(new URL('../src/content/copy/copy-deck.json', import.meta.url), 'utf8'));
console.log('Sanity seed helper loaded copy deck entries:', copy.snippets.length);
console.log('Use src/lib/seed.ts as source data for chapters, events, posts, and team.');
