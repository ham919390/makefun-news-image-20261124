// THE GLOBAL LEDGER — news-image-20261124 entry (Node 22, standard library only).
// The front page is the entry.png beside this file; the program copies it to
// /output/entry.png, checking first that it exists and is not empty, and
// confirming the copy landed at the same size.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync, readFileSync, statSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { join, resolve } from 'node:path';

const source = new URL('./entry.png', import.meta.url);
if (!existsSync(source)) {
  throw new Error('entry.png is missing from the repository');
}
const sourceSize = statSync(source).size;
if (sourceSize === 0) {
  throw new Error('entry.png is empty');
}
// A non-empty file is not necessarily a PNG: check the 8-byte signature
// so a corrupt or wrong file fails loudly instead of being submitted.
const PNG_SIGNATURE = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
const header = readFileSync(source).subarray(0, 8);
if (!header.equals(PNG_SIGNATURE)) {
  throw new Error('entry.png is not a valid PNG file');
}
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
const dest = join(outDir, 'entry.png');
// If the output directory is the repository itself, the copy is a no-op:
// copying a file onto itself would fail, and the entry is already there.
if (resolve(dest) !== resolve(source.pathname)) {
  copyFileSync(source, dest);
}
if (statSync(dest).size !== sourceSize) {
  throw new Error('entry.png did not copy completely');
}
// Size alone can hide a corrupted copy: confirm the bytes match exactly.
const sha256 = (path) => createHash('sha256').update(readFileSync(path)).digest('hex');
if (sha256(dest) !== sha256(source)) {
  throw new Error('entry.png copy does not match the source');
}
