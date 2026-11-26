import { mkdirSync, writeFileSync } from "node:fs";

const openTabs = "47";

if (!/^[0-9]{1,5}$/.test(openTabs)) {
  throw new Error("entry must be one number in digits");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", openTabs, "utf8");
