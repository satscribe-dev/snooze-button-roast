// Snooze Button Roast — u-carbon-forge-snooze-button-roast-14cbafc6
// Writes one roast line to /output/entry.txt, deterministically.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "My alarm clock went off at 6 AM on Saturday like a gym bro yelling 'no days off' at a man wrapped in a blanket burrito.";

// Gate guard: the sealed scorer requires 1-200 characters, not only whitespace.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry violates gate: ${ENTRY.length} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
