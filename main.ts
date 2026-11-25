import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "That homework was a burglar in a paper disguise \u2014 I ate it before it could steal the house, so really, you owe me a treat.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE, "utf8");
