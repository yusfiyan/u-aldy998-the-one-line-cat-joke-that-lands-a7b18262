// The One-Line Cat Joke That Lands — u-aldy998-the-one-line-cat-joke-that-lands-a7b18262
// Writes a single one-line cat joke (under 200 characters) to entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "My cat knocked my phone off the table, then looked at me like I'd dropped it.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

// Gate guard: the entry must be exactly one non-blank line of 1-200
// characters about a cat, matching the competition's gate.
if (
  JOKE.length < 1 ||
  JOKE.length > 200 ||
  JOKE.trim().length === 0 ||
  JOKE.includes("\n") ||
  !/cat/i.test(JOKE)
) {
  throw new Error(`Joke fails the gate: ${JSON.stringify(JOKE)}`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
