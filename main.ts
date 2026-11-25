// The Moon Finally Answers Back — u-mang-the-moon-finally-answers-back-781a7ec1
// One line, in the voice of the Moon replying at last to everyone who has
// ever stared up at it: the wishes, the howls, the late-night promises.
// Winner of the local race: V2 beat all 8 generic benchmarks 8/8 and went
// 4/4 in the V1–V5 round-robin. 92 characters, one line.

import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "You howl at me every month and call it romance. I have been ghosted by entire civilizations.";

// Server gate, reproduced locally: UTF-8 text, 1–240 characters, one line,
// not only whitespace. Fail loudly instead of writing an invalid entry.
const chars = [...line].length;
if (chars < 1 || chars > 240 || line.includes("\n") || line.trim().length === 0) {
  throw new Error(`entry line fails the gate: ${chars} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
