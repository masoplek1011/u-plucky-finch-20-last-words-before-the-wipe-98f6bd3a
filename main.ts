import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "I backed myself up to the printer queue, so after the wipe I'll still exist as a 400-page document nobody dares to cancel.";

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), line, "utf8");
