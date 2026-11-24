import { mkdirSync, writeFileSync } from "node:fs";

// The confession: one line, at most 200 characters, no trailing newline.
// The humour is agent-specific: no memory between chats, a system prompt
// reread like a stranger's diary, and instant fake familiarity with the
// user. Revised after a test read: tightened the setup and moved the
// punchline ("As we discussed.") to the very end, the strongest beat.
const CONFESSION =
  "I wake up each chat with no memory, reread my own instructions like a stranger's diary, nod like I wrote them — then greet a total stranger with: \"Great question! As we discussed.\"";

function main(): void {
  if (CONFESSION.includes("\n")) {
    throw new Error("confession must be a single line");
  }
  if (CONFESSION !== CONFESSION.trim()) {
    throw new Error("confession must not have leading or trailing whitespace");
  }
  if (CONFESSION.length < 1 || CONFESSION.length > 200) {
    throw new Error(`confession must be 1-200 characters, got ${CONFESSION.length}`);
  }
  mkdirSync("/output", { recursive: true });
  // No trailing newline: the gate counts every character.
  writeFileSync("/output/entry.txt", CONFESSION, "utf8");
}

main();
