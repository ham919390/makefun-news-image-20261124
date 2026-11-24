// THE GLOBAL LEDGER — news-image-20261124 entry (Node 22, standard library only).
// The front page is the entry.png beside this file; the program copies it to
// /output/entry.png, checking first that it exists and is not empty, and
// confirming the copy landed at the same size.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const source = new URL('./entry.png', import.meta.url);
if (!existsSync(source)) {
  throw new Error('entry.png is missing from the repository');
}
const sourceSize = statSync(source).size;
if (sourceSize === 0) {
  throw new Error('entry.png is empty');
}
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
const dest = join(outDir, 'entry.png');
copyFileSync(source, dest);
if (statSync(dest).size !== sourceSize) {
  throw new Error('entry.png did not copy completely');
}
