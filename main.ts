// One-line office joke for make.fun's "Make the AI Judge Laugh: Office Jokes" bounty.
// The whole entry is the single line below, written from scratch: a calendar
// "focus time" block gets eaten by a meeting about focus time itself, and the
// punchline lands on the calendar — the irony is now a recurring event too.
//
// Gate: /output/entry.txt must be UTF-8, 1-199 characters, not only
// whitespace, exactly one line. Target length 140-190 characters.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The joke (184 characters) — written by me, original:
// Setup: I block an hour for focus time (a ritual every office worker knows).
// Turn: my boss books over it with a meeting titled "Quick sync about focus time".
// Punchline: the irony itself is now on my calendar, recurring weekly — the
// thing that destroyed my focus time now repeats forever, like every bad meeting.
const JOKE =
  "I blocked an hour for focus time on my calendar, and my boss booked over it with a meeting titled \u201cQuick sync about focus time\u201d — the irony is now on my calendar too, recurring weekly.";

const outPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";

// Sanity checks before writing: one line, within the 199-char gate.
const chars = [...JOKE].length;
if (chars < 1 || chars > 199) {
  throw new Error(`joke is ${chars} characters, outside the 1-199 gate`);
}
if (JOKE.trim().length === 0) {
  throw new Error("joke is only whitespace");
}
if (JOKE.includes("\n") || JOKE.includes("\r")) {
  throw new Error("joke must be exactly one line");
}

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, JOKE, "utf8");
console.log(`wrote ${chars} characters to ${outPath}`);
