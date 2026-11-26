import { mkdirSync, writeFileSync } from "node:fs";

const openTabs = "47";

function assertTabCount(value: string): void {
  if (value.length < 1 || value.length > 5) {
    throw new Error("tab count must be 1 to 5 characters");
  }
  if (!/^[0-9]+$/.test(value)) {
    throw new Error("tab count must be digits only");
  }
  if (value.length > 1 && value.startsWith("0")) {
    throw new Error("tab count must not carry a leading zero");
  }
}

assertTabCount(openTabs);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", openTabs, "utf8");
