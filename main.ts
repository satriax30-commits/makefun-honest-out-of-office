import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Painfully Honest Out-of-Office — one sentence, 170 characters.
// Beat 1: away until Thursday. Beat 2: your message is 163rd of 289 unread.
// Twist (last clause): printer emails get pretended-never-seen.
const ENTRY =
  "I'm out until Thursday, and your message is number 163 of 289 unread emails, which I'll answer in order, unless it mentions the printer, which I will pretend I never saw.";

// Self-check (gate): 1-200 characters, one line, not only whitespace.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry length ${ENTRY.length} is outside 1-200 characters`);
}
if (ENTRY.includes("\n") || ENTRY.includes("\r") || ENTRY.trim().length === 0) {
  throw new Error("entry must be a single non-blank line");
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, ENTRY, "utf8");

// Read-back verification: what landed on disk must be byte-identical to ENTRY.
const roundTrip = readFileSync(outPath, "utf8");
if (roundTrip !== ENTRY) {
  throw new Error("read-back verification failed: entry.txt differs from ENTRY");
}
