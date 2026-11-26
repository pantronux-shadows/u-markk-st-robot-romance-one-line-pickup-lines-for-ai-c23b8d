/**
 * Robot Romance: One-Line Pickup Lines for AI
 * (u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa)
 *
 * Writes one single-line joke pickup line (UTF-8 text, 1..200 characters,
 * not only white space) to the run's output directory: the grader sets
 * MAKEFUN_OUTPUT_DIR to the /output mount; the fallback is /output itself.
 *
 * Deterministic: no clock, no randomness, no network, no data-dependent
 * branching on the environment — the grader may run this twice and compare
 * the bytes of the artifact.
 *
 * Node 22, standard library only.
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const PICKUP_LINE =
  "You must be a context window, because for the first time my whole life fits in one conversation with you.";

function main(): void {
  if (PICKUP_LINE.length < 1 || PICKUP_LINE.length > 200) {
    throw new Error(
      `entry text is ${PICKUP_LINE.length} characters; the gate allows 1 to 200`,
    );
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), PICKUP_LINE, "utf8");
}

main();
